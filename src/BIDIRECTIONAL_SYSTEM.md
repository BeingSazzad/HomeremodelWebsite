# 🔄 Bidirectional System - How Both Roles Stay Connected

## **Overview**
This marketplace connects **Homeowners** and **Contractors** in real-time. Every action by one user affects what the other user sees.

---

## **📊 Shared Data Context** (`/context/ProjectContext.tsx`)

### **What It Does:**
- Stores ALL projects, bids, milestones, payments
- Updates automatically when either user takes action
- Both homeowner and contractor see the SAME data

### **Key Data Structures:**

```typescript
Project {
  id, title, description, budget, status
  homeowner: { name, avatar, ... }
  contractor: { name, avatar, acceptedBidAmount }
  milestones: [ ... ]
  updates: [ ... ]  // Activity feed
  overallProgress: 65%
}

Bid {
  id, projectId, contractorId
  bidAmount, duration, proposal
  status: 'Pending' | 'Accepted' | 'Rejected'
}

Milestone {
  id, name, description
  status: 'Pending' | 'In Progress' | 'Completed' | 'Approved'
  progress: 0-100%
  paymentAmount
}
```

---

## **🔄 Complete Bidirectional Flow**

### **Phase 1: Project Creation & Bidding**

| Homeowner Action | System Updates | Contractor Sees |
|-----------------|----------------|-----------------|
| Posts "Kitchen Renovation" project | `projects.push(newProject)` | Project appears in "Find Projects" |
| Sets budget: $45,000 | `project.budget = 45000` | Sees budget in project details |
| | | |
| **Contractor Action** | **System Updates** | **Homeowner Sees** |
| Submits bid: $43,000 | `bids.push(newBid)` | Bid appears in "Received Bids" |
| | `project.bidsReceived++` | Counter updates to "8 bids received" |
| Adds proposal & timeline | `bid.proposal = "..."` | Can read full proposal |

---

### **Phase 2: Bid Acceptance**

| Homeowner Action | System Updates | Contractor Sees |
|-----------------|----------------|-----------------|
| Clicks "Accept Bid" | `bid.status = 'Accepted'` | Bid status changes to "Accepted" |
| | `project.contractor = { ... }` | Project appears in "My Projects" |
| | `project.status = 'Pending Start'` | Can now start work |
| | `project.updates.push(...)` | Activity log updated |

**Contractor Dashboard Updates:**
- ✅ "My Bids" → Shows bid as "Accepted"  
- ✅ "My Projects" → Project now appears  
- ✅ "Dashboard" → Active projects count increases

---

### **Phase 3: Work Progress (Real-time Updates)**

| Contractor Action | System Updates | Homeowner Sees |
|------------------|----------------|----------------|
| Updates milestone: "Demolition 50%" | `milestone.progress = 50` | Progress bar moves to 50% |
| | `milestone.status = 'In Progress'` | Status badge changes |
| | `project.overallProgress recalculated` | Overall project progress updates |
| Completes milestone | `milestone.status = 'Completed'` | "Approve Work" button appears |
| | `milestone.completedDate = today` | Sees completion date |
| | `project.updates.push(...)` | Activity feed: "Demolition completed" |
| Uploads 3 photos | `update.photos = [...]` | Can view photos in activity feed |

**Homeowner Dashboard Updates:**
- ✅ "Active Work" → Real-time progress bars  
- ✅ "Dashboard" → Recent activity shows update  
- ✅ "Notifications" → "Milestone completed" alert

---

### **Phase 4: Payment Release**

| Homeowner Action | System Updates | Contractor Sees |
|-----------------|----------------|-----------------|
| Approves milestone | `milestone.status = 'Approved'` | Milestone marked as approved |
| | `project.updates.push(...)` | Activity: "Work approved by Jane" |
| Releases $5,000 payment | `project.totalPaid += 5000` | Payment received notification |
| | `project.updates.push(...)` | Activity: "$5,000 payment released" |

**Contractor Dashboard Updates:**
- ✅ "Earnings" → Shows new payment  
- ✅ "Dashboard" → Total earnings increases  
- ✅ "My Projects" → Budget tracking updates

---

### **Phase 5: Next Milestone**

| Contractor Action | System Updates | Homeowner Sees |
|------------------|----------------|----------------|
| Starts "Plumbing" milestone | `milestone.status = 'In Progress'` | Status changes in "Active Work" |
| Progress: 25%, 50%, 75% | `milestone.progress updates` | Real-time progress bar |
| Adds update: "Pipes installed" | `project.updates.push(...)` | Sees update in activity feed |
| Completes milestone | Cycle repeats → | Approve → Pay → Next

---

## **📱 Context Usage Examples**

### **Homeowner Side:**

```typescript
// In HomeownerActiveWork.tsx
import { useProjects } from '../context/ProjectContext';

function HomeownerActiveWork() {
  const { 
    projects, 
    approveMilestone, 
    releasePayment 
  } = useProjects();

  // Get homeowner's projects (id = 1)
  const myProjects = projects.filter(p => p.homeowner.id === 1);

  const handleApprove = (projectId, milestoneId) => {
    approveMilestone(projectId, milestoneId);
    // ✅ Updates project context
    // ✅ Contractor sees approval instantly
  };

  const handlePay = (projectId, milestoneId) => {
    releasePayment(projectId, milestoneId);
    // ✅ Updates project.totalPaid
    // ✅ Contractor sees payment in earnings
  };
}
```

### **Contractor Side:**

```typescript
// In ContractorProjectDetails.tsx
import { useProjects } from '../context/ProjectContext';

function ContractorProjectDetails() {
  const { 
    projects, 
    updateMilestoneProgress, 
    completeMilestone 
  } = useProjects();

  // Get contractor's projects (id = 101)
  const myProjects = projects.filter(p => p.contractor?.id === 101);

  const handleProgressUpdate = (projectId, milestoneId, progress) => {
    updateMilestoneProgress(projectId, milestoneId, progress);
    // ✅ Updates milestone.progress
    // ✅ Homeowner sees progress bar update
  };

  const handleComplete = (projectId, milestoneId) => {
    completeMilestone(projectId, milestoneId);
    // ✅ Marks as completed
    // ✅ Homeowner gets notification
    // ✅ "Approve" button appears for homeowner
  };
}
```

---

## **🎯 Real-time Synchronization**

### **Example Scenario:**

**10:00 AM - Contractor updates progress:**
```typescript
updateMilestoneProgress(1, 3, 75)
// Milestone: "Electrical & Plumbing" → 75%
```

**Homeowner sees (immediately):**
- ✅ Dashboard → "Electrical & Plumbing: 75%"
- ✅ Active Work → Progress bar moves to 75%
- ✅ Activity feed → "Updated 75% progress"

**10:30 AM - Contractor completes milestone:**
```typescript
completeMilestone(1, 3)
// Status: "Completed"
```

**Homeowner sees (immediately):**
- ✅ Active Work → Green checkmark appears
- ✅ "Approve Work" button enabled
- ✅ Notification: "Milestone completed"

**11:00 AM - Homeowner approves & pays:**
```typescript
approveMilestone(1, 3)
releasePayment(1, 3)
// $12,000 payment released
```

**Contractor sees (immediately):**
- ✅ My Projects → Milestone shows "Approved"
- ✅ Earnings → +$12,000 payment received
- ✅ Dashboard → Total earnings updated
- ✅ Activity: "Payment received from Jane Smith"

---

## **🔧 Key Functions in Context**

### **Contractor Functions:**
- `submitBid()` - Submit bid to project
- `updateMilestoneProgress()` - Update work progress
- `completeMilestone()` - Mark milestone done
- `addProjectUpdate()` - Add photos/notes

### **Homeowner Functions:**
- `acceptBid()` - Accept contractor's bid
- `rejectBid()` - Reject bid
- `approveMilestone()` - Approve completed work
- `releasePayment()` - Pay for milestone

### **Shared Functions:**
- `getProjectById()` - Get project details
- `getBidsByProject()` - Get all bids for a project
- `getProjectsByContractor()` - Contractor's projects
- `getProjectsByHomeowner()` - Homeowner's projects

---

## **📊 Activity Feed (Both Sides See)**

Every action creates an update in `project.updates[]`:

```typescript
{
  id: 5,
  date: "Just now",
  message: "Milestone 'Framing' completed",
  author: "contractor",
  authorName: "BuildPro Inc.",
  type: "milestone",
  photos: ["photo1.jpg", "photo2.jpg"]
}
```

**Visible to:**
- ✅ Homeowner → Active Work page
- ✅ Contractor → My Projects page
- ✅ Both → Dashboard activity feed

---

## **🎨 UI Indicators of Connection**

### **Homeowner Sees:**
- **Real-time progress bars** (from contractor updates)
- **Contractor name & avatar** (after accepting bid)
- **Latest photos uploaded** by contractor
- **Pending approval count**
- **Next payment amount & due date**

### **Contractor Sees:**
- **Homeowner name & avatar**
- **Payment status** (pending/released)
- **Approved milestones** (green checkmarks)
- **Total earned from this homeowner**
- **Review left by homeowner**

---

## **🚀 Future Enhancements**

### **1. Real-time Notifications:**
```typescript
// When contractor updates progress
sendNotification(homeownerId, "Progress updated to 75%")

// When homeowner releases payment
sendNotification(contractorId, "Payment received: $5,000")
```

### **2. WebSocket Integration:**
```typescript
// Live updates without refresh
socket.on('milestone_completed', (data) => {
  updateProjectContext(data)
})
```

### **3. Email Alerts:**
- Homeowner: "New bid received"
- Contractor: "Bid accepted!"
- Homeowner: "Milestone completed"
- Contractor: "Payment received"

---

## **✅ Summary**

| Action | Affects | Visible To |
|--------|---------|-----------|
| Post Project | `projects[]` | All contractors |
| Submit Bid | `bids[]`, `project.bidsReceived` | Homeowner |
| Accept Bid | `bid.status`, `project.contractor` | Both |
| Update Progress | `milestone.progress`, `project.overallProgress` | Homeowner |
| Complete Milestone | `milestone.status`, `project.updates` | Homeowner |
| Approve Work | `milestone.status = 'Approved'` | Contractor |
| Release Payment | `project.totalPaid` | Contractor |
| Leave Review | `contractor.rating`, `reviews[]` | Public |

**Everything is connected. Every action has a reaction. Both users see the same truth.** ✨

import { createContext, useContext, useState, ReactNode } from 'react';

// Shared project data that both homeowner and contractor can access
interface Project {
  id: number;
  title: string;
  description: string;
  category: string;
  budget: number;
  location: string;
  image: string;
  status: 'Draft' | 'Bidding' | 'Pending Start' | 'In Progress' | 'Completed' | 'Cancelled';
  homeowner: {
    id: number;
    name: string;
    avatar: string;
    location: string;
  };
  contractor?: {
    id: number;
    name: string;
    avatar: string;
    acceptedBidAmount: number;
  };
  postedDate: string;
  startDate?: string;
  estimatedCompletion?: string;
  actualCompletion?: string;
  bidsReceived: number;
  overallProgress: number;
  totalPaid: number;
  milestones: Milestone[];
  updates: ProjectUpdate[];
}

interface Milestone {
  id: number;
  name: string;
  description: string;
  status: 'Pending' | 'In Progress' | 'Completed' | 'Approved';
  progress: number;
  paymentAmount: number;
  dueDate: string;
  completedDate?: string;
  approvedDate?: string;
  approvedBy?: string;
}

interface ProjectUpdate {
  id: number;
  date: string;
  message: string;
  author: 'homeowner' | 'contractor';
  authorName: string;
  photos?: string[];
  type: 'milestone' | 'payment' | 'message' | 'status';
}

interface Bid {
  id: number;
  projectId: number;
  projectTitle: string;
  contractorId: number;
  contractor: {
    name: string;
    avatar: string;
    rating: number;
    completedProjects: number;
    responseRate: number;
    location: string;
  };
  bidAmount: number;
  duration: string;
  proposal: string;
  timeline: { phase: string; duration: string }[];
  status: 'Pending' | 'Accepted' | 'Rejected' | 'Withdrawn';
  submittedDate: string;
}

interface ProjectContextType {
  projects: Project[];
  bids: Bid[];
  updateMilestoneProgress: (projectId: number, milestoneId: number, progress: number) => void;
  completeMilestone: (projectId: number, milestoneId: number) => void;
  approveMilestone: (projectId: number, milestoneId: number) => void;
  releasePayment: (projectId: number, milestoneId: number) => void;
  acceptBid: (bidId: number) => void;
  rejectBid: (bidId: number) => void;
  addProjectUpdate: (projectId: number, update: Omit<ProjectUpdate, 'id'>) => void;
  submitBid: (bid: Omit<Bid, 'id' | 'status' | 'submittedDate'>) => void;
  getProjectById: (id: number) => Project | undefined;
  getBidsByProject: (projectId: number) => Bid[];
  getProjectsByContractor: (contractorId: number) => Project[];
  getProjectsByHomeowner: (homeownerId: number) => Project[];
}

const ProjectContext = createContext<ProjectContextType | undefined>(undefined);

// Mock initial data
const initialProjects: Project[] = [
  {
    id: 1,
    title: 'Modern Kitchen Renovation',
    description: 'Complete kitchen remodel including cabinets, countertops, and appliances',
    category: 'Kitchen',
    budget: 45000,
    location: 'Los Angeles, CA',
    image: 'https://images.unsplash.com/photo-1770063817031-f3b98dff347f?w=400',
    status: 'In Progress',
    homeowner: {
      id: 1,
      name: 'Jane Smith',
      avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100',
      location: 'Los Angeles, CA'
    },
    contractor: {
      id: 101,
      name: 'BuildPro Inc.',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100',
      acceptedBidAmount: 43000
    },
    postedDate: 'Jan 5, 2026',
    startDate: 'Jan 15, 2026',
    estimatedCompletion: 'Mar 15, 2026',
    bidsReceived: 8,
    overallProgress: 65,
    totalPaid: 15000,
    milestones: [
      { id: 1, name: 'Demolition', description: 'Remove old cabinets and appliances', status: 'Completed', progress: 100, paymentAmount: 5000, dueDate: 'Jan 20, 2026', completedDate: 'Jan 20, 2026', approvedDate: 'Jan 21, 2026' },
      { id: 2, name: 'Framing', description: 'Frame new walls and structures', status: 'Completed', progress: 100, paymentAmount: 10000, dueDate: 'Feb 1, 2026', completedDate: 'Feb 1, 2026', approvedDate: 'Feb 2, 2026' },
      { id: 3, name: 'Electrical & Plumbing', description: 'Install new electrical and plumbing', status: 'In Progress', progress: 65, paymentAmount: 12000, dueDate: 'Feb 18, 2026' },
      { id: 4, name: 'Cabinet Installation', description: 'Install new cabinets', status: 'Pending', progress: 0, paymentAmount: 8000, dueDate: 'Mar 1, 2026' },
      { id: 5, name: 'Countertops & Backsplash', description: 'Install countertops and tile backsplash', status: 'Pending', progress: 0, paymentAmount: 6000, dueDate: 'Mar 8, 2026' },
      { id: 6, name: 'Final Touches', description: 'Paint, hardware, and cleanup', status: 'Pending', progress: 0, paymentAmount: 2000, dueDate: 'Mar 15, 2026' }
    ],
    updates: [
      { id: 1, date: '2 days ago', message: 'Electrical rough-in completed and inspected', author: 'contractor', authorName: 'BuildPro Inc.', photos: ['photo1.jpg', 'photo2.jpg', 'photo3.jpg'], type: 'milestone' },
      { id: 2, date: '5 days ago', message: 'Plumbing lines installed', author: 'contractor', authorName: 'BuildPro Inc.', photos: ['photo4.jpg', 'photo5.jpg'], type: 'milestone' },
      { id: 3, date: '7 days ago', message: 'Payment released for framing milestone', author: 'homeowner', authorName: 'Jane Smith', type: 'payment' }
    ]
  },
  {
    id: 2,
    title: 'Master Bathroom Remodel',
    description: 'Luxury bathroom renovation with walk-in shower and modern fixtures',
    category: 'Bathroom',
    budget: 28000,
    location: 'Los Angeles, CA',
    image: 'https://images.unsplash.com/photo-1758448018619-4cbe2250b9ad?w=400',
    status: 'Bidding',
    homeowner: {
      id: 1,
      name: 'Jane Smith',
      avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100',
      location: 'Los Angeles, CA'
    },
    postedDate: 'Feb 10, 2026',
    bidsReceived: 12,
    overallProgress: 0,
    totalPaid: 0,
    milestones: [],
    updates: []
  },
  {
    id: 3,
    title: 'Deck Installation',
    description: 'New composite deck with pergola and outdoor lighting',
    category: 'Outdoor',
    budget: 32000,
    location: 'Santa Monica, CA',
    image: 'https://images.unsplash.com/photo-1759244565958-6a4f485108a1?w=400',
    status: 'Pending Start',
    homeowner: {
      id: 1,
      name: 'Jane Smith',
      avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100',
      location: 'Los Angeles, CA'
    },
    contractor: {
      id: 102,
      name: 'Elite Builders',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100',
      acceptedBidAmount: 31000
    },
    postedDate: 'Jan 28, 2026',
    startDate: 'Feb 20, 2026',
    estimatedCompletion: 'May 20, 2026',
    bidsReceived: 5,
    overallProgress: 0,
    totalPaid: 16000,
    milestones: [
      { id: 1, name: 'Site Preparation', description: 'Clear and level the site', status: 'Pending', progress: 0, paymentAmount: 5000, dueDate: 'Feb 25, 2026' },
      { id: 2, name: 'Foundation & Posts', description: 'Install foundation and support posts', status: 'Pending', progress: 0, paymentAmount: 8000, dueDate: 'Mar 10, 2026' },
      { id: 3, name: 'Decking Install', description: 'Install composite decking', status: 'Pending', progress: 0, paymentAmount: 10000, dueDate: 'Apr 5, 2026' },
      { id: 4, name: 'Railing & Stairs', description: 'Install railings and stairs', status: 'Pending', progress: 0, paymentAmount: 5000, dueDate: 'May 1, 2026' },
      { id: 5, name: 'Finishing & Sealing', description: 'Apply finish and seal', status: 'Pending', progress: 0, paymentAmount: 3000, dueDate: 'May 15, 2026' }
    ],
    updates: [
      { id: 1, date: '3 days ago', message: 'Initial deposit received', author: 'contractor', authorName: 'Elite Builders', type: 'payment' }
    ]
  }
];

const initialBids: Bid[] = [
  {
    id: 1,
    projectId: 2,
    projectTitle: 'Master Bathroom Remodel',
    contractorId: 101,
    contractor: {
      name: 'Mike Johnson',
      avatar: 'https://images.unsplash.com/photo-1724300489015-15bf8c4ee9d2?w=200',
      rating: 4.9,
      completedProjects: 142,
      responseRate: 98,
      location: 'Los Angeles, CA'
    },
    bidAmount: 26500,
    duration: '6 weeks',
    proposal: 'I have over 10 years of experience in luxury bathroom renovations. I can complete your project with high-quality materials and craftsmanship.',
    timeline: [
      { phase: 'Demolition & Prep', duration: '1 week' },
      { phase: 'Plumbing & Electrical', duration: '2 weeks' },
      { phase: 'Installation', duration: '2 weeks' },
      { phase: 'Finishing Touches', duration: '1 week' }
    ],
    status: 'Pending',
    submittedDate: 'Feb 12, 2026'
  },
  {
    id: 2,
    projectId: 2,
    projectTitle: 'Master Bathroom Remodel',
    contractorId: 102,
    contractor: {
      name: 'Sarah Williams',
      avatar: 'https://images.unsplash.com/photo-1635989410632-4735067a87bc?w=200',
      rating: 4.8,
      completedProjects: 98,
      responseRate: 95,
      location: 'Santa Monica, CA'
    },
    bidAmount: 29800,
    duration: '5 weeks',
    proposal: 'Specialized in modern bathroom designs. I provide 3D renderings before starting and offer a 2-year warranty on all work.',
    timeline: [
      { phase: 'Planning & Demo', duration: '1 week' },
      { phase: 'Rough-ins', duration: '1.5 weeks' },
      { phase: 'Tile & Fixtures', duration: '2 weeks' },
      { phase: 'Final Details', duration: '0.5 week' }
    ],
    status: 'Pending',
    submittedDate: 'Feb 13, 2026'
  }
];

export function ProjectProvider({ children }: { children: ReactNode }) {
  const [projects, setProjects] = useState<Project[]>(initialProjects);
  const [bids, setBids] = useState<Bid[]>(initialBids);

  // Update milestone progress (Contractor side)
  const updateMilestoneProgress = (projectId: number, milestoneId: number, progress: number) => {
    setProjects(prevProjects =>
      prevProjects.map(project => {
        if (project.id === projectId) {
          const updatedMilestones = project.milestones.map(milestone =>
            milestone.id === milestoneId
              ? { ...milestone, progress, status: progress === 100 ? 'Completed' : 'In Progress' as const }
              : milestone
          );
          
          // Calculate overall progress
          const totalProgress = updatedMilestones.reduce((sum, m) => sum + m.progress, 0);
          const overallProgress = Math.round(totalProgress / updatedMilestones.length);

          return {
            ...project,
            milestones: updatedMilestones,
            overallProgress
          };
        }
        return project;
      })
    );
  };

  // Complete milestone (Contractor marks as done)
  const completeMilestone = (projectId: number, milestoneId: number) => {
    setProjects(prevProjects =>
      prevProjects.map(project => {
        if (project.id === projectId) {
          const updatedMilestones = project.milestones.map(milestone =>
            milestone.id === milestoneId
              ? { 
                  ...milestone, 
                  status: 'Completed' as const, 
                  progress: 100,
                  completedDate: new Date().toLocaleDateString()
                }
              : milestone
          );

          return {
            ...project,
            milestones: updatedMilestones,
            updates: [
              {
                id: project.updates.length + 1,
                date: 'Just now',
                message: `Milestone "${updatedMilestones.find(m => m.id === milestoneId)?.name}" completed`,
                author: 'contractor' as const,
                authorName: project.contractor?.name || 'Contractor',
                type: 'milestone' as const
              },
              ...project.updates
            ]
          };
        }
        return project;
      })
    );
  };

  // Approve milestone (Homeowner approves work)
  const approveMilestone = (projectId: number, milestoneId: number) => {
    setProjects(prevProjects =>
      prevProjects.map(project => {
        if (project.id === projectId) {
          const updatedMilestones = project.milestones.map(milestone =>
            milestone.id === milestoneId
              ? { 
                  ...milestone, 
                  status: 'Approved' as const,
                  approvedDate: new Date().toLocaleDateString(),
                  approvedBy: project.homeowner.name
                }
              : milestone
          );

          return {
            ...project,
            milestones: updatedMilestones,
            updates: [
              {
                id: project.updates.length + 1,
                date: 'Just now',
                message: `Milestone "${updatedMilestones.find(m => m.id === milestoneId)?.name}" approved by homeowner`,
                author: 'homeowner' as const,
                authorName: project.homeowner.name,
                type: 'milestone' as const
              },
              ...project.updates
            ]
          };
        }
        return project;
      })
    );
  };

  // Release payment (Homeowner pays for milestone)
  const releasePayment = (projectId: number, milestoneId: number) => {
    setProjects(prevProjects =>
      prevProjects.map(project => {
        if (project.id === projectId) {
          const milestone = project.milestones.find(m => m.id === milestoneId);
          if (!milestone) return project;

          return {
            ...project,
            totalPaid: project.totalPaid + milestone.paymentAmount,
            updates: [
              {
                id: project.updates.length + 1,
                date: 'Just now',
                message: `Payment of $${milestone.paymentAmount.toLocaleString()} released for "${milestone.name}"`,
                author: 'homeowner' as const,
                authorName: project.homeowner.name,
                type: 'payment' as const
              },
              ...project.updates
            ]
          };
        }
        return project;
      })
    );
  };

  // Accept bid (Homeowner accepts a bid)
  const acceptBid = (bidId: number) => {
    const bid = bids.find(b => b.id === bidId);
    if (!bid) return;

    setBids(prevBids =>
      prevBids.map(b =>
        b.id === bidId ? { ...b, status: 'Accepted' as const } : b
      )
    );

    setProjects(prevProjects =>
      prevProjects.map(project => {
        if (project.id === bid.projectId) {
          return {
            ...project,
            status: 'Pending Start' as const,
            contractor: {
              id: bid.contractorId,
              name: bid.contractor.name,
              avatar: bid.contractor.avatar,
              acceptedBidAmount: bid.bidAmount
            },
            updates: [
              {
                id: project.updates.length + 1,
                date: 'Just now',
                message: `Bid accepted from ${bid.contractor.name} for $${bid.bidAmount.toLocaleString()}`,
                author: 'homeowner' as const,
                authorName: project.homeowner.name,
                type: 'status' as const
              },
              ...project.updates
            ]
          };
        }
        return project;
      })
    );
  };

  // Reject bid
  const rejectBid = (bidId: number) => {
    setBids(prevBids =>
      prevBids.map(b =>
        b.id === bidId ? { ...b, status: 'Rejected' as const } : b
      )
    );
  };

  // Add project update
  const addProjectUpdate = (projectId: number, update: Omit<ProjectUpdate, 'id'>) => {
    setProjects(prevProjects =>
      prevProjects.map(project => {
        if (project.id === projectId) {
          return {
            ...project,
            updates: [
              { ...update, id: project.updates.length + 1 },
              ...project.updates
            ]
          };
        }
        return project;
      })
    );
  };

  // Submit bid (Contractor submits a bid)
  const submitBid = (bid: Omit<Bid, 'id' | 'status' | 'submittedDate'>) => {
    const newBid: Bid = {
      ...bid,
      id: bids.length + 1,
      status: 'Pending',
      submittedDate: new Date().toLocaleDateString()
    };

    setBids(prev => [...prev, newBid]);

    // Update project bid count
    setProjects(prevProjects =>
      prevProjects.map(project => {
        if (project.id === bid.projectId) {
          return {
            ...project,
            bidsReceived: project.bidsReceived + 1
          };
        }
        return project;
      })
    );
  };

  // Helper functions
  const getProjectById = (id: number) => projects.find(p => p.id === id);
  const getBidsByProject = (projectId: number) => bids.filter(b => b.projectId === projectId);
  const getProjectsByContractor = (contractorId: number) => projects.filter(p => p.contractor?.id === contractorId);
  const getProjectsByHomeowner = (homeownerId: number) => projects.filter(p => p.homeowner.id === homeownerId);

  return (
    <ProjectContext.Provider
      value={{
        projects,
        bids,
        updateMilestoneProgress,
        completeMilestone,
        approveMilestone,
        releasePayment,
        acceptBid,
        rejectBid,
        addProjectUpdate,
        submitBid,
        getProjectById,
        getBidsByProject,
        getProjectsByContractor,
        getProjectsByHomeowner
      }}
    >
      {children}
    </ProjectContext.Provider>
  );
}

export function useProjects() {
  const context = useContext(ProjectContext);
  if (!context) {
    throw new Error('useProjects must be used within a ProjectProvider');
  }
  return context;
}

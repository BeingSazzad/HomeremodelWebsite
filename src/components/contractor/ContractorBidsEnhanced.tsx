import { useState } from 'react';
import { DollarSign, Calendar, MapPin, Clock, Eye, MessageSquare, CheckCircle, XCircle, AlertCircle } from 'lucide-react';
import { Button } from '../ui/button';
import { ProjectTimer } from '../projects/ProjectTimer';

interface Bid {
  id: string;
  projectTitle: string;
  status: 'pending' | 'accepted' | 'declined' | 'expired';
  budget: { min: number; max: number };
  location: string;
  postedAt: Date;
  image: string;
  bidAmount: number;
  submittedDate: string;
  homeownerName?: string; // Only for accepted bids
  declineReason?: string; // Optional feedback
}

interface ContractorBidsEnhancedProps {
  onViewBid: (bidId: string) => void;
  onNavigateToProject?: (bidId: string) => void; // Navigate to active project
}

// Mock bids with proper structure
const mockBids: Bid[] = [
  // PENDING - Still waiting for decision
  {
    id: '1',
    projectTitle: 'Modern Kitchen Renovation with Custom Cabinets',
    status: 'pending',
    budget: { min: 35000, max: 45000 },
    location: 'Austin, TX',
    postedAt: new Date(Date.now() - 6 * 60 * 60 * 1000), // 6 hours ago (18h remaining)
    image: 'https://images.unsplash.com/photo-1556911220-bff31c812dba?auto=format&fit=crop&w=400&h=300&q=80',
    bidAmount: 38000,
    submittedDate: 'Feb 10, 2026'
  },
  {
    id: '2',
    projectTitle: 'Luxury Bathroom Remodel with Marble Finishes',
    status: 'pending',
    budget: { min: 25000, max: 35000 },
    location: 'Dallas, TX',
    postedAt: new Date(Date.now() - 12 * 60 * 60 * 1000), // 12 hours ago (12h remaining)
    image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?auto=format&fit=crop&w=400&h=300&q=80',
    bidAmount: 28500,
    submittedDate: 'Feb 15, 2026'
  },
  
  // DECLINED - Not selected (kept for 30 days then archived)
  {
    id: '3',
    projectTitle: 'Backyard Patio and Outdoor Kitchen Setup',
    status: 'declined',
    budget: { min: 15000, max: 25000 },
    location: 'Houston, TX',
    postedAt: new Date(Date.now() - 25 * 60 * 60 * 1000), // Expired
    image: 'https://images.unsplash.com/photo-1556912167-f556f1f39faa?auto=format&fit=crop&w=400&h=300&q=80',
    bidAmount: 22000,
    submittedDate: 'Feb 1, 2026',
    declineReason: 'Homeowner selected another contractor'
  },

  // EXPIRED - Time ran out
  {
    id: '4',
    projectTitle: 'Whole Home Interior Painting',
    status: 'expired',
    budget: { min: 8000, max: 12000 },
    location: 'San Antonio, TX',
    postedAt: new Date(Date.now() - 26 * 60 * 60 * 1000), // 26 hours ago (expired)
    image: 'https://images.unsplash.com/photo-1556912173-46c336c7fd55?auto=format&fit=crop&w=400&h=300&q=80',
    bidAmount: 9500,
    submittedDate: 'Jan 28, 2026'
  }
];

const statusConfig = {
  'pending': {
    label: '⏳ Pending Review',
    description: 'Waiting for homeowner decision',
    bgColor: 'bg-[#fff7ed]',
    textColor: 'text-[#f9a825]',
    borderColor: 'border-[#f9a825]',
    icon: Clock
  },
  'accepted': {
    label: '✅ Accepted - Now in Projects',
    description: 'This work is now in your Active Projects',
    bgColor: 'bg-[#ecfdf5]',
    textColor: 'text-[#10b981]',
    borderColor: 'border-[#10b981]',
    icon: CheckCircle
  },
  'declined': {
    label: '❌ Not Selected',
    description: 'Homeowner chose another contractor',
    bgColor: 'bg-[#fef2f2]',
    textColor: 'text-[#ef4444]',
    borderColor: 'border-[#ef4444]',
    icon: XCircle
  },
  'expired': {
    label: '⏰ Expired',
    description: 'Bid expired after 24 hours',
    bgColor: 'bg-slate-100',
    textColor: 'text-slate-600',
    borderColor: 'border-slate-300',
    icon: AlertCircle
  }
};

export function ContractorBidsEnhanced({ onViewBid, onNavigateToProject }: ContractorBidsEnhancedProps) {
  const [activeTab, setActiveTab] = useState<'all' | 'pending' | 'declined' | 'expired'>('all');

  const filteredBids = mockBids.filter(bid => {
    // IMPORTANT: Accepted bids are NOT shown here - they're in "My Projects"
    if (bid.status === 'accepted') return false;
    
    if (activeTab === 'all') return true;
    return bid.status === activeTab;
  });

  const tabCounts = {
    all: mockBids.filter(b => b.status !== 'accepted').length,
    pending: mockBids.filter(b => b.status === 'pending').length,
    declined: mockBids.filter(b => b.status === 'declined').length,
    expired: mockBids.filter(b => b.status === 'expired').length
  };

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0
    }).format(amount);
  };

  return (
    <div className="bg-white rounded-xl p-8">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-slate-900 mb-2">My Bids</h1>
        <p className="text-slate-500">View and manage all your submitted bids</p>
      </div>

      {/* Tabs */}
      <div className="flex gap-2 mb-8 border-b border-slate-200">
        <button
          onClick={() => setActiveTab('all')}
          className={`px-6 py-3 font-medium transition-all border-b-2 ${
            activeTab === 'all'
              ? 'border-[#f9a825] text-[#f9a825]'
              : 'border-transparent text-slate-600 hover:text-slate-900'
          }`}
        >
          All ({tabCounts.all})
        </button>
        <button
          onClick={() => setActiveTab('pending')}
          className={`px-6 py-3 font-medium transition-all border-b-2 ${
            activeTab === 'pending'
              ? 'border-[#f9a825] text-[#f9a825]'
              : 'border-transparent text-slate-600 hover:text-slate-900'
          }`}
        >
          Pending ({tabCounts.pending})
        </button>
        <button
          onClick={() => setActiveTab('declined')}
          className={`px-6 py-3 font-medium transition-all border-b-2 ${
            activeTab === 'declined'
              ? 'border-[#f9a825] text-[#f9a825]'
              : 'border-transparent text-slate-600 hover:text-slate-900'
          }`}
        >
          Declined ({tabCounts.declined})
        </button>
        <button
          onClick={() => setActiveTab('expired')}
          className={`px-6 py-3 font-medium transition-all border-b-2 ${
            activeTab === 'expired'
              ? 'border-[#f9a825] text-[#f9a825]'
              : 'border-transparent text-slate-600 hover:text-slate-900'
          }`}
        >
          Expired ({tabCounts.expired})
        </button>
      </div>

      {/* Bids List */}
      <div className="space-y-4">
        {filteredBids.length === 0 ? (
          <div className="text-center py-12 bg-slate-50 rounded-lg">
            <Clock className="size-16 text-slate-300 mx-auto mb-4" />
            <p className="text-slate-500 text-lg">No bids in this category</p>
            <p className="text-slate-400 text-sm mt-2">
              {activeTab === 'pending' && 'Submit bids on available projects to see them here.'}
              {activeTab === 'declined' && 'Declined bids will appear here for reference.'}
              {activeTab === 'expired' && 'Expired bids will appear here.'}
            </p>
          </div>
        ) : (
          filteredBids.map(bid => {
            const config = statusConfig[bid.status];
            const StatusIcon = config.icon;

            return (
              <div
                key={bid.id}
                className="border border-slate-200 rounded-lg hover:shadow-lg transition-all p-6 bg-white"
              >
                <div className="flex gap-6">
                  {/* Project Image */}
                  <img
                    src={bid.image}
                    alt={bid.projectTitle}
                    className="w-32 h-32 object-cover rounded-lg flex-shrink-0"
                  />

                  {/* Bid Details */}
                  <div className="flex-1 min-w-0">
                    {/* Status Badge */}
                    <div className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full border ${config.bgColor} ${config.borderColor} mb-3`}>
                      <StatusIcon className={`size-4 ${config.textColor}`} />
                      <span className={`text-sm font-semibold ${config.textColor}`}>
                        {config.label}
                      </span>
                    </div>

                    {/* Project Title */}
                    <h3 className="text-xl font-bold text-slate-900 mb-2">
                      {bid.projectTitle}
                    </h3>

                    {/* Bid Info Grid */}
                    <div className="grid grid-cols-2 gap-4 mb-4">
                      <div className="flex items-center gap-2 text-sm">
                        <DollarSign className="size-4 text-slate-400" />
                        <span className="text-slate-700">
                          <span className="font-semibold text-[#f9a825]">Your Bid:</span> {formatCurrency(bid.bidAmount)}
                        </span>
                      </div>
                      <div className="flex items-center gap-2 text-sm">
                        <MapPin className="size-4 text-slate-400" />
                        <span className="text-slate-700">{bid.location}</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm">
                        <Calendar className="size-4 text-slate-400" />
                        <span className="text-slate-700">Submitted: {bid.submittedDate}</span>
                      </div>
                      {bid.status === 'pending' && (
                        <div>
                          <ProjectTimer 
                            postedAt={bid.postedAt} 
                            maxDuration={24 * 60 * 60}
                            compact={true}
                          />
                        </div>
                      )}
                    </div>

                    {/* Status-specific Messages */}
                    {bid.status === 'declined' && bid.declineReason && (
                      <div className="bg-red-50 border border-red-200 rounded-lg p-3 mb-4">
                        <p className="text-sm text-red-700">
                          <span className="font-semibold">Reason:</span> {bid.declineReason}
                        </p>
                      </div>
                    )}

                    {bid.status === 'expired' && (
                      <div className="bg-amber-50 border border-amber-200 rounded-lg p-3 mb-4">
                        <p className="text-sm text-amber-700">
                          <span className="font-semibold">Note:</span> This bid expired after 24 hours with no response from homeowner.
                        </p>
                      </div>
                    )}

                    {bid.status === 'pending' && (
                      <div className="bg-blue-50 border border-blue-200 rounded-lg p-3 mb-4">
                        <p className="text-sm text-blue-700">
                          <span className="font-semibold">Status:</span> {config.description}
                        </p>
                      </div>
                    )}

                    {/* Actions */}
                    <div className="flex flex-wrap gap-3">
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => onViewBid(bid.id)}
                        className="border-[#f9a825] text-[#f9a825] hover:bg-[#f9a825] hover:text-white"
                      >
                        <Eye className="size-4 mr-2" />
                        View Details
                      </Button>

                      {bid.status === 'pending' && (
                        <Button
                          variant="outline"
                          size="sm"
                          className="border-slate-300 text-slate-700 hover:bg-slate-100"
                        >
                          <MessageSquare className="size-4 mr-2" />
                          Contact Homeowner
                        </Button>
                      )}

                      {bid.status === 'declined' && (
                        <Button
                          variant="outline"
                          size="sm"
                          className="border-slate-300 text-slate-500"
                          disabled
                        >
                          <XCircle className="size-4 mr-2" />
                          Archived
                        </Button>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            );
          })
        )}
      </div>

      {/* Info Footer */}
      <div className="mt-8 bg-slate-50 border border-slate-200 rounded-lg p-6">
        <h3 className="font-semibold text-slate-900 mb-3">Bid Status Guide</h3>
        <div className="grid md:grid-cols-2 gap-4 text-sm">
          <div className="flex items-start gap-3">
            <Clock className="size-5 text-[#f9a825] flex-shrink-0 mt-0.5" />
            <div>
              <p className="font-semibold text-slate-900">Pending</p>
              <p className="text-slate-600">Homeowner is reviewing your bid. Projects close after 24 hours or 5 quotes.</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <CheckCircle className="size-5 text-green-600 flex-shrink-0 mt-0.5" />
            <div>
              <p className="font-semibold text-slate-900">Accepted → My Projects</p>
              <p className="text-slate-600">Congratulations! This work moves to your Active Projects automatically.</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <XCircle className="size-5 text-red-600 flex-shrink-0 mt-0.5" />
            <div>
              <p className="font-semibold text-slate-900">Declined</p>
              <p className="text-slate-600">Homeowner selected another contractor. Kept for 30 days then archived.</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <AlertCircle className="size-5 text-slate-500 flex-shrink-0 mt-0.5" />
            <div>
              <p className="font-semibold text-slate-900">Expired</p>
              <p className="text-slate-600">Project closed after 24 hours with no homeowner response.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
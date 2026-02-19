import { useState } from 'react';
import { DollarSign, Calendar, MapPin, Clock } from 'lucide-react';

interface Bid {
  id: string;
  projectTitle: string;
  status: 'pending' | 'accepted' | 'declined';
  budget: { min: number; max: number };
  deadline: string;
  location: string;
  daysRemaining: number;
  image: string;
  bidAmount: number;
  submittedDate: string;
}

interface ContractorBidsProps {
  onViewBid: (bidId: string) => void;
}

const mockBids: Bid[] = [
  {
    id: '1',
    projectTitle: 'Modern Kitchen Renovation with Custom Cabinets',
    status: 'pending',
    budget: { min: 35000, max: 45000 },
    deadline: '13 March 2026',
    location: 'Austin, TX',
    daysRemaining: 18,
    image: 'https://images.unsplash.com/photo-1762811003338-aef30274513b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBraXRjaGVuJTIwcmVub3ZhdGlvbiUyMGludGVyaW9yJTIwd2hpdGUlMjBjYWJpbmV0c3xlbnwxfHx8fDE3NzE0NjkzNTF8MA&ixlib=rb-4.1.0&q=80&w=400',
    bidAmount: 38000,
    submittedDate: 'Feb 10, 2026'
  },
  {
    id: '2',
    projectTitle: 'Modern Kitchen Renovation with Custom Cabinets',
    status: 'accepted',
    budget: { min: 35000, max: 45000 },
    deadline: '13 March 2026',
    location: 'Austin, TX',
    daysRemaining: 15,
    image: 'https://images.unsplash.com/photo-1762811003338-aef30274513b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBraXRjaGVuJTIwcmVub3ZhdGlvbiUyMGludGVyaW9yJTIwd2hpdGUlMjBjYWJpbmV0c3xlbnwxfHx8fDE3NzE0NjkzNTF8MA&ixlib=rb-4.1.0&q=80&w=400',
    bidAmount: 40000,
    submittedDate: 'Feb 5, 2026'
  },
  {
    id: '3',
    projectTitle: 'Modern Kitchen Renovation with Custom Cabinets',
    status: 'declined',
    budget: { min: 35000, max: 45000 },
    deadline: '13 March 2026',
    location: 'Austin, TX',
    daysRemaining: 15,
    image: 'https://images.unsplash.com/photo-1762811003338-aef30274513b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBraXRjaGVuJTIwcmVub3ZhdGlvbiUyMGludGVyaW9yJTIwd2hpdGUlMjBjYWJpbmV0c3xlbnwxfHx8fDE3NzE0NjkzNTF8MA&ixlib=rb-4.1.0&q=80&w=400',
    bidAmount: 42000,
    submittedDate: 'Feb 1, 2026'
  },
];

const statusConfig = {
  'pending': {
    label: 'Pending',
    bgColor: 'bg-[#fff7ed]',
    textColor: 'text-[#f9a825]',
    borderColor: 'border-[#f9a825]'
  },
  'accepted': {
    label: 'Accepted',
    bgColor: 'bg-[#ecfdf5]',
    textColor: 'text-[#10b981]',
    borderColor: 'border-[#10b981]'
  },
  'declined': {
    label: 'Declined',
    bgColor: 'bg-[#fef2f2]',
    textColor: 'text-[#ef4444]',
    borderColor: 'border-[#ef4444]'
  }
};

export function ContractorBids({ onViewBid }: ContractorBidsProps) {
  const [activeTab, setActiveTab] = useState<'all' | 'pending' | 'accepted' | 'declined'>('all');

  const filteredBids = activeTab === 'all' 
    ? mockBids 
    : mockBids.filter(b => b.status === activeTab);

  const bidCounts = {
    all: mockBids.length,
    'pending': mockBids.filter(b => b.status === 'pending').length,
    'accepted': mockBids.filter(b => b.status === 'accepted').length,
    'declined': mockBids.filter(b => b.status === 'declined').length,
  };

  return (
    <div className="flex-1 bg-white rounded-xl p-8">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-slate-900 mb-2">My Bids</h1>
        <p className="text-slate-500">View and manage all your submitted bids</p>
      </div>

      {/* Tabs */}
      <div className="flex items-center gap-6 border-b-2 border-slate-100 mb-8">
        <button
          onClick={() => setActiveTab('all')}
          className={`pb-3 px-2 relative transition-colors ${
            activeTab === 'all' ? 'text-[#f9a825]' : 'text-slate-600 hover:text-slate-900'
          }`}
        >
          <span className="font-medium">All</span>
          <span className="ml-2 text-sm">({bidCounts.all})</span>
          {activeTab === 'all' && (
            <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#f9a825]" />
          )}
        </button>
        
        <button
          onClick={() => setActiveTab('pending')}
          className={`pb-3 px-2 relative transition-colors ${
            activeTab === 'pending' ? 'text-[#f9a825]' : 'text-slate-600 hover:text-slate-900'
          }`}
        >
          <span className="font-medium">Pending</span>
          <span className="ml-2 text-sm">({bidCounts.pending})</span>
          {activeTab === 'pending' && (
            <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#f9a825]" />
          )}
        </button>
        
        <button
          onClick={() => setActiveTab('accepted')}
          className={`pb-3 px-2 relative transition-colors ${
            activeTab === 'accepted' ? 'text-[#f9a825]' : 'text-slate-600 hover:text-slate-900'
          }`}
        >
          <span className="font-medium">Accepted</span>
          <span className="ml-2 text-sm">({bidCounts.accepted})</span>
          {activeTab === 'accepted' && (
            <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#f9a825]" />
          )}
        </button>
        
        <button
          onClick={() => setActiveTab('declined')}
          className={`pb-3 px-2 relative transition-colors ${
            activeTab === 'declined' ? 'text-[#f9a825]' : 'text-slate-600 hover:text-slate-900'
          }`}
        >
          <span className="font-medium">Declined</span>
          <span className="ml-2 text-sm">({bidCounts.declined})</span>
          {activeTab === 'declined' && (
            <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#f9a825]" />
          )}
        </button>
      </div>

      {/* Bids List */}
      <div className="space-y-4">
        {filteredBids.map((bid) => {
          const config = statusConfig[bid.status];
          
          return (
            <div
              key={bid.id}
              onClick={() => onViewBid(bid.id)}
              className="bg-white border border-slate-200 rounded-xl p-4 hover:shadow-md transition-all cursor-pointer group"
            >
              <div className="flex gap-4">
                {/* Project Image */}
                <div className="relative w-28 h-28 flex-shrink-0 rounded-lg overflow-hidden">
                  <img 
                    src={bid.image} 
                    alt={bid.projectTitle}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                  />
                  <div className={`absolute top-2 left-2 ${config.bgColor} ${config.textColor} px-2 py-1 rounded-md text-xs font-medium border ${config.borderColor}`}>
                    {config.label}
                  </div>
                </div>

                {/* Bid Info */}
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-slate-900 mb-3 group-hover:text-[#f9a825] transition-colors">
                    {bid.projectTitle}
                  </h3>
                  
                  <div className="grid grid-cols-2 gap-3">
                    <div className="flex items-center gap-2 text-sm text-slate-600">
                      <DollarSign className="size-4 text-[#f9a825]" />
                      <span className="font-medium">Your Bid:</span>
                      <span className="font-bold text-slate-900">${bid.bidAmount.toLocaleString()}</span>
                    </div>
                    
                    <div className="flex items-center gap-2 text-sm text-slate-600">
                      <Calendar className="size-4 text-[#f9a825]" />
                      <span className="font-medium">Submitted:</span>
                      <span>{bid.submittedDate}</span>
                    </div>
                    
                    <div className="flex items-center gap-2 text-sm text-slate-600">
                      <MapPin className="size-4 text-[#f9a825]" />
                      <span className="font-medium">{bid.location}</span>
                    </div>
                    
                    <div className="flex items-center gap-2 text-sm text-slate-600">
                      <Clock className="size-4 text-[#f9a825]" />
                      <span>{bid.daysRemaining} Days Remaining</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Empty State */}
      {filteredBids.length === 0 && (
        <div className="text-center py-16">
          <div className="size-20 bg-slate-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg className="size-10 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
          </div>
          <h3 className="text-lg font-semibold text-slate-900 mb-2">No {activeTab !== 'all' ? activeTab : ''} bids</h3>
          <p className="text-slate-500">
            {activeTab === 'all' 
              ? "You haven't submitted any bids yet. Browse available projects to get started!"
              : `You don't have any ${activeTab} bids at the moment.`}
          </p>
        </div>
      )}
    </div>
  );
}

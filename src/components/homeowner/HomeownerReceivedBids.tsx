import { useState } from 'react';
import { Search, Filter, Calendar, DollarSign, Star, CheckCircle, X, Eye, MessageSquare, TrendingUp, Award, FileText } from 'lucide-react';
import { Button } from '../ui/button';

const receivedBids = [
  {
    id: 1,
    projectTitle: 'Master Bathroom Remodel',
    projectId: 2,
    contractor: {
      name: 'Mike Johnson',
      avatar: 'https://images.unsplash.com/photo-1724300489015-15bf8c4ee9d2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=200',
      rating: 4.9,
      completedProjects: 142,
      responseRate: 98,
      location: 'Los Angeles, CA'
    },
    bidAmount: 26500,
    originalBudget: 28000,
    duration: '6 weeks',
    receivedDate: '2 days ago',
    status: 'Pending',
    proposal: 'I have over 10 years of experience in luxury bathroom renovations. I can complete your project with high-quality materials and craftsmanship.',
    timeline: [
      { phase: 'Demolition & Prep', duration: '1 week' },
      { phase: 'Plumbing & Electrical', duration: '2 weeks' },
      { phase: 'Installation', duration: '2 weeks' },
      { phase: 'Finishing Touches', duration: '1 week' }
    ]
  },
  {
    id: 2,
    projectTitle: 'Master Bathroom Remodel',
    projectId: 2,
    contractor: {
      name: 'Sarah Williams',
      avatar: 'https://images.unsplash.com/photo-1635989410632-4735067a87bc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=200',
      rating: 4.8,
      completedProjects: 98,
      responseRate: 95,
      location: 'Santa Monica, CA'
    },
    bidAmount: 29800,
    originalBudget: 28000,
    duration: '5 weeks',
    receivedDate: '1 day ago',
    status: 'Pending',
    proposal: 'Specialized in modern bathroom designs. I provide 3D renderings before starting and offer a 2-year warranty on all work.',
    timeline: [
      { phase: 'Planning & Demo', duration: '1 week' },
      { phase: 'Rough-ins', duration: '1.5 weeks' },
      { phase: 'Tile & Fixtures', duration: '2 weeks' },
      { phase: 'Final Details', duration: '0.5 week' }
    ]
  },
  {
    id: 3,
    projectTitle: 'Modern Kitchen Renovation',
    projectId: 1,
    contractor: {
      name: 'David Chen',
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&h=200&fit=crop',
      rating: 5.0,
      completedProjects: 215,
      responseRate: 100,
      location: 'Beverly Hills, CA'
    },
    bidAmount: 44000,
    originalBudget: 45000,
    duration: '8 weeks',
    receivedDate: '5 days ago',
    status: 'Pending',
    proposal: 'Award-winning kitchen designer with expertise in modern aesthetics. Premium materials and exceptional attention to detail guaranteed.',
    timeline: [
      { phase: 'Demo & Structural', duration: '1 week' },
      { phase: 'Electrical & Plumbing', duration: '2 weeks' },
      { phase: 'Cabinet Installation', duration: '2 weeks' },
      { phase: 'Countertops & Appliances', duration: '2 weeks' },
      { phase: 'Final Touches', duration: '1 week' }
    ]
  }
];

export function HomeownerReceivedBids({ onViewBid }: { onViewBid: (id: number) => void }) {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedProject, setSelectedProject] = useState<string>('all');

  const filteredBids = receivedBids.filter(bid => {
    const matchesSearch = bid.contractor.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         bid.projectTitle.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesProject = selectedProject === 'all' || bid.projectId.toString() === selectedProject;
    return matchesSearch && matchesProject;
  });

  const renderStars = (rating: number) => {
    return (
      <div className="flex items-center gap-1">
        {[1, 2, 3, 4, 5].map((star) => (
          <Star
            key={star}
            className={`size-4 ${
              star <= rating ? 'fill-[#f9a825] text-[#f9a825]' : 'fill-slate-200 text-slate-200'
            }`}
          />
        ))}
      </div>
    );
  };

  return (
    <div className="bg-white rounded-xl p-8">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-slate-900 mb-2">Received Bids</h1>
        <p className="text-slate-500">Review and compare bids from contractors for your projects.</p>
      </div>

      {/* Filters & Search */}
      <div className="flex flex-col md:flex-row gap-4 mb-8">
        <div className="flex-1 relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 size-5 text-slate-400" />
          <input
            type="text"
            placeholder="Search by contractor or project..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-3 border border-slate-200 rounded-lg focus:ring-2 focus:ring-[#f9a825] focus:border-transparent outline-none"
          />
        </div>
        
        <select
          value={selectedProject}
          onChange={(e) => setSelectedProject(e.target.value)}
          className="px-4 py-3 border border-slate-200 rounded-lg focus:ring-2 focus:ring-[#f9a825] focus:border-transparent outline-none bg-white"
        >
          <option value="all">All Projects</option>
          <option value="1">Modern Kitchen Renovation</option>
          <option value="2">Master Bathroom Remodel</option>
          <option value="3">Deck Installation</option>
        </select>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
        <div className="bg-blue-50 rounded-lg p-4 border border-blue-200">
          <p className="text-sm text-slate-600 mb-1">Total Bids</p>
          <p className="text-2xl font-bold text-blue-600">{receivedBids.length}</p>
        </div>
        <div className="bg-[#fffbf0] rounded-lg p-4 border border-[#f9a825]/20">
          <p className="text-sm text-slate-600 mb-1">Pending Review</p>
          <p className="text-2xl font-bold text-[#f9a825]">{receivedBids.filter(b => b.status === 'Pending').length}</p>
        </div>
        <div className="bg-green-50 rounded-lg p-4 border border-green-200">
          <p className="text-sm text-slate-600 mb-1">Accepted</p>
          <p className="text-2xl font-bold text-green-600">2</p>
        </div>
        <div className="bg-slate-50 rounded-lg p-4 border border-slate-200">
          <p className="text-sm text-slate-600 mb-1">Average Bid</p>
          <p className="text-2xl font-bold text-slate-900">$33K</p>
        </div>
      </div>

      {/* Bids List */}
      <div className="space-y-6">
        {filteredBids.map((bid) => {
          const savingsAmount = bid.originalBudget - bid.bidAmount;
          const savingsPercent = ((savingsAmount / bid.originalBudget) * 100).toFixed(0);
          const isBelowBudget = bid.bidAmount <= bid.originalBudget;

          return (
            <div 
              key={bid.id}
              className="border border-slate-200 rounded-xl p-6 hover:shadow-lg transition-all"
            >
              {/* Project Title */}
              <div className="mb-4 pb-4 border-b border-slate-200">
                <h3 className="font-semibold text-slate-900">Project: {bid.projectTitle}</h3>
                <p className="text-sm text-slate-500">Received {bid.receivedDate}</p>
              </div>

              <div className="flex flex-col lg:flex-row gap-6">
                {/* Contractor Info */}
                <div className="flex items-start gap-4 flex-1">
                  <img 
                    src={bid.contractor.avatar} 
                    alt={bid.contractor.name}
                    className="size-20 rounded-full object-cover flex-shrink-0 border-2 border-slate-200"
                  />
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-slate-900 mb-2">{bid.contractor.name}</h3>
                    
                    <div className="flex items-center gap-2 mb-2">
                      {renderStars(bid.contractor.rating)}
                      <span className="font-semibold text-slate-900">{bid.contractor.rating}</span>
                      <span className="text-slate-500 text-sm">({bid.contractor.completedProjects} projects)</span>
                    </div>

                    <div className="grid grid-cols-2 gap-3 text-sm mb-4">
                      <div className="flex items-center gap-2 text-slate-600">
                        <CheckCircle className="size-4 text-green-500" />
                        <span>{bid.contractor.responseRate}% Response Rate</span>
                      </div>
                      <div className="flex items-center gap-2 text-slate-600">
                        <svg className="size-4" fill="none" viewBox="0 0 16 16">
                          <path d="M8 2C5.79 2 4 3.79 4 6C4 8.5 8 14 8 14C8 14 12 8.5 12 6C12 3.79 10.21 2 8 2Z" stroke="#F9A825" strokeWidth="1.5"/>
                          <path d="M8 7.5C8.82843 7.5 9.5 6.82843 9.5 6C9.5 5.17157 8.82843 4.5 8 4.5C7.17157 4.5 6.5 5.17157 6.5 6C6.5 6.82843 7.17157 7.5 8 7.5Z" stroke="#F9A825" strokeWidth="1.5"/>
                        </svg>
                        <span>{bid.contractor.location}</span>
                      </div>
                    </div>

                    <p className="text-slate-700 text-sm leading-relaxed bg-slate-50 p-4 rounded-lg">
                      {bid.proposal}
                    </p>
                  </div>
                </div>

                {/* Bid Details */}
                <div className="lg:w-80 space-y-4">
                  {/* Pricing Card */}
                  <div className="bg-gradient-to-br from-[#fffbf0] to-[#fff8e1] border border-[#f9a825]/30 rounded-xl p-5">
                    <p className="text-sm text-slate-600 mb-2">Bid Amount</p>
                    <p className="text-4xl font-bold text-slate-900 mb-3">
                      ${bid.bidAmount.toLocaleString()}
                    </p>
                    
                    {isBelowBudget && savingsAmount > 0 && (
                      <div className="flex items-center gap-2 text-green-600 text-sm font-medium bg-green-50 px-3 py-2 rounded-lg">
                        <TrendingUp className="size-4" />
                        <span>${savingsAmount.toLocaleString()} under budget ({savingsPercent}% savings)</span>
                      </div>
                    )}
                    {!isBelowBudget && (
                      <div className="flex items-center gap-2 text-red-600 text-sm font-medium bg-red-50 px-3 py-2 rounded-lg">
                        <span>${Math.abs(savingsAmount).toLocaleString()} over budget</span>
                      </div>
                    )}
                  </div>

                  {/* Duration */}
                  <div className="bg-white border border-slate-200 rounded-lg p-4">
                    <div className="flex items-center gap-2 text-sm text-slate-600 mb-2">
                      <Calendar className="size-4 text-slate-600" />
                      <span className="font-semibold">Duration</span>
                    </div>
                    <p className="text-2xl font-bold text-slate-900">{bid.duration}</p>
                  </div>

                  {/* Timeline Preview */}
                  <div className="bg-white border border-slate-200 rounded-lg p-4">
                    <p className="text-sm font-semibold text-slate-900 mb-3">Project Timeline</p>
                    <div className="space-y-2">
                      {bid.timeline.slice(0, 3).map((phase, index) => (
                        <div key={index} className="flex items-center justify-between text-xs">
                          <span className="text-slate-600">{phase.phase}</span>
                          <span className="font-semibold text-slate-900">{phase.duration}</span>
                        </div>
                      ))}
                      {bid.timeline.length > 3 && (
                        <p className="text-xs text-[#f9a825] font-medium">+{bid.timeline.length - 3} more phases</p>
                      )}
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="space-y-2">
                    <Button 
                      className="w-full bg-green-600 hover:bg-green-700 text-white"
                    >
                      <CheckCircle className="size-4 mr-2" />
                      Accept Bid
                    </Button>
                    <Button 
                      variant="outline"
                      className="w-full border-slate-200"
                      onClick={() => onViewBid(bid.id)}
                    >
                      <Eye className="size-4 mr-2" />
                      View Full Details
                    </Button>
                    <div className="grid grid-cols-2 gap-2">
                      <Button 
                        variant="outline"
                        className="border-slate-200"
                      >
                        <MessageSquare className="size-4 mr-2" />
                        Message
                      </Button>
                      <Button 
                        variant="outline"
                        className="border-red-200 text-red-600 hover:bg-red-50"
                      >
                        <X className="size-4 mr-2" />
                        Decline
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {filteredBids.length === 0 && (
        <div className="text-center py-16">
          <div className="size-20 bg-slate-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <FileText className="size-10 text-slate-400" />
          </div>
          <h3 className="text-xl font-semibold text-slate-900 mb-2">No bids found</h3>
          <p className="text-slate-500">Try adjusting your search or filters</p>
        </div>
      )}
    </div>
  );
}
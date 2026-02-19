import { 
  FolderOpen, 
  FileText, 
  DollarSign, 
  CheckCircle,
  Clock,
  ArrowUpRight,
  ArrowDownRight,
  Plus,
  MessageSquare,
  Calendar,
  Eye,
  TrendingDown
} from 'lucide-react';
import { Button } from '../ui/button';

interface StatCardProps {
  title: string;
  value: string | number;
  change?: {
    value: number;
    type: 'increase' | 'decrease';
  };
  icon: React.ReactNode;
  bgColor: string;
  iconColor: string;
}

function StatCard({ title, value, change, icon, bgColor, iconColor }: StatCardProps) {
  return (
    <div className="bg-white border border-slate-200 rounded-xl p-6 hover:shadow-lg transition-all">
      <div className="flex items-start justify-between mb-4">
        <div className={`size-12 ${bgColor} rounded-lg flex items-center justify-center`}>
          <div className={iconColor}>
            {icon}
          </div>
        </div>
        {change && (
          <div className={`flex items-center gap-1 text-sm font-medium ${
            change.type === 'increase' ? 'text-green-600' : 'text-red-600'
          }`}>
            {change.type === 'increase' ? (
              <ArrowUpRight className="size-4" />
            ) : (
              <ArrowDownRight className="size-4" />
            )}
            <span>{change.value}%</span>
          </div>
        )}
      </div>
      <h3 className="text-2xl font-bold text-slate-900 mb-1">{value}</h3>
      <p className="text-sm text-slate-500">{title}</p>
    </div>
  );
}

const activeProjects = [
  {
    id: 1,
    title: 'Modern Kitchen Renovation',
    image: 'https://images.unsplash.com/photo-1770063817031-f3b98dff347f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBraXRjaGVuJTIwcmVub3ZhdGlvbiUyMGJlYXV0aWZ1bHxlbnwxfHx8fDE3NzE0NzI4MjZ8MA&ixlib=rb-4.1.0&q=80&w=400',
    status: 'In Progress',
    progress: 65,
    contractor: 'BuildPro Inc.',
    dueDate: 'Mar 15, 2026',
    budget: '$45,000',
    bidsReceived: 8
  },
  {
    id: 2,
    title: 'Master Bathroom Remodel',
    image: 'https://images.unsplash.com/photo-1758448018619-4cbe2250b9ad?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiYXRocm9vbSUyMHJlbW9kZWwlMjBsdXh1cnl8ZW58MXx8fHwxNzcxNDY1NzY5fDA&ixlib=rb-4.1.0&q=80&w=400',
    status: 'Bidding',
    progress: 0,
    contractor: null,
    dueDate: 'Apr 1, 2026',
    budget: '$28,000',
    bidsReceived: 12
  },
  {
    id: 3,
    title: 'Deck Installation',
    image: 'https://images.unsplash.com/photo-1759244565958-6a4f485108a1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxob21lJTIwZGVjayUyMGluc3RhbGxhdGlvbiUyMG91dGRvb3J8ZW58MXx8fHwxNzcxNDcyODI3fDA&ixlib=rb-4.1.0&q=80&w=400',
    status: 'Pending Start',
    progress: 0,
    contractor: 'Elite Builders',
    dueDate: 'May 20, 2026',
    budget: '$32,000',
    bidsReceived: 5
  }
];

const pendingBids = [
  {
    id: 1,
    contractor: 'Mike Johnson',
    contractorAvatar: 'https://images.unsplash.com/photo-1724300489015-15bf8c4ee9d2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBjb250cmFjdG9yJTIwaGVhZHNob3QlMjBtYW58ZW58MXx8fHwxNzcxNDcyODI3fDA&ixlib=rb-4.1.0&q=80&w=200',
    project: 'Master Bathroom Remodel',
    bidAmount: '$26,500',
    duration: '6 weeks',
    rating: 4.9,
    completedProjects: 142,
    receivedDate: '2 days ago'
  },
  {
    id: 2,
    contractor: 'Sarah Williams',
    contractorAvatar: 'https://images.unsplash.com/photo-1635989410632-4735067a87bc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBjb250cmFjdG9yJTIwaGVhZHNob3QlMjB3b21hbnxlbnwxfHx8fDE3NzE0NzI4Mjh8MA&ixlib=rb-4.1.0&q=80&w=200',
    project: 'Master Bathroom Remodel',
    bidAmount: '$29,800',
    duration: '5 weeks',
    rating: 4.8,
    completedProjects: 98,
    receivedDate: '1 day ago'
  }
];

export function HomeownerDashboardHome({ onNavigate }: { onNavigate: (page: string) => void }) {
  return (
    <div className="flex-1 bg-white rounded-xl p-8">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-slate-900 mb-2">Welcome Back, Jane!</h1>
        <p className="text-slate-500">Here's an overview of your home improvement projects.</p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <StatCard
          title="Active Projects"
          value="5"
          change={{ value: 2, type: 'increase' }}
          icon={<FolderOpen className="size-6" />}
          bgColor="bg-blue-100"
          iconColor="text-blue-600"
        />
        <StatCard
          title="Pending Bids"
          value="12"
          change={{ value: 8, type: 'increase' }}
          icon={<FileText className="size-6" />}
          bgColor="bg-[#fffbf0]"
          iconColor="text-[#f9a825]"
        />
        <StatCard
          title="Total Spent"
          value="$85K"
          change={{ value: 15, type: 'increase' }}
          icon={<DollarSign className="size-6" />}
          bgColor="bg-green-100"
          iconColor="text-green-600"
        />
        <StatCard
          title="Completed Projects"
          value="7"
          icon={<CheckCircle className="size-6" />}
          bgColor="bg-purple-100"
          iconColor="text-purple-600"
        />
      </div>

      {/* Quick Actions & Activity */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
        {/* Quick Actions */}
        <div className="bg-white border border-slate-200 rounded-xl p-6">
          <h2 className="text-lg font-bold text-slate-900 mb-5">Quick Actions</h2>
          <div className="space-y-3">
            <Button
              onClick={() => onNavigate('post-project')}
              className="w-full bg-[#f9a825] hover:bg-[#e69b20] text-white justify-start"
            >
              <Plus className="size-4 mr-2" />
              Post New Project
            </Button>
            <Button
              onClick={() => onNavigate('received-bids')}
              variant="outline"
              className="w-full justify-start border-slate-200"
            >
              <FileText className="size-4 mr-2" />
              Review Bids
            </Button>
            <Button
              onClick={() => onNavigate('my-projects')}
              variant="outline"
              className="w-full justify-start border-slate-200"
            >
              <FolderOpen className="size-4 mr-2" />
              View All Projects
            </Button>
            <Button
              onClick={() => onNavigate('messages')}
              variant="outline"
              className="w-full justify-start border-slate-200"
            >
              <MessageSquare className="size-4 mr-2" />
              Messages
            </Button>
          </div>

          {/* Budget Overview */}
          <div className="mt-8 pt-6 border-t border-slate-200">
            <h3 className="font-semibold text-slate-900 mb-4 flex items-center gap-2">
              <DollarSign className="size-4 text-[#f9a825]" />
              Budget Overview
            </h3>
            <div className="space-y-3">
              <div className="flex items-center justify-between text-sm">
                <span className="text-slate-600">Total Budget</span>
                <span className="font-semibold text-slate-900">$105,000</span>
              </div>
              <div className="flex items-center justify-between text-sm">
                <span className="text-slate-600">Spent</span>
                <span className="font-semibold text-green-600">$85,000</span>
              </div>
              <div className="flex items-center justify-between text-sm">
                <span className="text-slate-600">Remaining</span>
                <span className="font-semibold text-[#f9a825]">$20,000</span>
              </div>
              {/* Progress Bar */}
              <div className="w-full bg-slate-100 rounded-full h-2 mt-3">
                <div 
                  className="bg-gradient-to-r from-green-500 to-[#f9a825] h-2 rounded-full transition-all"
                  style={{ width: '81%' }}
                />
              </div>
            </div>
          </div>
        </div>

        {/* Recent Activity */}
        <div className="lg:col-span-2 bg-white border border-slate-200 rounded-xl p-6">
          <div className="flex items-center justify-between mb-5">
            <h2 className="text-lg font-bold text-slate-900">Recent Activity</h2>
            <Button variant="ghost" size="sm" className="text-[#f9a825]">
              View All
            </Button>
          </div>
          <div className="space-y-4">
            <div className="flex items-start gap-4 p-4 bg-blue-50 border border-blue-100 rounded-lg">
              <div className="size-10 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0">
                <FileText className="size-5 text-white" />
              </div>
              <div className="flex-1">
                <p className="font-semibold text-slate-900">New bid received</p>
                <p className="text-sm text-slate-600">Sarah Williams submitted a bid for "Master Bathroom Remodel"</p>
                <p className="text-xs text-slate-500 mt-1">1 day ago</p>
              </div>
            </div>
            
            <div className="flex items-start gap-4 p-4 bg-green-50 border border-green-100 rounded-lg">
              <div className="size-10 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0">
                <CheckCircle className="size-5 text-white" />
              </div>
              <div className="flex-1">
                <p className="font-semibold text-slate-900">Milestone completed</p>
                <p className="text-sm text-slate-600">Kitchen framing completed by BuildPro Inc.</p>
                <p className="text-xs text-slate-500 mt-1">2 days ago</p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-4 bg-[#fffbf0] border border-[#f9a825]/20 rounded-lg">
              <div className="size-10 bg-[#f9a825] rounded-full flex items-center justify-center flex-shrink-0">
                <MessageSquare className="size-5 text-white" />
              </div>
              <div className="flex-1">
                <p className="font-semibold text-slate-900">New message</p>
                <p className="text-sm text-slate-600">Mike Johnson sent you a message about your project</p>
                <p className="text-xs text-slate-500 mt-1">3 days ago</p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-4 bg-purple-50 border border-purple-100 rounded-lg">
              <div className="size-10 bg-purple-500 rounded-full flex items-center justify-center flex-shrink-0">
                <DollarSign className="size-5 text-white" />
              </div>
              <div className="flex-1">
                <p className="font-semibold text-slate-900">Payment released</p>
                <p className="text-sm text-slate-600">$15,000 milestone payment to Elite Builders</p>
                <p className="text-xs text-slate-500 mt-1">5 days ago</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Active Projects */}
      <div className="bg-white border border-slate-200 rounded-xl p-6 mb-8">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-lg font-bold text-slate-900">Active Projects</h2>
          <Button 
            variant="outline" 
            size="sm"
            onClick={() => onNavigate('my-projects')}
          >
            View All Projects
          </Button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {activeProjects.map((project) => (
            <div 
              key={project.id}
              className="border border-slate-200 rounded-xl overflow-hidden hover:shadow-lg transition-all cursor-pointer group"
              onClick={() => onNavigate('project-details-view')}
            >
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-3 right-3">
                  <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                    project.status === 'In Progress' 
                      ? 'bg-blue-500 text-white' 
                      : project.status === 'Bidding'
                      ? 'bg-[#f9a825] text-white'
                      : 'bg-slate-500 text-white'
                  }`}>
                    {project.status}
                  </span>
                </div>
              </div>
              <div className="p-5">
                <h3 className="font-bold text-slate-900 mb-3">{project.title}</h3>
                
                {project.contractor && (
                  <div className="flex items-center gap-2 text-sm text-slate-600 mb-2">
                    <CheckCircle className="size-4 text-green-500" />
                    <span>{project.contractor}</span>
                  </div>
                )}
                
                <div className="flex items-center gap-2 text-sm text-slate-600 mb-2">
                  <Calendar className="size-4" />
                  <span>Due: {project.dueDate}</span>
                </div>
                
                <div className="flex items-center gap-2 text-sm text-slate-600 mb-3">
                  <DollarSign className="size-4" />
                  <span>Budget: {project.budget}</span>
                </div>

                {project.status === 'Bidding' && (
                  <div className="flex items-center gap-2 text-sm font-medium text-[#f9a825] mb-3">
                    <FileText className="size-4" />
                    <span>{project.bidsReceived} Bids Received</span>
                  </div>
                )}

                {project.status === 'In Progress' && (
                  <div className="mt-3">
                    <div className="flex items-center justify-between text-xs text-slate-600 mb-2">
                      <span>Progress</span>
                      <span className="font-semibold">{project.progress}%</span>
                    </div>
                    <div className="w-full bg-slate-100 rounded-full h-2">
                      <div 
                        className="bg-gradient-to-r from-green-500 to-[#f9a825] h-2 rounded-full transition-all"
                        style={{ width: `${project.progress}%` }}
                      />
                    </div>
                  </div>
                )}

                <Button 
                  className="w-full mt-4 bg-slate-900 hover:bg-slate-800 text-white"
                  size="sm"
                >
                  <Eye className="size-4 mr-2" />
                  View Details
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Pending Bids to Review */}
      <div className="bg-white border border-slate-200 rounded-xl p-6">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-lg font-bold text-slate-900">Pending Bids to Review</h2>
          <Button 
            variant="outline" 
            size="sm"
            onClick={() => onNavigate('received-bids')}
          >
            View All Bids
          </Button>
        </div>
        <div className="space-y-4">
          {pendingBids.map((bid) => (
            <div 
              key={bid.id}
              className="border border-slate-200 rounded-lg p-5 hover:shadow-md transition-all cursor-pointer"
              onClick={() => onNavigate('bid-details')}
            >
              <div className="flex items-start gap-4">
                <img 
                  src={bid.contractorAvatar} 
                  alt={bid.contractor}
                  className="size-16 rounded-full object-cover flex-shrink-0"
                />
                <div className="flex-1">
                  <div className="flex items-start justify-between mb-2">
                    <div>
                      <h3 className="font-bold text-slate-900">{bid.contractor}</h3>
                      <p className="text-sm text-slate-600">{bid.project}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-xl font-bold text-[#f9a825]">{bid.bidAmount}</p>
                      <p className="text-xs text-slate-500">{bid.duration}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-4 text-sm text-slate-600 mb-3">
                    <div className="flex items-center gap-1">
                      <div className="flex">
                        {[1, 2, 3, 4, 5].map((star) => (
                          <div 
                            key={star}
                            className={`text-xs ${star <= Math.floor(bid.rating) ? 'text-[#f9a825]' : 'text-slate-300'}`}
                          >
                            ★
                          </div>
                        ))}
                      </div>
                      <span className="font-semibold">{bid.rating}</span>
                    </div>
                    <span>•</span>
                    <span>{bid.completedProjects} completed projects</span>
                    <span>•</span>
                    <span className="text-slate-500">{bid.receivedDate}</span>
                  </div>

                  <div className="flex gap-3">
                    <Button 
                      className="bg-green-600 hover:bg-green-700 text-white"
                      size="sm"
                    >
                      <CheckCircle className="size-4 mr-2" />
                      Accept Bid
                    </Button>
                    <Button 
                      variant="outline"
                      size="sm"
                    >
                      <Eye className="size-4 mr-2" />
                      View Details
                    </Button>
                    <Button 
                      variant="outline"
                      size="sm"
                    >
                      <MessageSquare className="size-4 mr-2" />
                      Message
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

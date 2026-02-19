import { useState } from 'react';
import { Search, Filter, Plus, Calendar, DollarSign, Eye, Edit, Trash2, FileText } from 'lucide-react';
import { Button } from '../ui/button';

const projects = [
  {
    id: 1,
    title: 'Modern Kitchen Renovation',
    description: 'Complete kitchen remodel including cabinets, countertops, and appliances',
    image: 'https://images.unsplash.com/photo-1770063817031-f3b98dff347f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBraXRjaGVuJTIwcmVub3ZhdGlvbiUyMGJlYXV0aWZ1bHxlbnwxfHx8fDE3NzE0NzI4MjZ8MA&ixlib=rb-4.1.0&q=80&w=400',
    status: 'In Progress',
    category: 'Kitchen',
    budget: '$45,000',
    bidsReceived: 8,
    contractor: 'BuildPro Inc.',
    progress: 65,
    postedDate: 'Jan 5, 2026',
    dueDate: 'Mar 15, 2026'
  },
  {
    id: 2,
    title: 'Master Bathroom Remodel',
    description: 'Luxury bathroom renovation with walk-in shower and modern fixtures',
    image: 'https://images.unsplash.com/photo-1758448018619-4cbe2250b9ad?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiYXRocm9vbSUyMHJlbW9kZWwlMjBsdXh1cnl8ZW58MXx8fHwxNzcxNDY1NzY5fDA&ixlib=rb-4.1.0&q=80&w=400',
    status: 'Bidding',
    category: 'Bathroom',
    budget: '$28,000',
    bidsReceived: 12,
    contractor: null,
    progress: 0,
    postedDate: 'Feb 10, 2026',
    dueDate: 'Apr 1, 2026'
  },
  {
    id: 3,
    title: 'Deck Installation',
    description: 'New composite deck with pergola and outdoor lighting',
    image: 'https://images.unsplash.com/photo-1759244565958-6a4f485108a1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxob21lJTIwZGVjayUyMGluc3RhbGxhdGlvbiUyMG91dGRvb3J8ZW58MXx8fHwxNzcxNDcyODI3fDA&ixlib=rb-4.1.0&q=80&w=400',
    status: 'Pending Start',
    category: 'Outdoor',
    budget: '$32,000',
    bidsReceived: 5,
    contractor: 'Elite Builders',
    progress: 0,
    postedDate: 'Jan 28, 2026',
    dueDate: 'May 20, 2026'
  },
  {
    id: 4,
    title: 'Living Room Painting',
    description: 'Interior painting of living room and dining area',
    image: 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=400&h=300&fit=crop',
    status: 'Completed',
    category: 'Interior',
    budget: '$3,500',
    bidsReceived: 6,
    contractor: 'Color Masters',
    progress: 100,
    postedDate: 'Nov 15, 2025',
    dueDate: 'Dec 20, 2025'
  },
  {
    id: 5,
    title: 'Roof Repair',
    description: 'Fix damaged shingles and improve insulation',
    image: 'https://images.unsplash.com/photo-1632832727516-9e8a1e2e4c85?w=400&h=300&fit=crop',
    status: 'Draft',
    category: 'Roofing',
    budget: '$12,000',
    bidsReceived: 0,
    contractor: null,
    progress: 0,
    postedDate: 'Feb 18, 2026',
    dueDate: null
  }
];

export function HomeownerProjects({ onViewProject }: { onViewProject: (id: number) => void }) {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedStatus, setSelectedStatus] = useState<string>('all');

  const filteredProjects = projects.filter(project => {
    const matchesSearch = project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         project.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesStatus = selectedStatus === 'all' || project.status === selectedStatus;
    return matchesSearch && matchesStatus;
  });

  const getStatusBadge = (status: string) => {
    const styles = {
      'In Progress': 'bg-blue-100 text-blue-700',
      'Bidding': 'bg-[#fffbf0] text-[#f9a825]',
      'Pending Start': 'bg-purple-100 text-purple-700',
      'Completed': 'bg-green-100 text-green-700',
      'Draft': 'bg-slate-100 text-slate-700'
    };
    return styles[status as keyof typeof styles] || 'bg-slate-100 text-slate-700';
  };

  return (
    <div className="bg-white rounded-xl p-8">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-slate-900 mb-2">My Projects</h1>
        <p className="text-slate-500">Manage all your home improvement projects in one place.</p>
      </div>

      {/* Filters & Search */}
      <div className="flex flex-col md:flex-row gap-4 mb-8">
        <div className="flex-1 relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 size-5 text-slate-400" />
          <input
            type="text"
            placeholder="Search projects..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-3 border border-slate-200 rounded-lg focus:ring-2 focus:ring-[#f9a825] focus:border-transparent outline-none"
          />
        </div>
        
        <div className="flex gap-3">
          <select
            value={selectedStatus}
            onChange={(e) => setSelectedStatus(e.target.value)}
            className="px-4 py-3 border border-slate-200 rounded-lg focus:ring-2 focus:ring-[#f9a825] focus:border-transparent outline-none bg-white"
          >
            <option value="all">All Status</option>
            <option value="Draft">Draft</option>
            <option value="Bidding">Bidding</option>
            <option value="Pending Start">Pending Start</option>
            <option value="In Progress">In Progress</option>
            <option value="Completed">Completed</option>
          </select>

          <Button className="bg-[#f9a825] hover:bg-[#e69b20] text-white">
            <Plus className="size-4 mr-2" />
            New Project
          </Button>
        </div>
      </div>

      {/* Stats Overview */}
      <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-8">
        <div className="bg-slate-50 rounded-lg p-4 text-center border border-slate-200">
          <p className="text-2xl font-bold text-slate-900">{projects.length}</p>
          <p className="text-sm text-slate-600">Total</p>
        </div>
        <div className="bg-blue-50 rounded-lg p-4 text-center border border-blue-200">
          <p className="text-2xl font-bold text-blue-600">{projects.filter(p => p.status === 'In Progress').length}</p>
          <p className="text-sm text-slate-600">Active</p>
        </div>
        <div className="bg-[#fffbf0] rounded-lg p-4 text-center border border-[#f9a825]/20">
          <p className="text-2xl font-bold text-[#f9a825]">{projects.filter(p => p.status === 'Bidding').length}</p>
          <p className="text-sm text-slate-600">Bidding</p>
        </div>
        <div className="bg-green-50 rounded-lg p-4 text-center border border-green-200">
          <p className="text-2xl font-bold text-green-600">{projects.filter(p => p.status === 'Completed').length}</p>
          <p className="text-sm text-slate-600">Completed</p>
        </div>
        <div className="bg-slate-50 rounded-lg p-4 text-center border border-slate-200">
          <p className="text-2xl font-bold text-slate-900">{projects.filter(p => p.status === 'Draft').length}</p>
          <p className="text-sm text-slate-600">Draft</p>
        </div>
      </div>

      {/* Projects Grid */}
      <div className="space-y-4">
        {filteredProjects.map((project) => (
          <div 
            key={project.id}
            className="border border-slate-200 rounded-xl overflow-hidden hover:shadow-lg transition-all group"
          >
            <div className="flex flex-col md:flex-row">
              {/* Image */}
              <div className="md:w-64 h-48 md:h-auto relative overflow-hidden flex-shrink-0">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-3 left-3">
                  <span className={`px-3 py-1 rounded-full text-xs font-semibold ${getStatusBadge(project.status)}`}>
                    {project.status}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="flex-1 p-6">
                <div className="flex items-start justify-between mb-3">
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-slate-900 mb-2">{project.title}</h3>
                    <p className="text-slate-600 text-sm mb-3">{project.description}</p>
                  </div>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
                  <div className="flex items-center gap-2 text-sm text-slate-600">
                    <DollarSign className="size-4 text-[#f9a825]" />
                    <div>
                      <p className="text-xs text-slate-500">Budget</p>
                      <p className="font-semibold text-slate-900">{project.budget}</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 text-sm text-slate-600">
                    <FileText className="size-4 text-blue-500" />
                    <div>
                      <p className="text-xs text-slate-500">Bids</p>
                      <p className="font-semibold text-slate-900">{project.bidsReceived}</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 text-sm text-slate-600">
                    <Calendar className="size-4 text-purple-500" />
                    <div>
                      <p className="text-xs text-slate-500">Posted</p>
                      <p className="font-semibold text-slate-900">{project.postedDate}</p>
                    </div>
                  </div>

                  {project.dueDate && (
                    <div className="flex items-center gap-2 text-sm text-slate-600">
                      <Calendar className="size-4 text-red-500" />
                      <div>
                        <p className="text-xs text-slate-500">Due Date</p>
                        <p className="font-semibold text-slate-900">{project.dueDate}</p>
                      </div>
                    </div>
                  )}
                </div>

                {project.contractor && (
                  <div className="mb-4 pb-4 border-b border-slate-200">
                    <p className="text-xs text-slate-500 mb-1">Contractor</p>
                    <p className="font-semibold text-slate-900">{project.contractor}</p>
                  </div>
                )}

                {project.progress > 0 && (
                  <div className="mb-4">
                    <div className="flex items-center justify-between text-sm mb-2">
                      <span className="text-slate-600">Progress</span>
                      <span className="font-semibold text-slate-900">{project.progress}%</span>
                    </div>
                    <div className="w-full bg-slate-100 rounded-full h-2">
                      <div 
                        className="bg-gradient-to-r from-green-500 to-[#f9a825] h-2 rounded-full transition-all"
                        style={{ width: `${project.progress}%` }}
                      />
                    </div>
                  </div>
                )}

                {/* Actions */}
                <div className="flex gap-3">
                  <Button 
                    className="bg-slate-900 hover:bg-slate-800 text-white"
                    size="sm"
                    onClick={() => onViewProject(project.id)}
                  >
                    <Eye className="size-4 mr-2" />
                    View Details
                  </Button>
                  {project.status === 'Bidding' && (
                    <Button 
                      className="bg-[#f9a825] hover:bg-[#e69b20] text-white"
                      size="sm"
                    >
                      <FileText className="size-4 mr-2" />
                      Review Bids ({project.bidsReceived})
                    </Button>
                  )}
                  {project.status === 'Draft' && (
                    <Button 
                      variant="outline"
                      size="sm"
                    >
                      <Edit className="size-4 mr-2" />
                      Continue Editing
                    </Button>
                  )}
                  <Button 
                    variant="outline"
                    size="sm"
                    className="text-red-600 border-red-200 hover:bg-red-50"
                  >
                    <Trash2 className="size-4" />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {filteredProjects.length === 0 && (
        <div className="text-center py-16">
          <div className="size-20 bg-slate-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <FileText className="size-10 text-slate-400" />
          </div>
          <h3 className="text-xl font-semibold text-slate-900 mb-2">No projects found</h3>
          <p className="text-slate-500 mb-6">Try adjusting your search or filters</p>
          <Button className="bg-[#f9a825] hover:bg-[#e69b20] text-white">
            <Plus className="size-4 mr-2" />
            Create New Project
          </Button>
        </div>
      )}
    </div>
  );
}

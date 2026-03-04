import { useState, useEffect } from 'react';
import { Search, Filter, Plus, Calendar, DollarSign, Eye, Edit, Trash2, FileText } from 'lucide-react';
import { Button } from '../ui/button';
import { EnhancedPostProject } from './EnhancedPostProject';
import { ProjectTimer } from '../projects/ProjectTimer';
import { QuoteSlotsProgress } from '../projects/QuoteSlotsProgress';
import { JobReopenButton } from './JobReopenButton';

// Mock projects with proper structure for auto-close demo
const initialProjects = [
  {
    id: 1,
    title: 'Modern Kitchen Renovation',
    description: 'Complete kitchen remodel including cabinets, countertops, and appliances',
    image: 'https://images.unsplash.com/photo-1770063817031-f3b98dff347f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBraXRjaGVuJTIwcmVub3ZhdGlvbiUyMGJlYXV0aWZ1bHxlbnwxfHx8fDE3NzE0NzI4MjZ8MA&ixlib=rb-4.1.0&q=80&w=400',
    status: 'OPEN' as const,
    category: 'Kitchen Remodel',
    budget: '$35,000 - $45,000',
    quotesReceived: 3,
    maxQuotes: 5,
    postedAt: new Date(Date.now() - 6 * 60 * 60 * 1000), // 6 hours ago
    hasReopened: false,
    closedReason: null,
    hasPro: false
  },
  {
    id: 2,
    title: 'Master Bathroom Remodel',
    description: 'Luxury bathroom renovation with walk-in shower and modern fixtures',
    image: 'https://images.unsplash.com/photo-1758448018619-4cbe2250b9ad?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiYXRocm9vbSUyMHJlbW9kZWwlMjBsdXh1cnl8ZW58MXx8fHwxNzcxNDY1NzY5fDA&ixlib=rb-4.1.0&q=80&w=400',
    status: 'OPEN' as const,
    category: 'Bathroom Remodel',
    budget: '$20,000 - $30,000',
    quotesReceived: 5,
    maxQuotes: 5,
    postedAt: new Date(Date.now() - 2 * 60 * 60 * 1000), // 2 hours ago
    hasReopened: false,
    closedReason: 'MAX_QUOTES' as const,
    hasPro: true
  },
  {
    id: 3,
    title: 'Deck Installation',
    description: 'New composite deck with pergola and outdoor lighting',
    image: 'https://images.unsplash.com/photo-1759244565958-6a4f485108a1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxob21lJTIwZGVjayUyMGluc3RhbGxhdGlvbiUyMG91dGRvb3J8ZW58MXx8fHwxNzcxNDcyODI3fDA&ixlib=rb-4.1.0&q=80&w=400',
    status: 'CLOSED' as const,
    category: 'Multi-Trade Remodel',
    budget: '$30,000 - $40,000',
    quotesReceived: 2,
    maxQuotes: 5,
    postedAt: new Date(Date.now() - 25 * 60 * 60 * 1000), // 25 hours ago (expired)
    hasReopened: false,
    closedReason: 'TIME_EXPIRED' as const,
    hasPro: false
  },
  {
    id: 4,
    title: 'Interior Painting Project',
    description: 'Complete interior painting of living room, dining room, and hallways',
    image: 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=400&h=300&fit=crop',
    status: 'ACTIVE' as const,
    category: 'Interior Painting',
    budget: '$5,000 - $8,000',
    quotesReceived: 4,
    maxQuotes: 5,
    postedAt: new Date(Date.now() - 48 * 60 * 60 * 1000), // 2 days ago (in progress)
    hasReopened: false,
    closedReason: null,
    hasPro: true
  },
  {
    id: 5,
    title: 'Flooring Replacement',
    description: 'Replace old carpet with hardwood flooring throughout main floor',
    image: 'https://images.unsplash.com/photo-1632832727516-9e8a1e2e4c85?w=400&h=300&fit=crop',
    status: 'OPEN' as const,
    category: 'Flooring',
    budget: '$10,000 - $15,000',
    quotesReceived: 1,
    maxQuotes: 5,
    postedAt: new Date(Date.now() - 1 * 60 * 60 * 1000), // 1 hour ago
    hasReopened: false,
    closedReason: null,
    hasPro: false
  }
];

interface HomeownerProjectsEnhancedProps {
  onViewProject: (id: number) => void;
}

export function HomeownerProjectsEnhanced({ onViewProject }: HomeownerProjectsEnhancedProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedStatus, setSelectedStatus] = useState<string>('all');
  const [showNewProjectForm, setShowNewProjectForm] = useState(false);
  const [projects, setProjects] = useState(initialProjects);

  // Auto-close logic - check every second
  useEffect(() => {
    const checkAutoClose = () => {
      setProjects(prevProjects => 
        prevProjects.map(project => {
          if (project.status !== 'OPEN') return project;

          const now = new Date();
          const postedAt = new Date(project.postedAt);
          const timeElapsed = (now.getTime() - postedAt.getTime()) / 1000;
          const twentyFourHours = 24 * 60 * 60;

          // Auto-close if max quotes reached
          if (project.quotesReceived >= project.maxQuotes) {
            return {
              ...project,
              status: 'CLOSED' as const,
              closedReason: 'MAX_QUOTES' as const
            };
          }

          // Auto-close if 24 hours expired
          if (timeElapsed >= twentyFourHours) {
            return {
              ...project,
              status: 'CLOSED' as const,
              closedReason: 'TIME_EXPIRED' as const
            };
          }

          return project;
        })
      );
    };

    const interval = setInterval(checkAutoClose, 1000);
    return () => clearInterval(interval);
  }, []);

  // If showing new project form, render that instead
  if (showNewProjectForm) {
    return (
      <EnhancedPostProject 
        isPhoneVerified={true} 
        onSubmit={() => setShowNewProjectForm(false)} 
        onCancel={() => setShowNewProjectForm(false)} 
      />
    );
  }

  const filteredProjects = projects.filter(project => {
    const matchesSearch = project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         project.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesStatus = selectedStatus === 'all' || project.status.toLowerCase() === selectedStatus.toLowerCase();
    return matchesSearch && matchesStatus;
  });

  const getStatusBadge = (status: string, closedReason?: string | null) => {
    if (status === 'CLOSED') {
      if (closedReason === 'MAX_QUOTES') {
        return { text: '🔒 Closed - All Quotes', color: 'bg-green-100 text-green-700 border-green-200' };
      }
      if (closedReason === 'TIME_EXPIRED') {
        return { text: '⏰ Closed - Time Expired', color: 'bg-amber-100 text-amber-700 border-amber-200' };
      }
      return { text: '🔒 Closed', color: 'bg-slate-100 text-slate-700 border-slate-200' };
    }
    if (status === 'OPEN') {
      return { text: '🟢 Open - Accepting Quotes', color: 'bg-blue-100 text-blue-700 border-blue-200' };
    }
    if (status === 'ACTIVE') {
      return { text: '⚡ Active - Work in Progress', color: 'bg-purple-100 text-purple-700 border-purple-200' };
    }
    return { text: status, color: 'bg-slate-100 text-slate-700 border-slate-200' };
  };

  const statusCounts = {
    all: projects.length,
    open: projects.filter(p => p.status === 'OPEN').length,
    closed: projects.filter(p => p.status === 'CLOSED').length,
    active: projects.filter(p => p.status === 'ACTIVE').length
  };

  return (
    <div className="bg-white rounded-xl p-8">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-slate-900 mb-2">My Projects</h1>
        <p className="text-slate-500">Manage all your home improvement projects with real-time quote tracking.</p>
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
            <option value="all">All Status ({statusCounts.all})</option>
            <option value="open">Open ({statusCounts.open})</option>
            <option value="closed">Closed ({statusCounts.closed})</option>
            <option value="active">Active ({statusCounts.active})</option>
          </select>

          <Button className="bg-[#f9a825] hover:bg-[#e69b20] text-white" onClick={() => setShowNewProjectForm(true)}>
            <Plus className="size-4 mr-2" />
            New Project
          </Button>
        </div>
      </div>

      {/* Stats Overview */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
        <div className="bg-slate-50 rounded-lg p-4 text-center border border-slate-200">
          <p className="text-2xl font-bold text-slate-900">{statusCounts.all}</p>
          <p className="text-sm text-slate-600">Total Projects</p>
        </div>
        <div className="bg-blue-50 rounded-lg p-4 text-center border border-blue-200">
          <p className="text-2xl font-bold text-blue-600">{statusCounts.open}</p>
          <p className="text-sm text-slate-600">Open</p>
        </div>
        <div className="bg-purple-50 rounded-lg p-4 text-center border border-purple-200">
          <p className="text-2xl font-bold text-purple-600">{statusCounts.active}</p>
          <p className="text-sm text-slate-600">Active</p>
        </div>
        <div className="bg-amber-50 rounded-lg p-4 text-center border border-amber-200">
          <p className="text-2xl font-bold text-amber-600">{statusCounts.closed}</p>
          <p className="text-sm text-slate-600">Closed</p>
        </div>
      </div>

      {/* Projects List */}
      <div className="space-y-4">
        {filteredProjects.length === 0 ? (
          <div className="text-center py-12">
            <FileText className="size-16 text-slate-300 mx-auto mb-4" />
            <p className="text-slate-500 text-lg">No projects found</p>
            <Button 
              className="mt-4 bg-[#f9a825] hover:bg-[#e69b20] text-white"
              onClick={() => setShowNewProjectForm(true)}
            >
              <Plus className="size-4 mr-2" />
              Post Your First Project
            </Button>
          </div>
        ) : (
          filteredProjects.map(project => {
            const badge = getStatusBadge(project.status, project.closedReason);
            
            return (
              <div
                key={project.id}
                className="border border-slate-200 rounded-lg hover:shadow-lg transition-all p-6 bg-white"
              >
                <div className="flex gap-6">
                  {/* Project Image */}
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-32 h-32 object-cover rounded-lg flex-shrink-0"
                  />

                  {/* Project Details */}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between gap-4 mb-3">
                      <div className="flex-1 min-w-0">
                        <h3 className="text-xl font-bold text-slate-900 truncate mb-2">
                          {project.title}
                        </h3>
                        <p className="text-slate-600 text-sm line-clamp-1">{project.description}</p>
                      </div>
                      
                      <div className={`px-3 py-1.5 rounded-full border text-sm font-semibold whitespace-nowrap ${badge.color}`}>
                        {badge.text}
                      </div>
                    </div>

                    {/* Project Meta */}
                    <div className="grid grid-cols-2 gap-4 mb-4">
                      <div className="flex items-center gap-2 text-sm">
                        <DollarSign className="size-4 text-slate-400" />
                        <span className="text-slate-700 font-medium">{project.budget}</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm">
                        <FileText className="size-4 text-slate-400" />
                        <span className="text-slate-700">{project.category}</span>
                      </div>
                    </div>

                    {/* Timer & Quote Progress (Only for OPEN projects) */}
                    {project.status === 'OPEN' && (
                      <div className="grid md:grid-cols-2 gap-4 mb-4">
                        <ProjectTimer 
                          postedAt={project.postedAt}
                          maxDuration={24 * 60 * 60}
                          compact={true}
                        />
                        <QuoteSlotsProgress 
                          filled={project.quotesReceived}
                          total={project.maxQuotes}
                          variant="compact"
                        />
                      </div>
                    )}

                    {/* Closed Status Info */}
                    {project.status === 'CLOSED' && (
                      <div className="mb-4">
                        <QuoteSlotsProgress 
                          filled={project.quotesReceived}
                          total={project.maxQuotes}
                          variant="compact"
                        />
                      </div>
                    )}

                    {/* Actions */}
                    <div className="flex flex-wrap gap-3">
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => onViewProject(project.id)}
                        className="border-[#f9a825] text-[#f9a825] hover:bg-[#f9a825] hover:text-white"
                      >
                        <Eye className="size-4 mr-2" />
                        View Details
                      </Button>

                      {/* Reopen Button (Only for TIME_EXPIRED and not reopened) */}
                      {project.status === 'CLOSED' && 
                       project.closedReason === 'TIME_EXPIRED' && 
                       !project.hasReopened && (
                        <JobReopenButton 
                          job={{
                            id: project.id.toString(),
                            title: project.title,
                            quotesReceived: project.quotesReceived,
                            maxQuotes: project.maxQuotes,
                            hasReopened: project.hasReopened
                          }}
                          onReopen={(id) => {
                            console.log('Reopening project:', id);
                            // In real app, this would update the backend
                          }}
                        />
                      )}
                    </div>
                  </div>
                </div>
              </div>
            );
          })
        )}
      </div>
    </div>
  );
}
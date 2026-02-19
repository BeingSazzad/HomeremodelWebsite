import { useState } from 'react';
import { DollarSign, Calendar, MapPin, Clock } from 'lucide-react';

interface Project {
  id: string;
  title: string;
  status: 'in-progress' | 'completed' | 'cancelled';
  budget: { min: number; max: number };
  deadline: string;
  location: string;
  daysRemaining: number;
  image: string;
}

interface ContractorProjectsProps {
  onViewProject: (projectId: string) => void;
}

const mockProjects: Project[] = [
  {
    id: '1',
    title: 'Modern Kitchen Renovation with Custom Cabinets',
    status: 'in-progress',
    budget: { min: 35000, max: 45000 },
    deadline: '13 March 2025',
    location: 'Austin, TX',
    daysRemaining: 15,
    image: 'https://images.unsplash.com/photo-1762811003338-aef30274513b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBraXRjaGVuJTIwcmVub3ZhdGlvbiUyMGludGVyaW9yJTIwd2hpdGUlMjBjYWJpbmV0c3xlbnwxfHx8fDE3NzE0NjkzNTF8MA&ixlib=rb-4.1.0&q=80&w=400'
  },
  {
    id: '2',
    title: 'Modern Kitchen Renovation with Custom Cabinets',
    status: 'completed',
    budget: { min: 35000, max: 45000 },
    deadline: '13 March 2025',
    location: 'Austin, TX',
    daysRemaining: 13,
    image: 'https://images.unsplash.com/photo-1762811003338-aef30274513b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBraXRjaGVuJTIwcmVub3ZhdGlvbiUyMGludGVyaW9yJTIwd2hpdGUlMjBjYWJpbmV0c3xlbnwxfHx8fDE3NzE0NjkzNTF8MA&ixlib=rb-4.1.0&q=80&w=400'
  },
  {
    id: '3',
    title: 'Modern Kitchen Renovation with Custom Cabinets',
    status: 'cancelled',
    budget: { min: 35000, max: 45000 },
    deadline: '13 March 2025',
    location: 'Austin, TX',
    daysRemaining: 15,
    image: 'https://images.unsplash.com/photo-1762811003338-aef30274513b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBraXRjaGVuJTIwcmVub3ZhdGlvbiUyMGludGVyaW9yJTIwd2hpdGUlMjBjYWJpbmV0c3xlbnwxfHx8fDE3NzE0NjkzNTF8MA&ixlib=rb-4.1.0&q=80&w=400'
  },
  {
    id: '4',
    title: 'Modern Kitchen Renovation with Custom Cabinets',
    status: 'in-progress',
    budget: { min: 35000, max: 45000 },
    deadline: '13 March 2025',
    location: 'Austin, TX',
    daysRemaining: 15,
    image: 'https://images.unsplash.com/photo-1762811003338-aef30274513b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBraXRjaGVuJTIwcmVub3ZhdGlvbiUyMGludGVyaW9yJTIwd2hpdGUlMjBjYWJpbmV0c3xlbnwxfHx8fDE3NzE0NjkzNTF8MA&ixlib=rb-4.1.0&q=80&w=400'
  },
  {
    id: '5',
    title: 'Modern Kitchen Renovation with Custom Cabinets',
    status: 'in-progress',
    budget: { min: 35000, max: 45000 },
    deadline: '13 March 2025',
    location: 'Austin, TX',
    daysRemaining: 15,
    image: 'https://images.unsplash.com/photo-1762811003338-aef30274513b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBraXRjaGVuJTIwcmVub3ZhdGlvbiUyMGludGVyaW9yJTIwd2hpdGUlMjBjYWJpbmV0c3xlbnwxfHx8fDE3NzE0NjkzNTF8MA&ixlib=rb-4.1.0&q=80&w=400'
  },
];

const statusConfig = {
  'in-progress': {
    label: 'In Progress',
    bgColor: 'bg-blue-50',
    textColor: 'text-blue-700',
    borderColor: 'border-blue-200'
  },
  'completed': {
    label: 'Completed',
    bgColor: 'bg-green-50',
    textColor: 'text-green-700',
    borderColor: 'border-green-200'
  },
  'cancelled': {
    label: 'Cancelled',
    bgColor: 'bg-red-50',
    textColor: 'text-red-700',
    borderColor: 'border-red-200'
  }
};

export function ContractorProjects({ onViewProject }: ContractorProjectsProps) {
  const [activeTab, setActiveTab] = useState<'all' | 'in-progress' | 'completed' | 'cancelled'>('all');

  const filteredProjects = activeTab === 'all' 
    ? mockProjects 
    : mockProjects.filter(p => p.status === activeTab);

  const projectCounts = {
    all: mockProjects.length,
    'in-progress': mockProjects.filter(p => p.status === 'in-progress').length,
    completed: mockProjects.filter(p => p.status === 'completed').length,
    cancelled: mockProjects.filter(p => p.status === 'cancelled').length,
  };

  return (
    <div className="flex-1 bg-white rounded-xl p-8">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-slate-900 mb-2">Projects</h1>
        <p className="text-slate-500">View and manage all your projects</p>
      </div>

      {/* Tabs */}
      <div className="flex items-center gap-6 border-b-2 border-slate-100 mb-8">
        <button
          onClick={() => setActiveTab('all')}
          className={`pb-3 px-2 relative transition-colors ${
            activeTab === 'all' ? 'text-[#f9a825]' : 'text-slate-600 hover:text-slate-900'
          }`}
        >
          <span className="font-medium">All Projects</span>
          <span className="ml-2 text-sm">({projectCounts.all})</span>
          {activeTab === 'all' && (
            <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#f9a825]" />
          )}
        </button>
        
        <button
          onClick={() => setActiveTab('in-progress')}
          className={`pb-3 px-2 relative transition-colors ${
            activeTab === 'in-progress' ? 'text-[#f9a825]' : 'text-slate-600 hover:text-slate-900'
          }`}
        >
          <span className="font-medium">In Progress</span>
          <span className="ml-2 text-sm">({projectCounts['in-progress']})</span>
          {activeTab === 'in-progress' && (
            <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#f9a825]" />
          )}
        </button>
        
        <button
          onClick={() => setActiveTab('completed')}
          className={`pb-3 px-2 relative transition-colors ${
            activeTab === 'completed' ? 'text-[#f9a825]' : 'text-slate-600 hover:text-slate-900'
          }`}
        >
          <span className="font-medium">Completed</span>
          <span className="ml-2 text-sm">({projectCounts.completed})</span>
          {activeTab === 'completed' && (
            <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#f9a825]" />
          )}
        </button>
        
        <button
          onClick={() => setActiveTab('cancelled')}
          className={`pb-3 px-2 relative transition-colors ${
            activeTab === 'cancelled' ? 'text-[#f9a825]' : 'text-slate-600 hover:text-slate-900'
          }`}
        >
          <span className="font-medium">Cancelled</span>
          <span className="ml-2 text-sm">({projectCounts.cancelled})</span>
          {activeTab === 'cancelled' && (
            <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#f9a825]" />
          )}
        </button>
      </div>

      {/* Projects List */}
      <div className="space-y-4">
        {filteredProjects.map((project) => {
          const config = statusConfig[project.status];
          
          return (
            <div
              key={project.id}
              onClick={() => onViewProject(project.id)}
              className="bg-white border border-slate-200 rounded-xl p-4 hover:shadow-md transition-all cursor-pointer group"
            >
              <div className="flex gap-4">
                {/* Project Image */}
                <div className="relative w-28 h-28 flex-shrink-0 rounded-lg overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                  />
                  <div className={`absolute top-2 left-2 ${config.bgColor} ${config.textColor} px-2 py-1 rounded-md text-xs font-medium`}>
                    {config.label}
                  </div>
                </div>

                {/* Project Info */}
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-slate-900 mb-3 group-hover:text-[#f9a825] transition-colors">
                    {project.title}
                  </h3>
                  
                  <div className="grid grid-cols-2 gap-3">
                    <div className="flex items-center gap-2 text-sm text-slate-600">
                      <DollarSign className="size-4 text-[#f9a825]" />
                      <span className="font-medium">Budget:</span>
                      <span>${project.budget.min.toLocaleString()} - ${project.budget.max.toLocaleString()}</span>
                    </div>
                    
                    <div className="flex items-center gap-2 text-sm text-slate-600">
                      <Calendar className="size-4 text-[#f9a825]" />
                      <span className="font-medium">Deadline:</span>
                      <span>{project.deadline}</span>
                    </div>
                    
                    <div className="flex items-center gap-2 text-sm text-slate-600">
                      <MapPin className="size-4 text-[#f9a825]" />
                      <span className="font-medium">Austin, TX</span>
                    </div>
                    
                    <div className="flex items-center gap-2 text-sm text-slate-600">
                      <Clock className="size-4 text-[#f9a825]" />
                      <span>{project.daysRemaining} Days Remaining</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

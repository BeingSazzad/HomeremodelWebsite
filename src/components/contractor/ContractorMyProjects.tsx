import { Calendar, DollarSign, CheckCircle, Clock, AlertCircle, Eye, MessageSquare } from 'lucide-react';
import { Button } from '../ui/button';
import { useState } from 'react';
import { WorkCompleteButton } from '../WorkCompleteButton';

// Simple contractor projects - their accepted jobs
const myProjects = [
  {
    id: 1,
    title: 'Modern Kitchen Renovation',
    homeowner: 'Jane Smith',
    homeownerAvatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100',
    image: 'https://images.unsplash.com/photo-1770063817031-f3b98dff347f?w=400',
    totalAmount: 45000,
    paidAmount: 0,
    startDate: 'Jan 15, 2026',
    deadline: 'Mar 15, 2026',
    status: 'In Progress', // "In Progress" | "Pending Approval" | "Completed"
    completedDate: null
  },
  {
    id: 2,
    title: 'Deck Installation',
    homeowner: 'Michael Brown',
    homeownerAvatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100',
    image: 'https://images.unsplash.com/photo-1759244565958-6a4f485108a1?w=400',
    totalAmount: 32000,
    paidAmount: 0,
    startDate: 'Feb 10, 2026',
    deadline: 'May 20, 2026',
    status: 'Pending Approval', // Contractor marked complete, waiting for homeowner
    completedDate: 'Feb 18, 2026'
  }
];

export function ContractorMyProjects({ onViewProject }: { onViewProject: (id: number) => void }) {
  const [selectedProject, setSelectedProject] = useState<number | null>(null);

  const handleMarkComplete = (projectId: number) => {
    console.log('Mark complete:', projectId);
    // Update project status to "Pending Approval"
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Completed': return 'bg-green-500 text-white';
      case 'Pending Approval': return 'bg-blue-500 text-white';
      case 'In Progress': return 'bg-yellow-500 text-white';
      default: return 'bg-slate-300 text-slate-700';
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'Completed': return <CheckCircle className="size-5" />;
      case 'Pending Approval': return <Clock className="size-5" />;
      case 'In Progress': return <Clock className="size-5" />;
      default: return <AlertCircle className="size-5" />;
    }
  };

  return (
    <div className="bg-white rounded-xl p-8">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-slate-900 mb-2">My Projects</h1>
        <p className="text-slate-500">Active jobs and payments</p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
        <div className="bg-blue-50 rounded-lg p-4 border border-blue-200">
          <p className="text-sm text-slate-600 mb-1">Active Projects</p>
          <p className="text-2xl font-bold text-blue-600">{myProjects.filter(p => p.status === 'In Progress').length}</p>
        </div>
        <div className="bg-green-50 rounded-lg p-4 border border-green-200">
          <p className="text-sm text-slate-600 mb-1">Total Earned</p>
          <p className="text-2xl font-bold text-green-600">
            ${myProjects.reduce((sum, p) => sum + p.paidAmount, 0).toLocaleString()}
          </p>
        </div>
        <div className="bg-[#fffbf0] rounded-lg p-4 border border-[#f9a825]/20">
          <p className="text-sm text-slate-600 mb-1">Pending Approval</p>
          <p className="text-2xl font-bold text-[#f9a825]">
            {myProjects.filter(p => p.status === 'Pending Approval').length}
          </p>
        </div>
        <div className="bg-purple-50 rounded-lg p-4 border border-purple-200">
          <p className="text-sm text-slate-600 mb-1">Upcoming Jobs</p>
          <p className="text-2xl font-bold text-purple-600">{myProjects.filter(p => p.status === 'Not Started').length}</p>
        </div>
      </div>

      {/* Projects List */}
      <div className="space-y-6">
        {myProjects.map((project) => {
          return (
            <div key={project.id} className="border border-slate-200 rounded-xl overflow-hidden hover:shadow-lg transition-all">
              {/* Header */}
              <div className="bg-gradient-to-r from-slate-50 to-slate-100 p-6 border-b border-slate-200">
                <div className="flex items-start justify-between">
                  <div className="flex items-start gap-4 flex-1">
                    <img 
                      src={project.homeownerAvatar}
                      alt={project.homeowner}
                      className="size-16 rounded-full object-cover border-2 border-white shadow"
                    />
                    <div>
                      <h2 className="text-xl font-bold text-slate-900 mb-1">{project.title}</h2>
                      <p className="text-slate-600 mb-3">Client: {project.homeowner}</p>
                      <div className="flex items-center gap-6 text-sm">
                        <div className="flex items-center gap-2 text-slate-600">
                          <Calendar className="size-4" />
                          <span>Start: {project.startDate}</span>
                        </div>
                        <div className="flex items-center gap-2 text-red-600">
                          <AlertCircle className="size-4" />
                          <span>Due: {project.deadline}</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="text-right">
                    <p className="text-sm text-slate-500 mb-1">Total Amount</p>
                    <p className="text-2xl font-bold text-slate-900 mb-3">${project.totalAmount.toLocaleString()}</p>
                    <span className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-sm font-semibold ${getStatusColor(project.status)}`}>
                      {getStatusIcon(project.status)}
                      {project.status}
                    </span>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                {/* Status Messages */}
                {project.status === 'In Progress' && (
                  <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6">
                    <p className="text-blue-900 font-semibold mb-1">Work in progress</p>
                    <p className="text-sm text-blue-700">
                      Send progress updates via messages. When all work is done, mark it as complete.
                    </p>
                  </div>
                )}

                {project.status === 'Pending Approval' && (
                  <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mb-6">
                    <div className="flex items-start gap-3">
                      <Clock className="size-5 text-yellow-600 mt-0.5" />
                      <div>
                        <p className="text-yellow-900 font-semibold mb-1">Waiting for homeowner approval</p>
                        <p className="text-sm text-yellow-700">
                          You marked this work as complete. Payment will be released once the homeowner approves.
                        </p>
                      </div>
                    </div>
                  </div>
                )}

                {project.status === 'Completed' && project.completedDate && (
                  <div className="bg-green-50 border border-green-200 rounded-lg p-4 mb-6">
                    <div className="flex items-start gap-3">
                      <CheckCircle className="size-5 text-green-600 mt-0.5" />
                      <div>
                        <p className="text-green-900 font-semibold mb-1">Project completed!</p>
                        <p className="text-sm text-green-700">
                          Completed on {project.completedDate}. Payment received ✓
                        </p>
                      </div>
                    </div>
                  </div>
                )}

                {/* Project Actions */}
                <div className="flex gap-3">
                  <Button 
                    variant="outline"
                    onClick={() => onViewProject(project.id)}
                  >
                    <Eye className="size-4 mr-2" />
                    View Details
                  </Button>
                  <Button variant="outline">
                    <MessageSquare className="size-4 mr-2" />
                    Message Client
                  </Button>
                  
                  {project.status === 'In Progress' && (
                    <WorkCompleteButton 
                      projectTitle={project.title}
                      onMarkComplete={() => handleMarkComplete(project.id)}
                    />
                  )}
                </div>
              </div>

              {/* Financial Summary */}
              <div className="bg-slate-50 p-4 border-t border-slate-200">
                <div className="grid grid-cols-3 gap-4 text-center">
                  <div>
                    <p className="text-xs text-slate-500 mb-1">Contract Amount</p>
                    <p className="text-lg font-bold text-slate-900">${project.totalAmount.toLocaleString()}</p>
                  </div>
                  <div>
                    <p className="text-xs text-slate-500 mb-1">Status</p>
                    <p className="text-lg font-bold text-blue-600">{project.status}</p>
                  </div>
                  <div>
                    <p className="text-xs text-slate-500 mb-1">Payment</p>
                    <p className="text-lg font-bold text-green-600">
                      {project.paidAmount > 0 ? `$${project.paidAmount.toLocaleString()}` : 'Pending'}
                    </p>
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
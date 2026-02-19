import { CheckCircle, Clock, AlertCircle, MessageSquare, Eye, Calendar, DollarSign } from 'lucide-react';
import { Button } from '../ui/button';
import { WorkApprovalButtons } from '../WorkApprovalButtons';
import { SimplePaymentModal } from '../shared/SimplePaymentModal';
import { useState } from 'react';

const activeWork = [
  {
    id: 1,
    projectTitle: 'Modern Kitchen Renovation',
    contractor: 'BuildPro Inc.',
    contractorAvatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop',
    startDate: 'Jan 15, 2026',
    estimatedCompletion: 'Mar 15, 2026',
    daysRemaining: 24,
    totalBudget: 45000,
    amountPaid: 0,
    status: 'Active', // "Active" | "Pending Approval" | "Completed"
    completedDate: null
  },
  {
    id: 2,
    projectTitle: 'Deck Installation',
    contractor: 'Elite Builders',
    contractorAvatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop',
    startDate: 'Feb 10, 2026',
    estimatedCompletion: 'May 20, 2026',
    daysRemaining: 90,
    totalBudget: 32000,
    amountPaid: 0,
    status: 'Pending Approval', // Contractor marked as complete
    completedDate: 'Feb 18, 2026'
  }
];

export function HomeownerActiveWork({ onViewProject }: { onViewProject: (id: number) => void }) {
  const [paymentModal, setPaymentModal] = useState<{
    isOpen: boolean;
    project: typeof activeWork[0] | null;
  }>({ isOpen: false, project: null });

  const handleApprove = (project: typeof activeWork[0]) => {
    // Open payment modal when approving work
    setPaymentModal({ isOpen: true, project });
  };

  const handlePaymentComplete = () => {
    alert('Work approved and payment sent! Project is now complete.');
    setPaymentModal({ isOpen: false, project: null });
  };

  const handleRequestChanges = (projectId: number, message: string) => {
    console.log('Request changes:', projectId, message);
    alert(`Changes requested: ${message}`);
    // Send message to contractor and change status back to "Active"
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Completed': return 'bg-green-500 text-white';
      case 'Pending Approval': return 'bg-blue-500 text-white';
      case 'Active': return 'bg-yellow-500 text-white';
      default: return 'bg-slate-300 text-slate-700';
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'Completed': return <CheckCircle className="size-4" />;
      case 'Pending Approval': return <Clock className="size-4" />;
      case 'Active': return <Clock className="size-4" />;
      default: return <AlertCircle className="size-4" />;
    }
  };

  return (
    <div className="bg-white rounded-xl p-8">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-slate-900 mb-2">Active Work</h1>
        <p className="text-slate-500">Track progress for ongoing projects</p>
      </div>

      {/* Summary Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="bg-blue-50 border border-blue-200 rounded-xl p-6">
          <div className="size-12 bg-blue-500 rounded-lg flex items-center justify-center mb-4">
            <Clock className="size-6 text-white" />
          </div>
          <p className="text-sm text-slate-600 mb-1">Active Projects</p>
          <p className="text-3xl font-bold text-slate-900">{activeWork.filter(p => p.status === 'Active').length}</p>
        </div>

        <div className="bg-[#fffbf0] border border-[#f9a825]/20 rounded-xl p-6">
          <div className="size-12 bg-[#f9a825] rounded-lg flex items-center justify-center mb-4">
            <AlertCircle className="size-6 text-white" />
          </div>
          <p className="text-sm text-slate-600 mb-1">Pending Approval</p>
          <p className="text-3xl font-bold text-slate-900">{activeWork.filter(p => p.status === 'Pending Approval').length}</p>
        </div>

        <div className="bg-green-50 border border-green-200 rounded-xl p-6">
          <div className="size-12 bg-green-500 rounded-lg flex items-center justify-center mb-4">
            <CheckCircle className="size-6 text-white" />
          </div>
          <p className="text-sm text-slate-600 mb-1">Completed Projects</p>
          <p className="text-3xl font-bold text-slate-900">{activeWork.filter(p => p.status === 'Completed').length}</p>
        </div>
      </div>

      {/* Active Projects */}
      <div className="space-y-8">
        {activeWork.map((project) => {
          return (
            <div 
              key={project.id}
              className="border border-slate-200 rounded-xl overflow-hidden hover:shadow-lg transition-all"
            >
              {/* Project Header */}
              <div className="bg-gradient-to-r from-slate-50 to-slate-100 p-6 border-b border-slate-200">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-start gap-4 flex-1">
                    <img 
                      src={project.contractorAvatar} 
                      alt={project.contractor}
                      className="size-16 rounded-full object-cover border-2 border-white shadow-md"
                    />
                    <div className="flex-1">
                      <h2 className="text-2xl font-bold text-slate-900 mb-2">{project.projectTitle}</h2>
                      <p className="text-slate-600 mb-3">Contractor: {project.contractor}</p>
                      <div className="flex items-center gap-6 text-sm text-slate-600">
                        <div className="flex items-center gap-2">
                          <Calendar className="size-4" />
                          <span>Started {project.startDate}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Clock className="size-4 text-[#f9a825]" />
                          <span className="font-semibold">{project.daysRemaining} days remaining</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="text-right">
                    <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full mb-3 font-semibold ${getStatusColor(project.status)}`}>
                      {getStatusIcon(project.status)}
                      <span>{project.status}</span>
                    </div>
                    <p className="text-sm text-slate-600">Budget</p>
                    <p className="text-2xl font-bold text-slate-900">${project.totalBudget.toLocaleString()}</p>
                  </div>
                </div>
              </div>

              {/* Project Body */}
              <div className="p-6">
                {/* Status Messages */}
                {project.status === 'Active' && (
                  <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6">
                    <p className="text-blue-900 font-semibold mb-1">Work in progress</p>
                    <p className="text-sm text-blue-700">
                      The contractor is working on your project. You'll receive a notification when they mark it as complete.
                    </p>
                  </div>
                )}

                {project.status === 'Pending Approval' && (
                  <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mb-6">
                    <div className="flex items-start gap-3">
                      <AlertCircle className="size-5 text-yellow-600 mt-0.5" />
                      <div>
                        <p className="text-yellow-900 font-semibold mb-1">Action required: Review completed work</p>
                        <p className="text-sm text-yellow-700">
                          The contractor has marked this project as complete. Please review the work and approve to release payment, or request changes if needed.
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
                          Completed on {project.completedDate}. Payment released ✓
                        </p>
                      </div>
                    </div>
                  </div>
                )}

                {/* Budget Info */}
                <div className="bg-white border border-slate-200 rounded-lg p-5 mb-6">
                  <h3 className="font-semibold text-slate-900 mb-4">Budget Overview</h3>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-slate-600">Total Budget</span>
                      <span className="font-semibold text-slate-900">${project.totalBudget.toLocaleString()}</span>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-slate-600">Amount Paid</span>
                      <span className="font-semibold text-green-600">${project.amountPaid.toLocaleString()}</span>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-slate-600">Remaining</span>
                      <span className="font-semibold text-[#f9a825]">${(project.totalBudget - project.amountPaid).toLocaleString()}</span>
                    </div>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="space-y-3">
                  {project.status === 'Pending Approval' && (
                    <WorkApprovalButtons
                      projectTitle={project.projectTitle}
                      contractorName={project.contractor}
                      amount={project.totalBudget}
                      onApprove={() => handleApprove(project)}
                      onRequestChanges={(msg) => handleRequestChanges(project.id, msg)}
                    />
                  )}

                  <div className="flex gap-3">
                    <Button 
                      className="bg-slate-900 hover:bg-slate-800 text-white"
                      onClick={() => onViewProject(project.id)}
                    >
                      <Eye className="size-4 mr-2" />
                      View Full Project
                    </Button>
                    <Button variant="outline">
                      <MessageSquare className="size-4 mr-2" />
                      Message Contractor
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {activeWork.length === 0 && (
        <div className="text-center py-16">
          <div className="size-20 bg-slate-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <Clock className="size-10 text-slate-400" />
          </div>
          <h3 className="text-xl font-semibold text-slate-900 mb-2">No active projects</h3>
          <p className="text-slate-500">Your ongoing projects will appear here</p>
        </div>
      )}

      {/* Payment Modal */}
      {paymentModal.isOpen && paymentModal.project && (
        <SimplePaymentModal
          isOpen={paymentModal.isOpen}
          onClose={() => setPaymentModal({ isOpen: false, project: null })}
          projectTitle={paymentModal.project.projectTitle}
          contractorName={paymentModal.project.contractor}
          amount={paymentModal.project.totalBudget}
          onPaymentComplete={handlePaymentComplete}
        />
      )}
    </div>
  );
}
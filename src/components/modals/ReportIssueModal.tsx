import { useState } from 'react';
import { AlertTriangle } from 'lucide-react';
import { Button } from '../ui/button';

interface ReportIssueModalProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm?: (reason: string, details: string) => void;
  projectTitle: string;
  projectId?: string;
}

export function ReportIssueModal({ isOpen, onClose, onConfirm, projectTitle }: ReportIssueModalProps) {
  const [reason, setReason] = useState('');
  const [details, setDetails] = useState('');

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (onConfirm) {
      onConfirm(reason, details);
    }
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl shadow-[0px_25px_50px_-12px_rgba(0,0,0,0.25)] w-full max-w-lg max-h-[90vh] overflow-y-auto animate-in fade-in zoom-in duration-200">
        <div className="p-6">
          {/* Header */}
          <div className="flex flex-col items-center mb-6">
            <div className="size-16 bg-red-100 rounded-full flex items-center justify-center mb-4">
              <AlertTriangle className="size-8 text-red-600" />
            </div>
            <h2 className="text-xl font-bold text-slate-900 mb-2">Report Issue</h2>
            <p className="text-slate-500 text-center text-sm">
              Report a problem with this project or request to void it
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Project Info */}
            <div className="bg-slate-50 rounded-lg p-4 border border-slate-200">
              <p className="text-xs text-slate-500 mb-1">Project</p>
              <p className="font-semibold text-slate-900">{projectTitle}</p>
            </div>

            {/* Reason */}
            <div>
              <label className="block text-sm font-semibold text-[#314158] mb-2">
                Reason <span className="text-red-500">*</span>
              </label>
              <select
                value={reason}
                onChange={(e) => setReason(e.target.value)}
                className="w-full h-12 px-4 bg-white border border-[rgba(202,213,226,0.64)] rounded-xl text-slate-900 focus:ring-2 focus:ring-red-500 focus:border-transparent outline-none"
                required
              >
                <option value="">Select a reason...</option>
                <option value="homeowner-unresponsive">Homeowner Unresponsive</option>
                <option value="scope-change">Scope Change Request</option>
                <option value="payment-issue">Payment Issue</option>
                <option value="safety-concern">Safety Concern</option>
                <option value="fraud">Suspected Fraud</option>
                <option value="other">Other</option>
              </select>
            </div>

            {/* Details */}
            <div>
              <label className="block text-sm font-semibold text-[#314158] mb-2">
                Details <span className="text-red-500">*</span>
              </label>
              <textarea
                value={details}
                onChange={(e) => setDetails(e.target.value)}
                placeholder="Please provide detailed information about the issue..."
                rows={5}
                className="w-full px-4 py-3 border border-[#cad5e2] rounded-xl text-slate-900 placeholder:text-slate-400 resize-none focus:ring-2 focus:ring-red-500 focus:border-transparent outline-none"
                required
              />
            </div>

            {/* Warning */}
            <div className="bg-amber-50 border border-amber-200 rounded-lg p-4">
              <div className="flex gap-3">
                <AlertTriangle className="size-5 text-amber-600 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-sm font-semibold text-amber-900 mb-1">Important</p>
                  <p className="text-xs text-amber-700">
                    False reports may result in account suspension. Our team will review your report and contact both parties.
                  </p>
                </div>
              </div>
            </div>

            {/* Actions */}
            <div className="flex gap-3 pt-2">
              <Button
                type="button"
                variant="outline"
                onClick={onClose}
                className="flex-1 h-12 border-slate-200"
              >
                Cancel
              </Button>
              <Button
                type="submit"
                className="flex-1 h-12 bg-red-600 hover:bg-red-700 text-white"
              >
                Submit Report
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
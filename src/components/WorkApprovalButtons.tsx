import { useState } from 'react';
import { CheckCircle, MessageSquare, X, DollarSign, AlertCircle } from 'lucide-react';
import { Button } from './ui/button';
import { Textarea } from './ui/textarea';

interface WorkApprovalButtonsProps {
  projectTitle: string;
  contractorName: string;
  amount: number;
  onApprove: () => void;
  onRequestChanges: (message: string) => void;
}

export function WorkApprovalButtons({
  projectTitle,
  contractorName,
  amount,
  onApprove,
  onRequestChanges
}: WorkApprovalButtonsProps) {
  const [showApproveConfirm, setShowApproveConfirm] = useState(false);
  const [showRequestChanges, setShowRequestChanges] = useState(false);
  const [changeMessage, setChangeMessage] = useState('');

  const handleApprove = () => {
    onApprove();
    setShowApproveConfirm(false);
  };

  const handleRequestChanges = () => {
    if (!changeMessage.trim()) {
      alert('Please describe what needs to be fixed');
      return;
    }
    onRequestChanges(changeMessage);
    setShowRequestChanges(false);
    setChangeMessage('');
  };

  return (
    <>
      <div className="flex gap-3">
        <Button
          onClick={() => setShowApproveConfirm(true)}
          className="flex-1 bg-green-600 hover:bg-green-700 text-white"
        >
          <CheckCircle className="size-4 mr-2" />
          Approve & Pay ${amount.toLocaleString()}
        </Button>
        <Button
          onClick={() => setShowRequestChanges(true)}
          variant="outline"
          className="flex-1 border-orange-500 text-orange-700 hover:bg-orange-50"
        >
          <AlertCircle className="size-4 mr-2" />
          Request Changes
        </Button>
      </div>

      {/* Approve Confirmation Modal */}
      {showApproveConfirm && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-xl shadow-2xl max-w-md w-full p-6">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-3">
                <div className="size-12 bg-green-100 rounded-full flex items-center justify-center">
                  <DollarSign className="size-6 text-green-600" />
                </div>
                <h3 className="text-xl font-bold text-slate-900">Release Payment</h3>
              </div>
              <button
                onClick={() => setShowApproveConfirm(false)}
                className="text-slate-400 hover:text-slate-600"
              >
                <X className="size-5" />
              </button>
            </div>

            <div className="mb-6">
              <div className="bg-slate-50 rounded-lg p-4 mb-4">
                <p className="text-sm text-slate-600 mb-1">Project</p>
                <p className="font-semibold text-slate-900 mb-3">{projectTitle}</p>
                
                <p className="text-sm text-slate-600 mb-1">Contractor</p>
                <p className="font-semibold text-slate-900 mb-3">{contractorName}</p>
                
                <p className="text-sm text-slate-600 mb-1">Payment Amount</p>
                <p className="text-2xl font-bold text-green-600">${amount.toLocaleString()}</p>
              </div>

              <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-3">
                <p className="text-sm text-yellow-800">
                  ⚠️ This action cannot be undone. Make sure you're satisfied with the completed work.
                </p>
              </div>
            </div>

            <div className="flex gap-3">
              <Button
                variant="outline"
                onClick={() => setShowApproveConfirm(false)}
                className="flex-1"
              >
                Cancel
              </Button>
              <Button
                onClick={handleApprove}
                className="flex-1 bg-green-600 hover:bg-green-700 text-white"
              >
                Confirm Payment
              </Button>
            </div>
          </div>
        </div>
      )}

      {/* Request Changes Modal */}
      {showRequestChanges && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-xl shadow-2xl max-w-md w-full p-6">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-3">
                <div className="size-12 bg-orange-100 rounded-full flex items-center justify-center">
                  <MessageSquare className="size-6 text-orange-600" />
                </div>
                <h3 className="text-xl font-bold text-slate-900">Request Changes</h3>
              </div>
              <button
                onClick={() => setShowRequestChanges(false)}
                className="text-slate-400 hover:text-slate-600"
              >
                <X className="size-5" />
              </button>
            </div>

            <div className="mb-6">
              <p className="text-slate-700 mb-4">
                Describe what needs to be fixed or changed:
              </p>
              <Textarea
                placeholder="Please be specific about what needs attention. Example: 'The cabinet doors are not aligned properly' or 'The paint on the wall has some spots that need touching up'"
                value={changeMessage}
                onChange={(e) => setChangeMessage(e.target.value)}
                rows={5}
                className="mb-3"
              />
              <p className="text-xs text-slate-500">
                The contractor will receive this message and can address your concerns.
              </p>
            </div>

            <div className="flex gap-3">
              <Button
                variant="outline"
                onClick={() => setShowRequestChanges(false)}
                className="flex-1"
              >
                Cancel
              </Button>
              <Button
                onClick={handleRequestChanges}
                className="flex-1 bg-orange-600 hover:bg-orange-700 text-white"
              >
                Send to Contractor
              </Button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

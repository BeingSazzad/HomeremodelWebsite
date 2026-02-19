import { useState } from 'react';
import { CheckCircle, X } from 'lucide-react';
import { Button } from './ui/button';

interface WorkCompleteButtonProps {
  projectTitle: string;
  onMarkComplete: () => void;
}

export function WorkCompleteButton({ projectTitle, onMarkComplete }: WorkCompleteButtonProps) {
  const [showConfirm, setShowConfirm] = useState(false);

  const handleConfirm = () => {
    onMarkComplete();
    setShowConfirm(false);
  };

  return (
    <>
      <Button
        onClick={() => setShowConfirm(true)}
        className="bg-green-600 hover:bg-green-700 text-white"
      >
        <CheckCircle className="size-4 mr-2" />
        Mark Work as Complete
      </Button>

      {showConfirm && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-xl shadow-2xl max-w-md w-full p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-xl font-bold text-slate-900">Mark Work as Complete</h3>
              <button
                onClick={() => setShowConfirm(false)}
                className="text-slate-400 hover:text-slate-600"
              >
                <X className="size-5" />
              </button>
            </div>

            <div className="mb-6">
              <p className="text-slate-700 mb-3">
                Are you sure all work for <strong>{projectTitle}</strong> is finished?
              </p>
              <p className="text-sm text-slate-600">
                The homeowner will be notified to review and approve the work before payment is released.
              </p>
            </div>

            <div className="flex gap-3">
              <Button
                variant="outline"
                onClick={() => setShowConfirm(false)}
                className="flex-1"
              >
                Cancel
              </Button>
              <Button
                onClick={handleConfirm}
                className="flex-1 bg-green-600 hover:bg-green-700 text-white"
              >
                Yes, Mark as Complete
              </Button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

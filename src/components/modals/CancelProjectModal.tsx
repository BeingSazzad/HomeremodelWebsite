import { useState } from 'react';
import { XCircle } from 'lucide-react';
import { Button } from '../ui/button';

interface CancelProjectModalProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm?: (reason: string) => void;
  projectTitle: string;
  projectId?: string;
}

export function CancelProjectModal({ isOpen, onClose, onConfirm, projectTitle }: CancelProjectModalProps) {
  const [reason, setReason] = useState('');

  if (!isOpen) return null;

  const handleConfirm = () => {
    if (onConfirm) {
      onConfirm(reason);
    }
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl shadow-[0px_25px_50px_0px_rgba(0,0,0,0.25)] w-full max-w-md p-9 animate-in fade-in zoom-in duration-200">
        <div className="flex flex-col items-center text-center">
          {/* Icon */}
          <div className="size-16 bg-red-100 rounded-full flex items-center justify-center mb-4">
            <XCircle className="size-8 text-red-600" />
          </div>

          {/* Heading */}
          <h2 className="text-lg font-semibold text-[#191919] mb-3">
            Cancel This Project?
          </h2>

          {/* Description */}
          <p className="text-sm text-[#666] leading-relaxed mb-6">
            Are you sure you want to cancel "{projectTitle}"? This action cannot be undone and the homeowner will be notified.
          </p>

          {/* Reason */}
          <div className="w-full mb-6 text-left">
            <label className="block text-sm font-semibold text-[#314158] mb-2">
              Reason (Optional)
            </label>
            <textarea
              value={reason}
              onChange={(e) => setReason(e.target.value)}
              placeholder="Please provide a reason for cancellation..."
              rows={3}
              className="w-full px-4 py-3 border border-[#cad5e2] rounded-xl text-slate-900 placeholder:text-slate-400 resize-none focus:ring-2 focus:ring-red-500 focus:border-transparent outline-none"
            />
          </div>

          {/* Actions */}
          <div className="flex gap-3 w-full">
            <Button
              variant="outline"
              onClick={onClose}
              className="flex-1 h-10 border-slate-200 text-slate-900"
            >
              Keep Project
            </Button>
            <Button
              onClick={handleConfirm}
              className="flex-1 h-10 bg-red-600 hover:bg-red-700 text-white"
            >
              Yes, Cancel Project
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
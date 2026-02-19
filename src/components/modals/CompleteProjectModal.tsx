import { Button } from '../ui/button';
import svgPaths from '../../imports/svg-i3ggcbscro';

interface CompleteProjectModalProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm?: () => void;
  projectTitle: string;
  projectId?: string;
}

export function CompleteProjectModal({ isOpen, onClose, onConfirm, projectTitle }: CompleteProjectModalProps) {
  if (!isOpen) return null;

  const handleConfirm = () => {
    if (onConfirm) {
      onConfirm();
    }
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl shadow-[0px_25px_50px_0px_rgba(0,0,0,0.25)] w-full max-w-md p-9 animate-in fade-in zoom-in duration-200">
        <div className="flex flex-col items-center text-center">
          {/* Icon */}
          <div className="size-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
            <svg className="size-8" fill="none" viewBox="0 0 32 32">
              <path 
                d={svgPaths.p3942a480} 
                stroke="#00A63E" 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth="2.66667" 
              />
              <path 
                d={svgPaths.p209700d8} 
                stroke="#00A63E" 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth="2.66667" 
              />
            </svg>
          </div>

          {/* Heading */}
          <h2 className="text-lg font-semibold text-[#191919] mb-3">
            Complete This Project?
          </h2>

          {/* Description */}
          <p className="text-sm text-[#666] leading-relaxed mb-6">
            Are you sure you want to mark "{projectTitle}" as complete? The homeowner will be notified and asked to leave a review.
          </p>

          {/* Actions */}
          <div className="flex gap-3 w-full">
            <Button
              variant="outline"
              onClick={onClose}
              className="flex-1 h-10 border-slate-200 text-slate-900"
            >
              Cancel
            </Button>
            <Button
              onClick={handleConfirm}
              className="w-[200px] h-10 bg-[#00a63e] hover:bg-[#009438] text-white"
            >
              Yes, Complete Project
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
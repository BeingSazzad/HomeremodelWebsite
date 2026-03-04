import { useState } from 'react';
import { RotateCcw, Clock, AlertCircle, CheckCircle } from 'lucide-react';
import { Button } from '../ui/button';

interface Job {
  id: string;
  title: string;
  status: 'open' | 'closed';
  quotesReceived: number;
  maxQuotes: number;
  closeReason: 'time_expired' | 'slots_filled' | null;
  reopenCount: number; // 0 = never reopened, 1 = reopened once
  reopenedAt: Date | null;
  originalDeadline: Date;
  currentDeadline: Date;
}

interface JobReopenButtonProps {
  job: Job;
  onReopen?: (jobId: string) => void;
}

export function JobReopenButton({ job, onReopen }: JobReopenButtonProps) {
  const [isReopening, setIsReopening] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);

  // Check if job is eligible for reopen
  const isEligibleForReopen = () => {
    // Must be closed
    if (job.status !== 'closed') return false;

    // Must have closed due to time expiration (NOT because 5 quotes filled)
    if (job.closeReason !== 'time_expired') return false;

    // Must have less than 5 quotes
    if (job.quotesReceived >= job.maxQuotes) return false;

    // Must NOT have been reopened before (max 1 reopen)
    if (job.reopenCount >= 1) return false;

    return true;
  };

  const handleReopen = () => {
    setIsReopening(true);
    
    // In real app, this would call API
    setTimeout(() => {
      onReopen?.(job.id);
      setIsReopening(false);
      setShowConfirm(false);
    }, 500);
  };

  const remainingSlots = job.maxQuotes - job.quotesReceived;

  if (!isEligibleForReopen()) {
    // Show why not eligible
    if (job.closeReason === 'slots_filled') {
      return (
        <div className="bg-green-50 border border-green-200 rounded-lg p-4">
          <div className="flex items-start gap-3">
            <CheckCircle className="size-5 text-green-600 flex-shrink-0 mt-0.5" />
            <div>
              <p className="font-semibold text-green-900 mb-1">Job Closed - All Slots Filled</p>
              <p className="text-sm text-green-700">
                You received the maximum of {job.maxQuotes} quotes. Review and select the best contractor for your project.
              </p>
            </div>
          </div>
        </div>
      );
    }

    if (job.reopenCount >= 1) {
      return (
        <div className="bg-amber-50 border border-amber-200 rounded-lg p-4">
          <div className="flex items-start gap-3">
            <AlertCircle className="size-5 text-amber-600 flex-shrink-0 mt-0.5" />
            <div>
              <p className="font-semibold text-amber-900 mb-1">Already Reopened Once</p>
              <p className="text-sm text-amber-700">
                This job was reopened on {job.reopenedAt?.toLocaleDateString()}. 
                Jobs can only be reopened once. Consider posting a new project if you need more quotes.
              </p>
            </div>
          </div>
        </div>
      );
    }

    return null;
  }

  if (showConfirm) {
    return (
      <div className="bg-blue-50 border-2 border-blue-500 rounded-xl p-6">
        <div className="flex items-start gap-4 mb-4">
          <div className="size-12 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0">
            <RotateCcw className="size-6 text-white" />
          </div>
          <div className="flex-1">
            <h3 className="text-lg font-bold text-blue-900 mb-2">Reopen This Job?</h3>
            <div className="space-y-2 text-sm text-blue-800">
              <p>✅ Your job will reopen for <strong>24 hours</strong></p>
              <p>✅ Your {job.quotesReceived} existing quote{job.quotesReceived !== 1 ? 's' : ''} will remain visible</p>
              <p>✅ You can receive up to <strong>{remainingSlots} more quote{remainingSlots !== 1 ? 's' : ''}</strong> ({remainingSlots} remaining slot{remainingSlots !== 1 ? 's' : ''})</p>
              <p>✅ The job will be re-routed to matching contractors</p>
              <p className="font-bold text-amber-700 bg-amber-100 px-3 py-2 rounded-lg mt-3">
                ⚠️ This is your ONE TIME reopen. You cannot reopen again after this.
              </p>
            </div>
          </div>
        </div>

        <div className="flex gap-3">
          <Button
            onClick={handleReopen}
            disabled={isReopening}
            className="flex-1 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3"
          >
            {isReopening ? (
              <>
                <div className="size-4 border-2 border-white border-t-transparent rounded-full animate-spin mr-2" />
                Reopening...
              </>
            ) : (
              <>
                <RotateCcw className="size-4 mr-2" />
                Confirm Reopen (24 Hours)
              </>
            )}
          </Button>
          <Button
            onClick={() => setShowConfirm(false)}
            variant="outline"
            className="px-6 border-blue-300 text-blue-700 hover:bg-blue-50"
          >
            Cancel
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-gradient-to-r from-amber-50 to-orange-50 border-2 border-amber-300 rounded-xl p-6">
      <div className="flex items-start gap-4 mb-4">
        <div className="size-12 bg-amber-500 rounded-full flex items-center justify-center flex-shrink-0">
          <Clock className="size-6 text-white" />
        </div>
        <div className="flex-1">
          <h3 className="text-lg font-bold text-amber-900 mb-2">Job Closed - Time Expired</h3>
          <p className="text-sm text-amber-800 mb-3">
            Your 24-hour window ended with <strong>{job.quotesReceived} of {job.maxQuotes} quotes received</strong>. 
            You have the option to reopen this job <strong>one time</strong> for an additional 24 hours.
          </p>
          <div className="bg-white/60 border border-amber-200 rounded-lg p-4 mb-4">
            <p className="text-sm font-semibold text-amber-900 mb-2">If you reopen:</p>
            <ul className="space-y-1 text-sm text-amber-800">
              <li>✓ Job reopens for exactly 24 hours</li>
              <li>✓ Your {job.quotesReceived} existing quote{job.quotesReceived !== 1 ? 's' : ''} stay visible</li>
              <li>✓ You can get up to {remainingSlots} more quote{remainingSlots !== 1 ? 's' : ''}</li>
              <li>✓ Job is automatically re-routed to contractors</li>
              <li className="text-red-700 font-semibold">⚠️ This can only be done ONCE</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="flex gap-3">
        <Button
          onClick={() => setShowConfirm(true)}
          className="flex-1 bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white font-bold py-3 shadow-lg"
        >
          <RotateCcw className="size-5 mr-2" />
          Reopen Job (One Time Only)
        </Button>
        <Button
          onClick={() => {}} // Navigate to post new project
          variant="outline"
          className="px-6 border-slate-300 text-slate-700 hover:bg-slate-50"
        >
          Post New Project Instead
        </Button>
      </div>
    </div>
  );
}

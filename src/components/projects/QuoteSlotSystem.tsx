import { useState, useEffect } from 'react';
import { Clock, Users, Lock, Timer, CheckCircle } from 'lucide-react';

interface Quote {
  id: string;
  contractorName: string;
  amount: number;
  status: 'submitted' | 'reserved' | 'available';
  timeRemaining?: number; // in seconds
}

interface QuoteSlotSystemProps {
  projectTitle: string;
  totalSlots?: number;
  timeLimit?: number; // in hours
  reservationTime?: number; // in minutes
}

export function QuoteSlotSystem({ 
  projectTitle,
  totalSlots = 5,
  timeLimit = 24,
  reservationTime = 30
}: QuoteSlotSystemProps) {
  const [quotes, setQuotes] = useState<Quote[]>([
    { id: '1', contractorName: 'ABC Construction', amount: 15000, status: 'submitted' },
    { id: '2', contractorName: 'Pro Builders Inc', amount: 14500, status: 'submitted' },
    { id: '3', contractorName: 'Elite Remodeling', amount: 0, status: 'reserved', timeRemaining: 1200 },
  ]);

  const [projectTimeRemaining, setProjectTimeRemaining] = useState(18 * 3600); // 18 hours in seconds
  const [canReopen, setCanReopen] = useState(false);
  const [hasReopened, setHasReopened] = useState(false);

  // Calculate available slots
  const submittedQuotes = quotes.filter(q => q.status === 'submitted').length;
  const reservedSlots = quotes.filter(q => q.status === 'reserved').length;
  const availableSlots = totalSlots - submittedQuotes - reservedSlots;
  const projectClosed = projectTimeRemaining <= 0 || submittedQuotes >= totalSlots;

  // Timer countdown
  useEffect(() => {
    const interval = setInterval(() => {
      setProjectTimeRemaining(prev => Math.max(0, prev - 1));
      
      setQuotes(prev => prev.map(quote => {
        if (quote.status === 'reserved' && quote.timeRemaining) {
          const newTime = quote.timeRemaining - 1;
          if (newTime <= 0) {
            // Slot released
            return { ...quote, status: 'available' as const, timeRemaining: undefined };
          }
          return { ...quote, timeRemaining: newTime };
        }
        return quote;
      }));
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  // Check if project can be reopened
  useEffect(() => {
    if (projectTimeRemaining <= 0 && submittedQuotes < totalSlots && !hasReopened) {
      setCanReopen(true);
    }
  }, [projectTimeRemaining, submittedQuotes, totalSlots, hasReopened]);

  const formatTime = (seconds: number) => {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;
    
    if (hours > 0) {
      return `${hours}h ${minutes}m`;
    }
    return `${minutes}m ${secs}s`;
  };

  const handleReopen = () => {
    setProjectTimeRemaining(24 * 3600); // Reset to 24 hours
    setHasReopened(true);
    setCanReopen(false);
  };

  const handleStartQuote = () => {
    // Simulate contractor starting a quote
    const newQuote: Quote = {
      id: Date.now().toString(),
      contractorName: 'Your Company',
      amount: 0,
      status: 'reserved',
      timeRemaining: reservationTime * 60
    };
    setQuotes(prev => [...prev, newQuote]);
  };

  return (
    <div className="bg-white rounded-xl shadow-lg">
      {/* Header */}
      <div className="p-6 border-b border-slate-200">
        <h2 className="text-2xl font-bold text-slate-900 mb-2">{projectTitle}</h2>
        <div className="flex items-center gap-2 text-slate-600">
          <Users className="size-5" />
          <span>Quote Status: {submittedQuotes} of {totalSlots} slots filled</span>
        </div>
      </div>

      {/* Project Timer */}
      <div className="p-6 bg-gradient-to-r from-[#f9a825]/10 to-amber-50">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className={`size-12 rounded-full flex items-center justify-center ${
              projectTimeRemaining > 3600 ? 'bg-green-100' : 'bg-red-100'
            }`}>
              <Clock className={`size-6 ${
                projectTimeRemaining > 3600 ? 'text-green-600' : 'text-red-600'
              }`} />
            </div>
            <div>
              <p className="text-sm font-medium text-slate-600">Project Window</p>
              <p className={`text-2xl font-bold ${
                projectTimeRemaining > 3600 ? 'text-slate-900' : 'text-red-600'
              }`}>
                {projectTimeRemaining > 0 ? formatTime(projectTimeRemaining) : 'CLOSED'}
              </p>
            </div>
          </div>

          {projectClosed && canReopen && !hasReopened && (
            <button
              onClick={handleReopen}
              className="px-6 py-3 bg-[#f9a825] text-white rounded-lg font-semibold hover:bg-[#f9a825]/90 transition-all"
            >
              Reopen for 24 Hours (One-Time)
            </button>
          )}

          {hasReopened && (
            <div className="px-4 py-2 bg-blue-100 text-blue-700 rounded-lg text-sm font-semibold">
              Reopened (1 of 1 allowed)
            </div>
          )}
        </div>

        {projectClosed && !canReopen && (
          <div className="mt-4 p-3 bg-slate-100 rounded-lg">
            <p className="text-sm text-slate-700">
              {submittedQuotes >= totalSlots 
                ? '✅ All quote slots filled. Project closed to new quotes.'
                : '⏰ 24-hour window expired. Project closed.'}
            </p>
          </div>
        )}
      </div>

      {/* Quote Slots */}
      <div className="p-6">
        <h3 className="font-semibold text-slate-900 mb-4">Quote Slots ({totalSlots} Maximum)</h3>
        <div className="space-y-3">
          {/* Submitted Quotes */}
          {quotes.filter(q => q.status === 'submitted').map((quote, index) => (
            <div key={quote.id} className="flex items-center justify-between p-4 bg-green-50 border border-green-200 rounded-lg">
              <div className="flex items-center gap-3">
                <div className="size-10 bg-green-100 rounded-full flex items-center justify-center">
                  <CheckCircle className="size-5 text-green-600" />
                </div>
                <div>
                  <p className="font-semibold text-slate-900">Slot {index + 1} - {quote.contractorName}</p>
                  <p className="text-sm text-slate-600">${quote.amount.toLocaleString()} total estimate</p>
                </div>
              </div>
              <span className="px-3 py-1 bg-green-600 text-white text-sm font-semibold rounded-full">
                Submitted
              </span>
            </div>
          ))}

          {/* Reserved Slots */}
          {quotes.filter(q => q.status === 'reserved').map((quote, index) => (
            <div key={quote.id} className="flex items-center justify-between p-4 bg-amber-50 border border-amber-200 rounded-lg">
              <div className="flex items-center gap-3">
                <div className="size-10 bg-amber-100 rounded-full flex items-center justify-center">
                  <Timer className="size-5 text-amber-600" />
                </div>
                <div>
                  <p className="font-semibold text-slate-900">Slot {submittedQuotes + index + 1} - {quote.contractorName}</p>
                  <p className="text-sm text-slate-600">Quote in progress</p>
                </div>
              </div>
              <div className="text-right">
                <span className="px-3 py-1 bg-amber-600 text-white text-sm font-semibold rounded-full">
                  Reserved
                </span>
                {quote.timeRemaining && (
                  <p className="text-xs text-amber-700 mt-1 font-medium">
                    {formatTime(quote.timeRemaining)} remaining
                  </p>
                )}
              </div>
            </div>
          ))}

          {/* Available Slots */}
          {!projectClosed && Array.from({ length: availableSlots }).map((_, index) => (
            <div key={`available-${index}`} className="flex items-center justify-between p-4 bg-slate-50 border-2 border-dashed border-slate-300 rounded-lg">
              <div className="flex items-center gap-3">
                <div className="size-10 bg-slate-200 rounded-full flex items-center justify-center">
                  <Users className="size-5 text-slate-500" />
                </div>
                <div>
                  <p className="font-semibold text-slate-600">Slot {submittedQuotes + reservedSlots + index + 1}</p>
                  <p className="text-sm text-slate-500">Available for contractors</p>
                </div>
              </div>
              <span className="px-3 py-1 bg-slate-200 text-slate-600 text-sm font-semibold rounded-full">
                Available
              </span>
            </div>
          ))}

          {/* Locked Slots (when project closed) */}
          {projectClosed && availableSlots > 0 && Array.from({ length: availableSlots }).map((_, index) => (
            <div key={`locked-${index}`} className="flex items-center justify-between p-4 bg-slate-100 border border-slate-300 rounded-lg opacity-60">
              <div className="flex items-center gap-3">
                <div className="size-10 bg-slate-300 rounded-full flex items-center justify-center">
                  <Lock className="size-5 text-slate-500" />
                </div>
                <div>
                  <p className="font-semibold text-slate-500">Slot {submittedQuotes + reservedSlots + index + 1}</p>
                  <p className="text-sm text-slate-400">Project closed</p>
                </div>
              </div>
              <span className="px-3 py-1 bg-slate-300 text-slate-600 text-sm font-semibold rounded-full">
                Locked
              </span>
            </div>
          ))}
        </div>

        {/* Contractor Action Button */}
        {!projectClosed && availableSlots > 0 && (
          <button
            onClick={handleStartQuote}
            className="w-full mt-6 bg-[#f9a825] text-white py-4 rounded-lg font-semibold hover:bg-[#f9a825]/90 transition-all shadow-md"
          >
            Start Quote (Reserves Slot for {reservationTime} Minutes)
          </button>
        )}
      </div>

      {/* Info Footer */}
      <div className="p-4 bg-blue-50 border-t border-blue-100">
        <p className="text-sm text-blue-800">
          <strong>How it works:</strong> This project accepts up to {totalSlots} quotes within {timeLimit} hours. 
          When you click "Start Quote", you have {reservationTime} minutes to submit. 
          If you don't submit in time, the slot becomes available again.
        </p>
      </div>
    </div>
  );
}

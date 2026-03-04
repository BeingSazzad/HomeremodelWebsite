import { useState, useEffect } from 'react';
import { Timer, Users, Lock, Unlock, AlertCircle, Clock } from 'lucide-react';

interface QuoteSlot {
  id: number;
  contractorId?: string;
  contractorName?: string;
  status: 'available' | 'reserved' | 'submitted';
  reservedAt?: Date;
  submittedAt?: Date;
}

interface QuoteSlotSystemProps {
  jobId: string;
  totalSlots?: number;
  jobPostedAt: Date;
  onStartQuote?: () => void;
  currentContractorId?: string;
}

export function QuoteSlotSystem({
  jobId,
  totalSlots = 5,
  jobPostedAt,
  onStartQuote,
  currentContractorId = 'current-contractor'
}: QuoteSlotSystemProps) {
  const [slots, setSlots] = useState<QuoteSlot[]>([]);
  const [reservationTimer, setReservationTimer] = useState<number | null>(null);
  const [jobTimeRemaining, setJobTimeRemaining] = useState<number>(0);
  const [hasReservedSlot, setHasReservedSlot] = useState(false);
  const [isJobClosed, setIsJobClosed] = useState(false);
  const [canReopen, setCanReopen] = useState(false);
  const [hasReopened, setHasReopened] = useState(false);

  // Initialize slots
  useEffect(() => {
    const initialSlots: QuoteSlot[] = Array.from({ length: totalSlots }, (_, i) => ({
      id: i + 1,
      status: 'available'
    }));
    
    // Mock: Some slots already taken
    initialSlots[0] = {
      id: 1,
      contractorId: 'contractor-1',
      contractorName: 'Elite Home Solutions',
      status: 'submitted',
      submittedAt: new Date(Date.now() - 2 * 60 * 60 * 1000)
    };
    initialSlots[1] = {
      id: 2,
      contractorId: 'contractor-2',
      contractorName: 'Pro Builders Inc',
      status: 'submitted',
      submittedAt: new Date(Date.now() - 1 * 60 * 60 * 1000)
    };
    initialSlots[2] = {
      id: 3,
      contractorId: 'contractor-3',
      contractorName: 'Quality Renovations',
      status: 'reserved',
      reservedAt: new Date(Date.now() - 10 * 60 * 1000)
    };
    
    setSlots(initialSlots);
  }, [totalSlots]);

  // Job 24-hour countdown
  useEffect(() => {
    const updateJobTimer = () => {
      const jobExpiresAt = new Date(jobPostedAt.getTime() + 24 * 60 * 60 * 1000);
      const now = new Date();
      const timeLeft = Math.max(0, Math.floor((jobExpiresAt.getTime() - now.getTime()) / 1000));
      
      setJobTimeRemaining(timeLeft);
      
      if (timeLeft === 0 && !isJobClosed) {
        handleJobExpiration();
      }
    };

    updateJobTimer();
    const interval = setInterval(updateJobTimer, 1000);
    return () => clearInterval(interval);
  }, [jobPostedAt, isJobClosed]);

  // 30-minute reservation countdown
  useEffect(() => {
    if (reservationTimer === null) return;

    if (reservationTimer <= 0) {
      alert('Time expired! Your slot has been released.');
      releaseCurrentSlot();
      return;
    }

    const interval = setInterval(() => {
      setReservationTimer(prev => prev !== null ? prev - 1 : null);
    }, 1000);

    return () => clearInterval(interval);
  }, [reservationTimer]);

  // Check reserved slots and auto-release after 30 min
  useEffect(() => {
    const checkReservedSlots = () => {
      const now = new Date();
      setSlots(prevSlots => 
        prevSlots.map(slot => {
          if (slot.status === 'reserved' && slot.reservedAt) {
            const reservedDuration = (now.getTime() - slot.reservedAt.getTime()) / 1000;
            if (reservedDuration > 30 * 60) {
              return { ...slot, status: 'available', reservedAt: undefined, contractorId: undefined };
            }
          }
          return slot;
        })
      );
    };

    const interval = setInterval(checkReservedSlots, 1000);
    return () => clearInterval(interval);
  }, []);

  const handleJobExpiration = () => {
    const submittedCount = slots.filter(s => s.status === 'submitted').length;
    setIsJobClosed(true);
    
    // Can reopen if not all 5 slots filled
    if (submittedCount < totalSlots && !hasReopened) {
      setCanReopen(true);
    }
  };

  const handleStartQuote = () => {
    const availableSlot = slots.find(s => s.status === 'available');
    if (!availableSlot) {
      alert('No slots available!');
      return;
    }

    // Reserve slot
    setSlots(prevSlots =>
      prevSlots.map(slot =>
        slot.id === availableSlot.id
          ? {
              ...slot,
              status: 'reserved',
              contractorId: currentContractorId,
              reservedAt: new Date()
            }
          : slot
      )
    );

    setHasReservedSlot(true);
    setReservationTimer(30 * 60); // 30 minutes in seconds
    onStartQuote?.();
  };

  const releaseCurrentSlot = () => {
    setSlots(prevSlots =>
      prevSlots.map(slot =>
        slot.contractorId === currentContractorId && slot.status === 'reserved'
          ? { ...slot, status: 'available', contractorId: undefined, reservedAt: undefined }
          : slot
      )
    );
    setHasReservedSlot(false);
    setReservationTimer(null);
  };

  const handleReopenJob = () => {
    setIsJobClosed(false);
    setCanReopen(false);
    setHasReopened(true);
    // Reset job timer for another 24 hours
    const newPostedAt = new Date();
    // In real implementation, update the jobPostedAt
  };

  const availableCount = slots.filter(s => s.status === 'available').length;
  const submittedCount = slots.filter(s => s.status === 'submitted').length;
  const reservedCount = slots.filter(s => s.status === 'reserved').length;

  const formatTime = (seconds: number) => {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;
    return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  return (
    <div className="space-y-6">
      {/* Job Status Banner */}
      <div className={`p-4 rounded-xl border-2 ${
        isJobClosed 
          ? 'bg-red-50 border-red-200' 
          : jobTimeRemaining < 3600 
          ? 'bg-amber-50 border-amber-200' 
          : 'bg-blue-50 border-blue-200'
      }`}>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Clock className={`size-6 ${
              isJobClosed ? 'text-red-600' : jobTimeRemaining < 3600 ? 'text-amber-600' : 'text-blue-600'
            }`} />
            <div>
              <p className="font-semibold text-slate-900">
                {isJobClosed ? 'Job Closed' : 'Job Window Active'}
              </p>
              <p className={`text-sm ${
                isJobClosed ? 'text-red-700' : jobTimeRemaining < 3600 ? 'text-amber-700' : 'text-blue-700'
              }`}>
                {isJobClosed 
                  ? `Closed with ${submittedCount}/${totalSlots} quotes submitted`
                  : `Time remaining: ${formatTime(jobTimeRemaining)}`
                }
              </p>
            </div>
          </div>

          {canReopen && (
            <button
              onClick={handleReopenJob}
              className="px-4 py-2 bg-green-600 text-white rounded-lg font-semibold hover:bg-green-700 transition-colors"
            >
              Reopen Job (One Time Only)
            </button>
          )}
        </div>
      </div>

      {/* Slot Status */}
      <div className="bg-white border-2 border-slate-200 rounded-xl p-6">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-lg font-bold text-slate-900 flex items-center gap-2">
            <Users className="size-5 text-[#f9a825]" />
            Quote Slots: {submittedCount}/{totalSlots}
          </h3>
          <div className="flex items-center gap-4 text-sm">
            <div className="flex items-center gap-2">
              <div className="size-3 bg-green-500 rounded-full" />
              <span className="text-slate-600">Submitted: {submittedCount}</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="size-3 bg-amber-500 rounded-full" />
              <span className="text-slate-600">Reserved: {reservedCount}</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="size-3 bg-slate-300 rounded-full" />
              <span className="text-slate-600">Available: {availableCount}</span>
            </div>
          </div>
        </div>

        {/* Slot Grid */}
        <div className="grid grid-cols-5 gap-4 mb-6">
          {slots.map(slot => (
            <div
              key={slot.id}
              className={`p-4 rounded-lg border-2 text-center transition-all ${
                slot.status === 'submitted'
                  ? 'bg-green-50 border-green-500'
                  : slot.status === 'reserved'
                  ? 'bg-amber-50 border-amber-500'
                  : 'bg-slate-50 border-slate-300'
              }`}
            >
              <div className="flex items-center justify-center mb-2">
                {slot.status === 'submitted' && <Lock className="size-5 text-green-600" />}
                {slot.status === 'reserved' && <Timer className="size-5 text-amber-600" />}
                {slot.status === 'available' && <Unlock className="size-5 text-slate-400" />}
              </div>
              <p className="text-xs font-semibold text-slate-900 mb-1">Slot {slot.id}</p>
              <p className="text-xs text-slate-600">
                {slot.status === 'submitted' && slot.contractorName}
                {slot.status === 'reserved' && 'Reserved...'}
                {slot.status === 'available' && 'Open'}
              </p>
            </div>
          ))}
        </div>

        {/* Reservation Timer */}
        {hasReservedSlot && reservationTimer !== null && (
          <div className="p-4 bg-amber-50 border-2 border-amber-500 rounded-lg mb-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <Timer className="size-6 text-amber-600" />
                <div>
                  <p className="font-bold text-amber-900">Your Slot is Reserved</p>
                  <p className="text-sm text-amber-700">Submit your quote before time expires</p>
                </div>
              </div>
              <div className="text-right">
                <p className="text-3xl font-bold text-amber-900">{formatTime(reservationTimer)}</p>
                <p className="text-xs text-amber-600">Time Remaining</p>
              </div>
            </div>
          </div>
        )}

        {/* Start Quote Button */}
        {!hasReservedSlot && !isJobClosed && availableCount > 0 && (
          <button
            onClick={handleStartQuote}
            className="w-full bg-[#f9a825] text-white py-3 rounded-lg font-bold hover:bg-[#e69b20] transition-colors"
          >
            Start Quote (Reserve Slot)
          </button>
        )}

        {!hasReservedSlot && !isJobClosed && availableCount === 0 && (
          <div className="p-4 bg-red-50 border border-red-200 rounded-lg text-center">
            <AlertCircle className="size-6 text-red-600 mx-auto mb-2" />
            <p className="font-semibold text-red-900">All Slots Filled</p>
            <p className="text-sm text-red-700">This job is no longer accepting quotes</p>
          </div>
        )}

        {isJobClosed && (
          <div className="p-4 bg-slate-100 border border-slate-300 rounded-lg text-center">
            <Lock className="size-6 text-slate-600 mx-auto mb-2" />
            <p className="font-semibold text-slate-900">Job Closed</p>
            <p className="text-sm text-slate-600">
              {hasReopened ? 'This job has been reopened once and is now permanently closed' : 'No longer accepting quotes'}
            </p>
          </div>
        )}

        {/* Warning */}
        <div className="mt-4 p-3 bg-blue-50 border border-blue-200 rounded-lg">
          <p className="text-sm text-blue-800">
            <strong>Important:</strong> Once you click "Start Quote", your slot is reserved and cannot be cancelled. 
            You must submit within 30 minutes or the slot will be automatically released.
          </p>
        </div>
      </div>
    </div>
  );
}

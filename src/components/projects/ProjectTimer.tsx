import { useEffect, useState } from 'react';
import { Clock, AlertCircle } from 'lucide-react';

interface ProjectTimerProps {
  postedAt: Date;
  deadline?: string; // Optional deadline string for display
  maxDuration?: number; // in seconds, default 24 hours
  onExpired?: () => void;
  showIcon?: boolean;
  compact?: boolean;
}

export function ProjectTimer({ 
  postedAt, 
  deadline,
  maxDuration = 24 * 60 * 60, // 24 hours
  onExpired,
  showIcon = true,
  compact = false
}: ProjectTimerProps) {
  const [timeRemaining, setTimeRemaining] = useState<number>(0);
  const [isExpired, setIsExpired] = useState(false);

  useEffect(() => {
    const calculateTimeRemaining = () => {
      const now = new Date();
      const posted = new Date(postedAt);
      const elapsed = (now.getTime() - posted.getTime()) / 1000; // seconds
      const remaining = Math.max(0, maxDuration - elapsed);
      
      setTimeRemaining(remaining);
      
      if (remaining <= 0 && !isExpired) {
        setIsExpired(true);
        onExpired?.();
      }
    };

    calculateTimeRemaining();
    const interval = setInterval(calculateTimeRemaining, 1000);

    return () => clearInterval(interval);
  }, [postedAt, maxDuration, isExpired, onExpired]);

  const formatTime = (seconds: number): string => {
    if (seconds <= 0) return '0h 0m';
    
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const secs = Math.floor(seconds % 60);
    
    if (compact) {
      return `${hours}h ${minutes}m`;
    }
    
    return `${hours}h ${minutes}m ${secs}s`;
  };

  const getColorClass = (): string => {
    if (isExpired) return 'text-red-600';
    
    const hoursLeft = timeRemaining / 3600;
    if (hoursLeft < 3) return 'text-red-600';
    if (hoursLeft < 6) return 'text-amber-600';
    return 'text-blue-600';
  };

  const getBgClass = (): string => {
    if (isExpired) return 'bg-red-50 border-red-200';
    
    const hoursLeft = timeRemaining / 3600;
    if (hoursLeft < 3) return 'bg-red-50 border-red-200';
    if (hoursLeft < 6) return 'bg-amber-50 border-amber-200';
    return 'bg-blue-50 border-blue-200';
  };

  if (isExpired) {
    return (
      <div className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full border ${getBgClass()}`}>
        {showIcon && <AlertCircle className="size-4 text-red-600" />}
        <span className="text-sm font-semibold text-red-600">
          {compact ? 'Expired' : 'Time Expired'}
        </span>
      </div>
    );
  }

  return (
    <div className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full border ${getBgClass()}`}>
      {showIcon && <Clock className={`size-4 ${getColorClass()}`} />}
      <span className={`text-sm font-semibold ${getColorClass()}`}>
        {formatTime(timeRemaining)}
        {!compact && ' remaining'}
      </span>
    </div>
  );
}
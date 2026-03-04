import { FileText, CheckCircle, Lock } from 'lucide-react';

interface QuoteSlotsProgressProps {
  filled: number;
  total: number;
  showDetails?: boolean;
  variant?: 'default' | 'compact' | 'minimal';
}

export function QuoteSlotsProgress({ 
  filled, 
  total = 5, 
  showDetails = true,
  variant = 'default'
}: QuoteSlotsProgressProps) {
  const remaining = total - filled;
  const percentage = (filled / total) * 100;
  const isFull = filled >= total;

  // Color logic
  const getColor = () => {
    if (isFull) return 'green';
    if (filled >= 3) return 'amber';
    return 'blue';
  };

  const color = getColor();

  const colorClasses = {
    green: {
      bg: 'bg-green-50',
      border: 'border-green-200',
      text: 'text-green-700',
      progress: 'bg-green-500'
    },
    amber: {
      bg: 'bg-amber-50',
      border: 'border-amber-200',
      text: 'text-amber-700',
      progress: 'bg-amber-500'
    },
    blue: {
      bg: 'bg-blue-50',
      border: 'border-blue-200',
      text: 'text-blue-700',
      progress: 'bg-blue-500'
    }
  };

  const classes = colorClasses[color];

  // Minimal variant - just badge
  if (variant === 'minimal') {
    return (
      <div className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full border ${classes.bg} ${classes.border}`}>
        <FileText className={`size-3.5 ${classes.text}`} />
        <span className={`text-xs font-semibold ${classes.text}`}>
          {filled}/{total}
        </span>
      </div>
    );
  }

  // Compact variant - badge with text
  if (variant === 'compact') {
    return (
      <div className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full border ${classes.bg} ${classes.border}`}>
        {isFull ? (
          <CheckCircle className={`size-4 ${classes.text}`} />
        ) : (
          <FileText className={`size-4 ${classes.text}`} />
        )}
        <span className={`text-sm font-semibold ${classes.text}`}>
          {filled}/{total} Quotes
        </span>
        {isFull && (
          <Lock className="size-3.5 text-green-600" />
        )}
      </div>
    );
  }

  // Default variant - full display
  return (
    <div className={`p-4 rounded-lg border ${classes.bg} ${classes.border}`}>
      <div className="flex items-center justify-between mb-2">
        <div className="flex items-center gap-2">
          {isFull ? (
            <CheckCircle className={`size-5 ${classes.text}`} />
          ) : (
            <FileText className={`size-5 ${classes.text}`} />
          )}
          <span className={`font-semibold ${classes.text}`}>
            Quote Slots: {filled}/{total}
          </span>
        </div>
        {isFull && (
          <div className="flex items-center gap-1 text-green-600">
            <Lock className="size-4" />
            <span className="text-sm font-semibold">Full</span>
          </div>
        )}
      </div>

      {/* Progress Bar */}
      <div className="w-full bg-white/60 rounded-full h-2 mb-2 overflow-hidden">
        <div 
          className={`h-full ${classes.progress} transition-all duration-500 ease-out`}
          style={{ width: `${percentage}%` }}
        />
      </div>

      {/* Details */}
      {showDetails && (
        <div className="flex items-center justify-between text-sm">
          <span className={`${classes.text} font-medium`}>
            {isFull 
              ? '✅ All slots filled - Project closed to new quotes' 
              : `${remaining} slot${remaining !== 1 ? 's' : ''} available`
            }
          </span>
          <span className={`${classes.text} font-bold`}>
            {Math.round(percentage)}%
          </span>
        </div>
      )}
    </div>
  );
}

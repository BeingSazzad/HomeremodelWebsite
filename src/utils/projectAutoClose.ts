/**
 * Project Auto-Close System
 * 
 * REQUIREMENTS:
 * - Job closes when 5 quotes submitted OR 24 hours expires (whichever comes first)
 * - Auto status change from "OPEN" → "CLOSED"
 * - One-time reopen available if closed by time (not max quotes)
 */

export interface ProjectStatus {
  status: 'OPEN' | 'CLOSED' | 'ACTIVE' | 'COMPLETED' | 'DRAFT';
  postedAt: Date;
  closedAt?: Date;
  quotesReceived: number;
  maxQuotes: number;
  hasReopened: boolean;
  closedReason?: 'MAX_QUOTES' | 'TIME_EXPIRED' | 'MANUAL';
}

export interface AutoCloseResult {
  shouldClose: boolean;
  newStatus: 'OPEN' | 'CLOSED';
  reason: 'MAX_QUOTES' | 'TIME_EXPIRED' | null;
  timeRemaining: number; // in seconds
  canReopen: boolean;
}

/**
 * Calculate if project should auto-close based on quotes or time
 */
export function checkAutoClose(project: ProjectStatus): AutoCloseResult {
  const now = new Date();
  const postedAt = new Date(project.postedAt);
  const timeElapsed = (now.getTime() - postedAt.getTime()) / 1000; // seconds
  const twentyFourHours = 24 * 60 * 60; // 86400 seconds
  const timeRemaining = Math.max(0, twentyFourHours - timeElapsed);

  // Check if max quotes reached (5 quotes)
  if (project.quotesReceived >= project.maxQuotes) {
    return {
      shouldClose: true,
      newStatus: 'CLOSED',
      reason: 'MAX_QUOTES',
      timeRemaining: 0,
      canReopen: false // Cannot reopen if max quotes reached
    };
  }

  // Check if 24 hours expired
  if (timeRemaining <= 0) {
    return {
      shouldClose: true,
      newStatus: 'CLOSED',
      reason: 'TIME_EXPIRED',
      timeRemaining: 0,
      canReopen: !project.hasReopened // Can reopen once if time expired
    };
  }

  // Still open
  return {
    shouldClose: false,
    newStatus: 'OPEN',
    reason: null,
    timeRemaining,
    canReopen: false
  };
}

/**
 * Format remaining time as human-readable string
 */
export function formatTimeRemaining(seconds: number): string {
  if (seconds <= 0) return 'Expired';
  
  const hours = Math.floor(seconds / 3600);
  const minutes = Math.floor((seconds % 3600) / 60);
  
  if (hours > 0) {
    return `${hours}h ${minutes}m`;
  }
  return `${minutes}m`;
}

/**
 * Get badge info based on project status
 */
export function getStatusBadge(project: ProjectStatus) {
  const result = checkAutoClose(project);
  
  if (project.status === 'CLOSED') {
    if (project.closedReason === 'MAX_QUOTES') {
      return {
        text: '🔒 Closed - Max Quotes',
        color: 'bg-green-100 text-green-700 border-green-200',
        description: 'All 5 quote slots filled'
      };
    }
    if (project.closedReason === 'TIME_EXPIRED') {
      return {
        text: '⏰ Closed - Time Expired',
        color: 'bg-amber-100 text-amber-700 border-amber-200',
        description: '24-hour window ended'
      };
    }
    return {
      text: '🔒 Closed',
      color: 'bg-slate-100 text-slate-700 border-slate-200',
      description: 'No longer accepting quotes'
    };
  }
  
  if (project.status === 'OPEN') {
    const hoursLeft = Math.floor(result.timeRemaining / 3600);
    const quotesLeft = project.maxQuotes - project.quotesReceived;
    
    if (hoursLeft < 6) {
      return {
        text: `⚠️ Closing Soon (${formatTimeRemaining(result.timeRemaining)})`,
        color: 'bg-red-100 text-red-700 border-red-200',
        description: `${quotesLeft} slot${quotesLeft !== 1 ? 's' : ''} left`
      };
    }
    
    return {
      text: `🟢 Open (${formatTimeRemaining(result.timeRemaining)})`,
      color: 'bg-blue-100 text-blue-700 border-blue-200',
      description: `${quotesLeft}/${project.maxQuotes} slots available`
    };
  }
  
  return {
    text: project.status,
    color: 'bg-slate-100 text-slate-700 border-slate-200',
    description: ''
  };
}

/**
 * Check if project can accept new quotes
 */
export function canAcceptQuotes(project: ProjectStatus): boolean {
  if (project.status !== 'OPEN') return false;
  
  const result = checkAutoClose(project);
  return !result.shouldClose;
}

/**
 * Get visual progress for quote slots
 */
export function getQuoteProgress(project: ProjectStatus): {
  percentage: number;
  filled: number;
  total: number;
  remaining: number;
} {
  return {
    percentage: (project.quotesReceived / project.maxQuotes) * 100,
    filled: project.quotesReceived,
    total: project.maxQuotes,
    remaining: project.maxQuotes - project.quotesReceived
  };
}

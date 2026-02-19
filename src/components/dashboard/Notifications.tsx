import { Bell, Check, Clock, DollarSign, FileText, MessageSquare, Star, Trash2, X } from 'lucide-react';
import { useState } from 'react';

interface NotificationsProps {
  role: 'homeowner' | 'contractor';
}

interface Notification {
  id: string;
  type: 'bid' | 'message' | 'payment' | 'project' | 'review' | 'system';
  title: string;
  message: string;
  time: string;
  read: boolean;
  actionable?: boolean;
}

export function Notifications({ role }: NotificationsProps) {
  const [filter, setFilter] = useState<'all' | 'unread'>('all');
  
  // Homeowner notifications
  const homeownerNotifications: Notification[] = [
    {
      id: '1',
      type: 'bid',
      title: 'New Bid Received',
      message: 'John Smith submitted a bid of $2,500 for "Kitchen Renovation"',
      time: '5 minutes ago',
      read: false,
      actionable: true
    },
    {
      id: '2',
      type: 'bid',
      title: 'New Bid Received',
      message: 'Sarah Johnson submitted a bid of $2,800 for "Kitchen Renovation"',
      time: '1 hour ago',
      read: false,
      actionable: true
    },
    {
      id: '3',
      type: 'project',
      title: 'Work Completed',
      message: 'Michael Chen marked "Bathroom Remodeling" as complete. Please review and approve.',
      time: '2 hours ago',
      read: false,
      actionable: true
    },
    {
      id: '4',
      type: 'message',
      title: 'New Message',
      message: 'Emily Davis sent you a message about "Living Room Paint"',
      time: '3 hours ago',
      read: true
    },
    {
      id: '5',
      type: 'payment',
      title: 'Payment Processed',
      message: 'Your payment of $1,200 for "Deck Repair" has been released to the contractor',
      time: '1 day ago',
      read: true
    },
    {
      id: '6',
      type: 'system',
      title: 'Project Deadline Approaching',
      message: '"Kitchen Renovation" expected completion is in 3 days',
      time: '1 day ago',
      read: true
    },
    {
      id: '7',
      type: 'bid',
      title: '5 New Bids Received',
      message: 'You have received 5 new bids for "Backyard Landscaping"',
      time: '2 days ago',
      read: true,
      actionable: true
    },
    {
      id: '8',
      type: 'review',
      title: 'Review Reminder',
      message: 'Please leave a review for Robert Lee for completed "Garage Door Installation"',
      time: '3 days ago',
      read: true,
      actionable: true
    }
  ];

  // Contractor notifications
  const contractorNotifications: Notification[] = [
    {
      id: '1',
      type: 'bid',
      title: 'Bid Accepted! 🎉',
      message: 'Your bid of $3,500 for "Master Bedroom Renovation" has been accepted!',
      time: '10 minutes ago',
      read: false,
      actionable: true
    },
    {
      id: '2',
      type: 'project',
      title: 'New Project Posted',
      message: 'New project "Kitchen Cabinet Installation" matches your skills - Budget: $2,000-$3,000',
      time: '30 minutes ago',
      read: false,
      actionable: true
    },
    {
      id: '3',
      type: 'message',
      title: 'New Message',
      message: 'Jessica Wilson asked a question about your bid on "Bathroom Tile Work"',
      time: '1 hour ago',
      read: false
    },
    {
      id: '4',
      type: 'payment',
      title: 'Payment Received',
      message: 'You received $2,800 for completed "Living Room Flooring" project',
      time: '2 hours ago',
      read: false
    },
    {
      id: '5',
      type: 'review',
      title: 'New 5-Star Review',
      message: 'David Brown left you a 5-star review for "Deck Building"',
      time: '5 hours ago',
      read: true
    },
    {
      id: '6',
      type: 'bid',
      title: 'Bid Declined',
      message: 'Your bid for "Roof Repair" was not selected',
      time: '1 day ago',
      read: true
    },
    {
      id: '7',
      type: 'project',
      title: 'Project Deadline',
      message: '"Kitchen Renovation" is due in 2 days. Mark as complete when ready.',
      time: '1 day ago',
      read: true
    },
    {
      id: '8',
      type: 'system',
      title: 'Profile Views',
      message: 'Your profile was viewed 23 times this week',
      time: '2 days ago',
      read: true
    },
    {
      id: '9',
      type: 'payment',
      title: 'Payment Pending',
      message: 'Awaiting approval from homeowner for "Garage Renovation" - $4,500',
      time: '3 days ago',
      read: true
    }
  ];

  const [notifications, setNotifications] = useState<Notification[]>(
    role === 'homeowner' ? homeownerNotifications : contractorNotifications
  );

  const filteredNotifications = notifications.filter(n => 
    filter === 'all' ? true : !n.read
  );

  const unreadCount = notifications.filter(n => !n.read).length;

  const getNotificationIcon = (type: string) => {
    switch (type) {
      case 'bid':
        return <FileText className="size-5 text-[#f9a825]" />;
      case 'message':
        return <MessageSquare className="size-5 text-blue-500" />;
      case 'payment':
        return <DollarSign className="size-5 text-green-500" />;
      case 'project':
        return <Clock className="size-5 text-purple-500" />;
      case 'review':
        return <Star className="size-5 text-yellow-500" />;
      default:
        return <Bell className="size-5 text-slate-500" />;
    }
  };

  const markAsRead = (id: string) => {
    setNotifications(notifications.map(n => 
      n.id === id ? { ...n, read: true } : n
    ));
  };

  const markAllAsRead = () => {
    setNotifications(notifications.map(n => ({ ...n, read: true })));
  };

  const deleteNotification = (id: string) => {
    setNotifications(notifications.filter(n => n.id !== id));
  };

  return (
    <div className="min-h-screen bg-slate-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-3">
              <div className="size-12 bg-[#f9a825] rounded-xl flex items-center justify-center">
                <Bell className="size-6 text-white" />
              </div>
              <div>
                <h1 className="text-3xl font-bold text-slate-900">Notifications</h1>
                <p className="text-slate-500">
                  {unreadCount > 0 ? `${unreadCount} unread notification${unreadCount > 1 ? 's' : ''}` : 'All caught up!'}
                </p>
              </div>
            </div>
            
            {unreadCount > 0 && (
              <button
                onClick={markAllAsRead}
                className="flex items-center gap-2 text-[#f9a825] hover:text-[#f9a825]/80 transition-colors"
              >
                <Check className="size-4" />
                <span className="font-semibold">Mark all as read</span>
              </button>
            )}
          </div>

          {/* Filter Tabs */}
          <div className="flex gap-2 border-b border-slate-200">
            <button
              onClick={() => setFilter('all')}
              className={`px-4 py-2 font-semibold transition-colors border-b-2 ${
                filter === 'all'
                  ? 'border-[#f9a825] text-[#f9a825]'
                  : 'border-transparent text-slate-500 hover:text-slate-700'
              }`}
            >
              All ({notifications.length})
            </button>
            <button
              onClick={() => setFilter('unread')}
              className={`px-4 py-2 font-semibold transition-colors border-b-2 ${
                filter === 'unread'
                  ? 'border-[#f9a825] text-[#f9a825]'
                  : 'border-transparent text-slate-500 hover:text-slate-700'
              }`}
            >
              Unread ({unreadCount})
            </button>
          </div>
        </div>

        {/* Notifications List */}
        {filteredNotifications.length === 0 ? (
          <div className="bg-white rounded-xl p-12 text-center border border-slate-200">
            <div className="size-20 bg-slate-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Bell className="size-10 text-slate-400" />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-2">No notifications</h3>
            <p className="text-slate-500">
              {filter === 'unread' 
                ? "You're all caught up! Check back later for updates."
                : "You don't have any notifications yet."}
            </p>
          </div>
        ) : (
          <div className="space-y-3">
            {filteredNotifications.map((notification) => (
              <div
                key={notification.id}
                className={`bg-white rounded-xl p-5 border transition-all hover:shadow-md group ${
                  notification.read 
                    ? 'border-slate-200' 
                    : 'border-[#f9a825]/30 bg-[#f9a825]/5'
                }`}
              >
                <div className="flex items-start gap-4">
                  {/* Icon */}
                  <div className={`size-12 rounded-xl flex items-center justify-center flex-shrink-0 ${
                    notification.read ? 'bg-slate-100' : 'bg-white border-2 border-[#f9a825]/20'
                  }`}>
                    {getNotificationIcon(notification.type)}
                  </div>

                  {/* Content */}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between gap-4 mb-1">
                      <h3 className="font-bold text-slate-900">{notification.title}</h3>
                      <span className="text-sm text-slate-500 flex-shrink-0">{notification.time}</span>
                    </div>
                    <p className="text-slate-600 leading-relaxed mb-3">{notification.message}</p>
                    
                    {/* Actions */}
                    <div className="flex items-center gap-2">
                      {notification.actionable && (
                        <button className="text-sm font-semibold text-[#f9a825] hover:text-[#f9a825]/80 transition-colors">
                          View Details →
                        </button>
                      )}
                      
                      <div className="flex-1"></div>
                      
                      <div className="flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                        {!notification.read && (
                          <button
                            onClick={() => markAsRead(notification.id)}
                            className="p-2 hover:bg-slate-100 rounded-lg transition-colors"
                            title="Mark as read"
                          >
                            <Check className="size-4 text-slate-600" />
                          </button>
                        )}
                        <button
                          onClick={() => deleteNotification(notification.id)}
                          className="p-2 hover:bg-red-50 rounded-lg transition-colors"
                          title="Delete"
                        >
                          <Trash2 className="size-4 text-red-500" />
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* Unread Indicator */}
                  {!notification.read && (
                    <div className="size-2 bg-[#f9a825] rounded-full flex-shrink-0 mt-2"></div>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Empty State for No Notifications */}
        {notifications.length === 0 && (
          <div className="bg-white rounded-xl p-12 text-center border border-slate-200 mt-8">
            <div className="size-20 bg-slate-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Bell className="size-10 text-slate-400" />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-2">No notifications yet</h3>
            <p className="text-slate-500 mb-6">
              {role === 'homeowner' 
                ? "When contractors bid on your projects or send messages, you'll see them here."
                : "When you receive project updates, messages, or payments, you'll see them here."}
            </p>
          </div>
        )}

      </div>
    </div>
  );
}

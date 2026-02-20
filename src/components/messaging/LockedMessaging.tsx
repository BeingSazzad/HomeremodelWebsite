import { Lock, MessageSquare, CheckCircle, X, AlertCircle, Eye } from 'lucide-react';
import { useState } from 'react';

interface Message {
  id: string;
  sender: 'contractor' | 'homeowner';
  text: string;
  timestamp: string;
}

interface LockedMessagingProps {
  userType: 'contractor' | 'homeowner';
  contractorName: string;
  homeownerName: string;
  homeownerCity: string;
  initialMessage?: string;
  chatStatus: 'locked' | 'accepted' | 'declined';
  onAccept?: () => void;
  onDecline?: () => void;
}

export function LockedMessaging({
  userType,
  contractorName,
  homeownerName,
  homeownerCity,
  initialMessage,
  chatStatus,
  onAccept,
  onDecline
}: LockedMessagingProps) {
  const [messages, setMessages] = useState<Message[]>(
    initialMessage ? [{
      id: '1',
      sender: 'contractor',
      text: initialMessage,
      timestamp: 'Feb 20, 2:30 PM'
    }] : []
  );

  return (
    <div className="bg-white rounded-xl border-2 border-slate-200 overflow-hidden h-[600px] flex flex-col">
      {/* Header */}
      <div className="bg-slate-800 p-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="size-12 bg-white/20 rounded-full flex items-center justify-center">
            <MessageSquare className="size-6 text-white" />
          </div>
          <div>
            <h3 className="font-bold text-white text-lg">
              {userType === 'contractor' ? `${homeownerName}` : contractorName}
            </h3>
            {userType === 'contractor' && (
              <div className="flex items-center gap-2 text-white/70 text-sm">
                <Eye className="size-4" />
                <span>Limited info: {homeownerCity} only</span>
              </div>
            )}
          </div>
        </div>

        {/* Status Badge */}
        {chatStatus === 'locked' && (
          <div className="flex items-center gap-2 px-3 py-1 bg-amber-500 text-white rounded-full text-sm font-semibold">
            <Lock className="size-4" />
            Locked
          </div>
        )}
        {chatStatus === 'accepted' && (
          <div className="flex items-center gap-2 px-3 py-1 bg-green-500 text-white rounded-full text-sm font-semibold">
            <CheckCircle className="size-4" />
            Active
          </div>
        )}
        {chatStatus === 'declined' && (
          <div className="flex items-center gap-2 px-3 py-1 bg-red-500 text-white rounded-full text-sm font-semibold">
            <X className="size-4" />
            Declined
          </div>
        )}
      </div>

      {/* Privacy Notice for Contractor */}
      {userType === 'contractor' && chatStatus === 'locked' && (
        <div className="p-3 bg-blue-50 border-b border-blue-200">
          <div className="flex items-start gap-2">
            <AlertCircle className="size-4 text-blue-600 flex-shrink-0 mt-0.5" />
            <p className="text-xs text-blue-800">
              <strong>Privacy Protection:</strong> You can only see homeowner's name and city. 
              Full contact details shared only after homeowner accepts chat.
            </p>
          </div>
        </div>
      )}

      {/* Messages Area */}
      <div className="flex-1 overflow-y-auto p-4 bg-slate-50">
        {messages.length === 0 ? (
          <div className="flex items-center justify-center h-full">
            <div className="text-center">
              <Lock className="size-12 text-slate-300 mx-auto mb-3" />
              <p className="text-slate-500">No messages yet</p>
            </div>
          </div>
        ) : (
          <div className="space-y-3">
            {messages.map(msg => (
              <div
                key={msg.id}
                className={`flex ${msg.sender === userType ? 'justify-end' : 'justify-start'}`}
              >
                <div className={`max-w-[70%] ${
                  msg.sender === userType 
                    ? 'bg-[#f9a825] text-white' 
                    : 'bg-white border border-slate-200 text-slate-900'
                } rounded-lg p-3`}>
                  <p className="text-sm">{msg.text}</p>
                  <p className={`text-xs mt-1 ${
                    msg.sender === userType ? 'text-white/70' : 'text-slate-500'
                  }`}>
                    {msg.timestamp}
                  </p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Action Area */}
      {chatStatus === 'locked' && userType === 'homeowner' && (
        <div className="p-4 bg-amber-50 border-t-2 border-amber-200">
          <div className="mb-3">
            <p className="font-semibold text-amber-900 mb-1">Accept this conversation?</p>
            <p className="text-sm text-amber-800">
              The contractor has sent you a message with their quote. Accept to start chatting, 
              or decline to permanently close this conversation.
            </p>
          </div>
          <div className="flex gap-3">
            <button
              onClick={onAccept}
              className="flex-1 bg-green-600 text-white py-3 rounded-lg font-semibold hover:bg-green-700 transition-all flex items-center justify-center gap-2"
            >
              <CheckCircle className="size-5" />
              Accept & Chat
            </button>
            <button
              onClick={onDecline}
              className="flex-1 bg-red-600 text-white py-3 rounded-lg font-semibold hover:bg-red-700 transition-all flex items-center justify-center gap-2"
            >
              <X className="size-5" />
              Decline
            </button>
          </div>
        </div>
      )}

      {chatStatus === 'locked' && userType === 'contractor' && (
        <div className="p-4 bg-slate-100 border-t border-slate-200">
          <div className="flex items-center justify-center gap-2 text-slate-600">
            <Lock className="size-5" />
            <p className="text-sm font-medium">
              Waiting for homeowner to accept chat. You've already sent your one-time message with the quote.
            </p>
          </div>
        </div>
      )}

      {chatStatus === 'accepted' && (
        <div className="p-4 bg-white border-t border-slate-200">
          <div className="flex gap-2">
            <input
              type="text"
              placeholder="Type your message..."
              className="flex-1 px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-[#f9a825] focus:border-transparent"
            />
            <button className="px-6 py-3 bg-[#f9a825] text-white rounded-lg font-semibold hover:bg-[#f9a825]/90 transition-all">
              Send
            </button>
          </div>
        </div>
      )}

      {chatStatus === 'declined' && (
        <div className="p-4 bg-red-50 border-t-2 border-red-200">
          <div className="flex items-center justify-center gap-2 text-red-700">
            <X className="size-5" />
            <p className="font-semibold">This conversation has been permanently closed</p>
          </div>
        </div>
      )}
    </div>
  );
}
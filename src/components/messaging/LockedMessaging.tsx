import { useState } from 'react';
import { Lock, Unlock, MessageSquare, CheckCircle, X, MapPin, User } from 'lucide-react';

interface Message {
  id: string;
  senderId: string;
  senderName: string;
  text: string;
  timestamp: Date;
}

interface LockedMessagingProps {
  role: 'homeowner' | 'contractor';
  chatStatus: 'locked' | 'pending' | 'active' | 'declined';
  initialMessage?: string;
  homeownerName: string;
  homeownerCity: string;
  homeownerFullAddress?: string;
  contractorName: string;
  onAcceptChat?: () => void;
  onDeclineChat?: () => void;
  onSendMessage?: (message: string) => void;
}

export function LockedMessaging({
  role,
  chatStatus,
  initialMessage,
  homeownerName,
  homeownerCity,
  homeownerFullAddress,
  contractorName,
  onAcceptChat,
  onDeclineChat,
  onSendMessage
}: LockedMessagingProps) {
  const [messages, setMessages] = useState<Message[]>(
    initialMessage
      ? [
          {
            id: '1',
            senderId: 'contractor',
            senderName: contractorName,
            text: initialMessage,
            timestamp: new Date(Date.now() - 2 * 60 * 60 * 1000)
          }
        ]
      : []
  );
  const [newMessage, setNewMessage] = useState('');

  const handleSendMessage = () => {
    if (!newMessage.trim()) return;

    const message: Message = {
      id: Date.now().toString(),
      senderId: role,
      senderName: role === 'homeowner' ? homeownerName : contractorName,
      text: newMessage,
      timestamp: new Date()
    };

    setMessages([...messages, message]);
    onSendMessage?.(newMessage);
    setNewMessage('');
  };

  const handleAccept = () => {
    onAcceptChat?.();
  };

  const handleDecline = () => {
    if (confirm('Are you sure? This will permanently close this conversation and cannot be undone.')) {
      onDeclineChat?.();
    }
  };

  return (
    <div className="bg-white border-2 border-slate-200 rounded-xl overflow-hidden">
      {/* Header */}
      <div className={`p-4 border-b-2 ${
        chatStatus === 'active' 
          ? 'bg-green-50 border-green-200' 
          : chatStatus === 'declined'
          ? 'bg-red-50 border-red-200'
          : chatStatus === 'pending'
          ? 'bg-amber-50 border-amber-200'
          : 'bg-slate-50 border-slate-200'
      }`}>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            {chatStatus === 'active' ? (
              <Unlock className="size-6 text-green-600" />
            ) : chatStatus === 'declined' ? (
              <X className="size-6 text-red-600" />
            ) : (
              <Lock className="size-6 text-slate-600" />
            )}
            <div>
              <h3 className="font-bold text-slate-900">
                {role === 'homeowner' ? contractorName : homeownerName}
              </h3>
              <div className="flex items-center gap-2 text-sm text-slate-600">
                {role === 'contractor' && (
                  <>
                    <MapPin className="size-3" />
                    <span>
                      {chatStatus === 'active' && homeownerFullAddress
                        ? homeownerFullAddress
                        : homeownerCity
                      }
                    </span>
                    {chatStatus !== 'active' && (
                      <span className="text-xs text-amber-600">(Full address hidden)</span>
                    )}
                  </>
                )}
              </div>
            </div>
          </div>

          <div className="flex items-center gap-2">
            {chatStatus === 'active' && (
              <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-semibold border border-green-200 flex items-center gap-1">
                <CheckCircle className="size-3" />
                Active Chat
              </span>
            )}
            {chatStatus === 'pending' && (
              <span className="bg-amber-100 text-amber-700 px-3 py-1 rounded-full text-sm font-semibold border border-amber-200">
                Pending Response
              </span>
            )}
            {chatStatus === 'locked' && (
              <span className="bg-slate-100 text-slate-700 px-3 py-1 rounded-full text-sm font-semibold border border-slate-200 flex items-center gap-1">
                <Lock className="size-3" />
                Chat Locked
              </span>
            )}
            {chatStatus === 'declined' && (
              <span className="bg-red-100 text-red-700 px-3 py-1 rounded-full text-sm font-semibold border border-red-200">
                Declined
              </span>
            )}
          </div>
        </div>
      </div>

      {/* Messages Area */}
      <div className="p-6 bg-slate-50 max-h-96 overflow-y-auto">
        {messages.length === 0 ? (
          <div className="text-center py-8">
            <MessageSquare className="size-12 text-slate-300 mx-auto mb-3" />
            <p className="text-slate-500">No messages yet</p>
          </div>
        ) : (
          <div className="space-y-4">
            {messages.map(message => (
              <div
                key={message.id}
                className={`flex ${message.senderId === role ? 'justify-end' : 'justify-start'}`}
              >
                <div className={`max-w-[70%] ${
                  message.senderId === role 
                    ? 'bg-[#f9a825] text-white' 
                    : 'bg-white border border-slate-200 text-slate-900'
                } rounded-lg p-4 shadow-sm`}>
                  <div className="flex items-center gap-2 mb-1">
                    <User className="size-3" />
                    <p className="text-xs font-semibold opacity-80">
                      {message.senderName}
                    </p>
                  </div>
                  <p className="text-sm leading-relaxed">{message.text}</p>
                  <p className={`text-xs mt-2 ${
                    message.senderId === role ? 'text-white/70' : 'text-slate-500'
                  }`}>
                    {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                  </p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Accept/Decline Buttons (Homeowner Only, Pending Status) */}
      {role === 'homeowner' && chatStatus === 'pending' && (
        <div className="p-4 bg-amber-50 border-t-2 border-amber-200">
          <div className="mb-4">
            <p className="text-sm font-semibold text-amber-900 mb-1">
              The contractor has submitted a quote and sent you a message.
            </p>
            <p className="text-xs text-amber-700">
              Accept to start messaging, or decline to permanently close this conversation.
            </p>
          </div>
          <div className="flex gap-3">
            <button
              onClick={handleAccept}
              className="flex-1 bg-green-600 text-white py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors flex items-center justify-center gap-2"
            >
              <CheckCircle className="size-5" />
              Accept Chat
            </button>
            <button
              onClick={handleDecline}
              className="flex-1 bg-red-600 text-white py-3 rounded-lg font-semibold hover:bg-red-700 transition-colors flex items-center justify-center gap-2"
            >
              <X className="size-5" />
              Decline Offer
            </button>
          </div>
        </div>
      )}

      {/* Message Input (Active Chat Only) */}
      {chatStatus === 'active' && (
        <div className="p-4 bg-white border-t-2 border-slate-200">
          <div className="flex gap-3">
            <input
              type="text"
              value={newMessage}
              onChange={(e) => setNewMessage(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
              placeholder="Type your message..."
              className="flex-1 px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-[#f9a825] focus:border-transparent"
            />
            <button
              onClick={handleSendMessage}
              disabled={!newMessage.trim()}
              className="px-6 py-3 bg-[#f9a825] text-white rounded-lg font-semibold hover:bg-[#e69b20] disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
            >
              Send
            </button>
          </div>
        </div>
      )}

      {/* Locked State Message */}
      {chatStatus === 'locked' && (
        <div className="p-6 bg-slate-50 border-t-2 border-slate-200 text-center">
          <Lock className="size-12 text-slate-400 mx-auto mb-3" />
          <p className="font-semibold text-slate-700 mb-2">
            {role === 'contractor' 
              ? 'Chat Locked - Waiting for Homeowner Response'
              : 'No messages yet'
            }
          </p>
          <p className="text-sm text-slate-600">
            {role === 'contractor'
              ? 'The homeowner can accept your chat to start messaging, or decline your offer.'
              : 'This contractor has not submitted a quote yet.'
            }
          </p>
        </div>
      )}

      {/* Declined State */}
      {chatStatus === 'declined' && (
        <div className="p-6 bg-red-50 border-t-2 border-red-200 text-center">
          <X className="size-12 text-red-500 mx-auto mb-3" />
          <p className="font-semibold text-red-900 mb-2">Offer Declined</p>
          <p className="text-sm text-red-700">
            This conversation has been permanently closed and cannot be reopened.
          </p>
        </div>
      )}

      {/* Privacy Notice (Contractor View, Not Active) */}
      {role === 'contractor' && chatStatus !== 'active' && (
        <div className="p-4 bg-blue-50 border-t border-blue-200">
          <p className="text-xs text-blue-800">
            <strong>Privacy Notice:</strong> Full homeowner contact information will be revealed only after they accept your chat request.
          </p>
        </div>
      )}
    </div>
  );
}

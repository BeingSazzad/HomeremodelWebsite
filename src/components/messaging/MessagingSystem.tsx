import React, { useState } from 'react';
import { 
  MessageSquare, 
  Send, 
  Search, 
  MoreVertical, 
  Phone, 
  Video, 
  Paperclip,
  Image as ImageIcon,
  File,
  CheckCheck,
  Check,
  Clock
} from 'lucide-react';
import { Input } from '../ui/input';
import { Button } from '../ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar';
import { ScrollArea } from '../ui/scroll-area';
import { Textarea } from '../ui/textarea';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '../ui/dropdown-menu';
import { Badge } from '../ui/badge';

interface Message {
  id: string;
  senderId: string;
  content: string;
  timestamp: Date;
  read: boolean;
  type: 'text' | 'image' | 'file';
  attachmentUrl?: string;
}

interface Conversation {
  id: string;
  name: string;
  avatar?: string;
  role: 'contractor' | 'homeowner';
  lastMessage: string;
  lastMessageTime: Date;
  unreadCount: number;
  projectName?: string;
  online: boolean;
}

interface MessagingSystemProps {
  currentUserId: string;
  userRole: 'contractor' | 'homeowner';
}

export function MessagingSystem({ currentUserId, userRole }: MessagingSystemProps) {
  const [selectedConversation, setSelectedConversation] = useState<string | null>(null);
  const [messageInput, setMessageInput] = useState('');
  const [searchQuery, setSearchQuery] = useState('');

  // Mock data - in real app, this would come from backend
  const conversations: Conversation[] = [
    {
      id: '1',
      name: userRole === 'homeowner' ? 'Premium Renovations Inc.' : 'Sarah Mitchell',
      role: userRole === 'homeowner' ? 'contractor' : 'homeowner',
      lastMessage: 'That sounds great! When can we schedule a site visit?',
      lastMessageTime: new Date(Date.now() - 1000 * 60 * 15),
      unreadCount: 2,
      projectName: 'Kitchen Remodel',
      online: true
    },
    {
      id: '2',
      name: userRole === 'homeowner' ? 'Elite Builders Co.' : 'Michael Chen',
      role: userRole === 'homeowner' ? 'contractor' : 'homeowner',
      lastMessage: 'I have sent you the updated quote with materials breakdown.',
      lastMessageTime: new Date(Date.now() - 1000 * 60 * 60 * 2),
      unreadCount: 0,
      projectName: 'Bathroom Renovation',
      online: false
    },
    {
      id: '3',
      name: userRole === 'homeowner' ? 'Modern Home Solutions' : 'Jennifer Rodriguez',
      role: userRole === 'homeowner' ? 'contractor' : 'homeowner',
      lastMessage: 'We can start as early as next week if that works for you.',
      lastMessageTime: new Date(Date.now() - 1000 * 60 * 60 * 24),
      unreadCount: 1,
      projectName: 'Basement Finishing',
      online: true
    },
  ];

  const messages: Record<string, Message[]> = {
    '1': [
      {
        id: 'm1',
        senderId: 'other',
        content: 'Hi! I reviewed your project details and I am very interested. I have 15+ years of experience in kitchen remodeling.',
        timestamp: new Date(Date.now() - 1000 * 60 * 60 * 3),
        read: true,
        type: 'text'
      },
      {
        id: 'm2',
        senderId: currentUserId,
        content: 'Thanks for reaching out! Can you share some examples of your previous work?',
        timestamp: new Date(Date.now() - 1000 * 60 * 60 * 2),
        read: true,
        type: 'text'
      },
      {
        id: 'm3',
        senderId: 'other',
        content: 'Absolutely! Here are some recent kitchen projects we completed.',
        timestamp: new Date(Date.now() - 1000 * 60 * 30),
        read: true,
        type: 'text'
      },
      {
        id: 'm4',
        senderId: 'other',
        content: '',
        timestamp: new Date(Date.now() - 1000 * 60 * 30),
        read: true,
        type: 'image',
        attachmentUrl: 'https://images.unsplash.com/photo-1556911220-bff31c812dba?w=400'
      },
      {
        id: 'm5',
        senderId: currentUserId,
        content: 'Wow, these look amazing! Your work is exactly what I am looking for.',
        timestamp: new Date(Date.now() - 1000 * 60 * 20),
        read: true,
        type: 'text'
      },
      {
        id: 'm6',
        senderId: 'other',
        content: 'That sounds great! When can we schedule a site visit?',
        timestamp: new Date(Date.now() - 1000 * 60 * 15),
        read: false,
        type: 'text'
      },
    ]
  };

  const selectedConv = conversations.find(c => c.id === selectedConversation);
  const selectedMessages = selectedConversation ? (messages[selectedConversation] || []) : [];

  const handleSendMessage = () => {
    if (!messageInput.trim()) return;
    // In real app, send message to backend
    setMessageInput('');
  };

  const formatTime = (date: Date) => {
    const now = new Date();
    const diff = now.getTime() - date.getTime();
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    
    if (days === 0) {
      return date.toLocaleTimeString('en-US', { hour: 'numeric', minute: '2-digit' });
    } else if (days === 1) {
      return 'Yesterday';
    } else if (days < 7) {
      return date.toLocaleDateString('en-US', { weekday: 'short' });
    } else {
      return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
    }
  };

  const filteredConversations = conversations.filter(conv =>
    conv.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    conv.projectName?.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="h-[calc(100vh-200px)] flex rounded-xl border border-slate-200 bg-white overflow-hidden shadow-sm">
      {/* Conversations List */}
      <div className="w-full md:w-80 lg:w-96 border-r border-slate-200 flex flex-col bg-slate-50">
        {/* Search Header */}
        <div className="p-4 border-b border-slate-200 bg-white">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
            <Input
              placeholder="Search conversations..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10 bg-slate-50 border-slate-200 focus-visible:ring-[#f9a825]"
            />
          </div>
        </div>

        {/* Conversations List */}
        <ScrollArea className="flex-1">
          <div className="p-2">
            {filteredConversations.map((conv) => (
              <button
                key={conv.id}
                onClick={() => setSelectedConversation(conv.id)}
                className={`w-full p-4 rounded-lg text-left transition-all hover:bg-white hover:shadow-sm mb-2 ${
                  selectedConversation === conv.id
                    ? 'bg-white shadow-sm border border-[#f9a825]/20'
                    : 'bg-transparent'
                }`}
              >
                <div className="flex items-start gap-3">
                  <div className="relative">
                    <Avatar className="w-12 h-12">
                      <AvatarImage src={conv.avatar} />
                      <AvatarFallback className="bg-[#f9a825] text-white">
                        {conv.name.split(' ').map(n => n[0]).join('').slice(0, 2)}
                      </AvatarFallback>
                    </Avatar>
                    {conv.online && (
                      <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-white" />
                    )}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between mb-1">
                      <h4 className="font-medium text-slate-900 truncate">{conv.name}</h4>
                      <span className="text-xs text-slate-500 ml-2">
                        {formatTime(conv.lastMessageTime)}
                      </span>
                    </div>
                    {conv.projectName && (
                      <p className="text-xs text-[#f9a825] mb-1">{conv.projectName}</p>
                    )}
                    <p className="text-sm text-slate-600 truncate">{conv.lastMessage}</p>
                  </div>
                  {conv.unreadCount > 0 && (
                    <Badge className="bg-[#f9a825] text-white h-5 min-w-[20px] px-1.5 flex items-center justify-center">
                      {conv.unreadCount}
                    </Badge>
                  )}
                </div>
              </button>
            ))}
          </div>
        </ScrollArea>
      </div>

      {/* Chat Area */}
      {selectedConversation ? (
        <div className="flex-1 flex flex-col bg-white">
          {/* Chat Header */}
          <div className="p-4 border-b border-slate-200 flex items-center justify-between bg-white">
            <div className="flex items-center gap-3">
              <div className="relative">
                <Avatar className="w-10 h-10">
                  <AvatarFallback className="bg-[#f9a825] text-white">
                    {selectedConv?.name.split(' ').map(n => n[0]).join('').slice(0, 2)}
                  </AvatarFallback>
                </Avatar>
                {selectedConv?.online && (
                  <div className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-green-500 rounded-full border-2 border-white" />
                )}
              </div>
              <div>
                <h3 className="font-medium text-slate-900">{selectedConv?.name}</h3>
                {selectedConv?.projectName && (
                  <p className="text-sm text-slate-500">{selectedConv.projectName}</p>
                )}
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Button variant="ghost" size="icon" className="text-slate-600 hover:text-[#f9a825]">
                <Phone className="w-5 h-5" />
              </Button>
              <Button variant="ghost" size="icon" className="text-slate-600 hover:text-[#f9a825]">
                <Video className="w-5 h-5" />
              </Button>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" size="icon" className="text-slate-600 hover:text-[#f9a825]">
                    <MoreVertical className="w-5 h-5" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuItem>View Profile</DropdownMenuItem>
                  <DropdownMenuItem>View Project</DropdownMenuItem>
                  <DropdownMenuItem className="text-red-600">Block User</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>

          {/* Messages Area */}
          <ScrollArea className="flex-1 p-4 bg-slate-50">
            <div className="space-y-4 max-w-4xl mx-auto">
              {selectedMessages.map((message) => {
                const isOwn = message.senderId === currentUserId;
                return (
                  <div
                    key={message.id}
                    className={`flex ${isOwn ? 'justify-end' : 'justify-start'} animate-fade-in-up`}
                  >
                    <div
                      className={`max-w-[70%] ${
                        isOwn ? 'bg-[#f9a825] text-white' : 'bg-white text-slate-900'
                      } rounded-2xl p-4 shadow-sm ${
                        isOwn ? 'rounded-tr-sm' : 'rounded-tl-sm'
                      }`}
                    >
                      {message.type === 'text' ? (
                        <p className="text-sm leading-relaxed">{message.content}</p>
                      ) : message.type === 'image' ? (
                        <img
                          src={message.attachmentUrl}
                          alt="Attachment"
                          className="rounded-lg max-w-full h-auto"
                        />
                      ) : (
                        <div className="flex items-center gap-3">
                          <File className="w-8 h-8" />
                          <div>
                            <p className="text-sm font-medium">Document.pdf</p>
                            <p className="text-xs opacity-70">2.4 MB</p>
                          </div>
                        </div>
                      )}
                      <div className={`flex items-center gap-2 mt-2 justify-end ${isOwn ? 'text-white/70' : 'text-slate-500'}`}>
                        <span className="text-xs">{formatTime(message.timestamp)}</span>
                        {isOwn && (
                          message.read ? (
                            <CheckCheck className="w-3 h-3" />
                          ) : (
                            <Check className="w-3 h-3" />
                          )
                        )}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </ScrollArea>

          {/* Message Input */}
          <div className="p-4 border-t border-slate-200 bg-white">
            <div className="flex items-end gap-3 max-w-4xl mx-auto">
              <div className="flex gap-2">
                <Button
                  variant="ghost"
                  size="icon"
                  className="text-slate-600 hover:text-[#f9a825]"
                >
                  <Paperclip className="w-5 h-5" />
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  className="text-slate-600 hover:text-[#f9a825]"
                >
                  <ImageIcon className="w-5 h-5" />
                </Button>
              </div>
              <div className="flex-1 relative">
                <Textarea
                  placeholder="Type your message..."
                  value={messageInput}
                  onChange={(e) => setMessageInput(e.target.value)}
                  onKeyPress={(e) => {
                    if (e.key === 'Enter' && !e.shiftKey) {
                      e.preventDefault();
                      handleSendMessage();
                    }
                  }}
                  className="min-h-[44px] max-h-32 resize-none pr-12 focus-visible:ring-[#f9a825]"
                  rows={1}
                />
              </div>
              <Button
                onClick={handleSendMessage}
                disabled={!messageInput.trim()}
                className="bg-[#f9a825] hover:bg-[#e39922] text-white h-11 px-6"
              >
                <Send className="w-5 h-5" />
              </Button>
            </div>
            <p className="text-xs text-slate-500 text-center mt-2">
              Press Enter to send, Shift + Enter for new line
            </p>
          </div>
        </div>
      ) : (
        <div className="flex-1 flex flex-col items-center justify-center text-center p-8 bg-slate-50">
          <div className="w-16 h-16 bg-[#f9a825]/10 rounded-full flex items-center justify-center mb-4">
            <MessageSquare className="w-8 h-8 text-[#f9a825]" />
          </div>
          <h3 className="text-xl font-medium text-slate-900 mb-2">No Conversation Selected</h3>
          <p className="text-slate-600 max-w-sm">
            Select a conversation from the list to start messaging or view your message history.
          </p>
        </div>
      )}
    </div>
  );
}

import React from 'react';
import { Button } from '../ui/button';
import { 
  DropdownMenu, 
  DropdownMenuContent, 
  DropdownMenuItem, 
  DropdownMenuLabel, 
  DropdownMenuSeparator, 
  DropdownMenuTrigger 
} from '../ui/dropdown-menu';
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar';
import { Plus, MessageSquare, Settings, LogOut, User, Bell, CheckCircle, FileText, DollarSign } from 'lucide-react';

interface HomeownerDashboardNavbarProps {
  onNavigate: (page: string) => void;
  onLogout: () => void;
}

export function HomeownerDashboardNavbar({ onNavigate, onLogout }: HomeownerDashboardNavbarProps) {
  return (
    <nav className="bg-white border-b border-slate-200 py-4 sticky top-0 z-50 shadow-sm">
      <div className="container mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <div 
            className="flex items-center gap-2 cursor-pointer" 
            onClick={() => onNavigate('dashboard')}
        >
           <div className="font-bold text-2xl tracking-tight flex items-center gap-1 text-slate-900">
              <span>Homzz</span><span className="text-[#f9a825]">.</span>
           </div>
        </div>

        {/* Center - Quick Stats */}
        <div className="hidden lg:flex items-center gap-6 text-sm">
          <div className="flex items-center gap-2">
            <div className="size-2 bg-green-500 rounded-full" />
            <span className="text-slate-600">5 Active Projects</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="size-2 bg-[#f9a825] rounded-full" />
            <span className="text-slate-600">12 Pending Bids</span>
          </div>
        </div>

        {/* Right Actions */}
        <div className="flex items-center gap-4">
            {/* Post Project Button */}
            <Button 
                className="bg-[#f9a825] hover:bg-[#e39922] text-white rounded-full px-6"
                onClick={() => onNavigate('post-project')}
            >
                <Plus className="w-4 h-4 mr-2" /> Post Project
            </Button>

            {/* Notifications */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <button className="relative p-2 hover:bg-slate-100 rounded-full transition-colors outline-none">
                  <Bell className="size-5 text-slate-600" />
                  <span className="absolute top-1 right-1 size-2 bg-red-500 rounded-full" />
                </button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-80">
                <DropdownMenuLabel>Notifications</DropdownMenuLabel>
                <DropdownMenuSeparator />
                
                <div className="max-h-96 overflow-y-auto">
                  <DropdownMenuItem className="cursor-pointer p-3 flex-col items-start gap-1">
                    <div className="flex items-start gap-2 w-full">
                      <div className="size-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                        <FileText className="size-4 text-blue-600" />
                      </div>
                      <div className="flex-1">
                        <p className="font-semibold text-sm">New bid received</p>
                        <p className="text-xs text-slate-600">Sarah Williams submitted a bid for "Master Bathroom Remodel"</p>
                        <p className="text-xs text-slate-500 mt-1">1 day ago</p>
                      </div>
                    </div>
                  </DropdownMenuItem>

                  <DropdownMenuItem className="cursor-pointer p-3 flex-col items-start gap-1">
                    <div className="flex items-start gap-2 w-full">
                      <div className="size-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                        <CheckCircle className="size-4 text-green-600" />
                      </div>
                      <div className="flex-1">
                        <p className="font-semibold text-sm">Work completed</p>
                        <p className="text-xs text-slate-600">Kitchen framing completed by BuildPro Inc.</p>
                        <p className="text-xs text-slate-500 mt-1">2 days ago</p>
                      </div>
                    </div>
                  </DropdownMenuItem>

                  <DropdownMenuItem className="cursor-pointer p-3 flex-col items-start gap-1">
                    <div className="flex items-start gap-2 w-full">
                      <div className="size-8 bg-amber-100 rounded-full flex items-center justify-center flex-shrink-0">
                        <MessageSquare className="size-4 text-amber-600" />
                      </div>
                      <div className="flex-1">
                        <p className="font-semibold text-sm">New message</p>
                        <p className="text-xs text-slate-600">Mike Johnson sent you a message</p>
                        <p className="text-xs text-slate-500 mt-1">3 days ago</p>
                      </div>
                    </div>
                  </DropdownMenuItem>
                </div>

                <DropdownMenuSeparator />
                <DropdownMenuItem className="cursor-pointer justify-center text-[#f9a825] font-medium">
                  View All Notifications
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            {/* Messages */}
            <button 
              onClick={() => onNavigate('messages')}
              className="relative p-2 hover:bg-slate-100 rounded-full transition-colors"
            >
              <MessageSquare className="size-5 text-slate-600" />
              <span className="absolute top-1 right-1 size-2 bg-[#f9a825] rounded-full" />
            </button>

            {/* User Profile Dropdown */}
            <DropdownMenu>
                <DropdownMenuTrigger className="outline-none rounded-full">
                    <Avatar className="cursor-pointer border-2 border-transparent hover:border-[#f9a825] transition-all">
                        <AvatarImage src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop" />
                        <AvatarFallback>JD</AvatarFallback>
                    </Avatar>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-56">
                    <DropdownMenuLabel>My Account</DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem onClick={() => onNavigate('dashboard')} className="cursor-pointer">
                        <User className="w-4 h-4 mr-2" /> Dashboard
                    </DropdownMenuItem>
                    <DropdownMenuItem onClick={() => onNavigate('settings')} className="cursor-pointer">
                        <Settings className="w-4 h-4 mr-2" /> Settings
                    </DropdownMenuItem>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem onClick={onLogout} className="text-red-600 cursor-pointer">
                        <LogOut className="w-4 h-4 mr-2" /> Log out
                    </DropdownMenuItem>
                </DropdownMenuContent>
            </DropdownMenu>
        </div>
      </div>
    </nav>
  );
}
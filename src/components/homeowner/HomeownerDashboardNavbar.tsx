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
import { Plus, MessageSquare, Settings, LogOut, User, Bell } from 'lucide-react';

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
            <button className="relative p-2 hover:bg-slate-100 rounded-full transition-colors">
              <Bell className="size-5 text-slate-600" />
              <span className="absolute top-1 right-1 size-2 bg-red-500 rounded-full" />
            </button>

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

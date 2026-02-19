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
import { Plus, MessageSquare, Settings, LogOut, User, Home } from 'lucide-react';

interface HomeownerNavbarProps {
  onNavigate: (page: string) => void;
  onLogout: () => void;
}

export function HomeownerNavbar({ onNavigate, onLogout }: HomeownerNavbarProps) {
  return (
    <nav className="bg-white border-b border-slate-100 py-4 sticky top-0 z-50">
      <div className="container mx-auto px-4 flex items-center justify-between">
        {/* Logo */}
        <div 
            className="flex items-center gap-2 cursor-pointer" 
            onClick={() => onNavigate('home')}
        >
           <div className="font-bold text-2xl tracking-tight flex items-center gap-1 text-slate-900">
              <span>Homzz</span><span className="text-[#f9a825]">.</span>
           </div>
        </div>

        {/* Center Links */}
        <div className="hidden md:flex items-center gap-8 font-medium text-slate-600">
            <a onClick={() => onNavigate('home')} className="hover:text-[#f9a825] cursor-pointer">Home</a>
            <a onClick={() => onNavigate('about')} className="hover:text-[#f9a825] cursor-pointer">About</a>
            <a onClick={() => onNavigate('professionals')} className="hover:text-[#f9a825] cursor-pointer">Find Pros</a>
            <a onClick={() => onNavigate('contact')} className="hover:text-[#f9a825] cursor-pointer">Contact</a>
        </div>

        {/* Right Actions */}
        <div className="flex items-center gap-4">
            {/* Post Project Button */}
            <Button 
                className="bg-[#f9a825] hover:bg-[#e39922] text-white rounded-full px-6"
                onClick={() => onNavigate('post-project')}
            >
                <Plus className="w-4 h-4 mr-2" /> Post a Project
            </Button>

            {/* User Profile Dropdown */}
            <DropdownMenu>
                <DropdownMenuTrigger className="outline-none rounded-full">
                    <Avatar className="cursor-pointer border-2 border-transparent hover:border-[#f9a825] transition-all">
                        <AvatarImage src="https://github.com/shadcn.png" />
                        <AvatarFallback>CN</AvatarFallback>
                    </Avatar>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-56">
                    <DropdownMenuLabel>My Account</DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem onClick={() => onNavigate('my-projects')} className="cursor-pointer">
                        <Home className="w-4 h-4 mr-2" /> My Projects
                    </DropdownMenuItem>
                    <DropdownMenuItem onClick={() => onNavigate('messages')} className="cursor-pointer">
                        <MessageSquare className="w-4 h-4 mr-2" /> Messages
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
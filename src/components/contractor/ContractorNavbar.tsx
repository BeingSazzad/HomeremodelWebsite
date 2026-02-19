import { Bell, MessageSquare, Settings, LogOut, User } from 'lucide-react';
import svgPaths from "../../imports/svg-ku0djt9ewm";
import { 
  DropdownMenu, 
  DropdownMenuContent, 
  DropdownMenuItem, 
  DropdownMenuLabel, 
  DropdownMenuSeparator, 
  DropdownMenuTrigger 
} from '../ui/dropdown-menu';
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar';

interface ContractorNavbarProps {
  onNavigate: (page: string) => void;
  onLogout: () => void;
}

export function ContractorNavbar({ onNavigate, onLogout }: ContractorNavbarProps) {
  return (
    <div className="bg-slate-900 h-[112px] w-full relative">
      <div className="max-w-[1920px] mx-auto h-full flex items-center justify-between px-16">
        {/* Logo */}
        <div className="flex items-center gap-3 cursor-pointer" onClick={() => onNavigate('dashboard')}>
          <div className="size-10 bg-[#f9a825] rounded-lg flex items-center justify-center p-2">
            <svg className="w-full h-full" viewBox="0 0 24 24" fill="none">
              <path d={svgPaths.p2d2ba100} fill="white" />
              <path d={svgPaths.p22977070} fill="white" />
              <path d={svgPaths.p37aec00} fill="white" />
            </svg>
          </div>
          <span className="text-white text-2xl font-bold tracking-tight">HOMZZ</span>
        </div>

        {/* Navigation */}
        <div className="flex gap-6 items-center">
          <button 
            onClick={() => onNavigate('dashboard')}
            className="text-white hover:text-[#f9a825] transition-colors px-4 py-2"
          >
            Home
          </button>
          <button 
            onClick={() => onNavigate('available-projects')}
            className="text-white hover:text-[#f9a825] transition-colors px-4 py-2"
          >
            Browse Projects
          </button>
          <button className="text-white hover:text-[#f9a825] transition-colors px-4 py-2">
            About us
          </button>
          <button className="text-white hover:text-[#f9a825] transition-colors px-4 py-2">
            Contact us
          </button>
        </div>

        {/* Right Side Icons */}
        <div className="flex items-center gap-4">
          <button className="text-white hover:text-[#f9a825] transition-colors p-2 relative">
            <Bell className="size-5" />
            <span className="absolute top-1 right-1 size-2 bg-red-500 rounded-full" />
          </button>
          <button 
            onClick={() => onNavigate('messages')}
            className="text-white hover:text-[#f9a825] transition-colors p-2 relative"
          >
            <MessageSquare className="size-5" />
            <span className="absolute top-1 right-1 size-2 bg-[#f9a825] rounded-full" />
          </button>
          
          {/* User Profile Dropdown */}
          <DropdownMenu>
            <DropdownMenuTrigger className="outline-none rounded-full">
              <Avatar className="cursor-pointer border-2 border-[#f9a825] hover:border-white transition-all size-12">
                <AvatarImage src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop" />
                <AvatarFallback>JD</AvatarFallback>
              </Avatar>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-56">
              <DropdownMenuLabel>My Account</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem onClick={() => onNavigate('dashboard')} className="cursor-pointer">
                <User className="w-4 h-4 mr-2" /> Dashboard
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => onNavigate('profile')} className="cursor-pointer">
                <User className="w-4 h-4 mr-2" /> Profile
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
    </div>
  );
}
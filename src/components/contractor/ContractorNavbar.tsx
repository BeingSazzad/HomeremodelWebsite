import { Bell, MessageSquare, Settings, LogOut, User, FileText, CheckCircle, TrendingUp } from 'lucide-react';
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
            onClick={() => onNavigate('projects')}
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
          {/* Notifications */}
          <DropdownMenu>
            <DropdownMenuTrigger className="outline-none">
              <button className="text-white hover:text-[#f9a825] transition-colors p-2 relative">
                <Bell className="size-5" />
                <span className="absolute top-1 right-1 size-2 bg-red-500 rounded-full" />
              </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-80">
              <DropdownMenuLabel>Notifications</DropdownMenuLabel>
              <DropdownMenuSeparator />
              
              <div className="max-h-96 overflow-y-auto">
                <DropdownMenuItem className="cursor-pointer p-3 flex-col items-start gap-1">
                  <div className="flex items-start gap-2 w-full">
                    <div className="size-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <CheckCircle className="size-4 text-green-600" />
                    </div>
                    <div className="flex-1">
                      <p className="font-semibold text-sm">Bid accepted!</p>
                      <p className="text-xs text-slate-600">Jane accepted your bid for "Modern Kitchen Renovation"</p>
                      <p className="text-xs text-slate-500 mt-1">1 hour ago</p>
                    </div>
                  </div>
                </DropdownMenuItem>

                <DropdownMenuItem className="cursor-pointer p-3 flex-col items-start gap-1">
                  <div className="flex items-start gap-2 w-full">
                    <div className="size-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <FileText className="size-4 text-blue-600" />
                    </div>
                    <div className="flex-1">
                      <p className="font-semibold text-sm">New project posted</p>
                      <p className="text-xs text-slate-600">Bathroom Remodel in Austin, TX - Budget: $28,000</p>
                      <p className="text-xs text-slate-500 mt-1">3 hours ago</p>
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
                      <p className="text-xs text-slate-600">John Smith sent you a message about Deck Installation</p>
                      <p className="text-xs text-slate-500 mt-1">1 day ago</p>
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
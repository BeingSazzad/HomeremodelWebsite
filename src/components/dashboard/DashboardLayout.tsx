import React from 'react';
import { Button } from '../ui/button';
import { Home, Briefcase, MessageSquare, Settings, LogOut, User, Menu, LayoutDashboard, FileText } from 'lucide-react';
import { Sheet, SheetContent, SheetTrigger } from '../ui/sheet';

interface DashboardLayoutProps {
  children: React.ReactNode;
  role: 'homeowner' | 'contractor' | 'admin';
  activePage: string;
  onNavigate: (page: string) => void;
  onLogout: () => void;
}

export function DashboardLayout({ children, role, activePage, onNavigate, onLogout }: DashboardLayoutProps) {
  const [isMobileOpen, setIsMobileOpen] = React.useState(false);

  const menuItems = {
    homeowner: [
      { id: 'dashboard', label: 'Dashboard', icon: LayoutDashboard },
      { id: 'post-project', label: 'Post Project', icon: Briefcase },
      { id: 'my-projects', label: 'My Projects', icon: Home },
      { id: 'quotes', label: 'Quotes', icon: FileText },
      { id: 'messages', label: 'Messages', icon: MessageSquare },
      { id: 'settings', label: 'Settings', icon: Settings },
    ],
    contractor: [
      { id: 'dashboard', label: 'Dashboard', icon: LayoutDashboard },
      { id: 'available-projects', label: 'Available Projects', icon: Briefcase },
      { id: 'my-quotes', label: 'My Quotes', icon: FileText },
      { id: 'messages', label: 'Messages', icon: MessageSquare },
      { id: 'profile', label: 'My Profile', icon: User },
      { id: 'settings', label: 'Settings', icon: Settings },
    ],
    admin: [
      { id: 'dashboard', label: 'Dashboard', icon: LayoutDashboard },
      { id: 'users', label: 'User Management', icon: User },
      { id: 'projects', label: 'Project Management', icon: Briefcase },
      { id: 'subscriptions', label: 'Subscriptions', icon: FileText },
      { id: 'settings', label: 'Settings', icon: Settings },
    ]
  };

  const items = menuItems[role];

  const SidebarContent = () => (
    <div className="h-full flex flex-col bg-slate-900 text-white">
      <div className="p-6 border-b border-slate-800">
        <div className="font-bold text-2xl tracking-tight flex items-center gap-1">
           <span>Homzz</span><span className="text-[#f9a825]">.</span>
        </div>
        <div className="text-xs text-slate-400 mt-1 uppercase tracking-wider">{role} Panel</div>
      </div>
      
      <nav className="flex-grow p-4 space-y-2">
        {items.map((item) => {
          const Icon = item.icon;
          const isActive = activePage === item.id;
          return (
            <button
              key={item.id}
              onClick={() => {
                onNavigate(item.id);
                setIsMobileOpen(false);
              }}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 ${
                isActive 
                  ? 'bg-[#f9a825] text-white shadow-lg font-medium' 
                  : 'text-slate-400 hover:bg-slate-800 hover:text-white'
              }`}
            >
              <Icon className="w-5 h-5" />
              {item.label}
            </button>
          );
        })}
      </nav>

      <div className="p-4 border-t border-slate-800">
        <button 
            onClick={onLogout}
            className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-red-400 hover:bg-slate-800 hover:text-red-300 transition-colors"
        >
          <LogOut className="w-5 h-5" />
          Logout
        </button>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-slate-50 flex">
      {/* Desktop Sidebar */}
      <aside className="hidden md:block w-64 flex-shrink-0 fixed h-full z-20">
        <SidebarContent />
      </aside>

      {/* Mobile Header */}
      <div className="md:hidden fixed top-0 left-0 right-0 h-16 bg-slate-900 text-white flex items-center px-4 z-20">
        <Sheet open={isMobileOpen} onOpenChange={setIsMobileOpen}>
            <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="text-white mr-4">
                    <Menu className="w-6 h-6" />
                </Button>
            </SheetTrigger>
            <SheetContent side="left" className="p-0 w-72 border-none">
                <SidebarContent />
            </SheetContent>
        </Sheet>
        <div className="font-bold text-xl">Homzz.</div>
      </div>

      {/* Main Content */}
      <main className="flex-grow md:ml-64 pt-16 md:pt-0 p-4 md:p-8">
        {children}
      </main>
    </div>
  );
}

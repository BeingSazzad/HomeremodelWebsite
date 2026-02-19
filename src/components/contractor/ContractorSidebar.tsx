import { Home, Calendar, DollarSign, Star, Settings, FileText, MessageSquare } from 'lucide-react';

interface ContractorSidebarProps {
  activePage: string;
  onNavigate: (page: string) => void;
}

export function ContractorSidebar({ activePage, onNavigate }: ContractorSidebarProps) {
  const menuItems = [
    { id: 'dashboard', label: 'Dashboard', icon: Home },
    { id: 'my-bids', label: 'My Bids', icon: FileText },
    { id: 'my-projects', label: 'My Projects', icon: Calendar },
    { id: 'messages', label: 'Messages', icon: MessageSquare },
    { id: 'earnings', label: 'Earning', icon: DollarSign },
    { id: 'reviews', label: 'Reviews', icon: Star },
    { id: 'settings', label: 'Settings', icon: Settings },
  ];

  return (
    <div className="bg-[#f9fafb] rounded-[10px] shadow-[0px_2px_20px_0px_rgba(0,0,0,0.08)] w-[306px] p-6">
      {/* Profile Section */}
      <div className="flex flex-col items-center mb-8">
        {/* Profile Picture */}
        <div className="relative mb-6">
          <div className="size-32 rounded-full overflow-hidden border-4 border-white shadow-lg">
            <img 
              src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&h=200&fit=crop" 
              alt="John Doe" 
              className="w-full h-full object-cover"
            />
          </div>
          <button className="absolute bottom-0 right-0 bg-white rounded-full p-2 shadow-lg border border-slate-200 hover:bg-slate-50">
            <Settings className="size-4 text-slate-600" />
          </button>
        </div>

        {/* Profile Info */}
        <div className="text-center mb-3">
          <h3 className="text-[22px] font-bold text-slate-900 mb-2">John Doe</h3>
          <div className="flex items-center gap-2 text-[#4a5565] text-sm mb-1">
            <svg className="size-4" fill="none" viewBox="0 0 16 16">
              <path d="M8 2C5.79 2 4 3.79 4 6C4 8.5 8 14 8 14C8 14 12 8.5 12 6C12 3.79 10.21 2 8 2Z" stroke="#F9A825" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M8 7.5C8.82843 7.5 9.5 6.82843 9.5 6C9.5 5.17157 8.82843 4.5 8 4.5C7.17157 4.5 6.5 5.17157 6.5 6C6.5 6.82843 7.17157 7.5 8 7.5Z" stroke="#F9A825" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <span>San Francisco, CA</span>
          </div>
          <div className="flex items-center gap-2 text-[#4a5565] text-sm">
            <Calendar className="size-4 text-[#f9a825]" />
            <span>Joined Nov 2021</span>
          </div>
        </div>
      </div>

      {/* Menu Items */}
      <div className="space-y-1">
        {menuItems.map((item) => {
          const Icon = item.icon;
          const isActive = activePage === item.id || 
            (item.id === 'my-bids' && activePage === 'bid-details') ||
            (item.id === 'my-projects' && activePage === 'contractor-project-details');
          
          return (
            <button
              key={item.id}
              onClick={() => onNavigate(item.id)}
              className={`w-full flex items-center gap-3 px-6 py-3 rounded-xl transition-all ${
                isActive
                  ? 'bg-[#f9a825] text-white shadow-md'
                  : 'text-slate-700 hover:bg-slate-100'
              }`}
            >
              <Icon className="size-5" />
              <span className={`text-lg ${isActive ? 'font-semibold' : 'font-normal'}`}>
                {item.label}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
}
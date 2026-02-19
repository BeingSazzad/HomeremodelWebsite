import { ReactNode } from 'react';
import { HomeownerDashboardNavbar } from './HomeownerDashboardNavbar';
import { HomeownerSidebar } from './HomeownerSidebar';
import { Footer } from '../landing/Footer';

interface HomeownerLayoutProps {
  children: ReactNode;
  activePage: string;
  onNavigate: (page: string) => void;
  onLogout: () => void;
}

export function HomeownerLayout({ children, activePage, onNavigate, onLogout }: HomeownerLayoutProps) {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      {/* Navbar */}
      <HomeownerDashboardNavbar onNavigate={onNavigate} onLogout={onLogout} />
      
      {/* Main Content Area */}
      <div className="flex-1 flex">
        <div className="max-w-[1920px] mx-auto w-full flex gap-8 p-8">
          {/* Sidebar */}
          <HomeownerSidebar activePage={activePage} onNavigate={onNavigate} />
          
          {/* Main Content */}
          <div className="flex-1">
            {children}
          </div>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
}

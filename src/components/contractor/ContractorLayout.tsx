import { ReactNode } from 'react';
import { ContractorNavbar } from './ContractorNavbar';
import { ContractorSidebar } from './ContractorSidebar';
import { Footer } from '../landing/Footer';

interface ContractorLayoutProps {
  children: ReactNode;
  activePage: string;
  onNavigate: (page: string) => void;
  onLogout: () => void;
}

export function ContractorLayout({ children, activePage, onNavigate, onLogout }: ContractorLayoutProps) {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      {/* Navbar */}
      <ContractorNavbar onNavigate={onNavigate} onLogout={onLogout} />
      
      {/* Main Content Area */}
      <div className="flex-1 flex">
        <div className="max-w-[1920px] mx-auto w-full flex gap-8 p-8">
          {/* Sidebar */}
          <ContractorSidebar activePage={activePage} onNavigate={onNavigate} />
          
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

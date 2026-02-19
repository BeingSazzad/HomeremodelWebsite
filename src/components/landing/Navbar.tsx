import React from 'react';
import { Button } from '../ui/button';
import { User, Menu, X } from 'lucide-react';
import { useState, useEffect } from 'react';
import { Sheet, SheetContent, SheetTrigger } from '../ui/sheet';

interface NavbarProps {
  onNavigate: (page: string) => void;
  currentPage: string;
  onLogin: (role: string) => void;
}

export function Navbar({ onNavigate, currentPage, onLogin }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Always show white bg if not on home page
  const isHome = currentPage === 'home';
  const showSolidNav = !isHome || isScrolled;

  const navClass = `fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
    showSolidNav ? 'bg-white/95 backdrop-blur-md shadow-sm py-4 text-slate-900' : 'bg-transparent py-6 text-white'
  }`;

  const linkClass = (page: string) => `cursor-pointer transition-colors font-medium ${
      currentPage === page ? 'text-[#f9a825]' : (showSolidNav ? 'text-slate-600 hover:text-[#f9a825]' : 'text-white/90 hover:text-white')
  }`;

  return (
    <nav className={navClass}>
      <div className="container mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <div 
            className="flex items-center gap-2 cursor-pointer" 
            onClick={() => onNavigate('home')}
        >
           <div className="font-bold text-2xl tracking-tight flex items-center gap-1">
              <span className={showSolidNav ? "text-slate-900" : "text-white"}>Homzz</span>
              <span className="text-[#f9a825]">.</span>
           </div>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">
          <a onClick={() => onNavigate('home')} className={linkClass('home')}>Home</a>
          <a onClick={() => onNavigate('about')} className={linkClass('about')}>About Us</a>
          <a onClick={() => onNavigate('projects')} className={linkClass('projects')}>Find Projects</a>
          <a onClick={() => onNavigate('contact')} className={linkClass('contact')}>Contact</a>
        </div>

        {/* Actions */}
        <div className="hidden md:flex items-center gap-4">
          <Button 
            variant="ghost" 
            className={showSolidNav ? 'text-slate-600 hover:text-[#f9a825]' : 'text-white hover:text-[#f9a825]'}
            onClick={() => onNavigate('signup')}
          >
            Sign Up
          </Button>
          <Button 
            className="bg-[#f9a825] hover:bg-[#e39922] text-white border-none shadow-lg shadow-[#f9a825]/20"
            onClick={() => onNavigate('login')}
          >
            <User className="w-4 h-4 mr-2" />
            Login
          </Button>
        </div>

        {/* Mobile Menu */}
        <div className="md:hidden">
            <Sheet>
                <SheetTrigger asChild>
                    <Button variant="ghost" size="icon" className={showSolidNav ? 'text-slate-900' : 'text-white'}>
                        <Menu className="h-6 w-6" />
                    </Button>
                </SheetTrigger>
                <SheetContent>
                    <div className="flex flex-col gap-6 mt-8">
                        <a onClick={() => onNavigate('home')} className="text-lg font-medium hover:text-[#f9a825] cursor-pointer">Home</a>
                        <a onClick={() => onNavigate('about')} className="text-lg font-medium hover:text-[#f9a825] cursor-pointer">About Us</a>
                        <a onClick={() => onNavigate('projects')} className="text-lg font-medium hover:text-[#f9a825] cursor-pointer">Find Projects</a>
                        <a onClick={() => onNavigate('contact')} className="text-lg font-medium hover:text-[#f9a825] cursor-pointer">Contact</a>
                        <div className="h-px bg-slate-100 my-2" />
                        <Button variant="outline" className="w-full border-[#f9a825] text-[#f9a825]" onClick={() => onNavigate('signup')}>Sign Up</Button>
                        <Button 
                          className="w-full bg-[#f9a825] hover:bg-[#e39922] text-white"
                          onClick={() => onNavigate('login')}
                        >
                          Login
                        </Button>
                    </div>
                </SheetContent>
            </Sheet>
        </div>
      </div>
    </nav>
  );
}
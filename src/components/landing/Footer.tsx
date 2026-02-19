import React from 'react';
import { Facebook, Twitter, Instagram, Linkedin, Phone, Mail, MapPin, Home } from 'lucide-react';

interface FooterProps {
  onNavigate?: (page: string) => void;
}

export function Footer({ onNavigate }: FooterProps) {
  const currentYear = new Date().getFullYear();
  
  const handleNavClick = (page: string) => {
    if (onNavigate) {
      onNavigate(page);
    }
  };
  
  return (
    <footer className="relative bg-slate-900 text-white overflow-hidden">
      {/* Background Decoration if needed, keeping it simple for modern look or using image */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
          {/* We can put the faint background image here if desired */}
      </div>

      <div className="container mx-auto px-4 py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          
          {/* Brand */}
          <div className="space-y-6">
            <div className="flex items-center gap-2 text-2xl font-bold">
                <Home className="w-8 h-8 text-[#f9a825]" />
                <span>Homzz<span className="text-[#f9a825]">.</span></span>
            </div>
            <p className="text-slate-400 leading-relaxed">
              Transform your home effortlessly with our innovative remodeling app. We connect homeowners with trusted professionals.
            </p>
            <div className="flex gap-4">
                <a href="#" className="bg-slate-800 p-2 rounded-full hover:bg-[#f9a825] hover:text-white transition-all text-slate-400"><Facebook className="w-5 h-5" /></a>
                <a href="#" className="bg-slate-800 p-2 rounded-full hover:bg-[#f9a825] hover:text-white transition-all text-slate-400"><Twitter className="w-5 h-5" /></a>
                <a href="#" className="bg-slate-800 p-2 rounded-full hover:bg-[#f9a825] hover:text-white transition-all text-slate-400"><Instagram className="w-5 h-5" /></a>
                <a href="#" className="bg-slate-800 p-2 rounded-full hover:bg-[#f9a825] hover:text-white transition-all text-slate-400"><Linkedin className="w-5 h-5" /></a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
             <h4 className="text-lg font-bold">Company</h4>
             <ul className="space-y-3 text-slate-400">
                 <li><a onClick={() => handleNavClick('about')} className="hover:text-[#f9a825] transition-colors cursor-pointer">About Us</a></li>
                 <li><a onClick={() => handleNavClick('contact')} className="hover:text-[#f9a825] transition-colors cursor-pointer">Contact</a></li>
                 <li><a onClick={() => handleNavClick('help')} className="hover:text-[#f9a825] transition-colors cursor-pointer">Help Center</a></li>
             </ul>
          </div>

          {/* Legal */}
          <div className="space-y-6">
             <h4 className="text-lg font-bold">Legal</h4>
             <ul className="space-y-3 text-slate-400">
                 <li><a onClick={() => handleNavClick('terms')} className="hover:text-[#f9a825] transition-colors cursor-pointer">Terms of Service</a></li>
                 <li><a onClick={() => handleNavClick('privacy')} className="hover:text-[#f9a825] transition-colors cursor-pointer">Privacy Policy</a></li>
                 <li><a onClick={() => handleNavClick('refund-policy')} className="hover:text-[#f9a825] transition-colors cursor-pointer">Refund Policy</a></li>
             </ul>
          </div>

          {/* Contact */}
          <div className="space-y-6">
             <h4 className="text-lg font-bold">Contact Us</h4>
             <ul className="space-y-4 text-slate-400">
                 <li className="flex items-center gap-3">
                     <Phone className="w-5 h-5 text-[#f9a825]" />
                     <span>(201) 555-0124</span>
                 </li>
                 <li className="flex items-center gap-3">
                     <Mail className="w-5 h-5 text-[#f9a825]" />
                     <span>support@homzz.com</span>
                 </li>
                 <li className="flex items-center gap-3">
                     <MapPin className="w-5 h-5 text-[#f9a825]" />
                     <span>58 Hullbrook Road, Billesley, B13 0LA</span>
                 </li>
             </ul>
          </div>

        </div>

        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center text-slate-500 text-sm gap-4">
            <p>© {currentYear} Homzz LLC. All rights reserved.</p>
            <div className="flex gap-6">
                <a onClick={() => handleNavClick('terms')} className="hover:text-white transition-colors cursor-pointer">Terms & Conditions</a>
                <a onClick={() => handleNavClick('privacy')} className="hover:text-white transition-colors cursor-pointer">Privacy Policy</a>
            </div>
        </div>
      </div>
    </footer>
  );
}
import React from 'react';
import { Search, SlidersHorizontal, ArrowRight, CheckCircle } from 'lucide-react';
import { Button } from '../ui/button';
import { Input } from '../ui/input';

interface HeroProps {
  onSearch: () => void;
  onGetStarted?: () => void;
}

export function Hero({ onSearch, onGetStarted }: HeroProps) {
  return (
    <div className="relative w-full min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1484154218962-a197022b5858?auto=format&fit=crop&w=1920&h=1080&q=80" 
          alt="Home Remodeling" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/70" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 flex flex-col items-center text-center gap-8 py-32">
        {/* Trust Badge */}
        <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md text-white px-4 py-2 rounded-full border border-white/20">
          <CheckCircle className="w-4 h-4 text-[#f9a825]" />
          <span className="text-sm font-medium">Trusted by 12,500+ Homeowners</span>
        </div>

        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white max-w-5xl leading-tight">
          Transform Your Home with <span className="text-[#f9a825]">Expert Contractors</span>
        </h1>
        
        <p className="text-lg md:text-xl text-gray-200 max-w-3xl leading-relaxed">
          Connect with verified professionals for your remodeling project. Get multiple quotes, 
          compare contractors, and bring your vision to life—all in one place.
        </p>

        {/* Search Bar */}
        <div className="w-full max-w-3xl bg-white p-3 rounded-2xl shadow-2xl flex flex-col md:flex-row gap-3 mt-8">
          <div className="relative flex-grow">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 h-5 w-5" />
            <Input 
              type="text" 
              placeholder="What are you looking to remodel? (e.g., kitchen, bathroom)" 
              className="pl-12 h-14 border-0 bg-transparent focus-visible:ring-0 text-base placeholder:text-gray-400"
            />
          </div>
          <Button 
            onClick={onSearch}
            className="h-14 px-8 bg-[#f9a825] hover:bg-[#e39922] text-white font-medium text-base flex-shrink-0"
          >
            Find Contractors
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
        </div>

        {/* Quick Stats */}
        <div className="flex flex-wrap justify-center gap-8 mt-8 text-white/90">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-[#f9a825] rounded-full animate-pulse" />
            <span className="text-sm md:text-base">2,400+ Verified Contractors</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-[#f9a825] rounded-full animate-pulse" />
            <span className="text-sm md:text-base">Free Quotes in 24 Hours</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-[#f9a825] rounded-full animate-pulse" />
            <span className="text-sm md:text-base">4.9/5 Average Rating</span>
          </div>
        </div>

        <div className="flex flex-col items-center gap-2 mt-12 animate-bounce text-white/60">
          <span className="text-sm font-medium">Scroll to explore</span>
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center pt-2">
            <div className="w-1 h-2 bg-white/60 rounded-full" />
          </div>
        </div>
      </div>
    </div>
  );
}
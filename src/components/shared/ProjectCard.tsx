import React from 'react';
import { Card, CardContent } from '../ui/card';
import { MapPin, Lock } from 'lucide-react';
import { convertToBudgetRange } from '../../utils/budgetConverter';

interface ProjectCardProps {
  title: string;
  address: string;
  price?: string;
  budget?: string;
  timeline?: string;
  image: string;
  category?: string;
  onClick?: () => void;
  showPrivacyProtection?: boolean; // New prop to hide sensitive data
  quotesReceived?: number;
  maxQuotes?: number;
  userRole?: 'contractor' | 'homeowner' | 'admin' | null; // NEW: User role for privacy
}

export function ProjectCard({ 
  title, 
  address, 
  price, 
  budget, 
  timeline, 
  image, 
  category, 
  onClick,
  showPrivacyProtection = true, // Default to privacy protection ON
  quotesReceived,
  maxQuotes = 5,
  userRole = null // NEW: Default to null (public view)
}: ProjectCardProps) {
  // PRIVACY PROTECTION: Contractors see budget RANGE, not exact amounts
  const rawBudget = price || budget || 'N/A';
  
  const displayPrice = userRole === 'contractor' && rawBudget !== 'N/A'
    ? convertToBudgetRange(rawBudget)  // Contractor sees: "$20,000 – $40,000"
    : rawBudget;                        // Homeowner sees: "$35,000 - $45,000"
  
  // Privacy protection: Only show city and state, not full address
  const getProtectedAddress = (fullAddress: string) => {
    // If address contains comma, assume format is "City, State"
    if (fullAddress.includes(',')) {
      const parts = fullAddress.split(',');
      return `${parts[0].trim()}, ${parts[1]?.trim() || ''}`;
    }
    return fullAddress;
  };

  const protectedAddress = showPrivacyProtection ? getProtectedAddress(address) : address;
  
  return (
    <Card 
      className="group border-none shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden rounded-2xl bg-white h-full flex flex-col cursor-pointer"
      onClick={onClick}
    >
      <div className="aspect-[4/3] overflow-hidden relative">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
        
        {/* Budget Range Badge */}
        <div className="absolute top-3 right-3 bg-white/90 backdrop-blur px-3 py-1.5 rounded-full text-sm font-bold text-slate-900 shadow-sm">
           {displayPrice}
        </div>
        
        {/* Category Badge */}
        {category && (
            <div className="absolute top-3 left-3 bg-black/60 backdrop-blur px-3 py-1 rounded-full text-xs font-medium text-white">
                {category}
            </div>
        )}

        {/* Quote Slots Badge */}
        {quotesReceived !== undefined && (
          <div className="absolute bottom-3 left-3 bg-[#f9a825]/90 backdrop-blur px-3 py-1.5 rounded-full text-xs font-bold text-white shadow-sm flex items-center gap-1.5">
            <div className="size-1.5 rounded-full bg-white animate-pulse" />
            {quotesReceived}/{maxQuotes} Quotes
          </div>
        )}

        {/* Privacy Lock Icon */}
        {showPrivacyProtection && (
          <div className="absolute bottom-3 right-3 bg-blue-500/90 backdrop-blur p-2 rounded-full shadow-sm" title="Contact info hidden until quote accepted">
            <Lock className="size-3.5 text-white" />
          </div>
        )}
      </div>
      
      <CardContent className="p-5 flex flex-col flex-grow">
        <h3 className="text-lg font-bold text-slate-900 mb-2 group-hover:text-[#f9a825] transition-colors line-clamp-2">
          {title}
        </h3>
        
        <div className="flex items-center gap-2 text-slate-500 text-sm mt-auto">
          <MapPin className="w-4 h-4 flex-shrink-0" />
          <span className="truncate">{protectedAddress}</span>
        </div>

        {/* Privacy Notice */}
        {showPrivacyProtection && (
          <div className="mt-3 pt-3 border-t border-slate-100">
            <p className="text-xs text-slate-500 flex items-center gap-1.5">
              <Lock className="size-3 flex-shrink-0" />
              Full details visible after quote submission
            </p>
          </div>
        )}
      </CardContent>
    </Card>
  );
}
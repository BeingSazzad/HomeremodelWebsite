import React from 'react';
import { Card, CardContent } from '../ui/card';
import { Star, ShieldCheck } from 'lucide-react';

interface ContractorCardProps {
  name: string;
  role: string;
  experience: string;
  rating: number;
  image: string;
  tags?: string[];
  reviewCount?: number;
}

export function ContractorCard({ name, role, experience, rating, image, tags = [], reviewCount }: ContractorCardProps) {
  return (
    <Card className="border border-slate-100 shadow-lg hover:shadow-xl transition-all duration-300 rounded-2xl overflow-hidden group h-full flex flex-col">
      <div className="relative h-[280px] flex-shrink-0">
        <img 
          src={image} 
          alt={name} 
          className="w-full h-full object-cover"
        />
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-60" />
        
        <div className="absolute top-4 right-4 flex flex-col gap-2 items-end">
           {tags.includes("Top Rated") && (
               <span className="bg-[#ffe0b3] text-[#694710] text-xs font-bold px-3 py-1.5 rounded-lg flex items-center gap-1 shadow-sm">
                   <ShieldCheck className="w-3 h-3" /> Top Rated
               </span>
           )}
           {tags.includes("Verified") && (
               <span className="bg-blue-100 text-blue-700 text-xs font-bold px-3 py-1.5 rounded-lg flex items-center gap-1 shadow-sm">
                   Verified
               </span>
           )}
        </div>
      </div>
      
      <CardContent className="p-6 relative -mt-10 mx-4 bg-white rounded-xl shadow-sm border border-slate-50 flex flex-col items-center text-center flex-grow mb-4">
        <h3 className="text-xl font-bold text-slate-900">{name}</h3>
        <p className="text-[#f9a825] font-medium text-sm mb-2">{role}</p>
        <p className="text-slate-400 text-xs mb-4">{experience}</p>
        
        <div className="flex items-center gap-1 text-amber-500 font-bold mt-auto">
            <Star className="w-4 h-4 fill-current" />
            <span>{rating}</span>
            {reviewCount && <span className="text-slate-400 font-normal text-xs ml-1">({reviewCount} reviews)</span>}
        </div>
      </CardContent>
    </Card>
  );
}

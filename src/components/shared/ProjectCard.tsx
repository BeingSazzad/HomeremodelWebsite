import React from 'react';
import { Card, CardContent } from '../ui/card';
import { MapPin } from 'lucide-react';

interface ProjectCardProps {
  title: string;
  address: string;
  price?: string;
  budget?: string;
  timeline?: string;
  image: string;
  category?: string;
  onClick?: () => void;
}

export function ProjectCard({ title, address, price, budget, timeline, image, category, onClick }: ProjectCardProps) {
  const displayPrice = price || budget || 'N/A';
  
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
        <div className="absolute top-3 right-3 bg-white/90 backdrop-blur px-3 py-1 rounded-full text-sm font-bold text-slate-900 shadow-sm">
           {displayPrice}
        </div>
        {category && (
            <div className="absolute top-3 left-3 bg-black/60 backdrop-blur px-3 py-1 rounded-full text-xs font-medium text-white">
                {category}
            </div>
        )}
      </div>
      <CardContent className="p-5 flex flex-col flex-grow">
        <h3 className="text-lg font-bold text-slate-900 mb-2 group-hover:text-[#f9a825] transition-colors line-clamp-1">{title}</h3>
        <div className="flex items-center gap-2 text-slate-500 text-sm mt-auto">
          <MapPin className="w-4 h-4 flex-shrink-0" />
          <span className="truncate">{address}</span>
        </div>
      </CardContent>
    </Card>
  );
}
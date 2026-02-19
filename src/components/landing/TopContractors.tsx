import React from 'react';
import { Star, MapPin, CheckCircle, Award, ArrowRight } from 'lucide-react';
import { ContractorCard } from '../shared/ContractorCard';

// Import images for contractors - Using verified professional headshot photos
const imgC1 = "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=200&h=200&q=80";
const imgC2 = "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=200&h=200&q=80";
const imgC3 = "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&h=200&q=80";
const imgC4 = "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&h=200&q=80";

const contractors = [
  {
    id: 1,
    name: "Shanto Hasan",
    role: "General Contractor",
    experience: "10+ Years Experience",
    rating: 4.9,
    image: imgC1,
    tags: ["Top Rated"],
    reviewCount: 124
  },
  {
    id: 2,
    name: "Sarah Jenkins",
    role: "Interior Designer",
    experience: "8 Years Experience",
    rating: 5.0,
    image: imgC2,
    tags: ["Best Value"],
    reviewCount: 89
  },
  {
    id: 3,
    name: "Michael Chen",
    role: "Renovation Specialist",
    experience: "12 Years Experience",
    rating: 4.8,
    image: imgC3,
    tags: ["Verified"],
    reviewCount: 56
  },
  {
    id: 4,
    name: "David Wilson",
    role: "Architect",
    experience: "15 Years Experience",
    rating: 4.9,
    image: imgC4,
    tags: ["Top Rated"],
    reviewCount: 210
  }
];

export function TopContractors({ onViewAll }: { onViewAll?: () => void }) {
  return (
    <section className="py-20 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-4">
           <div className="text-left">
             <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-4">
               Meet Our <span className="text-[#f9a825]">Top-Rated</span> Contractors
             </h2>
             <p className="text-slate-500 text-lg max-w-2xl">
               Connect with verified professionals who can turn your vision into reality.
             </p>
           </div>
           <button 
             onClick={onViewAll}
             className="flex items-center gap-2 text-[#f9a825] font-semibold hover:gap-3 transition-all group"
           >
             View All <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
           </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {contractors.map((contractor) => (
            <ContractorCard 
              key={contractor.id}
              name={contractor.name}
              role={contractor.role}
              experience={contractor.experience}
              rating={contractor.rating}
              image={contractor.image}
              tags={contractor.tags}
              reviewCount={contractor.reviewCount}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
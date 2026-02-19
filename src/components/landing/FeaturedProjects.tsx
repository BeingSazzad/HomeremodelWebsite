import React from 'react';
import { MapPin, Clock, DollarSign, Star, ArrowRight } from 'lucide-react';
import { Card } from '../ui/card';

// Import images - Using verified Unsplash images for home remodeling
const img1 = "https://images.unsplash.com/photo-1556911220-bff31c812dba?auto=format&fit=crop&w=400&h=300&q=80";
const img2 = "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?auto=format&fit=crop&w=400&h=300&q=80";
const img3 = "https://images.unsplash.com/photo-1556912167-f556f1f39faa?auto=format&fit=crop&w=400&h=300&q=80";
const img4 = "https://images.unsplash.com/photo-1556912173-46c336c7fd55?auto=format&fit=crop&w=400&h=300&q=80";
const img5 = "https://images.unsplash.com/photo-1556909172-54557c7e4fb7?auto=format&fit=crop&w=400&h=300&q=80";

const projects = [
  {
    id: 1,
    title: "Modern Kitchen Renovation",
    address: "58 Hullbrook Road, Billesley",
    price: "$7,500",
    image: img1,
    category: "Kitchen"
  },
  {
    id: 2,
    title: "Living Room Makeover",
    address: "12 Park Avenue, London",
    price: "$12,000",
    image: img2,
    category: "Living Room"
  },
  {
    id: 3,
    title: "Luxury Bathroom Design",
    address: "89 Queen Street, Manchester",
    price: "$5,500",
    image: img3,
    category: "Bathroom"
  },
  {
    id: 4,
    title: "Backyard Patio Setup",
    address: "44 Green Lane, Birmingham",
    price: "$3,200",
    image: img4,
    category: "Outdoor"
  },
  {
    id: 5,
    title: "Whole Home Paint",
    address: "21 River Road, Bristol",
    price: "$4,800",
    image: img5,
    category: "Paint"
  }
];

export function FeaturedProjects({ onViewAll }: { onViewAll?: () => void }) {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-4">
          <div>
            <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-4">
              Recent <span className="text-[#f9a825]">Remodeling</span> Projects
            </h2>
            <p className="text-slate-500 text-lg max-w-2xl">
              Browse through our curated list of recent renovation projects and find inspiration for your own home.
            </p>
          </div>
          <button 
            onClick={onViewAll}
            className="flex items-center gap-2 text-[#f9a825] font-semibold hover:gap-3 transition-all group"
          >
            View All <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {projects.slice(0, 4).map((project) => (
            <Card 
              key={project.id}
              title={project.title}
              address={project.address}
              price={project.price}
              image={project.image}
              category={project.category}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
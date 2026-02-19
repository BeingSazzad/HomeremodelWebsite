import React from 'react';
import { ArrowRight } from 'lucide-react';
import { ProjectCard } from '../shared/ProjectCard';

// Import images
import img1 from "figma:asset/5f0570135bc7b72d5646e12689c066c06bce48b1.png";
import img2 from "figma:asset/937c83fbfdd95e4d187e27127ac2947796d9beb8.png";
import img3 from "figma:asset/387b0bea35a1325a72ced3b5cc77c50f66376488.png";
import img4 from "figma:asset/3d2fe9ddf1199e61125b6450b17b1d8f20b01130.png";
import img5 from "figma:asset/719820b5045b188699b99ea719c0a7b8226d2e64.png";

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
            <ProjectCard 
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
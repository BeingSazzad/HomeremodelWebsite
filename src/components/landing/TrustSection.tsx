import React from 'react';
import { Users, Briefcase, Star, TrendingUp } from 'lucide-react';

const stats = [
  {
    icon: <Briefcase className="w-8 h-8 text-[#f9a825]" />,
    value: "12,500+",
    label: "Projects Completed"
  },
  {
    icon: <Users className="w-8 h-8 text-[#f9a825]" />,
    value: "8,300+",
    label: "Happy Homeowners"
  },
  {
    icon: <Star className="w-8 h-8 text-[#f9a825]" />,
    value: "4.9/5",
    label: "Average Rating"
  },
  {
    icon: <TrendingUp className="w-8 h-8 text-[#f9a825]" />,
    value: "2,400+",
    label: "Verified Contractors"
  }
];

export function TrustSection() {
  return (
    <section className="py-16 bg-slate-900">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          {stats.map((stat, index) => (
            <div key={index} className="flex flex-col items-center text-center gap-4">
              <div className="p-4 bg-slate-800/50 rounded-2xl">
                {stat.icon}
              </div>
              <div>
                <div className="text-3xl md:text-4xl font-bold text-white mb-1">{stat.value}</div>
                <div className="text-slate-400 text-sm md:text-base">{stat.label}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

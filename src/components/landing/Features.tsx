import React from 'react';
import { MessageSquare, Activity, Paintbrush, Calculator, Users, Headset } from 'lucide-react';

// Using verified Unsplash images for features
const imgFrame2147226608 = "https://images.unsplash.com/photo-1581858722446-d67a40e3d07b?auto=format&fit=crop&w=400&h=400&q=80";
const imgFrame2147226609 = "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=400&h=400&q=80";
const imgFrame2147226610 = "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=400&h=400&q=80";

const features = [
  {
    icon: <Users className="w-5 h-5 text-[#E39922]" />,
    title: "Connect with Experts",
    description: "Find verified professionals."
  },
  {
    icon: <Activity className="w-5 h-5 text-[#E39922]" />,
    title: "Real-time Updates",
    description: "Track your project progress."
  },
  {
    icon: <Paintbrush className="w-5 h-5 text-[#E39922]" />,
    title: "Custom Designs",
    description: "Tailored solutions for you."
  },
  {
    icon: <Calculator className="w-5 h-5 text-[#E39922]" />,
    title: "Instant Quotes",
    description: "Transparent pricing estimates."
  },
  {
    icon: <MessageSquare className="w-5 h-5 text-[#E39922]" />,
    title: "Reliable Contractors",
    description: "Vetted and reviewed pros."
  },
  {
    icon: <Headset className="w-5 h-5 text-[#E39922]" />,
    title: "24/7 Support",
    description: "We are here to help anytime."
  }
];

export function Features() {
  return (
    <section className="py-20 bg-white overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-16">

          {/* Image Collage - Left Side */}
          <div className="w-full lg:w-1/2 flex gap-5 shrink-0">
            {/* Tall image on left */}
            <div className="w-[48%] rounded-2xl overflow-hidden shadow-xl">
              <img
                src={imgFrame2147226608}
                alt="Home remodeling"
                className="w-full h-full object-cover"
                style={{ minHeight: '420px' }}
              />
            </div>
            {/* Two stacked images on right */}
            <div className="w-[48%] flex flex-col gap-5">
              <div className="rounded-2xl overflow-hidden shadow-xl flex-1">
                <img
                  src={imgFrame2147226609}
                  alt="Interior renovation"
                  className="w-full h-full object-cover"
                  style={{ minHeight: '195px' }}
                />
              </div>
              <div className="rounded-2xl overflow-hidden shadow-xl flex-1">
                <img
                  src={imgFrame2147226610}
                  alt="Construction project"
                  className="w-full h-full object-cover"
                  style={{ minHeight: '195px' }}
                />
              </div>
            </div>
          </div>

          {/* Content Side - Right */}
          <div className="w-full lg:w-1/2">
            <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-5 leading-tight">
              More Than Just a <span className="text-[#f9a825]">Marketplace</span>
            </h2>
            <p className="text-slate-500 text-base mb-10 leading-relaxed">
              From finding the perfect contractor to tracking your project's progress, Homzz offers a complete
              solution for your home remodeling needs. Everything you need is just a click away.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {features.map((feature, index) => (
                <div key={index} className="flex gap-4 items-start group">
                  <div className="p-3 bg-slate-50 rounded-xl shadow-sm border border-slate-100 group-hover:border-[#f9a825]/40 group-hover:bg-[#f9a825]/5 transition-all shrink-0">
                    {feature.icon}
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-900 mb-0.5">{feature.title}</h4>
                    <p className="text-slate-500 text-sm leading-relaxed">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
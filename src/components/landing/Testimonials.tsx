import React from 'react';
import { Star, Quote } from 'lucide-react';
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar';

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Homeowner",
    avatar: "SJ",
    rating: 5,
    text: "Homzz made our kitchen renovation so easy! We received 5 quotes within 24 hours and found the perfect contractor. The entire process was transparent and stress-free.",
    project: "Kitchen Remodel"
  },
  {
    name: "Michael Rodriguez",
    role: "General Contractor",
    avatar: "MR",
    rating: 5,
    text: "As a contractor, Homzz has been a game-changer for my business. I get quality leads regularly, and the platform makes it easy to showcase my work and build my reputation.",
    project: "Business Growth"
  },
  {
    name: "Emily Chen",
    role: "Homeowner",
    avatar: "EC",
    rating: 5,
    text: "We transformed our entire home through Homzz. The contractors were professional, and the platform's messaging system made communication seamless. Highly recommend!",
    project: "Whole Home Renovation"
  },
  {
    name: "David Thompson",
    role: "Interior Designer",
    avatar: "DT",
    rating: 5,
    text: "The platform connects me with clients who appreciate quality work. The subscription is worth every penny - I've tripled my client base in just 6 months.",
    project: "Client Acquisition"
  }
];

export function Testimonials() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-4">
            What Our <span className="text-[#f9a825]">Community</span> Says
          </h2>
          <p className="text-slate-500 text-lg max-w-2xl mx-auto">
            Real stories from homeowners and contractors who trust Homzz
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index} 
              className="bg-slate-50 rounded-2xl p-8 relative hover:shadow-lg transition-shadow duration-300 border border-slate-100"
            >
              <Quote className="absolute top-6 right-6 w-12 h-12 text-[#f9a825]/20" />
              
              <div className="flex items-center gap-4 mb-6">
                <Avatar className="w-14 h-14 border-2 border-[#f9a825]">
                  <AvatarFallback className="bg-[#f9a825] text-white font-bold">
                    {testimonial.avatar}
                  </AvatarFallback>
                </Avatar>
                <div className="flex-1">
                  <h4 className="font-bold text-slate-900">{testimonial.name}</h4>
                  <p className="text-sm text-slate-500">{testimonial.role}</p>
                </div>
                <div className="flex gap-1">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-[#f9a825] text-[#f9a825]" />
                  ))}
                </div>
              </div>

              <p className="text-slate-600 leading-relaxed mb-4">
                "{testimonial.text}"
              </p>

              <div className="inline-block bg-white px-4 py-2 rounded-full border border-slate-200">
                <span className="text-sm text-slate-600">{testimonial.project}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

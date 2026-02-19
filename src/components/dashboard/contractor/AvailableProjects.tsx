import React from 'react';
import { Button } from '../../ui/button';
import { Card, CardContent, CardFooter } from '../../ui/card';
import { MapPin, Calendar, DollarSign } from 'lucide-react';
import img1 from "figma:asset/5f0570135bc7b72d5646e12689c066c06bce48b1.png";
import img2 from "figma:asset/937c83fbfdd95e4d187e27127ac2947796d9beb8.png";

export function AvailableProjects({ onViewDetails }: { onViewDetails: (id: number) => void }) {
  const projects = [
    { id: 1, title: "Modern Kitchen Renovation", location: "Billesley", budget: "$7,500 - $10,000", date: "ASAP", image: img1 },
    { id: 2, title: "Living Room Makeover", location: "London", budget: "$12,000+", date: "Next Month", image: img2 },
  ];

  return (
    <div className="space-y-6">
       <div className="flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold text-slate-900">Projects Waiting for Your Expertise</h1>
            <p className="text-slate-500">Browse and submit quotes to get hired.</p>
          </div>
       </div>

       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map(project => (
              <Card key={project.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                  <div className="h-48 overflow-hidden relative">
                      <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
                      <div className="absolute top-3 right-3 bg-white/90 backdrop-blur px-3 py-1 rounded-full text-xs font-bold shadow-sm">
                          {project.date}
                      </div>
                  </div>
                  <CardContent className="p-5 space-y-3">
                      <h3 className="text-xl font-bold text-slate-900 line-clamp-1">{project.title}</h3>
                      <div className="flex items-center gap-2 text-slate-500 text-sm">
                          <MapPin className="w-4 h-4" /> {project.location}
                      </div>
                      <div className="flex items-center gap-2 text-green-600 font-semibold text-sm">
                          <DollarSign className="w-4 h-4" /> {project.budget}
                      </div>
                  </CardContent>
                  <CardFooter className="p-5 pt-0">
                      <Button className="w-full bg-[#f9a825] hover:bg-[#e39922] text-white" onClick={() => onViewDetails(project.id)}>
                          View Details
                      </Button>
                  </CardFooter>
              </Card>
          ))}
       </div>
    </div>
  );
}

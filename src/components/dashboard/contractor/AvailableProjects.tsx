import React from 'react';
import { Button } from '../../ui/button';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '../../ui/card';
import { MapPin, Calendar, DollarSign } from 'lucide-react';

// Using Unsplash images
const img1 = "https://images.unsplash.com/photo-1556911220-bff31c812dba?w=400&h=300&fit=crop";
const img2 = "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400&h=300&fit=crop";
const img3 = "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=400&h=300&fit=crop";

export function AvailableProjects({ onViewDetails }: { onViewDetails: (id: number) => void }) {
  const projects = [
    { id: 1, title: "Modern Kitchen Renovation", location: "Billesley", budget: "$7,500 - $10,000", date: "ASAP", image: img1 },
    { id: 2, title: "Living Room Makeover", location: "London", budget: "$12,000+", date: "Next Month", image: img2 },
    { id: 3, title: "Bathroom Upgrade", location: "Manchester", budget: "$5,000 - $7,500", date: "Next Week", image: img3 },
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
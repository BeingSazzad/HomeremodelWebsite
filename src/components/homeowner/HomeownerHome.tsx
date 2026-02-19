import { Button } from '../ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { Badge } from '../ui/badge';
import { ArrowRight, Hammer, PenTool, Paintbrush, Home } from 'lucide-react';

// Using Unsplash image for hero
const imgHero = "https://images.unsplash.com/photo-1484154218962-a197022b5858?w=1920&h=1080&fit=crop";

interface HomeownerHomeProps {
  onNavigate: (page: string) => void;
}

export function HomeownerHome({ onNavigate }: HomeownerHomeProps) {
  return (
    <div className="min-h-screen bg-white pb-20">
       {/* Welcome Hero */}
       <div className="relative bg-slate-900 text-white py-24 overflow-hidden">
          <div className="absolute inset-0 opacity-40">
               <img src={imgHero} className="w-full h-full object-cover" alt="Background" />
          </div>
          <div className="container mx-auto px-4 relative z-10 text-center">
               <h1 className="text-4xl md:text-5xl font-bold mb-6">What are you planning to build?</h1>
               <p className="text-xl text-slate-200 mb-8 max-w-2xl mx-auto">
                   From small repairs to major renovations, find the best pros for your project.
               </p>
               <Button 
                   className="bg-[#f9a825] hover:bg-[#e39922] text-white text-lg px-8 py-6 rounded-full"
                   onClick={() => onNavigate('post-project')}
               >
                   Post a Project for Free
               </Button>
          </div>
       </div>

       <div className="container mx-auto px-4 -mt-10 relative z-20">
           <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
               {[
                   { icon: Hammer, label: 'Renovation' },
                   { icon: Paintbrush, label: 'Painting' },
                   { icon: Home, label: 'Roofing' },
                   { icon: PenTool, label: 'Design' },
               ].map((item, i) => (
                   <Card key={i} className="hover:shadow-lg transition-all cursor-pointer hover:-translate-y-1 border-none shadow-md">
                       <CardContent className="flex flex-col items-center justify-center p-6 text-slate-600 hover:text-[#f9a825]">
                           <item.icon className="w-8 h-8 mb-2" />
                           <span className="font-medium">{item.label}</span>
                       </CardContent>
                   </Card>
               ))}
           </div>
       </div>

       {/* Active Projects Section */}
       <div className="container mx-auto px-4 mt-20">
           <div className="flex justify-between items-center mb-8">
               <h2 className="text-2xl font-bold text-slate-900">Your Active Projects</h2>
               <Button variant="link" onClick={() => onNavigate('my-projects')}>View All</Button>
           </div>
           
           {/* Mock Active Project Card */}
           <div className="border border-slate-200 rounded-2xl p-6 flex flex-col md:flex-row gap-6 items-center hover:border-[#f9a825] transition-colors bg-slate-50">
                <div className="w-full md:w-48 h-32 bg-slate-200 rounded-xl overflow-hidden flex-shrink-0">
                    <img src="https://images.unsplash.com/photo-1556911220-bff31c812dba?w=400&auto=format&fit=crop&q=60" alt="Kitchen" className="w-full h-full object-cover" />
                </div>
                <div className="flex-grow text-center md:text-left">
                    <div className="flex items-center gap-2 justify-center md:justify-start mb-2">
                        <span className="bg-green-100 text-green-700 text-xs font-bold px-2 py-1 rounded-full">Open for Quotes</span>
                        <span className="text-slate-400 text-xs">Posted 2 days ago</span>
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 mb-1">Modern Kitchen Renovation</h3>
                    <p className="text-slate-500 text-sm mb-4">58 Hullbrook Road, Billesley • Budget: $5k - $10k</p>
                    <div className="flex items-center gap-4 justify-center md:justify-start">
                        <div className="flex -space-x-2">
                            {[1,2,3].map(i => (
                                <div key={i} className="w-8 h-8 rounded-full border-2 border-white bg-slate-300" />
                            ))}
                        </div>
                        <span className="text-sm font-medium text-[#f9a825]">3 New Quotes</span>
                    </div>
                </div>
                <div className="flex-shrink-0">
                    <Button variant="outline" onClick={() => onNavigate('my-projects')}>Manage Project</Button>
                </div>
           </div>
       </div>
    </div>
  );
}
import React, { useState } from 'react';
import { Button } from '../../ui/button';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '../../ui/card';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '../../ui/tabs';
import { Badge } from '../../ui/badge';
import { Plus, Clock, CheckCircle, MessageSquare, Search, Calendar, MapPin, ChevronRight, MoreHorizontal, User, Hammer, Bell } from 'lucide-react';
import { Notifications } from '../Notifications';

interface HomeownerDashboardProps {
  onNavigate: (page: string) => void;
}

type ProjectStatus = 'bidding' | 'in_progress' | 'completed' | 'cancelled' | 'draft';

interface Project {
  id: string;
  title: string;
  status: ProjectStatus;
  datePosted: string;
  quotes: number;
  location: string;
  budget: string;
  image: string;
  hiredContractor?: string; // Only for in_progress or completed
  nextAction?: string;
}

export function HomeownerDashboard({ onNavigate }: HomeownerDashboardProps) {
  const [activeTab, setActiveTab] = useState('bidding');
  const [currentView, setCurrentView] = useState<'dashboard' | 'notifications'>('dashboard');

  // Enhanced Mock Data with accurate lifecycle states
  const projects: Project[] = [
    {
      id: '1',
      title: 'Master Bathroom Remodel',
      status: 'bidding',
      datePosted: '2 days ago',
      quotes: 3,
      location: 'San Francisco, CA',
      budget: '$15k - $25k',
      image: 'https://images.unsplash.com/photo-1584622050111-993a426fbf0a?w=150&h=150&fit=crop',
      nextAction: 'Review 3 New Quotes'
    },
    {
      id: '2',
      title: 'Kitchen Island Installation',
      status: 'in_progress',
      datePosted: '2 weeks ago',
      quotes: 5,
      location: 'San Francisco, CA',
      budget: '$5k - $8k',
      image: 'https://images.unsplash.com/photo-1556911220-e15b29be8c8f?w=150&h=150&fit=crop',
      hiredContractor: 'Elite Kitchens Inc.',
      nextAction: 'Milestone payment due'
    },
    {
      id: '5',
      title: 'Roof Repair',
      status: 'bidding',
      datePosted: '1 day ago',
      quotes: 0,
      location: 'San Francisco, CA',
      budget: '$2k - $4k',
      image: 'https://images.unsplash.com/photo-1632759145351-1d592919f522?w=150&h=150&fit=crop',
      nextAction: 'Waiting for contractors'
    },
    {
      id: '3',
      title: 'Backyard Deck Replacement',
      status: 'completed',
      datePosted: '2 months ago',
      quotes: 4,
      location: 'San Francisco, CA',
      budget: '$10k - $15k',
      image: 'https://images.unsplash.com/photo-1591825729269-caeb344f6df2?w=150&h=150&fit=crop',
      hiredContractor: 'Decks & Patios Co.'
    },
    {
      id: '4',
      title: 'Garage Door Repair',
      status: 'cancelled',
      datePosted: '4 months ago',
      quotes: 1,
      location: 'San Francisco, CA',
      budget: '$500 - $1k',
      image: 'https://images.unsplash.com/photo-1592652426693-e99335f606e7?w=150&h=150&fit=crop'
    }
  ];

  const stats = [
    { 
      label: 'Open for Bids', 
      value: projects.filter(p => p.status === 'bidding').length.toString(), 
      icon: MessageSquare,
      desc: 'Contractors reviewing' 
    },
    { 
      label: 'In Progress', 
      value: projects.filter(p => p.status === 'in_progress').length.toString(), 
      icon: Hammer,
      desc: 'Work underway'
    },
    { 
      label: 'Completed', 
      value: projects.filter(p => p.status === 'completed').length.toString(), 
      icon: CheckCircle,
      desc: 'Past projects'
    },
  ];

  const getStatusColor = (status: ProjectStatus) => {
    switch (status) {
      case 'bidding': return 'bg-amber-100 text-amber-700 hover:bg-amber-100/80 border-amber-200';
      case 'in_progress': return 'bg-blue-100 text-blue-700 hover:bg-blue-100/80 border-blue-200';
      case 'completed': return 'bg-emerald-100 text-emerald-700 hover:bg-emerald-100/80 border-emerald-200';
      case 'cancelled': return 'bg-slate-100 text-slate-700 hover:bg-slate-100/80 border-slate-200';
      case 'draft': return 'bg-slate-100 text-slate-600 hover:bg-slate-100/80 border-slate-200';
      default: return 'bg-slate-100 text-slate-700';
    }
  };

  const getStatusLabel = (status: ProjectStatus) => {
    switch (status) {
      case 'bidding': return 'Accepting Quotes';
      case 'in_progress': return 'In Progress';
      default: return status.charAt(0).toUpperCase() + status.slice(1);
    }
  };

  const getFilteredProjects = () => {
    if (activeTab === 'history') {
      return projects.filter(p => p.status === 'completed' || p.status === 'cancelled');
    }
    return projects.filter(p => p.status === activeTab);
  };

  const filteredProjects = getFilteredProjects();

  // Show notifications view if selected
  if (currentView === 'notifications') {
    return (
      <div>
        <button 
          onClick={() => setCurrentView('dashboard')} 
          className="mb-4 text-[#f9a825] hover:text-[#e39922] font-semibold flex items-center gap-2"
        >
          ← Back to Dashboard
        </button>
        <Notifications role="homeowner" />
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto space-y-8 pb-12">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-3xl font-bold text-slate-900">Dashboard</h1>
          <p className="text-slate-500 mt-1">Manage your home improvement projects</p>
        </div>
        <div className="flex gap-3">
          <Button 
            onClick={() => setCurrentView('notifications')} 
            variant="outline"
            className="gap-2 relative"
          >
            <Bell className="w-4 h-4" /> 
            Notifications
            <span className="absolute -top-1 -right-1 size-5 bg-red-500 text-white text-xs rounded-full flex items-center justify-center">
              4
            </span>
          </Button>
          <Button onClick={() => onNavigate('post-project')} className="bg-[#f9a825] hover:bg-[#e39922] text-white gap-2 shadow-sm">
            <Plus className="w-4 h-4" /> Post New Project
          </Button>
        </div>
      </div>

      {/* Stats Overview */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {stats.map((stat, i) => (
          <Card key={i} className="border-none shadow-sm hover:shadow-md transition-shadow">
            <CardContent className="flex items-center p-6">
              <div className="bg-amber-50 p-3 rounded-full mr-4 ring-1 ring-amber-100">
                <stat.icon className="w-6 h-6 text-[#f9a825]" />
              </div>
              <div>
                <p className="text-sm text-slate-500 font-medium">{stat.label}</p>
                <div className="flex items-baseline gap-2">
                   <p className="text-2xl font-bold text-slate-900">{stat.value}</p>
                   <span className="text-xs text-slate-400">{stat.desc}</span>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Projects Section */}
      <div className="space-y-6">
        <Tabs defaultValue="bidding" className="w-full" onValueChange={setActiveTab}>
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
            <TabsList className="grid w-full sm:w-auto grid-cols-3 bg-slate-100/50 p-1">
              <TabsTrigger value="bidding">Receiving Quotes</TabsTrigger>
              <TabsTrigger value="in_progress">In Progress</TabsTrigger>
              <TabsTrigger value="history">History</TabsTrigger>
            </TabsList>
            
            {/* Search/Filter placeholder */}
            <div className="flex gap-2 w-full sm:w-auto">
               <div className="relative w-full sm:w-64">
                 <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-slate-400" />
                 <input 
                   type="text" 
                   placeholder="Search projects..." 
                   className="w-full h-9 pl-9 pr-4 rounded-md border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#f9a825]/20"
                 />
               </div>
            </div>
          </div>

          <TabsContent value={activeTab} className="mt-0">
             {filteredProjects.length === 0 ? (
               <Card className="border-dashed border-2 border-slate-200 bg-slate-50/50">
                 <CardContent className="flex flex-col items-center justify-center py-16 text-center">
                   <div className="w-16 h-16 bg-slate-100 rounded-full flex items-center justify-center mb-4">
                     {activeTab === 'bidding' ? <MessageSquare className="w-8 h-8 text-slate-400" /> : 
                      activeTab === 'in_progress' ? <Hammer className="w-8 h-8 text-slate-400" /> :
                      <Clock className="w-8 h-8 text-slate-400" />}
                   </div>
                   <h3 className="text-lg font-medium text-slate-900">
                      {activeTab === 'bidding' ? 'No open projects' : 
                       activeTab === 'in_progress' ? 'No work in progress' : 'No past projects'}
                   </h3>
                   <p className="text-slate-500 mt-2 max-w-sm">
                     {activeTab === 'bidding' ? 'Ready to start? Post a new project to get quotes from professionals.' : 
                      activeTab === 'in_progress' ? 'Projects you hire for will appear here once work begins.' : 
                      'Your completed and cancelled projects will appear here.'}
                   </p>
                   {activeTab === 'bidding' && (
                     <Button onClick={() => onNavigate('post-project')} className="mt-6 bg-[#f9a825] hover:bg-[#e39922] text-white">
                        Post Your First Project
                     </Button>
                   )}
                 </CardContent>
               </Card>
             ) : (
               <div className="grid grid-cols-1 gap-4">
                 {filteredProjects.map((project) => (
                   <Card key={project.id} className="overflow-hidden hover:shadow-md transition-all duration-200 border-slate-200 group cursor-pointer" onClick={() => onNavigate('project-details-view')}>
                     <div className="flex flex-col sm:flex-row">
                       {/* Image Section */}
                       <div className="w-full sm:w-48 h-48 sm:h-auto relative bg-slate-100">
                         <img 
                           src={project.image} 
                           alt={project.title} 
                           className="w-full h-full object-cover absolute inset-0 transition-transform duration-500 group-hover:scale-105" 
                         />
                       </div>
                       
                       {/* Content Section */}
                       <div className="flex-1 p-6 flex flex-col justify-between">
                         <div>
                           <div className="flex justify-between items-start mb-2">
                             <div>
                               <div className="flex items-center gap-2 mb-1">
                                 <Badge variant="secondary" className={getStatusColor(project.status)}>
                                   {getStatusLabel(project.status)}
                                 </Badge>
                                 <span className="text-xs text-slate-400 flex items-center gap-1">
                                    <Clock className="w-3 h-3" /> Posted {project.datePosted}
                                 </span>
                               </div>
                               <h3 className="text-xl font-bold text-slate-900 group-hover:text-[#f9a825] transition-colors">
                                 {project.title}
                               </h3>
                             </div>
                             <Button variant="ghost" size="icon" className="text-slate-400 hover:text-slate-600">
                               <MoreHorizontal className="w-5 h-5" />
                             </Button>
                           </div>
                           
                           {/* Contextual Info based on Status */}
                           <div className="flex flex-wrap gap-4 mt-3 text-sm text-slate-600">
                             <div className="flex items-center gap-1.5">
                               <MapPin className="w-4 h-4 text-slate-400" />
                               {project.location}
                             </div>
                             
                             {project.status === 'in_progress' && project.hiredContractor && (
                                <div className="flex items-center gap-1.5 text-blue-700 font-medium bg-blue-50 px-2 py-0.5 rounded-md">
                                  <User className="w-4 h-4" />
                                  Contractor: {project.hiredContractor}
                                </div>
                             )}
                             
                             {project.status === 'bidding' && (
                                <div className="flex items-center gap-1.5">
                                  <Calendar className="w-4 h-4 text-slate-400" />
                                  Est. Budget: {project.budget}
                                </div>
                             )}
                           </div>
                         </div>
                         
                         <div className="mt-6 flex flex-col sm:flex-row items-start sm:items-center justify-between pt-4 border-t border-slate-100 gap-4">
                           {/* Status specific footer info */}
                           <div className="flex items-center gap-2">
                             {project.status === 'bidding' && (
                               <>
                                 <div className="flex -space-x-2">
                                   {[...Array(Math.min(3, project.quotes))].map((_, i) => (
                                     <div key={i} className="w-8 h-8 rounded-full border-2 border-white bg-slate-200 flex items-center justify-center text-xs font-medium text-slate-600">
                                       {String.fromCharCode(65 + i)}
                                     </div>
                                   ))}
                                   {project.quotes === 0 && (
                                      <div className="w-8 h-8 rounded-full border-2 border-dashed border-slate-300 bg-slate-50 flex items-center justify-center text-xs text-slate-400">
                                        0
                                      </div>
                                   )}
                                 </div>
                                 <span className="text-sm font-medium text-slate-700 ml-2">
                                   {project.quotes === 0 ? 'Waiting for bids...' : `${project.quotes} Quotes Received`}
                                 </span>
                               </>
                             )}
                             
                             {project.status === 'in_progress' && (
                                <div className="flex items-center gap-2 text-sm text-slate-600">
                                   <div className="w-2 h-2 rounded-full bg-blue-500 animate-pulse"></div>
                                   Status: <span className="font-medium text-slate-900">Work in Progress</span>
                                </div>
                             )}
                           </div>
                           
                           <Button variant={project.status === 'bidding' && project.quotes > 0 ? "default" : "outline"} 
                                   className={project.status === 'bidding' && project.quotes > 0 ? "bg-[#f9a825] hover:bg-[#e39922] text-white border-transparent" : "group-hover:bg-slate-50 group-hover:border-slate-300 transition-all"}>
                             {project.status === 'bidding' ? (project.quotes > 0 ? 'Review Quotes' : 'View Project') : 
                              project.status === 'in_progress' ? 'Manage Project' : 'View Details'} 
                             <ChevronRight className="w-4 h-4 ml-1 opacity-50" />
                           </Button>
                         </div>
                       </div>
                     </div>
                   </Card>
                 ))}
               </div>
             )}
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
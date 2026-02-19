import React, { useState } from 'react';
import { Button } from '../../ui/button';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '../../ui/card';
import { Briefcase, FileText, DollarSign, ArrowRight, Bell } from 'lucide-react';
import { Notifications } from '../Notifications';

export function ContractorDashboard({ onNavigate }: { onNavigate: (page: string) => void }) {
  const [currentView, setCurrentView] = useState<'dashboard' | 'notifications'>('dashboard');

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
        <Notifications role="contractor" />
      </div>
    );
  }

  return (
    <div className="space-y-8">
       <div className="flex justify-between items-center">
           <div>
               <h1 className="text-3xl font-bold text-slate-900">Hello, Ace Renovations</h1>
               <p className="text-slate-500">Here is what's happening with your business today.</p>
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
             <Button onClick={() => onNavigate('available-projects')} className="bg-[#f9a825] hover:bg-[#e39922] text-white">
                 Browse Projects
             </Button>
           </div>
       </div>

       <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
           <Card className="bg-blue-50 border-none">
               <CardContent className="p-6">
                   <div className="flex justify-between items-start mb-4">
                       <div className="p-3 bg-blue-100 rounded-lg text-blue-600"><Briefcase className="w-6 h-6" /></div>
                       <span className="text-blue-600 font-bold text-2xl">12</span>
                   </div>
                   <p className="font-medium text-slate-700">New Opportunities</p>
                   <p className="text-sm text-slate-500">Matches your skills</p>
               </CardContent>
           </Card>
           <Card className="bg-amber-50 border-none">
               <CardContent className="p-6">
                   <div className="flex justify-between items-start mb-4">
                       <div className="p-3 bg-amber-100 rounded-lg text-amber-600"><FileText className="w-6 h-6" /></div>
                       <span className="text-amber-600 font-bold text-2xl">5</span>
                   </div>
                   <p className="font-medium text-slate-700">Active Quotes</p>
                   <p className="text-sm text-slate-500">2 pending review</p>
               </CardContent>
           </Card>
           <Card className="bg-green-50 border-none">
               <CardContent className="p-6">
                   <div className="flex justify-between items-start mb-4">
                       <div className="p-3 bg-green-100 rounded-lg text-green-600"><DollarSign className="w-6 h-6" /></div>
                       <span className="text-green-600 font-bold text-2xl">$12k</span>
                   </div>
                   <p className="font-medium text-slate-700">Earnings</p>
                   <p className="text-sm text-slate-500">This month</p>
               </CardContent>
           </Card>
       </div>

       <div>
           <h3 className="text-xl font-bold text-slate-900 mb-4">Recent Activity</h3>
           <Card>
               <CardContent className="p-0">
                   {[1, 2, 3].map((i) => (
                       <div key={i} className="p-4 border-b last:border-0 flex items-center justify-between hover:bg-slate-50 transition-colors">
                           <div className="flex items-center gap-4">
                               <div className="h-10 w-10 bg-slate-100 rounded-full flex items-center justify-center font-bold text-slate-500">JD</div>
                               <div>
                                   <p className="font-medium text-slate-900">Quote Viewed by John Doe</p>
                                   <p className="text-xs text-slate-500">Kitchen Renovation • 2 hours ago</p>
                               </div>
                           </div>
                           <Button variant="ghost" size="icon"><ArrowRight className="w-4 h-4" /></Button>
                       </div>
                   ))}
               </CardContent>
           </Card>
       </div>
    </div>
  );
}
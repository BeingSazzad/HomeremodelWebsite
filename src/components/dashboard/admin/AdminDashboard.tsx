import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '../../ui/card';
import { Button } from '../../ui/button';
import { Users, Hammer, DollarSign, FolderOpen, MoreHorizontal } from 'lucide-react';

export function AdminDashboard() {
  const stats = [
      { label: 'Total Users', value: '1,234', icon: Users, color: 'bg-blue-100 text-blue-600' },
      { label: 'Total Contractors', value: '456', icon: Hammer, color: 'bg-orange-100 text-orange-600' },
      { label: 'Active Subscriptions', value: '389', icon: DollarSign, color: 'bg-green-100 text-green-600' },
      { label: 'Projects Posted', value: '892', icon: FolderOpen, color: 'bg-purple-100 text-purple-600' },
  ];

  return (
    <div className="space-y-8">
       <div>
           <h1 className="text-3xl font-bold text-slate-900">Platform Overview</h1>
           <p className="text-slate-500">Admin control panel</p>
       </div>

       <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
           {stats.map((stat, i) => (
               <Card key={i}>
                   <CardContent className="flex items-center p-6 gap-4">
                       <div className={`p-3 rounded-xl ${stat.color}`}>
                           <stat.icon className="w-6 h-6" />
                       </div>
                       <div>
                           <p className="text-sm text-slate-500 font-medium">{stat.label}</p>
                           <h3 className="text-2xl font-bold text-slate-900">{stat.value}</h3>
                       </div>
                   </CardContent>
               </Card>
           ))}
       </div>

       <div className="grid md:grid-cols-2 gap-8">
           {/* Recent Users */}
           <Card>
               <CardHeader className="flex flex-row items-center justify-between">
                   <CardTitle>Recent Users</CardTitle>
                   <Button variant="ghost" size="sm">View All</Button>
               </CardHeader>
               <CardContent>
                   <div className="space-y-4">
                       {[1,2,3].map(i => (
                           <div key={i} className="flex items-center justify-between p-2 hover:bg-slate-50 rounded-lg">
                               <div className="flex items-center gap-3">
                                   <div className="w-8 h-8 bg-slate-200 rounded-full" />
                                   <div>
                                       <p className="font-medium text-sm">User Name {i}</p>
                                       <p className="text-xs text-slate-500">user{i}@example.com</p>
                                   </div>
                               </div>
                               <Button size="sm" variant="outline">Manage</Button>
                           </div>
                       ))}
                   </div>
               </CardContent>
           </Card>

           {/* Recent Projects */}
           <Card>
               <CardHeader className="flex flex-row items-center justify-between">
                   <CardTitle>Recent Projects</CardTitle>
                   <Button variant="ghost" size="sm">View All</Button>
               </CardHeader>
               <CardContent>
                   <div className="space-y-4">
                       {[1,2,3].map(i => (
                           <div key={i} className="flex items-center justify-between p-2 hover:bg-slate-50 rounded-lg">
                               <div className="flex items-center gap-3">
                                   <div className="w-8 h-8 bg-amber-100 rounded-lg flex items-center justify-center text-amber-600 font-bold">P</div>
                                   <div>
                                       <p className="font-medium text-sm">Project Title {i}</p>
                                       <p className="text-xs text-slate-500">Posted 2h ago</p>
                                   </div>
                               </div>
                               <Button size="icon" variant="ghost"><MoreHorizontal className="w-4 h-4" /></Button>
                           </div>
                       ))}
                   </div>
               </CardContent>
           </Card>
       </div>
    </div>
  );
}

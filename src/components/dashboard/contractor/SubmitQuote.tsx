import React from 'react';
import { Button } from '../../ui/button';
import { Input } from '../../ui/input';
import { Textarea } from '../../ui/textarea';
import { Label } from '../../ui/label';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '../../ui/card';
import { ArrowLeft } from 'lucide-react';

export function SubmitQuote({ onBack, onSubmit }: { onBack: () => void, onSubmit: () => void }) {
  return (
    <div className="max-w-2xl mx-auto">
       <Button variant="ghost" onClick={onBack} className="mb-4 gap-2 pl-0 hover:pl-2 transition-all">
           <ArrowLeft className="w-4 h-4" /> Back to Projects
       </Button>
       
       <Card>
           <CardHeader>
               <CardTitle>Send Your Quote</CardTitle>
               <CardDescription>Submit a competitive quote to win this job.</CardDescription>
           </CardHeader>
           <CardContent className="space-y-4">
               <div className="grid grid-cols-2 gap-4">
                   <div className="space-y-2">
                       <Label>Quote Amount ($)</Label>
                       <Input type="number" placeholder="0.00" />
                   </div>
                   <div className="space-y-2">
                       <Label>Estimated Timeline</Label>
                       <Input placeholder="e.g. 2 weeks" />
                   </div>
               </div>
               <div className="space-y-2">
                   <Label>Message (Optional)</Label>
                   <Textarea placeholder="Explain why you are the best fit for this job..." className="h-32" />
               </div>
           </CardContent>
           <CardFooter>
               <Button className="w-full bg-[#f9a825] hover:bg-[#e39922] text-white" onClick={onSubmit}>
                   Submit Quote
               </Button>
           </CardFooter>
       </Card>
    </div>
  );
}

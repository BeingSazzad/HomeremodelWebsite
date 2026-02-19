import React from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '../../ui/card';
import { Button } from '../../ui/button';
import { Check, Zap } from 'lucide-react';

export function Subscription({ onSubscribe }: { onSubscribe: () => void }) {
  return (
    <div className="max-w-5xl mx-auto py-12 text-center">
      <div className="mb-12">
        <h1 className="text-4xl font-bold text-slate-900 mb-4">Unlock Access to New Projects</h1>
        <p className="text-xl text-slate-500">Subscribe to view homeowner projects and submit quotes.</p>
      </div>

      <div className="grid md:grid-cols-3 gap-8 items-start">
        {/* Basic */}
        <Card className="border-slate-200 shadow-sm">
          <CardHeader>
            <CardTitle className="text-xl">Starter</CardTitle>
            <CardDescription>For new contractors</CardDescription>
            <div className="mt-4 text-4xl font-bold">$29<span className="text-base font-normal text-slate-500">/mo</span></div>
          </CardHeader>
          <CardContent className="space-y-4 text-left">
             <div className="flex gap-2"><Check className="w-4 h-4 text-green-500" /> <span>5 Quotes per month</span></div>
             <div className="flex gap-2"><Check className="w-4 h-4 text-green-500" /> <span>Basic Profile</span></div>
             <div className="flex gap-2"><Check className="w-4 h-4 text-green-500" /> <span>Email Support</span></div>
          </CardContent>
          <CardFooter>
            <Button variant="outline" className="w-full">Choose Starter</Button>
          </CardFooter>
        </Card>

        {/* Pro */}
        <Card className="border-[#f9a825] shadow-xl relative overflow-hidden transform scale-105">
          <div className="absolute top-0 right-0 bg-[#f9a825] text-white text-xs font-bold px-3 py-1 rounded-bl-lg">POPULAR</div>
          <CardHeader>
            <CardTitle className="text-xl">Professional</CardTitle>
            <CardDescription>For growing businesses</CardDescription>
            <div className="mt-4 text-4xl font-bold text-[#f9a825]">$79<span className="text-base font-normal text-slate-500">/mo</span></div>
          </CardHeader>
          <CardContent className="space-y-4 text-left">
             <div className="flex gap-2"><Check className="w-4 h-4 text-green-500" /> <span>Unlimited Quotes</span></div>
             <div className="flex gap-2"><Check className="w-4 h-4 text-green-500" /> <span>Premium Profile</span></div>
             <div className="flex gap-2"><Check className="w-4 h-4 text-green-500" /> <span>Priority Support</span></div>
             <div className="flex gap-2"><Zap className="w-4 h-4 text-[#f9a825]" /> <span>Verified Badge</span></div>
          </CardContent>
          <CardFooter>
            <Button className="w-full bg-[#f9a825] hover:bg-[#e39922] text-white" onClick={onSubscribe}>Activate Subscription</Button>
          </CardFooter>
        </Card>

        {/* Enterprise */}
        <Card className="border-slate-200 shadow-sm">
          <CardHeader>
            <CardTitle className="text-xl">Agency</CardTitle>
            <CardDescription>For large teams</CardDescription>
            <div className="mt-4 text-4xl font-bold">$199<span className="text-base font-normal text-slate-500">/mo</span></div>
          </CardHeader>
          <CardContent className="space-y-4 text-left">
             <div className="flex gap-2"><Check className="w-4 h-4 text-green-500" /> <span>Everything in Pro</span></div>
             <div className="flex gap-2"><Check className="w-4 h-4 text-green-500" /> <span>Multiple Accounts</span></div>
             <div className="flex gap-2"><Check className="w-4 h-4 text-green-500" /> <span>Dedicated Account Manager</span></div>
          </CardContent>
          <CardFooter>
            <Button variant="outline" className="w-full">Contact Sales</Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
}

import React from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '../ui/card';
import { Button } from '../ui/button';
import { Home, Hammer, ArrowLeft } from 'lucide-react';

interface AuthSelectionProps {
  onSelectRole: (role: 'homeowner' | 'contractor') => void;
  onBack: () => void;
}

export function AuthSelection({ onSelectRole, onBack }: AuthSelectionProps) {
  return (
    <div className="min-h-screen bg-slate-50 flex flex-col items-center justify-center p-4">
      <Button variant="ghost" onClick={onBack} className="absolute top-8 left-8 gap-2">
        <ArrowLeft className="w-4 h-4" /> Back to Home
      </Button>
      
      <div className="text-center mb-12 space-y-4">
        <h1 className="text-4xl font-bold text-slate-900">Join Homzz Today</h1>
        <p className="text-slate-500 text-lg">Choose how you want to use our platform</p>
      </div>

      <div className="grid md:grid-cols-2 gap-8 max-w-4xl w-full">
        {/* Homeowner Card */}
        <Card className="group hover:shadow-xl transition-all duration-300 cursor-pointer border-2 hover:border-[#f9a825]" onClick={() => onSelectRole('homeowner')}>
          <CardHeader className="text-center pt-12 pb-6">
            <div className="mx-auto bg-blue-50 w-20 h-20 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <Home className="w-10 h-10 text-blue-600" />
            </div>
            <CardTitle className="text-2xl">I’m a Homeowner</CardTitle>
            <CardDescription className="text-base mt-2">
              Find trusted contractors for your home remodeling projects.
            </CardDescription>
          </CardHeader>
          <CardContent className="pb-12 px-8 text-center">
            <ul className="space-y-3 text-slate-500 mb-8 text-sm">
              <li>✓ Post your renovation projects</li>
              <li>✓ Compare quotes from pros</li>
              <li>✓ Track project progress</li>
            </ul>
            <Button className="w-full bg-blue-600 hover:bg-blue-700">Join as Homeowner</Button>
          </CardContent>
        </Card>

        {/* Contractor Card */}
        <Card className="group hover:shadow-xl transition-all duration-300 cursor-pointer border-2 hover:border-[#f9a825]" onClick={() => onSelectRole('contractor')}>
          <CardHeader className="text-center pt-12 pb-6">
            <div className="mx-auto bg-[#fff8e6] w-20 h-20 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <Hammer className="w-10 h-10 text-[#f9a825]" />
            </div>
            <CardTitle className="text-2xl">I’m a Contractor</CardTitle>
            <CardDescription className="text-base mt-2">
              Grow your business and find new high-quality leads.
            </CardDescription>
          </CardHeader>
          <CardContent className="pb-12 px-8 text-center">
             <ul className="space-y-3 text-slate-500 mb-8 text-sm">
              <li>✓ Access verified project leads</li>
              <li>✓ Showcase your portfolio</li>
              <li>✓ Manage quotes and jobs</li>
            </ul>
            <Button className="w-full bg-[#f9a825] hover:bg-[#e39922] text-white">Join as Contractor</Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

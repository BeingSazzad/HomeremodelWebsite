import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '../ui/card';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Label } from '../ui/label';
import { ArrowLeft, User, Mail, Lock, Phone, MapPin } from 'lucide-react';
import { ContractorSignup } from './ContractorSignup';
import { ImageWithFallback } from '../figma/ImageWithFallback';

// SVG assets from Figma
import svgPaths from "../../imports/svg-ku0djt9ewm";

interface SignupFormProps {
  role: 'homeowner' | 'contractor';
  onBack: () => void;
  onComplete: () => void;
}

export function SignupForm({ role, onBack, onComplete }: SignupFormProps) {
  if (role === 'contractor') {
    return (
      <ContractorSignup 
        onComplete={onComplete}
        onLogin={onBack}
      />
    );
  }

  // Homeowner Signup Flow (Full Screen Split Layout)
  return (
    <div className="min-h-screen flex flex-col lg:flex-row bg-white overflow-hidden">
      {/* Left Side - Image Section */}
      <div className="hidden lg:flex lg:w-1/2 relative bg-slate-900 overflow-hidden">
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1758998202918-d921125a700f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBsdXh1cnklMjBob3VzZSUyMHJlbm92YXRpb24lMjBleHRlcmlvciUyMGludGVyaW9yfGVufDF8fHx8MTc3MTQ2NTUyOXww&ixlib=rb-4.1.0&q=80&w=1080"
          alt="Homeowner Signup"
          className="absolute inset-0 w-full h-full object-cover opacity-70"
        />
        
        {/* Overlay Content */}
        <div className="relative z-10 flex flex-col justify-between p-16 w-full h-full">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="size-10 bg-[#f9a825] rounded-lg flex items-center justify-center p-2">
              <svg className="w-full h-full" viewBox="0 0 24 24" fill="none">
                <path d={svgPaths.p2d2ba100} fill="white" />
                <path d={svgPaths.p22977070} fill="white" />
                <path d={svgPaths.p37aec00} fill="white" />
              </svg>
            </div>
            <span className="text-white text-2xl font-bold tracking-tight">HOMZZ</span>
          </div>

          <div className="max-w-xl">
            <h2 className="text-5xl font-bold text-white leading-tight mb-6">
              Start Your Journey<br />
              <span className="text-[#f9a825]">As a Homeowner</span>
            </h2>
            <p className="text-xl text-slate-200 font-light">
              Join our community of homeowners and find the most reliable contractors for your next big project.
            </p>
          </div>

          <div className="w-1/4 h-1 bg-[#f9a825]" />
        </div>
      </div>

      {/* Right Side - Form Section */}
      <div className="flex-1 flex flex-col p-8 bg-slate-50/50 overflow-y-auto">
        <div className="max-w-md mx-auto w-full py-12">
          {/* Back Button */}
          <button
            onClick={onBack}
            className="flex items-center gap-2 text-slate-500 hover:text-slate-900 mb-10 transition-colors group"
          >
            <ArrowLeft className="size-5 group-hover:-translate-x-1 transition-transform" />
            <span className="font-medium">Back to role selection</span>
          </button>

          <div className="mb-8">
            <h1 className="text-3xl font-bold text-slate-900 mb-2">Create Homeowner Account</h1>
            <p className="text-slate-500 text-lg">Enter your details to start posting projects.</p>
          </div>

          <form onSubmit={(e) => { e.preventDefault(); onComplete(); }} className="space-y-5">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="firstName" className="text-slate-700">First Name</Label>
                <div className="relative">
                  <User className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
                  <Input id="firstName" placeholder="John" className="pl-9 h-12 bg-white rounded-xl border-slate-200 focus:ring-[#f9a825]" required />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="lastName" className="text-slate-700">Last Name</Label>
                <div className="relative">
                  <User className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
                  <Input id="lastName" placeholder="Doe" className="pl-9 h-12 bg-white rounded-xl border-slate-200 focus:ring-[#f9a825]" required />
                </div>
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="email" className="text-slate-700">Email Address</Label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
                <Input id="email" type="email" placeholder="john@example.com" className="pl-9 h-12 bg-white rounded-xl border-slate-200 focus:ring-[#f9a825]" required />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="phone" className="text-slate-700">Phone</Label>
                <div className="relative">
                  <Phone className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
                  <Input id="phone" type="tel" placeholder="(555) 000-0000" className="pl-9 h-12 bg-white rounded-xl border-slate-200 focus:ring-[#f9a825]" required />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="zipCode" className="text-slate-700">Zip Code</Label>
                <div className="relative">
                  <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
                  <Input id="zipCode" placeholder="12345" className="pl-9 h-12 bg-white rounded-xl border-slate-200 focus:ring-[#f9a825]" required />
                </div>
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
                <Input id="password" type="password" placeholder="••••••••" className="pl-9 h-12 bg-white rounded-xl border-slate-200 focus:ring-[#f9a825]" required />
              </div>
            </div>

            <div className="pt-4">
              <Button type="submit" className="w-full h-14 bg-[#f9a825] hover:bg-[#e69b20] text-white font-bold text-lg rounded-xl shadow-lg shadow-[#f9a825]/20 transition-all hover:scale-[1.01]">
                Create Account
              </Button>
            </div>

            <p className="text-center text-slate-500 text-sm mt-6">
              By joining, you agree to our <a href="#" className="text-[#f9a825] font-bold hover:underline">Terms of Service</a> and <a href="#" className="text-[#f9a825] font-bold hover:underline">Privacy Policy</a>.
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}
import { useState } from 'react';
import { Building2, Home, ArrowRight, Check } from 'lucide-react';
import { ImageWithFallback } from '../figma/ImageWithFallback';

// SVG assets from Figma
import svgPaths from "../../imports/svg-ku0djt9ewm";

interface SignupProps {
  onSignup: (role: string) => void;
  onNavigateToLogin: () => void;
}

export function Signup({ onSignup, onNavigateToLogin }: SignupProps) {
  return (
    <div className="min-h-screen flex flex-col lg:flex-row bg-white overflow-hidden">
      {/* Left Side - Image Section */}
      <div className="hidden lg:flex lg:w-1/2 relative bg-slate-900 overflow-hidden">
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1758998202918-d921125a700f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBsdXh1cnklMjBob3VzZSUyMHJlbm92YXRpb24lMjBleHRlcmlvciUyMGludGVyaW9yfGVufDF8fHx8MTc3MTQ2NTUyOXww&ixlib=rb-4.1.0&q=80&w=1080"
          alt="Luxury Construction Planning"
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
            <h1 className="text-6xl font-bold text-white leading-[1.1] mb-6">
              Join Thousands of<br />
              <span className="text-[#f9a825]">Successful Projects</span>
            </h1>
            <p className="text-xl text-slate-200 leading-relaxed font-light mb-10">
              Whether you're a homeowner looking for the perfect contractor or a contractor seeking new opportunities, we've got you covered.
            </p>

            {/* Benefits List from Figma */}
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="size-6 rounded-full bg-[#f9a825] flex items-center justify-center mt-1">
                  <div className="size-2 rounded-full bg-white" />
                </div>
                <div>
                  <h3 className="text-white font-bold text-lg">Verified Professionals</h3>
                  <p className="text-slate-400">All contractors are thoroughly vetted and verified</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="size-6 rounded-full bg-[#f9a825] flex items-center justify-center mt-1">
                  <div className="size-2 rounded-full bg-white" />
                </div>
                <div>
                  <h3 className="text-white font-bold text-lg">Secure Payments</h3>
                  <p className="text-slate-400">Payment protection for every project milestone</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="size-6 rounded-full bg-[#f9a825] flex items-center justify-center mt-1">
                  <div className="size-2 rounded-full bg-white" />
                </div>
                <div>
                  <h3 className="text-white font-bold text-lg">Help & Support</h3>
                  <p className="text-slate-400">Our team is always here to help you succeed</p>
                </div>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-6 text-slate-400 text-sm font-medium">
            <span>✓ Free to join</span>
            <span>✓ No hidden fees</span>
            <span>✓ Trusted by thousands</span>
          </div>
        </div>
      </div>

      {/* Right Side - Role Selection (Figma Design) */}
      <div className="flex-1 flex items-center justify-center p-8 bg-slate-50/50">
        <div className="w-full max-w-lg animate-in fade-in slide-in-from-bottom-4 duration-700">
          <div className="text-center mb-10">
            <h2 className="text-4xl font-bold text-slate-900 mb-3">Get Started</h2>
            <p className="text-slate-500 text-lg">Choose your account type to begin</p>
          </div>

          <div className="space-y-6">
            {/* Contractor Option */}
            <button
              onClick={() => onSignup('contractor')}
              className="w-full group relative flex items-center gap-6 p-8 bg-white border-2 border-slate-200 rounded-3xl text-left transition-all hover:border-[#f9a825] hover:shadow-xl hover:shadow-[#f9a825]/5 hover:-translate-y-1"
            >
              <div className="size-16 bg-[#f9a825]/10 rounded-2xl flex items-center justify-center transition-colors group-hover:bg-[#f9a825]">
                <Building2 className="size-8 text-[#f9a825] group-hover:text-white transition-colors" />
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-bold text-slate-900 mb-1">I'm a Contractor</h3>
                <p className="text-slate-500">Find projects, submit quotes, and grow your business</p>
              </div>
              <ArrowRight className="size-6 text-slate-300 group-hover:text-[#f9a825] transition-all group-hover:translate-x-2" />
            </button>

            {/* Homeowner Option */}
            <button
              onClick={() => onSignup('homeowner')}
              className="w-full group relative flex items-center gap-6 p-8 bg-white border-2 border-slate-200 rounded-3xl text-left transition-all hover:border-[#f9a825] hover:shadow-xl hover:shadow-[#f9a825]/5 hover:-translate-y-1"
            >
              <div className="size-16 bg-[#f9a825]/10 rounded-2xl flex items-center justify-center transition-colors group-hover:bg-[#f9a825]">
                <Home className="size-8 text-[#f9a825] group-hover:text-white transition-colors" />
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-bold text-slate-900 mb-1">I'm a Homeowner</h3>
                <p className="text-slate-500">Post projects and hire trusted contractors</p>
              </div>
              <ArrowRight className="size-6 text-slate-300 group-hover:text-[#f9a825] transition-all group-hover:translate-x-2" />
            </button>
          </div>

          <div className="mt-12 text-center">
            <p className="text-slate-500">
              Already have an account?{' '}
              <button
                onClick={onNavigateToLogin}
                className="font-bold text-[#f9a825] hover:underline"
              >
                Sign in
              </button>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
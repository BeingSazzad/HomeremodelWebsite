import { useState } from 'react';
import { Mail, Lock, ArrowRight, Eye, EyeOff, Home, Building2 } from 'lucide-react';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Label } from '../ui/label';
import { ImageWithFallback } from '../figma/ImageWithFallback';

// SVG assets from Figma
import svgPaths from "../../imports/svg-ii6wrw2fas";

interface LoginProps {
  onLogin: (role: string) => void;
  onNavigateToSignup: () => void;
}

export function Login({ onLogin, onNavigateToSignup }: LoginProps) {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [selectedRole, setSelectedRole] = useState<'contractor' | 'homeowner' | null>(null);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (selectedRole) {
      onLogin(selectedRole);
    }
  };

  return (
    <div className="min-h-screen flex flex-col lg:flex-row bg-white overflow-hidden">
      {/* Left Side - Image Section */}
      <div className="hidden lg:flex lg:w-1/2 relative bg-slate-900 overflow-hidden">
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1758998202918-d921125a700f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBsdXh1cnklMjBob3VzZSUyMHJlbm92YXRpb24lMjBleHRlcmlvciUyMGludGVyaW9yfGVufDF8fHx8MTc3MTQ2NTUyOXww&ixlib=rb-4.1.0&q=80&w=1080"
          alt="Luxury Home Renovation"
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
              Your Dream Home<br />
              <span className="text-[#f9a825]">Starts Here</span>
            </h1>
            <p className="text-xl text-slate-200 leading-relaxed font-light">
              Connect with trusted contractors or find your next project. Building better homes, together.
            </p>
          </div>

          <div className="w-1/2 h-px bg-white/20" />
        </div>
      </div>

      {/* Right Side - Form Section (Figma Design) */}
      <div className="flex-1 flex items-center justify-center p-8 bg-slate-50/50">
        <div className="w-full max-w-md bg-white p-10 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-slate-100 animate-in fade-in slide-in-from-bottom-4 duration-700">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-slate-900 mb-2">Welcome Back</h2>
            <p className="text-slate-500">Choose your account type to continue</p>
          </div>

          <form onSubmit={handleLogin} className="space-y-6">
            {/* Role Selection - Demo */}
            <div className="space-y-3">
              <Label className="text-slate-700 font-medium">Sign in as</Label>
              <div className="grid grid-cols-2 gap-3">
                <button
                  type="button"
                  onClick={() => setSelectedRole('contractor')}
                  className={`flex flex-col items-center gap-3 p-4 rounded-xl border-2 transition-all ${
                    selectedRole === 'contractor'
                      ? 'border-[#f9a825] bg-[#f9a825]/5 shadow-md'
                      : 'border-slate-200 hover:border-slate-300 bg-white'
                  }`}
                >
                  <div className={`size-12 rounded-xl flex items-center justify-center transition-colors ${
                    selectedRole === 'contractor' ? 'bg-[#f9a825]' : 'bg-slate-100'
                  }`}>
                    <Building2 className={`size-6 ${selectedRole === 'contractor' ? 'text-white' : 'text-slate-600'}`} />
                  </div>
                  <span className={`font-semibold text-sm ${selectedRole === 'contractor' ? 'text-[#f9a825]' : 'text-slate-700'}`}>
                    Contractor
                  </span>
                </button>
                
                <button
                  type="button"
                  onClick={() => setSelectedRole('homeowner')}
                  className={`flex flex-col items-center gap-3 p-4 rounded-xl border-2 transition-all ${
                    selectedRole === 'homeowner'
                      ? 'border-[#f9a825] bg-[#f9a825]/5 shadow-md'
                      : 'border-slate-200 hover:border-slate-300 bg-white'
                  }`}
                >
                  <div className={`size-12 rounded-xl flex items-center justify-center transition-colors ${
                    selectedRole === 'homeowner' ? 'bg-[#f9a825]' : 'bg-slate-100'
                  }`}>
                    <Home className={`size-6 ${selectedRole === 'homeowner' ? 'text-white' : 'text-slate-600'}`} />
                  </div>
                  <span className={`font-semibold text-sm ${selectedRole === 'homeowner' ? 'text-[#f9a825]' : 'text-slate-700'}`}>
                    Homeowner
                  </span>
                </button>
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="email" className="text-slate-700 font-medium">Email</Label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-400" />
                <Input
                  id="email"
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="pl-10 h-12 bg-slate-50 border-slate-200 focus:bg-white focus:ring-[#f9a825] transition-all rounded-xl"
                  required
                />
              </div>
            </div>

            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <Label htmlFor="password" className="text-slate-700 font-medium">Password</Label>
              </div>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-400" />
                <Input
                  id="password"
                  type={showPassword ? 'text' : 'password'}
                  placeholder="Enter your password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="pl-10 pr-10 h-12 bg-slate-50 border-slate-200 focus:bg-white focus:ring-[#f9a825] transition-all rounded-xl"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 transition-colors"
                >
                  {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                </button>
              </div>
            </div>

            <Button
              type="submit"
              disabled={!selectedRole}
              className="w-full h-12 bg-[#f9a825] hover:bg-[#e69b20] text-white font-bold text-lg rounded-xl shadow-lg shadow-[#f9a825]/20 transition-all hover:scale-[1.01] active:scale-[0.99] disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
            >
              Login
            </Button>
          </form>

          <div className="relative my-8">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-slate-200" />
            </div>
            <div className="relative flex justify-center text-xs uppercase">
              <span className="bg-white px-4 text-slate-400 tracking-widest font-semibold">Or</span>
            </div>
          </div>

          <Button
            type="button"
            variant="outline"
            className="w-full h-12 border-slate-200 hover:bg-slate-50 hover:border-slate-300 rounded-xl flex items-center justify-center gap-3 transition-all"
          >
            <svg className="h-5 w-5" viewBox="0 0 24 24">
              <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
              <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
              <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" />
              <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
            </svg>
            <span className="text-slate-600 font-medium">Continue with Google</span>
          </Button>

          <div className="mt-10 text-center">
            <p className="text-slate-600">
              New here?{' '}
              <button
                onClick={onNavigateToSignup}
                className="font-bold text-[#f9a825] hover:underline transition-all"
              >
                Create your account
              </button>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
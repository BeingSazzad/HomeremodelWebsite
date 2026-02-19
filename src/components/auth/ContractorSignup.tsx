import React, { useState } from 'react';
import { useForm, Controller } from 'react-hook-form@7.55.0';
import { 
  ArrowRight, 
  ArrowLeft,
  Check, 
  MapPin, 
  Building2, 
  Hammer, 
  FileText, 
  User, 
  Mail, 
  Lock, 
  Phone,
  Calendar,
  Shield,
  Upload,
  ChevronRight,
  Briefcase
} from 'lucide-react';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Label } from '../ui/label';
import { Textarea } from '../ui/textarea';
import { Separator } from '../ui/separator';
import { Badge } from '../ui/badge';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../ui/select';
import { Checkbox } from '../ui/checkbox';

interface SignupProps {
  onComplete: () => void;
  onLogin: () => void;
}

export function ContractorSignup({ onComplete, onLogin }: SignupProps) {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState<any>({});

  const nextStep = (data: any) => {
    setFormData({ ...formData, ...data });
    setStep(step + 1);
  };

  const prevStep = () => {
    setStep(step - 1);
  };

  const submitFinal = (data: any) => {
    const finalData = { ...formData, ...data };
    console.log('Contractor Signup Data:', finalData);
    // Here you would typically call your API to register the user
    onComplete();
  };

  return (
    <div className="min-h-screen bg-white flex flex-col lg:flex-row overflow-hidden">
      {/* Left Panel - Branding & Testimonial (Consistent with Figma) */}
      <div className="hidden lg:flex lg:w-1/2 bg-slate-900 text-white flex-col justify-between p-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=1600&h=1600&fit=crop&q=80')] bg-cover bg-center opacity-30" />
        
        {/* Overlay Content */}
        <div className="relative z-10 flex flex-col h-full justify-between">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="size-10 bg-[#f9a825] rounded-lg flex items-center justify-center p-2 shadow-lg shadow-[#f9a825]/20">
              <svg className="w-full h-full" viewBox="0 0 24 24" fill="none">
                <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <span className="text-white text-2xl font-bold tracking-tight">HOMZZ</span>
          </div>
          
          <div className="max-w-xl">
            <h1 className="text-5xl font-bold font-['Poppins'] mb-8 leading-tight">
              Scale Your Business<br />
              <span className="text-[#f9a825]">With Premium Leads</span>
            </h1>
            
            <div className="space-y-8">
              <div className="flex items-center gap-5 group">
                <div className="size-14 bg-[#f9a825]/20 rounded-2xl flex items-center justify-center border border-[#f9a825]/30 transition-all group-hover:bg-[#f9a825]">
                  <Briefcase className="text-[#f9a825] size-7 group-hover:text-white transition-colors" />
                </div>
                <div>
                  <h3 className="font-bold text-white text-lg">Consistent Work</h3>
                  <p className="text-slate-400">Get matched with high-value projects in your area</p>
                </div>
              </div>
              <div className="flex items-center gap-5 group">
                <div className="size-14 bg-[#f9a825]/20 rounded-2xl flex items-center justify-center border border-[#f9a825]/30 transition-all group-hover:bg-[#f9a825]">
                  <Shield className="text-[#f9a825] size-7 group-hover:text-white transition-colors" />
                </div>
                <div>
                  <h3 className="font-bold text-white text-lg">Verified Projects</h3>
                  <p className="text-slate-400">Every project is vetted for quality and budget</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-slate-800/40 backdrop-blur-md p-8 rounded-3xl border border-white/10 shadow-2xl">
            <div className="flex gap-1.5 mb-4">
              {[1, 2, 3, 4, 5].map((i) => (
                <div key={i} className="text-[#f9a825] drop-shadow-sm">★</div>
              ))}
            </div>
            <p className="text-slate-200 italic mb-6 text-lg leading-relaxed">
              "Since joining Homzz, my renovation business has doubled. The quality of leads is far superior to other platforms."
            </p>
            <div className="flex items-center gap-4">
              <img 
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&q=80" 
                alt="Contractor" 
                className="size-12 rounded-2xl object-cover border-2 border-[#f9a825] shadow-lg shadow-[#f9a825]/20"
              />
              <div>
                <p className="font-bold text-white">Michael Rodriguez</p>
                <p className="text-sm text-slate-400">Elite Renovations Co.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Right Panel - Form (Multi-step) */}
      <div className="w-full lg:w-1/2 flex flex-col bg-slate-50/50 overflow-y-auto">
        <div className="max-w-lg mx-auto w-full p-8 lg:p-16 flex-grow flex flex-col justify-center">
          {/* Back Button */}
          <button
            onClick={onLogin}
            className="flex items-center gap-2 text-slate-500 hover:text-slate-900 mb-10 transition-colors group"
          >
            <ArrowLeft className="size-5 group-hover:-translate-x-1 transition-transform" />
            <span className="font-medium">Back to login</span>
          </button>

          {/* Progress Steps */}
          <div className="mb-12">
            <div className="flex items-center justify-between mb-3 px-1">
              <span className={`text-[10px] font-bold uppercase tracking-[0.2em] ${step >= 1 ? 'text-[#f9a825]' : 'text-slate-400'}`}>01. Account</span>
              <span className={`text-[10px] font-bold uppercase tracking-[0.2em] ${step >= 2 ? 'text-[#f9a825]' : 'text-slate-400'}`}>02. Business</span>
              <span className={`text-[10px] font-bold uppercase tracking-[0.2em] ${step >= 3 ? 'text-[#f9a825]' : 'text-slate-400'}`}>03. Profile</span>
            </div>
            <div className="h-1.5 bg-slate-200 rounded-full overflow-hidden flex">
              <div className={`h-full bg-[#f9a825] transition-all duration-700 ease-in-out ${
                step === 1 ? 'w-1/3' : step === 2 ? 'w-2/3' : 'w-full'
              } shadow-[0_0_10px_rgba(249,168,37,0.4)]`} />
            </div>
          </div>

          <div className="mb-10">
            <h2 className="text-4xl font-bold text-slate-900 mb-3 tracking-tight">
              {step === 1 && "Create your account"}
              {step === 2 && "Business details"}
              {step === 3 && "Complete your profile"}
            </h2>
            <p className="text-slate-500 text-lg">
              {step === 1 && "Get started with your professional account"}
              {step === 2 && "Tell us about your business and expertise"}
              {step === 3 && "Showcase your skills to attract homeowners"}
            </p>
          </div>

          <div className="animate-in fade-in slide-in-from-right-4 duration-500">
            {step === 1 && <StepOne onNext={nextStep} onLogin={onLogin} />}
            {step === 2 && <StepTwo onNext={nextStep} onBack={prevStep} />}
            {step === 3 && <StepThree onSubmit={submitFinal} onBack={prevStep} />}
          </div>
        </div>
        
        <div className="pb-8 text-center text-xs text-slate-400 font-medium">
          &copy; 2025 Homzz Inc. • Trusted Partner Network
        </div>
      </div>
    </div>
  );
}

function StepOne({ onNext, onLogin }: { onNext: (data: any) => void, onLogin: () => void }) {
  const { register, handleSubmit, formState: { errors } } = useForm({
    defaultValues: {
      fullName: '',
      email: '',
      password: '',
      phone: ''
    }
  });

  return (
    <form onSubmit={handleSubmit(onNext)} className="space-y-4">
      <div className="grid grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="firstName">First Name</Label>
          <div className="relative">
            <User className="absolute left-3 top-1/2 -translate-y-1/2 size-4 text-slate-400" />
            <Input 
              id="firstName" 
              placeholder="John" 
              className="pl-10" 
              {...register('firstName', { required: true })} 
            />
          </div>
        </div>
        <div className="space-y-2">
          <Label htmlFor="lastName">Last Name</Label>
          <Input 
            id="lastName" 
            placeholder="Doe" 
            {...register('lastName', { required: true })} 
          />
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="email">Email Address</Label>
        <div className="relative">
          <Mail className="absolute left-3 top-1/2 -translate-y-1/2 size-4 text-slate-400" />
          <Input 
            id="email" 
            type="email" 
            placeholder="john@example.com" 
            className="pl-10" 
            {...register('email', { required: true })} 
          />
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="phone">Mobile Number</Label>
        <div className="relative">
          <Phone className="absolute left-3 top-1/2 -translate-y-1/2 size-4 text-slate-400" />
          <Input 
            id="phone" 
            type="tel" 
            placeholder="(555) 123-4567" 
            className="pl-10" 
            {...register('phone', { required: true })} 
          />
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="password">Password</Label>
        <div className="relative">
          <Lock className="absolute left-3 top-1/2 -translate-y-1/2 size-4 text-slate-400" />
          <Input 
            id="password" 
            type="password" 
            placeholder="Create a strong password" 
            className="pl-10" 
            {...register('password', { required: true, minLength: 8 })} 
          />
        </div>
        <p className="text-xs text-slate-500">Must be at least 8 characters</p>
      </div>

      <div className="flex items-start gap-2 pt-2">
        <Checkbox id="terms" required />
        <label htmlFor="terms" className="text-sm text-slate-600 leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
          I agree to the <a href="#" className="text-[#f9a825] hover:underline">Terms of Service</a> and <a href="#" className="text-[#f9a825] hover:underline">Privacy Policy</a>
        </label>
      </div>

      <Button type="submit" className="w-full bg-[#f9a825] hover:bg-[#e69b20] text-white h-12 text-base mt-4">
        Create Account <ArrowRight className="ml-2 size-4" />
      </Button>

      <div className="text-center mt-6">
        <p className="text-sm text-slate-600">
          Already have an account?{' '}
          <button type="button" onClick={onLogin} className="text-[#f9a825] font-semibold hover:underline">
            Log in
          </button>
        </p>
      </div>
    </form>
  );
}

function StepTwo({ onNext, onBack }: { onNext: (data: any) => void, onBack: () => void }) {
  const { register, handleSubmit } = useForm({
    defaultValues: {
      businessName: '',
      licenseNumber: '',
      yearsInBusiness: '',
      address: '',
      city: '',
      zip: ''
    }
  });

  return (
    <form onSubmit={handleSubmit(onNext)} className="space-y-4">
      <div className="space-y-2">
        <Label htmlFor="businessName">Business Name</Label>
        <div className="relative">
          <Building2 className="absolute left-3 top-1/2 -translate-y-1/2 size-4 text-slate-400" />
          <Input 
            id="businessName" 
            placeholder="e.g. Elite Renovations Co." 
            className="pl-10" 
            {...register('businessName', { required: true })} 
          />
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="licenseNumber">License Number</Label>
          <div className="relative">
            <FileText className="absolute left-3 top-1/2 -translate-y-1/2 size-4 text-slate-400" />
            <Input 
              id="licenseNumber" 
              placeholder="CA-987654321" 
              className="pl-10" 
              {...register('licenseNumber', { required: true })} 
            />
          </div>
        </div>
        <div className="space-y-2">
          <Label htmlFor="yearsInBusiness">Years in Business</Label>
          <div className="relative">
            <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 size-4 text-slate-400" />
            <Input 
              id="yearsInBusiness" 
              placeholder="e.g. 5" 
              type="number"
              className="pl-10" 
              {...register('yearsInBusiness', { required: true })} 
            />
          </div>
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="address">Business Address</Label>
        <div className="relative">
          <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 size-4 text-slate-400" />
          <Input 
            id="address" 
            placeholder="123 Main St" 
            className="pl-10" 
            {...register('address', { required: true })} 
          />
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="city">City</Label>
          <Input 
            id="city" 
            placeholder="San Francisco" 
            {...register('city', { required: true })} 
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="zip">Zip Code</Label>
          <Input 
            id="zip" 
            placeholder="94105" 
            {...register('zip', { required: true })} 
          />
        </div>
      </div>

      <div className="bg-blue-50 p-4 rounded-lg flex gap-3 border border-blue-100 mt-4">
        <Shield className="text-blue-600 size-5 flex-shrink-0 mt-0.5" />
        <div className="text-sm text-blue-800">
          <p className="font-semibold mb-1">License Verification</p>
          <p>We'll verify your contractor license within 24 hours. You can still set up your profile while we check.</p>
        </div>
      </div>

      <div className="flex gap-3 pt-4">
        <Button type="button" variant="outline" onClick={onBack} className="w-1/3 h-12">
          Back
        </Button>
        <Button type="submit" className="w-2/3 bg-[#f9a825] hover:bg-[#e69b20] text-white h-12">
          Continue <ChevronRight className="ml-2 size-4" />
        </Button>
      </div>
    </form>
  );
}

function StepThree({ onSubmit, onBack }: { onSubmit: (data: any) => void, onBack: () => void }) {
  const { register, handleSubmit, setValue, watch } = useForm({
    defaultValues: {
      bio: '',
      specialties: [] as string[]
    }
  });

  const selectedSpecialties = watch('specialties');

  const specialtiesList = [
    "Kitchen Remodeling", "Bathroom Renovation", "Home Additions", 
    "Basement Finishing", "Roofing", "Flooring", "HVAC", 
    "Electrical", "Plumbing", "Landscaping", "Painting", "Carpentry"
  ];

  const toggleSpecialty = (specialty: string) => {
    const current = selectedSpecialties || [];
    if (current.includes(specialty)) {
      setValue('specialties', current.filter(s => s !== specialty));
    } else {
      setValue('specialties', [...current, specialty]);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      <div className="space-y-3">
        <Label>Service Specialties <span className="text-red-500">*</span></Label>
        <p className="text-sm text-slate-500 mb-2">Select the primary services you offer (max 5)</p>
        <div className="flex flex-wrap gap-2">
          {specialtiesList.map((specialty) => (
            <button
              key={specialty}
              type="button"
              onClick={() => toggleSpecialty(specialty)}
              className={`px-3 py-1.5 rounded-full text-sm font-medium transition-colors border ${
                selectedSpecialties?.includes(specialty)
                  ? 'bg-[#f9a825]/10 border-[#f9a825] text-[#f9a825]'
                  : 'bg-slate-50 border-slate-200 text-slate-600 hover:border-slate-300'
              }`}
            >
              {specialty}
              {selectedSpecialties?.includes(specialty) && <Check className="inline-block ml-1.5 size-3" />}
            </button>
          ))}
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="bio">Introduction / Bio</Label>
        <Textarea 
          id="bio" 
          placeholder="Tell homeowners about your experience, values, and what makes your business unique..." 
          className="min-h-[150px] resize-none"
          {...register('bio', { required: true })}
        />
        <p className="text-xs text-slate-500 text-right">0/500 characters</p>
      </div>

      <div className="space-y-2">
        <Label>Profile Photo</Label>
        <div className="border-2 border-dashed border-slate-200 rounded-lg p-6 flex flex-col items-center justify-center bg-slate-50 hover:bg-slate-100 transition-colors cursor-pointer">
          <div className="size-12 bg-white rounded-full flex items-center justify-center shadow-sm mb-2">
            <Upload className="size-6 text-slate-400" />
          </div>
          <p className="text-sm font-medium text-slate-700">Upload a professional photo</p>
          <p className="text-xs text-slate-400 mt-1">JPG, PNG up to 5MB</p>
        </div>
      </div>

      <div className="flex gap-3 pt-4">
        <Button type="button" variant="outline" onClick={onBack} className="w-1/3 h-12">
          Back
        </Button>
        <Button type="submit" className="w-2/3 bg-[#f9a825] hover:bg-[#e69b20] text-white h-12 font-semibold">
          Complete Registration
        </Button>
      </div>
    </form>
  );
}
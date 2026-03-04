import { useState } from 'react';
import { ArrowLeft, ArrowRight, Check, Building2, User, Mail, Lock, Phone, Shield, Briefcase } from 'lucide-react';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Label } from '../ui/label';
import { Checkbox } from '../ui/checkbox';
import { PhoneVerification } from './PhoneVerification';

interface ContractorSignupFixedProps {
  onComplete: () => void;
  onLogin: () => void;
}

export function ContractorSignupFixed({ onComplete, onLogin }: ContractorSignupFixedProps) {
  const [step, setStep] = useState<'account' | 'phone-verify' | 'compliance'>('account');
  const [accountData, setAccountData] = useState({
    companyName: '',
    ownerName: '',
    email: '',
    password: '',
    phone: ''
  });
  const [isPhoneVerified, setIsPhoneVerified] = useState(false);

  const handleAccountSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Move to phone verification
    setStep('phone-verify');
  };

  const handlePhoneVerified = () => {
    setIsPhoneVerified(true);
    setStep('compliance');
  };

  const handleComplianceComplete = () => {
    console.log('Contractor registered:', accountData);
    onComplete();
  };

  return (
    <div className="min-h-screen bg-white flex flex-col lg:flex-row overflow-hidden">
      {/* Left Panel - Branding */}
      <div className="hidden lg:flex lg:w-1/2 bg-slate-900 text-white flex-col justify-between p-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=1600&h=1600&fit=crop&q=80')] bg-cover bg-center opacity-30" />
        
        <div className="relative z-10 flex flex-col h-full justify-between">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="size-10 bg-[#f9a825] rounded-lg flex items-center justify-center p-2 shadow-lg">
              <svg className="w-full h-full" viewBox="0 0 24 24" fill="none">
                <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <span className="text-white text-2xl font-bold tracking-tight">HOMZZ</span>
          </div>
          
          <div className="max-w-xl">
            <h1 className="text-5xl font-bold mb-8 leading-tight">
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
                <div key={i} className="text-[#f9a825]">★</div>
              ))}
            </div>
            <p className="text-slate-200 italic mb-6 text-lg leading-relaxed">
              "Since joining Homzz, my renovation business has doubled. The quality of leads is far superior to other platforms."
            </p>
            <div className="flex items-center gap-4">
              <img 
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&q=80" 
                alt="Contractor" 
                className="size-12 rounded-2xl object-cover border-2 border-[#f9a825]"
              />
              <div>
                <p className="font-bold text-white">Michael Rodriguez</p>
                <p className="text-sm text-slate-400">Elite Renovations Co.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Right Panel - Form */}
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
              <span className={`text-[10px] font-bold uppercase tracking-[0.2em] ${step === 'account' ? 'text-[#f9a825]' : isPhoneVerified ? 'text-green-600' : 'text-slate-400'}`}>
                01. Account
              </span>
              <span className={`text-[10px] font-bold uppercase tracking-[0.2em] ${step === 'phone-verify' ? 'text-[#f9a825]' : isPhoneVerified ? 'text-green-600' : 'text-slate-400'}`}>
                02. Verify
              </span>
              <span className={`text-[10px] font-bold uppercase tracking-[0.2em] ${step === 'compliance' ? 'text-[#f9a825]' : 'text-slate-400'}`}>
                03. Compliance
              </span>
            </div>
            <div className="h-1.5 bg-slate-200 rounded-full overflow-hidden flex">
              <div className={`h-full bg-[#f9a825] transition-all duration-700 ease-in-out ${
                step === 'account' ? 'w-1/3' : step === 'phone-verify' ? 'w-2/3' : 'w-full'
              }`} />
            </div>
          </div>

          <div className="mb-10">
            <h2 className="text-4xl font-bold text-slate-900 mb-3">
              {step === 'account' && "Create your account"}
              {step === 'phone-verify' && "Verify your phone"}
              {step === 'compliance' && "Upload compliance documents"}
            </h2>
            <p className="text-slate-500 text-lg">
              {step === 'account' && "Start your professional journey with Homzz"}
              {step === 'phone-verify' && "We'll send you a 6-digit verification code"}
              {step === 'compliance' && "Required before your profile can be activated"}
            </p>
          </div>

          {/* Step 1: Account Creation */}
          {step === 'account' && (
            <form onSubmit={handleAccountSubmit} className="space-y-4 animate-in fade-in slide-in-from-right-4 duration-500">
              <div className="space-y-2">
                <Label htmlFor="companyName">Company Name *</Label>
                <div className="relative">
                  <Building2 className="absolute left-3 top-1/2 -translate-y-1/2 size-4 text-slate-400" />
                  <Input
                    id="companyName"
                    placeholder="Elite Renovations Co."
                    className="pl-10"
                    value={accountData.companyName}
                    onChange={(e) => setAccountData({...accountData, companyName: e.target.value})}
                    required
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="ownerName">Owner Name *</Label>
                <div className="relative">
                  <User className="absolute left-3 top-1/2 -translate-y-1/2 size-4 text-slate-400" />
                  <Input
                    id="ownerName"
                    placeholder="John Smith"
                    className="pl-10"
                    value={accountData.ownerName}
                    onChange={(e) => setAccountData({...accountData, ownerName: e.target.value})}
                    required
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="email">Email Address *</Label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 -translate-y-1/2 size-4 text-slate-400" />
                  <Input
                    id="email"
                    type="email"
                    placeholder="john@example.com"
                    className="pl-10"
                    value={accountData.email}
                    onChange={(e) => setAccountData({...accountData, email: e.target.value})}
                    required
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="password">Password *</Label>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 -translate-y-1/2 size-4 text-slate-400" />
                  <Input
                    id="password"
                    type="password"
                    placeholder="Create a strong password"
                    className="pl-10"
                    value={accountData.password}
                    onChange={(e) => setAccountData({...accountData, password: e.target.value})}
                    required
                    minLength={8}
                  />
                </div>
                <p className="text-xs text-slate-500">Must be at least 8 characters</p>
              </div>

              <div className="space-y-2">
                <Label htmlFor="phone">Phone Number *</Label>
                <div className="relative">
                  <Phone className="absolute left-3 top-1/2 -translate-y-1/2 size-4 text-slate-400" />
                  <Input
                    id="phone"
                    type="tel"
                    placeholder="(555) 123-4567"
                    className="pl-10"
                    value={accountData.phone}
                    onChange={(e) => setAccountData({...accountData, phone: e.target.value})}
                    required
                  />
                </div>
                <p className="text-xs text-slate-500">SMS verification will be required</p>
              </div>

              <div className="flex items-start gap-2 pt-2">
                <Checkbox id="terms" required />
                <label htmlFor="terms" className="text-sm text-slate-600 leading-none">
                  I agree to the <a href="#" className="text-[#f9a825] hover:underline">Terms of Service</a> and <a href="#" className="text-[#f9a825] hover:underline">Privacy Policy</a>
                </label>
              </div>

              <Button type="submit" className="w-full bg-[#f9a825] hover:bg-[#e69b20] text-white h-12 text-base mt-4">
                Continue to Phone Verification <ArrowRight className="ml-2 size-4" />
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
          )}

          {/* Step 2: Phone Verification */}
          {step === 'phone-verify' && (
            <div className="animate-in fade-in slide-in-from-right-4 duration-500">
              <PhoneVerification
                userType="contractor"
                isRequired={true}
                phoneNumber={accountData.phone}
                onVerified={handlePhoneVerified}
                onBack={() => setStep('account')}
              />
            </div>
          )}

          {/* Step 3: Compliance Upload */}
          {step === 'compliance' && (
            <div className="animate-in fade-in slide-in-from-right-4 duration-500">
              <ComplianceUploadForm onComplete={handleComplianceComplete} onBack={() => setStep('phone-verify')} />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

// Compliance Upload Component
function ComplianceUploadForm({ onComplete, onBack }: { onComplete: () => void, onBack: () => void }) {
  const [formData, setFormData] = useState({
    licenseNumber: '',
    licenseExpiration: '',
    licenseFile: null as File | null,
    insuranceExpiration: '',
    insuranceFile: null as File | null,
    bondExpiration: '',
    bondFile: null as File | null,
    workersComp: '' as 'active' | 'exempt' | 'not_applicable' | ''
  });

  const handleFileChange = (field: 'licenseFile' | 'insuranceFile' | 'bondFile', file: File) => {
    setFormData({ ...formData, [field]: file });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Compliance data:', formData);
    alert('Documents uploaded successfully! Your account is pending admin approval.');
    onComplete();
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* Contractor License */}
      <div className="p-6 border-2 border-slate-200 rounded-xl bg-white">
        <h3 className="font-bold text-slate-900 mb-4 flex items-center gap-2">
          <Shield className="size-5 text-[#f9a825]" />
          Contractor License *
        </h3>
        <div className="grid gap-4">
          <div>
            <Label>License Number *</Label>
            <Input
              placeholder="e.g., CA-123456"
              value={formData.licenseNumber}
              onChange={(e) => setFormData({...formData, licenseNumber: e.target.value})}
              required
            />
          </div>
          <div>
            <Label>Expiration Date *</Label>
            <Input
              type="date"
              value={formData.licenseExpiration}
              onChange={(e) => setFormData({...formData, licenseExpiration: e.target.value})}
              required
            />
          </div>
          <div>
            <Label>Upload License PDF *</Label>
            <Input
              type="file"
              accept=".pdf,.jpg,.jpeg,.png"
              onChange={(e) => e.target.files && handleFileChange('licenseFile', e.target.files[0])}
              required
            />
            {formData.licenseFile && (
              <p className="text-xs text-green-600 mt-1">✓ {formData.licenseFile.name}</p>
            )}
          </div>
        </div>
      </div>

      {/* Insurance */}
      <div className="p-6 border-2 border-slate-200 rounded-xl bg-white">
        <h3 className="font-bold text-slate-900 mb-4">Insurance Certificate *</h3>
        <div className="grid gap-4">
          <div>
            <Label>Expiration Date *</Label>
            <Input
              type="date"
              value={formData.insuranceExpiration}
              onChange={(e) => setFormData({...formData, insuranceExpiration: e.target.value})}
              required
            />
          </div>
          <div>
            <Label>Upload Insurance PDF *</Label>
            <Input
              type="file"
              accept=".pdf,.jpg,.jpeg,.png"
              onChange={(e) => e.target.files && handleFileChange('insuranceFile', e.target.files[0])}
              required
            />
            {formData.insuranceFile && (
              <p className="text-xs text-green-600 mt-1">✓ {formData.insuranceFile.name}</p>
            )}
          </div>
        </div>
      </div>

      {/* Bond */}
      <div className="p-6 border-2 border-slate-200 rounded-xl bg-white">
        <h3 className="font-bold text-slate-900 mb-4">Bond Certificate *</h3>
        <div className="grid gap-4">
          <div>
            <Label>Expiration Date *</Label>
            <Input
              type="date"
              value={formData.bondExpiration}
              onChange={(e) => setFormData({...formData, bondExpiration: e.target.value})}
              required
            />
          </div>
          <div>
            <Label>Upload Bond PDF *</Label>
            <Input
              type="file"
              accept=".pdf,.jpg,.jpeg,.png"
              onChange={(e) => e.target.files && handleFileChange('bondFile', e.target.files[0])}
              required
            />
            {formData.bondFile && (
              <p className="text-xs text-green-600 mt-1">✓ {formData.bondFile.name}</p>
            )}
          </div>
        </div>
      </div>

      {/* Workers Comp */}
      <div className="p-6 border-2 border-slate-200 rounded-xl bg-white">
        <h3 className="font-bold text-slate-900 mb-4">Workers Compensation Status *</h3>
        <div className="space-y-3">
          <label className="flex items-center gap-3 cursor-pointer">
            <input
              type="radio"
              name="workersComp"
              value="active"
              checked={formData.workersComp === 'active'}
              onChange={(e) => setFormData({...formData, workersComp: 'active'})}
              className="size-4 text-[#f9a825]"
              required
            />
            <span className="text-slate-700 font-medium">Active</span>
          </label>
          <label className="flex items-center gap-3 cursor-pointer">
            <input
              type="radio"
              name="workersComp"
              value="exempt"
              checked={formData.workersComp === 'exempt'}
              onChange={(e) => setFormData({...formData, workersComp: 'exempt'})}
              className="size-4 text-[#f9a825]"
            />
            <span className="text-slate-700 font-medium">Exempt</span>
          </label>
          <label className="flex items-center gap-3 cursor-pointer">
            <input
              type="radio"
              name="workersComp"
              value="not_applicable"
              checked={formData.workersComp === 'not_applicable'}
              onChange={(e) => setFormData({...formData, workersComp: 'not_applicable'})}
              className="size-4 text-[#f9a825]"
            />
            <span className="text-slate-700 font-medium">Not Applicable</span>
          </label>
        </div>
      </div>

      {/* Info Box */}
      <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
        <p className="text-sm text-blue-800">
          <strong>Status:</strong> After submission, your account will be in "Pending" status. 
          Admin will review within 24-48 hours and change status to "Approved" or "Rejected".
        </p>
      </div>

      <div className="flex gap-3 pt-4">
        <Button type="button" variant="outline" onClick={onBack} className="w-1/3 h-12">
          Back
        </Button>
        <Button type="submit" className="w-2/3 bg-[#f9a825] hover:bg-[#e69b20] text-white h-12 font-semibold">
          <Check className="mr-2 size-4" />
          Submit Documents
        </Button>
      </div>
    </form>
  );
}

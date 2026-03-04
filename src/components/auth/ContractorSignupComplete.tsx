import { useState } from 'react';
import { ArrowLeft, ArrowRight, Check, Building2, User, Mail, Lock, Phone, Shield, Briefcase, Wrench, DollarSign } from 'lucide-react';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Label } from '../ui/label';
import { Checkbox } from '../ui/checkbox';
import { PhoneVerification } from './PhoneVerification';

interface ContractorSignupCompleteProps {
  onComplete: () => void;
  onLogin: () => void;
}

type Trade = 'bathroom' | 'kitchen' | 'flooring' | 'painting_interior' | 'painting_exterior' | 'tile' | 'plumbing' | 'electrical' | 'multi_trade';

interface PricingData {
  minimumJobFee: string;
  laborRateType: 'flat' | 'per_sqft' | 'per_linear_ft' | 'per_fixture' | 'per_hour' | '';
  
  // For remodel trades (bathroom, kitchen, multi-trade)
  laborLow: string;
  laborHigh: string;
  roughMaterialsLow: string;
  roughMaterialsHigh: string;
  finishMaterials: 'included' | 'owner_supplied' | '';
  finishMaterialsLow: string;
  finishMaterialsHigh: string;
  
  // For painting
  laborPerSqft: string;
  
  // For all
  permitRequired: 'yes' | 'no' | '';
  permitLow: string;
  permitHigh: string;
}

export function ContractorSignupComplete({ onComplete, onLogin }: ContractorSignupCompleteProps) {
  const [step, setStep] = useState<'account' | 'phone-verify' | 'compliance' | 'trades' | 'pricing'>('account');
  const [accountData, setAccountData] = useState({
    companyName: '',
    ownerName: '',
    email: '',
    password: '',
    phone: ''
  });
  const [isPhoneVerified, setIsPhoneVerified] = useState(false);
  const [complianceData, setComplianceData] = useState({
    licenseNumber: '',
    licenseExpiration: '',
    licenseFile: null as File | null,
    insuranceExpiration: '',
    insuranceFile: null as File | null,
    bondExpiration: '',
    bondFile: null as File | null,
    workersComp: '' as 'active' | 'exempt' | 'not_applicable' | ''
  });
  
  const [selectedTrades, setSelectedTrades] = useState<Trade[]>([]);
  const [pricing, setPricing] = useState<Record<Trade, PricingData>>({} as any);

  const trades = [
    { id: 'bathroom' as Trade, name: 'Bathroom Remodel', type: 'remodel' },
    { id: 'kitchen' as Trade, name: 'Kitchen Remodel', type: 'remodel' },
    { id: 'flooring' as Trade, name: 'Flooring', type: 'remodel' },
    { id: 'painting_interior' as Trade, name: 'Interior Painting', type: 'painting' },
    { id: 'painting_exterior' as Trade, name: 'Exterior Painting', type: 'painting' },
    { id: 'tile' as Trade, name: 'Tile Work', type: 'remodel' },
    { id: 'plumbing' as Trade, name: 'Plumbing Work', type: 'trade' },
    { id: 'electrical' as Trade, name: 'Electrical Work', type: 'trade' },
    { id: 'multi_trade' as Trade, name: 'Multi-Trade Remodel', type: 'remodel' }
  ];

  const handleAccountSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStep('phone-verify');
  };

  const handlePhoneVerified = () => {
    setIsPhoneVerified(true);
    setStep('compliance');
  };

  const handleComplianceSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStep('trades');
  };

  const handleTradeToggle = (tradeId: Trade) => {
    if (selectedTrades.includes(tradeId)) {
      setSelectedTrades(selectedTrades.filter(t => t !== tradeId));
      const newPricing = { ...pricing };
      delete newPricing[tradeId];
      setPricing(newPricing);
    } else {
      setSelectedTrades([...selectedTrades, tradeId]);
      setPricing({
        ...pricing,
        [tradeId]: {
          minimumJobFee: '',
          laborRateType: '',
          laborLow: '',
          laborHigh: '',
          roughMaterialsLow: '',
          roughMaterialsHigh: '',
          finishMaterials: '',
          finishMaterialsLow: '',
          finishMaterialsHigh: '',
          laborPerSqft: '',
          permitRequired: '',
          permitLow: '',
          permitHigh: ''
        }
      });
    }
  };

  const handleTradesSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (selectedTrades.length === 0) {
      alert('Please select at least one trade');
      return;
    }
    setStep('pricing');
  };

  const updatePricing = (tradeId: Trade, field: keyof PricingData, value: string) => {
    setPricing({
      ...pricing,
      [tradeId]: {
        ...pricing[tradeId],
        [field]: value
      }
    });
  };

  const handleFinalSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate pricing for each selected trade
    let errors: string[] = [];
    
    selectedTrades.forEach(tradeId => {
      const trade = trades.find(t => t.id === tradeId);
      const tradePricing = pricing[tradeId];
      
      if (!tradePricing.minimumJobFee) {
        errors.push(`${trade?.name}: Minimum Job Fee required`);
      }
      
      if (!tradePricing.laborRateType) {
        errors.push(`${trade?.name}: Labor Rate Type required`);
      }
    });
    
    if (errors.length > 0) {
      alert('Please complete all required fields:\n' + errors.join('\n'));
      return;
    }
    
    console.log('Complete Signup Data:', {
      account: accountData,
      compliance: complianceData,
      trades: selectedTrades,
      pricing
    });
    
    alert('Registration complete! Your account is pending admin approval.');
    onComplete();
  };

  const getProgressWidth = () => {
    switch (step) {
      case 'account': return 'w-1/5';
      case 'phone-verify': return 'w-2/5';
      case 'compliance': return 'w-3/5';
      case 'trades': return 'w-4/5';
      case 'pricing': return 'w-full';
      default: return 'w-1/5';
    }
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
                  <p className="text-slate-400">Get matched with high-value projects</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-slate-800/40 backdrop-blur-md p-8 rounded-3xl border border-white/10">
            <div className="flex gap-1.5 mb-4">
              {[1, 2, 3, 4, 5].map((i) => (
                <div key={i} className="text-[#f9a825]">★</div>
              ))}
            </div>
            <p className="text-slate-200 italic mb-6 leading-relaxed">
              "Since joining Homzz, my renovation business has doubled."
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
        <div className="max-w-lg mx-auto w-full p-8 lg:p-16 flex-grow">
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
            <div className="flex items-center justify-between mb-3 px-1 text-[9px] font-bold uppercase tracking-wider">
              <span className={step === 'account' ? 'text-[#f9a825]' : 'text-slate-400'}>Account</span>
              <span className={step === 'phone-verify' ? 'text-[#f9a825]' : 'text-slate-400'}>Verify</span>
              <span className={step === 'compliance' ? 'text-[#f9a825]' : 'text-slate-400'}>Docs</span>
              <span className={step === 'trades' ? 'text-[#f9a825]' : 'text-slate-400'}>Trades</span>
              <span className={step === 'pricing' ? 'text-[#f9a825]' : 'text-slate-400'}>Pricing</span>
            </div>
            <div className="h-1.5 bg-slate-200 rounded-full overflow-hidden">
              <div className={`h-full bg-[#f9a825] transition-all duration-700 ${getProgressWidth()}`} />
            </div>
          </div>

          <div className="mb-10">
            <h2 className="text-4xl font-bold text-slate-900 mb-3">
              {step === 'account' && "Create your account"}
              {step === 'phone-verify' && "Verify your phone"}
              {step === 'compliance' && "Upload documents"}
              {step === 'trades' && "Select your trades"}
              {step === 'pricing' && "Set your pricing"}
            </h2>
            <p className="text-slate-500 text-lg">
              {step === 'account' && "Start your professional journey"}
              {step === 'phone-verify' && "We'll send you a 6-digit code"}
              {step === 'compliance' && "Required before activation"}
              {step === 'trades' && "Choose at least one trade"}
              {step === 'pricing' && "Configure pricing for each trade"}
            </p>
          </div>

          {/* Step 1: Account */}
          {step === 'account' && (
            <form onSubmit={handleAccountSubmit} className="space-y-4">
              <div className="space-y-2">
                <Label>Company Name *</Label>
                <Input
                  placeholder="Elite Renovations Co."
                  value={accountData.companyName}
                  onChange={(e) => setAccountData({...accountData, companyName: e.target.value})}
                  required
                />
              </div>
              <div className="space-y-2">
                <Label>Owner Name *</Label>
                <Input
                  placeholder="John Smith"
                  value={accountData.ownerName}
                  onChange={(e) => setAccountData({...accountData, ownerName: e.target.value})}
                  required
                />
              </div>
              <div className="space-y-2">
                <Label>Email *</Label>
                <Input
                  type="email"
                  placeholder="john@example.com"
                  value={accountData.email}
                  onChange={(e) => setAccountData({...accountData, email: e.target.value})}
                  required
                />
              </div>
              <div className="space-y-2">
                <Label>Password *</Label>
                <Input
                  type="password"
                  placeholder="Min 8 characters"
                  value={accountData.password}
                  onChange={(e) => setAccountData({...accountData, password: e.target.value})}
                  required
                  minLength={8}
                />
              </div>
              <div className="space-y-2">
                <Label>Phone *</Label>
                <Input
                  type="tel"
                  placeholder="(555) 123-4567"
                  value={accountData.phone}
                  onChange={(e) => setAccountData({...accountData, phone: e.target.value})}
                  required
                />
              </div>
              <div className="flex items-start gap-2 pt-2">
                <Checkbox id="terms" required />
                <label htmlFor="terms" className="text-sm text-slate-600">
                  I agree to the <a href="#" className="text-[#f9a825]">Terms</a>
                </label>
              </div>
              <Button type="submit" className="w-full bg-[#f9a825] hover:bg-[#e69b20] h-12">
                Continue <ArrowRight className="ml-2 size-4" />
              </Button>
            </form>
          )}

          {/* Step 2: Phone Verification */}
          {step === 'phone-verify' && (
            <PhoneVerification
              userType="contractor"
              isRequired={true}
              phoneNumber={accountData.phone}
              onVerified={handlePhoneVerified}
              onBack={() => setStep('account')}
            />
          )}

          {/* Step 3: Compliance */}
          {step === 'compliance' && (
            <ComplianceForm
              data={complianceData}
              onChange={setComplianceData}
              onSubmit={handleComplianceSubmit}
              onBack={() => setStep('phone-verify')}
            />
          )}

          {/* Step 4: Trade Selection */}
          {step === 'trades' && (
            <form onSubmit={handleTradesSubmit} className="space-y-6">
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-4">
                <p className="text-sm text-blue-800">
                  <strong>Select at least one trade.</strong> You can choose multiple if you offer different services.
                </p>
              </div>

              <div className="grid gap-3">
                {trades.map(trade => (
                  <label
                    key={trade.id}
                    className={`p-4 border-2 rounded-lg cursor-pointer transition-all ${
                      selectedTrades.includes(trade.id)
                        ? 'border-[#f9a825] bg-[#f9a825]/5'
                        : 'border-slate-200 hover:border-slate-300'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <Checkbox
                        checked={selectedTrades.includes(trade.id)}
                        onCheckedChange={() => handleTradeToggle(trade.id)}
                      />
                      <span className="font-semibold text-slate-900">{trade.name}</span>
                    </div>
                  </label>
                ))}
              </div>

              <div className="flex gap-3 pt-4">
                <Button type="button" variant="outline" onClick={() => setStep('compliance')} className="w-1/3">
                  Back
                </Button>
                <Button type="submit" className="w-2/3 bg-[#f9a825] hover:bg-[#e69b20]">
                  Continue to Pricing <ArrowRight className="ml-2 size-4" />
                </Button>
              </div>
            </form>
          )}

          {/* Step 5: Pricing */}
          {step === 'pricing' && (
            <form onSubmit={handleFinalSubmit} className="space-y-6">
              {selectedTrades.map(tradeId => {
                const trade = trades.find(t => t.id === tradeId)!;
                const tradePricing = pricing[tradeId];

                return (
                  <div key={tradeId} className="p-6 border-2 border-[#f9a825] rounded-xl bg-white">
                    <h3 className="font-bold text-slate-900 mb-4 flex items-center gap-2">
                      <Wrench className="size-5 text-[#f9a825]" />
                      {trade.name}
                    </h3>

                    <div className="space-y-4">
                      <div>
                        <Label>Minimum Job Fee ($) *</Label>
                        <Input
                          type="number"
                          placeholder="500"
                          value={tradePricing.minimumJobFee}
                          onChange={(e) => updatePricing(tradeId, 'minimumJobFee', e.target.value)}
                          required
                        />
                      </div>

                      <div>
                        <Label>Labor Rate Type *</Label>
                        <select
                          value={tradePricing.laborRateType}
                          onChange={(e) => updatePricing(tradeId, 'laborRateType', e.target.value)}
                          className="w-full px-4 py-2 border border-slate-300 rounded-lg"
                          required
                        >
                          <option value="">Select type</option>
                          <option value="flat">Flat Project Rate</option>
                          <option value="per_sqft">Per Square Foot</option>
                          <option value="per_linear_ft">Per Linear Foot</option>
                          <option value="per_fixture">Per Fixture</option>
                          <option value="per_hour">Per Hour</option>
                        </select>
                      </div>

                      {trade.type === 'painting' && (
                        <div>
                          <Label>Labor ($/sq ft) *</Label>
                          <Input
                            type="number"
                            step="0.01"
                            placeholder="2.50"
                            value={tradePricing.laborPerSqft}
                            onChange={(e) => updatePricing(tradeId, 'laborPerSqft', e.target.value)}
                            required
                          />
                        </div>
                      )}

                      {(trade.type === 'remodel' || trade.type === 'trade') && (
                        <div className="grid grid-cols-2 gap-3">
                          <div>
                            <Label>Labor Low ($)</Label>
                            <Input
                              type="number"
                              placeholder="5000"
                              value={tradePricing.laborLow}
                              onChange={(e) => updatePricing(tradeId, 'laborLow', e.target.value)}
                            />
                          </div>
                          <div>
                            <Label>Labor High ($)</Label>
                            <Input
                              type="number"
                              placeholder="7000"
                              value={tradePricing.laborHigh}
                              onChange={(e) => updatePricing(tradeId, 'laborHigh', e.target.value)}
                            />
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                );
              })}

              <div className="flex gap-3 pt-4">
                <Button type="button" variant="outline" onClick={() => setStep('trades')} className="w-1/3">
                  Back
                </Button>
                <Button type="submit" className="w-2/3 bg-[#f9a825] hover:bg-[#e69b20]">
                  <Check className="mr-2 size-4" />
                  Complete Registration
                </Button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}

// Compliance Form Component
function ComplianceForm({ data, onChange, onSubmit, onBack }: any) {
  const handleFileChange = (field: string, file: File) => {
    onChange({ ...data, [field]: file });
  };

  return (
    <form onSubmit={onSubmit} className="space-y-6">
      <div className="p-6 border-2 border-slate-200 rounded-xl bg-white space-y-4">
        <h3 className="font-bold text-slate-900">License *</h3>
        <Input
          placeholder="License Number"
          value={data.licenseNumber}
          onChange={(e) => onChange({...data, licenseNumber: e.target.value})}
          required
        />
        <Input
          type="date"
          value={data.licenseExpiration}
          onChange={(e) => onChange({...data, licenseExpiration: e.target.value})}
          required
        />
        <Input
          type="file"
          accept=".pdf"
          onChange={(e) => e.target.files && handleFileChange('licenseFile', e.target.files[0])}
          required
        />
      </div>

      <div className="p-6 border-2 border-slate-200 rounded-xl bg-white space-y-4">
        <h3 className="font-bold text-slate-900">Insurance *</h3>
        <Input
          type="date"
          value={data.insuranceExpiration}
          onChange={(e) => onChange({...data, insuranceExpiration: e.target.value})}
          required
        />
        <Input
          type="file"
          accept=".pdf"
          onChange={(e) => e.target.files && handleFileChange('insuranceFile', e.target.files[0])}
          required
        />
      </div>

      <div className="p-6 border-2 border-slate-200 rounded-xl bg-white space-y-4">
        <h3 className="font-bold text-slate-900">Bond *</h3>
        <Input
          type="date"
          value={data.bondExpiration}
          onChange={(e) => onChange({...data, bondExpiration: e.target.value})}
          required
        />
        <Input
          type="file"
          accept=".pdf"
          onChange={(e) => e.target.files && handleFileChange('bondFile', e.target.files[0])}
          required
        />
      </div>

      <div className="p-6 border-2 border-slate-200 rounded-xl bg-white space-y-3">
        <h3 className="font-bold text-slate-900">Workers Comp *</h3>
        {['active', 'exempt', 'not_applicable'].map(val => (
          <label key={val} className="flex items-center gap-3 cursor-pointer">
            <input
              type="radio"
              name="workersComp"
              value={val}
              checked={data.workersComp === val}
              onChange={(e) => onChange({...data, workersComp: val})}
              required
            />
            <span className="capitalize">{val.replace('_', ' ')}</span>
          </label>
        ))}
      </div>

      <div className="flex gap-3">
        <Button type="button" variant="outline" onClick={onBack} className="w-1/3">Back</Button>
        <Button type="submit" className="w-2/3 bg-[#f9a825] hover:bg-[#e69b20]">Continue</Button>
      </div>
    </form>
  );
}

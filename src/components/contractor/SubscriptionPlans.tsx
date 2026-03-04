import { Check, Crown, Shield, Zap, TrendingUp, Award } from 'lucide-react';
import { useState } from 'react';

interface SubscriptionPlansProps {
  currentPlan?: 'none' | 'active';
  currentBilling?: 'monthly' | 'yearly';
  onSelectPlan?: (billing: 'monthly' | 'yearly') => void;
}

export function SubscriptionPlans({ 
  currentPlan = 'none', 
  currentBilling = 'monthly',
  onSelectPlan 
}: SubscriptionPlansProps) {
  const [selectedBilling, setSelectedBilling] = useState<'monthly' | 'yearly'>(currentBilling);

  const handleSubscribe = (billing: 'monthly' | 'yearly') => {
    // In production, this would redirect to Stripe Checkout
    const stripeLinks = {
      monthly: 'https://buy.stripe.com/contractor-monthly-399',
      yearly: 'https://buy.stripe.com/contractor-yearly-4389',
    };
    
    console.log(`Redirecting to Stripe: ${billing}`);
    alert(`In production, this would redirect to Stripe Checkout for ${billing} plan`);
    
    onSelectPlan?.(billing);
  };

  const isActive = currentPlan === 'active';
  const monthlyPrice = 399;
  const yearlyPrice = 4389;
  const yearlySavings = (monthlyPrice * 12) - yearlyPrice;

  return (
    <div className="bg-white rounded-xl p-8">
      <div className="text-center mb-12">
        <div className="inline-flex items-center justify-center gap-3 mb-4">
          <div className="size-16 bg-gradient-to-br from-[#f9a825] to-[#e69b20] rounded-2xl flex items-center justify-center shadow-lg">
            <Crown className="size-8 text-white" />
          </div>
        </div>
        <h1 className="text-4xl font-bold text-slate-900 mb-3">Contractor Subscription</h1>
        <p className="text-xl text-slate-600 max-w-2xl mx-auto">
          Get unlimited access to qualified homeowner leads in your service area
        </p>
        {isActive && (
          <div className="mt-4 inline-flex items-center gap-2 bg-green-50 border border-green-200 text-green-700 px-4 py-2 rounded-full">
            <Check className="size-4" />
            <span className="font-semibold">
              Active Subscription ({currentBilling === 'monthly' ? 'Monthly' : 'Annual'})
            </span>
          </div>
        )}
      </div>

      {/* Billing Toggle */}
      <div className="flex justify-center mb-12">
        <div className="inline-flex items-center gap-4 bg-slate-100 p-2 rounded-xl">
          <button
            onClick={() => setSelectedBilling('monthly')}
            className={`px-6 py-3 rounded-lg font-semibold transition-all ${
              selectedBilling === 'monthly'
                ? 'bg-white text-slate-900 shadow-sm'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            Monthly
          </button>
          <button
            onClick={() => setSelectedBilling('yearly')}
            className={`px-6 py-3 rounded-lg font-semibold transition-all relative ${
              selectedBilling === 'yearly'
                ? 'bg-white text-slate-900 shadow-sm'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            Annual
            <span className="absolute -top-2 -right-2 bg-green-500 text-white text-xs px-2 py-0.5 rounded-full font-bold">
              Save ${yearlySavings}
            </span>
          </button>
        </div>
      </div>

      {/* Pricing Card */}
      <div className="max-w-4xl mx-auto">
        <div className="border-2 border-[#f9a825] rounded-2xl p-8 bg-gradient-to-b from-[#f9a825]/5 to-white shadow-xl">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Left: Pricing */}
            <div className="border-r border-slate-200 pr-8">
              <div className="mb-6">
                <div className="flex items-baseline gap-2 mb-2">
                  <span className="text-6xl font-bold text-slate-900">
                    ${selectedBilling === 'monthly' ? monthlyPrice : yearlyPrice}
                  </span>
                  <span className="text-xl text-slate-600">
                    /{selectedBilling === 'monthly' ? 'month' : 'year'}
                  </span>
                </div>
                {selectedBilling === 'yearly' && (
                  <div className="flex items-center gap-2 text-green-600 font-semibold">
                    <TrendingUp className="size-5" />
                    <span>Save ${yearlySavings}/year vs monthly</span>
                  </div>
                )}
                {selectedBilling === 'monthly' && (
                  <p className="text-slate-500">Billed monthly, cancel anytime</p>
                )}
                {selectedBilling === 'yearly' && (
                  <p className="text-slate-500">Billed annually (${Math.round(yearlyPrice/12)}/month)</p>
                )}
              </div>

              <div className="space-y-3">
                <button
                  onClick={() => handleSubscribe(selectedBilling)}
                  disabled={isActive && currentBilling === selectedBilling}
                  className="w-full bg-gradient-to-r from-[#f9a825] to-[#e69b20] text-white py-4 rounded-xl font-bold text-lg hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed transition-all"
                >
                  {isActive && currentBilling === selectedBilling 
                    ? 'Current Plan' 
                    : isActive 
                    ? `Switch to ${selectedBilling === 'monthly' ? 'Monthly' : 'Annual'}`
                    : 'Subscribe Now'}
                </button>
                
                {!isActive && (
                  <p className="text-center text-sm text-slate-500">
                    Start receiving leads immediately after signup
                  </p>
                )}
              </div>

              {isActive && (
                <div className="mt-6 p-4 bg-blue-50 border border-blue-200 rounded-lg">
                  <p className="text-sm text-blue-900 font-semibold mb-1">Next Billing Date:</p>
                  <p className="text-sm text-blue-700">March 15, 2026</p>
                </div>
              )}
            </div>

            {/* Right: Features */}
            <div className="pl-8">
              <h3 className="text-xl font-bold text-slate-900 mb-6">Everything Included:</h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <div className="size-6 bg-[#f9a825]/10 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="size-4 text-[#f9a825]" />
                  </div>
                  <div>
                    <p className="font-semibold text-slate-900">Unlimited Quote Submissions</p>
                    <p className="text-sm text-slate-600">Submit quotes to as many jobs as you want</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="size-6 bg-[#f9a825]/10 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="size-4 text-[#f9a825]" />
                  </div>
                  <div>
                    <p className="font-semibold text-slate-900">Automatic Job Routing</p>
                    <p className="text-sm text-slate-600">Get matched jobs based on your trades & ZIP codes</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="size-6 bg-[#f9a825]/10 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="size-4 text-[#f9a825]" />
                  </div>
                  <div>
                    <p className="font-semibold text-slate-900">Direct Messaging</p>
                    <p className="text-sm text-slate-600">Message homeowners after quote acceptance</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="size-6 bg-[#f9a825]/10 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="size-4 text-[#f9a825]" />
                  </div>
                  <div>
                    <p className="font-semibold text-slate-900">Professional Profile</p>
                    <p className="text-sm text-slate-600">Showcase your work, reviews, and certifications</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="size-6 bg-[#f9a825]/10 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="size-4 text-[#f9a825]" />
                  </div>
                  <div>
                    <p className="font-semibold text-slate-900">Payment Tracking</p>
                    <p className="text-sm text-slate-600">Track payments and project milestones</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="size-6 bg-[#f9a825]/10 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="size-4 text-[#f9a825]" />
                  </div>
                  <div>
                    <p className="font-semibold text-slate-900">Analytics Dashboard</p>
                    <p className="text-sm text-slate-600">Track earnings, conversion rates, and performance</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
import { Check, Zap, Crown, Gift, X } from 'lucide-react';

interface SubscriptionPlansProps {
  currentPlan?: 'free' | 'starter' | 'pro';
  onSelectPlan?: (plan: 'free' | 'starter' | 'pro', billing?: 'monthly' | 'yearly') => void;
}

export function SubscriptionPlans({ currentPlan = 'free', onSelectPlan }: SubscriptionPlansProps) {
  const handleSubscribe = (plan: 'free' | 'starter' | 'pro', billing?: 'monthly' | 'yearly') => {
    if (plan === 'free') {
      onSelectPlan?.(plan);
      return;
    }

    // In production, this would redirect to Stripe Checkout
    const stripeLinks = {
      starter_monthly: 'https://buy.stripe.com/starter-monthly',
      starter_yearly: 'https://buy.stripe.com/starter-yearly',
      pro_monthly: 'https://buy.stripe.com/pro-monthly',
      pro_yearly: 'https://buy.stripe.com/pro-yearly',
    };
    
    // Simulate Stripe redirect
    console.log(`Redirecting to Stripe: ${plan}_${billing}`);
    alert(`In production, this would redirect to Stripe Checkout for ${plan} plan (${billing})`);
    
    onSelectPlan?.(plan, billing);
  };

  return (
    <div className="bg-white rounded-xl p-8">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-slate-900 mb-3">Choose Your Plan</h1>
        <p className="text-xl text-slate-600">Get access to qualified homeowner leads in your area</p>
        {currentPlan && (
          <div className="mt-4 inline-flex items-center gap-2 bg-blue-50 border border-blue-200 text-blue-700 px-4 py-2 rounded-full">
            <span className="font-semibold">Current Plan: {currentPlan.charAt(0).toUpperCase() + currentPlan.slice(1)}</span>
          </div>
        )}
      </div>

      <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {/* Free Plan */}
        <div className={`border-2 rounded-2xl p-8 hover:shadow-lg transition-all ${
          currentPlan === 'free' ? 'border-green-500 bg-green-50/30' : 'border-slate-200'
        }`}>
          <div className="flex items-center gap-3 mb-4">
            <div className="size-12 bg-slate-100 rounded-lg flex items-center justify-center">
              <Gift className="size-6 text-slate-600" />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-slate-900">Free</h3>
              {currentPlan === 'free' && (
                <span className="text-sm text-green-600 font-semibold">Current Plan</span>
              )}
            </div>
          </div>

          <div className="mb-6">
            <div className="flex items-baseline gap-2 mb-2">
              <span className="text-5xl font-bold text-slate-900">$0</span>
              <span className="text-slate-600">/month</span>
            </div>
            <p className="text-sm text-slate-500">Forever free, limited features</p>
          </div>

          <ul className="space-y-4 mb-8 min-h-[320px]">
            <li className="flex items-start gap-3">
              <Check className="size-5 text-green-600 flex-shrink-0 mt-0.5" />
              <span className="text-slate-700">Browse job postings</span>
            </li>
            <li className="flex items-start gap-3">
              <Check className="size-5 text-green-600 flex-shrink-0 mt-0.5" />
              <span className="text-slate-700">Submit up to 2 quotes/month</span>
            </li>
            <li className="flex items-start gap-3">
              <Check className="size-5 text-green-600 flex-shrink-0 mt-0.5" />
              <span className="text-slate-700">Basic profile page</span>
            </li>
            <li className="flex items-start gap-3">
              <X className="size-5 text-red-400 flex-shrink-0 mt-0.5" />
              <span className="text-slate-400">No messaging access</span>
            </li>
            <li className="flex items-start gap-3">
              <X className="size-5 text-red-400 flex-shrink-0 mt-0.5" />
              <span className="text-slate-400">No priority routing</span>
            </li>
            <li className="flex items-start gap-3">
              <X className="size-5 text-red-400 flex-shrink-0 mt-0.5" />
              <span className="text-slate-400">No verified badge</span>
            </li>
          </ul>

          <button
            onClick={() => handleSubscribe('free')}
            disabled={currentPlan === 'free'}
            className="w-full bg-slate-600 text-white py-3 rounded-lg font-semibold hover:bg-slate-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
          >
            {currentPlan === 'free' ? 'Current Plan' : 'Start Free'}
          </button>
        </div>

        {/* Starter Plan */}
        <div className={`border-2 rounded-2xl p-8 hover:shadow-xl transition-all ${
          currentPlan === 'starter' ? 'border-[#f9a825] bg-[#f9a825]/5' : 'border-slate-200'
        }`}>
          <div className="flex items-center gap-3 mb-4">
            <div className="size-12 bg-[#f9a825]/10 rounded-lg flex items-center justify-center">
              <Zap className="size-6 text-[#f9a825]" />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-slate-900">Starter</h3>
              {currentPlan === 'starter' && (
                <span className="text-sm text-green-600 font-semibold">Current Plan</span>
              )}
            </div>
          </div>

          <div className="mb-6">
            <div className="flex items-baseline gap-2 mb-2">
              <span className="text-5xl font-bold text-slate-900">$29</span>
              <span className="text-slate-600">/month</span>
            </div>
            <p className="text-sm text-slate-500">or $290/year (save $58)</p>
          </div>

          <ul className="space-y-4 mb-8 min-h-[320px]">
            <li className="flex items-start gap-3">
              <Check className="size-5 text-green-600 flex-shrink-0 mt-0.5" />
              <span className="text-slate-700">Unlimited job postings access</span>
            </li>
            <li className="flex items-start gap-3">
              <Check className="size-5 text-green-600 flex-shrink-0 mt-0.5" />
              <span className="text-slate-700">Submit unlimited quotes</span>
            </li>
            <li className="flex items-start gap-3">
              <Check className="size-5 text-green-600 flex-shrink-0 mt-0.5" />
              <span className="text-slate-700">Basic messaging system</span>
            </li>
            <li className="flex items-start gap-3">
              <Check className="size-5 text-green-600 flex-shrink-0 mt-0.5" />
              <span className="text-slate-700">Profile page with reviews</span>
            </li>
            <li className="flex items-start gap-3">
              <Check className="size-5 text-green-600 flex-shrink-0 mt-0.5" />
              <span className="text-slate-700">Payment tracking</span>
            </li>
            <li className="flex items-start gap-3">
              <X className="size-5 text-red-400 flex-shrink-0 mt-0.5" />
              <span className="text-slate-400">No priority routing</span>
            </li>
            <li className="flex items-start gap-3">
              <X className="size-5 text-red-400 flex-shrink-0 mt-0.5" />
              <span className="text-slate-400">No verified badge</span>
            </li>
          </ul>

          <div className="space-y-3">
            <button
              onClick={() => handleSubscribe('starter', 'monthly')}
              disabled={currentPlan === 'starter'}
              className="w-full bg-[#f9a825] text-white py-3 rounded-lg font-semibold hover:bg-[#f9a825]/90 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
            >
              {currentPlan === 'starter' ? 'Current Plan' : 'Subscribe Monthly'}
            </button>
            <button
              onClick={() => handleSubscribe('starter', 'yearly')}
              disabled={currentPlan === 'starter'}
              className="w-full border-2 border-[#f9a825] text-[#f9a825] py-3 rounded-lg font-semibold hover:bg-[#f9a825]/5 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
            >
              Subscribe Yearly (Save 17%)
            </button>
          </div>
        </div>

        {/* Pro Plan */}
        <div className={`border-2 rounded-2xl p-8 relative hover:shadow-2xl transition-all ${
          currentPlan === 'pro' 
            ? 'border-purple-500 bg-gradient-to-b from-purple-50 to-white' 
            : 'border-[#f9a825] bg-gradient-to-b from-[#f9a825]/5 to-white'
        }`}>
          <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#f9a825] text-white px-4 py-1 rounded-full text-sm font-semibold">
            MOST POPULAR
          </div>
          
          <div className="flex items-center gap-3 mb-4 mt-2">
            <div className="size-12 bg-gradient-to-br from-[#f9a825] to-[#e69b20] rounded-lg flex items-center justify-center">
              <Crown className="size-6 text-white" />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-slate-900">Pro</h3>
              {currentPlan === 'pro' && (
                <span className="text-sm text-green-600 font-semibold">Current Plan</span>
              )}
            </div>
          </div>

          <div className="mb-6">
            <div className="flex items-baseline gap-2 mb-2">
              <span className="text-5xl font-bold text-slate-900">$79</span>
              <span className="text-slate-600">/month</span>
            </div>
            <p className="text-sm text-slate-500">or $790/year (save $158)</p>
          </div>

          <ul className="space-y-4 mb-8 min-h-[320px]">
            <li className="flex items-start gap-3">
              <Check className="size-5 text-[#f9a825] flex-shrink-0 mt-0.5" />
              <span className="text-slate-700 font-medium">Everything in Starter, plus:</span>
            </li>
            <li className="flex items-start gap-3">
              <Check className="size-5 text-[#f9a825] flex-shrink-0 mt-0.5" />
              <span className="text-slate-700">⚡ Priority routing to jobs</span>
            </li>
            <li className="flex items-start gap-3">
              <Check className="size-5 text-[#f9a825] flex-shrink-0 mt-0.5" />
              <span className="text-slate-700">✨ Verified contractor badge</span>
            </li>
            <li className="flex items-start gap-3">
              <Check className="size-5 text-[#f9a825] flex-shrink-0 mt-0.5" />
              <span className="text-slate-700">🎯 Featured in search results</span>
            </li>
            <li className="flex items-start gap-3">
              <Check className="size-5 text-[#f9a825] flex-shrink-0 mt-0.5" />
              <span className="text-slate-700">📊 Advanced analytics dashboard</span>
            </li>
            <li className="flex items-start gap-3">
              <Check className="size-5 text-[#f9a825] flex-shrink-0 mt-0.5" />
              <span className="text-slate-700">🔔 Instant job notifications</span>
            </li>
            <li className="flex items-start gap-3">
              <Check className="size-5 text-[#f9a825] flex-shrink-0 mt-0.5" />
              <span className="text-slate-700">💬 Priority customer support</span>
            </li>
          </ul>

          <div className="space-y-3">
            <button
              onClick={() => handleSubscribe('pro', 'monthly')}
              disabled={currentPlan === 'pro'}
              className="w-full bg-gradient-to-r from-[#f9a825] to-[#e69b20] text-white py-3 rounded-lg font-semibold hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed transition-all"
            >
              {currentPlan === 'pro' ? 'Current Plan' : 'Subscribe Monthly'}
            </button>
            <button
              onClick={() => handleSubscribe('pro', 'yearly')}
              disabled={currentPlan === 'pro'}
              className="w-full border-2 border-[#f9a825] text-[#f9a825] py-3 rounded-lg font-semibold hover:bg-[#f9a825]/5 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
            >
              Subscribe Yearly (Save 17%)
            </button>
          </div>
        </div>
      </div>

      {/* Comparison Table */}
      <div className="mt-16 max-w-5xl mx-auto">
        <h2 className="text-2xl font-bold text-slate-900 text-center mb-8">Feature Comparison</h2>
        <div className="bg-slate-50 rounded-xl p-6 overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b-2 border-slate-200">
                <th className="text-left py-3 px-4 text-slate-900">Feature</th>
                <th className="text-center py-3 px-4 text-slate-900">Free</th>
                <th className="text-center py-3 px-4 text-slate-900">Starter</th>
                <th className="text-center py-3 px-4 text-slate-900">Pro</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200">
              <tr>
                <td className="py-3 px-4 text-slate-700">Quotes per month</td>
                <td className="text-center py-3 px-4">2</td>
                <td className="text-center py-3 px-4">Unlimited</td>
                <td className="text-center py-3 px-4">Unlimited</td>
              </tr>
              <tr>
                <td className="py-3 px-4 text-slate-700">Messaging</td>
                <td className="text-center py-3 px-4"><X className="size-5 text-red-400 mx-auto" /></td>
                <td className="text-center py-3 px-4"><Check className="size-5 text-green-600 mx-auto" /></td>
                <td className="text-center py-3 px-4"><Check className="size-5 text-green-600 mx-auto" /></td>
              </tr>
              <tr>
                <td className="py-3 px-4 text-slate-700">Priority Routing</td>
                <td className="text-center py-3 px-4"><X className="size-5 text-red-400 mx-auto" /></td>
                <td className="text-center py-3 px-4"><X className="size-5 text-red-400 mx-auto" /></td>
                <td className="text-center py-3 px-4"><Check className="size-5 text-green-600 mx-auto" /></td>
              </tr>
              <tr>
                <td className="py-3 px-4 text-slate-700">Verified Badge</td>
                <td className="text-center py-3 px-4"><X className="size-5 text-red-400 mx-auto" /></td>
                <td className="text-center py-3 px-4"><X className="size-5 text-red-400 mx-auto" /></td>
                <td className="text-center py-3 px-4"><Check className="size-5 text-green-600 mx-auto" /></td>
              </tr>
              <tr>
                <td className="py-3 px-4 text-slate-700">Analytics Dashboard</td>
                <td className="text-center py-3 px-4"><X className="size-5 text-red-400 mx-auto" /></td>
                <td className="text-center py-3 px-4"><X className="size-5 text-red-400 mx-auto" /></td>
                <td className="text-center py-3 px-4"><Check className="size-5 text-green-600 mx-auto" /></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

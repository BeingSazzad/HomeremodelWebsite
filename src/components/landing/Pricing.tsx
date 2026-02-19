import React from 'react';
import { Check, Star, Zap } from 'lucide-react';
import { Button } from '../ui/button';

const plans = [
  {
    name: "Basic",
    price: "$29",
    period: "/month",
    description: "Perfect for getting started",
    features: [
      "10 project quotes per month",
      "Basic profile listing",
      "Email support",
      "Project notifications",
      "Review management"
    ],
    popular: false,
    icon: <Check className="w-5 h-5" />
  },
  {
    name: "Professional",
    price: "$79",
    period: "/month",
    description: "Most popular for growing businesses",
    features: [
      "Unlimited project quotes",
      "Premium profile with portfolio",
      "Priority support 24/7",
      "Advanced analytics",
      "Featured listing",
      "Marketing tools",
      "Lead notifications"
    ],
    popular: true,
    icon: <Star className="w-5 h-5" />
  },
  {
    name: "Enterprise",
    price: "$199",
    period: "/month",
    description: "For established contractors",
    features: [
      "Everything in Professional",
      "Dedicated account manager",
      "Custom branding",
      "API access",
      "Team collaboration tools",
      "White-label options",
      "Priority placement",
      "Custom integrations"
    ],
    popular: false,
    icon: <Zap className="w-5 h-5" />
  }
];

interface PricingProps {
  onGetStarted?: (plan: string) => void;
}

export function Pricing({ onGetStarted }: PricingProps) {
  return (
    <section className="py-20 bg-slate-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
            Simple, <span className="text-[#f9a825]">Transparent</span> Pricing
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Choose the plan that fits your business needs. All plans include a 14-day free trial.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <div 
              key={index} 
              className={`relative rounded-2xl p-8 transition-all duration-300 ${
                plan.popular 
                  ? 'bg-white shadow-2xl scale-105 border-2 border-[#f9a825]' 
                  : 'bg-slate-800 hover:bg-slate-700'
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#f9a825] text-white px-4 py-1 rounded-full text-sm font-bold">
                  Most Popular
                </div>
              )}

              <div className="text-center mb-8">
                <div className={`inline-flex items-center justify-center w-12 h-12 rounded-xl mb-4 ${
                  plan.popular ? 'bg-[#f9a825] text-white' : 'bg-slate-700 text-[#f9a825]'
                }`}>
                  {plan.icon}
                </div>
                <h3 className={`text-2xl font-bold mb-2 ${plan.popular ? 'text-slate-900' : 'text-white'}`}>
                  {plan.name}
                </h3>
                <p className={`text-sm mb-4 ${plan.popular ? 'text-slate-500' : 'text-slate-400'}`}>
                  {plan.description}
                </p>
                <div className="flex items-baseline justify-center gap-1">
                  <span className={`text-5xl font-bold ${plan.popular ? 'text-slate-900' : 'text-white'}`}>
                    {plan.price}
                  </span>
                  <span className={`${plan.popular ? 'text-slate-500' : 'text-slate-400'}`}>
                    {plan.period}
                  </span>
                </div>
              </div>

              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <Check className={`w-5 h-5 mt-0.5 flex-shrink-0 ${
                      plan.popular ? 'text-[#f9a825]' : 'text-[#f9a825]'
                    }`} />
                    <span className={`text-sm ${plan.popular ? 'text-slate-600' : 'text-slate-300'}`}>
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              <Button 
                onClick={() => onGetStarted?.(plan.name)}
                className={`w-full h-12 ${
                  plan.popular 
                    ? 'bg-[#f9a825] hover:bg-[#e39922] text-white' 
                    : 'bg-slate-700 hover:bg-slate-600 text-white'
                }`}
              >
                Get Started
              </Button>
            </div>
          ))}
        </div>

        <p className="text-center text-slate-400 mt-12 text-sm">
          All plans include 14-day free trial. No credit card required. Cancel anytime.
        </p>
      </div>
    </section>
  );
}

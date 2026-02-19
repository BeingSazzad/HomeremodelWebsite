import React, { useState } from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '../../ui/card';
import { Button } from '../../ui/button';
import { Check, CreditCard, X } from 'lucide-react';
import { Input } from '../../ui/input';
import { Label } from '../../ui/label';

export function Subscription({ onSubscribe }: { onSubscribe: () => void }) {
  const [showPayment, setShowPayment] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState<'starter' | 'pro' | null>(null);

  const handleSelectPlan = (plan: 'starter' | 'pro') => {
    setSelectedPlan(plan);
    setShowPayment(true);
  };

  const handlePayment = () => {
    // Simple payment simulation
    alert(`Subscription activated! You are now on the ${selectedPlan === 'starter' ? 'Starter' : 'Professional'} plan.`);
    onSubscribe();
  };

  if (showPayment) {
    return (
      <div className="max-w-2xl mx-auto py-12">
        <div className="bg-white rounded-lg border border-slate-200 p-8">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-slate-900">Complete Payment</h2>
            <button onClick={() => setShowPayment(false)} className="text-slate-400 hover:text-slate-600">
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Order Summary */}
          <div className="bg-slate-50 rounded-lg p-6 mb-8">
            <h3 className="font-semibold text-slate-900 mb-4">Order Summary</h3>
            <div className="flex items-center justify-between mb-2">
              <span className="text-slate-600">{selectedPlan === 'starter' ? 'Starter Plan' : 'Professional Plan'}</span>
              <span className="font-semibold">${selectedPlan === 'starter' ? '29' : '79'}/month</span>
            </div>
            <div className="border-t border-slate-200 mt-4 pt-4 flex items-center justify-between">
              <span className="font-semibold text-slate-900">Total</span>
              <span className="text-2xl font-bold text-[#f9a825]">${selectedPlan === 'starter' ? '29' : '79'}/mo</span>
            </div>
          </div>

          {/* Simple Payment Form */}
          <div className="space-y-6">
            <div>
              <Label htmlFor="cardNumber">Card Number</Label>
              <Input id="cardNumber" placeholder="1234 5678 9012 3456" className="mt-2" />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <Label htmlFor="expiry">Expiry Date</Label>
                <Input id="expiry" placeholder="MM/YY" className="mt-2" />
              </div>
              <div>
                <Label htmlFor="cvc">CVC</Label>
                <Input id="cvc" placeholder="123" className="mt-2" />
              </div>
            </div>

            <div>
              <Label htmlFor="cardName">Name on Card</Label>
              <Input id="cardName" placeholder="John Doe" className="mt-2" />
            </div>

            <div className="flex gap-4 pt-4">
              <Button 
                onClick={handlePayment}
                className="flex-1 bg-[#f9a825] hover:bg-[#e39922] text-white py-6 text-lg"
              >
                <CreditCard className="w-5 h-5 mr-2" />
                Pay ${selectedPlan === 'starter' ? '29' : '79'}
              </Button>
            </div>

            <p className="text-xs text-center text-slate-500">
              Your subscription will auto-renew monthly. Cancel anytime from settings.
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto py-12 text-center">
      <div className="mb-12">
        <h1 className="text-3xl font-bold text-slate-900 mb-3">Choose Your Plan</h1>
        <p className="text-lg text-slate-600">Subscribe to bid on projects and grow your business</p>
      </div>

      <div className="grid md:grid-cols-2 gap-8 max-w-3xl mx-auto">
        {/* Starter Plan */}
        <Card className="border-slate-200 shadow-sm">
          <CardHeader>
            <CardTitle className="text-2xl">Starter</CardTitle>
            <div className="mt-4 text-4xl font-bold text-slate-900">$29<span className="text-base font-normal text-slate-500">/month</span></div>
            <CardDescription className="mt-2">Perfect for new contractors</CardDescription>
          </CardHeader>
          <CardContent className="space-y-3 text-left">
             <div className="flex gap-2 items-center"><Check className="w-5 h-5 text-green-600 flex-shrink-0" /> <span>Submit up to 10 bids/month</span></div>
             <div className="flex gap-2 items-center"><Check className="w-5 h-5 text-green-600 flex-shrink-0" /> <span>View all available projects</span></div>
             <div className="flex gap-2 items-center"><Check className="w-5 h-5 text-green-600 flex-shrink-0" /> <span>Basic profile page</span></div>
             <div className="flex gap-2 items-center"><Check className="w-5 h-5 text-green-600 flex-shrink-0" /> <span>Email support</span></div>
          </CardContent>
          <CardFooter>
            <Button 
              onClick={() => handleSelectPlan('starter')}
              variant="outline" 
              className="w-full py-6 text-base"
            >
              Choose Starter
            </Button>
          </CardFooter>
        </Card>

        {/* Pro Plan */}
        <Card className="border-[#f9a825] border-2 shadow-xl relative">
          <div className="absolute top-4 right-4 bg-[#f9a825] text-white text-xs font-bold px-3 py-1 rounded-full">
            POPULAR
          </div>
          <CardHeader>
            <CardTitle className="text-2xl">Professional</CardTitle>
            <div className="mt-4 text-4xl font-bold text-[#f9a825]">$79<span className="text-base font-normal text-slate-500">/month</span></div>
            <CardDescription className="mt-2">Best for growing contractors</CardDescription>
          </CardHeader>
          <CardContent className="space-y-3 text-left">
             <div className="flex gap-2 items-center"><Check className="w-5 h-5 text-green-600 flex-shrink-0" /> <span className="font-medium">Unlimited bids</span></div>
             <div className="flex gap-2 items-center"><Check className="w-5 h-5 text-green-600 flex-shrink-0" /> <span>View all available projects</span></div>
             <div className="flex gap-2 items-center"><Check className="w-5 h-5 text-green-600 flex-shrink-0" /> <span>Premium profile with gallery</span></div>
             <div className="flex gap-2 items-center"><Check className="w-5 h-5 text-green-600 flex-shrink-0" /> <span>Verified contractor badge</span></div>
             <div className="flex gap-2 items-center"><Check className="w-5 h-5 text-green-600 flex-shrink-0" /> <span>Priority support</span></div>
          </CardContent>
          <CardFooter>
            <Button 
              onClick={() => handleSelectPlan('pro')}
              className="w-full bg-[#f9a825] hover:bg-[#e39922] text-white py-6 text-base"
            >
              Choose Professional
            </Button>
          </CardFooter>
        </Card>
      </div>

      <p className="text-sm text-slate-500 mt-8">
        All plans include secure payments, project notifications, and messaging
      </p>
    </div>
  );
}
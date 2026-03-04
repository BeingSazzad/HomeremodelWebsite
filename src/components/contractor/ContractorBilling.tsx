import { 
  CreditCard, 
  Download, 
  CheckCircle, 
  Crown,
  Calendar,
  DollarSign,
  FileText,
  Plus,
  Trash2,
  Shield
} from 'lucide-react';
import { Button } from '../ui/button';
import { useState } from 'react';

interface ContractorBillingProps {
  currentPlan?: 'none' | 'active';
  currentBilling?: 'monthly' | 'yearly';
  onNavigate: (page: string) => void;
}

export function ContractorBilling({ 
  currentPlan = 'none',
  currentBilling = 'monthly', 
  onNavigate 
}: ContractorBillingProps) {
  const [showAddCardModal, setShowAddCardModal] = useState(false);

  const isActive = currentPlan === 'active';
  const monthlyPrice = 399;
  const yearlyPrice = 4389;

  return (
    <div className="flex-1 bg-white rounded-xl p-8">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-slate-900 mb-2">Billing & Subscription</h1>
        <p className="text-slate-500">Manage your subscription, payment methods, and billing history</p>
      </div>

      {/* Current Plan Card */}
      <div className="bg-gradient-to-br from-slate-50 to-slate-100 border-2 border-slate-200 rounded-2xl p-8 mb-8">
        <div className="flex items-start justify-between">
          <div className="flex items-start gap-6">
            <div className="size-16 bg-gradient-to-br from-[#f9a825] to-[#e69b20] rounded-2xl flex items-center justify-center shadow-lg">
              <Crown className="size-8 text-white" />
            </div>
            <div>
              <div className="flex items-center gap-3 mb-2">
                <h2 className="text-2xl font-bold text-slate-900">
                  {isActive ? 'Active Subscription' : 'No Active Subscription'}
                </h2>
                {isActive && (
                  <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs font-semibold border border-green-200">
                    Active
                  </span>
                )}
              </div>
              {isActive && (
                <>
                  <div className="flex items-baseline gap-2 mb-3">
                    <span className="text-4xl font-bold text-slate-900">
                      ${currentBilling === 'monthly' ? monthlyPrice : yearlyPrice}
                    </span>
                    <span className="text-slate-600">
                      /{currentBilling === 'monthly' ? 'month' : 'year'}
                    </span>
                  </div>
                  <div className="flex items-center gap-2 text-slate-600 text-sm mb-1">
                    <Calendar className="size-4" />
                    <span>Next billing date: <strong>March 15, 2026</strong></span>
                  </div>
                  <div className="flex items-center gap-2 text-slate-600 text-sm">
                    <CheckCircle className="size-4 text-green-600" />
                    <span>Unlimited quotes & full platform access</span>
                  </div>
                </>
              )}
              {!isActive && (
                <p className="text-slate-600">Subscribe to start receiving job leads in your area</p>
              )}
            </div>
          </div>

          <div className="flex gap-3">
            <Button
              onClick={() => onNavigate('subscription')}
              className="bg-[#f9a825] hover:bg-[#e69b20] text-white font-semibold px-6"
            >
              {isActive ? 'Manage Subscription' : 'Subscribe Now'}
            </Button>
            {isActive && (
              <Button
                variant="outline"
                className="border-slate-300 text-slate-700 hover:bg-slate-100 font-semibold px-6"
              >
                Cancel Subscription
              </Button>
            )}
          </div>
        </div>
      </div>

      <div className="grid lg:grid-cols-2 gap-8">
        {/* Payment Method */}
        <div className="bg-white border border-slate-200 rounded-xl p-6">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-bold text-slate-900 flex items-center gap-2">
              <CreditCard className="size-5 text-[#f9a825]" />
              Payment Method
            </h2>
            <Button
              onClick={() => setShowAddCardModal(true)}
              variant="outline"
              size="sm"
              className="border-[#f9a825] text-[#f9a825] hover:bg-[#f9a825]/10"
            >
              <Plus className="size-4 mr-2" />
              Add Card
            </Button>
          </div>

          {currentPlan === 'none' ? (
            <div className="text-center py-12 bg-slate-50 rounded-lg border-2 border-dashed border-slate-200">
              <CreditCard className="size-12 text-slate-300 mx-auto mb-3" />
              <p className="text-slate-500 mb-1">No payment method needed</p>
              <p className="text-sm text-slate-400">Upgrade to add a payment method</p>
            </div>
          ) : (
            <div className="space-y-3">
              {/* Primary Card */}
              <div className="flex items-center justify-between p-5 bg-gradient-to-r from-slate-800 to-slate-700 text-white rounded-xl shadow-md">
                <div className="flex items-center gap-4">
                  <div className="size-12 bg-white/20 rounded-lg flex items-center justify-center">
                    <CreditCard className="size-6 text-white" />
                  </div>
                  <div>
                    <p className="font-semibold text-white mb-1">•••• •••• •••• 4242</p>
                    <div className="flex items-center gap-3 text-sm text-white/80">
                      <span>Visa</span>
                      <span>•</span>
                      <span>Expires 12/26</span>
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <span className="bg-green-500 text-white px-2 py-1 rounded text-xs font-semibold">
                    Default
                  </span>
                  <button className="size-8 bg-white/20 hover:bg-white/30 rounded-lg flex items-center justify-center transition-colors">
                    <Trash2 className="size-4 text-white" />
                  </button>
                </div>
              </div>

              {/* Secondary Card */}
              <div className="flex items-center justify-between p-5 bg-slate-50 border border-slate-200 rounded-xl hover:shadow-md transition-shadow">
                <div className="flex items-center gap-4">
                  <div className="size-12 bg-slate-200 rounded-lg flex items-center justify-center">
                    <CreditCard className="size-6 text-slate-600" />
                  </div>
                  <div>
                    <p className="font-semibold text-slate-900 mb-1">•••• •••• •••• 8888</p>
                    <div className="flex items-center gap-3 text-sm text-slate-600">
                      <span>Mastercard</span>
                      <span>•</span>
                      <span>Expires 08/27</span>
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <Button
                    variant="outline"
                    size="sm"
                    className="text-xs border-[#f9a825] text-[#f9a825] hover:bg-[#f9a825]/10"
                  >
                    Set Default
                  </Button>
                  <button className="size-8 bg-slate-200 hover:bg-slate-300 rounded-lg flex items-center justify-center transition-colors">
                    <Trash2 className="size-4 text-slate-600" />
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Quick Stats */}
        <div className="bg-white border border-slate-200 rounded-xl p-6">
          <h2 className="text-xl font-bold text-slate-900 mb-6 flex items-center gap-2">
            <DollarSign className="size-5 text-[#f9a825]" />
            Subscription Summary
          </h2>

          <div className="space-y-4">
            <div className="flex items-center justify-between p-4 bg-slate-50 rounded-lg">
              <div>
                <p className="text-sm text-slate-600 mb-1">Current Plan</p>
                <p className="text-lg font-bold text-slate-900">
                  {isActive ? 'Active Subscription' : 'No Active Subscription'}
                </p>
              </div>
              <div className="text-right">
                <p className="text-sm text-slate-600 mb-1">Monthly Cost</p>
                <p className="text-lg font-bold text-[#f9a825]">
                  ${currentBilling === 'monthly' ? monthlyPrice : yearlyPrice}
                </p>
              </div>
            </div>

            <div className="flex items-center justify-between p-4 bg-slate-50 rounded-lg">
              <div>
                <p className="text-sm text-slate-600 mb-1">Total Spent (2025)</p>
                <p className="text-lg font-bold text-slate-900">
                  {currentPlan === 'none' ? '$0' : currentPlan === 'active' ? '$348' : '$948'}
                </p>
              </div>
              <div className="text-right">
                <p className="text-sm text-slate-600 mb-1">Member Since</p>
                <p className="text-lg font-bold text-slate-900">Jan 2025</p>
              </div>
            </div>

            {currentPlan !== 'active' && (
              <div className="p-4 bg-gradient-to-r from-[#f9a825]/10 to-[#e69b20]/10 border border-[#f9a825]/30 rounded-lg">
                <div className="flex items-center gap-3 mb-2">
                  <Crown className="size-5 text-[#f9a825]" />
                  <p className="font-semibold text-slate-900">
                    {currentPlan === 'none' ? 'Upgrade to Starter' : 'Upgrade to Pro'}
                  </p>
                </div>
                <p className="text-sm text-slate-600 mb-3">
                  {currentPlan === 'none' 
                    ? 'Get unlimited quotes and featured listings for just $29/month' 
                    : 'Get priority routing and verified badge for $79/month'}
                </p>
                <Button
                  onClick={() => onNavigate('subscription')}
                  size="sm"
                  className="w-full bg-[#f9a825] hover:bg-[#e69b20] text-white"
                >
                  View Plans
                </Button>
              </div>
            )}

            {currentPlan === 'active' && (
              <div className="p-4 bg-gradient-to-r from-purple-50 to-purple-100 border border-purple-200 rounded-lg">
                <div className="flex items-center gap-3 mb-2">
                  <Shield className="size-5 text-purple-600" />
                  <p className="font-semibold text-purple-900">Premium Member</p>
                </div>
                <p className="text-sm text-purple-700">
                  You're enjoying all premium features including priority routing and verified badge!
                </p>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Billing History */}
      <div className="bg-white border border-slate-200 rounded-xl p-6 mt-8">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-bold text-slate-900 flex items-center gap-2">
            <FileText className="size-5 text-[#f9a825]" />
            Billing History
          </h2>
          <Button variant="outline" size="sm">
            <Download className="size-4 mr-2" />
            Download All
          </Button>
        </div>

        {currentPlan === 'none' ? (
          <div className="text-center py-12 bg-slate-50 rounded-lg border-2 border-dashed border-slate-200">
            <FileText className="size-12 text-slate-300 mx-auto mb-3" />
            <p className="text-slate-500 mb-1">No billing history</p>
            <p className="text-sm text-slate-400">Upgrade to start your subscription</p>
          </div>
        ) : (
          <div className="space-y-2">
            {[
              { date: 'Feb 15, 2026', amount: currentPlan === 'active' ? '$29.00' : '$79.00', status: 'Paid', invoice: 'INV-2026-02' },
              { date: 'Jan 15, 2026', amount: currentPlan === 'active' ? '$29.00' : '$79.00', status: 'Paid', invoice: 'INV-2026-01' },
              { date: 'Dec 15, 2025', amount: currentPlan === 'active' ? '$29.00' : '$79.00', status: 'Paid', invoice: 'INV-2025-12' },
              { date: 'Nov 15, 2025', amount: currentPlan === 'active' ? '$29.00' : '$79.00', status: 'Paid', invoice: 'INV-2025-11' },
              { date: 'Oct 15, 2025', amount: currentPlan === 'active' ? '$29.00' : '$79.00', status: 'Paid', invoice: 'INV-2025-10' }
            ].map((bill, index) => (
              <div 
                key={index} 
                className="flex items-center justify-between p-4 hover:bg-slate-50 rounded-lg transition-colors group"
              >
                <div className="flex items-center gap-4 flex-1">
                  <div className="size-10 bg-slate-100 rounded-lg flex items-center justify-center group-hover:bg-white transition-colors">
                    <FileText className="size-5 text-slate-600" />
                  </div>
                  <div>
                    <p className="font-semibold text-slate-900">{bill.invoice}</p>
                    <p className="text-sm text-slate-500">{bill.date}</p>
                  </div>
                </div>

                <div className="flex items-center gap-6">
                  <span className="font-bold text-slate-900 min-w-[80px] text-right">{bill.amount}</span>
                  <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs font-semibold border border-green-200 min-w-[70px] text-center">
                    {bill.status}
                  </span>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="text-[#f9a825] hover:text-[#e69b20] hover:bg-[#f9a825]/10"
                  >
                    <Download className="size-4 mr-2" />
                    Invoice
                  </Button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Add Card Modal */}
      {showAddCardModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl p-8 max-w-md w-full shadow-2xl">
            <h2 className="text-2xl font-bold text-slate-900 mb-6">Add Payment Method</h2>

            <div className="space-y-4 mb-6">
              <div>
                <label className="text-sm font-medium text-slate-700 mb-2 block">
                  Card Number
                </label>
                <input
                  type="text"
                  placeholder="1234 5678 9012 3456"
                  className="w-full px-4 py-3 bg-white border border-slate-200 rounded-lg focus:ring-2 focus:ring-[#f9a825] focus:border-transparent outline-none"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-medium text-slate-700 mb-2 block">
                    Expiry Date
                  </label>
                  <input
                    type="text"
                    placeholder="MM/YY"
                    className="w-full px-4 py-3 bg-white border border-slate-200 rounded-lg focus:ring-2 focus:ring-[#f9a825] focus:border-transparent outline-none"
                  />
                </div>
                <div>
                  <label className="text-sm font-medium text-slate-700 mb-2 block">
                    CVV
                  </label>
                  <input
                    type="text"
                    placeholder="123"
                    className="w-full px-4 py-3 bg-white border border-slate-200 rounded-lg focus:ring-2 focus:ring-[#f9a825] focus:border-transparent outline-none"
                  />
                </div>
              </div>

              <div>
                <label className="text-sm font-medium text-slate-700 mb-2 block">
                  Cardholder Name
                </label>
                <input
                  type="text"
                  placeholder="John Doe"
                  className="w-full px-4 py-3 bg-white border border-slate-200 rounded-lg focus:ring-2 focus:ring-[#f9a825] focus:border-transparent outline-none"
                />
              </div>

              <div className="flex items-center gap-2 pt-2">
                <input
                  type="checkbox"
                  id="setDefault"
                  className="size-4 accent-[#f9a825]"
                />
                <label htmlFor="setDefault" className="text-sm text-slate-700">
                  Set as default payment method
                </label>
              </div>
            </div>

            <div className="flex gap-3">
              <Button
                onClick={() => setShowAddCardModal(false)}
                variant="outline"
                className="flex-1"
              >
                Cancel
              </Button>
              <Button
                onClick={() => setShowAddCardModal(false)}
                className="flex-1 bg-[#f9a825] hover:bg-[#e69b20] text-white"
              >
                Add Card
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
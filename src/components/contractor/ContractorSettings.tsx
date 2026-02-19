import { useState } from 'react';
import { Lock, CreditCard, Eye, EyeOff } from 'lucide-react';
import { Button } from '../ui/button';

type SettingsTab = 'security' | 'manage-plan';

export function ContractorSettings() {
  const [activeTab, setActiveTab] = useState<SettingsTab>('security');
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showCurrentPassword, setShowCurrentPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handlePasswordUpdate = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle password update logic
    console.log('Password update submitted');
  };

  return (
    <div className="flex-1 bg-white rounded-xl">
      <div className="max-w-4xl mx-auto p-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-slate-900 mb-2">Settings</h1>
          <p className="text-slate-500">Manage your business profile and account settings</p>
        </div>

        {/* Tabs */}
        <div className="flex items-center gap-8 border-b-2 border-slate-100 mb-8">
          <button
            onClick={() => setActiveTab('security')}
            className={`pb-3 px-2 relative transition-colors font-medium ${
              activeTab === 'security' ? 'text-slate-900' : 'text-slate-500 hover:text-slate-700'
            }`}
          >
            Security
            {activeTab === 'security' && (
              <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-slate-900" />
            )}
          </button>
          
          <button
            onClick={() => setActiveTab('manage-plan')}
            className={`pb-3 px-2 relative transition-colors font-medium ${
              activeTab === 'manage-plan' ? 'text-slate-900' : 'text-slate-500 hover:text-slate-700'
            }`}
          >
            Manage Plan
            {activeTab === 'manage-plan' && (
              <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-slate-900" />
            )}
          </button>
        </div>

        {/* Tab Content */}
        {activeTab === 'security' && (
          <div className="space-y-6">
            {/* Change Password Section */}
            <div className="bg-white border border-slate-200 rounded-xl p-6">
              <div className="flex items-center gap-3 mb-6">
                <div className="size-10 bg-slate-100 rounded-lg flex items-center justify-center">
                  <Lock className="size-5 text-slate-600" />
                </div>
                <div>
                  <h2 className="text-lg font-bold text-slate-900">Change Password</h2>
                  <p className="text-sm text-slate-500">Update your password to keep your account secure</p>
                </div>
              </div>

              <form onSubmit={handlePasswordUpdate} className="space-y-5">
                {/* Current Password */}
                <div>
                  <label className="block text-sm font-semibold text-[#314158] mb-2">
                    Current Password
                  </label>
                  <div className="relative">
                    <input
                      type={showCurrentPassword ? 'text' : 'password'}
                      value={currentPassword}
                      onChange={(e) => setCurrentPassword(e.target.value)}
                      placeholder="Enter current password"
                      className="w-full h-12 px-4 pr-12 bg-white border border-[#cad5e2] rounded-xl text-slate-900 placeholder:text-slate-400 focus:ring-2 focus:ring-[#f9a825] focus:border-transparent outline-none"
                      required
                    />
                    <button
                      type="button"
                      onClick={() => setShowCurrentPassword(!showCurrentPassword)}
                      className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600"
                    >
                      {showCurrentPassword ? <EyeOff className="size-5" /> : <Eye className="size-5" />}
                    </button>
                  </div>
                </div>

                {/* New Password */}
                <div>
                  <label className="block text-sm font-semibold text-[#314158] mb-2">
                    New Password
                  </label>
                  <div className="relative">
                    <input
                      type={showNewPassword ? 'text' : 'password'}
                      value={newPassword}
                      onChange={(e) => setNewPassword(e.target.value)}
                      placeholder="Enter new password"
                      className="w-full h-12 px-4 pr-12 bg-white border border-[#cad5e2] rounded-xl text-slate-900 placeholder:text-slate-400 focus:ring-2 focus:ring-[#f9a825] focus:border-transparent outline-none"
                      required
                    />
                    <button
                      type="button"
                      onClick={() => setShowNewPassword(!showNewPassword)}
                      className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600"
                    >
                      {showNewPassword ? <EyeOff className="size-5" /> : <Eye className="size-5" />}
                    </button>
                  </div>
                </div>

                {/* Confirm New Password */}
                <div>
                  <label className="block text-sm font-semibold text-[#314158] mb-2">
                    Confirm New Password
                  </label>
                  <div className="relative">
                    <input
                      type={showConfirmPassword ? 'text' : 'password'}
                      value={confirmPassword}
                      onChange={(e) => setConfirmPassword(e.target.value)}
                      placeholder="Enter new confirm password"
                      className="w-full h-12 px-4 pr-12 bg-white border border-[#cad5e2] rounded-xl text-slate-900 placeholder:text-slate-400 focus:ring-2 focus:ring-[#f9a825] focus:border-transparent outline-none"
                      required
                    />
                    <button
                      type="button"
                      onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                      className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600"
                    >
                      {showConfirmPassword ? <EyeOff className="size-5" /> : <Eye className="size-5" />}
                    </button>
                  </div>
                </div>

                {/* Submit Button */}
                <div className="flex justify-end pt-2">
                  <Button
                    type="submit"
                    className="bg-[#f9a825] hover:bg-[#e69b20] text-white px-8 h-11"
                  >
                    Update Password
                  </Button>
                </div>
              </form>
            </div>

            {/* Two-Factor Authentication */}
            <div className="bg-white border border-slate-200 rounded-xl p-6">
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="font-semibold text-slate-900 mb-1">Two-Factor Authentication</h3>
                  <p className="text-sm text-slate-500">Add an extra layer of security to your account</p>
                </div>
                <Button variant="outline" className="border-[#f9a825] text-[#f9a825] hover:bg-[#f9a825]/10">
                  Enable
                </Button>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'manage-plan' && (
          <div className="space-y-6">
            {/* Subscription Plan Section */}
            <div className="bg-white border border-slate-200 rounded-xl p-6">
              <h2 className="text-lg font-bold text-slate-900 mb-5">Subscription Plan</h2>
              
              <div className="bg-[#fffbf0] border border-[#f9a825]/30 rounded-xl p-5">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <h3 className="font-bold text-slate-900">Professional Plan</h3>
                      <span className="bg-[#f9a825] text-white text-xs font-semibold px-2.5 py-0.5 rounded-full">
                        Active
                      </span>
                    </div>
                    <p className="text-sm text-slate-700 mb-1">
                      <span className="font-semibold">$75/month</span> • Billed monthly
                    </p>
                    <p className="text-xs text-slate-500">
                      Next billing date: <span className="font-medium">January 15, 2026</span>
                    </p>
                  </div>
                  <Button variant="outline" className="border-slate-300 text-slate-700 hover:bg-slate-50">
                    Manage Plan
                  </Button>
                </div>

                {/* Plan Features */}
                <div className="mt-4 pt-4 border-t border-[#f9a825]/20">
                  <div className="grid grid-cols-2 gap-3 text-sm">
                    <div className="flex items-center gap-2">
                      <svg className="size-4 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-slate-700">Unlimited Bids</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <svg className="size-4 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-slate-700">Priority Support</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <svg className="size-4 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-slate-700">Featured Profile</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <svg className="size-4 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-slate-700">Analytics Dashboard</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Payment Method Section */}
            <div className="bg-white border border-slate-200 rounded-xl p-6">
              <h2 className="text-lg font-bold text-slate-900 mb-5">Payment Method</h2>
              
              <div className="flex items-center justify-between p-5 bg-slate-50 border border-slate-200 rounded-xl">
                <div className="flex items-center gap-4">
                  <div className="size-12 bg-white border border-slate-200 rounded-lg flex items-center justify-center">
                    <CreditCard className="size-6 text-slate-600" />
                  </div>
                  <div>
                    <p className="font-semibold text-slate-900">•••• •••• •••• 4242</p>
                    <p className="text-sm text-slate-500">Expires 12/2027</p>
                  </div>
                </div>
                <Button variant="outline" className="border-slate-300 text-slate-700 hover:bg-slate-50">
                  Update
                </Button>
              </div>
            </div>

            {/* Billing History */}
            <div className="bg-white border border-slate-200 rounded-xl p-6">
              <h2 className="text-lg font-bold text-slate-900 mb-5">Billing History</h2>
              
              <div className="space-y-3">
                {[
                  { date: 'Dec 15, 2025', amount: '$75.00', status: 'Paid', invoice: 'INV-2025-12' },
                  { date: 'Nov 15, 2025', amount: '$75.00', status: 'Paid', invoice: 'INV-2025-11' },
                  { date: 'Oct 15, 2025', amount: '$75.00', status: 'Paid', invoice: 'INV-2025-10' },
                ].map((billing, index) => (
                  <div key={index} className="flex items-center justify-between p-4 bg-slate-50 rounded-lg hover:bg-slate-100 transition-colors">
                    <div className="flex items-center gap-4">
                      <div className="text-left">
                        <p className="font-medium text-slate-900">{billing.invoice}</p>
                        <p className="text-sm text-slate-500">{billing.date}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <span className="font-semibold text-slate-900">{billing.amount}</span>
                      <span className="inline-block bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs font-medium">
                        {billing.status}
                      </span>
                      <button className="text-[#f9a825] hover:text-[#e69b20] font-medium text-sm">
                        Download
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

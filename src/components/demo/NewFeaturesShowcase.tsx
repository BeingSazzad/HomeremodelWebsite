import { useState } from 'react';
import { SMSVerification } from '../verification/SMSVerification';
import { DocumentUpload } from '../contractor/DocumentUpload';
import { SubscriptionPlans } from '../contractor/SubscriptionPlans';
import { QuoteSlotSystem } from '../projects/QuoteSlotSystem';
import { EnhancedJobPosting } from '../projects/EnhancedJobPosting';
import { LockedQuoteDisplay } from '../quotes/LockedQuoteDisplay';
import { LockedMessaging } from '../messaging/LockedMessaging';
import { TradeAndPricing } from '../contractor/TradeAndPricing';
import { ContractorApprovalDashboard } from '../admin/ContractorApprovalDashboard';

export function NewFeaturesShowcase() {
  const [activeDemo, setActiveDemo] = useState<string>('sms');
  const [showSMSModal, setShowSMSModal] = useState(false);

  const demos = [
    { id: 'sms', label: 'SMS Verification', color: 'bg-blue-500' },
    { id: 'job-posting', label: 'Enhanced Job Posting', color: 'bg-green-500' },
    { id: 'quote-slots', label: 'Quote Slot System', color: 'bg-purple-500' },
    { id: 'documents', label: 'Document Upload', color: 'bg-amber-500' },
    { id: 'trade-pricing', label: 'Trade & Pricing', color: 'bg-pink-500' },
    { id: 'subscription', label: 'Subscription Plans', color: 'bg-indigo-500' },
    { id: 'locked-quote', label: 'Locked Quote Display', color: 'bg-red-500' },
    { id: 'locked-messaging', label: 'Locked Messaging', color: 'bg-teal-500' },
    { id: 'admin', label: 'Admin Dashboard', color: 'bg-slate-700' },
  ];

  return (
    <div className="min-h-screen bg-slate-50 p-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8 text-center">
          <h1 className="text-4xl font-bold text-slate-900 mb-3">
            🎨 New Features UI Showcase
          </h1>
          <p className="text-lg text-slate-600">
            All new modifications and features - Frontend only demonstration
          </p>
        </div>

        {/* Demo Selector */}
        <div className="bg-white rounded-xl p-6 mb-8 shadow-lg">
          <h2 className="text-xl font-bold text-slate-900 mb-4">Select Component to Preview:</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3">
            {demos.map(demo => (
              <button
                key={demo.id}
                onClick={() => setActiveDemo(demo.id)}
                className={`px-4 py-3 rounded-lg font-semibold transition-all ${
                  activeDemo === demo.id
                    ? `${demo.color} text-white shadow-lg scale-105`
                    : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                }`}
              >
                {demo.label}
              </button>
            ))}
          </div>
        </div>

        {/* Demo Display */}
        <div className="bg-white rounded-xl shadow-xl overflow-hidden">
          {activeDemo === 'sms' && (
            <div className="p-8">
              <h2 className="text-2xl font-bold mb-4">SMS Verification System</h2>
              <p className="text-slate-600 mb-6">
                ✅ Mandatory for both homeowners and contractors<br />
                ✅ Homeowners cannot post without verification<br />
                ✅ Contractors cannot activate profile without verification
              </p>
              <button
                onClick={() => setShowSMSModal(true)}
                className="bg-[#f9a825] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#f9a825]/90"
              >
                Launch SMS Verification Modal
              </button>

              {showSMSModal && (
                <SMSVerification
                  userType="homeowner"
                  onComplete={() => {
                    setShowSMSModal(false);
                    alert('Verification complete!');
                  }}
                  onCancel={() => setShowSMSModal(false)}
                />
              )}
            </div>
          )}

          {activeDemo === 'job-posting' && (
            <div className="p-4">
              <h2 className="text-2xl font-bold mb-4 px-4">Enhanced Job Posting Form</h2>
              <p className="text-slate-600 mb-6 px-4">
                ✅ All fields strictly required with validation<br />
                ✅ Minimum 50 character description<br />
                ✅ Mandatory 3-20 photo upload<br />
                ✅ Hiring intent confirmation checkbox<br />
                ✅ Helper text for better quote accuracy
              </p>
              <EnhancedJobPosting />
            </div>
          )}

          {activeDemo === 'quote-slots' && (
            <div className="p-8">
              <h2 className="text-2xl font-bold mb-4">Quote Slot System</h2>
              <p className="text-slate-600 mb-6">
                ✅ Maximum 5 quotes per job<br />
                ✅ 24-hour job window<br />
                ✅ 30-minute reservation timer<br />
                ✅ Auto slot release if not submitted<br />
                ✅ One-time reopen feature
              </p>
              <QuoteSlotSystem projectTitle="Master Bathroom Remodel" />
            </div>
          )}

          {activeDemo === 'documents' && (
            <DocumentUpload />
          )}

          {activeDemo === 'trade-pricing' && (
            <TradeAndPricing />
          )}

          {activeDemo === 'subscription' && (
            <div className="p-4">
              <h2 className="text-2xl font-bold mb-4 px-4">Subscription Plans</h2>
              <p className="text-slate-600 mb-6 px-4">
                ✅ $29 Starter / $79 Pro monthly plans<br />
                ✅ Stripe external payment link<br />
                ✅ Subscription enforcement for job routing<br />
                ✅ Pro features: Contracts, Change Orders, Permits, Progress Photos, Vision Board
              </p>
              <SubscriptionPlans currentPlan="starter" />
            </div>
          )}

          {activeDemo === 'locked-quote' && (
            <div className="p-8">
              <h2 className="text-2xl font-bold mb-4">Locked Quote Display</h2>
              <p className="text-slate-600 mb-6">
                ✅ No edits allowed after submission<br />
                ✅ No deletion allowed<br />
                ✅ System auto-calculates total<br />
                ✅ Permanent and final
              </p>
              <LockedQuoteDisplay
                contractorName="ABC Construction"
                submittedAt="Feb 20, 2026 at 2:30 PM"
                message="Thank you for considering our quote. We use premium materials and have 15+ years of experience. Happy to answer any questions!"
                items={[
                  {
                    category: 'Demolition & Removal',
                    description: 'Remove existing fixtures, tiles, and prepare space',
                    laborCost: 2500,
                    materialCost: 500,
                  },
                  {
                    category: 'Plumbing Installation',
                    description: 'New fixtures, pipes, and connections',
                    laborCost: 4000,
                    materialCost: 3500,
                  },
                  {
                    category: 'Tile Work',
                    description: 'Floor and wall tiling with premium porcelain',
                    laborCost: 3500,
                    materialCost: 4000,
                  },
                ]}
                isOwn={true}
              />
            </div>
          )}

          {activeDemo === 'locked-messaging' && (
            <div className="p-8">
              <h2 className="text-2xl font-bold mb-4">Locked Messaging System</h2>
              <p className="text-slate-600 mb-6">
                ✅ Contractor sends one message with quote<br />
                ✅ Chat locked until homeowner accepts<br />
                ✅ Decline permanently closes conversation<br />
                ✅ Contractor sees name + city only (privacy)
              </p>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-semibold mb-3">Homeowner View (Can Accept/Decline):</h3>
                  <LockedMessaging
                    userType="homeowner"
                    contractorName="ABC Construction"
                    homeownerName="Jane Smith"
                    homeownerCity="Los Angeles"
                    initialMessage="Hi! I've submitted a quote for your bathroom remodel. I'd love to discuss the project details and answer any questions you might have."
                    chatStatus="locked"
                    onAccept={() => alert('Chat accepted! Conversation unlocked.')}
                    onDecline={() => alert('Chat declined. Permanently closed.')}
                  />
                </div>
                <div>
                  <h3 className="font-semibold mb-3">Contractor View (Waiting):</h3>
                  <LockedMessaging
                    userType="contractor"
                    contractorName="ABC Construction"
                    homeownerName="Jane Smith"
                    homeownerCity="Los Angeles"
                    initialMessage="Hi! I've submitted a quote for your bathroom remodel. I'd love to discuss the project details and answer any questions you might have."
                    chatStatus="locked"
                  />
                </div>
              </div>
            </div>
          )}

          {activeDemo === 'admin' && (
            <ContractorApprovalDashboard />
          )}
        </div>

        {/* Footer Info */}
        <div className="mt-8 p-6 bg-blue-900 text-white rounded-xl">
          <h3 className="text-xl font-bold mb-3">📋 Implementation Notes:</h3>
          <ul className="space-y-2 text-blue-100">
            <li>✅ All components are <strong>frontend UI only</strong> - no backend integration</li>
            <li>✅ Stripe payment links are placeholders - ready for real Stripe Checkout URLs</li>
            <li>✅ SMS verification uses simulated timing - ready for Twilio/AWS SNS integration</li>
            <li>✅ Photo uploads show preview only - ready for Supabase/S3 storage</li>
            <li>✅ All validation logic is functional and demonstrates requirements</li>
            <li>✅ Timer countdowns are live and demonstrate slot reservation system</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

import { FileText } from 'lucide-react';

export function TermsOfService() {
  return (
    <div className="min-h-screen bg-slate-50 py-16">
      <div className="container mx-auto px-4 max-w-4xl">
        {/* Header */}
        <div className="bg-white rounded-xl p-8 mb-8 shadow-sm border border-slate-200">
          <div className="flex items-center gap-4 mb-4">
            <div className="size-16 bg-[#f9a825] rounded-xl flex items-center justify-center">
              <FileText className="size-8 text-white" />
            </div>
            <div>
              <h1 className="text-4xl font-bold text-slate-900">Terms of Service</h1>
              <p className="text-slate-500 mt-1">Last Updated: February 19, 2026</p>
            </div>
          </div>
          <p className="text-slate-600 leading-relaxed">
            Please read these Terms of Service carefully before using Homzz. By accessing or using our platform, you agree to be bound by these terms.
          </p>
        </div>

        {/* Content */}
        <div className="bg-white rounded-xl p-8 shadow-sm border border-slate-200 space-y-8">
          
          {/* Section 1 */}
          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">1. Acceptance of Terms</h2>
            <p className="text-slate-700 leading-relaxed mb-4">
              By creating an account or using Homzz services, you acknowledge that you have read, understood, and agree to be bound by these Terms of Service and our Privacy Policy.
            </p>
            <p className="text-slate-700 leading-relaxed">
              If you do not agree to these terms, please do not use our platform. We reserve the right to modify these terms at any time, and your continued use constitutes acceptance of those changes.
            </p>
          </section>

          {/* Section 2 */}
          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">2. User Accounts</h2>
            <div className="space-y-3 text-slate-700">
              <p className="font-semibold text-slate-900">2.1 Account Types</p>
              <ul className="list-disc ml-6 space-y-2">
                <li><strong>Homeowner Accounts:</strong> For property owners seeking remodeling services</li>
                <li><strong>Contractor Accounts:</strong> For licensed professionals offering remodeling services</li>
              </ul>
              
              <p className="font-semibold text-slate-900 mt-4">2.2 Account Requirements</p>
              <ul className="list-disc ml-6 space-y-2">
                <li>You must be at least 18 years old to create an account</li>
                <li>You must provide accurate and complete information</li>
                <li>You are responsible for maintaining the confidentiality of your account credentials</li>
                <li>You must notify us immediately of any unauthorized access to your account</li>
              </ul>

              <p className="font-semibold text-slate-900 mt-4">2.3 Contractor Verification</p>
              <p className="leading-relaxed">
                Contractors must provide valid licensing information, insurance certificates, and business credentials. Homzz reserves the right to verify all contractor information and may suspend or terminate accounts that fail verification.
              </p>
            </div>
          </section>

          {/* Section 3 */}
          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">3. Platform Usage</h2>
            <div className="space-y-3 text-slate-700">
              <p className="font-semibold text-slate-900">3.1 Bidding System</p>
              <p className="leading-relaxed">
                Homzz operates as a bidding marketplace where homeowners post projects and contractors submit competitive bids. All bids are binding offers and, once accepted by a homeowner, create a contractual obligation between the parties.
              </p>
              
              <p className="font-semibold text-slate-900 mt-4">3.2 Prohibited Activities</p>
              <ul className="list-disc ml-6 space-y-2">
                <li>Posting false, misleading, or fraudulent project information</li>
                <li>Submitting bids with no intention to complete the work</li>
                <li>Attempting to circumvent the platform to avoid fees</li>
                <li>Harassment, abuse, or inappropriate communication with other users</li>
                <li>Using the platform for illegal activities or unlicensed work</li>
                <li>Creating multiple accounts to manipulate the bidding system</li>
              </ul>

              <p className="font-semibold text-slate-900 mt-4">3.3 Content Guidelines</p>
              <p className="leading-relaxed">
                Users are responsible for all content they post, including project descriptions, bids, messages, and reviews. Content must not be defamatory, offensive, or infringe on intellectual property rights.
              </p>
            </div>
          </section>

          {/* Section 4 */}
          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">4. Payments and Fees</h2>
            <div className="space-y-3 text-slate-700">
              <p className="font-semibold text-slate-900">4.1 Service Fees</p>
              <p className="leading-relaxed">
                Homzz charges a service fee on all completed transactions. The fee structure is outlined in our Pricing page and may vary based on account type and subscription tier.
              </p>
              
              <p className="font-semibold text-slate-900 mt-4">4.2 Payment Processing</p>
              <p className="leading-relaxed">
                All payments are processed securely through our platform. Homeowners pay the full project amount upon work completion approval. Funds are held in escrow and released to contractors after homeowner approval.
              </p>

              <p className="font-semibold text-slate-900 mt-4">4.3 Refunds and Disputes</p>
              <p className="leading-relaxed">
                Refund requests must be submitted within 7 days of project completion. Disputes will be mediated by Homzz support team. Our refund policy is detailed in the Refund Policy page.
              </p>
            </div>
          </section>

          {/* Section 5 */}
          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">5. Intellectual Property</h2>
            <p className="text-slate-700 leading-relaxed">
              All content on Homzz, including logos, text, graphics, and software, is the property of Homzz LLC or its licensors and is protected by copyright and trademark laws. Users retain ownership of content they create but grant Homzz a license to use, display, and distribute that content on the platform.
            </p>
          </section>

          {/* Section 6 */}
          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">6. Limitation of Liability</h2>
            <div className="space-y-3 text-slate-700">
              <p className="leading-relaxed">
                Homzz is a marketplace platform that connects homeowners and contractors. We do not directly provide remodeling services and are not responsible for:
              </p>
              <ul className="list-disc ml-6 space-y-2">
                <li>The quality, safety, or legality of work performed by contractors</li>
                <li>The accuracy of project descriptions or bid proposals</li>
                <li>Disputes between homeowners and contractors</li>
                <li>Property damage or personal injury resulting from services rendered</li>
              </ul>
              <p className="leading-relaxed mt-4 font-semibold">
                TO THE MAXIMUM EXTENT PERMITTED BY LAW, HOMZZ SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES ARISING FROM YOUR USE OF THE PLATFORM.
              </p>
            </div>
          </section>

          {/* Section 7 */}
          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">7. Indemnification</h2>
            <p className="text-slate-700 leading-relaxed">
              You agree to indemnify and hold harmless Homzz, its officers, directors, employees, and agents from any claims, damages, losses, liabilities, and expenses (including legal fees) arising from your use of the platform, violation of these terms, or infringement of any third-party rights.
            </p>
          </section>

          {/* Section 8 */}
          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">8. Termination</h2>
            <p className="text-slate-700 leading-relaxed">
              Homzz reserves the right to suspend or terminate your account at any time for violation of these terms, fraudulent activity, or any other reason at our sole discretion. Upon termination, you lose access to all platform features and any pending transactions may be forfeited.
            </p>
          </section>

          {/* Section 9 */}
          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">9. Governing Law</h2>
            <p className="text-slate-700 leading-relaxed">
              These Terms of Service shall be governed by and construed in accordance with the laws of the State of California, United States, without regard to its conflict of law provisions. Any disputes arising from these terms shall be resolved in the courts located in California.
            </p>
          </section>

          {/* Section 10 */}
          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">10. Contact Information</h2>
            <div className="bg-slate-50 border border-slate-200 rounded-lg p-6">
              <p className="text-slate-700 leading-relaxed mb-4">
                If you have any questions about these Terms of Service, please contact us:
              </p>
              <ul className="space-y-2 text-slate-700">
                <li><strong>Email:</strong> legal@homzz.com</li>
                <li><strong>Phone:</strong> (201) 555-0124</li>
                <li><strong>Address:</strong> 58 Hullbrook Road, Billesley, B13 0LA</li>
              </ul>
            </div>
          </section>

        </div>
      </div>
    </div>
  );
}

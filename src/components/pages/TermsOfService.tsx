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
              <p className="text-slate-500 mt-1">Last Updated: February 28, 2026</p>
            </div>
          </div>
          <p className="text-slate-600 leading-relaxed">
            Please read these Terms of Service carefully before using our home remodeling marketplace platform. By accessing or using our platform, you agree to be bound by these terms.
          </p>
        </div>

        {/* Content */}
        <div className="bg-white rounded-xl p-8 shadow-sm border border-slate-200 space-y-8">
          
          {/* Section 1 */}
          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">1. Acceptance of Terms</h2>
            <p className="text-slate-700 leading-relaxed mb-4">
              By creating an account or using our home remodeling marketplace services, you acknowledge that you have read, understood, and agree to be bound by these Terms of Service and our Privacy Policy.
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
                <li><strong>Homeowner Accounts:</strong> For property owners seeking home remodeling services</li>
                <li><strong>Contractor Accounts:</strong> For licensed professionals offering home remodeling services</li>
              </ul>
              
              <p className="font-semibold text-slate-900 mt-4">2.2 Account Requirements</p>
              <ul className="list-disc ml-6 space-y-2">
                <li>You must be at least 18 years old to create an account</li>
                <li>You must provide accurate and complete information</li>
                <li>Phone verification is required before posting projects or submitting quotes</li>
                <li>You are responsible for maintaining the confidentiality of your account credentials</li>
                <li>You must notify us immediately of any unauthorized access to your account</li>
              </ul>

              <p className="font-semibold text-slate-900 mt-4">2.3 Contractor Verification</p>
              <p className="leading-relaxed">
                Contractors must provide valid licensing information, insurance certificates, bond documentation, and workers compensation status. Our admin team will review all contractor applications within 24-48 hours. We reserve the right to verify all contractor information and may suspend or terminate accounts that fail verification or provide false information.
              </p>
            </div>
          </section>

          {/* Section 3 */}
          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">3. Platform Usage</h2>
            <div className="space-y-3 text-slate-700">
              <p className="font-semibold text-slate-900">3.1 Pure Bidding Marketplace</p>
              <p className="leading-relaxed">
                Our platform operates as a pure bidding marketplace where homeowners post projects and contractors submit competitive quotes. Each job accepts a maximum of 5 quotes and remains open for 24 hours or until 5 quotes are received, whichever comes first. Contractors must reserve a quote slot (valid for 30 minutes) before submitting a quote.
              </p>
              
              <p className="font-semibold text-slate-900 mt-4">3.2 Quote System Rules</p>
              <ul className="list-disc ml-6 space-y-2">
                <li>All submitted quotes are permanently locked and cannot be edited or deleted</li>
                <li>Quote slots are limited to 5 per job on a first-come, first-served basis</li>
                <li>Reserved slots expire after 30 minutes if no quote is submitted</li>
                <li>Homeowners may reopen a job one time if fewer than 5 quotes were received</li>
                <li>Contractors must have an active subscription to access job feed and submit quotes</li>
              </ul>

              <p className="font-semibold text-slate-900 mt-4">3.3 Messaging and Privacy</p>
              <p className="leading-relaxed">
                Messaging is locked until a homeowner accepts a contractor's quote. Before acceptance, personal contact information (phone numbers, email addresses, full addresses) is hidden to protect both parties' privacy. After acceptance, full contact information is revealed and both parties can communicate directly.
              </p>
              
              <p className="font-semibold text-slate-900 mt-4">3.4 Prohibited Activities</p>
              <ul className="list-disc ml-6 space-y-2">
                <li>Posting false, misleading, or fraudulent project information</li>
                <li>Submitting quotes with no intention to complete the work</li>
                <li>Attempting to circumvent the platform to avoid subscription fees</li>
                <li>Sharing contact information before quote acceptance to bypass the platform</li>
                <li>Harassment, abuse, or inappropriate communication with other users</li>
                <li>Using the platform for illegal activities or unlicensed work</li>
                <li>Creating multiple accounts to manipulate the quote slot system</li>
                <li>Reserving quote slots without intent to submit a quote</li>
              </ul>

              <p className="font-semibold text-slate-900 mt-4">3.5 Content Guidelines</p>
              <p className="leading-relaxed">
                Users are responsible for all content they post, including project descriptions, quotes, messages, and reviews. Content must not be defamatory, offensive, or infringe on intellectual property rights.
              </p>
            </div>
          </section>

          {/* Section 4 */}
          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">4. Contractor Subscriptions and Fees</h2>
            <div className="space-y-3 text-slate-700">
              <p className="font-semibold text-slate-900">4.1 Subscription Requirements</p>
              <p className="leading-relaxed">
                Contractors must maintain an active subscription to access the job feed and submit quotes. Subscription plans are:
              </p>
              <ul className="list-disc ml-6 space-y-2 mt-2">
                <li><strong>Monthly Plan:</strong> $399 per month</li>
                <li><strong>Annual Plan:</strong> $4,389 per year (10% savings)</li>
              </ul>
              
              <p className="font-semibold text-slate-900 mt-4">4.2 Payment Processing</p>
              <p className="leading-relaxed">
                <strong>Important:</strong> Our platform does NOT process payments between homeowners and contractors. All financial transactions for the actual remodeling work occur directly between the parties offline. The platform only processes contractor subscription fees.
              </p>

              <p className="font-semibold text-slate-900 mt-4">4.3 Subscription Cancellation</p>
              <p className="leading-relaxed">
                Contractors may cancel their subscription at any time. Monthly subscriptions will not renew after the current billing period ends. Annual subscriptions are non-refundable but will remain active until the end of the annual period.
              </p>
            </div>
          </section>

          {/* Section 5 */}
          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">5. Job Routing and Matching</h2>
            <p className="text-slate-700 leading-relaxed">
              Our platform automatically routes jobs to contractors based on their selected trade specialties, service areas (ZIP codes), and subscription status. Only contractors with active subscriptions receive job notifications. Contractors are responsible for setting accurate trade selections and pricing structures during signup and can update these in their account settings.
            </p>
          </section>

          {/* Section 6 */}
          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">6. Offline Work and Platform Scope</h2>
            <p className="text-slate-700 leading-relaxed mb-4">
              This platform is optimized for offline physical work. The contractor performs the actual remodeling work at the homeowner's property, and updates project status through the app. Our platform facilitates the connection and quote process but does not provide insurance, guarantees, or supervision of the actual construction work.
            </p>
            <div className="bg-amber-50 border border-amber-200 rounded-lg p-4">
              <p className="text-amber-900 font-semibold mb-2">⚠️ Important Notice</p>
              <p className="text-amber-800 text-sm leading-relaxed">
                All physical work, materials, permits, insurance, and safety compliance are the sole responsibility of the contractor and homeowner. We recommend both parties maintain appropriate insurance coverage and obtain all required permits before work begins.
              </p>
            </div>
          </section>

          {/* Section 7 */}
          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">7. Intellectual Property</h2>
            <p className="text-slate-700 leading-relaxed">
              All content on our platform, including logos, text, graphics, and software, is the property of our company or its licensors and is protected by copyright and trademark laws. Users retain ownership of content they create but grant us a license to use, display, and distribute that content on the platform.
            </p>
          </section>

          {/* Section 8 */}
          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">8. Limitation of Liability</h2>
            <div className="space-y-3 text-slate-700">
              <p className="leading-relaxed">
                We are a marketplace platform that connects homeowners and contractors. We do not directly provide remodeling services and are not responsible for:
              </p>
              <ul className="list-disc ml-6 space-y-2">
                <li>The quality, safety, or legality of work performed by contractors</li>
                <li>The accuracy of project descriptions or quote proposals</li>
                <li>Disputes between homeowners and contractors</li>
                <li>Property damage or personal injury resulting from services rendered</li>
                <li>Payment disputes between homeowners and contractors (we do not process these payments)</li>
                <li>Contractor licensing, insurance, or compliance verification accuracy</li>
                <li>Delays, cancellations, or quality issues with remodeling projects</li>
              </ul>
              <p className="leading-relaxed mt-4 font-semibold">
                TO THE MAXIMUM EXTENT PERMITTED BY LAW, OUR PLATFORM SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES ARISING FROM YOUR USE OF THE PLATFORM.
              </p>
            </div>
          </section>

          {/* Section 9 */}
          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">9. Indemnification</h2>
            <p className="text-slate-700 leading-relaxed">
              You agree to indemnify and hold harmless our platform, its officers, directors, employees, and agents from any claims, damages, losses, liabilities, and expenses (including legal fees) arising from your use of the platform, violation of these terms, or infringement of any third-party rights.
            </p>
          </section>

          {/* Section 10 */}
          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">10. Termination</h2>
            <p className="text-slate-700 leading-relaxed">
              We reserve the right to suspend or terminate your account at any time for violation of these terms, fraudulent activity, or any other reason at our sole discretion. Contractors with terminated accounts will lose access to all platform features and forfeit any remaining subscription period without refund.
            </p>
          </section>

          {/* Section 11 */}
          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">11. Dispute Resolution</h2>
            <p className="text-slate-700 leading-relaxed">
              Any disputes arising from platform use (excluding disputes between homeowners and contractors regarding actual work performed) shall first be attempted to be resolved through good faith negotiation. If negotiation fails, disputes will be resolved through binding arbitration in accordance with the American Arbitration Association rules.
            </p>
          </section>

          {/* Section 12 */}
          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">12. Governing Law</h2>
            <p className="text-slate-700 leading-relaxed">
              These Terms of Service shall be governed by and construed in accordance with the laws of the State of California, United States, without regard to its conflict of law provisions. Any disputes arising from these terms shall be resolved in the courts located in California.
            </p>
          </section>

          {/* Section 13 */}
          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">13. Contact Information</h2>
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
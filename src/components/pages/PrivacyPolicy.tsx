import { Shield } from 'lucide-react';

export function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-slate-50 py-16">
      <div className="container mx-auto px-4 max-w-4xl">
        {/* Header */}
        <div className="bg-white rounded-xl p-8 mb-8 shadow-sm border border-slate-200">
          <div className="flex items-center gap-4 mb-4">
            <div className="size-16 bg-blue-500 rounded-xl flex items-center justify-center">
              <Shield className="size-8 text-white" />
            </div>
            <div>
              <h1 className="text-4xl font-bold text-slate-900">Privacy Policy</h1>
              <p className="text-slate-500 mt-1">Last Updated: February 28, 2026</p>
            </div>
          </div>
          <p className="text-slate-600 leading-relaxed">
            At our home remodeling marketplace, we take your privacy seriously. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our platform.
          </p>
        </div>

        {/* Content */}
        <div className="bg-white rounded-xl p-8 shadow-sm border border-slate-200 space-y-8">
          
          {/* Section 1 */}
          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">1. Information We Collect</h2>
            
            <div className="space-y-4 text-slate-700">
              <div>
                <p className="font-semibold text-slate-900">1.1 Personal Information</p>
                <p className="leading-relaxed mt-2">
                  When you create an account, we collect:
                </p>
                <ul className="list-disc ml-6 mt-2 space-y-1">
                  <li>Name and contact information (email, phone number, address)</li>
                  <li>Account credentials (username, password)</li>
                  <li>Profile information and photos</li>
                  <li>Payment information for subscriptions (credit card details, billing address)</li>
                  <li>Phone verification codes and verification status</li>
                </ul>
              </div>

              <div>
                <p className="font-semibold text-slate-900">1.2 Contractor-Specific Information</p>
                <ul className="list-disc ml-6 mt-2 space-y-1">
                  <li>Company name and owner name</li>
                  <li>Business license numbers and documentation</li>
                  <li>Insurance certificates (liability, bond)</li>
                  <li>Workers compensation status and documentation</li>
                  <li>Tax identification numbers</li>
                  <li>Trade specialties and service areas (ZIP codes)</li>
                  <li>Pricing structures and rate information</li>
                  <li>Portfolio images and project history</li>
                  <li>Subscription plan and billing information</li>
                </ul>
              </div>

              <div>
                <p className="font-semibold text-slate-900">1.3 Homeowner-Specific Information</p>
                <ul className="list-disc ml-6 mt-2 space-y-1">
                  <li>Property address and ZIP code</li>
                  <li>Project details, descriptions, and specifications</li>
                  <li>Budget ranges and timeline preferences</li>
                  <li>Project photos and videos</li>
                  <li>Optional metrics (square footage, linear feet)</li>
                </ul>
              </div>

              <div>
                <p className="font-semibold text-slate-900">1.4 Platform Usage Information</p>
                <ul className="list-disc ml-6 mt-2 space-y-1">
                  <li>Posted projects and submitted quotes</li>
                  <li>Quote slot reservations and submission history</li>
                  <li>Messages and communications on the platform (before and after acceptance)</li>
                  <li>Reviews, ratings, and feedback</li>
                  <li>Job routing preferences and matching history</li>
                  <li>Device information (IP address, browser type, operating system)</li>
                  <li>Cookies and tracking technologies</li>
                  <li>Platform activity logs and timestamps</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Section 2 */}
          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">2. How We Use Your Information</h2>
            <div className="space-y-3 text-slate-700">
              <p className="leading-relaxed">We use collected information for the following purposes:</p>
              <ul className="list-disc ml-6 space-y-2">
                <li><strong>Platform Operations:</strong> To provide, maintain, and improve our marketplace services</li>
                <li><strong>Account Management:</strong> To create and manage your account, including phone verification</li>
                <li><strong>Job Routing:</strong> To automatically match contractors with relevant jobs based on trade, location, and subscription status</li>
                <li><strong>Quote Management:</strong> To manage the 5-quote slot system, 24-hour countdowns, and 30-minute reservations</li>
                <li><strong>Messaging Control:</strong> To enforce locked messaging until quote acceptance and unlock communication afterward</li>
                <li><strong>Contractor Verification:</strong> To verify licenses, insurance, bonds, and workers compensation status</li>
                <li><strong>Subscription Processing:</strong> To process contractor subscription fees ($399/month or $4,389/year) and Pro add-ons ($70)</li>
                <li><strong>Communication:</strong> To send notifications, updates, and respond to inquiries</li>
                <li><strong>Analytics:</strong> To analyze usage patterns and improve user experience</li>
                <li><strong>Privacy Protection:</strong> To hide contact information until quote acceptance</li>
                <li><strong>Legal Compliance:</strong> To comply with legal obligations and enforce our terms</li>
              </ul>
            </div>
          </section>

          {/* Section 3 */}
          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">3. Information Sharing and Disclosure</h2>
            <div className="space-y-4 text-slate-700">
              <div>
                <p className="font-semibold text-slate-900">3.1 With Other Users - Before Quote Acceptance</p>
                <p className="leading-relaxed mt-2">
                  Before a homeowner accepts a quote, we share limited information to protect privacy:
                </p>
                <ul className="list-disc ml-6 mt-2 space-y-1">
                  <li>First name only (no full name or contact details)</li>
                  <li>City and ZIP code (no full address)</li>
                  <li>Project type and general details</li>
                  <li>Budget range (not exact amount)</li>
                  <li>Contractor company name and trade specialties</li>
                  <li>Quote pricing and timeline</li>
                </ul>
              </div>

              <div>
                <p className="font-semibold text-slate-900">3.2 With Other Users - After Quote Acceptance</p>
                <p className="leading-relaxed mt-2">
                  After a homeowner accepts a contractor's quote, full contact information is revealed:
                </p>
                <ul className="list-disc ml-6 mt-2 space-y-1">
                  <li>Full name</li>
                  <li>Phone number</li>
                  <li>Email address</li>
                  <li>Complete property address (for homeowners)</li>
                  <li>Full messaging capabilities</li>
                </ul>
              </div>

              <div>
                <p className="font-semibold text-slate-900">3.3 With Service Providers</p>
                <p className="leading-relaxed mt-2">
                  We share information with third-party service providers who perform services on our behalf:
                </p>
                <ul className="list-disc ml-6 mt-2 space-y-1">
                  <li>Payment processors for subscription billing (Stripe, PayPal)</li>
                  <li>Cloud hosting providers</li>
                  <li>SMS providers for phone verification</li>
                  <li>Email and communication services</li>
                  <li>Analytics and marketing tools</li>
                  <li>Document storage for compliance uploads</li>
                </ul>
              </div>

              <div>
                <p className="font-semibold text-slate-900">3.4 Legal Requirements</p>
                <p className="leading-relaxed mt-2">
                  We may disclose your information if required by law, court order, or government request, or to protect our rights, safety, or property.
                </p>
              </div>

              <div>
                <p className="font-semibold text-slate-900">3.5 Business Transfers</p>
                <p className="leading-relaxed mt-2">
                  In the event of a merger, acquisition, or sale of assets, your information may be transferred to the acquiring entity.
                </p>
              </div>

              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mt-4">
                <p className="text-blue-900 font-semibold mb-2">🔒 Important Privacy Protection</p>
                <p className="text-blue-800 text-sm leading-relaxed">
                  We do NOT share your full contact information with other users until a quote is accepted. This protects both homeowners and contractors from unwanted solicitation and maintains platform integrity.
                </p>
              </div>
            </div>
          </section>

          {/* Section 4 */}
          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">4. Data Security</h2>
            <p className="text-slate-700 leading-relaxed mb-4">
              We implement industry-standard security measures to protect your information:
            </p>
            <ul className="list-disc ml-6 space-y-2 text-slate-700">
              <li>SSL/TLS encryption for data transmission</li>
              <li>Secure data storage with encryption at rest</li>
              <li>Regular security audits and vulnerability testing</li>
              <li>Access controls and authentication measures</li>
              <li>Two-factor authentication via phone verification</li>
              <li>Secure document storage for contractor compliance uploads</li>
              <li>Employee training on data protection practices</li>
              <li>Locked messaging system to prevent unauthorized contact</li>
            </ul>
            <p className="text-slate-700 leading-relaxed mt-4">
              However, no method of transmission over the internet is 100% secure. While we strive to protect your information, we cannot guarantee absolute security.
            </p>
          </section>

          {/* Section 5 */}
          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">5. Your Rights and Choices</h2>
            <div className="space-y-3 text-slate-700">
              <p className="font-semibold text-slate-900">5.1 Access and Update</p>
              <p className="leading-relaxed">
                You can access and update your account information at any time through your account settings. Contractors can update trade selections, pricing structures, and compliance documents.
              </p>

              <p className="font-semibold text-slate-900 mt-4">5.2 Delete Your Account</p>
              <p className="leading-relaxed">
                You may request account deletion by contacting us. Note that some information may be retained for legal or legitimate business purposes (e.g., completed project records, dispute resolution).
              </p>

              <p className="font-semibold text-slate-900 mt-4">5.3 Control Information Sharing</p>
              <p className="leading-relaxed">
                Your contact information remains private until you (as a homeowner) accept a quote. You control when your full details are revealed to contractors.
              </p>

              <p className="font-semibold text-slate-900 mt-4">5.4 Marketing Communications</p>
              <p className="leading-relaxed">
                You can opt out of promotional emails by clicking the "unsubscribe" link or updating your communication preferences. Note that transactional emails (account notifications, quote updates) cannot be disabled.
              </p>

              <p className="font-semibold text-slate-900 mt-4">5.5 Cookies</p>
              <p className="leading-relaxed">
                You can control cookies through your browser settings. Note that disabling cookies may affect platform functionality.
              </p>

              <p className="font-semibold text-slate-900 mt-4">5.6 Data Portability</p>
              <p className="leading-relaxed">
                You have the right to request a copy of your personal data in a portable format.
              </p>
            </div>
          </section>

          {/* Section 6 */}
          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">6. Cookies and Tracking Technologies</h2>
            <p className="text-slate-700 leading-relaxed mb-4">
              We use cookies and similar technologies to enhance your experience:
            </p>
            <ul className="list-disc ml-6 space-y-2 text-slate-700">
              <li><strong>Essential Cookies:</strong> Required for platform functionality (login, quote slots, messaging)</li>
              <li><strong>Analytics Cookies:</strong> Help us understand how users interact with our platform</li>
              <li><strong>Marketing Cookies:</strong> Used to deliver relevant advertisements</li>
              <li><strong>Preference Cookies:</strong> Remember your settings and preferences</li>
            </ul>
          </section>

          {/* Section 7 */}
          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">7. Children's Privacy</h2>
            <p className="text-slate-700 leading-relaxed">
              Our platform is not intended for users under the age of 18. We do not knowingly collect personal information from children. If you believe we have collected information from a child, please contact us immediately.
            </p>
          </section>

          {/* Section 8 */}
          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">8. International Data Transfers</h2>
            <p className="text-slate-700 leading-relaxed">
              Your information may be transferred to and processed in countries other than your country of residence. We ensure appropriate safeguards are in place to protect your data in accordance with this Privacy Policy.
            </p>
          </section>

          {/* Section 9 */}
          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">9. Data Retention</h2>
            <p className="text-slate-700 leading-relaxed">
              We retain your personal information for as long as necessary to provide our services and comply with legal obligations. Specific retention periods:
            </p>
            <ul className="list-disc ml-6 mt-3 space-y-2 text-slate-700">
              <li><strong>Active accounts:</strong> Data retained while account is active</li>
              <li><strong>Completed projects:</strong> Retained for 7 years for dispute resolution and legal compliance</li>
              <li><strong>Contractor compliance documents:</strong> Retained for 10 years after account closure</li>
              <li><strong>Subscription billing records:</strong> Retained for 7 years for tax compliance</li>
              <li><strong>Deleted accounts:</strong> Most data deleted within 90 days, some retained for legal purposes</li>
            </ul>
          </section>

          {/* Section 10 */}
          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">10. Third-Party Payment Processing</h2>
            <p className="text-slate-700 leading-relaxed">
              <strong>Important:</strong> Our platform does NOT process payments between homeowners and contractors for remodeling work. All project payments occur directly between parties offline. We only process contractor subscription fees and Pro add-on purchases through secure third-party payment processors (Stripe, PayPal). These providers have their own privacy policies.
            </p>
          </section>

          {/* Section 11 */}
          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">11. Changes to This Policy</h2>
            <p className="text-slate-700 leading-relaxed">
              We may update this Privacy Policy from time to time. We will notify you of significant changes by email or through a prominent notice on our platform. Your continued use after changes constitutes acceptance.
            </p>
          </section>

          {/* Contact */}
          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">12. Contact Us</h2>
            <div className="bg-slate-50 border border-slate-200 rounded-lg p-6">
              <p className="text-slate-700 leading-relaxed mb-4">
                If you have questions about this Privacy Policy or wish to exercise your rights, contact us:
              </p>
              <ul className="space-y-2 text-slate-700">
                <li><strong>Email:</strong> privacy@homzz.com</li>
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
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
              <p className="text-slate-500 mt-1">Last Updated: February 19, 2026</p>
            </div>
          </div>
          <p className="text-slate-600 leading-relaxed">
            At Homzz, we take your privacy seriously. This Privacy Policy explains how we collect, use, disclose, and safeguard your information.
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
                  <li>Payment information (credit card details, billing address)</li>
                </ul>
              </div>

              <div>
                <p className="font-semibold text-slate-900">1.2 Contractor-Specific Information</p>
                <ul className="list-disc ml-6 mt-2 space-y-1">
                  <li>Business name and license numbers</li>
                  <li>Insurance certificates and credentials</li>
                  <li>Tax identification numbers</li>
                  <li>Portfolio images and project history</li>
                </ul>
              </div>

              <div>
                <p className="font-semibold text-slate-900">1.3 Usage Information</p>
                <ul className="list-disc ml-6 mt-2 space-y-1">
                  <li>Project details, bids, and transaction history</li>
                  <li>Messages and communications on the platform</li>
                  <li>Reviews, ratings, and feedback</li>
                  <li>Device information (IP address, browser type, operating system)</li>
                  <li>Cookies and tracking technologies</li>
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
                <li><strong>Platform Operations:</strong> To provide, maintain, and improve our services</li>
                <li><strong>Account Management:</strong> To create and manage your account</li>
                <li><strong>Transactions:</strong> To process payments, bids, and project completions</li>
                <li><strong>Communication:</strong> To send notifications, updates, and respond to inquiries</li>
                <li><strong>Verification:</strong> To verify contractor credentials and ensure platform safety</li>
                <li><strong>Analytics:</strong> To analyze usage patterns and improve user experience</li>
                <li><strong>Marketing:</strong> To send promotional materials (with your consent)</li>
                <li><strong>Legal Compliance:</strong> To comply with legal obligations and enforce our terms</li>
              </ul>
            </div>
          </section>

          {/* Section 3 */}
          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">3. Information Sharing and Disclosure</h2>
            <div className="space-y-4 text-slate-700">
              <div>
                <p className="font-semibold text-slate-900">3.1 With Other Users</p>
                <p className="leading-relaxed mt-2">
                  When you post a project or submit a bid, relevant information (name, profile, project details) is visible to other users to facilitate transactions.
                </p>
              </div>

              <div>
                <p className="font-semibold text-slate-900">3.2 With Service Providers</p>
                <p className="leading-relaxed mt-2">
                  We share information with third-party service providers who perform services on our behalf:
                </p>
                <ul className="list-disc ml-6 mt-2 space-y-1">
                  <li>Payment processors (Stripe, PayPal)</li>
                  <li>Cloud hosting providers</li>
                  <li>Email and communication services</li>
                  <li>Analytics and marketing tools</li>
                </ul>
              </div>

              <div>
                <p className="font-semibold text-slate-900">3.3 Legal Requirements</p>
                <p className="leading-relaxed mt-2">
                  We may disclose your information if required by law, court order, or government request, or to protect our rights, safety, or property.
                </p>
              </div>

              <div>
                <p className="font-semibold text-slate-900">3.4 Business Transfers</p>
                <p className="leading-relaxed mt-2">
                  In the event of a merger, acquisition, or sale of assets, your information may be transferred to the acquiring entity.
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
              <li>Employee training on data protection practices</li>
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
                You can access and update your account information at any time through your account settings.
              </p>

              <p className="font-semibold text-slate-900 mt-4">5.2 Delete Your Account</p>
              <p className="leading-relaxed">
                You may request account deletion by contacting us. Note that some information may be retained for legal or legitimate business purposes.
              </p>

              <p className="font-semibold text-slate-900 mt-4">5.3 Marketing Communications</p>
              <p className="leading-relaxed">
                You can opt out of promotional emails by clicking the "unsubscribe" link or updating your communication preferences.
              </p>

              <p className="font-semibold text-slate-900 mt-4">5.4 Cookies</p>
              <p className="leading-relaxed">
                You can control cookies through your browser settings. Note that disabling cookies may affect platform functionality.
              </p>

              <p className="font-semibold text-slate-900 mt-4">5.5 Data Portability</p>
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
              <li><strong>Essential Cookies:</strong> Required for platform functionality</li>
              <li><strong>Analytics Cookies:</strong> Help us understand how users interact with our platform</li>
              <li><strong>Marketing Cookies:</strong> Used to deliver relevant advertisements</li>
              <li><strong>Preference Cookies:</strong> Remember your settings and preferences</li>
            </ul>
            <p className="text-slate-700 leading-relaxed mt-4">
              For more details, please see our Cookie Policy.
            </p>
          </section>

          {/* Section 7 */}
          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">7. Children's Privacy</h2>
            <p className="text-slate-700 leading-relaxed">
              Homzz is not intended for users under the age of 18. We do not knowingly collect personal information from children. If you believe we have collected information from a child, please contact us immediately.
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
              We retain your personal information for as long as necessary to provide our services and comply with legal obligations. When data is no longer needed, we securely delete or anonymize it.
            </p>
          </section>

          {/* Section 10 */}
          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">10. Changes to This Policy</h2>
            <p className="text-slate-700 leading-relaxed">
              We may update this Privacy Policy from time to time. We will notify you of significant changes by email or through a prominent notice on our platform. Your continued use after changes constitutes acceptance.
            </p>
          </section>

          {/* Contact */}
          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">11. Contact Us</h2>
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

import { Cookie } from 'lucide-react';

export function CookiePolicy() {
  return (
    <div className="min-h-screen bg-slate-50 py-16">
      <div className="container mx-auto px-4 max-w-4xl">
        {/* Header */}
        <div className="bg-white rounded-xl p-8 mb-8 shadow-sm border border-slate-200">
          <div className="flex items-center gap-4 mb-4">
            <div className="size-16 bg-purple-500 rounded-xl flex items-center justify-center">
              <Cookie className="size-8 text-white" />
            </div>
            <div>
              <h1 className="text-4xl font-bold text-slate-900">Cookie Policy</h1>
              <p className="text-slate-500 mt-1">Last Updated: February 19, 2026</p>
            </div>
          </div>
          <p className="text-slate-600 leading-relaxed">
            This Cookie Policy explains how Homzz uses cookies and similar tracking technologies on our platform.
          </p>
        </div>

        {/* Content */}
        <div className="bg-white rounded-xl p-8 shadow-sm border border-slate-200 space-y-8">
          
          {/* Section 1 */}
          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">1. What Are Cookies?</h2>
            <p className="text-slate-700 leading-relaxed">
              Cookies are small text files that are placed on your device when you visit a website. They are widely used to make websites work more efficiently and provide information to website owners. Cookies can be "persistent" (remain on your device) or "session" (deleted when you close your browser).
            </p>
          </section>

          {/* Section 2 */}
          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">2. Types of Cookies We Use</h2>
            
            <div className="space-y-6">
              {/* Essential Cookies */}
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                <h3 className="text-xl font-bold text-slate-900 mb-3">2.1 Essential Cookies</h3>
                <p className="text-slate-700 leading-relaxed mb-3">
                  These cookies are necessary for the platform to function and cannot be disabled. They enable core functionality such as:
                </p>
                <ul className="list-disc ml-6 space-y-1 text-slate-700">
                  <li>User authentication and account access</li>
                  <li>Security and fraud prevention</li>
                  <li>Session management</li>
                  <li>Load balancing and platform stability</li>
                </ul>
                <p className="text-sm text-blue-700 mt-3 font-semibold">
                  🔵 Always Active - Required for platform operation
                </p>
              </div>

              {/* Analytics Cookies */}
              <div className="bg-green-50 border border-green-200 rounded-lg p-6">
                <h3 className="text-xl font-bold text-slate-900 mb-3">2.2 Analytics and Performance Cookies</h3>
                <p className="text-slate-700 leading-relaxed mb-3">
                  These cookies help us understand how visitors interact with our platform by collecting anonymous information:
                </p>
                <ul className="list-disc ml-6 space-y-1 text-slate-700">
                  <li>Pages visited and time spent on each page</li>
                  <li>Click patterns and navigation flow</li>
                  <li>Error messages and loading times</li>
                  <li>Device type, browser, and screen resolution</li>
                </ul>
                <p className="text-sm text-slate-600 mt-3">
                  <strong>Technologies Used:</strong> Google Analytics, Mixpanel
                </p>
                <p className="text-sm text-green-700 mt-2 font-semibold">
                  🟢 Optional - Can be disabled in settings
                </p>
              </div>

              {/* Functional Cookies */}
              <div className="bg-purple-50 border border-purple-200 rounded-lg p-6">
                <h3 className="text-xl font-bold text-slate-900 mb-3">2.3 Functional Cookies</h3>
                <p className="text-slate-700 leading-relaxed mb-3">
                  These cookies enhance your experience by remembering your preferences:
                </p>
                <ul className="list-disc ml-6 space-y-1 text-slate-700">
                  <li>Language and region preferences</li>
                  <li>Display settings (dark mode, font size)</li>
                  <li>Previously entered information in forms</li>
                  <li>Video player settings and volume</li>
                </ul>
                <p className="text-sm text-purple-700 mt-3 font-semibold">
                  🟣 Optional - Enhances user experience
                </p>
              </div>

              {/* Marketing Cookies */}
              <div className="bg-orange-50 border border-orange-200 rounded-lg p-6">
                <h3 className="text-xl font-bold text-slate-900 mb-3">2.4 Marketing and Advertising Cookies</h3>
                <p className="text-slate-700 leading-relaxed mb-3">
                  These cookies are used to deliver relevant advertisements and track campaign effectiveness:
                </p>
                <ul className="list-disc ml-6 space-y-1 text-slate-700">
                  <li>Display personalized ads based on browsing history</li>
                  <li>Track conversion from ad clicks</li>
                  <li>Limit the number of times you see an ad</li>
                  <li>Measure ad campaign performance</li>
                </ul>
                <p className="text-sm text-slate-600 mt-3">
                  <strong>Technologies Used:</strong> Google Ads, Facebook Pixel, LinkedIn Insight Tag
                </p>
                <p className="text-sm text-orange-700 mt-2 font-semibold">
                  🟠 Optional - Can be disabled in settings
                </p>
              </div>
            </div>
          </section>

          {/* Section 3 */}
          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">3. Third-Party Cookies</h2>
            <p className="text-slate-700 leading-relaxed mb-4">
              Some cookies are placed by third-party services that appear on our pages. We do not control these cookies. Third parties include:
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="border border-slate-200 rounded-lg p-4">
                <p className="font-semibold text-slate-900">Google Services</p>
                <p className="text-sm text-slate-600 mt-1">Analytics, Ads, Maps</p>
              </div>
              <div className="border border-slate-200 rounded-lg p-4">
                <p className="font-semibold text-slate-900">Social Media Platforms</p>
                <p className="text-sm text-slate-600 mt-1">Facebook, Twitter, LinkedIn</p>
              </div>
              <div className="border border-slate-200 rounded-lg p-4">
                <p className="font-semibold text-slate-900">Payment Processors</p>
                <p className="text-sm text-slate-600 mt-1">Stripe, PayPal</p>
              </div>
              <div className="border border-slate-200 rounded-lg p-4">
                <p className="font-semibold text-slate-900">Analytics Tools</p>
                <p className="text-sm text-slate-600 mt-1">Mixpanel, Hotjar</p>
              </div>
            </div>
          </section>

          {/* Section 4 */}
          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">4. Managing Your Cookie Preferences</h2>
            <div className="space-y-4 text-slate-700">
              <div>
                <p className="font-semibold text-slate-900">4.1 Browser Settings</p>
                <p className="leading-relaxed mt-2">
                  Most browsers allow you to control cookies through their settings. You can:
                </p>
                <ul className="list-disc ml-6 mt-2 space-y-1">
                  <li>Block all cookies</li>
                  <li>Block third-party cookies only</li>
                  <li>Delete cookies when you close your browser</li>
                  <li>Allow cookies from specific websites</li>
                </ul>
                <p className="text-sm text-slate-600 mt-2 italic">
                  Note: Blocking essential cookies may prevent you from using parts of our platform.
                </p>
              </div>

              <div>
                <p className="font-semibold text-slate-900">4.2 Homzz Cookie Settings</p>
                <p className="leading-relaxed mt-2">
                  You can manage your cookie preferences directly on Homzz by visiting your Account Settings → Privacy → Cookie Preferences.
                </p>
              </div>

              <div>
                <p className="font-semibold text-slate-900">4.3 Opt-Out Links</p>
                <p className="leading-relaxed mt-2">
                  You can opt out of specific tracking services:
                </p>
                <ul className="list-disc ml-6 mt-2 space-y-1">
                  <li><strong>Google Analytics:</strong> <span className="text-blue-600">https://tools.google.com/dlpage/gaoptout</span></li>
                  <li><strong>Facebook:</strong> Visit Ad Preferences in your Facebook settings</li>
                  <li><strong>LinkedIn:</strong> Visit Ad Preferences in your LinkedIn settings</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Section 5 */}
          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">5. Cookie Lifespan</h2>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-slate-100">
                    <th className="border border-slate-300 px-4 py-2 text-left">Cookie Type</th>
                    <th className="border border-slate-300 px-4 py-2 text-left">Lifespan</th>
                  </tr>
                </thead>
                <tbody className="text-slate-700">
                  <tr>
                    <td className="border border-slate-300 px-4 py-2">Session Cookies</td>
                    <td className="border border-slate-300 px-4 py-2">Deleted when browser closes</td>
                  </tr>
                  <tr>
                    <td className="border border-slate-300 px-4 py-2">Authentication Cookies</td>
                    <td className="border border-slate-300 px-4 py-2">30 days</td>
                  </tr>
                  <tr>
                    <td className="border border-slate-300 px-4 py-2">Analytics Cookies</td>
                    <td className="border border-slate-300 px-4 py-2">2 years</td>
                  </tr>
                  <tr>
                    <td className="border border-slate-300 px-4 py-2">Preference Cookies</td>
                    <td className="border border-slate-300 px-4 py-2">1 year</td>
                  </tr>
                  <tr>
                    <td className="border border-slate-300 px-4 py-2">Marketing Cookies</td>
                    <td className="border border-slate-300 px-4 py-2">90 days - 2 years</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* Section 6 */}
          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">6. Do Not Track Signals</h2>
            <p className="text-slate-700 leading-relaxed">
              Some browsers offer a "Do Not Track" (DNT) signal. Currently, there is no industry standard for responding to DNT signals. Homzz does not currently respond to DNT browser signals, but you can manage cookies through your browser settings or our cookie preferences.
            </p>
          </section>

          {/* Section 7 */}
          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">7. Updates to This Policy</h2>
            <p className="text-slate-700 leading-relaxed">
              We may update this Cookie Policy from time to time to reflect changes in technology or legal requirements. We will notify you of significant changes by posting a notice on our platform or sending you an email.
            </p>
          </section>

          {/* Contact */}
          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">8. Contact Us</h2>
            <div className="bg-slate-50 border border-slate-200 rounded-lg p-6">
              <p className="text-slate-700 leading-relaxed mb-4">
                If you have questions about our use of cookies, please contact us:
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

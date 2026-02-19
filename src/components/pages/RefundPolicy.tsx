import { DollarSign } from 'lucide-react';

export function RefundPolicy() {
  return (
    <div className="min-h-screen bg-slate-50 py-16">
      <div className="container mx-auto px-4 max-w-4xl">
        {/* Header */}
        <div className="bg-white rounded-xl p-8 mb-8 shadow-sm border border-slate-200">
          <div className="flex items-center gap-4 mb-4">
            <div className="size-16 bg-green-500 rounded-xl flex items-center justify-center">
              <DollarSign className="size-8 text-white" />
            </div>
            <div>
              <h1 className="text-4xl font-bold text-slate-900">Refund Policy</h1>
              <p className="text-slate-500 mt-1">Last Updated: February 19, 2026</p>
            </div>
          </div>
          <p className="text-slate-600 leading-relaxed">
            This Refund Policy outlines the terms and conditions for refunds on the Homzz platform.
          </p>
        </div>

        {/* Content */}
        <div className="bg-white rounded-xl p-8 shadow-sm border border-slate-200 space-y-8">
          
          {/* Section 1 */}
          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">1. Payment Structure</h2>
            <p className="text-slate-700 leading-relaxed mb-4">
              Homzz operates on a simple, Fiverr-style payment model:
            </p>
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
              <ul className="space-y-3 text-slate-700">
                <li className="flex items-start gap-3">
                  <span className="font-bold text-blue-600 mt-0.5">1.</span>
                  <span>Homeowner accepts a contractor's bid</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="font-bold text-blue-600 mt-0.5">2.</span>
                  <span>Contractor completes the work and marks it as complete</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="font-bold text-blue-600 mt-0.5">3.</span>
                  <span>Homeowner reviews the work and either approves or requests changes</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="font-bold text-blue-600 mt-0.5">4.</span>
                  <span>Upon approval, full payment is released to the contractor</span>
                </li>
              </ul>
            </div>
            <p className="text-slate-700 leading-relaxed mt-4">
              There are <strong>no milestones or partial payments</strong> - payment is released in full once the homeowner approves the completed work.
            </p>
          </section>

          {/* Section 2 */}
          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">2. Refund Eligibility</h2>
            <div className="space-y-4 text-slate-700">
              <div>
                <p className="font-semibold text-slate-900">2.1 Before Work Begins</p>
                <p className="leading-relaxed mt-2">
                  If a contractor has not started work on a project, homeowners may cancel and receive a full refund, minus any platform fees already incurred.
                </p>
              </div>

              <div>
                <p className="font-semibold text-slate-900">2.2 Work in Progress</p>
                <p className="leading-relaxed mt-2">
                  Once work has begun, refunds are subject to dispute resolution. Homeowners must demonstrate:
                </p>
                <ul className="list-disc ml-6 mt-2 space-y-1">
                  <li>Contractor failed to perform agreed-upon work</li>
                  <li>Work quality significantly deviates from the bid proposal</li>
                  <li>Contractor abandoned the project without completion</li>
                  <li>Safety or building code violations</li>
                </ul>
              </div>

              <div>
                <p className="font-semibold text-slate-900">2.3 After Work Completion</p>
                <p className="leading-relaxed mt-2">
                  Refunds may be issued within <strong>7 days of project completion</strong> if:
                </p>
                <ul className="list-disc ml-6 mt-2 space-y-1">
                  <li>Work does not match the agreed-upon specifications</li>
                  <li>Materials used are substandard or different from what was specified</li>
                  <li>Major defects or workmanship issues are discovered</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Section 3 */}
          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">3. Non-Refundable Situations</h2>
            <div className="bg-red-50 border border-red-200 rounded-lg p-6">
              <p className="text-slate-700 leading-relaxed mb-3">
                Refunds will <strong>NOT</strong> be issued in the following situations:
              </p>
              <ul className="list-disc ml-6 space-y-2 text-slate-700">
                <li>Homeowner changes their mind after approving the work</li>
                <li>Minor cosmetic issues that don't affect functionality</li>
                <li>Disagreements about design preferences not specified in the original bid</li>
                <li>Homeowner fails to provide access to the property or necessary information</li>
                <li>Normal wear and tear after project completion</li>
                <li>Issues caused by homeowner modifications or third-party interference</li>
                <li>Platform service fees (always non-refundable)</li>
              </ul>
            </div>
          </section>

          {/* Section 4 */}
          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">4. Refund Request Process</h2>
            <div className="space-y-4">
              <div className="border-l-4 border-[#f9a825] pl-6 py-2">
                <p className="font-semibold text-slate-900">Step 1: Request Changes</p>
                <p className="text-slate-700 mt-1">
                  Use the "Request Changes" button instead of "Approve & Pay" to communicate issues to the contractor.
                </p>
              </div>

              <div className="border-l-4 border-[#f9a825] pl-6 py-2">
                <p className="font-semibold text-slate-900">Step 2: Open a Dispute</p>
                <p className="text-slate-700 mt-1">
                  If the contractor doesn't address your concerns, open a formal dispute through the platform within <strong>7 days of project completion</strong>.
                </p>
              </div>

              <div className="border-l-4 border-[#f9a825] pl-6 py-2">
                <p className="font-semibold text-slate-900">Step 3: Provide Documentation</p>
                <p className="text-slate-700 mt-1">
                  Submit evidence including:
                </p>
                <ul className="list-disc ml-6 mt-2 space-y-1 text-slate-700">
                  <li>Photos or videos of the issues</li>
                  <li>Original bid proposal and specifications</li>
                  <li>Message history with the contractor</li>
                  <li>Any third-party inspection reports</li>
                </ul>
              </div>

              <div className="border-l-4 border-[#f9a825] pl-6 py-2">
                <p className="font-semibold text-slate-900">Step 4: Dispute Resolution</p>
                <p className="text-slate-700 mt-1">
                  Homzz support team will review the dispute and make a decision within <strong>10 business days</strong>.
                </p>
              </div>

              <div className="border-l-4 border-[#f9a825] pl-6 py-2">
                <p className="font-semibold text-slate-900">Step 5: Refund Processing</p>
                <p className="text-slate-700 mt-1">
                  If approved, refunds are processed within <strong>5-7 business days</strong> to the original payment method.
                </p>
              </div>
            </div>
          </section>

          {/* Section 5 */}
          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">5. Partial Refunds</h2>
            <p className="text-slate-700 leading-relaxed mb-4">
              In cases where work was partially completed or some aspects meet the specifications, Homzz may issue a partial refund based on:
            </p>
            <ul className="list-disc ml-6 space-y-2 text-slate-700">
              <li>Percentage of work completed satisfactorily</li>
              <li>Cost to fix or complete the remaining work</li>
              <li>Materials and labor already invested</li>
              <li>Third-party assessment (if applicable)</li>
            </ul>
          </section>

          {/* Section 6 */}
          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">6. Platform Service Fees</h2>
            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6">
              <p className="text-slate-700 leading-relaxed">
                <strong>Homzz service fees are non-refundable.</strong> Even if a project refund is issued, the platform fee charged to homeowners and contractors will not be refunded as these fees cover the cost of operating the marketplace, payment processing, and support services.
              </p>
            </div>
          </section>

          {/* Section 7 */}
          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">7. Contractor Protection</h2>
            <p className="text-slate-700 leading-relaxed mb-4">
              To protect contractors from unfair refund requests:
            </p>
            <ul className="list-disc ml-6 space-y-2 text-slate-700">
              <li>Contractors have the right to dispute refund claims</li>
              <li>Evidence of completed work will be carefully reviewed</li>
              <li>Frivolous refund requests may result in homeowner account penalties</li>
              <li>Contractors can request third-party inspection for disputed work</li>
            </ul>
          </section>

          {/* Section 8 */}
          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">8. Dispute Mediation</h2>
            <p className="text-slate-700 leading-relaxed mb-4">
              Homzz acts as a neutral mediator in disputes. Our support team will:
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="border border-slate-200 rounded-lg p-4">
                <p className="font-semibold text-slate-900">Review Evidence</p>
                <p className="text-sm text-slate-600 mt-2">Examine all submitted documentation from both parties</p>
              </div>
              <div className="border border-slate-200 rounded-lg p-4">
                <p className="font-semibold text-slate-900">Contact Both Parties</p>
                <p className="text-sm text-slate-600 mt-2">Gather additional information and clarifications</p>
              </div>
              <div className="border border-slate-200 rounded-lg p-4">
                <p className="font-semibold text-slate-900">Consult Experts</p>
                <p className="text-sm text-slate-600 mt-2">Seek third-party opinions for complex cases</p>
              </div>
              <div className="border border-slate-200 rounded-lg p-4">
                <p className="font-semibold text-slate-900">Make Fair Decision</p>
                <p className="text-sm text-slate-600 mt-2">Issue final ruling based on evidence and policies</p>
              </div>
            </div>
          </section>

          {/* Section 9 */}
          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">9. Refund Timeline</h2>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-slate-100">
                    <th className="border border-slate-300 px-4 py-2 text-left">Stage</th>
                    <th className="border border-slate-300 px-4 py-2 text-left">Timeline</th>
                  </tr>
                </thead>
                <tbody className="text-slate-700">
                  <tr>
                    <td className="border border-slate-300 px-4 py-2">Dispute Submission Deadline</td>
                    <td className="border border-slate-300 px-4 py-2">7 days after project completion</td>
                  </tr>
                  <tr>
                    <td className="border border-slate-300 px-4 py-2">Initial Response</td>
                    <td className="border border-slate-300 px-4 py-2">1-2 business days</td>
                  </tr>
                  <tr>
                    <td className="border border-slate-300 px-4 py-2">Investigation Period</td>
                    <td className="border border-slate-300 px-4 py-2">5-10 business days</td>
                  </tr>
                  <tr>
                    <td className="border border-slate-300 px-4 py-2">Decision Notification</td>
                    <td className="border border-slate-300 px-4 py-2">Within 10 business days</td>
                  </tr>
                  <tr>
                    <td className="border border-slate-300 px-4 py-2">Refund Processing</td>
                    <td className="border border-slate-300 px-4 py-2">5-7 business days after approval</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* Section 10 */}
          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">10. Changes to This Policy</h2>
            <p className="text-slate-700 leading-relaxed">
              Homzz reserves the right to modify this Refund Policy at any time. Changes will be posted on this page with an updated "Last Updated" date. Continued use of the platform after changes constitutes acceptance of the updated policy.
            </p>
          </section>

          {/* Contact */}
          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">11. Contact Support</h2>
            <div className="bg-slate-50 border border-slate-200 rounded-lg p-6">
              <p className="text-slate-700 leading-relaxed mb-4">
                For refund requests or questions about this policy, contact our support team:
              </p>
              <ul className="space-y-2 text-slate-700">
                <li><strong>Email:</strong> support@homzz.com</li>
                <li><strong>Phone:</strong> (201) 555-0124</li>
                <li><strong>Support Hours:</strong> Monday-Friday, 9 AM - 6 PM EST</li>
              </ul>
            </div>
          </section>

        </div>
      </div>
    </div>
  );
}

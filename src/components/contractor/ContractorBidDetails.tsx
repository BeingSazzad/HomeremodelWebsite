import { useState } from 'react';
import { ArrowLeft, Download, Edit, XCircle } from 'lucide-react';
import { Button } from '../ui/button';

interface ContractorBidDetailsProps {
  onBack: () => void;
  onEditQuote?: () => void;
}

export function ContractorBidDetails({ onBack, onEditQuote }: ContractorBidDetailsProps) {
  const [showWithdrawModal, setShowWithdrawModal] = useState(false);

  const projectPhotos = [
    'https://images.unsplash.com/photo-1762811003338-aef30274513b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBraXRjaGVuJTIwcmVub3ZhdGlvbiUyMGludGVyaW9yJTIwd2hpdGUlMjBjYWJpbmV0c3xlbnwxfHx8fDE3NzE0NjkzNTF8MA&ixlib=rb-4.1.0&q=80&w=400',
    'https://images.unsplash.com/photo-1758548157243-f4ef3e614684?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBraXRjaGVuJTIwaW50ZXJpb3IlMjB3aGl0ZSUyMHdvb2QlMjBjYWJpbmV0c3xlbnwxfHx8fDE3NzE0NjkzODl8MA&ixlib=rb-4.1.0&q=80&w=400',
    'https://images.unsplash.com/photo-1682888818718-74b9ffa75907?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBkaW5pbmclMjByb29tJTIwa2l0Y2hlbiUyMGlzbGFuZHxlbnwxfHx8fDE3NzE0NjkzOTF8MA&ixlib=rb-4.1.0&q=80&w=400'
  ];

  return (
    <div className="flex-1 bg-white">
      <div className="max-w-7xl mx-auto p-8">
        {/* Back Button */}
        <button
          onClick={onBack}
          className="flex items-center gap-2 text-slate-600 hover:text-slate-900 mb-6 transition-colors"
        >
          <ArrowLeft className="size-4" />
          <span>Back</span>
        </button>

        {/* Action Buttons - Top Right */}
        <div className="flex justify-end gap-3 mb-6">
          <Button
            variant="outline"
            onClick={() => setShowWithdrawModal(true)}
            className="border-red-600 text-red-600 hover:bg-red-50"
          >
            <XCircle className="size-4 mr-2" />
            Withdraw
          </Button>
          <Button
            onClick={onEditQuote}
            className="bg-[#f9a825] hover:bg-[#e69b20] text-white"
          >
            <Edit className="size-4 mr-2" />
            Edit Quote
          </Button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content - Left Side */}
          <div className="lg:col-span-2 space-y-6">
            {/* Project Header */}
            <div className="bg-white border border-slate-200 rounded-xl p-6">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <span className="inline-block bg-[#fff7ed] text-[#f9a825] px-3 py-1 rounded-full text-xs font-medium border border-[#f9a825] mb-3">
                    Pending Review
                  </span>
                  <h1 className="text-2xl font-bold text-slate-900">Modern Kitchen Renovation with Custom Cabinets</h1>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="flex items-start gap-3">
                  <div className="size-10 bg-[#f9a825]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg className="size-5 text-[#f9a825]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-xs text-slate-500 mb-1">Project Budget</p>
                    <p className="font-bold text-slate-900">$35,000 - $45,000</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="size-10 bg-blue-50 rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg className="size-5 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-xs text-slate-500 mb-1">Deadline</p>
                    <p className="font-bold text-slate-900">13 March 2026</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="size-10 bg-purple-50 rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg className="size-5 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-xs text-slate-500 mb-1">Location</p>
                    <p className="font-bold text-slate-900">Austin, TX</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Your Quote Submission */}
            <div className="bg-[#fffbf0] border-2 border-[#f9a825] rounded-xl p-6">
              <div className="flex items-start gap-3 mb-4">
                <div className="size-10 bg-[#f9a825] rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg className="size-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
                <div>
                  <h2 className="text-lg font-bold text-slate-900">Your Quote Submission</h2>
                  <p className="text-sm text-slate-600">What you sent to Sarah Martinez</p>
                </div>
              </div>

              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold text-slate-900 mb-2">Quote Details & Approach</h3>
                  <p className="text-slate-700 leading-relaxed">
                    I can complete this kitchen remodel with high-quality materials and experienced team. Timeline includes all permits and inspections. I specialize in modern kitchen designs and have completed 50+ similar projects in the Austin area.
                  </p>
                </div>

                <div className="flex items-center justify-between p-4 bg-white rounded-lg border border-slate-200">
                  <div>
                    <p className="text-sm text-slate-500 mb-1">Your Quoted Price</p>
                    <p className="text-2xl font-bold text-[#f9a825]">$38,000</p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm text-slate-500 mb-1">Submitted On</p>
                    <p className="font-semibold text-slate-900">Feb 10, 2026</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Your Attachments */}
            <div className="bg-white border border-slate-200 rounded-xl p-6">
              <h2 className="text-lg font-bold text-slate-900 mb-4 flex items-center gap-2">
                <svg className="size-5 text-[#f9a825]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13" />
                </svg>
                Your Attachments
              </h2>
              <div className="space-y-3">
                {[
                  { name: 'Quote_Breakdown.pdf', size: '245 KB', label: 'Attached with quote' },
                  { name: 'Material_Specifications.xlsx', size: '186 KB', label: 'Attached with quote' }
                ].map((doc, index) => (
                  <div key={index} className="flex items-center justify-between p-4 bg-slate-50 rounded-lg hover:bg-slate-100 transition-colors">
                    <div className="flex items-center gap-3">
                      <div className="size-10 bg-[#f9a825] rounded-lg flex items-center justify-center">
                        <svg className="size-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                        </svg>
                      </div>
                      <div>
                        <p className="font-medium text-slate-900">{doc.name}</p>
                        <p className="text-xs text-slate-500">{doc.label} • {doc.size}</p>
                      </div>
                    </div>
                    <button className="flex items-center gap-2 text-[#f9a825] hover:text-[#e69b20] font-medium transition-colors">
                      <Download className="size-4" />
                      <span className="text-sm">Download</span>
                    </button>
                  </div>
                ))}
              </div>
            </div>

            {/* Project Photos */}
            <div className="bg-white border border-slate-200 rounded-xl p-6">
              <h2 className="text-lg font-bold text-slate-900 mb-4">Project Photos</h2>
              <div className="grid grid-cols-3 gap-4">
                {projectPhotos.map((photo, index) => (
                  <div key={index} className="aspect-square rounded-lg overflow-hidden">
                    <img 
                      src={photo} 
                      alt={`Project photo ${index + 1}`}
                      className="w-full h-full object-cover hover:scale-105 transition-transform cursor-pointer"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar - Right Side */}
          <div className="space-y-6">
            {/* Homeowner Info */}
            <div className="bg-white border border-slate-200 rounded-xl p-6">
              <h3 className="font-bold text-slate-900 mb-4">Homeowner</h3>
              <div className="flex items-center gap-3 mb-4">
                <div className="size-12 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold text-lg">
                  SM
                </div>
                <div>
                  <p className="font-semibold text-slate-900">Sarah Martinez</p>
                  <p className="text-xs text-slate-500">Member since June 2024</p>
                </div>
              </div>
              <div className="space-y-2 text-sm">
                <div className="flex items-center gap-2 text-slate-600">
                  <svg className="size-4 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <span>Austin, TX 78701</span>
                </div>
                <div className="flex items-center gap-2 text-slate-600">
                  <svg className="size-4 text-[#f9a825]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                  </svg>
                  <span>2 projects completed</span>
                </div>
              </div>
            </div>

            {/* Bid Status */}
            <div className="bg-white border border-slate-200 rounded-xl p-6">
              <h3 className="font-bold text-slate-900 mb-4">Bid Status</h3>
              <div className="space-y-3 text-sm">
                <div>
                  <p className="text-slate-500 mb-1">Status</p>
                  <span className="inline-block bg-[#fff7ed] text-[#f9a825] px-3 py-1 rounded-full text-xs font-medium border border-[#f9a825]">
                    Pending Review
                  </span>
                </div>
                <div>
                  <p className="text-slate-500 mb-1">Submitted On</p>
                  <p className="font-medium text-slate-900">Feb 10, 2026</p>
                </div>
                <div>
                  <p className="text-slate-500 mb-1">Project Deadline</p>
                  <p className="font-medium text-slate-900">Mar 13, 2026</p>
                </div>
              </div>
            </div>

            {/* Need Help */}
            <div className="bg-slate-50 border border-slate-200 rounded-xl p-6">
              <h3 className="font-bold text-slate-900 mb-2">Need Help?</h3>
              <p className="text-sm text-slate-600 mb-4">
                Have questions about this bid or project? Our support team is here to help.
              </p>
              <Button variant="outline" className="w-full">
                Contact Support
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Withdraw Modal */}
      {showWithdrawModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl shadow-[0px_25px_50px_0px_rgba(0,0,0,0.25)] w-full max-w-md p-9 animate-in fade-in zoom-in duration-200">
            <div className="flex flex-col items-center text-center">
              <div className="size-16 bg-red-100 rounded-full flex items-center justify-center mb-4">
                <XCircle className="size-8 text-red-600" />
              </div>
              <h2 className="text-lg font-semibold text-[#191919] mb-3">
                Withdraw This Bid?
              </h2>
              <p className="text-sm text-[#666] leading-relaxed mb-6">
                Are you sure you want to withdraw your bid for "Modern Kitchen Renovation"? This action cannot be undone.
              </p>
              <div className="flex gap-3 w-full">
                <Button
                  variant="outline"
                  onClick={() => setShowWithdrawModal(false)}
                  className="flex-1 h-10 border-slate-200 text-slate-900"
                >
                  Cancel
                </Button>
                <Button
                  onClick={() => {
                    setShowWithdrawModal(false);
                    onBack();
                  }}
                  className="flex-1 h-10 bg-red-600 hover:bg-red-700 text-white"
                >
                  Yes, Withdraw
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

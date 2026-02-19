import { useState } from 'react';
import { ArrowLeft, Download, Phone, Mail, CheckCircle2, XCircle, AlertCircle, MessageSquare } from 'lucide-react';
import { Button } from '../ui/button';
import { ContactSupportModal } from '../modals/ContactSupportModal';
import { CompleteProjectModal } from '../modals/CompleteProjectModal';
import { ReportIssueModal } from '../modals/ReportIssueModal';
import { CancelProjectModal } from '../modals/CancelProjectModal';

interface ContractorProjectDetailsProps {
  onBack: () => void;
}

export function ContractorProjectDetails({ onBack }: ContractorProjectDetailsProps) {
  const [showCompleteModal, setShowCompleteModal] = useState(false);
  const [showCancelModal, setShowCancelModal] = useState(false);
  const [showSupportModal, setShowSupportModal] = useState(false);
  const [showReportModal, setShowReportModal] = useState(false);

  const projectTitle = 'Complete Kitchen Remodel';
  const projectId = 'PRJ-2025-00947';

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

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content - Left Side */}
          <div className="lg:col-span-2 space-y-6">
            {/* Project Header */}
            <div className="bg-white border border-slate-200 rounded-xl p-6">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <span className="text-sm text-slate-500 mb-1 block">Kitchen</span>
                  <h1 className="text-2xl font-bold text-slate-900">Complete Kitchen Remodel</h1>
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
                    <p className="text-xs text-slate-500 mb-1">Total Budget</p>
                    <p className="font-bold text-slate-900">$25,000 - $35,000</p>
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
                    <p className="font-bold text-slate-900">Austin, TX 78701</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Project Description */}
            <div className="bg-white border border-slate-200 rounded-xl p-6">
              <h2 className="text-lg font-bold text-slate-900 mb-4">Project Description</h2>
              <div className="text-slate-600 space-y-3">
                <p>**Project Goal:** We aim to completely remodel our outdated kitchen into a modern, functional space. This is a comprehensive renovation that will transform the heart of our home.</p>
                
                <p className="font-semibold text-slate-900">Scope of Work:</p>
                <ul className="list-disc list-inside space-y-1 ml-2">
                  <li>Removal of existing cabinets and countertops</li>
                  <li>Installation of new custom cabinets with soft-close hardware</li>
                  <li>Granite or quartz countertops with undermount sink</li>
                  <li>New stainless steel appliances (range, refrigerator, dishwasher)</li>
                  <li>Backsplash installation with subway tiles</li>
                  <li>Updated lighting fixtures</li>
                  <li>Refinished hardwood floors</li>
                  <li>Interior and exterior repaint with upscale finishes</li>
                </ul>

                <p className="font-semibold text-slate-900 mt-4">**Our Vision:**</p>
                <p>We're aiming for a contemporary design with clean lines and a neutral color palette. We want quality craftsmanship and we're looking for a contractor who can bring creative solutions to maximize our space.</p>

                <p className="font-semibold text-slate-900 mt-4">**Important Notes:**</p>
                <p>Timeline is crucial for this kitchen during construction, so please work is preferred on weekdays. We're flexible on start date but would like to complete before summer.</p>
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

            {/* Project Documents */}
            <div className="bg-white border border-slate-200 rounded-xl p-6">
              <h2 className="text-lg font-bold text-slate-900 mb-4">Project Documents</h2>
              <div className="space-y-3">
                {[
                  { name: 'Floor Plan.pdf', size: '2.4 MB' },
                  { name: 'Material Specifications.docx', size: '156 KB' },
                  { name: 'Design References.pdf', size: '8.1 MB' }
                ].map((doc, index) => (
                  <div key={index} className="flex items-center justify-between p-4 bg-[#fef6e9] rounded-lg hover:bg-[#fef0d6] transition-colors">
                    <div className="flex items-center gap-3">
                      <div className="size-10 bg-[#f9a825] rounded-lg flex items-center justify-center">
                        <svg className="size-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                        </svg>
                      </div>
                      <div>
                        <p className="font-medium text-slate-900">{doc.name}</p>
                        <p className="text-sm text-slate-500">{doc.size}</p>
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
          </div>

          {/* Sidebar - Right Side */}
          <div className="space-y-6">
            {/* Order Information */}
            <div className="bg-white border border-slate-200 rounded-xl p-6">
              <h3 className="font-bold text-slate-900 mb-4">Order Information</h3>
              <div className="space-y-3 text-sm">
                <div>
                  <p className="text-slate-500 mb-1">Project ID</p>
                  <p className="font-medium text-slate-900">PRJ-2025-00947</p>
                </div>
                <div>
                  <p className="text-slate-500 mb-1">Status</p>
                  <span className="inline-block bg-[#fef6e9] text-[#f9a825] px-3 py-1 rounded-full text-xs font-medium">
                    32 days remaining
                  </span>
                </div>
                <div>
                  <p className="text-slate-500 mb-1">Date Status</p>
                  <span className="inline-block bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-xs font-medium">
                    In Progress
                  </span>
                </div>
              </div>
            </div>

            {/* Homeowner */}
            <div className="bg-white border border-slate-200 rounded-xl p-6">
              <h3 className="font-bold text-slate-900 mb-4">Homeowner</h3>
              <div className="flex items-center gap-3 mb-4">
                <img 
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop"
                  alt="Karen M."
                  className="size-12 rounded-full object-cover"
                />
                <div>
                  <div className="flex items-center gap-2">
                    <p className="font-semibold text-slate-900">Karen M.</p>
                    <CheckCircle2 className="size-4 text-blue-500" />
                  </div>
                  <p className="text-xs text-slate-500">Member since January 2024</p>
                </div>
              </div>
              <div className="space-y-2 text-sm">
                <div className="flex items-center gap-2 text-slate-600">
                  <Phone className="size-4 text-[#f9a825]" />
                  <span>(415) 555-1923</span>
                </div>
                <div className="flex items-center gap-2 text-slate-600">
                  <Mail className="size-4 text-[#f9a825]" />
                  <span>karenm@email.com</span>
                </div>
              </div>
              <Button className="w-full mt-4 bg-[#f9a825] hover:bg-[#e69b20] text-white">
                <MessageSquare className="size-4 mr-2" />
                Send Message
              </Button>
            </div>

            {/* Project Timeline */}
            <div className="bg-white border border-slate-200 rounded-xl p-6">
              <h3 className="font-bold text-slate-900 mb-4">Project Timeline</h3>
              <div className="space-y-3 text-sm">
                <div>
                  <p className="text-slate-500 mb-1">Started On</p>
                  <p className="font-medium text-slate-900">Jan 15, 2025</p>
                </div>
                <div>
                  <p className="text-slate-500 mb-1">Due to End</p>
                  <p className="font-medium text-slate-900">Mar 10, 2025</p>
                </div>
              </div>
            </div>

            {/* Need Help? */}
            <div className="bg-white border border-slate-200 rounded-xl p-6">
              <h3 className="font-bold text-slate-900 mb-4">Need Help?</h3>
              <div className="space-y-3">
                <button className="w-full text-left flex items-center gap-2 text-sm text-slate-600 hover:text-[#f9a825] transition-colors" onClick={() => setShowSupportModal(true)}>
                  <AlertCircle className="size-4" />
                  <span>Contact Support</span>
                </button>
                <button className="w-full text-left flex items-center gap-2 text-sm text-red-600 hover:text-red-700 transition-colors" onClick={() => setShowReportModal(true)}>
                  <XCircle className="size-4" />
                  <span>Report Issue (Report/Void)</span>
                </button>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="space-y-3">
              <Button
                onClick={() => setShowCompleteModal(true)}
                className="w-full bg-green-600 hover:bg-green-700 text-white"
              >
                <CheckCircle2 className="size-4 mr-2" />
                Mark Project as Complete
              </Button>
              <Button
                variant="outline"
                className="w-full border-red-600 text-red-600 hover:bg-red-50"
                onClick={() => setShowCancelModal(true)}
              >
                <XCircle className="size-4 mr-2" />
                Cancel Project
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Complete Project Modal */}
      <CompleteProjectModal
        isOpen={showCompleteModal}
        projectTitle={projectTitle}
        projectId={projectId}
        onClose={() => setShowCompleteModal(false)}
      />

      {/* Cancel Project Modal */}
      <CancelProjectModal
        isOpen={showCancelModal}
        projectTitle={projectTitle}
        projectId={projectId}
        onClose={() => setShowCancelModal(false)}
      />

      {/* Contact Support Modal */}
      <ContactSupportModal
        isOpen={showSupportModal}
        projectTitle={projectTitle}
        projectId={projectId}
        onClose={() => setShowSupportModal(false)}
      />

      {/* Report Issue Modal */}
      <ReportIssueModal
        isOpen={showReportModal}
        projectTitle={projectTitle}
        projectId={projectId}
        onClose={() => setShowReportModal(false)}
      />
    </div>
  );
}
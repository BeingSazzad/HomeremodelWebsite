import { useState } from 'react';
import { Upload } from 'lucide-react';
import { Button } from '../ui/button';
import svgPaths from '../../imports/svg-ecn42d2g2x';

interface ContactSupportModalProps {
  isOpen: boolean;
  onClose: () => void;
  projectTitle?: string;
  projectId?: string;
}

export function ContactSupportModal({ isOpen, onClose, projectTitle = '', projectId = '' }: ContactSupportModalProps) {
  const [subject, setSubject] = useState('');
  const [description, setDescription] = useState('');
  const [attachments, setAttachments] = useState<File[]>([]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log({ subject, projectTitle, projectId, description, attachments });
    onClose();
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setAttachments(Array.from(e.target.files));
    }
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl shadow-[0px_25px_50px_-12px_rgba(0,0,0,0.25)] w-full max-w-lg max-h-[90vh] overflow-y-auto animate-in fade-in zoom-in duration-200">
        <div className="p-6">
          {/* Header */}
          <div className="flex flex-col items-center mb-8">
            <div className="size-16 bg-blue-100 rounded-full flex items-center justify-center mb-4">
              <svg className="size-8" fill="none" viewBox="0 0 32 32">
                <path 
                  d={svgPaths.pc70a700} 
                  stroke="#155DFC" 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth="2.66667" 
                />
                <path 
                  d={svgPaths.p6a94ac0} 
                  stroke="#155DFC" 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth="2.66667" 
                />
                <path 
                  d="M16 22.668H16.0133" 
                  stroke="#155DFC" 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth="2.66667" 
                />
              </svg>
            </div>
            <h2 className="text-xl font-bold text-slate-900 mb-2">Contact Support</h2>
            <p className="text-slate-500 text-center text-sm">
              We're here to help! Tell us what you need assistance with.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Subject */}
            <div>
              <label className="block text-sm font-semibold text-[#314158] mb-2">
                Subject <span className="text-red-500">*</span>
              </label>
              <select
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
                className="w-full h-12 px-4 bg-white border border-[rgba(202,213,226,0.64)] rounded-xl text-slate-900 focus:ring-2 focus:ring-[#f9a825] focus:border-transparent outline-none"
                required
              >
                <option value="">Select a subject...</option>
                <option value="technical">Technical Issue</option>
                <option value="billing">Billing & Payments</option>
                <option value="account">Account Issues</option>
                <option value="project">Project Question</option>
                <option value="other">Other</option>
              </select>
            </div>

            {/* Project Title */}
            <div>
              <label className="block text-sm font-semibold text-[#314158] mb-2">
                Project Title
              </label>
              <input
                type="text"
                value={projectTitle}
                readOnly
                className="w-full h-12 px-4 bg-slate-50 border border-[#cad5e2] rounded-xl text-slate-900"
              />
            </div>

            {/* Project ID */}
            <div>
              <label className="block text-sm font-semibold text-[#314158] mb-2">
                Project ID
              </label>
              <input
                type="text"
                value={projectId}
                readOnly
                className="w-full h-12 px-4 bg-slate-50 border border-[#cad5e2] rounded-xl text-slate-900"
              />
            </div>

            {/* Description */}
            <div>
              <label className="block text-sm font-semibold text-[#314158] mb-2">
                Description <span className="text-red-500">*</span>
              </label>
              <textarea
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                placeholder="Please describe your issue in detail..."
                rows={5}
                className="w-full px-4 py-3 border border-[#cad5e2] rounded-xl text-slate-900 placeholder:text-slate-400 resize-none focus:ring-2 focus:ring-[#f9a825] focus:border-transparent outline-none"
                required
              />
            </div>

            {/* Attachment */}
            <div>
              <label className="block text-sm font-semibold text-[#314158] mb-2">
                Attachment
              </label>
              <label className="block w-full h-[90px] border-2 border-dashed border-[#e5e7eb] rounded-xl cursor-pointer hover:border-[#f9a825] transition-colors">
                <input
                  type="file"
                  multiple
                  onChange={handleFileChange}
                  className="hidden"
                  accept=".pdf,.doc,.docx,.jpg,.jpeg,.png"
                />
                <div className="flex flex-col items-center justify-center h-full gap-0.5">
                  <div className="flex items-center gap-3">
                    <svg className="size-5 text-[#f9a825]" fill="none" viewBox="0 0 20 20">
                      <path 
                        d="M10 1.70312V11.7031" 
                        stroke="currentColor" 
                        strokeLinecap="round" 
                        strokeLinejoin="round" 
                        strokeWidth="1.66667" 
                      />
                      <path 
                        d={svgPaths.p23206300} 
                        stroke="currentColor" 
                        strokeLinecap="round" 
                        strokeLinejoin="round" 
                        strokeWidth="1.66667" 
                      />
                      <path 
                        d={svgPaths.p7163900} 
                        stroke="currentColor" 
                        strokeLinecap="round" 
                        strokeLinejoin="round" 
                        strokeWidth="1.66667" 
                      />
                    </svg>
                    <span className="text-sm text-[#191919]">Click to attach files</span>
                  </div>
                  <p className="text-xs text-[#666]">PDF, DOC, JPG, PNG</p>
                </div>
              </label>
              {attachments.length > 0 && (
                <div className="mt-2 text-sm text-slate-600">
                  {attachments.length} file(s) selected
                </div>
              )}
            </div>

            {/* Actions */}
            <div className="flex gap-3 pt-4">
              <Button
                type="button"
                variant="outline"
                onClick={onClose}
                className="flex-1 h-12 border-slate-200"
              >
                Cancel
              </Button>
              <Button
                type="submit"
                className="flex-1 h-12 bg-[#f9a825] hover:bg-[#e69b20] text-white"
              >
                Submit Ticket
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
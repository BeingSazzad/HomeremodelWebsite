import { useState } from 'react';
import { Upload, FileText, CheckCircle, AlertCircle, Calendar } from 'lucide-react';

interface Document {
  type: 'license' | 'insurance' | 'bond' | 'workers_comp';
  file: File | null;
  expirationDate: string;
  number?: string;
}

export function DocumentUpload() {
  const [documents, setDocuments] = useState<Record<string, Document>>({
    license: { type: 'license', file: null, expirationDate: '', number: '' },
    insurance: { type: 'insurance', file: null, expirationDate: '' },
    bond: { type: 'bond', file: null, expirationDate: '' },
  });

  const [workersComp, setWorkersComp] = useState<'yes' | 'no' | ''>('');
  const [status, setStatus] = useState<'pending' | 'approved' | 'rejected'>('pending');

  const handleFileUpload = (docType: string, file: File) => {
    setDocuments(prev => ({
      ...prev,
      [docType]: { ...prev[docType], file }
    }));
  };

  const handleDateChange = (docType: string, date: string) => {
    setDocuments(prev => ({
      ...prev,
      [docType]: { ...prev[docType], expirationDate: date }
    }));
  };

  const handleNumberChange = (docType: string, number: string) => {
    setDocuments(prev => ({
      ...prev,
      [docType]: { ...prev[docType], number }
    }));
  };

  const getStatusBadge = () => {
    switch (status) {
      case 'approved':
        return (
          <div className="flex items-center gap-2 px-4 py-2 bg-green-100 text-green-700 rounded-lg">
            <CheckCircle className="size-5" />
            <span className="font-semibold">Approved</span>
          </div>
        );
      case 'rejected':
        return (
          <div className="flex items-center gap-2 px-4 py-2 bg-red-100 text-red-700 rounded-lg">
            <AlertCircle className="size-5" />
            <span className="font-semibold">Rejected - Please resubmit</span>
          </div>
        );
      default:
        return (
          <div className="flex items-center gap-2 px-4 py-2 bg-amber-100 text-amber-700 rounded-lg">
            <AlertCircle className="size-5" />
            <span className="font-semibold">Pending Admin Approval</span>
          </div>
        );
    }
  };

  return (
    <div className="bg-white rounded-xl p-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-slate-900 mb-2">Compliance Documents</h1>
        <p className="text-slate-500 mb-4">Upload required documents to activate your contractor profile</p>
        {getStatusBadge()}
      </div>

      {/* License Upload */}
      <div className="mb-8 p-6 border-2 border-dashed border-slate-300 rounded-xl">
        <div className="flex items-start gap-4">
          <div className="size-12 bg-[#f9a825]/10 rounded-lg flex items-center justify-center flex-shrink-0">
            <FileText className="size-6 text-[#f9a825]" />
          </div>
          <div className="flex-1">
            <h3 className="text-lg font-semibold text-slate-900 mb-1">Contractor License</h3>
            <p className="text-sm text-slate-600 mb-4">Upload your valid contractor license</p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">
                  License Number *
                </label>
                <input
                  type="text"
                  placeholder="e.g., CA-123456"
                  value={documents.license.number || ''}
                  onChange={(e) => handleNumberChange('license', e.target.value)}
                  className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-[#f9a825] focus:border-transparent"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">
                  Expiration Date *
                </label>
                <div className="relative">
                  <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 size-5 text-slate-400" />
                  <input
                    type="date"
                    value={documents.license.expirationDate}
                    onChange={(e) => handleDateChange('license', e.target.value)}
                    className="w-full pl-10 pr-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-[#f9a825] focus:border-transparent"
                  />
                </div>
              </div>
            </div>

            <div className="relative">
              <input
                type="file"
                id="license-upload"
                className="hidden"
                accept=".pdf,.jpg,.jpeg,.png"
                onChange={(e) => e.target.files && handleFileUpload('license', e.target.files[0])}
              />
              <label
                htmlFor="license-upload"
                className="flex items-center gap-2 px-4 py-3 bg-slate-100 hover:bg-slate-200 rounded-lg cursor-pointer transition-colors"
              >
                <Upload className="size-5 text-slate-600" />
                <span className="text-slate-700 font-medium">
                  {documents.license.file ? documents.license.file.name : 'Choose file to upload'}
                </span>
              </label>
            </div>
          </div>
        </div>
      </div>

      {/* Insurance Upload */}
      <div className="mb-8 p-6 border-2 border-dashed border-slate-300 rounded-xl">
        <div className="flex items-start gap-4">
          <div className="size-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
            <FileText className="size-6 text-blue-600" />
          </div>
          <div className="flex-1">
            <h3 className="text-lg font-semibold text-slate-900 mb-1">Insurance Certificate</h3>
            <p className="text-sm text-slate-600 mb-4">Upload proof of liability insurance</p>

            <div className="mb-4">
              <label className="block text-sm font-medium text-slate-700 mb-2">
                Expiration Date *
              </label>
              <div className="relative">
                <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 size-5 text-slate-400" />
                <input
                  type="date"
                  value={documents.insurance.expirationDate}
                  onChange={(e) => handleDateChange('insurance', e.target.value)}
                  className="w-full pl-10 pr-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-[#f9a825] focus:border-transparent"
                />
              </div>
            </div>

            <div className="relative">
              <input
                type="file"
                id="insurance-upload"
                className="hidden"
                accept=".pdf,.jpg,.jpeg,.png"
                onChange={(e) => e.target.files && handleFileUpload('insurance', e.target.files[0])}
              />
              <label
                htmlFor="insurance-upload"
                className="flex items-center gap-2 px-4 py-3 bg-slate-100 hover:bg-slate-200 rounded-lg cursor-pointer transition-colors"
              >
                <Upload className="size-5 text-slate-600" />
                <span className="text-slate-700 font-medium">
                  {documents.insurance.file ? documents.insurance.file.name : 'Choose file to upload'}
                </span>
              </label>
            </div>
          </div>
        </div>
      </div>

      {/* Bond Upload */}
      <div className="mb-8 p-6 border-2 border-dashed border-slate-300 rounded-xl">
        <div className="flex items-start gap-4">
          <div className="size-12 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
            <FileText className="size-6 text-green-600" />
          </div>
          <div className="flex-1">
            <h3 className="text-lg font-semibold text-slate-900 mb-1">Bond Certificate</h3>
            <p className="text-sm text-slate-600 mb-4">Upload proof of surety bond</p>

            <div className="mb-4">
              <label className="block text-sm font-medium text-slate-700 mb-2">
                Expiration Date *
              </label>
              <div className="relative">
                <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 size-5 text-slate-400" />
                <input
                  type="date"
                  value={documents.bond.expirationDate}
                  onChange={(e) => handleDateChange('bond', e.target.value)}
                  className="w-full pl-10 pr-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-[#f9a825] focus:border-transparent"
                />
              </div>
            </div>

            <div className="relative">
              <input
                type="file"
                id="bond-upload"
                className="hidden"
                accept=".pdf,.jpg,.jpeg,.png"
                onChange={(e) => e.target.files && handleFileUpload('bond', e.target.files[0])}
              />
              <label
                htmlFor="bond-upload"
                className="flex items-center gap-2 px-4 py-3 bg-slate-100 hover:bg-slate-200 rounded-lg cursor-pointer transition-colors"
              >
                <Upload className="size-5 text-slate-600" />
                <span className="text-slate-700 font-medium">
                  {documents.bond.file ? documents.bond.file.name : 'Choose file to upload'}
                </span>
              </label>
            </div>
          </div>
        </div>
      </div>

      {/* Workers Compensation */}
      <div className="mb-8 p-6 bg-slate-50 rounded-xl">
        <h3 className="text-lg font-semibold text-slate-900 mb-4">Workers Compensation Status *</h3>
        <div className="flex gap-4">
          <label className="flex items-center gap-2 cursor-pointer">
            <input
              type="radio"
              name="workers-comp"
              value="yes"
              checked={workersComp === 'yes'}
              onChange={(e) => setWorkersComp(e.target.value as 'yes')}
              className="size-4 text-[#f9a825] focus:ring-[#f9a825]"
            />
            <span className="text-slate-700">I have workers compensation insurance</span>
          </label>
          <label className="flex items-center gap-2 cursor-pointer">
            <input
              type="radio"
              name="workers-comp"
              value="no"
              checked={workersComp === 'no'}
              onChange={(e) => setWorkersComp(e.target.value as 'no')}
              className="size-4 text-[#f9a825] focus:ring-[#f9a825]"
            />
            <span className="text-slate-700">I am exempt / sole proprietor</span>
          </label>
        </div>
      </div>

      {/* Submit Button */}
      <div className="flex gap-4">
        <button className="flex-1 bg-[#f9a825] text-white py-3 rounded-lg font-semibold hover:bg-[#f9a825]/90 transition-all">
          Submit for Approval
        </button>
        <button className="px-6 py-3 border-2 border-slate-300 text-slate-700 rounded-lg font-semibold hover:bg-slate-50 transition-all">
          Save Draft
        </button>
      </div>

      {/* Help Text */}
      <div className="mt-6 p-4 bg-blue-50 rounded-lg">
        <p className="text-sm text-blue-800">
          <strong>Note:</strong> All documents will be reviewed by our admin team within 24-48 hours. You will receive an email notification once your profile is approved.
        </p>
      </div>
    </div>
  );
}

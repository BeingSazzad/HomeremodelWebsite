import React, { useState } from 'react';
import { ProjectDetails } from '../contractor/ProjectDetails';
import { Check } from 'lucide-react';

export function ContractorProjectDetailsPage() {
  const [showSuccess, setShowSuccess] = useState(false);

  const handleBack = () => {
    // Navigate back to available projects list
    console.log('Navigate back to projects list');
  };

  const handleSubmitQuote = () => {
    setShowSuccess(true);
    // After showing success, could redirect back to projects list
    setTimeout(() => {
      setShowSuccess(false);
      handleBack();
    }, 3000);
  };

  if (showSuccess) {
    return (
      <div className="min-h-screen bg-slate-50 flex items-center justify-center px-4">
        <div className="bg-white rounded-lg border border-slate-200 p-8 max-w-md w-full text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-4">
            <Check className="size-8 text-green-600" />
          </div>
          <h2 className="text-2xl mb-2">Quote Submitted Successfully!</h2>
          <p className="text-slate-600 mb-6">
            The homeowner will review your quote and get back to you soon. You can track the status in your dashboard.
          </p>
          <div className="flex items-center justify-center gap-2 text-sm text-slate-500">
            <div className="w-2 h-2 bg-[#f9a825] rounded-full animate-pulse" />
            Redirecting to projects...
          </div>
        </div>
      </div>
    );
  }

  return (
    <ProjectDetails 
      onBack={handleBack}
      onSubmitQuote={handleSubmitQuote}
    />
  );
}

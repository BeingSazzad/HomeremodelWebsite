import { useState } from 'react';
import { Upload, X, CheckCircle, AlertCircle, MapPin, DollarSign, Calendar, FileText, Image as ImageIcon } from 'lucide-react';

interface ProjectFormData {
  projectType: string;
  zipCode: string;
  budgetRange: string;
  startTimeframe: string;
  description: string;
  photos: File[];
  squareFootage: string;
  linearFeet: string;
  video: File | null;
  confirmLooking: boolean;
}

interface EnhancedPostProjectProps {
  onSubmit?: (data: ProjectFormData) => void;
  onCancel?: () => void;
  requirePhoneVerification?: boolean;
  isPhoneVerified?: boolean;
}

export function EnhancedPostProject({
  onSubmit,
  onCancel,
  requirePhoneVerification = true,
  isPhoneVerified = false
}: EnhancedPostProjectProps) {
  const [formData, setFormData] = useState<ProjectFormData>({
    projectType: '',
    zipCode: '',
    budgetRange: '',
    startTimeframe: '',
    description: '',
    photos: [],
    squareFootage: '',
    linearFeet: '',
    video: null,
    confirmLooking: false
  });

  const [errors, setErrors] = useState<string[]>([]);
  const [photoPreviewUrls, setPhotoPreviewUrls] = useState<string[]>([]);

  // Exact project types from document
  const projectTypes = [
    'Bathroom Remodel',
    'Kitchen Remodel',
    'Flooring',
    'Interior Painting',
    'Exterior Painting',
    'Tile Work',
    'Plumbing Work',
    'Electrical Work',
    'Multi-Trade Remodel',
    'Other'
  ];

  // Exact budget ranges from document
  const budgetRanges = [
    'Under $5,000',
    '$5,000 – $10,000',
    '$10,000 – $20,000',
    '$20,000 – $40,000',
    '$40,000 – $75,000',
    '$75,000+'
  ];

  // Exact start timeframes from document
  const startTimeframes = [
    'ASAP (0–30 days)',
    '1–2 months',
    '2–3 months',
    '3+ months'
  ];

  const handlePhotoUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(e.target.files || []);
    
    // Check max 20 photos
    if (formData.photos.length + files.length > 20) {
      alert('Maximum 20 photos allowed');
      return;
    }

    // Create preview URLs
    const newPreviews = files.map(file => URL.createObjectURL(file));
    
    setFormData(prev => ({
      ...prev,
      photos: [...prev.photos, ...files]
    }));
    
    setPhotoPreviewUrls(prev => [...prev, ...newPreviews]);
  };

  const removePhoto = (index: number) => {
    // Revoke URL to prevent memory leak
    URL.revokeObjectURL(photoPreviewUrls[index]);
    
    setFormData(prev => ({
      ...prev,
      photos: prev.photos.filter((_, i) => i !== index)
    }));
    
    setPhotoPreviewUrls(prev => prev.filter((_, i) => i !== index));
  };

  const handleVideoUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setFormData(prev => ({ ...prev, video: file }));
    }
  };

  const validate = (): boolean => {
    const newErrors: string[] = [];

    if (!formData.projectType) {
      newErrors.push('Project type is required');
    }

    if (!formData.zipCode) {
      newErrors.push('ZIP code is required');
    } else if (!/^\d{5}$/.test(formData.zipCode)) {
      newErrors.push('ZIP code must be 5 digits');
    }

    if (!formData.budgetRange) {
      newErrors.push('Budget range is required');
    }

    if (!formData.startTimeframe) {
      newErrors.push('Desired start timeframe is required');
    }

    if (!formData.description) {
      newErrors.push('Project description is required');
    } else if (formData.description.length < 150) {
      newErrors.push(`Project description must be at least 150 characters (currently ${formData.description.length})`);
    }

    if (formData.photos.length < 3) {
      newErrors.push(`Minimum 3 photos required (currently ${formData.photos.length})`);
    }

    if (!formData.confirmLooking) {
      newErrors.push('You must confirm you are actively looking to hire');
    }

    setErrors(newErrors);
    return newErrors.length === 0;
  };

  const handleSubmit = () => {
    if (!validate()) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    onSubmit?.(formData);
  };

  // Block posting if phone not verified
  if (requirePhoneVerification && !isPhoneVerified) {
    return (
      <div className="bg-white rounded-xl border-2 border-amber-500 p-8 text-center max-w-2xl mx-auto">
        <AlertCircle className="size-16 text-amber-600 mx-auto mb-4" />
        <h2 className="text-2xl font-bold text-slate-900 mb-2">
          Phone Verification Required
        </h2>
        <p className="text-slate-600 mb-6">
          You must verify your phone number before posting a job.
        </p>
        <button className="bg-[#f9a825] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#e69b20]">
          Verify Phone Number
        </button>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-xl border-2 border-slate-200 p-8 max-w-4xl mx-auto">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-slate-900 mb-2">Post Your Project</h1>
        <p className="text-slate-600">
          Fill out the details below to receive quotes from qualified contractors
        </p>
      </div>

      {/* Errors */}
      {errors.length > 0 && (
        <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg">
          <div className="flex items-start gap-2">
            <AlertCircle className="size-5 text-red-600 flex-shrink-0 mt-0.5" />
            <div>
              <p className="font-semibold text-red-900 mb-2">Please fix the following errors:</p>
              <ul className="list-disc list-inside space-y-1">
                {errors.map((error, i) => (
                  <li key={i} className="text-sm text-red-700">{error}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      )}

      <div className="space-y-6">
        {/* Project Type */}
        <div>
          <label className="block text-sm font-bold text-slate-900 mb-2">
            Project Type *
          </label>
          <select
            value={formData.projectType}
            onChange={(e) => setFormData(prev => ({ ...prev, projectType: e.target.value }))}
            className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-[#f9a825] focus:border-transparent"
          >
            <option value="">Select project type</option>
            {projectTypes.map(type => (
              <option key={type} value={type}>{type}</option>
            ))}
          </select>
        </div>

        {/* ZIP Code */}
        <div>
          <label className="block text-sm font-bold text-slate-900 mb-2 flex items-center gap-2">
            <MapPin className="size-4 text-[#f9a825]" />
            ZIP Code *
          </label>
          <input
            type="text"
            value={formData.zipCode}
            onChange={(e) => setFormData(prev => ({ 
              ...prev, 
              zipCode: e.target.value.replace(/\D/g, '').slice(0, 5) 
            }))}
            placeholder="12345"
            maxLength={5}
            className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-[#f9a825] focus:border-transparent"
          />
        </div>

        {/* Budget Range */}
        <div>
          <label className="block text-sm font-bold text-slate-900 mb-2 flex items-center gap-2">
            <DollarSign className="size-4 text-[#f9a825]" />
            Budget Range *
          </label>
          <select
            value={formData.budgetRange}
            onChange={(e) => setFormData(prev => ({ ...prev, budgetRange: e.target.value }))}
            className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-[#f9a825] focus:border-transparent"
          >
            <option value="">Select budget range</option>
            {budgetRanges.map(range => (
              <option key={range} value={range}>{range}</option>
            ))}
          </select>
          <p className="text-sm text-slate-500 mt-2">
            Note: Contractors will not see your exact budget
          </p>
        </div>

        {/* Start Timeframe */}
        <div>
          <label className="block text-sm font-bold text-slate-900 mb-2 flex items-center gap-2">
            <Calendar className="size-4 text-[#f9a825]" />
            Desired Start Timeframe *
          </label>
          <select
            value={formData.startTimeframe}
            onChange={(e) => setFormData(prev => ({ ...prev, startTimeframe: e.target.value }))}
            className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-[#f9a825] focus:border-transparent"
          >
            <option value="">Select timeframe</option>
            {startTimeframes.map(timeframe => (
              <option key={timeframe} value={timeframe}>{timeframe}</option>
            ))}
          </select>
        </div>

        {/* Project Description */}
        <div>
          <label className="block text-sm font-bold text-slate-900 mb-2 flex items-center gap-2">
            <FileText className="size-4 text-[#f9a825]" />
            Project Description * (minimum 150 characters)
          </label>
          <textarea
            value={formData.description}
            onChange={(e) => setFormData(prev => ({ ...prev, description: e.target.value }))}
            placeholder="Describe your project in detail. Include measurements, layout information, specific requirements, and any other relevant details..."
            rows={6}
            className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-[#f9a825] focus:border-transparent"
          />
          <div className="flex justify-between items-center mt-2">
            <p className={`text-sm ${
              formData.description.length < 150 ? 'text-red-600' : 'text-green-600'
            }`}>
              {formData.description.length}/150 characters
            </p>
            <p className="text-sm text-blue-600 italic">
              💡 The more detail you provide, the more accurate your quotes will be
            </p>
          </div>
        </div>

        {/* Photos Upload */}
        <div>
          <label className="block text-sm font-bold text-slate-900 mb-2 flex items-center gap-2">
            <ImageIcon className="size-4 text-[#f9a825]" />
            Photos * (minimum 3, maximum 20)
          </label>
          
          {/* Upload Button */}
          <div className="mb-4">
            <input
              type="file"
              id="photo-upload"
              multiple
              accept="image/*"
              onChange={handlePhotoUpload}
              className="hidden"
            />
            <label
              htmlFor="photo-upload"
              className="inline-flex items-center gap-2 px-6 py-3 bg-[#f9a825] text-white rounded-lg font-semibold hover:bg-[#e69b20] cursor-pointer transition-colors"
            >
              <Upload className="size-5" />
              Upload Photos ({formData.photos.length}/20)
            </label>
            <p className="text-sm text-slate-500 mt-2">
              {formData.photos.length < 3 
                ? `Need ${3 - formData.photos.length} more photo(s)`
                : '✓ Minimum requirement met'
              }
            </p>
          </div>

          {/* Photo Grid */}
          {photoPreviewUrls.length > 0 && (
            <div className="grid grid-cols-4 gap-4">
              {photoPreviewUrls.map((url, index) => (
                <div key={index} className="relative group">
                  <img
                    src={url}
                    alt={`Preview ${index + 1}`}
                    className="w-full h-32 object-cover rounded-lg border-2 border-slate-200"
                  />
                  <button
                    onClick={() => removePhoto(index)}
                    className="absolute top-2 right-2 size-8 bg-red-500 text-white rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
                  >
                    <X className="size-4" />
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Optional: Square Footage */}
        <div className="grid md:grid-cols-2 gap-6 p-6 bg-slate-50 border border-slate-200 rounded-lg">
          <div>
            <label className="block text-sm font-semibold text-slate-700 mb-2">
              Square Footage (Optional)
            </label>
            <input
              type="number"
              value={formData.squareFootage}
              onChange={(e) => setFormData(prev => ({ ...prev, squareFootage: e.target.value }))}
              placeholder="e.g., 250"
              className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-[#f9a825] focus:border-transparent"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-slate-700 mb-2">
              Linear Feet (Optional)
            </label>
            <input
              type="number"
              value={formData.linearFeet}
              onChange={(e) => setFormData(prev => ({ ...prev, linearFeet: e.target.value }))}
              placeholder="e.g., 40"
              className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-[#f9a825] focus:border-transparent"
            />
          </div>
        </div>

        {/* Optional: Video Upload */}
        <div className="p-6 bg-slate-50 border border-slate-200 rounded-lg">
          <label className="block text-sm font-semibold text-slate-700 mb-2">
            Video Upload (Optional)
          </label>
          <input
            type="file"
            accept="video/*"
            onChange={handleVideoUpload}
            className="w-full px-4 py-3 border border-slate-300 rounded-lg bg-white"
          />
          {formData.video && (
            <p className="text-sm text-green-600 mt-2 flex items-center gap-2">
              <CheckCircle className="size-4" />
              {formData.video.name}
            </p>
          )}
        </div>

        {/* Required Checkbox */}
        <div className="p-6 bg-blue-50 border-2 border-blue-200 rounded-lg">
          <label className="flex items-start gap-3 cursor-pointer">
            <input
              type="checkbox"
              checked={formData.confirmLooking}
              onChange={(e) => setFormData(prev => ({ ...prev, confirmLooking: e.target.checked }))}
              className="mt-1 size-5 text-[#f9a825] focus:ring-[#f9a825] rounded"
            />
            <div>
              <p className="font-semibold text-slate-900">
                I confirm I am actively looking to hire a contractor for this project *
              </p>
              <p className="text-sm text-slate-600 mt-1">
                By checking this box, you confirm that this is a real project and you intend to hire a contractor.
              </p>
            </div>
          </label>
        </div>

        {/* Submit Actions */}
        <div className="flex gap-4 pt-4">
          <button
            onClick={handleSubmit}
            className="flex-1 bg-[#f9a825] text-white py-4 rounded-lg font-bold text-lg hover:bg-[#e69b20] transition-colors flex items-center justify-center gap-2"
          >
            <CheckCircle className="size-5" />
            Post Project
          </button>
          {onCancel && (
            <button
              onClick={onCancel}
              className="px-8 py-4 border-2 border-slate-300 text-slate-700 rounded-lg font-bold hover:bg-slate-50 transition-colors"
            >
              Cancel
            </button>
          )}
        </div>

        {/* Info Box */}
        <div className="p-4 bg-green-50 border border-green-200 rounded-lg">
          <p className="text-sm text-green-800">
            <strong>What happens next:</strong> Your job will be sent to qualified contractors in your area. 
            The job will remain open for 24 hours or until 5 quotes are received (whichever comes first).
          </p>
        </div>
      </div>
    </div>
  );
}

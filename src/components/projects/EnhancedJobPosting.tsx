import { useState } from 'react';
import { Upload, X, AlertCircle, CheckCircle, Calendar, MapPin, DollarSign } from 'lucide-react';

export function EnhancedJobPosting() {
  const [formData, setFormData] = useState({
    title: '',
    category: '',
    description: '',
    zipCode: '',
    budget: '',
    timeline: '',
    photos: [] as File[],
    confirmHiring: false,
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isVerified, setIsVerified] = useState(true); // Assume user is verified for demo

  const categories = [
    'Kitchen Remodeling',
    'Bathroom Remodeling',
    'Room Addition',
    'Deck Installation',
    'Painting',
    'Flooring',
    'Roofing',
    'Plumbing',
    'Electrical',
    'HVAC',
  ];

  const handlePhotoUpload = (files: FileList) => {
    const newPhotos = Array.from(files);
    const totalPhotos = formData.photos.length + newPhotos.length;

    if (totalPhotos > 20) {
      setErrors(prev => ({ ...prev, photos: 'Maximum 20 photos allowed' }));
      return;
    }

    setFormData(prev => ({
      ...prev,
      photos: [...prev.photos, ...newPhotos]
    }));
    setErrors(prev => ({ ...prev, photos: '' }));
  };

  const removePhoto = (index: number) => {
    setFormData(prev => ({
      ...prev,
      photos: prev.photos.filter((_, i) => i !== index)
    }));
  };

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.title.trim()) {
      newErrors.title = 'Project title is required';
    }

    if (!formData.category) {
      newErrors.category = 'Please select a category';
    }

    if (!formData.description.trim()) {
      newErrors.description = 'Project description is required';
    } else if (formData.description.trim().length < 50) {
      newErrors.description = 'Description must be at least 50 characters for accurate quotes';
    }

    if (!formData.zipCode.trim()) {
      newErrors.zipCode = 'ZIP code is required';
    } else if (!/^\d{5}$/.test(formData.zipCode)) {
      newErrors.zipCode = 'Please enter a valid 5-digit ZIP code';
    }

    if (!formData.budget) {
      newErrors.budget = 'Budget range is required';
    }

    if (!formData.timeline) {
      newErrors.timeline = 'Timeline is required';
    }

    if (formData.photos.length < 3) {
      newErrors.photos = 'Minimum 3 photos required';
    }

    if (!formData.confirmHiring) {
      newErrors.confirmHiring = 'Please confirm you are ready to hire';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!isVerified) {
      alert('Please verify your phone number before posting a project');
      return;
    }

    if (validateForm()) {
      // Simulate successful submission
      alert('Project posted successfully! Job is now OPEN with 24-hour countdown started.');
      console.log('Form submitted:', formData);
    }
  };

  return (
    <div className="bg-white rounded-xl p-8 max-w-4xl mx-auto">
      {/* Verification Banner */}
      {!isVerified && (
        <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg flex items-start gap-3">
          <AlertCircle className="size-5 text-red-600 flex-shrink-0 mt-0.5" />
          <div>
            <p className="font-semibold text-red-900">Phone Verification Required</p>
            <p className="text-sm text-red-700">You must verify your phone number before posting projects.</p>
            <button className="mt-2 text-sm text-red-700 underline font-medium">
              Verify Now
            </button>
          </div>
        </div>
      )}

      <div className="mb-8">
        <h1 className="text-3xl font-bold text-slate-900 mb-2">Post Your Project</h1>
        <p className="text-slate-600">Provide detailed information to receive accurate quotes from qualified contractors</p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Project Title */}
        <div>
          <label className="block text-sm font-semibold text-slate-900 mb-2">
            Project Title *
          </label>
          <input
            type="text"
            placeholder="e.g., Master Bathroom Remodel"
            value={formData.title}
            onChange={(e) => setFormData(prev => ({ ...prev, title: e.target.value }))}
            className={`w-full px-4 py-3 border-2 rounded-lg focus:ring-2 focus:ring-[#f9a825] focus:border-transparent ${
              errors.title ? 'border-red-300' : 'border-slate-300'
            }`}
          />
          {errors.title && (
            <p className="mt-1 text-sm text-red-600 flex items-center gap-1">
              <AlertCircle className="size-4" /> {errors.title}
            </p>
          )}
        </div>

        {/* Category */}
        <div>
          <label className="block text-sm font-semibold text-slate-900 mb-2">
            Project Category *
          </label>
          <select
            value={formData.category}
            onChange={(e) => setFormData(prev => ({ ...prev, category: e.target.value }))}
            className={`w-full px-4 py-3 border-2 rounded-lg focus:ring-2 focus:ring-[#f9a825] focus:border-transparent ${
              errors.category ? 'border-red-300' : 'border-slate-300'
            }`}
          >
            <option value="">Select a category</option>
            {categories.map(cat => (
              <option key={cat} value={cat}>{cat}</option>
            ))}
          </select>
          {errors.category && (
            <p className="mt-1 text-sm text-red-600 flex items-center gap-1">
              <AlertCircle className="size-4" /> {errors.category}
            </p>
          )}
        </div>

        {/* Description */}
        <div>
          <label className="block text-sm font-semibold text-slate-900 mb-2">
            Project Description * (Minimum 50 characters)
          </label>
          <p className="text-sm text-slate-600 mb-2 bg-blue-50 p-3 rounded-lg">
            💡 <strong>Tip:</strong> Include specific details like room dimensions, materials preferred, 
            existing conditions, and any special requirements. More details = more accurate quotes!
          </p>
          <textarea
            rows={6}
            placeholder="Describe your project in detail... Include measurements, materials, timeline expectations, and any specific requirements."
            value={formData.description}
            onChange={(e) => setFormData(prev => ({ ...prev, description: e.target.value }))}
            className={`w-full px-4 py-3 border-2 rounded-lg focus:ring-2 focus:ring-[#f9a825] focus:border-transparent ${
              errors.description ? 'border-red-300' : 'border-slate-300'
            }`}
          />
          <div className="flex justify-between items-center mt-1">
            {errors.description ? (
              <p className="text-sm text-red-600 flex items-center gap-1">
                <AlertCircle className="size-4" /> {errors.description}
              </p>
            ) : (
              <p className={`text-sm ${formData.description.length >= 50 ? 'text-green-600' : 'text-slate-500'}`}>
                {formData.description.length} / 50 characters minimum
              </p>
            )}
          </div>
        </div>

        {/* ZIP Code & Budget */}
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-semibold text-slate-900 mb-2">
              ZIP Code *
            </label>
            <div className="relative">
              <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 size-5 text-slate-400" />
              <input
                type="text"
                placeholder="12345"
                maxLength={5}
                value={formData.zipCode}
                onChange={(e) => setFormData(prev => ({ ...prev, zipCode: e.target.value.replace(/\D/g, '') }))}
                className={`w-full pl-10 pr-4 py-3 border-2 rounded-lg focus:ring-2 focus:ring-[#f9a825] focus:border-transparent ${
                  errors.zipCode ? 'border-red-300' : 'border-slate-300'
                }`}
              />
            </div>
            {errors.zipCode && (
              <p className="mt-1 text-sm text-red-600 flex items-center gap-1">
                <AlertCircle className="size-4" /> {errors.zipCode}
              </p>
            )}
          </div>

          <div>
            <label className="block text-sm font-semibold text-slate-900 mb-2">
              Budget Range *
            </label>
            <div className="relative">
              <DollarSign className="absolute left-3 top-1/2 -translate-y-1/2 size-5 text-slate-400" />
              <select
                value={formData.budget}
                onChange={(e) => setFormData(prev => ({ ...prev, budget: e.target.value }))}
                className={`w-full pl-10 pr-4 py-3 border-2 rounded-lg focus:ring-2 focus:ring-[#f9a825] focus:border-transparent ${
                  errors.budget ? 'border-red-300' : 'border-slate-300'
                }`}
              >
                <option value="">Select budget range</option>
                <option value="0-5000">$0 - $5,000</option>
                <option value="5000-10000">$5,000 - $10,000</option>
                <option value="10000-25000">$10,000 - $25,000</option>
                <option value="25000-50000">$25,000 - $50,000</option>
                <option value="50000+">$50,000+</option>
              </select>
            </div>
            {errors.budget && (
              <p className="mt-1 text-sm text-red-600 flex items-center gap-1">
                <AlertCircle className="size-4" /> {errors.budget}
              </p>
            )}
          </div>
        </div>

        {/* Timeline */}
        <div>
          <label className="block text-sm font-semibold text-slate-900 mb-2">
            Desired Timeline *
          </label>
          <div className="relative">
            <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 size-5 text-slate-400" />
            <select
              value={formData.timeline}
              onChange={(e) => setFormData(prev => ({ ...prev, timeline: e.target.value }))}
              className={`w-full pl-10 pr-4 py-3 border-2 rounded-lg focus:ring-2 focus:ring-[#f9a825] focus:border-transparent ${
                errors.timeline ? 'border-red-300' : 'border-slate-300'
              }`}
            >
              <option value="">Select timeline</option>
              <option value="asap">ASAP (Within 1 week)</option>
              <option value="1-2-weeks">1-2 weeks</option>
              <option value="2-4-weeks">2-4 weeks</option>
              <option value="1-3-months">1-3 months</option>
              <option value="3-6-months">3-6 months</option>
              <option value="flexible">Flexible</option>
            </select>
          </div>
          {errors.timeline && (
            <p className="mt-1 text-sm text-red-600 flex items-center gap-1">
              <AlertCircle className="size-4" /> {errors.timeline}
            </p>
          )}
        </div>

        {/* Photo Upload */}
        <div>
          <label className="block text-sm font-semibold text-slate-900 mb-2">
            Project Photos * (Minimum 3, Maximum 20)
          </label>
          <p className="text-sm text-slate-600 mb-3">
            Upload photos of the space, existing conditions, or inspiration images
          </p>

          <div className="border-2 border-dashed border-slate-300 rounded-lg p-6 text-center">
            <input
              type="file"
              id="photo-upload"
              multiple
              accept="image/*"
              onChange={(e) => e.target.files && handlePhotoUpload(e.target.files)}
              className="hidden"
            />
            <label
              htmlFor="photo-upload"
              className="cursor-pointer flex flex-col items-center"
            >
              <Upload className="size-12 text-slate-400 mb-3" />
              <p className="text-slate-700 font-medium mb-1">Click to upload photos</p>
              <p className="text-sm text-slate-500">PNG, JPG up to 10MB each</p>
            </label>
          </div>

          {/* Photo Preview */}
          {formData.photos.length > 0 && (
            <div className="mt-4 grid grid-cols-4 gap-3">
              {formData.photos.map((photo, index) => (
                <div key={index} className="relative group">
                  <img
                    src={URL.createObjectURL(photo)}
                    alt={`Upload ${index + 1}`}
                    className="w-full h-24 object-cover rounded-lg"
                  />
                  <button
                    type="button"
                    onClick={() => removePhoto(index)}
                    className="absolute top-1 right-1 size-6 bg-red-500 text-white rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
                  >
                    <X className="size-4" />
                  </button>
                </div>
              ))}
            </div>
          )}

          <p className={`mt-2 text-sm ${formData.photos.length >= 3 ? 'text-green-600' : 'text-slate-600'}`}>
            {formData.photos.length >= 3 && <CheckCircle className="size-4 inline mr-1" />}
            {formData.photos.length} photo(s) uploaded {formData.photos.length < 3 && `(${3 - formData.photos.length} more required)`}
          </p>

          {errors.photos && (
            <p className="mt-1 text-sm text-red-600 flex items-center gap-1">
              <AlertCircle className="size-4" /> {errors.photos}
            </p>
          )}
        </div>

        {/* Confirmation Checkbox */}
        <div className="bg-amber-50 border-2 border-amber-200 rounded-lg p-4">
          <label className="flex items-start gap-3 cursor-pointer">
            <input
              type="checkbox"
              checked={formData.confirmHiring}
              onChange={(e) => setFormData(prev => ({ ...prev, confirmHiring: e.target.checked }))}
              className="mt-1 size-5 text-[#f9a825] rounded focus:ring-[#f9a825]"
            />
            <div>
              <p className="font-semibold text-slate-900">I confirm I am ready to hire *</p>
              <p className="text-sm text-slate-700 mt-1">
                By checking this box, I confirm that I am seriously considering hiring a contractor 
                for this project and will review quotes from qualified professionals.
              </p>
            </div>
          </label>
          {errors.confirmHiring && (
            <p className="mt-2 text-sm text-red-600 flex items-center gap-1">
              <AlertCircle className="size-4" /> {errors.confirmHiring}
            </p>
          )}
        </div>

        {/* Submit Button */}
        <div className="flex gap-4">
          <button
            type="submit"
            disabled={!isVerified}
            className="flex-1 bg-[#f9a825] text-white py-4 rounded-lg font-semibold text-lg hover:bg-[#f9a825]/90 disabled:opacity-50 disabled:cursor-not-allowed transition-all shadow-lg"
          >
            Post Project (FREE)
          </button>
          <button
            type="button"
            className="px-8 py-4 border-2 border-slate-300 text-slate-700 rounded-lg font-semibold hover:bg-slate-50 transition-all"
          >
            Save Draft
          </button>
        </div>

        {/* Info Box */}
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
          <p className="text-sm text-blue-900">
            <strong>What happens next?</strong><br />
            After posting, your project opens with OPEN status. Qualified contractors in your area 
            will have 24 hours to submit up to 5 quotes. You'll be notified as quotes arrive!
          </p>
        </div>
      </form>
    </div>
  );
}

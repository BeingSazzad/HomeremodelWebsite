import { useState } from 'react';
import { DollarSign, Clock, FileText, AlertCircle, CheckCircle } from 'lucide-react';

interface QuoteFormData {
  laborLow: string;
  laborHigh: string;
  roughMaterialsLow: string;
  roughMaterialsHigh: string;
  finishMaterials: 'included' | 'owner_supplied' | '';
  finishMaterialsAllowanceLow: string;
  finishMaterialsAllowanceHigh: string;
  permitRequired: 'yes' | 'no' | '';
  permitCostLow: string;
  permitCostHigh: string;
  timeline: string;
  quoteValidity: string;
  assumptions: string;
  quoteMessage: string;
}

interface EnhancedQuoteFormProps {
  projectTitle: string;
  onSubmit?: (data: QuoteFormData) => void;
  onCancel?: () => void;
  timeRemaining?: number; // seconds
}

export function EnhancedQuoteForm({ 
  projectTitle, 
  onSubmit, 
  onCancel,
  timeRemaining = 1800 
}: EnhancedQuoteFormProps) {
  const [formData, setFormData] = useState<QuoteFormData>({
    laborLow: '',
    laborHigh: '',
    roughMaterialsLow: '',
    roughMaterialsHigh: '',
    finishMaterials: '',
    finishMaterialsAllowanceLow: '',
    finishMaterialsAllowanceHigh: '',
    permitRequired: '',
    permitCostLow: '',
    permitCostHigh: '',
    timeline: '',
    quoteValidity: '',
    assumptions: '',
    quoteMessage: ''
  });

  const [errors, setErrors] = useState<string[]>([]);
  const [totalLow, setTotalLow] = useState(0);
  const [totalHigh, setTotalHigh] = useState(0);

  // Calculate total whenever relevant fields change
  const calculateTotal = () => {
    let low = 0;
    let high = 0;

    // Labor
    low += parseFloat(formData.laborLow) || 0;
    high += parseFloat(formData.laborHigh) || 0;

    // Rough Materials
    low += parseFloat(formData.roughMaterialsLow) || 0;
    high += parseFloat(formData.roughMaterialsHigh) || 0;

    // Finish Materials (if included)
    if (formData.finishMaterials === 'included') {
      low += parseFloat(formData.finishMaterialsAllowanceLow) || 0;
      high += parseFloat(formData.finishMaterialsAllowanceHigh) || 0;
    }

    // Permit (if required)
    if (formData.permitRequired === 'yes') {
      low += parseFloat(formData.permitCostLow) || 0;
      high += parseFloat(formData.permitCostHigh) || 0;
    }

    setTotalLow(low);
    setTotalHigh(high);
  };

  const handleChange = (field: keyof QuoteFormData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    setTimeout(calculateTotal, 0);
  };

  const validate = (): boolean => {
    const newErrors: string[] = [];

    if (!formData.laborLow || !formData.laborHigh) {
      newErrors.push('Labor estimate range is required');
    } else if (parseFloat(formData.laborLow) > parseFloat(formData.laborHigh)) {
      newErrors.push('Labor low estimate cannot be higher than high estimate');
    }

    if (!formData.roughMaterialsLow || !formData.roughMaterialsHigh) {
      newErrors.push('Rough materials range is required');
    } else if (parseFloat(formData.roughMaterialsLow) > parseFloat(formData.roughMaterialsHigh)) {
      newErrors.push('Rough materials low cannot be higher than high');
    }

    if (!formData.finishMaterials) {
      newErrors.push('Please select finish materials option');
    }

    if (formData.finishMaterials === 'included') {
      if (!formData.finishMaterialsAllowanceLow || !formData.finishMaterialsAllowanceHigh) {
        newErrors.push('Finish materials allowance range is required when included');
      }
    }

    if (!formData.permitRequired) {
      newErrors.push('Please specify if permit is required');
    }

    if (formData.permitRequired === 'yes') {
      if (!formData.permitCostLow || !formData.permitCostHigh) {
        newErrors.push('Permit cost range is required when permit is required');
      }
    }

    if (!formData.timeline) {
      newErrors.push('Timeline is required');
    }

    if (!formData.quoteValidity) {
      newErrors.push('Quote validity is required');
    }

    if (!formData.assumptions || formData.assumptions.trim().length < 20) {
      newErrors.push('Assumptions must be at least 20 characters');
    }

    if (!formData.quoteMessage || formData.quoteMessage.trim().length < 20) {
      newErrors.push('Quote message must be at least 20 characters');
    }

    setErrors(newErrors);
    return newErrors.length === 0;
  };

  const handleSubmit = () => {
    if (!validate()) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    if (confirm('⚠️ WARNING: Once submitted, this quote is permanently locked and cannot be edited or deleted. Continue?')) {
      onSubmit?.(formData);
    }
  };

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  return (
    <div className="bg-white rounded-xl border-2 border-slate-200 p-8">
      {/* Header with Timer */}
      <div className="mb-8">
        <div className="flex items-center justify-between mb-4">
          <div>
            <h2 className="text-2xl font-bold text-slate-900 mb-1">Submit Quote</h2>
            <p className="text-slate-600">{projectTitle}</p>
          </div>
          {timeRemaining > 0 && (
            <div className={`px-4 py-2 rounded-lg ${
              timeRemaining < 300 ? 'bg-red-100 border-2 border-red-500' : 'bg-amber-100 border-2 border-amber-500'
            }`}>
              <div className="flex items-center gap-2">
                <Clock className={`size-5 ${timeRemaining < 300 ? 'text-red-600' : 'text-amber-600'}`} />
                <div>
                  <p className={`text-sm font-semibold ${timeRemaining < 300 ? 'text-red-900' : 'text-amber-900'}`}>
                    Time Remaining
                  </p>
                  <p className={`text-2xl font-bold ${timeRemaining < 300 ? 'text-red-600' : 'text-amber-600'}`}>
                    {formatTime(timeRemaining)}
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Errors */}
        {errors.length > 0 && (
          <div className="p-4 bg-red-50 border border-red-200 rounded-lg">
            <div className="flex items-start gap-2 mb-2">
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
      </div>

      <div className="space-y-8">
        {/* Labor Estimate */}
        <div className="p-6 bg-slate-50 border border-slate-200 rounded-xl">
          <h3 className="font-bold text-slate-900 mb-4 flex items-center gap-2">
            <DollarSign className="size-5 text-[#f9a825]" />
            Labor Estimate *
          </h3>
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-2">
                Low Estimate ($)
              </label>
              <input
                type="number"
                value={formData.laborLow}
                onChange={(e) => handleChange('laborLow', e.target.value)}
                placeholder="5000"
                className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-[#f9a825] focus:border-transparent"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-2">
                High Estimate ($)
              </label>
              <input
                type="number"
                value={formData.laborHigh}
                onChange={(e) => handleChange('laborHigh', e.target.value)}
                placeholder="7000"
                className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-[#f9a825] focus:border-transparent"
              />
            </div>
          </div>
        </div>

        {/* Rough Materials */}
        <div className="p-6 bg-slate-50 border border-slate-200 rounded-xl">
          <h3 className="font-bold text-slate-900 mb-4 flex items-center gap-2">
            <DollarSign className="size-5 text-[#f9a825]" />
            Rough Materials *
          </h3>
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-2">
                Low Estimate ($)
              </label>
              <input
                type="number"
                value={formData.roughMaterialsLow}
                onChange={(e) => handleChange('roughMaterialsLow', e.target.value)}
                placeholder="2000"
                className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-[#f9a825] focus:border-transparent"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-2">
                High Estimate ($)
              </label>
              <input
                type="number"
                value={formData.roughMaterialsHigh}
                onChange={(e) => handleChange('roughMaterialsHigh', e.target.value)}
                placeholder="3000"
                className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-[#f9a825] focus:border-transparent"
              />
            </div>
          </div>
        </div>

        {/* Finish Materials */}
        <div className="p-6 bg-slate-50 border border-slate-200 rounded-xl">
          <h3 className="font-bold text-slate-900 mb-4">Finish Materials *</h3>
          <div className="space-y-4">
            <div className="flex gap-4">
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="radio"
                  name="finishMaterials"
                  value="included"
                  checked={formData.finishMaterials === 'included'}
                  onChange={(e) => handleChange('finishMaterials', e.target.value)}
                  className="size-4 text-[#f9a825] focus:ring-[#f9a825]"
                />
                <span className="text-slate-700 font-medium">Included (Allowance)</span>
              </label>
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="radio"
                  name="finishMaterials"
                  value="owner_supplied"
                  checked={formData.finishMaterials === 'owner_supplied'}
                  onChange={(e) => handleChange('finishMaterials', e.target.value)}
                  className="size-4 text-[#f9a825] focus:ring-[#f9a825]"
                />
                <span className="text-slate-700 font-medium">Owner Supplied</span>
              </label>
            </div>

            {formData.finishMaterials === 'included' && (
              <div className="grid md:grid-cols-2 gap-4 pt-4 border-t border-slate-300">
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">
                    Allowance Low ($)
                  </label>
                  <input
                    type="number"
                    value={formData.finishMaterialsAllowanceLow}
                    onChange={(e) => handleChange('finishMaterialsAllowanceLow', e.target.value)}
                    placeholder="3000"
                    className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-[#f9a825] focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">
                    Allowance High ($)
                  </label>
                  <input
                    type="number"
                    value={formData.finishMaterialsAllowanceHigh}
                    onChange={(e) => handleChange('finishMaterialsAllowanceHigh', e.target.value)}
                    placeholder="5000"
                    className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-[#f9a825] focus:border-transparent"
                  />
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Permit Cost */}
        <div className="p-6 bg-slate-50 border border-slate-200 rounded-xl">
          <h3 className="font-bold text-slate-900 mb-4">Permit Required? *</h3>
          <div className="space-y-4">
            <div className="flex gap-4">
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="radio"
                  name="permitRequired"
                  value="yes"
                  checked={formData.permitRequired === 'yes'}
                  onChange={(e) => handleChange('permitRequired', e.target.value)}
                  className="size-4 text-[#f9a825] focus:ring-[#f9a825]"
                />
                <span className="text-slate-700 font-medium">Yes</span>
              </label>
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="radio"
                  name="permitRequired"
                  value="no"
                  checked={formData.permitRequired === 'no'}
                  onChange={(e) => handleChange('permitRequired', e.target.value)}
                  className="size-4 text-[#f9a825] focus:ring-[#f9a825]"
                />
                <span className="text-slate-700 font-medium">No</span>
              </label>
            </div>

            {formData.permitRequired === 'yes' && (
              <div className="grid md:grid-cols-2 gap-4 pt-4 border-t border-slate-300">
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">
                    Permit Cost Low ($)
                  </label>
                  <input
                    type="number"
                    value={formData.permitCostLow}
                    onChange={(e) => handleChange('permitCostLow', e.target.value)}
                    placeholder="500"
                    className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-[#f9a825] focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">
                    Permit Cost High ($)
                  </label>
                  <input
                    type="number"
                    value={formData.permitCostHigh}
                    onChange={(e) => handleChange('permitCostHigh', e.target.value)}
                    placeholder="800"
                    className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-[#f9a825] focus:border-transparent"
                  />
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Timeline & Quote Validity */}
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-semibold text-slate-900 mb-2">
              Project Timeline *
            </label>
            <select
              value={formData.timeline}
              onChange={(e) => handleChange('timeline', e.target.value)}
              className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-[#f9a825] focus:border-transparent"
            >
              <option value="">Select timeline</option>
              <option value="1-2-days">1–2 days</option>
              <option value="3-5-days">3–5 days</option>
              <option value="1-2-weeks">1–2 weeks</option>
              <option value="2-4-weeks">2–4 weeks</option>
              <option value="1-2-months">1–2 months</option>
              <option value="2-plus-months">2+ months</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-semibold text-slate-900 mb-2">
              Quote Valid For *
            </label>
            <select
              value={formData.quoteValidity}
              onChange={(e) => handleChange('quoteValidity', e.target.value)}
              className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-[#f9a825] focus:border-transparent"
            >
              <option value="">Select validity</option>
              <option value="3">3 days</option>
              <option value="5">5 days</option>
              <option value="7">7 days</option>
              <option value="10">10 days</option>
              <option value="14">14 days</option>
              <option value="21">21 days</option>
              <option value="30">30 days</option>
            </select>
          </div>
        </div>

        {/* Assumptions */}
        <div>
          <label className="block text-sm font-semibold text-slate-900 mb-2">
            Assumptions & Exclusions * (min 20 characters)
          </label>
          <textarea
            value={formData.assumptions}
            onChange={(e) => handleChange('assumptions', e.target.value)}
            placeholder="Example: Quote assumes standard grade materials, normal working hours, no structural issues discovered..."
            rows={4}
            className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-[#f9a825] focus:border-transparent"
          />
          <p className="text-sm text-slate-500 mt-1">
            {formData.assumptions.length}/20 characters minimum
          </p>
        </div>

        {/* Quote Message */}
        <div>
          <label className="block text-sm font-semibold text-slate-900 mb-2">
            Message to Homeowner * (min 20 characters - ONE message only)
          </label>
          <textarea
            value={formData.quoteMessage}
            onChange={(e) => handleChange('quoteMessage', e.target.value)}
            placeholder="Introduce yourself and explain why you're the right choice for this project..."
            rows={5}
            className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-[#f9a825] focus:border-transparent"
          />
          <p className="text-sm text-slate-500 mt-1">
            {formData.quoteMessage.length}/20 characters minimum
          </p>
          <p className="text-sm text-amber-600 mt-2 font-semibold">
            ⚠️ This will be your only message until the homeowner accepts your chat.
          </p>
        </div>

        {/* Total Summary */}
        <div className="p-6 bg-gradient-to-br from-[#f9a825]/10 to-[#e69b20]/10 border-2 border-[#f9a825] rounded-xl">
          <h3 className="font-bold text-slate-900 mb-4">Total Quote Range</h3>
          <div className="flex items-baseline gap-4">
            <div className="flex-1">
              <p className="text-sm text-slate-600 mb-1">Low Estimate</p>
              <p className="text-3xl font-bold text-slate-900">
                ${totalLow.toLocaleString()}
              </p>
            </div>
            <div className="text-2xl text-slate-400">—</div>
            <div className="flex-1">
              <p className="text-sm text-slate-600 mb-1">High Estimate</p>
              <p className="text-3xl font-bold text-slate-900">
                ${totalHigh.toLocaleString()}
              </p>
            </div>
          </div>
        </div>

        {/* Warning */}
        <div className="p-4 bg-red-50 border-2 border-red-500 rounded-lg">
          <div className="flex gap-3">
            <AlertCircle className="size-6 text-red-600 flex-shrink-0" />
            <div>
              <p className="font-bold text-red-900 mb-1">
                ⚠️ IMPORTANT: Quote is Permanently Locked After Submission
              </p>
              <p className="text-sm text-red-700">
                Once submitted, this quote cannot be edited, deleted, or changed in any way. 
                Please review all information carefully before submitting.
              </p>
            </div>
          </div>
        </div>

        {/* Actions */}
        <div className="flex gap-4 pt-4">
          <button
            onClick={handleSubmit}
            className="flex-1 bg-[#f9a825] text-white py-4 rounded-lg font-bold text-lg hover:bg-[#e69b20] transition-colors flex items-center justify-center gap-2"
          >
            <CheckCircle className="size-5" />
            Submit Quote (Permanent)
          </button>
          <button
            onClick={onCancel}
            className="px-8 py-4 border-2 border-slate-300 text-slate-700 rounded-lg font-bold hover:bg-slate-50 transition-colors"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}

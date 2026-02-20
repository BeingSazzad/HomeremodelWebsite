import { useState } from 'react';
import { Wrench, DollarSign, CheckCircle, AlertCircle } from 'lucide-react';

interface TradeCategory {
  id: string;
  name: string;
  requiresPermit: boolean;
}

const tradeCategories: TradeCategory[] = [
  { id: 'kitchen', name: 'Kitchen Remodeling', requiresPermit: true },
  { id: 'bathroom', name: 'Bathroom Remodeling', requiresPermit: true },
  { id: 'addition', name: 'Room Addition', requiresPermit: true },
  { id: 'deck', name: 'Deck Installation', requiresPermit: true },
  { id: 'painting', name: 'Painting', requiresPermit: false },
  { id: 'flooring', name: 'Flooring', requiresPermit: false },
  { id: 'roofing', name: 'Roofing', requiresPermit: true },
  { id: 'plumbing', name: 'Plumbing', requiresPermit: true },
  { id: 'electrical', name: 'Electrical', requiresPermit: true },
  { id: 'hvac', name: 'HVAC', requiresPermit: true },
];

interface Pricing {
  laborRateType: 'hourly' | 'per_sqft' | 'fixed' | '';
  hourlyRate?: number;
  sqftRate?: number;
  permitCostIncluded?: boolean;
  estimatedPermitCost?: number;
}

export function TradeAndPricing() {
  const [selectedTrades, setSelectedTrades] = useState<string[]>([]);
  const [pricing, setPricing] = useState<Record<string, Pricing>>({});
  const [errors, setErrors] = useState<string[]>([]);

  const handleTradeToggle = (tradeId: string) => {
    setSelectedTrades(prev => {
      if (prev.includes(tradeId)) {
        // Remove trade and its pricing
        const newPricing = { ...pricing };
        delete newPricing[tradeId];
        setPricing(newPricing);
        return prev.filter(id => id !== tradeId);
      } else {
        // Add trade with default pricing
        setPricing(prev => ({
          ...prev,
          [tradeId]: { laborRateType: '' }
        }));
        return [...prev, tradeId];
      }
    });
  };

  const updatePricing = (tradeId: string, updates: Partial<Pricing>) => {
    setPricing(prev => ({
      ...prev,
      [tradeId]: { ...prev[tradeId], ...updates }
    }));
  };

  const validateAndSubmit = () => {
    const newErrors: string[] = [];

    if (selectedTrades.length === 0) {
      newErrors.push('Please select at least one trade category');
    }

    selectedTrades.forEach(tradeId => {
      const tradePricing = pricing[tradeId];
      const trade = tradeCategories.find(t => t.id === tradeId);

      if (!tradePricing.laborRateType) {
        newErrors.push(`${trade?.name}: Please select a labor rate type`);
      }

      if (tradePricing.laborRateType === 'hourly' && !tradePricing.hourlyRate) {
        newErrors.push(`${trade?.name}: Please enter hourly rate`);
      }

      if (tradePricing.laborRateType === 'per_sqft' && !tradePricing.sqftRate) {
        newErrors.push(`${trade?.name}: Please enter per sq ft rate`);
      }

      if (trade?.requiresPermit && tradePricing.permitCostIncluded && !tradePricing.estimatedPermitCost) {
        newErrors.push(`${trade?.name}: Please enter estimated permit cost`);
      }
    });

    setErrors(newErrors);

    if (newErrors.length === 0) {
      alert('Trade and pricing saved successfully!');
      console.log('Saved data:', { selectedTrades, pricing });
    }
  };

  return (
    <div className="bg-white rounded-xl p-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-slate-900 mb-2">Trade Categories & Pricing</h1>
        <p className="text-slate-600">Select your trade specialties and set pricing structure</p>
      </div>

      {/* Errors */}
      {errors.length > 0 && (
        <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg">
          <div className="flex items-start gap-2 mb-2">
            <AlertCircle className="size-5 text-red-600 flex-shrink-0" />
            <p className="font-semibold text-red-900">Please fix the following errors:</p>
          </div>
          <ul className="list-disc list-inside space-y-1 ml-7">
            {errors.map((error, index) => (
              <li key={index} className="text-sm text-red-700">{error}</li>
            ))}
          </ul>
        </div>
      )}

      {/* Trade Selection */}
      <div className="mb-8">
        <h2 className="text-xl font-semibold text-slate-900 mb-4">
          Select Your Trade Categories * (At least 1 required)
        </h2>
        <div className="grid md:grid-cols-2 gap-3">
          {tradeCategories.map(trade => (
            <label
              key={trade.id}
              className={`flex items-center gap-3 p-4 border-2 rounded-lg cursor-pointer transition-all ${
                selectedTrades.includes(trade.id)
                  ? 'border-[#f9a825] bg-[#f9a825]/5'
                  : 'border-slate-300 hover:border-slate-400'
              }`}
            >
              <input
                type="checkbox"
                checked={selectedTrades.includes(trade.id)}
                onChange={() => handleTradeToggle(trade.id)}
                className="size-5 text-[#f9a825] rounded focus:ring-[#f9a825]"
              />
              <div className="flex-1">
                <p className="font-semibold text-slate-900">{trade.name}</p>
                {trade.requiresPermit && (
                  <p className="text-xs text-slate-500">Typically requires permits</p>
                )}
              </div>
              {selectedTrades.includes(trade.id) && (
                <CheckCircle className="size-5 text-[#f9a825]" />
              )}
            </label>
          ))}
        </div>
      </div>

      {/* Pricing Configuration */}
      {selectedTrades.length > 0 && (
        <div className="space-y-6">
          <h2 className="text-xl font-semibold text-slate-900">Pricing Structure</h2>

          {selectedTrades.map(tradeId => {
            const trade = tradeCategories.find(t => t.id === tradeId);
            const tradePricing = pricing[tradeId] || { laborRateType: '' };

            return (
              <div key={tradeId} className="p-6 border-2 border-slate-200 rounded-xl">
                <div className="flex items-center gap-3 mb-4">
                  <div className="size-10 bg-[#f9a825]/10 rounded-lg flex items-center justify-center">
                    <Wrench className="size-5 text-[#f9a825]" />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900">{trade?.name}</h3>
                </div>

                {/* Labor Rate Type */}
                <div className="mb-4">
                  <label className="block text-sm font-semibold text-slate-900 mb-2">
                    Labor Rate Type *
                  </label>
                  <div className="grid md:grid-cols-3 gap-3">
                    <label className={`flex items-center justify-center gap-2 p-3 border-2 rounded-lg cursor-pointer transition-all ${
                      tradePricing.laborRateType === 'hourly'
                        ? 'border-[#f9a825] bg-[#f9a825]/5'
                        : 'border-slate-300 hover:border-slate-400'
                    }`}>
                      <input
                        type="radio"
                        name={`rate-${tradeId}`}
                        value="hourly"
                        checked={tradePricing.laborRateType === 'hourly'}
                        onChange={(e) => updatePricing(tradeId, { laborRateType: e.target.value as any })}
                        className="text-[#f9a825] focus:ring-[#f9a825]"
                      />
                      <span className="font-medium">Hourly Rate</span>
                    </label>
                    <label className={`flex items-center justify-center gap-2 p-3 border-2 rounded-lg cursor-pointer transition-all ${
                      tradePricing.laborRateType === 'per_sqft'
                        ? 'border-[#f9a825] bg-[#f9a825]/5'
                        : 'border-slate-300 hover:border-slate-400'
                    }`}>
                      <input
                        type="radio"
                        name={`rate-${tradeId}`}
                        value="per_sqft"
                        checked={tradePricing.laborRateType === 'per_sqft'}
                        onChange={(e) => updatePricing(tradeId, { laborRateType: e.target.value as any })}
                        className="text-[#f9a825] focus:ring-[#f9a825]"
                      />
                      <span className="font-medium">Per Sq Ft</span>
                    </label>
                    <label className={`flex items-center justify-center gap-2 p-3 border-2 rounded-lg cursor-pointer transition-all ${
                      tradePricing.laborRateType === 'fixed'
                        ? 'border-[#f9a825] bg-[#f9a825]/5'
                        : 'border-slate-300 hover:border-slate-400'
                    }`}>
                      <input
                        type="radio"
                        name={`rate-${tradeId}`}
                        value="fixed"
                        checked={tradePricing.laborRateType === 'fixed'}
                        onChange={(e) => updatePricing(tradeId, { laborRateType: e.target.value as any })}
                        className="text-[#f9a825] focus:ring-[#f9a825]"
                      />
                      <span className="font-medium">Fixed Price</span>
                    </label>
                  </div>
                </div>

                {/* Conditional Rate Input */}
                {tradePricing.laborRateType === 'hourly' && (
                  <div className="mb-4">
                    <label className="block text-sm font-semibold text-slate-900 mb-2">
                      Hourly Rate *
                    </label>
                    <div className="relative">
                      <DollarSign className="absolute left-3 top-1/2 -translate-y-1/2 size-5 text-slate-400" />
                      <input
                        type="number"
                        placeholder="e.g., 75"
                        value={tradePricing.hourlyRate || ''}
                        onChange={(e) => updatePricing(tradeId, { hourlyRate: Number(e.target.value) })}
                        className="w-full pl-10 pr-4 py-3 border-2 border-slate-300 rounded-lg focus:ring-2 focus:ring-[#f9a825] focus:border-transparent"
                      />
                    </div>
                  </div>
                )}

                {tradePricing.laborRateType === 'per_sqft' && (
                  <div className="mb-4">
                    <label className="block text-sm font-semibold text-slate-900 mb-2">
                      Rate Per Square Foot *
                    </label>
                    <div className="relative">
                      <DollarSign className="absolute left-3 top-1/2 -translate-y-1/2 size-5 text-slate-400" />
                      <input
                        type="number"
                        placeholder="e.g., 15"
                        value={tradePricing.sqftRate || ''}
                        onChange={(e) => updatePricing(tradeId, { sqftRate: Number(e.target.value) })}
                        className="w-full pl-10 pr-4 py-3 border-2 border-slate-300 rounded-lg focus:ring-2 focus:ring-[#f9a825] focus:border-transparent"
                      />
                    </div>
                  </div>
                )}

                {/* Permit Cost (Conditional) */}
                {trade?.requiresPermit && (
                  <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                    <label className="flex items-start gap-2 cursor-pointer mb-3">
                      <input
                        type="checkbox"
                        checked={tradePricing.permitCostIncluded || false}
                        onChange={(e) => updatePricing(tradeId, { permitCostIncluded: e.target.checked })}
                        className="mt-1 size-4 text-[#f9a825] rounded focus:ring-[#f9a825]"
                      />
                      <div>
                        <p className="font-semibold text-blue-900">Include permit costs in quotes</p>
                        <p className="text-sm text-blue-700">Typically required for {trade.name}</p>
                      </div>
                    </label>

                    {tradePricing.permitCostIncluded && (
                      <div>
                        <label className="block text-sm font-semibold text-blue-900 mb-2">
                          Estimated Permit Cost Range *
                        </label>
                        <div className="relative">
                          <DollarSign className="absolute left-3 top-1/2 -translate-y-1/2 size-5 text-blue-600" />
                          <input
                            type="number"
                            placeholder="e.g., 500"
                            value={tradePricing.estimatedPermitCost || ''}
                            onChange={(e) => updatePricing(tradeId, { estimatedPermitCost: Number(e.target.value) })}
                            className="w-full pl-10 pr-4 py-3 border-2 border-blue-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white"
                          />
                        </div>
                        <p className="text-xs text-blue-700 mt-1">Average permit cost for this type of work</p>
                      </div>
                    )}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      )}

      {/* Submit Button */}
      {selectedTrades.length > 0 && (
        <div className="mt-8 flex gap-4">
          <button
            onClick={validateAndSubmit}
            className="flex-1 bg-[#f9a825] text-white py-4 rounded-lg font-semibold text-lg hover:bg-[#f9a825]/90 transition-all shadow-lg"
          >
            Save Trade & Pricing Configuration
          </button>
          <button
            className="px-8 py-4 border-2 border-slate-300 text-slate-700 rounded-lg font-semibold hover:bg-slate-50 transition-all"
          >
            Cancel
          </button>
        </div>
      )}

      {/* Info Box */}
      <div className="mt-6 p-4 bg-amber-50 border border-amber-200 rounded-lg">
        <p className="text-sm text-amber-900">
          <strong>Note:</strong> Your pricing structure helps homeowners understand your rates. 
          You can always provide custom quotes based on specific project requirements.
        </p>
      </div>
    </div>
  );
}

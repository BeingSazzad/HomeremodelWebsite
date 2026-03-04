import { useState } from 'react';
import { Wrench, DollarSign, CheckCircle, AlertCircle } from 'lucide-react';

interface TradeCategory {
  id: string;
  name: string;
  requiresPermit: boolean;
  type: 'remodel' | 'painting' | 'trade';
}

const tradeCategories: TradeCategory[] = [
  { id: 'kitchen', name: 'Kitchen Remodeling', requiresPermit: true, type: 'remodel' },
  { id: 'bathroom', name: 'Bathroom Remodeling', requiresPermit: true, type: 'remodel' },
  { id: 'addition', name: 'Room Addition', requiresPermit: true, type: 'remodel' },
  { id: 'deck', name: 'Deck Installation', requiresPermit: true, type: 'remodel' },
  { id: 'painting_interior', name: 'Interior Painting', requiresPermit: false, type: 'painting' },
  { id: 'painting_exterior', name: 'Exterior Painting', requiresPermit: false, type: 'painting' },
  { id: 'flooring', name: 'Flooring', requiresPermit: false, type: 'remodel' },
  { id: 'tile', name: 'Tile Work', requiresPermit: false, type: 'remodel' },
  { id: 'roofing', name: 'Roofing', requiresPermit: true, type: 'trade' },
  { id: 'plumbing', name: 'Plumbing', requiresPermit: true, type: 'trade' },
  { id: 'electrical', name: 'Electrical', requiresPermit: true, type: 'trade' },
  { id: 'hvac', name: 'HVAC', requiresPermit: true, type: 'trade' },
];

interface Pricing {
  // General
  minimumJobFee: string;
  laborRateType: 'flat' | 'per_sqft' | 'per_linear_ft' | 'per_fixture' | 'per_hour' | '';
  
  // Labor Estimate
  laborLow: string;
  laborHigh: string;
  hourlyRate?: string;
  sqftRate?: string;
  
  // Rough Materials
  roughMaterialsLow: string;
  roughMaterialsHigh: string;
  
  // Finish Materials
  finishMaterials: 'included' | 'owner_supplied' | '';
  finishMaterialsAllowanceLow: string;
  finishMaterialsAllowanceHigh: string;
  
  // Permit
  permitRequired: 'yes' | 'no' | '';
  permitCostLow: string;
  permitCostHigh: string;
}

export function TradeAndPricing() {
  const [selectedTrades, setSelectedTrades] = useState<string[]>([]);
  const [pricing, setPricing] = useState<Record<string, Pricing>>({});
  const [serviceZipCodes, setServiceZipCodes] = useState<string[]>(['']);
  const [errors, setErrors] = useState<string[]>([]);

  const handleTradeToggle = (tradeId: string) => {
    setSelectedTrades(prev => {
      if (prev.includes(tradeId)) {
        const newPricing = { ...pricing };
        delete newPricing[tradeId];
        setPricing(newPricing);
        return prev.filter(id => id !== tradeId);
      } else {
        setPricing(prev => ({
          ...prev,
          [tradeId]: {
            minimumJobFee: '',
            laborRateType: '',
            laborLow: '',
            laborHigh: '',
            roughMaterialsLow: '',
            roughMaterialsHigh: '',
            finishMaterials: '',
            finishMaterialsAllowanceLow: '',
            finishMaterialsAllowanceHigh: '',
            permitRequired: '',
            permitCostLow: '',
            permitCostHigh: ''
          }
        }));
        return [...prev, tradeId];
      }
    });
  };

  const updatePricing = (tradeId: string, field: keyof Pricing, value: string) => {
    setPricing(prev => ({
      ...prev,
      [tradeId]: { ...prev[tradeId], [field]: value }
    }));
  };

  const addZipCode = () => {
    setServiceZipCodes([...serviceZipCodes, '']);
  };

  const updateZipCode = (index: number, value: string) => {
    const newZips = [...serviceZipCodes];
    newZips[index] = value.replace(/\D/g, '').slice(0, 5);
    setServiceZipCodes(newZips);
  };

  const removeZipCode = (index: number) => {
    setServiceZipCodes(serviceZipCodes.filter((_, i) => i !== index));
  };

  const validateAndSubmit = () => {
    const newErrors: string[] = [];

    if (selectedTrades.length === 0) {
      newErrors.push('Please select at least one trade category');
    }

    // Validate ZIP codes
    const validZips = serviceZipCodes.filter(zip => /^\d{5}$/.test(zip));
    if (validZips.length === 0) {
      newErrors.push('Please add at least one valid service ZIP code');
    }

    selectedTrades.forEach(tradeId => {
      const tradePricing = pricing[tradeId];
      const trade = tradeCategories.find(t => t.id === tradeId);

      if (!tradePricing.minimumJobFee) {
        newErrors.push(`${trade?.name}: Minimum job fee is required`);
      }

      if (!tradePricing.laborRateType) {
        newErrors.push(`${trade?.name}: Please select a labor rate type`);
      }

      if (trade?.type === 'remodel') {
        if (!tradePricing.laborLow || !tradePricing.laborHigh) {
          newErrors.push(`${trade?.name}: Labor estimate range is required`);
        }
        if (!tradePricing.roughMaterialsLow || !tradePricing.roughMaterialsHigh) {
          newErrors.push(`${trade?.name}: Rough materials range is required`);
        }
        if (!tradePricing.finishMaterials) {
          newErrors.push(`${trade?.name}: Please select finish materials option`);
        }
        if (tradePricing.finishMaterials === 'included' && (!tradePricing.finishMaterialsAllowanceLow || !tradePricing.finishMaterialsAllowanceHigh)) {
          newErrors.push(`${trade?.name}: Finish materials allowance range is required`);
        }
      }

      if (trade?.type === 'painting') {
        if (!tradePricing.sqftRate) {
          newErrors.push(`${trade?.name}: Per sq ft rate is required`);
        }
        if (!tradePricing.roughMaterialsLow || !tradePricing.roughMaterialsHigh) {
          newErrors.push(`${trade?.name}: Materials range is required`);
        }
      }

      if (trade?.type === 'trade') {
        if (!tradePricing.laborLow || !tradePricing.laborHigh) {
          newErrors.push(`${trade?.name}: Labor range is required`);
        }
        if (!tradePricing.roughMaterialsLow || !tradePricing.roughMaterialsHigh) {
          newErrors.push(`${trade?.name}: Materials range is required`);
        }
      }

      if (!tradePricing.permitRequired) {
        newErrors.push(`${trade?.name}: Please specify if permit is required`);
      }

      if (tradePricing.permitRequired === 'yes' && (!tradePricing.permitCostLow || !tradePricing.permitCostHigh)) {
        newErrors.push(`${trade?.name}: Permit cost range is required when permit is required`);
      }
    });

    setErrors(newErrors);

    if (newErrors.length === 0) {
      alert('Trade and pricing saved successfully!');
      console.log('Saved data:', { selectedTrades, pricing, serviceZipCodes: validZips });
    }
  };

  return (
    <div className="bg-white rounded-xl p-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-slate-900 mb-2">Trades & Pricing</h1>
        <p className="text-slate-500">Select your trade categories and configure pricing</p>
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

      {/* Service ZIP Codes */}
      <div className="mb-8 p-6 bg-slate-50 border-2 border-slate-200 rounded-xl">
        <h3 className="font-bold text-slate-900 mb-4 flex items-center gap-2">
          <DollarSign className="size-5 text-[#f9a825]" />
          Service ZIP Codes *
        </h3>
        <p className="text-sm text-slate-600 mb-4">
          Add all ZIP codes you serve. Jobs from these areas will be sent to you automatically.
        </p>
        <div className="space-y-3">
          {serviceZipCodes.map((zip, index) => (
            <div key={index} className="flex gap-3">
              <input
                type="text"
                value={zip}
                onChange={(e) => updateZipCode(index, e.target.value)}
                placeholder="12345"
                maxLength={5}
                className="flex-1 px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-[#f9a825] focus:border-transparent"
              />
              {serviceZipCodes.length > 1 && (
                <button
                  onClick={() => removeZipCode(index)}
                  className="px-4 py-3 border-2 border-red-300 text-red-700 rounded-lg font-semibold hover:bg-red-50"
                >
                  Remove
                </button>
              )}
            </div>
          ))}
          <button
            onClick={addZipCode}
            className="px-4 py-2 bg-[#f9a825] text-white rounded-lg font-semibold hover:bg-[#e69b20]"
          >
            + Add ZIP Code
          </button>
        </div>
      </div>

      {/* Trade Categories */}
      <div className="mb-8">
        <h3 className="font-bold text-slate-900 mb-4 flex items-center gap-2">
          <Wrench className="size-5 text-[#f9a825]" />
          Select Trade Categories *
        </h3>
        <div className="grid md:grid-cols-3 gap-4">
          {tradeCategories.map(trade => (
            <label
              key={trade.id}
              className={`p-4 border-2 rounded-lg cursor-pointer transition-all ${
                selectedTrades.includes(trade.id)
                  ? 'border-[#f9a825] bg-[#f9a825]/5'
                  : 'border-slate-200 hover:border-slate-300'
              }`}
            >
              <div className="flex items-center gap-3">
                <input
                  type="checkbox"
                  checked={selectedTrades.includes(trade.id)}
                  onChange={() => handleTradeToggle(trade.id)}
                  className="size-5 text-[#f9a825] focus:ring-[#f9a825] rounded"
                />
                <div className="flex-1">
                  <p className="font-semibold text-slate-900">{trade.name}</p>
                  {trade.requiresPermit && (
                    <p className="text-xs text-amber-600">Permit typically required</p>
                  )}
                </div>
              </div>
            </label>
          ))}
        </div>
      </div>

      {/* Pricing for Each Trade */}
      {selectedTrades.map(tradeId => {
        const trade = tradeCategories.find(t => t.id === tradeId);
        const tradePricing = pricing[tradeId];

        return (
          <div key={tradeId} className="mb-8 p-6 border-2 border-[#f9a825] rounded-xl bg-gradient-to-b from-[#f9a825]/5 to-white">
            <h3 className="text-xl font-bold text-slate-900 mb-6">{trade?.name} - Pricing Structure</h3>

            <div className="space-y-6">
              {/* Minimum Job Fee */}
              <div>
                <label className="block text-sm font-bold text-slate-900 mb-2">
                  Minimum Job Fee ($) *
                </label>
                <input
                  type="number"
                  value={tradePricing.minimumJobFee}
                  onChange={(e) => updatePricing(tradeId, 'minimumJobFee', e.target.value)}
                  placeholder="500"
                  className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-[#f9a825] focus:border-transparent"
                />
              </div>

              {/* Labor Rate Type */}
              <div>
                <label className="block text-sm font-bold text-slate-900 mb-2">
                  Labor Rate Type *
                </label>
                <select
                  value={tradePricing.laborRateType}
                  onChange={(e) => updatePricing(tradeId, 'laborRateType', e.target.value)}
                  className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-[#f9a825] focus:border-transparent"
                >
                  <option value="">Select rate type</option>
                  <option value="flat">Flat Fee</option>
                  <option value="per_sqft">Per Square Foot</option>
                  <option value="per_linear_ft">Per Linear Foot</option>
                  <option value="per_fixture">Per Fixture</option>
                  <option value="per_hour">Per Hour</option>
                </select>
              </div>

              {/* Labor Estimate Range (Remodel & Trade types) */}
              {(trade?.type === 'remodel' || trade?.type === 'trade') && (
                <div className="p-4 bg-slate-50 rounded-lg">
                  <h4 className="font-bold text-slate-900 mb-3">Labor Estimate Range *</h4>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-semibold text-slate-700 mb-2">
                        Low Estimate ($)
                      </label>
                      <input
                        type="number"
                        value={tradePricing.laborLow}
                        onChange={(e) => updatePricing(tradeId, 'laborLow', e.target.value)}
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
                        value={tradePricing.laborHigh}
                        onChange={(e) => updatePricing(tradeId, 'laborHigh', e.target.value)}
                        placeholder="7000"
                        className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-[#f9a825] focus:border-transparent"
                      />
                    </div>
                  </div>
                </div>
              )}

              {/* Per Sq Ft Rate (Painting type) */}
              {trade?.type === 'painting' && (
                <div>
                  <label className="block text-sm font-bold text-slate-900 mb-2">
                    Labor Rate ($/sq ft) *
                  </label>
                  <input
                    type="number"
                    step="0.01"
                    value={tradePricing.sqftRate || ''}
                    onChange={(e) => updatePricing(tradeId, 'sqftRate', e.target.value)}
                    placeholder="2.50"
                    className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-[#f9a825] focus:border-transparent"
                  />
                </div>
              )}

              {/* Rough Materials Range */}
              <div className="p-4 bg-slate-50 rounded-lg">
                <h4 className="font-bold text-slate-900 mb-3">
                  {trade?.type === 'painting' ? 'Materials Range *' : 'Rough Materials Range *'}
                </h4>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-2">
                      Low Estimate ($)
                    </label>
                    <input
                      type="number"
                      value={tradePricing.roughMaterialsLow}
                      onChange={(e) => updatePricing(tradeId, 'roughMaterialsLow', e.target.value)}
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
                      value={tradePricing.roughMaterialsHigh}
                      onChange={(e) => updatePricing(tradeId, 'roughMaterialsHigh', e.target.value)}
                      placeholder="3000"
                      className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-[#f9a825] focus:border-transparent"
                    />
                  </div>
                </div>
              </div>

              {/* Finish Materials (Remodel & Painting types) */}
              {(trade?.type === 'remodel' || trade?.type === 'painting') && (
                <div className="p-4 bg-slate-50 rounded-lg">
                  <h4 className="font-bold text-slate-900 mb-3">Finish Materials *</h4>
                  <div className="space-y-4">
                    <div className="flex gap-4">
                      <label className="flex items-center gap-2 cursor-pointer">
                        <input
                          type="radio"
                          name={`finish-${tradeId}`}
                          value="included"
                          checked={tradePricing.finishMaterials === 'included'}
                          onChange={(e) => updatePricing(tradeId, 'finishMaterials', e.target.value as any)}
                          className="size-4 text-[#f9a825] focus:ring-[#f9a825]"
                        />
                        <span className="text-slate-700 font-medium">Included (Allowance)</span>
                      </label>
                      <label className="flex items-center gap-2 cursor-pointer">
                        <input
                          type="radio"
                          name={`finish-${tradeId}`}
                          value="owner_supplied"
                          checked={tradePricing.finishMaterials === 'owner_supplied'}
                          onChange={(e) => updatePricing(tradeId, 'finishMaterials', e.target.value as any)}
                          className="size-4 text-[#f9a825] focus:ring-[#f9a825]"
                        />
                        <span className="text-slate-700 font-medium">Owner Supplied</span>
                      </label>
                    </div>

                    {tradePricing.finishMaterials === 'included' && (
                      <div className="grid md:grid-cols-2 gap-4 pt-4 border-t border-slate-300">
                        <div>
                          <label className="block text-sm font-semibold text-slate-700 mb-2">
                            Allowance Low ($)
                          </label>
                          <input
                            type="number"
                            value={tradePricing.finishMaterialsAllowanceLow}
                            onChange={(e) => updatePricing(tradeId, 'finishMaterialsAllowanceLow', e.target.value)}
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
                            value={tradePricing.finishMaterialsAllowanceHigh}
                            onChange={(e) => updatePricing(tradeId, 'finishMaterialsAllowanceHigh', e.target.value)}
                            placeholder="5000"
                            className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-[#f9a825] focus:border-transparent"
                          />
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              )}

              {/* Permit Required */}
              <div className="p-4 bg-slate-50 rounded-lg">
                <h4 className="font-bold text-slate-900 mb-3">Permit Typically Required? *</h4>
                <div className="space-y-4">
                  <div className="flex gap-4">
                    <label className="flex items-center gap-2 cursor-pointer">
                      <input
                        type="radio"
                        name={`permit-${tradeId}`}
                        value="yes"
                        checked={tradePricing.permitRequired === 'yes'}
                        onChange={(e) => updatePricing(tradeId, 'permitRequired', e.target.value as any)}
                        className="size-4 text-[#f9a825] focus:ring-[#f9a825]"
                      />
                      <span className="text-slate-700 font-medium">Yes</span>
                    </label>
                    <label className="flex items-center gap-2 cursor-pointer">
                      <input
                        type="radio"
                        name={`permit-${tradeId}`}
                        value="no"
                        checked={tradePricing.permitRequired === 'no'}
                        onChange={(e) => updatePricing(tradeId, 'permitRequired', e.target.value as any)}
                        className="size-4 text-[#f9a825] focus:ring-[#f9a825]"
                      />
                      <span className="text-slate-700 font-medium">No</span>
                    </label>
                  </div>

                  {tradePricing.permitRequired === 'yes' && (
                    <div className="grid md:grid-cols-2 gap-4 pt-4 border-t border-slate-300">
                      <div>
                        <label className="block text-sm font-semibold text-slate-700 mb-2">
                          Permit Cost Low ($)
                        </label>
                        <input
                          type="number"
                          value={tradePricing.permitCostLow}
                          onChange={(e) => updatePricing(tradeId, 'permitCostLow', e.target.value)}
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
                          value={tradePricing.permitCostHigh}
                          onChange={(e) => updatePricing(tradeId, 'permitCostHigh', e.target.value)}
                          placeholder="800"
                          className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-[#f9a825] focus:border-transparent"
                        />
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        );
      })}

      {/* Submit Button */}
      <div className="flex gap-4">
        <button
          onClick={validateAndSubmit}
          className="flex-1 bg-[#f9a825] text-white py-3 rounded-lg font-bold hover:bg-[#e69b20] transition-all flex items-center justify-center gap-2"
        >
          <CheckCircle className="size-5" />
          Save Trade & Pricing
        </button>
      </div>
    </div>
  );
}

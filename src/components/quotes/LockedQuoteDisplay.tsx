import { Lock, AlertCircle, CheckCircle, MessageSquare } from 'lucide-react';

interface QuoteItem {
  category: string;
  description: string;
  laborCost: number;
  materialCost: number;
}

interface LockedQuoteDisplayProps {
  contractorName: string;
  items: QuoteItem[];
  message?: string;
  submittedAt: string;
  isOwn?: boolean;
}

export function LockedQuoteDisplay({ 
  contractorName, 
  items, 
  message, 
  submittedAt,
  isOwn = false 
}: LockedQuoteDisplayProps) {
  const totalLabor = items.reduce((sum, item) => sum + item.laborCost, 0);
  const totalMaterial = items.reduce((sum, item) => sum + item.materialCost, 0);
  const grandTotal = totalLabor + totalMaterial;

  return (
    <div className="bg-white rounded-xl border-2 border-slate-200 overflow-hidden">
      {/* Header - Locked Indicator */}
      <div className="bg-gradient-to-r from-slate-700 to-slate-600 p-4">
        <div className="flex items-center justify-between text-white">
          <div className="flex items-center gap-3">
            <div className="size-10 bg-white/20 rounded-lg flex items-center justify-center">
              <Lock className="size-5" />
            </div>
            <div>
              <h3 className="font-bold text-lg">{contractorName}</h3>
              <p className="text-sm text-white/80">Quote submitted {submittedAt}</p>
            </div>
          </div>
          <div className="flex items-center gap-2 px-4 py-2 bg-white/20 rounded-lg">
            <CheckCircle className="size-5" />
            <span className="font-semibold">Submitted</span>
          </div>
        </div>
      </div>

      {/* Permanent Lock Notice */}
      <div className="p-4 bg-red-50 border-b border-red-100">
        <div className="flex items-start gap-3">
          <AlertCircle className="size-5 text-red-600 flex-shrink-0 mt-0.5" />
          <div>
            <p className="font-semibold text-red-900">Quote is Permanently Locked</p>
            <p className="text-sm text-red-700 mt-1">
              {isOwn 
                ? 'Once submitted, quotes cannot be edited or deleted. All amounts are final.'
                : 'Submitted quotes are final and cannot be modified by the contractor.'}
            </p>
          </div>
        </div>
      </div>

      {/* Quote Details */}
      <div className="p-6">
        <h4 className="font-semibold text-slate-900 mb-4">Quote Breakdown</h4>
        
        <div className="space-y-3 mb-6">
          {items.map((item, index) => (
            <div key={index} className="p-4 bg-slate-50 rounded-lg border border-slate-200">
              <div className="flex justify-between items-start mb-2">
                <div className="flex-1">
                  <p className="font-semibold text-slate-900">{item.category}</p>
                  <p className="text-sm text-slate-600 mt-1">{item.description}</p>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4 mt-3 pt-3 border-t border-slate-300">
                <div>
                  <p className="text-xs text-slate-500">Labor</p>
                  <p className="font-semibold text-slate-900">${item.laborCost.toLocaleString()}</p>
                </div>
                <div>
                  <p className="text-xs text-slate-500">Materials</p>
                  <p className="font-semibold text-slate-900">${item.materialCost.toLocaleString()}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Total Summary */}
        <div className="border-t-2 border-slate-300 pt-4 space-y-2">
          <div className="flex justify-between text-slate-700">
            <span>Total Labor</span>
            <span className="font-semibold">${totalLabor.toLocaleString()}</span>
          </div>
          <div className="flex justify-between text-slate-700">
            <span>Total Materials</span>
            <span className="font-semibold">${totalMaterial.toLocaleString()}</span>
          </div>
          <div className="flex justify-between text-xl font-bold text-slate-900 pt-3 border-t-2 border-slate-300">
            <span>Total Estimate</span>
            <span className="text-[#f9a825]">${grandTotal.toLocaleString()}</span>
          </div>
        </div>

        {/* Contractor Message */}
        {message && (
          <div className="mt-6 p-4 bg-blue-50 border border-blue-200 rounded-lg">
            <div className="flex items-start gap-3">
              <MessageSquare className="size-5 text-blue-600 flex-shrink-0 mt-0.5" />
              <div>
                <p className="font-semibold text-blue-900 mb-1">Message from Contractor</p>
                <p className="text-sm text-blue-800">{message}</p>
                <p className="text-xs text-blue-600 mt-2">
                  💬 This is a one-time message. To continue the conversation, homeowner must accept to chat.
                </p>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* System Calculation Notice */}
      <div className="p-4 bg-slate-100 border-t border-slate-200">
        <p className="text-xs text-slate-600 flex items-center gap-2">
          <Lock className="size-4" />
          Total automatically calculated by system. No manual overrides allowed.
        </p>
      </div>
    </div>
  );
}

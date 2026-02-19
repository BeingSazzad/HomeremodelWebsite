import React, { useState } from 'react';
import { X, CreditCard, CheckCircle } from 'lucide-react';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Label } from '../ui/label';

interface SimplePaymentModalProps {
  isOpen: boolean;
  onClose: () => void;
  projectTitle: string;
  contractorName: string;
  amount: number;
  onPaymentComplete: () => void;
}

export function SimplePaymentModal({
  isOpen,
  onClose,
  projectTitle,
  contractorName,
  amount,
  onPaymentComplete
}: SimplePaymentModalProps) {
  const [isPaid, setIsPaid] = useState(false);

  if (!isOpen) return null;

  const handlePayment = () => {
    // Simple payment simulation
    setIsPaid(true);
    setTimeout(() => {
      onPaymentComplete();
      onClose();
      setIsPaid(false);
    }, 2000);
  };

  return (
    <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg max-w-lg w-full p-8 relative">
        {isPaid ? (
          // Success State
          <div className="text-center py-8">
            <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <CheckCircle className="w-12 h-12 text-green-600" />
            </div>
            <h3 className="text-2xl font-bold text-slate-900 mb-2">Payment Successful!</h3>
            <p className="text-slate-600">
              ${amount.toLocaleString()} has been sent to {contractorName}
            </p>
          </div>
        ) : (
          <>
            {/* Header */}
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold text-slate-900">Pay Contractor</h2>
              <button onClick={onClose} className="text-slate-400 hover:text-slate-600">
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Project Summary */}
            <div className="bg-slate-50 rounded-lg p-6 mb-6">
              <h3 className="font-semibold text-slate-900 mb-3">Payment Details</h3>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-slate-600">Project:</span>
                  <span className="font-medium text-slate-900">{projectTitle}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-600">Contractor:</span>
                  <span className="font-medium text-slate-900">{contractorName}</span>
                </div>
                <div className="border-t border-slate-200 mt-4 pt-4 flex justify-between">
                  <span className="font-semibold text-slate-900">Amount:</span>
                  <span className="text-2xl font-bold text-[#f9a825]">
                    ${amount.toLocaleString()}
                  </span>
                </div>
              </div>
            </div>

            {/* Payment Form */}
            <div className="space-y-4">
              <div>
                <Label htmlFor="cardNumber">Card Number</Label>
                <Input
                  id="cardNumber"
                  placeholder="1234 5678 9012 3456"
                  className="mt-2"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="expiry">Expiry</Label>
                  <Input id="expiry" placeholder="MM/YY" className="mt-2" />
                </div>
                <div>
                  <Label htmlFor="cvc">CVC</Label>
                  <Input id="cvc" placeholder="123" className="mt-2" />
                </div>
              </div>

              <div>
                <Label htmlFor="cardName">Name on Card</Label>
                <Input id="cardName" placeholder="Your Name" className="mt-2" />
              </div>

              {/* Actions */}
              <div className="flex gap-3 pt-4">
                <Button
                  onClick={onClose}
                  variant="outline"
                  className="flex-1"
                >
                  Cancel
                </Button>
                <Button
                  onClick={handlePayment}
                  className="flex-1 bg-[#f9a825] hover:bg-[#e39922] text-white"
                >
                  <CreditCard className="w-4 h-4 mr-2" />
                  Pay ${amount.toLocaleString()}
                </Button>
              </div>

              <p className="text-xs text-center text-slate-500 pt-2">
                Payment is secure and processed safely. Funds will be released to contractor.
              </p>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

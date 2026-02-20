import { useState } from 'react';
import { Phone, Shield, CheckCircle, X } from 'lucide-react';

interface SMSVerificationProps {
  userType: 'homeowner' | 'contractor';
  onComplete: () => void;
  onCancel: () => void;
}

export function SMSVerification({ userType, onComplete, onCancel }: SMSVerificationProps) {
  const [step, setStep] = useState<'phone' | 'code' | 'verified'>('phone');
  const [phone, setPhone] = useState('');
  const [code, setCode] = useState(['', '', '', '', '', '']);
  const [isLoading, setIsLoading] = useState(false);

  const handleSendCode = () => {
    setIsLoading(true);
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      setStep('code');
    }, 1500);
  };

  const handleVerifyCode = () => {
    setIsLoading(true);
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      setStep('verified');
      setTimeout(() => {
        onComplete();
      }, 1500);
    }, 1500);
  };

  const handleCodeChange = (index: number, value: string) => {
    if (value.length > 1) return;
    const newCode = [...code];
    newCode[index] = value;
    setCode(newCode);

    // Auto-focus next input
    if (value && index < 5) {
      const nextInput = document.getElementById(`code-${index + 1}`);
      nextInput?.focus();
    }
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl max-w-md w-full p-8 relative">
        {step !== 'verified' && (
          <button
            onClick={onCancel}
            className="absolute top-4 right-4 text-slate-400 hover:text-slate-600"
          >
            <X className="size-5" />
          </button>
        )}

        {/* Phone Number Step */}
        {step === 'phone' && (
          <div className="text-center">
            <div className="size-16 bg-[#f9a825]/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <Phone className="size-8 text-[#f9a825]" />
            </div>
            <h2 className="text-2xl font-bold text-slate-900 mb-2">Verify Your Phone</h2>
            <p className="text-slate-600 mb-6">
              {userType === 'homeowner' 
                ? 'Phone verification is required to post projects and protect your account.'
                : 'Phone verification is required to activate your contractor profile and receive job notifications.'}
            </p>

            <div className="mb-6">
              <label className="block text-left text-sm font-medium text-slate-700 mb-2">
                Phone Number
              </label>
              <div className="relative">
                <Phone className="absolute left-3 top-1/2 -translate-y-1/2 size-5 text-slate-400" />
                <input
                  type="tel"
                  placeholder="(555) 123-4567"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-[#f9a825] focus:border-transparent"
                />
              </div>
            </div>

            <button
              onClick={handleSendCode}
              disabled={!phone || isLoading}
              className="w-full bg-[#f9a825] text-white py-3 rounded-lg font-semibold hover:bg-[#f9a825]/90 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
            >
              {isLoading ? 'Sending Code...' : 'Send Verification Code'}
            </button>
          </div>
        )}

        {/* Verification Code Step */}
        {step === 'code' && (
          <div className="text-center">
            <div className="size-16 bg-[#f9a825]/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <Shield className="size-8 text-[#f9a825]" />
            </div>
            <h2 className="text-2xl font-bold text-slate-900 mb-2">Enter Verification Code</h2>
            <p className="text-slate-600 mb-6">
              We sent a 6-digit code to <strong>{phone}</strong>
            </p>

            <div className="flex gap-2 justify-center mb-6">
              {code.map((digit, index) => (
                <input
                  key={index}
                  id={`code-${index}`}
                  type="text"
                  maxLength={1}
                  value={digit}
                  onChange={(e) => handleCodeChange(index, e.target.value)}
                  className="w-12 h-14 text-center text-2xl font-bold border-2 border-slate-300 rounded-lg focus:ring-2 focus:ring-[#f9a825] focus:border-[#f9a825]"
                />
              ))}
            </div>

            <button
              onClick={handleVerifyCode}
              disabled={code.some(d => !d) || isLoading}
              className="w-full bg-[#f9a825] text-white py-3 rounded-lg font-semibold hover:bg-[#f9a825]/90 disabled:opacity-50 disabled:cursor-not-allowed transition-all mb-4"
            >
              {isLoading ? 'Verifying...' : 'Verify Code'}
            </button>

            <button
              onClick={() => setStep('phone')}
              className="text-slate-600 hover:text-slate-900 text-sm"
            >
              Change phone number
            </button>
          </div>
        )}

        {/* Verified Step */}
        {step === 'verified' && (
          <div className="text-center py-8">
            <div className="size-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <CheckCircle className="size-12 text-green-600" />
            </div>
            <h2 className="text-2xl font-bold text-slate-900 mb-2">Verified!</h2>
            <p className="text-slate-600">
              Your phone number has been successfully verified.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

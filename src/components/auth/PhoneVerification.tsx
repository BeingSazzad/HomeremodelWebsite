import { useState } from 'react';
import { Phone, CheckCircle, AlertCircle, Shield } from 'lucide-react';

interface PhoneVerificationProps {
  userType: 'homeowner' | 'contractor';
  onVerified?: () => void;
  isRequired?: boolean;
  phoneNumber?: string; // Pre-filled phone number
  onBack?: () => void; // Back button callback
}

export function PhoneVerification({ 
  userType, 
  onVerified,
  isRequired = true,
  phoneNumber: initialPhone,
  onBack
}: PhoneVerificationProps) {
  const [step, setStep] = useState<'enter-phone' | 'verify-code' | 'verified'>(
    initialPhone ? 'verify-code' : 'enter-phone'
  );
  const [phoneNumber, setPhoneNumber] = useState(initialPhone || '');
  const [countryCode, setCountryCode] = useState('+1');
  const [verificationCode, setVerificationCode] = useState(['', '', '', '', '', '']);
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSendCode = async () => {
    setError('');
    
    // Validate phone number
    const phoneRegex = /^\d{10}$/;
    if (!phoneRegex.test(phoneNumber)) {
      setError('Please enter a valid 10-digit phone number');
      return;
    }

    setIsLoading(true);

    // Simulate SMS sending (in production, call Twilio/similar API)
    await new Promise(resolve => setTimeout(resolve, 1500));

    console.log(`Sending SMS to ${countryCode}${phoneNumber}`);
    
    setIsLoading(false);
    setStep('verify-code');
    
    // Mock success
    alert(`Verification code sent to ${countryCode} ${phoneNumber.replace(/(\d{3})(\d{3})(\d{4})/, '($1) $2-$3')}`);
  };

  const handleCodeChange = (index: number, value: string) => {
    if (!/^\d*$/.test(value)) return;

    const newCode = [...verificationCode];
    newCode[index] = value.slice(-1);
    setVerificationCode(newCode);

    // Auto-focus next input
    if (value && index < 5) {
      const nextInput = document.getElementById(`code-${index + 1}`);
      nextInput?.focus();
    }

    // Auto-verify when all 6 digits entered
    if (index === 5 && value) {
      const fullCode = newCode.join('');
      if (fullCode.length === 6) {
        handleVerifyCode(fullCode);
      }
    }
  };

  const handleKeyDown = (index: number, e: React.KeyboardEvent) => {
    if (e.key === 'Backspace' && !verificationCode[index] && index > 0) {
      const prevInput = document.getElementById(`code-${index - 1}`);
      prevInput?.focus();
    }
  };

  const handleVerifyCode = async (code?: string) => {
    const fullCode = code || verificationCode.join('');
    
    if (fullCode.length !== 6) {
      setError('Please enter all 6 digits');
      return;
    }

    setIsLoading(true);
    setError('');

    // Simulate API verification (in production, verify with backend)
    await new Promise(resolve => setTimeout(resolve, 1500));

    // Mock: Accept any 6-digit code for demo
    console.log(`Verifying code: ${fullCode}`);
    
    setIsLoading(false);
    setStep('verified');
    
    setTimeout(() => {
      onVerified?.();
    }, 1500);
  };

  const handleResendCode = async () => {
    setError('');
    setIsLoading(true);
    
    // Simulate resending
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    console.log(`Resending SMS to ${countryCode}${phoneNumber}`);
    alert('Verification code resent!');
    
    setIsLoading(false);
  };

  return (
    <div className="bg-white border-2 border-slate-200 rounded-xl p-8 max-w-md mx-auto">
      {/* Header */}
      <div className="text-center mb-8">
        <div className="size-16 bg-[#f9a825]/10 rounded-full flex items-center justify-center mx-auto mb-4">
          {step === 'verified' ? (
            <CheckCircle className="size-8 text-green-600" />
          ) : (
            <Phone className="size-8 text-[#f9a825]" />
          )}
        </div>
        <h2 className="text-2xl font-bold text-slate-900 mb-2">
          {step === 'verified' ? 'Phone Verified!' : 'Verify Your Phone Number'}
        </h2>
        <p className="text-slate-600">
          {step === 'enter-phone' && (
            <>
              {isRequired && (
                <span className="text-red-600 font-semibold">Required: </span>
              )}
              {userType === 'homeowner' 
                ? 'Verify your phone before posting your first job'
                : 'Verify your phone to activate your contractor profile'
              }
            </>
          )}
          {step === 'verify-code' && `We sent a 6-digit code to ${countryCode} ${phoneNumber.replace(/(\d{3})(\d{3})(\d{4})/, '($1) $2-$3')}`}
          {step === 'verified' && 'Your phone number has been successfully verified'}
        </p>
      </div>

      {/* Enter Phone Number */}
      {step === 'enter-phone' && (
        <div className="space-y-6">
          <div>
            <label className="block text-sm font-semibold text-slate-900 mb-2">
              Phone Number *
            </label>
            <div className="flex gap-3">
              <select
                value={countryCode}
                onChange={(e) => setCountryCode(e.target.value)}
                className="px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-[#f9a825] focus:border-transparent"
              >
                <option value="+1">🇺🇸 +1</option>
                <option value="+44">🇬🇧 +44</option>
                <option value="+91">🇮🇳 +91</option>
                <option value="+880">🇧🇩 +880</option>
              </select>
              <input
                type="tel"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value.replace(/\D/g, ''))}
                placeholder="(555) 123-4567"
                maxLength={10}
                className="flex-1 px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-[#f9a825] focus:border-transparent"
              />
            </div>
            {error && (
              <div className="mt-2 flex items-center gap-2 text-red-600">
                <AlertCircle className="size-4" />
                <p className="text-sm">{error}</p>
              </div>
            )}
          </div>

          <button
            onClick={handleSendCode}
            disabled={isLoading || phoneNumber.length !== 10}
            className="w-full bg-[#f9a825] text-white py-3 rounded-lg font-bold hover:bg-[#e69b20] disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
          >
            {isLoading ? 'Sending...' : 'Send Verification Code'}
          </button>

          <div className="p-4 bg-blue-50 border border-blue-200 rounded-lg">
            <div className="flex gap-2">
              <Shield className="size-5 text-blue-600 flex-shrink-0 mt-0.5" />
              <p className="text-sm text-blue-800">
                Your phone number is kept private and secure. We use it only for account verification and important notifications.
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Verify Code */}
      {step === 'verify-code' && (
        <div className="space-y-6">
          <div>
            <label className="block text-sm font-semibold text-slate-900 mb-4 text-center">
              Enter 6-Digit Code
            </label>
            <div className="flex gap-3 justify-center mb-4">
              {verificationCode.map((digit, index) => (
                <input
                  key={index}
                  id={`code-${index}`}
                  type="text"
                  inputMode="numeric"
                  maxLength={1}
                  value={digit}
                  onChange={(e) => handleCodeChange(index, e.target.value)}
                  onKeyDown={(e) => handleKeyDown(index, e)}
                  className="size-14 text-center text-2xl font-bold border-2 border-slate-300 rounded-lg focus:ring-2 focus:ring-[#f9a825] focus:border-[#f9a825]"
                />
              ))}
            </div>
            {error && (
              <div className="flex items-center justify-center gap-2 text-red-600">
                <AlertCircle className="size-4" />
                <p className="text-sm">{error}</p>
              </div>
            )}
          </div>

          <button
            onClick={() => handleVerifyCode()}
            disabled={isLoading || verificationCode.join('').length !== 6}
            className="w-full bg-[#f9a825] text-white py-3 rounded-lg font-bold hover:bg-[#e69b20] disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
          >
            {isLoading ? 'Verifying...' : 'Verify Code'}
          </button>

          <div className="text-center">
            <button
              onClick={handleResendCode}
              disabled={isLoading}
              className="text-sm text-[#f9a825] hover:text-[#e69b20] font-semibold disabled:opacity-50"
            >
              Didn't receive code? Resend
            </button>
          </div>

          <button
            onClick={() => {
              setStep('enter-phone');
              setVerificationCode(['', '', '', '', '', '']);
              setError('');
            }}
            className="w-full text-slate-600 hover:text-slate-900 text-sm font-medium"
          >
            Change phone number
          </button>
        </div>
      )}

      {/* Verified */}
      {step === 'verified' && (
        <div className="text-center space-y-6">
          <div className="p-6 bg-green-50 border-2 border-green-200 rounded-lg">
            <CheckCircle className="size-16 text-green-600 mx-auto mb-4" />
            <p className="font-bold text-green-900 text-lg mb-2">
              Phone Number Verified!
            </p>
            <p className="text-sm text-green-700">
              {countryCode} {phoneNumber.replace(/(\d{3})(\d{3})(\d{4})/, '($1) $2-$3')}
            </p>
          </div>
          <p className="text-slate-600">
            {userType === 'homeowner' 
              ? 'You can now post jobs and receive quotes from contractors.'
              : 'Your contractor profile is now active and can receive job notifications.'
            }
          </p>
        </div>
      )}
    </div>
  );
}
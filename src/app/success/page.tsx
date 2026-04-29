'use client';

import { useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import { Suspense } from 'react';

function SuccessContent() {
  const searchParams = useSearchParams();
  const [loading, setLoading] = useState(true);
  const [email, setEmail] = useState('');

  useEffect(() => {
    const sessionId = searchParams.get('session_id');
    if (sessionId) {
      // In production, you'd verify the session with your backend
      setLoading(false);
    }
  }, [searchParams]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0a0a0f] via-[#0f0f1a] to-[#0a0a0f] flex items-center justify-center px-6">
      <div className="max-w-md w-full text-center">
        <div className="w-20 h-20 mx-auto mb-8 rounded-full bg-green-500/20 flex items-center justify-center">
          <svg className="w-10 h-10 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        
        <h1 className="text-3xl font-bold text-white mb-4">Payment Successful!</h1>
        <p className="text-gray-400 mb-8">
          Thank you for purchasing Astronomy Client. Your license key has been sent to your email.
        </p>
        
        <div className="p-6 rounded-xl bg-white/5 border border-white/10 mb-8">
          <p className="text-sm text-gray-400 mb-2">Next Steps:</p>
          <ul className="text-left text-gray-300 space-y-2">
            <li className="flex items-start gap-2">
              <span className="text-green-400">✓</span>
              Check your email for your license key
            </li>
            <li className="flex items-start gap-2">
              <span className="text-green-400">✓</span>
              Download the client from the Discord
            </li>
            <li className="flex items-start gap-2">
              <span className="text-green-400">✓</span>
              Install using one of our supported launchers
            </li>
            <li className="flex items-start gap-2">
              <span className="text-green-400">✓</span>
              Enter your license key in the client
            </li>
          </ul>
        </div>
        
        <a
          href="/"
          className="inline-block px-8 py-3 bg-primary-500 hover:bg-primary-600 text-white font-semibold rounded-lg transition-all"
        >
          Return Home
        </a>
      </div>
    </div>
  );
}

export default function SuccessPage() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-gradient-to-b from-[#0a0a0f] via-[#0f0f1a] to-[#0a0a0f] flex items-center justify-center text-white">Loading...</div>}>
      <SuccessContent />
    </Suspense>
  );
}

import { useEffect, useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { CheckCircle, XCircle, Loader2, Shield, Mail } from 'lucide-react';
import { supabase } from '../lib/supabase';
import toast from 'react-hot-toast';

const VerifyEmailPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [status, setStatus] = useState('verifying');
  const [message, setMessage] = useState('Verifying your email address...');

  useEffect(() => {
    const verifyEmail = async () => {
      try {
        const hash = location.hash.substring(1);
        const params = new URLSearchParams(hash);
        const type = params.get('type');
        const token = params.get('access_token');
        const refreshToken = params.get('refresh_token');

        if (type === 'signup' && token) {
          const { data, error } = await supabase.auth.setSession({
            access_token: token,
            refresh_token: refreshToken || '',
          });

          if (error) throw error;

          if (data?.user?.id) {
            const { error: updateError } = await supabase
              .from('service_providers')
              .update({ 
                verification_status: 'submitted',
                is_verified: true,
                id_verified_at: new Date().toISOString()
              })
              .eq('id', data.user.id);

            if (updateError) throw updateError;
          }

          setStatus('success');
          setMessage('Email verified successfully!');
          
          setTimeout(() => {
            navigate('/thank-you');
          }, 3000);

        } else {
          throw new Error('Invalid verification link');
        }
      } catch (error) {
        console.error('Email verification error:', error);
        setStatus('error');
        setMessage(error.message || 'Failed to verify email. Please try again.');
        toast.error('Email verification failed');
      }
    };

    verifyEmail();
  }, [location, navigate]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white flex items-center justify-center px-4">
      <div className="max-w-md w-full text-center">
        <div className="bg-white rounded-2xl shadow-lg p-8 md:p-10">
          <div className="mb-6">
            {status === 'verifying' ? (
              <div className="inline-flex items-center justify-center w-20 h-20 bg-blue-50 rounded-full mb-4">
                <Loader2 className="h-10 w-10 text-blue-600 animate-spin" />
              </div>
            ) : status === 'success' ? (
              <div className="inline-flex items-center justify-center w-20 h-20 bg-green-50 rounded-full mb-4">
                <CheckCircle className="h-10 w-10 text-green-600" />
              </div>
            ) : (
              <div className="inline-flex items-center justify-center w-20 h-20 bg-red-50 rounded-full mb-4">
                <XCircle className="h-10 w-10 text-red-600" />
              </div>
            )}
          </div>

          <h1 className="text-3xl font-bold text-gray-900 mb-3">
            {status === 'verifying' && 'Verifying Email'}
            {status === 'success' && 'Email Verified!'}
            {status === 'error' && 'Verification Failed'}
          </h1>

          <p className="text-gray-600 mb-8">
            {message}
          </p>

          {status === 'verifying' && (
            <div className="space-y-4">
              <div className="h-1 w-32 bg-gray-200 rounded-full overflow-hidden mx-auto">
                <div className="h-full bg-blue-600 rounded-full animate-pulse"></div>
              </div>
              <p className="text-sm text-gray-500">
                This may take a few moments...
              </p>
            </div>
          )}

          {status === 'success' && (
            <div className="space-y-6">
              <div className="bg-green-50 border border-green-200 rounded-xl p-4">
                <p className="text-green-800 font-medium">
                  <Shield className="inline-block h-4 w-4 mr-1" />
                  Your email has been successfully verified
                </p>
              </div>
              <p className="text-gray-500">
                Redirecting you to the thank you page...
              </p>
              <div className="flex justify-center">
                <div className="w-6 h-6 border-2 border-green-600 border-t-transparent rounded-full animate-spin"></div>
              </div>
            </div>
          )}

          {status === 'error' && (
            <div className="space-y-6">
              <div className="bg-red-50 border border-red-200 rounded-xl p-4">
                <p className="text-red-800">
                  <Mail className="inline-block h-4 w-4 mr-1" />
                  There was a problem verifying your email
                </p>
              </div>
              <div className="space-y-3">
                <button
                  onClick={() => window.location.reload()}
                  className="w-full py-3 bg-blue-600 text-white font-semibold rounded-xl hover:bg-blue-700 transition"
                >
                  Try Again
                </button>
                <button
                  onClick={() => navigate('/')}
                  className="w-full py-3 bg-gray-100 text-gray-700 font-semibold rounded-xl hover:bg-gray-200 transition"
                >
                  Return Home
                </button>
              </div>
            </div>
          )}

          <div className="mt-8 pt-6 border-t border-gray-200">
            <p className="text-sm text-gray-500">
              Having trouble? Contact us at{' '}
              <a href="mailto:support@vektorkite.com" className="text-blue-600 hover:text-blue-800">
                support@vektorkite.com
              </a>
            </p>
          </div>
        </div>

        <div className="mt-8">
          <div className="flex items-center justify-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-teal-500 rounded-lg"></div>
            <span className="text-lg font-bold text-gray-900">VektorKite</span>
            <span className="text-xs font-semibold text-blue-600 bg-blue-50 px-2 py-1 rounded">
              PRO
            </span>
          </div>
          <p className="text-gray-500 text-sm mt-2">
            Namibia's Service Platform • Coming Soon
          </p>
        </div>
      </div>
    </div>
  );
};

export default VerifyEmailPage; // ← CRITICAL: This line must be here
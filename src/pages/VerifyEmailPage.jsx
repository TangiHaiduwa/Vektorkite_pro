import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { CheckCircle, XCircle, Loader2, Shield, Mail } from 'lucide-react';
import { supabase } from '../lib/supabase';
import toast from 'react-hot-toast';

const VerifyEmailPage = () => {
  const navigate = useNavigate();
  const [status, setStatus] = useState('verifying');
  const [message, setMessage] = useState('Verifying your email address...');

  useEffect(() => {
    const verifyEmailToken = async () => {
      try {
        // Get the hash from URL (Supabase redirects with hash)
        const hash = window.location.hash.substring(1);
        const params = new URLSearchParams(hash);
        const type = params.get('type');
        const accessToken = params.get('access_token');
        const refreshToken = params.get('refresh_token');
        
        console.log('Email verification params:', { type, accessToken: !!accessToken });

        if (type === 'signup' && accessToken) {
          // Set the session with the token from email confirmation
          const { data, error } = await supabase.auth.setSession({
            access_token: accessToken,
            refresh_token: refreshToken || '',
          });

          if (error) throw error;

          if (data?.user?.id) {
            // Update user profile to mark as verified
            const { error: updateError } = await supabase
              .from('service_providers')
              .update({ 
                email_verified: true,
                email_verified_at: new Date().toISOString(),
                verification_status: 'verified'
              })
              .eq('id', data.user.id);

            if (updateError) {
              console.warn('Profile update warning:', updateError);
              // Continue anyway - auth verification is more important
            }

            // Show success and redirect to thank you page
            setStatus('success');
            setMessage('Email verified successfully! Welcome to VectorKite!');
            toast.success('Email verified successfully!');

            // Wait a moment then redirect
            setTimeout(() => {
              navigate('/thank-you', { replace: true });
            }, 2000);

          } else {
            throw new Error('No user data received after verification');
          }
        } else {
          // Check if user is already logged in (they might have clicked link twice)
          const { data: { session } } = await supabase.auth.getSession();
          
          if (session?.user) {
            // User already verified and logged in
            setStatus('success');
            setMessage('Your email is already verified!');
            
            setTimeout(() => {
              navigate('/thank-you', { replace: true });
            }, 1500);
          } else {
            throw new Error('Invalid verification link or no token found');
          }
        }
      } catch (error) {
        console.error('Email verification error:', error);
        
        let userMessage = 'Failed to verify email. Please try again.';
        
        if (error.message?.includes('already confirmed')) {
          userMessage = 'This email has already been verified.';
          setStatus('success');
        } else if (error.message?.includes('Invalid login credentials')) {
          userMessage = 'Verification link expired or invalid.';
        } else if (error.message) {
          userMessage = error.message;
        }
        
        setStatus('error');
        setMessage(userMessage);
        toast.error(userMessage);
        
        // Auto-redirect to home after error
        setTimeout(() => {
          navigate('/');
        }, 5000);
      }
    };

    verifyEmailToken();
  }, [navigate]);

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
                Please wait while we verify your email...
              </p>
            </div>
          )}

          {status === 'success' && (
            <div className="space-y-6">
              <div className="bg-green-50 border border-green-200 rounded-xl p-4">
                <p className="text-green-800 font-medium">
                  <Shield className="inline-block h-4 w-4 mr-1" />
                  {message}
                </p>
              </div>
              <p className="text-gray-500">
                Redirecting you to the welcome page...
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
                  {message}
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
              <a href="mailto:alexshapwa@gmail.com" className="text-blue-600 hover:text-blue-800">
                alexshapwa@gmail.com
              </a>
            </p>
          </div>
        </div>

        <div className="mt-8">
          <div className="flex items-center justify-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-teal-500 rounded-lg"></div>
            <span className="text-lg font-bold text-gray-900">VectorKite</span>
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

export default VerifyEmailPage;
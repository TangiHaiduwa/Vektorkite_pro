import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import toast from 'react-hot-toast';
import { 
  User, 
  Mail, 
  Phone, 
  Lock, 
  Eye, 
  EyeOff,
  CheckCircle,
  ArrowLeft,
  Shield,
  Calendar,
  FileText,
  X,
  Briefcase
} from 'lucide-react';
import { supabase } from '../lib/supabase';

// Modal Component
const Modal = ({ isOpen, onClose, title, children }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-black bg-opacity-50 transition-opacity" 
        onClick={onClose}
      />
      
      {/* Modal */}
      <div className="flex items-center justify-center min-h-screen p-4">
        <div className="relative bg-white rounded-2xl shadow-xl max-w-4xl w-full max-h-[90vh] overflow-hidden">
          {/* Header */}
          <div className="sticky top-0 bg-white border-b border-gray-200 px-6 py-4 flex items-center justify-between">
            <h2 className="text-2xl font-bold text-gray-900">{title}</h2>
            <button
              onClick={onClose}
              className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
              aria-label="Close"
            >
              <X className="h-5 w-5 text-gray-500" />
            </button>
          </div>
          
          {/* Content */}
          <div className="overflow-y-auto p-6 prose prose-blue max-w-none" style={{ maxHeight: 'calc(90vh - 80px)' }}>
            {children}
          </div>
          
          {/* Footer */}
          <div className="sticky bottom-0 bg-white border-t border-gray-200 px-6 py-4">
            <button
              onClick={onClose}
              className="w-full py-3 bg-gradient-to-r from-blue-600 to-teal-500 text-white font-semibold rounded-xl hover:from-blue-700 hover:to-teal-600 transition-all"
            >
              Close & Continue
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

// Terms Modal Content
const TermsModalContent = () => (
  <div>
    <div className="mb-8">
      <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Introduction</h2>
      <p className="text-gray-700 mb-4">
        VectorKite ("the Platform") is a digital marketplace operated by Starkite Technologies, 
        registered in the Republic of Namibia. VectorKite connects users with independent service 
        providers such as handymen, plumbers, cleaners, and other professionals.
      </p>
      <p className="text-gray-700">
        By using the Platform, you agree to these Terms.
      </p>
    </div>

    <div className="mb-8">
      <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Platform Nature</h2>
      <ul className="list-disc pl-5 text-gray-700 space-y-2">
        <li>VectorKite does not provide services directly</li>
        <li>All service providers are independent contractors</li>
        <li>Starkite Technologies is not an employer, agent, or partner of service providers</li>
      </ul>
    </div>

    <div className="mb-8">
      <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Eligibility</h2>
      <p className="text-gray-700 mb-2">You must:</p>
      <ul className="list-disc pl-5 text-gray-700 space-y-2">
        <li>Be 18 years or older</li>
        <li>Provide accurate information</li>
        <li>Use the Platform lawfully</li>
      </ul>
    </div>

    <div className="mb-8">
      <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Bookings & Payments</h2>
      <ul className="list-disc pl-5 text-gray-700 space-y-2">
        <li>Prices are shown before booking confirmation</li>
        <li>Payments may be processed via third-party providers</li>
        <li>VectorKite may charge a platform service fee or commission</li>
      </ul>
    </div>

    <div className="mb-8">
      <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Cancellations & Refunds</h2>
      <ul className="list-disc pl-5 text-gray-700 space-y-2">
        <li>Cancellation rules may vary per service</li>
        <li>Refunds are subject to provider and platform policies</li>
      </ul>
    </div>

    <div className="mb-8">
      <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Ratings & Reviews</h2>
      <p className="text-gray-700">
        Users may submit honest feedback. Fake, abusive, or misleading content may be removed.
      </p>
    </div>

    <div className="mb-8">
      <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Liability Disclaimer</h2>
      <p className="text-gray-700 mb-2">
        To the fullest extent permitted by Namibian law:
      </p>
      <ul className="list-disc pl-5 text-gray-700 space-y-2">
        <li>Starkite Technologies and VectorKite are not liable for service quality, damages, injuries, or losses</li>
        <li>Services are used at the user's own risk</li>
      </ul>
    </div>

    <div className="mb-8">
      <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Disputes</h2>
      <p className="text-gray-700">
        Disputes should be resolved between the user and service provider. 
        VectorKite may assist but is not obligated to mediate.
      </p>
    </div>

    <div className="mb-8">
      <h2 className="text-2xl font-bold text-gray-900 mb-4">9. Intellectual Property</h2>
      <p className="text-gray-700">
        All platform content belongs to Starkite Technologies.
      </p>
    </div>

    <div className="mb-8">
      <h2 className="text-2xl font-bold text-gray-900 mb-4">10. Termination</h2>
      <p className="text-gray-700">
        We may suspend or terminate accounts for violations.
      </p>
    </div>

    <div className="mb-8">
      <h2 className="text-2xl font-bold text-gray-900 mb-4">11. Governing Law</h2>
      <p className="text-gray-700">
        Governed by the laws of the Republic of Namibia, including the Electronic Transactions Act, 2019.
      </p>
    </div>

    <div className="mb-8">
      <h2 className="text-2xl font-bold text-gray-900 mb-4">12. Contact</h2>
      <p className="text-gray-700">
        Email: alexshapwa@gmail.com<br />
        Starkite Technologies<br />
        Namibia
      </p>
    </div>

    <div className="bg-blue-50 border border-blue-200 rounded-xl p-6 mt-8">
      <div className="flex items-start">
        <Shield className="h-6 w-6 text-blue-600 mr-3 mt-1" />
        <div>
          <h3 className="font-semibold text-blue-900 mb-2">Acceptance Required</h3>
          <p className="text-blue-800">
            By proceeding with registration, you confirm that you have read, understood, 
            and agree to these Terms & Conditions.
          </p>
        </div>
      </div>
    </div>
  </div>
);

// Privacy Modal Content
const PrivacyModalContent = () => (
  <div>
    <div className="mb-8">
      <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Data Controller</h2>
      <p className="text-gray-700">
        Starkite Technologies operates VectorKite and controls user data.
      </p>
    </div>

    <div className="mb-8">
      <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Data We Collect</h2>
      <ul className="list-disc pl-5 text-gray-700 space-y-2">
        <li>Name</li>
        <li>Phone number</li>
        <li>Email</li>
        <li>Location data</li>
        <li>Booking history</li>
        <li>Ratings & reviews</li>
        <li>Payment data (handled by third parties)</li>
      </ul>
    </div>

    <div className="mb-8">
      <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Use of Data</h2>
      <p className="text-gray-700 mb-2">We use your data for:</p>
      <ul className="list-disc pl-5 text-gray-700 space-y-2">
        <li>Account management</li>
        <li>Service matching</li>
        <li>Payments & bookings</li>
        <li>Security & fraud prevention</li>
        <li>Customer support</li>
      </ul>
    </div>

    <div className="mb-8">
      <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Data Sharing</h2>
      <p className="text-gray-700 mb-2">We share data only with:</p>
      <ul className="list-disc pl-5 text-gray-700 space-y-2">
        <li>Service providers (booking-related info only)</li>
        <li>Payment processors</li>
        <li>Authorities if legally required</li>
      </ul>
      <p className="text-gray-700 mt-4 font-semibold">
        We do not sell your personal data to third parties.
      </p>
    </div>

    <div className="mb-8">
      <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Data Security</h2>
      <p className="text-gray-700">
        We implement reasonable technical and organizational safeguards to protect your data.
      </p>
    </div>

    <div className="mb-8">
      <h2 className="text-2xl font-bold text-gray-900 mb-4">6. User Rights</h2>
      <p className="text-gray-700 mb-2">You have the right to:</p>
      <ul className="list-disc pl-5 text-gray-700 space-y-2">
        <li>Access your data</li>
        <li>Request correction or deletion</li>
        <li>Withdraw consent</li>
      </ul>
    </div>

    <div className="mb-8">
      <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Location Services</h2>
      <p className="text-gray-700">
        Used only to match nearby providers. Users can disable location permissions.
      </p>
    </div>

    <div className="mb-8">
      <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Children</h2>
      <p className="text-gray-700">
        Our platform is not intended for users under 18 years of age.
      </p>
    </div>

    <div className="mb-8">
      <h2 className="text-2xl font-bold text-gray-900 mb-4">9. Updates</h2>
      <p className="text-gray-700">
        Policy updates will be posted on the platform. Continued use constitutes acceptance.
      </p>
    </div>

    <div className="mb-8">
      <h2 className="text-2xl font-bold text-gray-900 mb-4">10. Contact</h2>
      <p className="text-gray-700">
        Email: alexshapwa@gmail.com<br />
        Starkite Technologies<br />
        Namibia
      </p>
    </div>

    <div className="bg-blue-50 border border-blue-200 rounded-xl p-6 mt-8">
      <div className="flex items-start">
        <Shield className="h-6 w-6 text-blue-600 mr-3 mt-1" />
        <div>
          <h3 className="font-semibold text-blue-900 mb-2">Your Privacy Matters</h3>
          <p className="text-blue-800">
            By proceeding with registration, you acknowledge that you have read and 
            understood how we handle your personal information.
          </p>
        </div>
      </div>
    </div>
  </div>
);

// Provider Agreement Modal Content
const ProviderAgreementModalContent = () => (
  <div>
    <div className="mb-8">
      <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Relationship</h2>
      <ul className="list-disc pl-5 text-gray-700 space-y-2">
        <li>Service providers are independent contractors, not employees</li>
        <li>No employment benefits, salary, or guaranteed work</li>
      </ul>
    </div>

    <div className="mb-8">
      <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Provider Obligations</h2>
      <p className="text-gray-700 mb-2">Providers must:</p>
      <ul className="list-disc pl-5 text-gray-700 space-y-2">
        <li>Perform services professionally</li>
        <li>Use own tools & materials</li>
        <li>Comply with Namibian laws</li>
        <li>Maintain accurate profile info</li>
      </ul>
    </div>

    <div className="mb-8">
      <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Payments</h2>
      <ul className="list-disc pl-5 text-gray-700 space-y-2">
        <li>Providers receive payments minus platform commission</li>
        <li>Payments processed via approved methods</li>
      </ul>
    </div>

    <div className="mb-8">
      <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Ratings & Deactivation</h2>
      <p className="text-gray-700">
        Poor ratings, misconduct, or fraud may lead to suspension or removal from the platform.
      </p>
    </div>

    <div className="mb-8">
      <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Liability</h2>
      <p className="text-gray-700 mb-2">Providers are solely responsible for:</p>
      <ul className="list-disc pl-5 text-gray-700 space-y-2">
        <li>Service quality</li>
        <li>Safety</li>
        <li>Damages or losses</li>
      </ul>
    </div>

    <div className="mb-8">
      <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Termination</h2>
      <p className="text-gray-700">
        Either party may terminate access at any time in accordance with platform policies.
      </p>
    </div>

    <div className="mb-8">
      <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Governing Law</h2>
      <p className="text-gray-700">
        This agreement is governed by the laws of the Republic of Namibia.
      </p>
    </div>

    <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-6 mt-8">
      <div className="flex items-start">
        <Briefcase className="h-6 w-6 text-yellow-600 mr-3 mt-1" />
        <div>
          <h3 className="font-semibold text-yellow-900 mb-2">Important Notes for Service Providers</h3>
          <ul className="list-disc pl-5 text-yellow-800 space-y-2">
            <li>You are responsible for your own business insurance and certifications</li>
            <li>You set your own rates and availability</li>
            <li>The platform facilitates connections but you manage client relationships</li>
            <li>Tax obligations remain your responsibility</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
);

// Validation schema
const registerSchema = z.object({
  full_name: z.string()
    .min(2, 'Name must be at least 2 characters')
    .max(100, 'Name is too long'),
  email: z.string()
    .email('Please enter a valid email address'),
  phone: z.string()
    .min(10, 'Phone number must be at least 10 digits')
    .max(15, 'Phone number is too long')
    .regex(/^[0-9+\-\s()]*$/, 'Please enter a valid phone number'),
  password: z.string()
    .min(6, 'Password must be at least 6 characters')
    .max(50, 'Password is too long'),
  confirmPassword: z.string(),
  date_of_birth: z.string()
    .refine((dob) => {
      const birthDate = new Date(dob);
      const today = new Date();
      const age = today.getFullYear() - birthDate.getFullYear();
      const monthDiff = today.getMonth() - birthDate.getMonth();
      if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
        return age - 1 >= 18;
      }
      return age >= 18;
    }, 'You must be at least 18 years old to register'),
  accept_terms: z.literal(true, {
    errorMap: () => ({ message: 'You must accept the Terms & Conditions' }),
  }),
  accept_privacy: z.literal(true, {
    errorMap: () => ({ message: 'You must accept the Privacy Policy' }),
  }),
}).refine((data) => data.password === data.confirmPassword, {
  message: "Passwords don't match",
  path: ["confirmPassword"],
});

export default function RegisterPage() {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [registrationStep, setRegistrationStep] = useState(1);
  
  // Modal states
  const [showTermsModal, setShowTermsModal] = useState(false);
  const [showPrivacyModal, setShowPrivacyModal] = useState(false);
  const [showProviderAgreementModal, setShowProviderAgreementModal] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      full_name: '',
      email: '',
      phone: '',
      password: '',
      confirmPassword: '',
      date_of_birth: '',
      accept_terms: false,
      accept_privacy: false,
    },
  });

  const calculateAge = (dob) => {
    const birthDate = new Date(dob);
    const today = new Date();
    let age = today.getFullYear() - birthDate.getFullYear();
    const monthDiff = today.getMonth() - birthDate.getMonth();
    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
      age--;
    }
    return age;
  };

  const onSubmit = async (data) => {
    setIsLoading(true);
    
    try {
      console.log('Starting registration process...');
      console.log('Form data:', { ...data, password: '***' });
      
      const age = calculateAge(data.date_of_birth);
      console.log('Age calculated:', age);
      
      console.log('Step 1: Creating auth user...');
      
      const { data: authData, error: authError } = await supabase.auth.signUp({
        email: data.email,
        password: data.password,
        options: {
          data: {
            full_name: data.full_name,
            phone: data.phone,
            date_of_birth: data.date_of_birth,
            user_type: 'provider',
            accepted_terms: true,
            accepted_privacy: true,
          },
        },
      });

      console.log('Auth response:', {
        user: authData?.user?.id,
        session: authData?.session,
        error: authError
      });

      if (authError) {
        console.error('Auth error details:', authError);
        
        if (authError.message?.includes('already registered')) {
          throw new Error('This email is already registered. Please use a different email.');
        } else if (authError.message?.includes('User already registered')) {
          throw new Error('This email is already registered. Please use a different email.');
        } else {
          throw authError;
        }
      }

      if (!authData.user) {
        throw new Error('User creation failed. No user returned from auth.');
      }

      console.log('Auth user created:', authData.user.id);
      console.log('Email confirmation sent. Waiting for verification.');

      console.log('Registration successful!');
      setRegistrationStep(2);
      
      if (authData.user && !authData.session) {
        toast.success('Registration successful! Please check your email (including spam folder) to verify your account.');
      } else if (authData.session) {
        toast.success('Registration successful! Your account is now active.');
        setTimeout(() => {
          navigate('/thank-you');
        }, 3000);
      } else {
        toast.success('Registration submitted! Your account is being created.');
      }

    } catch (error) {
      console.error('Registration process error:', error);
      
      let errorMessage = 'Registration failed. Please try again.';
      
      if (error.message.includes('already registered')) {
        errorMessage = 'This email is already registered. Please use a different email.';
      } else if (error.message.includes('Password should be at least')) {
        errorMessage = 'Password is too weak. Please use a stronger password (min 6 characters).';
      } else if (error.message.includes('Invalid login credentials')) {
        errorMessage = 'Invalid credentials. Please check your email and password.';
      } else if (error.code === '23503') {
        errorMessage = 'Account creation in progress. Please try again in a moment.';
      } else if (error.message) {
        errorMessage = error.message;
      }
      
      toast.error(errorMessage);
      console.log('Full error object:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const dob = watch('date_of_birth');
  const age = dob ? calculateAge(dob) : null;

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Navigation */}
      <nav className="border-b border-gray-200 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link to="/" className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-teal-500 rounded-lg"></div>
              <span className="text-lg font-bold text-gray-900">VectorKite</span>
            </Link>
            <Link
              to="/"
              className="inline-flex items-center text-gray-600 hover:text-gray-900"
            >
              <ArrowLeft className="h-4 w-4 mr-1" />
              Back to Home
            </Link>
          </div>
        </div>
      </nav>

      {/* Modals */}
      <Modal
        isOpen={showTermsModal}
        onClose={() => setShowTermsModal(false)}
        title="Terms & Conditions"
      >
        <TermsModalContent />
      </Modal>

      <Modal
        isOpen={showPrivacyModal}
        onClose={() => setShowPrivacyModal(false)}
        title="Privacy Policy"
      >
        <PrivacyModalContent />
      </Modal>

      <Modal
        isOpen={showProviderAgreementModal}
        onClose={() => setShowProviderAgreementModal(false)}
        title="Service Provider Agreement"
      >
        <ProviderAgreementModalContent />
      </Modal>

      <div className="max-w-md mx-auto px-4 py-12">
        {/* Progress Steps */}
        <div className="flex items-center justify-center mb-10">
          <div className="flex items-center">
            <div className={`flex items-center justify-center w-10 h-10 rounded-full ${registrationStep >= 1 ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-500'}`}>
              1
            </div>
            <div className={`w-20 h-1 ${registrationStep >= 2 ? 'bg-blue-600' : 'bg-gray-200'}`}></div>
            <div className={`flex items-center justify-center w-10 h-10 rounded-full ${registrationStep >= 2 ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-500'}`}>
              2
            </div>
          </div>
        </div>

        {/* Step 1: Registration Form */}
        {registrationStep === 1 && (
          <div className="animate-fadeIn">
            <div className="text-center mb-8">
              <h1 className="text-3xl font-bold text-gray-900 mb-2">
                Join as Service Provider
              </h1>
              <p className="text-gray-600">
                Create your account and be among the first to join VectorKite Pro
              </p>
            </div>

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              {/* Full Name */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Full Name
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <User className="h-5 w-5 text-gray-400" />
                  </div>
                  <input
                    type="text"
                    {...register('full_name')}
                    className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 focus:outline-none transition"
                    placeholder="John Doe"
                  />
                </div>
                {errors.full_name && (
                  <p className="mt-1 text-sm text-red-600">{errors.full_name.message}</p>
                )}
              </div>

              {/* Email */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Email Address
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Mail className="h-5 w-5 text-gray-400" />
                  </div>
                  <input
                    type="email"
                    {...register('email')}
                    className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 focus:outline-none transition"
                    placeholder="you@example.com"
                  />
                </div>
                {errors.email && (
                  <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>
                )}
              </div>

              {/* Phone */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Phone Number
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Phone className="h-5 w-5 text-gray-400" />
                  </div>
                  <input
                    type="tel"
                    {...register('phone')}
                    className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 focus:outline-none transition"
                    placeholder="+264 81 234 5678"
                  />
                </div>
                {errors.phone && (
                  <p className="mt-1 text-sm text-red-600">{errors.phone.message}</p>
                )}
              </div>

              {/* Date of Birth */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Date of Birth
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Calendar className="h-5 w-5 text-gray-400" />
                  </div>
                  <input
                    type="date"
                    {...register('date_of_birth')}
                    className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 focus:outline-none transition"
                    max={new Date().toISOString().split('T')[0]}
                  />
                </div>
                {errors.date_of_birth && (
                  <p className="mt-1 text-sm text-red-600">{errors.date_of_birth.message}</p>
                )}
                {age !== null && age >= 18 && (
                  <p className="mt-1 text-sm text-green-600 flex items-center">
                    <CheckCircle className="h-4 w-4 mr-1" />
                    Age verified: {age} years old
                  </p>
                )}
                {age !== null && age < 18 && (
                  <p className="mt-1 text-sm text-red-600 flex items-center">
                    <X className="h-4 w-4 mr-1" />
                    You must be 18 or older to register
                  </p>
                )}
              </div>

              {/* Password */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Password
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Lock className="h-5 w-5 text-gray-400" />
                  </div>
                  <input
                    type={showPassword ? 'text' : 'password'}
                    {...register('password')}
                    className="block w-full pl-10 pr-10 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 focus:outline-none transition"
                    placeholder="••••••••"
                  />
                  <button
                    type="button"
                    className="absolute inset-y-0 right-0 pr-3 flex items-center"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? (
                      <EyeOff className="h-5 w-5 text-gray-400" />
                    ) : (
                      <Eye className="h-5 w-5 text-gray-400" />
                    )}
                  </button>
                </div>
                {errors.password && (
                  <p className="mt-1 text-sm text-red-600">{errors.password.message}</p>
                )}
              </div>

              {/* Confirm Password */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Confirm Password
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Lock className="h-5 w-5 text-gray-400" />
                  </div>
                  <input
                    type={showConfirmPassword ? 'text' : 'password'}
                    {...register('confirmPassword')}
                    className="block w-full pl-10 pr-10 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 focus:outline-none transition"
                    placeholder="••••••••"
                  />
                  <button
                    type="button"
                    className="absolute inset-y-0 right-0 pr-3 flex items-center"
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  >
                    {showConfirmPassword ? (
                      <EyeOff className="h-5 w-5 text-gray-400" />
                    ) : (
                      <Eye className="h-5 w-5 text-gray-400" />
                    )}
                  </button>
                </div>
                {errors.confirmPassword && (
                  <p className="mt-1 text-sm text-red-600">{errors.confirmPassword.message}</p>
                )}
              </div>

              {/* Terms & Conditions */}
              <div className="space-y-4 bg-blue-50 p-4 rounded-xl">
                <h3 className="font-semibold text-gray-900 flex items-center">
                  <FileText className="h-5 w-5 mr-2 text-blue-600" />
                  Legal Agreements
                </h3>
                
                {/* Terms & Conditions */}
                <div className="flex items-start">
                  <div className="flex items-center h-5">
                    <input
                      type="checkbox"
                      id="accept_terms"
                      {...register('accept_terms')}
                      className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                    />
                  </div>
                  <div className="ml-3">
                    <label htmlFor="accept_terms" className="text-sm text-gray-700">
                      I accept the{' '}
                      <button
                        type="button"
                        onClick={() => setShowTermsModal(true)}
                        className="text-blue-600 hover:text-blue-800 font-medium underline focus:outline-none"
                      >
                        Terms & Conditions
                      </button>
                    </label>
                    {errors.accept_terms && (
                      <p className="mt-1 text-sm text-red-600">{errors.accept_terms.message}</p>
                    )}
                  </div>
                </div>

                {/* Privacy Policy */}
                <div className="flex items-start">
                  <div className="flex items-center h-5">
                    <input
                      type="checkbox"
                      id="accept_privacy"
                      {...register('accept_privacy')}
                      className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                    />
                  </div>
                  <div className="ml-3">
                    <label htmlFor="accept_privacy" className="text-sm text-gray-700">
                      I accept the{' '}
                      <button
                        type="button"
                        onClick={() => setShowPrivacyModal(true)}
                        className="text-blue-600 hover:text-blue-800 font-medium underline focus:outline-none"
                      >
                        Privacy Policy
                      </button>
                    </label>
                    {errors.accept_privacy && (
                      <p className="mt-1 text-sm text-red-600">{errors.accept_privacy.message}</p>
                    )}
                  </div>
                </div>

                {/* Service Provider Agreement */}
                <div className="text-xs text-gray-600 mt-2">
                  <p>
                    By registering as a service provider, you also acknowledge the{' '}
                    <button
                      type="button"
                      onClick={() => setShowProviderAgreementModal(true)}
                      className="text-blue-600 hover:text-blue-800 underline focus:outline-none"
                    >
                      Service Provider Agreement
                    </button>
                    .
                  </p>
                </div>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isLoading || (age !== null && age < 18)}
                className="w-full py-4 px-4 bg-gradient-to-r from-blue-600 to-teal-500 text-white font-semibold rounded-xl hover:from-blue-700 hover:to-teal-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-50 disabled:cursor-not-allowed transition-all transform hover:scale-[1.02]"
              >
                {isLoading ? (
                  <span className="flex items-center justify-center">
                    <svg className="animate-spin h-5 w-5 mr-3 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Creating Account...
                  </span>
                ) : (
                  'Create Account'
                )}
              </button>

              {/* Already have account */}
              <div className="text-center pt-4 border-t border-gray-200">
                <p className="text-gray-600 text-sm">
                  Already registered? You'll be able to sign in when the{' '}
                  <span className="font-semibold text-blue-600">VectorKite Pro app</span> launches.
                </p>
              </div>
            </form>
          </div>
        )}

        {/* Step 2: Check Email */}
        {registrationStep === 2 && (
          <div className="animate-fadeIn text-center">
            <div className="mb-8">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-green-100 rounded-full mb-6">
                <CheckCircle className="h-10 w-10 text-green-600" />
              </div>
              <h2 className="text-3xl font-bold text-gray-900 mb-3">
                Registration Submitted
              </h2>
              <p className="text-gray-600 mb-6">
                Your registration for <span className="font-semibold">{watch('email')}</span> has been received.
              </p>
              <div className="bg-blue-50 border border-blue-200 rounded-xl p-4 mb-6">
                <p className="text-blue-800">
                  <Shield className="inline-block h-4 w-4 mr-1" />
                  Next Steps:
                </p>
                <ul className="text-blue-700 text-sm mt-2 list-disc pl-5 text-left">
                  <li>Check your email for verification instructions (including spam folder)</li>
                  <li>Complete your profile when the VectorKite Pro app launches</li>
                  <li>You'll be notified when the platform is live</li>
                </ul>
              </div>
              
              {process.env.NODE_ENV === 'development' && (
                <div className="mt-6 p-4 bg-gray-100 rounded-lg text-left">
                  <p className="text-sm text-gray-600 font-semibold">Debug Info:</p>
                  <p className="text-xs text-gray-500 mt-1">
                    Open browser console (F12) to see detailed registration logs.
                  </p>
                </div>
              )}
            </div>

            <div className="space-y-4">
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <Link
                  to="/"
                  className="inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r from-blue-600 to-teal-500 text-white font-semibold rounded-xl hover:from-blue-700 hover:to-teal-600 transition-all"
                >
                  Return to Homepage
                </Link>
                <button
                  onClick={() => setRegistrationStep(1)}
                  className="inline-flex items-center justify-center px-6 py-3 bg-gray-100 text-gray-700 font-semibold rounded-xl hover:bg-gray-200 transition-all"
                >
                  Register Another Account
                </button>
              </div>
              <p className="text-gray-500 text-sm mt-4">
                Questions? Contact us at{' '}
                <a href="mailto:alexshapwa@gmail.com" className="text-blue-600 hover:text-blue-800">
                  alexshapwa@gmail.com
                </a>
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
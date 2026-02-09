import { Link } from 'react-router-dom';
import { Shield, ArrowLeft, Lock } from 'lucide-react';

const PrivacyPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Navigation */}
      <nav className="border-b border-gray-200 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link to="/" className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-teal-500 rounded-lg"></div>
              <span className="text-lg font-bold text-gray-900">VektorKite</span>
            </Link>
            <Link
              to="/register"
              className="inline-flex items-center text-gray-600 hover:text-gray-900"
            >
              <ArrowLeft className="h-4 w-4 mr-1" />
              Back to Registration
            </Link>
          </div>
        </div>
      </nav>

      <div className="max-w-4xl mx-auto px-4 py-12">
        <div className="bg-white rounded-2xl shadow-lg p-8">
          {/* Header */}
          <div className="flex items-center gap-3 mb-8">
            <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
              <Shield className="h-6 w-6 text-blue-600" />
            </div>
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Privacy Policy</h1>
              <p className="text-gray-600">Last updated: {new Date().toLocaleDateString()}</p>
            </div>
          </div>

          {/* Privacy Content */}
          <div className="prose prose-blue max-w-none">
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

            {/* Acceptance Note */}
            <div className="bg-blue-50 border border-blue-200 rounded-xl p-6 mt-8">
              <div className="flex items-start">
                <Lock className="h-6 w-6 text-blue-600 mr-3 mt-1" />
                <div>
                  <h3 className="font-semibold text-blue-900 mb-2">Your Privacy Matters</h3>
                  <p className="text-blue-800">
                    By proceeding with registration, you acknowledge that you have read and 
                    understood how we handle your personal information.
                  </p>
                </div>
              </div>
            </div>

            {/* Back Button */}
            <div className="mt-8 pt-8 border-t border-gray-200">
              <Link
                to="/register"
                className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-600 to-teal-500 text-white font-semibold rounded-xl hover:from-blue-700 hover:to-teal-600 transition-all"
              >
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to Registration
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPage;
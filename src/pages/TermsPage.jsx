import { Link } from 'react-router-dom';
import { FileText, ArrowLeft, Shield } from 'lucide-react';

const TermsPage = () => {
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
              <FileText className="h-6 w-6 text-blue-600" />
            </div>
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Terms & Conditions</h1>
              <p className="text-gray-600">Last updated: {new Date().toLocaleDateString()}</p>
            </div>
          </div>

          {/* Terms Content */}
          <div className="prose prose-blue max-w-none">
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

            {/* Acceptance Note */}
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

export default TermsPage;
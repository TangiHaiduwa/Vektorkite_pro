import { Link } from 'react-router-dom';
import { Briefcase, ArrowLeft, FileCheck } from 'lucide-react';

const ProviderAgreementPage = () => {
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
              <Briefcase className="h-6 w-6 text-blue-600" />
            </div>
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Service Provider Agreement</h1>
              <p className="text-gray-600">For registered service providers on VectorKite</p>
            </div>
          </div>

          {/* Agreement Content */}
          <div className="prose prose-blue max-w-none">
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

            {/* Important Notes */}
            <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-6 mt-8">
              <div className="flex items-start">
                <FileCheck className="h-6 w-6 text-yellow-600 mr-3 mt-1" />
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

export default ProviderAgreementPage;
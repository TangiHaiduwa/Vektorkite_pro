import { Link } from 'react-router-dom';
import { CheckCircle, Download, Smartphone, Mail, Calendar, Users } from 'lucide-react';

const ThankYouPage = () => {
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
          </div>
        </div>
      </nav>

      <div className="max-w-4xl mx-auto px-4 py-12">
        {/* Success Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-24 h-24 bg-gradient-to-br from-green-50 to-teal-50 rounded-full mb-6">
            <CheckCircle className="h-12 w-12 text-green-600" />
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Welcome to VektorKite!
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Your registration is complete and you're now part of Namibia's fastest-growing service platform.
          </p>
        </div>

        {/* App Coming Soon Badge */}
        <div className="max-w-lg mx-auto mb-12">
          <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl p-6 text-center text-white shadow-lg">
            <div className="inline-flex items-center gap-3 mb-4">
              <div className="h-4 w-4 bg-green-400 rounded-full animate-pulse"></div>
              <h2 className="text-2xl font-bold">VectorKite Pro App Coming Soon!</h2>
            </div>
            <p className="text-purple-100 mb-6">
              We're building something amazing for you. Get ready to connect with clients and grow your business like never before.
            </p>
            <div className="flex items-center justify-center space-x-4">
              <Smartphone className="h-8 w-8" />
              <span className="text-lg font-semibold">Mobile App Launch: Q1 2024</span>
            </div>
          </div>
        </div>

        {/* Next Steps */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
            <div className="inline-flex items-center justify-center w-12 h-12 bg-blue-50 rounded-lg mb-4">
              <Mail className="h-6 w-6 text-blue-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Stay Updated</h3>
            <p className="text-gray-600">
              We'll email you with app launch updates, training opportunities, and early access offers.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
            <div className="inline-flex items-center justify-center w-12 h-12 bg-teal-50 rounded-lg mb-4">
              <Calendar className="h-6 w-6 text-teal-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Prepare Your Profile</h3>
            <p className="text-gray-600">
              Gather your service certificates, ID documents, and portfolio photos for when the app launches.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
            <div className="inline-flex items-center justify-center w-12 h-12 bg-purple-50 rounded-lg mb-4">
              <Users className="h-6 w-6 text-purple-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Tell Others</h3>
            <p className="text-gray-600">
              Share with fellow service providers. More providers means more clients for everyone!
            </p>
          </div>
        </div>

        {/* Important Information */}
        <div className="bg-blue-50 border border-blue-200 rounded-2xl p-8 mb-12">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            What Happens Next?
          </h3>
          <div className="space-y-4">
            <div className="flex items-start">
              <div className="flex-shrink-0 w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center mt-1">
                <span className="text-white text-sm font-bold">1</span>
              </div>
              <div className="ml-4">
                <h4 className="font-semibold text-gray-900">App Development</h4>
                <p className="text-gray-600">
                  We're working hard to build the best platform for service providers in Namibia.
                </p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="flex-shrink-0 w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center mt-1">
                <span className="text-white text-sm font-bold">2</span>
              </div>
              <div className="ml-4">
                <h4 className="font-semibold text-gray-900">Launch Notification</h4>
                <p className="text-gray-600">
                  You'll receive an email when the app is ready for download from the App Store and Google Play.
                </p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="flex-shrink-0 w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center mt-1">
                <span className="text-white text-sm font-bold">3</span>
              </div>
              <div className="ml-4">
                <h4 className="font-semibold text-gray-900">Complete Your Profile</h4>
                <p className="text-gray-600">
                  Once the app launches, log in with your credentials and complete your service provider profile.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="text-center space-y-4">
          <Link
            to="/"
            className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white bg-gradient-to-r from-blue-600 to-teal-500 rounded-xl hover:from-blue-700 hover:to-teal-600 transition-all transform hover:scale-105 shadow-lg"
          >
            Return to Homepage
          </Link>
          <div>
            <p className="text-gray-500">
              Questions? Contact us at{' '}
              <a href="mailto:alexshapwa@gmail.com" className="text-blue-600 hover:text-blue-800 font-medium">
                alexshapwa@gmail.com
              </a>
            </p>
          </div>
        </div>

        {/* Final Message */}
        <div className="mt-16 pt-8 border-t border-gray-200 text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Thank You for Joining Us!
          </h3>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Together, we're building the future of service work in Namibia. Your skills deserve a platform that helps you thrive, and we're committed to making that happen.
          </p>
          <div className="mt-6">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-100 to-teal-100 rounded-full">
              <Download className="h-4 w-4 text-blue-600" />
              <span className="font-semibold text-blue-800">
                Watch your inbox for the app download instructions!
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ThankYouPage;
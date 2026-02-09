import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Sparkles, Users, Shield, Clock, Star, ArrowRight, Target, Globe, Heart, Check } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const LandingPage = () => {
  const [email, setEmail] = useState('');

  const handleEmailSubmit = (e) => {
    e.preventDefault();
    console.log('Waitlist email:', email);
    setEmail('');
    alert('Thank you for your interest! We\'ll keep you updated on our launch progress.');
  };

  const mainCategories = [
    { name: 'Plumbing', icon: '💧', subCount: 10, color: 'from-blue-100 to-blue-50' },
    { name: 'Electrical', icon: '⚡', subCount: 10, color: 'from-yellow-100 to-yellow-50' },
    { name: 'Cleaning', icon: '🧹', subCount: 14, color: 'from-green-100 to-green-50' },
    { name: 'Handyman', icon: '🔧', subCount: 10, color: 'from-orange-100 to-orange-50' },
    { name: 'Gardening', icon: '🌿', subCount: 8, color: 'from-emerald-100 to-emerald-50' },
    { name: 'IT Support', icon: '💻', subCount: 11, color: 'from-purple-100 to-purple-50' },
    { name: 'Babysitting', icon: '👶', subCount: 7, color: 'from-pink-100 to-pink-50' },
    { name: 'Photography', icon: '📷', subCount: 8, color: 'from-indigo-100 to-indigo-50' },
    { name: 'Vehicle Services', icon: '🚗', subCount: 10, color: 'from-red-100 to-red-50' },
    { name: 'Tutoring', icon: '📚', subCount: 8, color: 'from-cyan-100 to-cyan-50' },
    { name: 'Welding', icon: '🔥', subCount: 8, color: 'from-amber-100 to-amber-50' },
    { name: 'Crocheting', icon: '🧶', subCount: 8, color: 'from-rose-100 to-rose-50' },
    { name: 'Agent Services', icon: '🤝', subCount: 11, color: 'from-teal-100 to-teal-50' },
    { name: 'Tiling', icon: '🧱', subCount: 8, color: 'from-stone-100 to-stone-50' },
    { name: 'Car Services', icon: '🚙', subCount: 10, color: 'from-red-100 to-orange-50' },
  ];

  const plumbingSubcategories = [
    'Water Supply Services',
    'Drainage & Wastewater',
    'Toilet Services',
    'Tap & Faucet Services',
    'Bathroom Services',
    'Kitchen Plumbing',
    'Geyser/Water Heater',
    'Gas Plumbing',
    'Stormwater & Outdoor',
    'Maintenance & Inspections'
  ];

  const benefits = [
    { 
      icon: Users, 
      title: 'Comprehensive Coverage', 
      description: '15+ main categories with detailed subcategories for every specialty'
    },
    { 
      icon: Shield, 
      title: 'Specialized Profiles', 
      description: 'Highlight your specific skills and certifications within your category'
    },
    { 
      icon: Clock, 
      title: 'Category-Specific Tools', 
      description: 'Features tailored to different types of service work'
    },
    { 
      icon: Star, 
      title: 'Targeted Matching', 
      description: 'Connect with clients looking for your specific expertise'
    },
  ];

  const steps = [
    { number: '01', title: 'Register Your Service', description: 'Choose your main category and specific subcategories' },
    { number: '02', title: 'Get Early Access', description: 'Be among the first to join when we launch' },
    { number: '03', title: 'Complete Your Profile', description: 'Add your services, certifications, and portfolio' },
    { number: '04', title: 'Start Earning', description: 'Connect with clients and grow your business' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-100 to-teal-100 rounded-full mb-6">
            <div className="h-2 w-2 bg-blue-600 rounded-full animate-pulse"></div>
            <span className="font-semibold text-blue-800">
              Launching Soon Across Namibia
            </span>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Your Skills,{' '}
            <span className="bg-gradient-to-r from-blue-600 to-teal-500 bg-clip-text text-transparent">
              Our Platform
            </span>
          </h1>
          
          <p className="text-xl text-gray-600 mb-10 max-w-3xl mx-auto">
            From plumbing to photography, IT support to tutoring - we're building Namibia's most comprehensive 
            service platform. Join professionals across 15+ specialized categories.
          </p>
          
          {/* Quick Stats */}
          <div className="grid grid-cols-3 gap-4 max-w-lg mx-auto mb-10">
            <div className="text-center p-4">
              <div className="text-3xl font-bold text-blue-600">15+</div>
              <div className="text-gray-600 text-sm">Service Categories</div>
            </div>
            <div className="text-center p-4">
              <div className="text-3xl font-bold text-teal-600">100+</div>
              <div className="text-gray-600 text-sm">Specific Services</div>
            </div>
            <div className="text-center p-4">
              <div className="text-3xl font-bold text-purple-600">∞</div>
              <div className="text-gray-600 text-sm">Growth Potential</div>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Link
              to="/register"
              className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white bg-gradient-to-r from-blue-600 to-teal-500 rounded-xl hover:from-blue-700 hover:to-teal-600 transition-all transform hover:scale-105 shadow-lg"
            >
              Register Your Service
              <Sparkles className="ml-2 h-5 w-5" />
            </Link>
            <a
              href="#categories"
              className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-gray-700 bg-white border-2 border-gray-300 rounded-xl hover:border-blue-500 transition-all"
            >
              Browse Categories
              <ArrowRight className="ml-2 h-5 w-5" />
            </a>
          </div>
          
          {/* App Coming Soon Badge */}
          <div className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-purple-100 to-blue-100 rounded-full mb-12">
            <div className="h-3 w-3 bg-green-500 rounded-full animate-pulse"></div>
            <span className="font-semibold text-purple-800">
              VektorKite Pro App Launching Soon!
            </span>
          </div>

          {/* Value Proposition */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto mb-20">
            <div className="text-center p-6 bg-white rounded-2xl shadow-sm border border-gray-100">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-blue-50 rounded-lg mb-4">
                <Target className="h-6 w-6 text-blue-600" />
              </div>
              <div className="text-xl font-bold text-gray-900 mb-2">For Service Providers</div>
              <div className="text-gray-600">
                Find more clients, manage your business, and grow your earnings in your specialty
              </div>
            </div>
            
            <div className="text-center p-6 bg-white rounded-2xl shadow-sm border border-gray-100">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-teal-50 rounded-lg mb-4">
                <Heart className="h-6 w-6 text-teal-600" />
              </div>
              <div className="text-xl font-bold text-gray-900 mb-2">For Our Community</div>
              <div className="text-gray-600">
                Access reliable, verified professionals for your home and business needs
              </div>
            </div>
            
            <div className="text-center p-6 bg-white rounded-2xl shadow-sm border border-gray-100">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-purple-50 rounded-lg mb-4">
                <Globe className="h-6 w-6 text-purple-600" />
              </div>
              <div className="text-xl font-bold text-gray-900 mb-2">For Namibia</div>
              <div className="text-gray-600">
                Supporting local talent and building a stronger service economy
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Categories Section */}
      <section id="categories" className="py-16 bg-gray-50">
        <div className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-4">
            Comprehensive Service Categories
          </h2>
          <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
            We support a wide range of professional services across multiple specialized categories. 
            Find your niche and join as a provider in your area of expertise.
          </p>
          
          {/* Main Categories Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 mb-12">
            {mainCategories.map((category, index) => (
              <div
                key={index}
                className={`bg-gradient-to-br ${category.color} p-4 rounded-xl shadow-sm hover:shadow-md transition-shadow text-center group cursor-pointer border border-white/50`}
              >
                <div className="text-2xl mb-2 transform group-hover:scale-110 transition-transform">{category.icon}</div>
                <h3 className="font-semibold text-gray-900 mb-1">{category.name}</h3>
                <p className="text-xs text-gray-600">{category.subCount} subcategories</p>
              </div>
            ))}
          </div>

          {/* Example Subcategories Showcase */}
          <div className="bg-white rounded-2xl p-8 shadow-sm mb-8 border border-gray-200">
            <div className="flex flex-col md:flex-row items-center justify-between mb-6">
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  Detailed Service Breakdown: Plumbing
                </h3>
                <p className="text-gray-600">
                  Each main category includes specific subcategories to match your exact skills
                </p>
              </div>
              <div className="mt-4 md:mt-0">
                <div className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-800 rounded-full">
                  <span className="text-2xl mr-2">💧</span>
                  <span className="font-semibold">Plumbing Category</span>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3">
              {plumbingSubcategories.map((subcat, index) => (
                <div key={index} className="bg-blue-50 text-blue-800 px-3 py-2 rounded-lg text-sm font-medium text-center hover:bg-blue-100 transition-colors">
                  {subcat}
                </div>
              ))}
            </div>
            <div className="mt-6 pt-6 border-t border-gray-200">
              <p className="text-gray-600 text-sm text-center">
                <Check className="inline-block h-4 w-4 text-green-500 mr-1" />
                Similar detailed breakdowns available for all 15+ categories
              </p>
            </div>
          </div>

          <div className="text-center">
            <Link
              to="/register"
              className="inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r from-blue-600 to-teal-500 text-white font-semibold rounded-xl hover:from-blue-700 hover:to-teal-600 transition-all shadow-lg"
            >
              Register Your Service Category
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
            <p className="text-gray-600 text-sm mt-4">
              Select from 15+ main categories and 100+ specific services during registration
            </p>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section id="benefits" className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-4">
          Built for Every Service Professional
        </h2>
        <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
          Whether you're a plumber, tutor, cleaner, photographer, or IT specialist - 
          we have a place for you on our platform.
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <div key={index} className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:border-blue-200 transition-colors">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-br from-blue-50 to-teal-50 rounded-lg mb-4">
                <benefit.icon className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{benefit.title}</h3>
              <p className="text-gray-600">{benefit.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="py-16 bg-gradient-to-br from-blue-50 to-teal-50">
        <div className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            How It Works
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="relative">
                <div className="bg-white p-8 rounded-2xl shadow-lg">
                  <div className="text-4xl font-bold text-blue-600 mb-4">{step.number}</div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{step.title}</h3>
                  <p className="text-gray-600">{step.description}</p>
                </div>
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-12 -right-4 w-8 h-0.5 bg-blue-300"></div>
                )}
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link
              to="/register"
              className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white bg-gradient-to-r from-blue-600 to-teal-500 rounded-xl hover:from-blue-700 hover:to-teal-600 transition-all transform hover:scale-105 shadow-lg"
            >
              Get Started Today
            </Link>
            <p className="text-gray-600 mt-4">
              Registration is free. No commitments until we launch.
            </p>
          </div>
        </div>
      </section>

      {/* Community CTA */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <div className="bg-gradient-to-r from-blue-600 to-teal-500 rounded-3xl p-8 md:p-12 text-center text-white">
          <h2 className="text-3xl font-bold mb-4">Building Together</h2>
          <p className="text-blue-100 mb-8 max-w-2xl mx-auto">
            We're creating this platform with input from service providers like you. 
            Share your ideas and help us build something that truly works for Namibia's service community.
          </p>
          <form onSubmit={handleEmailSubmit} className="max-w-md mx-auto">
            <div className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your email address"
                className="flex-grow px-6 py-3 rounded-xl text-gray-900 focus:outline-none focus:ring-2 focus:ring-white/30"
                required
              />
              <button
                type="submit"
                className="px-8 py-3 bg-white text-blue-600 font-semibold rounded-xl hover:bg-gray-100 transition-colors"
              >
                Share Feedback
              </button>
            </div>
            <p className="text-blue-100 text-sm mt-3">
              We value your input and will keep you updated on our progress.
            </p>
          </form>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-3xl mx-auto">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Ready to Be Part of Something New?
          </h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Join other forward-thinking service providers who are securing their spot on 
            Namibia's most comprehensive service platform.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/register"
              className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white bg-gradient-to-r from-blue-600 to-teal-500 rounded-xl hover:from-blue-700 hover:to-teal-600 transition-all shadow-lg"
            >
              Register Your Category
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <a
              href="#categories"
              className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-gray-700 bg-white border-2 border-gray-300 rounded-xl hover:border-blue-500 transition-all"
            >
              Browse All Categories
            </a>
          </div>
          <p className="text-gray-500 text-sm mt-6">
            Choose from 15+ main categories during registration
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default LandingPage;
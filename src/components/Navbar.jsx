import { Link } from 'react-router-dom';
import { Menu, X, Wrench, ArrowRight } from 'lucide-react';
import { useState } from 'react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Categories', href: '#categories' },
    { name: 'How It Works', href: '#how-it-works' },
    { name: 'Benefits', href: '#benefits' },
  ];

  return (
    <nav className="fixed w-full bg-white/95 backdrop-blur-sm z-50 border-b border-gray-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-9 h-9 bg-gradient-to-r from-blue-600 to-teal-500 rounded-lg flex items-center justify-center">
              <Wrench className="h-5 w-5 text-white" />
            </div>
            <div>
              <span className="text-xl font-bold text-gray-900">VectorKite</span>
              <span className="text-xs font-semibold text-blue-600 block -mt-1">PRO</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-gray-700 hover:text-blue-600 font-medium transition-colors text-sm"
              >
                {link.name}
              </a>
            ))}
            <Link
              to="/register"
              className="ml-4 px-5 py-2 bg-gradient-to-r from-blue-600 to-teal-500 text-white font-semibold rounded-xl hover:from-blue-700 hover:to-teal-600 transition-all text-sm inline-flex items-center"
            >
              Register Now
              <ArrowRight className="ml-1 h-4 w-4" />
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-lg text-gray-700 hover:bg-gray-100"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200">
            <div className="flex flex-col space-y-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-gray-700 hover:text-blue-600 font-medium py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.name}
                </a>
              ))}
              <Link
                to="/register"
                className="px-5 py-3 bg-gradient-to-r from-blue-600 to-teal-500 text-white font-semibold rounded-xl text-center mt-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Register as Service Provider
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
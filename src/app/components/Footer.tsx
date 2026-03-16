import { Link } from 'react-router';
import { GraduationCap, Phone, Mail } from 'lucide-react';
import logo from '../../assets/logo.png';

export function Footer() {
  const quickLinks = [
    { path: '/', label: 'Home' },
    { path: '/universities', label: 'Universities' },
    { path: '/services', label: 'Services' },
    { path: '/referral-program', label: 'Referral Program' },
    { path: '/contact', label: 'Contact' },
  ];

  return (
    <footer className="bg-gradient-to-br from-gray-900 to-gray-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Brand Section */}
          <div>
            <Link to="/" className="flex items-center gap-2 mb-4">
            <img
              src={logo}
              alt="Shree Marg Logo"
              className="h-16 w-auto group-hover:scale-105 transition-transform"
            />
              <div>
                <h3 className="text-xl font-bold">Shree Marg</h3>
                <p className="text-sm text-gray-400">Education Guidance</p>
              </div>
            </Link>
            <p className="text-gray-400 mb-4">
              Your Partner From College Admission To Career Success
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact</h4>
            <div className="space-y-3">
              <a
                href="tel:7601005805"
                className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors"
              >
                <Phone className="w-5 h-5" />
                <span>7601005805</span>
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2026 Shree Marg. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}

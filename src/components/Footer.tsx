import React from 'react';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <MapPin className="w-8 h-8 text-blue-400" />
              <h3 className="text-2xl font-bold">CHC MACHINE TRACKER</h3>
            </div>
            <p className="text-gray-300 mb-4 leading-relaxed">
              Revolutionary tracking technology that adapts to any Agricultural equipment. Monitor location, performance, and security in real-time.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="/" className="text-gray-300 hover:text-blue-400 transition-colors">Home</a></li>
              <li><a href="/about" className="text-gray-300 hover:text-blue-400 transition-colors">About</a></li>
              <li><a href="/contact" className="text-gray-300 hover:text-blue-400 transition-colors">Contact</a></li>
              <li><a href="/contact" className="text-gray-300 hover:text-blue-400 transition-colors">Get Quote</a></li>
              <li><a href="/privacy_policy" className="text-gray-300 hover:text-blue-400 transition-colors">Privacy Policy</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-blue-400" />
                <span className="text-gray-300">+91 91823 26266</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-blue-400" />
                <span className="text-gray-300">harishje55@gmail.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <Clock className="w-5 h-5 text-blue-400" />
                <span className="text-gray-300">24/7 Support</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            © 2025 ADVAIT TELESERVICES. All rights reserved. | Advanced GPS Tracking Solutions
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
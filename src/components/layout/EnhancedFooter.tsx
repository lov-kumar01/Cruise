
import React from 'react';
import { Link } from 'react-router-dom';
import { Ship, Facebook, Twitter, Instagram, Youtube, Mail, PhoneCall, Home, FileText, ShieldCheck } from 'lucide-react';

const EnhancedFooter = () => {
  return (
    <footer className="bg-white/90 backdrop-blur-md border-t border-gray-100 pt-12 pb-6 relative z-10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Ship className="h-6 w-6 text-cruise-600" />
              <span className="font-semibold text-xl">OceanVoyage</span>
            </div>
            <p className="text-gray-600 mb-6">
              Your ultimate destination for cruise bookings, reviews and travel planning.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-cruise-600 transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-cruise-600 transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-cruise-600 transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-cruise-600 transition-colors">
                <Youtube size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="font-semibold text-lg mb-4">Cruise Lines</h3>
            <ul className="space-y-2">
              <li><Link to="/cruises/royal-caribbean" className="text-gray-600 hover:text-cruise-600 transition-colors">Royal Caribbean</Link></li>
              <li><Link to="/cruises/celebrity" className="text-gray-600 hover:text-cruise-600 transition-colors">Celebrity Cruises</Link></li>
              <li><Link to="/cruises/carnival" className="text-gray-600 hover:text-cruise-600 transition-colors">Carnival Cruise Line</Link></li>
              <li><Link to="/cruises/disney" className="text-gray-600 hover:text-cruise-600 transition-colors">Disney Cruise Line</Link></li>
              <li><Link to="/cruises" className="text-gray-600 hover:text-cruise-600 transition-colors">View All Cruises</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-lg mb-4">Navigation</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-600 hover:text-cruise-600 transition-colors flex items-center gap-2">
                <Home size={16} />
                <span>Home</span>
              </Link></li>
              <li><Link to="/about" className="text-gray-600 hover:text-cruise-600 transition-colors flex items-center gap-2">
                <FileText size={16} />
                <span>About Us</span>
              </Link></li>
              <li><Link to="/privacy-policy" className="text-gray-600 hover:text-cruise-600 transition-colors flex items-center gap-2">
                <ShieldCheck size={16} />
                <span>Privacy Policy</span>
              </Link></li>
              <li><Link to="/terms-conditions" className="text-gray-600 hover:text-cruise-600 transition-colors flex items-center gap-2">
                <FileText size={16} />
                <span>Terms & Conditions</span>
              </Link></li>
              <li><Link to="/contact" className="text-gray-600 hover:text-cruise-600 transition-colors">Contact Us</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-lg mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-center">
                <PhoneCall size={18} className="text-cruise-600 mr-2" />
                <span className="text-gray-600">+1 (800) 123-4567</span>
              </li>
              <li className="flex items-center">
                <Mail size={18} className="text-cruise-600 mr-2" />
                <span className="text-gray-600">support@oceanvoyage.com</span>
              </li>
            </ul>
            <div className="mt-6">
              <h4 className="font-medium mb-2">Subscribe to Newsletter</h4>
              <div className="flex">
                <input 
                  type="email" 
                  placeholder="Your email" 
                  className="px-4 py-2 border border-gray-300 rounded-l-md focus:outline-none focus:ring-1 focus:ring-cruise-500 focus:border-cruise-500 w-full" 
                />
                <button className="bg-cruise-600 text-white px-4 py-2 rounded-r-md hover:bg-cruise-700 transition-colors">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-200 pt-6 text-center">
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} OceanVoyage. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default EnhancedFooter;

import React, { useState } from 'react';
import { 
  Bars3Icon, 
  XMarkIcon, 
  PhoneIcon, 
  BoltIcon,
  WrenchScrewdriverIcon,
  SunIcon
} from '@heroicons/react/24/outline';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const menuItems = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Our Work', href: '#work' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className="bg-blue-700 shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo and Company Name */}
          <div className="flex items-center space-x-2">
            <div className="flex items-center space-x-1">
              <BoltIcon className="h-6 w-6 text-yellow-300" />
              <WrenchScrewdriverIcon className="h-6 w-6 text-orange-300" />
              <SunIcon className="h-6 w-6 text-green-300" />
            </div>
            <span className="text-xl font-bold text-white">
              ProServices
            </span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {menuItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-white hover:text-blue-200 font-medium transition-colors duration-300 relative group"
              >
                {item.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-200 transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
          </div>

          {/* Emergency Contact Button */}
          <div className="hidden md:flex items-center">
            <a
              href="tel:+1234567890"
              className="bg-white text-blue-700 px-4 py-2 rounded-lg font-medium hover:bg-blue-100 transition-colors duration-300 flex items-center space-x-2"
            >
              <PhoneIcon className="h-4 w-4" />
              <span>24/7 Emergency</span>
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-white hover:text-blue-200 p-2"
            >
              {isMenuOpen ? (
                <XMarkIcon className="h-6 w-6" />
              ) : (
                <Bars3Icon className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden ${isMenuOpen ? 'block' : 'hidden'}`}>
        <div className="bg-blue-600 border-t border-blue-500">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {menuItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="block px-3 py-2 text-white hover:text-blue-200 hover:bg-blue-700 font-medium transition-colors duration-300"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </a>
            ))}
            <div className="px-3 py-2">
              <a
                href="tel:+1234567890"
                className="bg-white text-blue-700 px-4 py-2 rounded-lg font-medium hover:bg-blue-100 transition-colors duration-300 flex items-center space-x-2 w-full justify-center"
              >
                <PhoneIcon className="h-4 w-4" />
                <span>24/7 Emergency</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
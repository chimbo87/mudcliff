import React, { useState } from 'react';
import { NavLink, useNavigate } from "react-router-dom";
import logo from '../../assets/icons/mudcliff-logo.png'
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
  const navigate = useNavigate();

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const menuItems = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Our Work', path: '/our-work' },
    { name: 'Contact', path: '/contacts' },
  ];

  return (
    <nav className="bg-blue-700 shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          
          {/* Logo */}
          <div 
            className="flex items-center space-x-2 cursor-pointer"
            onClick={() => navigate('/')}
          >
         <div className="h-16 w-16 flex items-center justify-center flex-shrink-0">
              <img
                src={logo}
                alt="mudcliff Logo"
                className="h-full w-full object-contain"
              />
            </div>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {menuItems.map((item) => (
              <NavLink
                key={item.name}
                to={item.path}
                className={({ isActive }) =>
                  `relative font-medium transition-colors duration-300 
                  ${isActive ? "text-yellow-300" : "text-white hover:text-blue-200"}`
                }
              >
                {item.name}
                {/* Underline animation */}
                <span
                  className="absolute -bottom-1 left-0 w-0 h-0.5 bg-yellow-300 transition-all duration-300 group-hover:w-full"
                ></span>
              </NavLink>
            ))}
          </div>

          {/* Emergency Contact Button */}
          <div className="hidden md:flex items-center">
            <a
              href="tel:+1234567890"
              className="bg-white text-blue-700 px-4 py-2 rounded-lg font-medium hover:bg-blue-100 transition-colors duration-300 flex items-center space-x-2"
            >
              <PhoneIcon className="h-4 w-4" />
              <span>Get A Quote</span>
            </a>
          </div>

          {/* Mobile Get Started Button and Menu Button */}
          <div className="md:hidden flex items-center space-x-2">
            <button
              className="bg-white text-blue-700 px-3 py-1.5 rounded-lg font-medium hover:bg-blue-100 transition-colors duration-300 text-sm"
              onClick={() => navigate('/contacts')} // You can change this to your desired action
            >
              Get Started
            </button>
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
              <NavLink
                key={item.name}
                to={item.path}
                className={({ isActive }) =>
                  `block px-3 py-2 font-medium rounded-md transition-colors duration-300 
                  ${isActive 
                    ? "bg-blue-800 text-yellow-300" 
                    : "text-white hover:text-blue-200 hover:bg-blue-700"}`
                }
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </NavLink>
            ))}

            {/* Mobile Emergency Button */}
            <div className="px-3 py-2">
              <a
                href="tel:+263773279790"
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
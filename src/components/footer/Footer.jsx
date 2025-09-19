import React from 'react';
import { 
  BoltIcon,
  WrenchScrewdriverIcon,
  SunIcon,
  PhoneIcon,
  EnvelopeIcon,
  MapPinIcon,
  ClockIcon,
  ArrowRightIcon,
  ShieldCheckIcon,
  StarIcon,
  CheckCircleIcon
} from '@heroicons/react/24/outline';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const services = [
    { name: 'Residential Electrical', href: '#electrical', icon: BoltIcon },
    { name: 'Commercial Electrical', href: '#electrical', icon: BoltIcon },
    { name: 'Plumbing Installation', href: '#plumbing', icon: WrenchScrewdriverIcon },
    { name: 'Plumbing Repairs', href: '#plumbing', icon: WrenchScrewdriverIcon },
    { name: 'Solar Panel Installation', href: '#solar', icon: SunIcon },
    { name: 'Solar Maintenance', href: '#solar', icon: SunIcon },
  ];

  const serviceAreas = [
    'Harare',
    'Bulawayo', 
    'Chitungwiza',
    'Gweru',
    'Mutare',
    'Kwekwe'
  ];

  const quickLinks = [
    { name: 'About Us', href: '#about' },
    { name: 'Our Services', href: '#services' },
    { name: 'Our Work', href: '#work' },
    { name: 'Testimonials', href: '#testimonials' },
    { name: 'Contact Us', href: '#contact' },
    { name: 'Get Quote', href: '#quote' }
  ];

  const legalLinks = [
    { name: 'Privacy Policy', href: '#privacy' },
    { name: 'Terms of Service', href: '#terms' },
    { name: 'Service Agreement', href: '#agreement' },
    { name: 'Warranty Information', href: '#warranty' }
  ];

  const certifications = [
    'Licensed Electricians',
    'Certified Plumbers', 
    'Solar Installation Certified',
    'Fully Insured',
    'Safety Compliant'
  ];

  return (
    <footer className="bg-gray-900 text-white">
      {/* Emergency Contact Bar */}
      <div className="bg-red-600 py-3">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row items-center justify-between text-center sm:text-left">
            <div className="flex items-center space-x-2 mb-2 sm:mb-0">
              <PhoneIcon className="h-5 w-5" />
              <span className="font-semibold">24/7 Emergency Service Available</span>
            </div>
            <div className="flex items-center space-x-4">
              <a 
                href="tel:+263123456789" 
                className="bg-white text-red-600 px-4 py-2 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-300"
              >
                Call: +263 123 456 789
              </a>
              <a 
                href="https://wa.me/263123456789" 
                className="bg-green-500 text-white px-4 py-2 rounded-lg font-semibold hover:bg-green-600 transition-colors duration-300 flex items-center space-x-2"
              >
                <span>WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
            
            {/* Company Info Column */}
            <div className="lg:col-span-1">
              {/* Logo and Company Name */}
              <div className="flex items-center space-x-2 mb-6">
                <div className="flex items-center space-x-1">
                  <BoltIcon className="h-8 w-8 text-blue-400" />
                  <WrenchScrewdriverIcon className="h-8 w-8 text-orange-400" />
                  <SunIcon className="h-8 w-8 text-green-400" />
                </div>
                <span className="text-2xl font-bold">ProServices</span>
              </div>
              
              <p className="text-gray-300 mb-6 leading-relaxed">
                Zimbabwe's trusted provider of electrical, plumbing, and solar services. 
                Serving residential and commercial clients across major cities with 
                professional excellence since 2009.
              </p>

              {/* Contact Info */}
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <PhoneIcon className="h-5 w-5 text-blue-400 flex-shrink-0" />
                  <div>
                    <div className="font-semibold">+263 123 456 789</div>
                    <div className="text-sm text-gray-400">24/7 Emergency Line</div>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <EnvelopeIcon className="h-5 w-5 text-orange-400 flex-shrink-0" />
                  <div>
                    <div className="font-semibold">info@proservices.co.zw</div>
                    <div className="text-sm text-gray-400">Get Free Quote</div>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <MapPinIcon className="h-5 w-5 text-green-400 flex-shrink-0" />
                  <div>
                    <div className="font-semibold">123 Main Street, Harare</div>
                    <div className="text-sm text-gray-400">Head Office</div>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <ClockIcon className="h-5 w-5 text-blue-400 flex-shrink-0" />
                  <div>
                    <div className="font-semibold">Mon-Fri: 7AM-6PM</div>
                    <div className="text-sm text-gray-400">Emergency: 24/7</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Services Column */}
            <div>
              <h3 className="text-xl font-bold mb-6">Our Services</h3>
              <ul className="space-y-3">
                {services.map((service, index) => (
                  <li key={index}>
                    <a 
                      href={service.href}
                      className="flex items-center space-x-2 text-gray-300 hover:text-white transition-colors duration-300 group"
                    >
                      <service.icon className="h-4 w-4 text-blue-400 group-hover:text-blue-300" />
                      <span>{service.name}</span>
                    </a>
                  </li>
                ))}
              </ul>

              {/* Service Areas */}
              <h4 className="text-lg font-semibold mt-8 mb-4">Service Areas</h4>
              <div className="grid grid-cols-2 gap-2">
                {serviceAreas.map((area, index) => (
                  <div key={index} className="flex items-center space-x-2">
                    <CheckCircleIcon className="h-4 w-4 text-green-400" />
                    <span className="text-gray-300 text-sm">{area}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick Links Column */}
            <div>
              <h3 className="text-xl font-bold mb-6">Quick Links</h3>
              <ul className="space-y-3">
                {quickLinks.map((link, index) => (
                  <li key={index}>
                    <a 
                      href={link.href}
                      className="text-gray-300 hover:text-white transition-colors duration-300 flex items-center group"
                    >
                      <ArrowRightIcon className="h-4 w-4 mr-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      <span>{link.name}</span>
                    </a>
                  </li>
                ))}
              </ul>

              {/* Certifications */}
              <h4 className="text-lg font-semibold mt-8 mb-4">Certifications</h4>
              <ul className="space-y-2">
                {certifications.map((cert, index) => (
                  <li key={index} className="flex items-center space-x-2">
                    <ShieldCheckIcon className="h-4 w-4 text-green-400" />
                    <span className="text-gray-300 text-sm">{cert}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Newsletter & Social Column */}
            <div>
              <h3 className="text-xl font-bold mb-6">Stay Connected</h3>
              <p className="text-gray-300 mb-6">
                Subscribe to our newsletter for maintenance tips, special offers, 
                and the latest in electrical, plumbing, and solar technology.
              </p>

              {/* Newsletter Signup */}
              <div className="mb-8">
                <div className="flex">
                  <input
                    type="email"
                    placeholder="Your email address"
                    className="flex-1 px-4 py-3 bg-gray-800 border border-gray-700 rounded-l-lg focus:outline-none focus:border-blue-500 text-white"
                  />
                  <button className="bg-blue-600 text-white px-6 py-3 rounded-r-lg hover:bg-blue-700 transition-colors duration-300">
                    Subscribe
                  </button>
                </div>
              </div>

              {/* Social Media Links */}
              <div className="mb-8">
                <h4 className="text-lg font-semibold mb-4">Follow Us</h4>
                <div className="flex space-x-4">
                  <a 
                    href="#facebook" 
                    className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors duration-300"
                  >
                    <span className="sr-only">Facebook</span>
                    <div className="w-5 h-5 bg-current"></div>
                  </a>
                  <a 
                    href="#twitter" 
                    className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-blue-400 transition-colors duration-300"
                  >
                    <span className="sr-only">Twitter</span>
                    <div className="w-5 h-5 bg-current"></div>
                  </a>
                  <a 
                    href="#instagram" 
                    className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-pink-500 transition-colors duration-300"
                  >
                    <span className="sr-only">Instagram</span>
                    <div className="w-5 h-5 bg-current"></div>
                  </a>
                  <a 
                    href="#linkedin" 
                    className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors duration-300"
                  >
                    <span className="sr-only">LinkedIn</span>
                    <div className="w-5 h-5 bg-current"></div>
                  </a>
                </div>
              </div>

              {/* Trust Badges */}
              <div className="bg-gray-800 rounded-lg p-4">
                <div className="flex items-center space-x-2 mb-2">
                  <StarIcon className="h-5 w-5 text-yellow-400" />
                  <span className="font-semibold">4.9/5 Rating</span>
                </div>
                <div className="text-sm text-gray-400">
                  Based on 1,200+ customer reviews
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between">
            {/* Copyright */}
            <div className="text-gray-400 text-sm mb-4 md:mb-0">
              © {currentYear} ProServices Zimbabwe. All rights reserved. 
              Licensed electrical, plumbing & solar contractor.
            </div>

            {/* Legal Links */}
            <div className="flex flex-wrap justify-center md:justify-end space-x-6">
              {legalLinks.map((link, index) => (
                <a 
                  key={index}
                  href={link.href}
                  className="text-gray-400 hover:text-white text-sm transition-colors duration-300"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>

          {/* Additional Info */}
          <div className="mt-4 pt-4 border-t border-gray-800 text-center text-xs text-gray-500">
            <p>
              ProServices is a licensed and insured electrical, plumbing, and solar contractor serving Zimbabwe. 
              License #EPC2024-ZW | Insurance Policy #INS-789456 | Solar Certification #SOL-456789
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
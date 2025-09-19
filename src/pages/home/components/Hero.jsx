import React from 'react';
import { 
  PhoneIcon, 
  BoltIcon,
  WrenchScrewdriverIcon,
  SunIcon,
  ShieldCheckIcon,
  ClockIcon,
  StarIcon
} from '@heroicons/react/24/outline';

const Hero = () => {
  const services = [
    {
      icon: BoltIcon,
      name: 'Electrical',
      color: 'text-blue-400'
    },
    {
      icon: WrenchScrewdriverIcon,
      name: 'Plumbing',
      color: 'text-orange-400'
    },
    {
      icon: SunIcon,
      name: 'Solar',
      color: 'text-green-400'
    }
  ];

  const stats = [
    { number: '15+', label: 'Years Experience' },
    { number: '2500+', label: 'Happy Customers' },
    { number: '24/7', label: 'Emergency Service' },
    { number: '100%', label: 'Licensed & Insured' }
  ];

  return (
    <section className="relative overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1581578731548-c64695cc6952?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80")'
        }}
      >
        <div className="absolute inset-0 bg-blue-900/70 mix-blend-multiply"></div>
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          
          {/* Left Column - Content */}
          <div className="text-center lg:text-left">
            <div className="mb-4">
              <span className="inline-flex items-center px-3 py-1 bg-blue-600 text-white rounded-full text-xs font-medium">
                <ShieldCheckIcon className="h-3 w-3 mr-1" />
                Licensed & Insured Professionals
              </span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
              Professional 
              <span className="text-blue-300"> Electrical</span>,
              <span className="text-orange-300"> Plumbing</span> & 
              <span className="text-green-300"> Solar</span> Services
            </h1>

            <p className="text-lg text-blue-100 mb-6 leading-relaxed">
              From emergency repairs to complete installations, our certified technicians 
              deliver reliable solutions for your home and business. Available 24/7 for 
              all your service needs.
            </p>

            {/* Service Icons */}
            <div className="flex justify-center lg:justify-start space-x-6 mb-6">
              {services.map((service) => (
                <div key={service.name} className="text-center">
                  <div className="bg-blue-800/70 backdrop-blur-sm rounded-full p-3 shadow mb-1 border border-blue-500/30">
                    <service.icon className={`h-5 w-5 ${service.color}`} />
                  </div>
                  <span className="text-xs font-medium text-white">{service.name}</span>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start mb-8">
              <a
                href="#contact"
                className="bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-600 transition-colors duration-300 text-center shadow-lg text-sm"
              >
                Get Free Quote
              </a>
              <a
                href="tel:+1234567890"
                className="bg-orange-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-orange-500 transition-colors duration-300 flex items-center justify-center space-x-2 shadow-lg text-sm"
              >
                <PhoneIcon className="h-4 w-4" />
                <span>Call Now</span>
              </a>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
              {stats.map((stat, index) => (
                <div key={index} className="text-center lg:text-left">
                  <div className="text-xl font-bold text-white">{stat.number}</div>
                  <div className="text-xs text-blue-200">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column - Content Card */}
          <div className="relative">
            <div className="bg-white/10 backdrop-blur-md rounded-xl shadow-xl p-6 border border-white/20">
              {/* Trust Indicators */}
              <div className="space-y-4">
                <div className="text-center mb-4">
                  <h3 className="text-xl font-bold text-white mb-2">Why Choose Us</h3>
                  <div className="flex justify-center space-x-4">
                    <BoltIcon className="h-8 w-8 text-blue-300" />
                    <WrenchScrewdriverIcon className="h-8 w-8 text-orange-300" />
                    <SunIcon className="h-8 w-8 text-green-300" />
                  </div>
                </div>

                <div className="flex items-center space-x-2 p-2 bg-white/5 rounded-md">
                  <div className="bg-green-500/20 rounded-full p-1">
                    <ClockIcon className="h-4 w-4 text-green-300" />
                  </div>
                  <span className="text-white text-sm">Same-day emergency service</span>
                </div>
                <div className="flex items-center space-x-2 p-2 bg-white/5 rounded-md">
                  <div className="bg-green-500/20 rounded-full p-1">
                    <ShieldCheckIcon className="h-4 w-4 text-green-300" />
                  </div>
                  <span className="text-white text-sm">100% satisfaction guarantee</span>
                </div>
                <div className="flex items-center space-x-2 p-2 bg-white/5 rounded-md">
                  <div className="bg-green-500/20 rounded-full p-1">
                    <StarIcon className="h-4 w-4 text-green-300" />
                  </div>
                  <span className="text-white text-sm">5-star rated service</span>
                </div>
              </div>
            </div>

            {/* Floating Elements */}
            <div className="absolute -top-3 -right-3 bg-orange-600 text-white px-2 py-1 rounded text-xs font-semibold shadow z-10">
              24/7 Available
            </div>
            <div className="absolute -bottom-3 -left-3 bg-green-600 text-white px-2 py-1 rounded text-xs font-semibold shadow z-10">
              Licensed Pro
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
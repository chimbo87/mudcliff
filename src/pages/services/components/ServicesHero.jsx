import React from 'react';
import { Phone, Clock, Shield, Zap, Star, CheckCircle, ArrowRight } from 'lucide-react';

const ServicesHero = () => {
  const features = [
    { icon: Phone, title: '24/7 Emergency Service', description: 'Call: +263 77 123 4567', color: 'bg-blue-500' },
    { icon: Clock, title: 'Quick Response Time', description: 'Usually within 30 minutes', color: 'bg-emerald-500' },
    { icon: Shield, title: 'Licensed & Insured', description: 'All technicians certified', color: 'bg-orange-500' }
  ];

  const stats = [
    { number: '500+', label: 'Happy Customers' },
    { number: '5+', label: 'Years Experience' },
    { number: '24/7', label: 'Emergency Support' },
    { number: '100%', label: 'Satisfaction Rate' }
  ];

  return (
    <section className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-emerald-700 py-10 md:py-16 text-white overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-20 h-20 border border-white/20 rounded-full"></div>
        <div className="absolute top-40 right-20 w-16 h-16 border border-white/20 rounded-full"></div>
        <div className="absolute bottom-20 left-1/4 w-24 h-24 border border-white/20 rounded-full"></div>
        <div className="absolute bottom-10 right-10 w-12 h-12 border border-white/20 rounded-full"></div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-16 left-16 animate-bounce">
        <Zap className="h-6 w-6 text-yellow-400 opacity-60" />
      </div>
      <div className="absolute top-32 right-32 animate-pulse">
        <Star className="h-4 w-4 text-yellow-300 opacity-50" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
          {/* Left Content */}
          <div className="lg:w-1/2 text-center lg:text-left">
            <span className="inline-block bg-orange-500 text-white px-3 py-1 rounded-full text-xs font-semibold mb-2">
              🏆 Harare's Trusted Home Services
            </span>

            <h1 className="text-3xl md:text-4xl font-bold mb-4 leading-tight">
              Professional
              <span className="block bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
                Home Services
              </span>
            </h1>

            <p className="text-sm md:text-base mb-4 opacity-90 leading-relaxed max-w-lg mx-auto lg:mx-0">
              Expert electrical, plumbing, and solar solutions for your home or business in Harare. Trust our certified professionals for reliable installations and maintenance.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-2 mb-6">
              <button className="group bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-lg font-bold text-sm transition-all transform hover:scale-105 flex items-center justify-center">
                Schedule a Service
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="bg-transparent border-2 border-white hover:bg-white hover:text-blue-900 text-white px-6 py-2 rounded-lg font-bold text-sm transition-all">
                Get Free Quote
              </button>
            </div>

            {/* Stats Row */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-2 text-sm">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-xl md:text-2xl font-bold text-yellow-400">{stat.number}</div>
                  <div className="text-xs text-blue-200">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Content - Feature Cards */}
          <div className="lg:w-1/2 flex justify-center">
            <div className="relative w-full max-w-sm">
              {/* Main Feature Card */}
              <div className="bg-white/95 backdrop-blur-sm rounded-xl shadow-xl p-4 text-gray-800 border border-white/20">
                <div className="text-center mb-4">
                  <div className="inline-flex items-center bg-emerald-100 text-emerald-800 px-3 py-1 rounded-full text-xs font-semibold mb-2">
                    <CheckCircle className="h-3 w-3 mr-1" />
                    Why Choose Us?
                  </div>
                </div>

                <div className="space-y-3">
                  {features.map((feature, index) => {
                    const IconComponent = feature.icon;
                    return (
                      <div key={index} className="flex items-center group hover:bg-gray-50 p-2 rounded-lg transition-all">
                        <div className={`w-10 h-10 rounded-full ${feature.color} flex items-center justify-center mr-3 group-hover:scale-110 transition-transform shadow`}>
                          <IconComponent className="h-4 w-4 text-white" />
                        </div>
                        <div className="flex-1">
                          <h3 className="font-bold text-gray-800 text-sm mb-0.5">{feature.title}</h3>
                          <p className="text-xs text-gray-600">{feature.description}</p>
                        </div>
                      </div>
                    );
                  })}
                </div>

                {/* Trust Badges */}
                <div className="mt-4 pt-3 border-t border-gray-200">
                  <div className="grid grid-cols-3 gap-2 text-center text-xs">
                    <div className="flex flex-col items-center">
                      <div className="bg-blue-100 rounded-full p-1 mb-1">
                        <Zap className="h-3 w-3 text-blue-600" />
                      </div>
                      <span>Electrical</span>
                    </div>
                    <div className="flex flex-col items-center">
                      <div className="bg-emerald-100 rounded-full p-1 mb-1">
                        <Shield className="h-3 w-3 text-emerald-600" />
                      </div>
                      <span>Plumbing</span>
                    </div>
                    <div className="flex flex-col items-center">
                      <div className="bg-yellow-100 rounded-full p-1 mb-1">
                        <Star className="h-3 w-3 text-yellow-600" />
                      </div>
                      <span>Solar</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Badge */}
              <div className="absolute -top-3 -right-3 bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-2 py-1 rounded-full text-xs font-bold shadow animate-bounce">
                ⚡ Same Day Service
              </div>

              {/* Emergency Call Button */}
              <div className="absolute -bottom-3 left-1/2 transform -translate-x-1/2">
                <button className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-full font-bold shadow transition-all transform hover:scale-105 flex items-center text-sm">
                  <Phone className="h-3 w-3 mr-1" />
                  Emergency Call
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,122.7C672,117,768,139,864,138.7C960,139,1056,117,1152,96C1248,75,1344,53,1392,42.7L1440,32L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z" fill="white" fillOpacity="0.1"/>
        </svg>
      </div>
    </section>
  );
};

export default ServicesHero;

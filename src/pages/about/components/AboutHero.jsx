import React from 'react';
import { 
  BoltIcon, 
  WrenchScrewdriverIcon, 
  SunIcon,
  ShieldCheckIcon 
} from '@heroicons/react/24/outline';

const AboutHero = () => {
  return (
    <div className="relative bg-gradient-to-br from-blue-900 to-blue-800 text-white py-12 px-3 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-16 left-8 w-24 h-24 border-2 border-orange-500 rounded-full"></div>
        <div className="absolute bottom-16 right-8 w-20 h-20 border-2 border-green-400 rounded-full"></div>
        <div className="absolute top-32 right-1/4 w-12 h-12 border border-orange-500 rotate-45"></div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          {/* Content */}
          <div className="text-center lg:text-left">
            <div className="mb-4">
              <span className="inline-block px-3 py-1 bg-orange-500 text-white text-xs font-semibold rounded-full mb-2">
                About Our Company
              </span>
            </div>
            
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 leading-tight">
              Powering Your
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-green-400">
                {" "}Future
              </span>
            </h1>
            
            <p className="text-lg md:text-xl text-blue-100 mb-6 leading-relaxed">
              Expert electrical, plumbing, and solar solutions for homes and businesses. 
              Building sustainable, reliable infrastructure for tomorrow.
            </p>

            <div className="flex flex-wrap gap-3 justify-center lg:justify-start">
              <button className="px-4 py-2 bg-orange-500 hover:bg-orange-600 border-none text-white text-sm rounded-md transition-colors">
                Get Quote
              </button>
              <button className="px-4 py-2 border border-white text-white hover:bg-white hover:text-blue-900 text-sm rounded-md transition-colors">
                Our Services
              </button>
            </div>
          </div>

          {/* Services Icons Grid */}
          <div className="grid grid-cols-2 gap-4 mt-6 lg:mt-0">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center hover:bg-white/20 transition-all duration-300 transform hover:scale-105">
              <div className="w-12 h-12 bg-gradient-to-br from-orange-400 to-orange-500 rounded-lg mx-auto mb-3 flex items-center justify-center">
                <BoltIcon className="w-6 h-6 text-white" />
              </div>
              <h3 className="font-semibold text-base mb-1">Electrical</h3>
              <p className="text-blue-100 text-xs">Professional electrical installations & repairs</p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center hover:bg-white/20 transition-all duration-300 transform hover:scale-105">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-blue-500 rounded-lg mx-auto mb-3 flex items-center justify-center">
                <WrenchScrewdriverIcon className="w-6 h-6 text-white" />
              </div>
              <h3 className="font-semibold text-base mb-1">Plumbing</h3>
              <p className="text-blue-100 text-xs">Complete plumbing solutions & maintenance</p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center hover:bg-white/20 transition-all duration-300 transform hover:scale-105">
              <div className="w-12 h-12 bg-gradient-to-br from-green-400 to-green-500 rounded-lg mx-auto mb-3 flex items-center justify-center">
                <SunIcon className="w-6 h-6 text-white" />
              </div>
              <h3 className="font-semibold text-base mb-1">Solar</h3>
              <p className="text-blue-100 text-xs">Sustainable solar energy systems</p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center hover:bg-white/20 transition-all duration-300 transform hover:scale-105">
              <div className="w-12 h-12 bg-gradient-to-br from-slate-400 to-slate-500 rounded-lg mx-auto mb-3 flex items-center justify-center">
                <ShieldCheckIcon className="w-6 h-6 text-white" />
              </div>
              <h3 className="font-semibold text-base mb-1">Maintenance</h3>
              <p className="text-blue-100 text-xs">Reliable ongoing service & support</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutHero;
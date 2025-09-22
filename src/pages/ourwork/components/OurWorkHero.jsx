import React from 'react';

const OurWorkHero = () => {
  return (
    <section className="relative bg-gradient-to-br from-slate-900 via-[#1e3a5f] to-slate-800 py-10 px-3 overflow-hidden pt-14">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-6 left-6 w-20 h-20 border border-[#0066cc] rotate-45 rounded-lg"></div>
        <div className="absolute bottom-12 right-12 w-16 h-16 border border-[#00a8e8] rotate-12 rounded-lg"></div>
        <div className="absolute top-1/2 right-6 w-10 h-10 bg-[#00cc88] opacity-20 rounded-full"></div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center">
          {/* Badge */}
          <div className="inline-flex items-center px-2 py-1 bg-[#0066cc] bg-opacity-10 border border-[#0066cc] rounded-full mb-4">
            <span className="text-white font-semibold text-[10px] uppercase tracking-wide">
              Professional Installations
            </span>
          </div>

          {/* Main Heading */}
          <h1 className="text-xl md:text-2xl lg:text-3xl font-bold text-white mb-3 leading-snug">
            Our{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0066cc] to-[#00a8e8]">
              Expert Work
            </span>
            <br />
            Powers Your Peace of Mind
          </h1>

          {/* Subtitle */}
          <p className="text-xs md:text-sm text-gray-300 mb-4 max-w-xl mx-auto leading-relaxed">
            Discover our professional electrical, plumbing, and solar installations – 
            from efficient electrical systems to sustainable solar solutions that deliver reliability and savings.
          </p>

          {/* Stats Section */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mt-6">
            <div className="text-center group">
              <div className="bg-white bg-opacity-5 backdrop-blur-sm rounded-lg p-3 border border-white border-opacity-10 hover:bg-opacity-10 transition-all">
                <div className="text-xl md:text-2xl font-bold text-[#0066cc] mb-1">1000+</div>
                <div className="text-[#0066cc] text-xs font-medium">Installations Completed</div>
              </div>
            </div>
            <div className="text-center group">
              <div className="bg-white bg-opacity-5 backdrop-blur-sm rounded-lg p-3 border border-white border-opacity-10 hover:bg-opacity-10 transition-all">
                <div className="text-xl md:text-2xl font-bold text-[#00a8e8] mb-1">20+</div>
                <div className="text-[#00a8e8] text-xs font-medium">Years Expertise</div>
              </div>
            </div>
            <div className="text-center group">
              <div className="bg-white bg-opacity-5 backdrop-blur-sm rounded-lg p-3 border border-white border-opacity-10 hover:bg-opacity-10 transition-all">
                <div className="text-xl md:text-2xl font-bold text-[#00cc88] mb-1">100%</div>
                <div className="text-[#00cc88] text-xs font-medium">Client Satisfaction</div>
              </div>
            </div>
          </div>

          {/* CTA Button */}
          <div className="mt-6">
            <button className="group relative inline-flex items-center px-4 py-1.5 bg-gradient-to-r from-[#0066cc] to-[#0088ff] text-white text-xs font-semibold rounded-full shadow-md hover:shadow-[#0066cc]/25 transform hover:scale-105 transition-all">
              <span className="mr-1">View All Installations</span>
              <svg
                className="w-3 h-3 group-hover:translate-x-1 transition-transform duration-300"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Bottom Wave */}
      <div className="absolute bottom-0 left-0 w-full">
        <svg viewBox="0 0 1440 120" className="fill-white">
          <path d="M0,32L48,37.3C96,43,192,53,288,64C384,75,480,85,576,80C672,75,768,53,864,48C960,43,1056,53,1152,58.7C1248,64,1344,64,1392,64L1440,64L1440,120L1392,120C1344,120,1248,120,1152,120C1056,120,960,120,864,120C768,120,672,120,576,120C480,120,384,120,288,120C192,120,96,120,48,120L0,120Z"></path>
        </svg>
      </div>
    </section>
  );
};

export default OurWorkHero;

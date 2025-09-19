import React from 'react';

const PersonalStory = () => {
  return (
    <section className="relative py-16 px-4 md:px-8 lg:px-16 bg-gray-900 overflow-hidden">
      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-1 mb-4 bg-blue-900/30 text-blue-400 rounded-full text-sm font-medium">
            My Journey
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
            From Curiosity to 
            <span className="bg-gradient-to-r from-blue-500 to-green-500 bg-clip-text text-transparent"> Code</span>
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            Every great developer has a story. Here's mine.
          </p>
        </div>

        {/* Story Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Visual Section */}
          <div className="order-2 lg:order-1 flex flex-col items-center">
            <div className="relative mb-8">
              <div className="w-48 h-48 rounded-full bg-gradient-to-br from-blue-500 to-green-500 flex items-center justify-center text-5xl">
                👨‍💻
              </div>
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-blue-500 to-green-500 opacity-70 animate-pulse -z-10"></div>
            </div>
            
            <div className="w-full max-w-md bg-gray-800 rounded-lg overflow-hidden border border-gray-700">
              <div className="flex items-center px-4 py-2 bg-gray-900 border-b border-gray-700">
                <div className="flex space-x-2 mr-3">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                </div>
                <span className="text-slate-300 text-sm">my_journey.js</span>
              </div>
              <div className="p-4 font-mono text-sm">
                <div className="text-purple-400 mb-1">
                  <span className="text-blue-400">const</span> myJourney = <span className="text-green-400">"amazing"</span>;
                </div>
                <div className="text-purple-400 mb-1">
                  <span className="text-blue-400">while</span> (learning) {'{'}
                </div>
                <div className="ml-4 text-slate-300">keepCoding();</div>
                <div className="text-purple-400">{'}'}</div>
              </div>
            </div>
          </div>

          {/* Text Content */}
          <div className="order-1 lg:order-2">
            <div className="space-y-8 mb-10">
              {/* Timeline Item 1 */}
              <div className="flex">
                <div className="flex flex-col items-center mr-4">
                  <div className="w-4 h-4 rounded-full bg-gradient-to-r from-blue-500 to-green-500"></div>
                  <div className="w-0.5 h-24 bg-gradient-to-b from-blue-500 to-green-500 opacity-50 mt-2"></div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-slate-200">The Spark</h3>
                  <p className="text-slate-400">
                    It all started with a simple "Hello, World!" program. What began as curiosity 
                    quickly transformed into a passion for creating digital solutions that make a difference.
                  </p>
                </div>
              </div>

              {/* Timeline Item 2 */}
              <div className="flex">
                <div className="flex flex-col items-center mr-4">
                  <div className="w-4 h-4 rounded-full bg-gradient-to-r from-blue-500 to-green-500"></div>
                  <div className="w-0.5 h-24 bg-gradient-to-b from-blue-500 to-green-500 opacity-50 mt-2"></div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-slate-200">The Learning Path</h3>
                  <p className="text-slate-400">
                    From late nights debugging code to building my first full-stack application, 
                    every challenge became a stepping stone to becoming a better developer.
                  </p>
                </div>
              </div>

              {/* Timeline Item 3 */}
              <div className="flex">
                <div className="flex flex-col items-center mr-4">
                  <div className="w-4 h-4 rounded-full bg-gradient-to-r from-blue-500 to-green-500"></div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-slate-200">The Mission</h3>
                  <p className="text-slate-400">
                    Today, I'm dedicated to crafting clean, efficient code and building applications 
                    that solve real problems while continuously learning and growing in this ever-evolving field.
                  </p>
                </div>
              </div>
            </div>

            {/* Highlights */}
            <div className="grid grid-cols-3 gap-4">
              <div className="bg-gray-800 p-4 rounded-lg text-center border border-gray-700 hover:border-blue-500 transition-colors duration-300">
                <span className="block text-2xl font-bold bg-gradient-to-r from-blue-500 to-green-500 bg-clip-text text-transparent">5+</span>
                <span className="text-slate-400 text-sm">Years Coding</span>
              </div>
              <div className="bg-gray-800 p-4 rounded-lg text-center border border-gray-700 hover:border-blue-500 transition-colors duration-300">
                <span className="block text-2xl font-bold bg-gradient-to-r from-blue-500 to-green-500 bg-clip-text text-transparent">50+</span>
                <span className="text-slate-400 text-sm">Projects Built</span>
              </div>
              <div className="bg-gray-800 p-4 rounded-lg text-center border border-gray-700 hover:border-blue-500 transition-colors duration-300">
                <span className="block text-2xl font-bold bg-gradient-to-r from-blue-500 to-green-500 bg-clip-text text-transparent">∞</span>
                <span className="text-slate-400 text-sm">Learning</span>
              </div>
            </div>
          </div>
        </div>

        {/* Background Elements */}
        <div className="absolute top-20 -left-20 w-64 h-64 bg-blue-500 rounded-full opacity-10 blur-3xl"></div>
        <div className="absolute bottom-20 -right-20 w-64 h-64 bg-green-500 rounded-full opacity-10 blur-3xl"></div>
        
        <div className="absolute inset-0 opacity-5 bg-grid-pattern bg-center bg-8"></div>
      </div>
    </section>
  );
};

export default PersonalStory;
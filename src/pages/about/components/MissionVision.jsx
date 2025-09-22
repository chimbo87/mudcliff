import React from 'react';
import { 
  EyeIcon, 
  RocketLaunchIcon,
  LightBulbIcon,
  HeartIcon,
  GlobeAltIcon,
  StarIcon
} from '@heroicons/react/24/outline';

const MissionVision = () => {
  return (
    <div className="py-12 px-3 bg-slate-50">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <span className="inline-block px-3 py-1 bg-green-500 text-white text-xs font-semibold rounded-full mb-3">
            Our Purpose
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">
            Mission & Vision
          </h2>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Driven by purpose, guided by values, and committed to excellence in everything we do.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Mission */}
          <div className="bg-white rounded-2xl p-6 md:p-8 shadow-md hover:shadow-lg transition-all duration-300 border border-slate-200">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center mr-4">
                <RocketLaunchIcon className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-slate-800 mb-1">Our Mission</h3>
                <div className="w-12 h-1 bg-gradient-to-r from-orange-400 to-orange-500 rounded-full"></div>
              </div>
            </div>

            <p className="text-base text-slate-600 mb-6 leading-relaxed">
              To provide exceptional electrical, plumbing, and solar solutions that enhance the 
              quality of life for our customers while promoting sustainable practices. We are 
              committed to delivering reliable, innovative, and environmentally conscious services 
              that power communities and protect our planet.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              <div className="text-center p-3">
                <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center mx-auto mb-2">
                  <LightBulbIcon className="w-5 h-5 text-orange-500" />
                </div>
                <p className="text-xs font-semibold text-slate-700">Innovation</p>
              </div>
              <div className="text-center p-3">
                <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-2">
                  <HeartIcon className="w-5 h-5 text-green-500" />
                </div>
                <p className="text-xs font-semibold text-slate-700">Care</p>
              </div>
              <div className="text-center p-3">
                <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-2">
                  <StarIcon className="w-5 h-5 text-blue-500" />
                </div>
                <p className="text-xs font-semibold text-slate-700">Excellence</p>
              </div>
            </div>
          </div>

          {/* Vision */}
          <div className="bg-gradient-to-br from-blue-50 to-green-50 rounded-2xl p-6 md:p-8 shadow-md hover:shadow-lg transition-all duration-300 border border-green-100">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-xl flex items-center justify-center mr-4">
                <EyeIcon className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-slate-800 mb-1">Our Vision</h3>
                <div className="w-12 h-1 bg-gradient-to-r from-green-400 to-green-500 rounded-full"></div>
              </div>
            </div>

            <p className="text-base text-slate-600 mb-6 leading-relaxed">
              To be the leading provider of integrated infrastructure solutions, recognized for 
              our commitment to sustainability, innovation, and community impact. We envision a 
              future where every home and business operates efficiently, sustainably, and reliably 
              through our comprehensive services.
            </p>

            <div className="bg-white rounded-xl p-4 shadow-sm">
              <div className="flex items-center mb-3">
                <GlobeAltIcon className="w-6 h-6 text-green-500 mr-2" />
                <h4 className="text-lg font-bold text-slate-800">2030 Goals</h4>
              </div>
              <ul className="space-y-2 text-slate-600 text-sm">
                <li className="flex items-center">
                  <div className="w-1.5 h-1.5 bg-green-500 rounded-full mr-2"></div>
                  Carbon-neutral operations across all services
                </li>
                <li className="flex items-center">
                  <div className="w-1.5 h-1.5 bg-orange-500 rounded-full mr-2"></div>
                  10,000+ renewable energy installations
                </li>
                <li className="flex items-center">
                  <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2"></div>
                  Industry leader in smart home integration
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Values Section */}
        <div className="mt-16">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-slate-800 mb-3">Core Values</h3>
            <p className="text-base text-slate-600">The principles that guide everything we do</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="text-center p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300">
              <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mx-auto mb-3">
                <span className="text-xl font-bold text-blue-600">R</span>
              </div>
              <h4 className="font-bold text-slate-800 mb-1 text-sm">Reliability</h4>
              <p className="text-xs text-slate-600">Consistent, dependable service you can trust</p>
            </div>

            <div className="text-center p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300">
              <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center mx-auto mb-3">
                <span className="text-xl font-bold text-orange-600">I</span>
              </div>
              <h4 className="font-bold text-slate-800 mb-1 text-sm">Integrity</h4>
              <p className="text-xs text-slate-600">Honest, transparent business practices</p>
            </div>

            <div className="text-center p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300">
              <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mx-auto mb-3">
                <span className="text-xl font-bold text-green-600">S</span>
              </div>
              <h4 className="font-bold text-slate-800 mb-1 text-sm">Sustainability</h4>
              <p className="text-xs text-slate-600">Environmental responsibility in all we do</p>
            </div>

            <div className="text-center p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300">
              <div className="w-12 h-12 bg-slate-100 rounded-xl flex items-center justify-center mx-auto mb-3">
                <span className="text-xl font-bold text-slate-600">E</span>
              </div>
              <h4 className="font-bold text-slate-800 mb-1 text-sm">Excellence</h4>
              <p className="text-xs text-slate-600">Exceeding expectations in every project</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MissionVision;
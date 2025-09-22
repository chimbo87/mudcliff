import React from 'react';
import { MapPin, Truck, Phone } from 'lucide-react';

const ServiceAreasMap = () => {
  const serviceAreas = [
    'Harare CBD',
    'Mount Pleasant',
    'Borrowdale',
    'Avondale',
    'Highlands',
    'Glen Lorne',
    'Surrounding Areas'
  ];

  return (
    <section className="py-8 bg-gradient-to-br from-slate-50 to-blue-50 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-6">
          <h2 className="text-2xl md:text-3xl font-bold text-blue-700 mb-2">
            Our Service Areas
          </h2>
          <p className="text-slate-600 text-sm max-w-xl mx-auto">
            We proudly serve homeowners and businesses across Harare and surrounding areas
          </p>
          <div className="flex items-center justify-center mt-2 text-slate-500 text-xs">
            <MapPin className="h-4 w-4 mr-1" />
            <span>198 Chiremba Rd, Harare, Zimbabwe</span>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 items-start">
          {/* Interactive Google Map */}
          <div className="bg-white rounded-xl shadow-lg p-4">
            <div className="mb-3">
              <h3 className="text-lg font-semibold text-blue-700 mb-1">Our Location</h3>
              <p className="text-slate-600 text-xs">Visit our office or see our service coverage area</p>
            </div>
            
            <div className="relative rounded-lg overflow-hidden shadow">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3797.545058695993!2d31.094881975176037!3d-17.859949383110113!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1931bca138558a5d%3A0x30eff548e45fdc7f!2s198%20Chiremba%20Rd%2C%20Harare%2C%20Zimbabwe!5e0!3m2!1sen!2sza!4v1758543041763!5m2!1sen!2sza"
                width="100%"
                height="280"
                style={{border:0}}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-64 rounded-lg"
              />
              
              <div className="absolute top-2 left-2 bg-white/95 backdrop-blur-sm rounded-lg p-2 shadow">
                <div className="flex items-center space-x-1">
                  <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
                  <span className="text-xs font-medium text-slate-700">Our Office</span>
                </div>
              </div>
            </div>

            <div className="mt-2 p-2 bg-blue-50 rounded-lg text-xs">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-1">
                  <Phone className="h-3 w-3 text-blue-600" />
                  <span className="text-blue-700 font-medium">Quick Contact</span>
                </div>
                <button className="bg-blue-600 hover:bg-blue-700 text-white px-3 py-1 rounded text-xs font-medium transition-colors">
                  Get Directions
                </button>
              </div>
            </div>
          </div>

          {/* Service Areas Information */}
          <div className="space-y-4">
            <div className="flex items-start space-x-2">
              <div className="bg-emerald-500 rounded-full p-2 mt-1 shadow">
                <Truck className="h-5 w-5 text-white" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-blue-700 mb-1">Service Coverage</h3>
                <p className="text-slate-600 text-xs">
                  Our experienced team provides professional electrical, plumbing, and solar services throughout Harare and the greater metropolitan area.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow p-4 border border-slate-100 text-xs">
              <div className="flex items-center mb-2">
                <MapPin className="h-4 w-4 text-blue-600 mr-1" />
                <h4 className="font-semibold text-blue-700 text-sm">Areas We Serve:</h4>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {serviceAreas.map((area, index) => (
                  <div key={index} className="flex items-center space-x-2 p-1 hover:bg-slate-50 rounded transition-colors">
                    <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                    <span className="text-slate-700 font-medium text-xs">{area}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-gradient-to-r from-emerald-500 to-blue-600 rounded-lg p-4 text-white shadow text-xs">
              <div className="flex items-center mb-2">
                <Truck className="h-5 w-5 mr-2" />
                <h4 className="font-semibold text-sm">Fast Response Time</h4>
              </div>
              <p className="text-emerald-100 mb-2 text-xs">
                Emergency services available 24/7 with average response time of 30 minutes within Harare.
              </p>
              <div className="flex space-x-2 text-xs">
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-emerald-300 rounded-full mr-1"></div>
                  <span>Emergency: 24/7</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-blue-300 rounded-full mr-1"></div>
                  <span>Scheduled: Same Day</span>
                </div>
              </div>
            </div>

            <div className="bg-blue-50 border border-blue-200 rounded-lg p-2 text-xs">
              <div className="flex items-start space-x-2">
                <Phone className="h-4 w-4 text-blue-600 mt-0.5" />
                <div>
                  <span className="text-blue-800 font-medium text-xs">
                    Not sure if we service your area?
                  </span>
                  <p className="text-blue-700 mt-1 text-xs">
                    Contact us anyway! We're expanding our service regions regularly and may be able to accommodate special requests.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 text-center">
          <div className="bg-white rounded-xl shadow p-6 max-w-3xl mx-auto text-xs">
            <h3 className="text-xl font-bold text-blue-700 mb-2">Ready to Get Started?</h3>
            <p className="text-slate-600 mb-4 text-sm">
              Whether you're in our core service area or nearby, we're here to help with all your electrical, plumbing, and solar needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-2 justify-center">
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded font-semibold transition-all transform hover:scale-105 shadow">
                Schedule Service
              </button>
              <button className="bg-emerald-500 hover:bg-emerald-600 text-white px-4 py-2 rounded font-semibold transition-all transform hover:scale-105 shadow">
                Get Free Quote
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceAreasMap;

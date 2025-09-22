import React from 'react';
import { Clock, AlertTriangle, Phone, Calendar, CheckCircle, Zap } from 'lucide-react';

const BusinessHours = () => {
  const hours = [
    { day: 'Monday - Friday', time: '7:00 AM - 7:00 PM', type: 'regular' },
    { day: 'Saturday', time: '8:00 AM - 5:00 PM', type: 'regular' },
    { day: 'Sunday', time: 'Emergency Services Only', type: 'emergency' },
    { day: 'Holidays', time: 'Emergency Services Available', type: 'emergency' }
  ];

  const getCurrentStatus = () => {
    const now = new Date();
    const day = now.getDay();
    const hour = now.getHours();

    if ((day >= 1 && day <= 5 && hour >= 7 && hour < 19) ||
        (day === 6 && hour >= 8 && hour < 17)) {
      return { status: 'open', message: 'Currently Open' };
    }
    return { status: 'closed', message: 'Currently Closed - Emergency Services Available' };
  };

  const currentStatus = getCurrentStatus();

  return (
    <section className="py-8 bg-gradient-to-br from-slate-50 via-blue-50 to-emerald-50 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-8">
          <div className="flex items-center justify-center mb-3">
            <div className="bg-blue-100 rounded-full p-2 mr-3">
              <Clock className="h-6 w-6 text-blue-600" />
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-blue-700">Business Hours</h2>
          </div>
          <p className="text-slate-600 text-sm max-w-xl mx-auto mb-4">
            Professional services when you need them - including 24/7 emergency support
          </p>

          <div className={`inline-flex items-center px-4 py-2 rounded-full font-semibold text-xs shadow-lg ${
            currentStatus.status === 'open' 
              ? 'bg-emerald-500 text-white' 
              : 'bg-orange-500 text-white'
          }`}>
            <div className={`w-2 h-2 rounded-full mr-2 ${
              currentStatus.status === 'open' ? 'bg-emerald-200 animate-pulse' : 'bg-orange-200 animate-pulse'
            }`}></div>
            {currentStatus.message}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          {/* Regular Hours Card */}
          <div className="bg-white rounded-xl shadow-lg border border-slate-100 overflow-hidden">
            <div className="bg-gradient-to-r from-emerald-500 to-blue-600 p-4">
              <div className="flex items-center text-white">
                <div className="bg-white/20 rounded-full p-2 mr-3">
                  <Clock className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="text-lg font-bold">Regular Business Hours</h3>
                  <p className="text-emerald-100 text-sm">Standard service appointments</p>
                </div>
              </div>
            </div>
            
            <div className="p-4">
              <div className="space-y-3">
                {hours.slice(0, 2).map((item, index) => (
                  <div key={index} className="flex justify-between items-center py-2 px-3 bg-slate-50 rounded-lg hover:bg-slate-100 transition-colors">
                    <div className="flex items-center">
                      <Calendar className="h-3 w-3 text-slate-500 mr-2" />
                      <span className="font-semibold text-slate-700 text-sm">{item.day}</span>
                    </div>
                    <span className="text-emerald-600 font-bold text-sm">{item.time}</span>
                  </div>
                ))}
              </div>
              
              <div className="mt-4 p-3 bg-emerald-50 rounded-lg border border-emerald-200 text-xs">
                <div className="flex items-start">
                  <CheckCircle className="h-4 w-4 text-emerald-600 mr-2 mt-0.5" />
                  <div>
                    <p className="text-emerald-800 font-medium">
                      Same-day service available for appointments booked before 12 PM
                    </p>
                    <p className="text-emerald-700 mt-1">Subject to technician availability</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Emergency Services Card */}
          <div className="bg-white rounded-xl shadow-lg border border-slate-100 overflow-hidden">
            <div className="bg-gradient-to-r from-orange-500 to-red-500 p-4">
              <div className="flex items-center text-white">
                <div className="bg-white/20 rounded-full p-2 mr-3">
                  <AlertTriangle className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="text-lg font-bold">24/7 Emergency Services</h3>
                  <p className="text-orange-100 text-sm">Always available when you need us</p>
                </div>
              </div>
            </div>
            
            <div className="p-4">
              <div className="space-y-3">
                {hours.slice(2).map((item, index) => (
                  <div key={index} className="flex justify-between items-center py-2 px-3 bg-orange-50 rounded-lg">
                    <div className="flex items-center">
                      <Zap className="h-3 w-3 text-orange-500 mr-2" />
                      <span className="font-semibold text-slate-700 text-sm">{item.day}</span>
                    </div>
                    <span className="text-orange-600 font-bold text-sm">{item.time}</span>
                  </div>
                ))}
              </div>
              
              <div className="mt-4 p-3 bg-red-50 rounded-lg border-2 border-red-200 text-xs">
                <div className="flex items-center mb-2">
                  <Phone className="h-4 w-4 text-red-600 mr-1" />
                  <h4 className="font-bold text-red-800 text-sm">Emergency Hotline</h4>
                </div>
                <div className="bg-red-600 text-white p-2 rounded-lg text-center mb-2">
                  <p className="text-base font-bold tracking-wide">+263 77 123 4567</p>
                </div>
                <div className="space-y-1 text-red-700 text-xs">
                  <p>• Electrical hazards & power outages</p>
                  <p>• Water leaks & burst pipes</p>
                  <p>• Gas leaks & safety issues</p>
                  <p>• Security system failures</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Service Types */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          <div className="bg-white rounded-lg p-4 shadow-md border border-slate-100 text-center">
            <div className="bg-blue-100 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-2">
              <Zap className="h-6 w-6 text-blue-600" />
            </div>
            <h3 className="font-bold text-slate-700 text-sm mb-1">Electrical Services</h3>
            <p className="text-slate-600 text-xs">Installation, repairs & maintenance</p>
          </div>
          
          <div className="bg-white rounded-lg p-4 shadow-md border border-slate-100 text-center">
            <div className="bg-emerald-100 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-2">
              <svg className="h-6 w-6 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 7.172V5L8 4z" />
              </svg>
            </div>
            <h3 className="font-bold text-slate-700 text-sm mb-1">Plumbing Services</h3>
            <p className="text-slate-600 text-xs">Pipes, fixtures & drainage solutions</p>
          </div>
          
          <div className="bg-white rounded-lg p-4 shadow-md border border-slate-100 text-center">
            <div className="bg-yellow-100 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-2">
              <svg className="h-6 w-6 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
              </svg>
            </div>
            <h3 className="font-bold text-slate-700 text-sm mb-1">Solar Solutions</h3>
            <p className="text-slate-600 text-xs">Clean energy systems & maintenance</p>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="bg-gradient-to-r from-blue-600 to-emerald-600 rounded-xl p-6 text-center text-white shadow-lg">
          <h3 className="text-xl font-bold mb-2">Need Service Right Now?</h3>
          <p className="text-blue-100 mb-4 text-sm">
            Don't wait - contact us today for immediate assistance or to schedule your appointment
          </p>
          <div className="flex flex-col sm:flex-row gap-2 justify-center">
            <button className="bg-white text-blue-600 px-6 py-2 rounded-md font-bold hover:bg-gray-100 transition-all transform hover:scale-105 shadow">
              Schedule Regular Service
            </button>
            <button className="bg-red-500 hover:bg-red-600 text-white px-6 py-2 rounded-md font-bold transition-all transform hover:scale-105 shadow border-2 border-red-400">
              🚨 Emergency Call Now
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BusinessHours;

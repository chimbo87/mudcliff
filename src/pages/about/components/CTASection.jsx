import { 
    PhoneIcon, 
    EnvelopeIcon, 
    ClockIcon,
    CheckCircleIcon,
    ArrowRightIcon,
    CalendarDaysIcon
  } from '@heroicons/react/24/outline';
  
  const CTASection = () => {
    const benefits = [
      "Free consultation and quote",
      "Licensed & insured professionals",
      "24/7 emergency service",
      "Satisfaction guarantee"
    ];
  
    return (
      <div className="py-8 lg:py-12 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="max-w-6xl mx-auto px-3 sm:px-4 lg:px-6">
          
          {/* Main CTA Section */}
          <div className="bg-gradient-to-r from-blue-700 via-blue-800 to-blue-900 rounded-2xl overflow-hidden shadow-xl mb-10">
            <div className="relative">
              {/* Background Pattern */}
              <div className="absolute inset-0 bg-black bg-opacity-20">
                <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
                  <defs>
                    <pattern id="grid" width="24" height="24" patternUnits="userSpaceOnUse">
                      <path d="M 24 0 L 0 0 0 24" fill="none" stroke="rgba(255,255,255,0.1)" strokeWidth="1"/>
                    </pattern>
                  </defs>
                  <rect width="100%" height="100%" fill="url(#grid)" />
                </svg>
              </div>
  
              <div className="relative grid lg:grid-cols-2 gap-6 p-6 lg:p-10 items-center">
                {/* Content */}
                <div>
                  <div className="inline-flex items-center px-3 py-1.5 bg-orange-500 bg-opacity-20 text-orange-300 rounded-full text-xs font-medium mb-4">
                    <ClockIcon className="w-3.5 h-3.5 mr-1.5" />
                    Available 24/7
                  </div>
                  
                  <h2 className="text-2xl md:text-3xl font-bold text-white mb-4 leading-snug">
                    Ready to Get Started?
                  </h2>
                  
                  <p className="text-sm md:text-base text-blue-100 mb-5 leading-relaxed">
                    Contact us today for a free consultation and discover how our expert team 
                    can handle all your electrical, plumbing, and solar needs.
                  </p>
  
                  {/* Benefits List */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-6">
                    {benefits.map((benefit, index) => (
                      <div key={index} className="flex items-center text-blue-100">
                        <CheckCircleIcon className="w-4 h-4 text-emerald-400 mr-2 flex-shrink-0" />
                        <span className="text-xs">{benefit}</span>
                      </div>
                    ))}
                  </div>
  
                  {/* CTA Buttons */}
                  <div className="flex flex-col sm:flex-row gap-3">
                    <button className="group bg-orange-500 hover:bg-orange-600 text-white px-6 py-2.5 rounded-lg font-medium text-sm transition-all duration-300 hover:scale-105 hover:shadow-md flex items-center justify-center">
                      <PhoneIcon className="w-5 h-5 mr-2" />
                      Call Now
                      <ArrowRightIcon className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                    </button>
                    
                    <button className="group bg-white bg-opacity-20 hover:bg-opacity-30 text-white border border-white border-opacity-30 px-6 py-2.5 rounded-lg font-medium text-sm transition-all duration-300 hover:scale-105 flex items-center justify-center backdrop-blur-sm">
                      <CalendarDaysIcon className="w-5 h-5 mr-2" />
                      Schedule Free Consultation
                    </button>
                  </div>
                </div>
  
                {/* Image/Visual Element */}
                <div className="lg:text-right">
                  <div className="relative">
                    {/* Main Visual */}
                    <div className="aspect-square max-w-xs mx-auto bg-gradient-to-br from-orange-400 to-orange-600 rounded-2xl shadow-xl overflow-hidden">
                      <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center">
                        <div className="text-center text-white">
                          <div className="w-24 h-24 bg-white bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-4 backdrop-blur-sm">
                            <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 24 24">
                              <path d="M12 2L2 7L12 12L22 7L12 2Z" />
                              <path d="M2 17L12 22L22 17" />
                              <path d="M2 12L12 17L22 12" />
                            </svg>
                          </div>
                          <h3 className="text-lg font-bold mb-1">Expert Solutions</h3>
                          <p className="text-orange-100 text-xs">Professional • Reliable • Efficient</p>
                        </div>
                      </div>
                    </div>
  
                    {/* Floating Elements */}
                    <div className="absolute -top-4 -left-4 w-16 h-16 bg-emerald-500 rounded-xl rotate-12 shadow-lg flex items-center justify-center">
                      <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M13 10V3L4 14h7v7l9-11h-7z"/>
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
  
          {/* Contact Information Cards */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {/* Phone Card */}
            <div className="bg-white rounded-xl p-4 shadow-md hover:shadow-lg transition-all duration-300 border border-slate-200 hover:-translate-y-0.5">
              <div className="flex items-center mb-3">
                <div className="p-2 bg-blue-100 rounded-lg">
                  <PhoneIcon className="w-5 h-5 text-blue-700" />
                </div>
                <div className="ml-3">
                  <h3 className="text-sm font-semibold text-gray-900">Call Us</h3>
                  <p className="text-xs text-slate-600">Speak with an expert</p>
                </div>
              </div>
              <p className="text-lg font-bold text-blue-700 mb-1">(555) 123-4567</p>
              <p className="text-xs text-slate-600">Available 24/7 for emergencies</p>
            </div>
  
            {/* Email Card */}
            <div className="bg-white rounded-xl p-4 shadow-md hover:shadow-lg transition-all duration-300 border border-slate-200 hover:-translate-y-0.5">
              <div className="flex items-center mb-3">
                <div className="p-2 bg-orange-100 rounded-lg">
                  <EnvelopeIcon className="w-5 h-5 text-orange-600" />
                </div>
                <div className="ml-3">
                  <h3 className="text-sm font-semibold text-gray-900">Email Us</h3>
                  <p className="text-xs text-slate-600">Get a detailed quote</p>
                </div>
              </div>
              <p className="text-base font-semibold text-orange-600 mb-1">info@company.com</p>
              <p className="text-xs text-slate-600">Response within 2 hours</p>
            </div>
  
            {/* Hours Card */}
            <div className="bg-white rounded-xl p-4 shadow-md hover:shadow-lg transition-all duration-300 border border-slate-200 hover:-translate-y-0.5 md:col-span-2 lg:col-span-1">
              <div className="flex items-center mb-3">
                <div className="p-2 bg-emerald-100 rounded-lg">
                  <ClockIcon className="w-5 h-5 text-emerald-600" />
                </div>
                <div className="ml-3">
                  <h3 className="text-sm font-semibold text-gray-900">Business Hours</h3>
                  <p className="text-xs text-slate-600">We're here when you need us</p>
                </div>
              </div>
              <div className="space-y-0.5">
                <p className="text-xs text-slate-800"><span className="font-medium">Mon-Fri:</span> 7AM - 7PM</p>
                <p className="text-xs text-slate-800"><span className="font-medium">Weekends:</span> 8AM - 5PM</p>
                <p className="text-xs font-medium text-emerald-600">Emergency: 24/7</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default CTASection;
  
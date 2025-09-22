import { 
    ShieldCheckIcon, 
    LightBulbIcon, 
    HandRaisedIcon, 
    SunIcon,
    ClockIcon,
    UserGroupIcon 
  } from '@heroicons/react/24/outline';
  
  const CompanyValues = () => {
    const values = [
      {
        icon: ShieldCheckIcon,
        title: "Reliability & Trust",
        description: "We deliver consistent, high-quality work that you can depend on. Our licensed professionals ensure every project meets the highest safety standards.",
        color: "text-blue-700",
        bgColor: "bg-blue-50",
        borderColor: "border-blue-200"
      },
      {
        icon: LightBulbIcon,
        title: "Innovation",
        description: "We embrace the latest technologies and sustainable solutions to provide efficient, future-ready electrical and solar installations.",
        color: "text-orange-600",
        bgColor: "bg-orange-50",
        borderColor: "border-orange-200"
      },
      {
        icon: SunIcon,
        title: "Sustainability",
        description: "Committed to eco-friendly practices and renewable energy solutions that reduce environmental impact and save you money.",
        color: "text-emerald-600",
        bgColor: "bg-emerald-50",
        borderColor: "border-emerald-200"
      },
      {
        icon: HandRaisedIcon,
        title: "Integrity",
        description: "Honest pricing, transparent communication, and ethical business practices. We treat every customer with respect and fairness.",
        color: "text-slate-600",
        bgColor: "bg-slate-50",
        borderColor: "border-slate-200"
      },
      {
        icon: ClockIcon,
        title: "Timely Service",
        description: "We respect your time with punctual arrivals, efficient work completion, and 24/7 emergency support when you need it most.",
        color: "text-blue-700",
        bgColor: "bg-blue-50",
        borderColor: "border-blue-200"
      },
      {
        icon: UserGroupIcon,
        title: "Customer Focus",
        description: "Your satisfaction is our priority. We listen to your needs and provide personalized solutions that exceed expectations.",
        color: "text-orange-600",
        bgColor: "bg-orange-50",
        borderColor: "border-orange-200"
      }
    ];
  
    return (
      <div className="py-8 lg:py-12 bg-white">
        <div className="max-w-6xl mx-auto px-3 sm:px-4 lg:px-6">
          {/* Header */}
          <div className="text-center mb-10">
            <div className="inline-flex items-center px-3 py-1.5 bg-emerald-100 text-emerald-800 rounded-full text-xs font-medium mb-3">
              Our Foundation
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">
              Values That <span className="text-blue-700">Drive Us</span>
            </h2>
            <p className="text-sm md:text-base text-slate-600 max-w-2xl mx-auto">
              These core principles guide everything we do, from the smallest repair 
              to the largest solar installation project.
            </p>
          </div>
  
          {/* Values Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {values.map((value, index) => (
              <div 
                key={index}
                className={`group relative p-4 rounded-xl border ${value.borderColor} ${value.bgColor} hover:shadow-md transition-all duration-300 hover:-translate-y-0.5`}
              >
                {/* Icon */}
                <div className={`inline-flex p-2 rounded-lg ${value.bgColor.replace('50', '100')} mb-3 group-hover:scale-105 transition-transform duration-300`}>
                  <value.icon className={`w-6 h-6 ${value.color}`} />
                </div>
  
                {/* Content */}
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {value.title}
                </h3>
                <p className="text-sm text-slate-600 leading-snug">
                  {value.description}
                </p>
  
                {/* Hover Background */}
                <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-white/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
              </div>
            ))}
          </div>
  
          {/* Bottom Stats Section */}
          <div className="mt-10 bg-gradient-to-r from-blue-700 to-blue-800 rounded-xl p-6 text-white">
            <div className="text-center mb-6">
              <h3 className="text-lg md:text-xl font-semibold mb-2">
                Why Customers Choose Us
              </h3>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="text-center">
                <div className="text-xl md:text-2xl font-bold text-orange-400 mb-1">
                  500+
                </div>
                <div className="text-xs text-blue-100">Happy Customers</div>
              </div>
              <div className="text-center">
                <div className="text-xl md:text-2xl font-bold text-emerald-400 mb-1">
                  99%
                </div>
                <div className="text-xs text-blue-100">On-Time Completion</div>
              </div>
              <div className="text-center">
                <div className="text-xl md:text-2xl font-bold text-orange-400 mb-1">
                  24/7
                </div>
                <div className="text-xs text-blue-100">Emergency Support</div>
              </div>
              <div className="text-center">
                <div className="text-xl md:text-2xl font-bold text-emerald-400 mb-1">
                  5★
                </div>
                <div className="text-xs text-blue-100">Average Rating</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default CompanyValues;
  
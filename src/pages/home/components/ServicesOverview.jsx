import React from 'react';
import { 
  BoltIcon,
  WrenchScrewdriverIcon,
  SunIcon,
  ArrowRightIcon,
  HomeIcon,
  BuildingOfficeIcon,
  CheckCircleIcon
} from '@heroicons/react/24/outline';

const ServicesOverview = () => {
  const services = [
    {
      id: 1,
      icon: BoltIcon,
      title: 'Electrical Services',
      description: 'Complete electrical solutions from wiring to panel upgrades, ensuring safety and reliability for your property.',
      color: 'blue',
      features: [
        'Residential & Commercial Wiring',
        'Panel Upgrades & Repairs',
        'Lighting Installation',
        'Emergency Electrical Repairs'
      ],
      bgGradient: 'from-blue-50 to-blue-100',
      iconColor: 'text-blue-700',
      borderColor: 'border-blue-200',
      buttonColor: 'bg-blue-700 hover:bg-blue-800'
    },
    {
      id: 2,
      icon: WrenchScrewdriverIcon,
      title: 'Plumbing Services',
      description: 'Professional plumbing services including installations, repairs, and maintenance for residential and commercial properties.',
      color: 'orange',
      features: [
        'Pipe Installation & Repair',
        'Drain Cleaning & Unclogging',
        'Water Heater Services',
        '24/7 Emergency Plumbing'
      ],
      bgGradient: 'from-orange-50 to-orange-100',
      iconColor: 'text-orange-600',
      borderColor: 'border-orange-200',
      buttonColor: 'bg-orange-600 hover:bg-orange-700'
    },
    {
      id: 3,
      icon: SunIcon,
      title: 'Solar Installation',
      description: 'Sustainable energy solutions with professional solar panel installation and maintenance services.',
      color: 'green',
      features: [
        'Solar Panel Installation',
        'System Design & Consultation',
        'Battery Storage Solutions',
        'Maintenance & Monitoring'
      ],
      bgGradient: 'from-green-50 to-green-100',
      iconColor: 'text-green-600',
      borderColor: 'border-green-200',
      buttonColor: 'bg-green-600 hover:bg-green-700'
    }
  ];

  return (
    <section className="py-10 lg:py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-5 lg:px-6">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">
            Our Professional Services
          </h2>
          <p className="text-base text-slate-600 max-w-3xl mx-auto leading-normal">
            We provide comprehensive electrical, plumbing, and solar services for both 
            residential and commercial properties with guaranteed quality and reliability.
          </p>
          
          {/* Service Types */}
          <div className="flex flex-wrap justify-center gap-3 mt-6">
            <div className="flex items-center space-x-1.5 bg-gray-100 px-3 py-1.5 rounded-full">
              <HomeIcon className="h-4 w-4 text-slate-600" />
              <span className="text-sm text-slate-700 font-medium">Residential</span>
            </div>
            <div className="flex items-center space-x-1.5 bg-gray-100 px-3 py-1.5 rounded-full">
              <BuildingOfficeIcon className="h-4 w-4 text-slate-600" />
              <span className="text-sm text-slate-700 font-medium">Commercial</span>
            </div>
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <div
              key={service.id}
              className={`group bg-gradient-to-br ${service.bgGradient} rounded-xl p-6 border ${service.borderColor} hover:shadow-lg transition-all duration-300 hover:-translate-y-1`}
            >
              {/* Service Icon */}
              <div className="mb-4">
                <div className="bg-white rounded-xl p-3 w-14 h-14 flex items-center justify-center shadow-md group-hover:scale-105 transition-transform duration-300">
                  <service.icon className={`h-6 w-6 ${service.iconColor}`} />
                </div>
              </div>

              {/* Service Content */}
              <div className="mb-4">
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {service.title}
                </h3>
                <p className="text-sm text-slate-600 leading-normal mb-4">
                  {service.description}
                </p>

                {/* Service Features */}
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, index) => (
                    <li key={index} className="flex items-center space-x-2">
                      <CheckCircleIcon className={`h-4 w-4 ${service.iconColor} flex-shrink-0`} />
                      <span className="text-sm text-slate-700 font-medium">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* CTA Button */}
              <div className="space-y-3">
                <button
                  className={`w-full ${service.buttonColor} text-white py-2.5 px-5 rounded-md font-semibold transition-all duration-300 flex items-center justify-center space-x-1.5 group-hover:shadow-md text-sm`}
                >
                  <span>Learn More</span>
                  <ArrowRightIcon className="h-4 w-4 group-hover:translate-x-0.5 transition-transform duration-300" />
                </button>
                
                <button className="w-full bg-white text-slate-700 py-2.5 px-5 rounded-md font-semibold border border-gray-200 hover:bg-gray-50 transition-colors duration-300 text-sm">
                  Get Free Quote
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-12">
          <div className="bg-gray-50 rounded-xl p-6 max-w-4xl mx-auto">
            <h3 className="text-xl font-bold text-gray-900 mb-3">
              Need Multiple Services?
            </h3>
            <p className="text-sm text-slate-600 mb-4">
              Save money with our comprehensive service packages. We offer bundled solutions 
              for electrical, plumbing, and solar installations.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <button className="bg-blue-700 text-white px-6 py-2.5 rounded-md font-semibold hover:bg-blue-800 transition-colors duration-300 text-sm">
                View Service Packages
              </button>
              <button className="bg-white text-blue-700 px-6 py-2.5 rounded-md font-semibold border border-blue-200 hover:bg-blue-50 transition-colors duration-300 text-sm">
                Schedule Consultation
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesOverview;
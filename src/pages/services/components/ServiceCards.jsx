// ServiceCards.jsx
import React from 'react';
import project01 from '../../../assets/images/trots01.png';

const ServiceCards = ({ activeTab }) => {
  const services = {
    electrical: [
      {
        id: 1,
        title: 'Electrical Installations',
        description: 'Professional installation of outlets, switches, lighting fixtures, and electrical panels for your home or business.',
        image: project01,
        features: ['Wiring upgrades', 'Panel replacements', 'Lighting installation', 'Code compliance'],
        icon: (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
          </svg>
        )
      },
      {
        id: 2,
        title: 'Electrical Repairs',
        description: 'Fast and reliable electrical repair services to fix any issues with your electrical system.',
        image: project01,
        features: ['Troubleshooting', 'Circuit repairs', 'Outlet repairs', 'Emergency services'],
        icon: (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
          </svg>
        )
      },
      {
        id: 3,
        title: 'Safety Inspections',
        description: 'Comprehensive electrical safety inspections to ensure your home or business is protected.',
        image: project01,
        features: ['Code compliance', 'Hazard identification', 'Detailed reports', 'Preventative solutions'],
        icon: (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
          </svg>
        )
      }
    ],
    plumbing: [
      {
        id: 1,
        title: 'Pipe Installation & Repair',
        description: 'Expert installation and repair of pipes for water supply, drainage, and gas lines.',
        image: project01,
        features: ['Leak detection', 'Pipe replacement', 'Water line repair', 'Drainage solutions'],
        icon: (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-4m-8 0H3m2 0h4M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
          </svg>
        )
      },
      {
        id: 2,
        title: 'Fixture Installation',
        description: 'Professional installation of sinks, toilets, faucets, showers, and other plumbing fixtures.',
        image: project01,
        features: ['Sink installation', 'Toilet replacement', 'Faucet installation', 'Shower/tub install'],
        icon: (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 13l-3 3m0 0l-3-3m3 3V8m0 13a9 9 0 110-18 9 9 0 010 18z" />
          </svg>
        )
      },
      {
        id: 3,
        title: 'Drain Cleaning',
        description: 'Effective solutions for clogged drains and preventative maintenance to avoid future issues.',
        image: project01,
        features: ['Clog removal', 'Preventative maintenance', 'Hydro-jetting', 'Video inspection'],
        icon: (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
          </svg>
        )
      }
    ],
    solar: [
      {
        id: 1,
        title: 'Solar Panel Installation',
        description: 'Professional installation of high-efficiency solar panels for residential and commercial properties.',
        image: project01,
        features: ['Custom system design', 'Professional installation', 'Efficiency optimization', 'Warranty included'],
        icon: (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-orange-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
          </svg>
        )
      },
      {
        id: 2,
        title: 'Solar System Maintenance',
        description: 'Regular maintenance services to keep your solar energy system operating at peak efficiency.',
        image: project01,
        features: ['Performance monitoring', 'Panel cleaning', 'Component inspection', 'Efficiency reports'],
        icon: (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-orange-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z" />
          </svg>
        )
      },
      {
        id: 3,
        title: 'Battery Storage Solutions',
        description: 'Installation of solar battery systems to store excess energy for use when the sun isn\'t shining.',
        image: project01,
        features: ['Energy storage', 'Backup power', 'System integration', 'Monitoring apps'],
        icon: (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-orange-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
          </svg>
        )
      }
    ]
  };

  const currentServices = services[activeTab] || [];

  return (
    <div className="max-w-6xl mx-auto px-3 sm:px-4 lg:px-6 py-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {currentServices.map((service) => (
          <div 
            key={service.id} 
            className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-all duration-300 border border-gray-100 flex flex-col"
          >
            <div className="p-4 flex-grow">
              <div className="flex justify-center items-center h-28 bg-blue-50 rounded-md mb-4 p-2">
                {service.icon}
              </div>
              
              <h2 className="text-lg font-bold text-gray-800 mb-2">{service.title}</h2>
              <p className="text-gray-600 mb-3 text-sm leading-snug">{service.description}</p>
              
              <div className="mb-4">
                <h3 className="font-semibold text-gray-800 mb-2 text-xs uppercase tracking-wide text-blue-600">Includes:</h3>
                <ul className="space-y-1">
                  {service.features.map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <svg className="h-4 w-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-700 text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            
            <div className="px-4 pb-4 mt-auto">
              <div className="flex space-x-2">
                <button className="flex-1 py-2 px-3 bg-white border border-blue-600 text-blue-600 rounded-md text-sm font-medium hover:bg-blue-50 transition-colors duration-200 shadow-sm">
                  Learn More
                </button>
                <button className="flex-1 py-2 px-3 bg-orange-500 text-white rounded-md text-sm font-medium hover:bg-orange-600 transition-colors duration-200 shadow-md">
                  Schedule
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServiceCards;

import React from 'react';

const ProcessSteps = () => {
  const steps = [
    {
      id: 1,
      title: "Consultation & Assessment",
      description: "We start by understanding your needs and assessing your property to provide the best solutions.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#1E40AF]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
        </svg>
      )
    },
    {
      id: 2,
      title: "Planning & Quotation",
      description: "Our experts create a detailed plan and provide a transparent, competitive quote.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#1E40AF]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
        </svg>
      )
    },
    {
      id: 3,
      title: "Installation & Implementation",
      description: "Our certified technicians execute the plan with precision and minimal disruption.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#1E40AF]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      )
    },
    {
      id: 4,
      title: "Quality Assurance & Support",
      description: "We conduct thorough testing and provide ongoing support for all our services.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#1E40AF]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      )
    }
  ];

  return (
    <section className="py-8 bg-gradient-to-b from-[#F8FAFC] to-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h2 className="text-2xl font-bold text-[#1E40AF] mb-2">How We Work</h2>
          <p className="text-sm text-[#64748B] max-w-xl mx-auto">
            Our proven process ensures quality service from consultation to completion.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {steps.map((step, index) => (
            <div key={step.id} className="relative">
              {/* Step Number */}
              <div className="absolute -top-3 -left-3 w-7 h-7 rounded-full bg-[#EA580C] text-white flex items-center justify-center font-bold text-xs z-10">
                {index + 1}
              </div>
              
              {/* Step Card */}
              <div className="bg-white rounded-lg shadow-md p-4 h-full border-t-2 border-[#1E40AF] transform transition-all duration-300 hover:-translate-y-1">
                <div className="mb-2 text-[#1E40AF]">{step.icon}</div>
                <h3 className="text-base font-semibold text-gray-800 mb-1">{step.title}</h3>
                <p className="text-xs text-gray-600">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
        
        {/* Call to Action */}
        <div className="text-center mt-8">
          <button className="bg-[#EA580C] hover:bg-orange-700 text-white font-medium py-2 px-5 rounded-full text-sm transition duration-300 transform hover:scale-105">
            Start Your Project
          </button>
        </div>
      </div>
    </section>
  );
};

export default ProcessSteps;

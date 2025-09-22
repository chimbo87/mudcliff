import React from 'react';
import { PhoneIcon, EnvelopeIcon, MapPinIcon, ClockIcon, ChatBubbleLeftRightIcon } from '@heroicons/react/24/outline';

const ContactInformation = () => {
  const contactCards = [
    {
      icon: PhoneIcon,
      title: 'Call Us Directly',
      description: 'Speak directly with our expert team',
      details: [
        { type: 'Emergency Line', number: '(555) 123-EMERG', badge: '24/7' },
        { type: 'Main Office', number: '(555) 123-4567', badge: 'Mon-Fri' },
        { type: 'Solar Department', number: '(555) 123-SOLAR', badge: 'Specialized' }
      ],
      gradient: 'from-blue-500 to-blue-600',
      button: { text: 'Call Now', href: 'tel:5551234567' }
    },
    {
      icon: EnvelopeIcon,
      title: 'Email Us',
      description: 'Send us a message for non-urgent inquiries',
      details: [
        { type: 'General Inquiries', email: 'info@powersolutions.com' },
        { type: 'Support Team', email: 'support@powersolutions.com' },
        { type: 'Solar Quotes', email: 'solar@powersolutions.com' }
      ],
      gradient: 'from-green-500 to-green-600',
      button: { text: 'Send Email', href: 'mailto:info@powersolutions.com' }
    },
    {
      icon: MapPinIcon,
      title: 'Visit Our Office',
      description: 'Stop by for a face-to-face consultation',
      details: [
        { line: '123 Energy Street' },
        { line: 'Power City, PC 12345' },
        { line: 'United States' }
      ],
      gradient: 'from-orange-500 to-orange-600',
      button: { text: 'Get Directions', href: '#' }
    }
  ];

  return (
    <section className="py-10 bg-gradient-to-br from-gray-50 to-blue-50 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-12 h-12 bg-[#1E40AF] rounded-full mb-2">
            <ChatBubbleLeftRightIcon className="h-6 w-6 text-white" />
          </div>
          <h2 className="text-2xl md:text-3xl font-bold text-[#1E40AF] mb-2">
            Get in Touch
          </h2>
          <p className="text-[#64748B] text-sm max-w-xl mx-auto">
            Multiple ways to reach our expert team. Choose what works best for you.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
          {contactCards.map((card, index) => (
            <div key={index} className="group relative">
              <div className="relative bg-white rounded-xl shadow-md overflow-hidden transition-all duration-300 hover:shadow-lg hover:translate-y-1">
                <div className={`bg-gradient-to-r ${card.gradient} p-4 text-white`}>
                  <div className="flex items-center space-x-3">
                    <div className="bg-white/20 rounded-lg p-2">
                      <card.icon className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold">{card.title}</h3>
                      <p className="text-white/90 text-xs">{card.description}</p>
                    </div>
                  </div>
                </div>

                <div className="p-4">
                  <div className="space-y-2">
                    {card.details.map((detail, idx) => (
                      <div key={idx} className="flex items-center justify-between py-1 border-b border-gray-100 last:border-b-0">
                        <div>
                          <p className="font-semibold text-gray-700 text-xs">
                            {detail.type || detail.line}
                          </p>
                          <p className="text-[#1E40AF] font-medium text-xs">
                            {detail.number || detail.email || ''}
                          </p>
                        </div>
                        {detail.badge && (
                          <span className="bg-green-100 text-green-800 text-[10px] px-1 py-0.5 rounded-full font-medium">
                            {detail.badge}
                          </span>
                        )}
                      </div>
                    ))}
                  </div>

                  <a
                    href={card.button.href}
                    className="mt-4 w-full bg-gradient-to-r from-[#1E40AF] to-blue-600 hover:from-blue-600 hover:to-[#1E40AF] text-white font-semibold py-2 px-3 rounded-md transition-all duration-300 flex items-center justify-center space-x-1 text-sm"
                  >
                    <span>{card.button.text}</span>
                    <div className="w-4 h-4 bg-white/20 rounded-full flex items-center justify-center">
                      <svg className="w-2.5 h-2.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </div>
                  </a>
                </div>

                <div className="absolute top-0 right-0 w-16 h-16 bg-white/10 rounded-full -translate-y-8 translate-x-8"></div>
                <div className="absolute bottom-0 left-0 w-12 h-12 bg-white/10 rounded-full translate-y-6 -translate-x-6"></div>
              </div>

              <div className="absolute -top-2 -right-2">
                <div className="bg-[#EA580C] text-white px-2 py-0.5 rounded-full text-xs font-semibold shadow-md">
                  Fast Response
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
          <div className="bg-white/80 backdrop-blur-sm rounded-lg p-4 shadow-md">
            <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-2">
              <ClockIcon className="h-5 w-5 text-green-600" />
            </div>
            <h4 className="font-semibold text-gray-800 text-sm mb-1">Response Time</h4>
            <p className="text-xs text-gray-600">Emergency calls: Within 30 min</p>
            <p className="text-xs text-gray-600">Emails: Within 2 hours</p>
          </div>

          <div className="bg-white/80 backdrop-blur-sm rounded-lg p-4 shadow-md">
            <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-2">
              <svg className="h-5 w-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
            <h4 className="font-semibold text-gray-800 text-sm mb-1">Licensed & Insured</h4>
            <p className="text-xs text-gray-600">All technicians certified</p>
            <p className="text-xs text-gray-600">Full liability coverage</p>
          </div>

          <div className="bg-white/80 backdrop-blur-sm rounded-lg p-4 shadow-md">
            <div className="w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-2">
              <svg className="h-5 w-5 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h4 className="font-semibold text-gray-800 text-sm mb-1">Satisfaction Guaranteed</h4>
            <p className="text-xs text-gray-600">100% quality assurance</p>
            <p className="text-xs text-gray-600">Money-back guarantee</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactInformation;

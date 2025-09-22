import React, { useState } from 'react';
import { PaperAirplaneIcon, UserIcon, EnvelopeIcon, PhoneIcon, WrenchScrewdriverIcon, ChatBubbleLeftRightIcon } from '@heroicons/react/24/outline';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const services = [
    'Electrical Installation',
    'Electrical Maintenance',
    'Plumbing Installation',
    'Plumbing Maintenance',
    'Solar Panel Installation',
    'Solar System Maintenance',
    'Emergency Repair',
    'Other'
  ];

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    await new Promise(resolve => setTimeout(resolve, 1500));
    console.log('Form submitted:', formData);
    alert('Thank you for your message! We will get back to you within 2 hours.');
    setFormData({ name: '', email: '', phone: '', service: '', message: '' });
    setIsSubmitting(false);
  };

  return (
    <section className="py-10 bg-gradient-to-br from-blue-50 to-green-50 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-[#1E40AF] to-[#10B981] rounded-full mb-4 shadow-md">
            <ChatBubbleLeftRightIcon className="h-8 w-8 text-white" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-[#1E40AF] mb-2">
            Send Us a Message
          </h2>
          <p className="text-[#64748B] text-sm md:text-base max-w-2xl mx-auto">
            Fill out the form below and our expert team will contact you within <span className="font-semibold text-[#EA580C]">2 hours</span>
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
          {/* Form Side */}
          <div className="lg:col-span-3">
            <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-blue-100">
              <div className="bg-gradient-to-r from-[#1E40AF] to-blue-600 p-4 text-white">
                <h3 className="text-xl font-bold flex items-center">
                  <PaperAirplaneIcon className="h-5 w-5 mr-2" />
                  Quick Contact Form
                </h3>
                <p className="text-blue-100 mt-1 text-xs">We'll respond faster than you can say "power outage"!</p>
              </div>

              <div className="p-6">
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {/* Name Field */}
                    <div className="relative">
                      <label className="block text-xs font-semibold text-gray-700 mb-1">Full Name *</label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-2 flex items-center pointer-events-none">
                          <UserIcon className="h-4 w-4 text-gray-400" />
                        </div>
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          className="pl-8 w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#1E40AF] focus:border-transparent transition-all duration-200 bg-gray-50 text-sm"
                          placeholder="Your full name"
                        />
                      </div>
                    </div>

                    {/* Email Field */}
                    <div className="relative">
                      <label className="block text-xs font-semibold text-gray-700 mb-1">Email Address *</label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-2 flex items-center pointer-events-none">
                          <EnvelopeIcon className="h-4 w-4 text-gray-400" />
                        </div>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          className="pl-8 w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#1E40AF] focus:border-transparent transition-all duration-200 bg-gray-50 text-sm"
                          placeholder="your@email.com"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {/* Phone Field */}
                    <div className="relative">
                      <label className="block text-xs font-semibold text-gray-700 mb-1">Phone Number *</label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-2 flex items-center pointer-events-none">
                          <PhoneIcon className="h-4 w-4 text-gray-400" />
                        </div>
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          required
                          className="pl-8 w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#1E40AF] focus:border-transparent transition-all duration-200 bg-gray-50 text-sm"
                          placeholder="(555) 123-4567"
                        />
                      </div>
                    </div>

                    {/* Service Field */}
                    <div className="relative">
                      <label className="block text-xs font-semibold text-gray-700 mb-1">Service Needed *</label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-2 flex items-center pointer-events-none z-10">
                          <WrenchScrewdriverIcon className="h-4 w-4 text-gray-400" />
                        </div>
                        <select
                          name="service"
                          value={formData.service}
                          onChange={handleChange}
                          required
                          className="pl-8 w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#1E40AF] focus:border-transparent transition-all duration-200 bg-gray-50 text-sm appearance-none"
                        >
                          <option value="">Select a service</option>
                          {services.map((service, index) => (
                            <option key={index} value={service}>{service}</option>
                          ))}
                        </select>
                        <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
                          <svg className="h-3 w-3 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Message Field */}
                  <div className="relative">
                    <label className="block text-xs font-semibold text-gray-700 mb-1">Project Details *</label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={4}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#1E40AF] focus:border-transparent transition-all duration-200 bg-gray-50 resize-none text-sm"
                      placeholder="Please describe your project or issue..."
                    ></textarea>
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`w-full py-3 px-4 rounded-md font-semibold text-sm transition-all duration-300 flex items-center justify-center space-x-2 ${
                      isSubmitting 
                        ? 'bg-gray-400 cursor-not-allowed' 
                        : 'bg-gradient-to-r from-[#1E40AF] to-blue-600 hover:from-blue-600 hover:to-[#1E40AF] shadow-md hover:shadow-lg transform hover:-translate-y-0.5'
                    }`}
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-4 h-4 border-t-2 border-white rounded-full animate-spin"></div>
                        <span>Sending...</span>
                      </>
                    ) : (
                      <>
                        <PaperAirplaneIcon className="h-4 w-4" />
                        <span>Send Message</span>
                      </>
                    )}
                  </button>

                  <p className="text-center text-xs text-gray-500 pt-3 border-t border-gray-200">
                    <svg className="inline w-3 h-3 mr-1 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    We respect your privacy. Your information will never be shared.
                  </p>
                </form>
              </div>
            </div>
          </div>

          {/* Info Side */}
          <div className="lg:col-span-2">
            <div className="bg-gradient-to-br from-[#1E40AF] to-blue-700 rounded-xl shadow-lg text-white p-6 h-full">
              <h3 className="text-xl font-bold mb-4">Why Choose Us?</h3>
              <div className="space-y-4 text-sm">
                {[
                  { icon: 'clock', title: 'Fast Response', text: 'We guarantee a response within 2 hours during business hours' },
                  { icon: 'check', title: 'Licensed Experts', text: 'All our technicians are certified and insured professionals' },
                  { icon: 'star', title: 'Satisfaction Guarantee', text: 'We stand behind our work with a 100% satisfaction guarantee' },
                  { icon: 'phone', title: 'Free Estimates', text: 'Get a detailed, no-obligation quote for your project' },
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start space-x-3">
                    <div className="bg-white/20 rounded-full p-1 mt-1">
                      <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={
                          item.icon === 'clock' ? "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" :
                          item.icon === 'check' ? "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" :
                          item.icon === 'star' ? "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" :
                          "M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z"
                        } />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold">{item.title}</h4>
                      <p>{item.text}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-6 pt-4 border-t border-blue-500 text-sm">
                <h4 className="font-semibold mb-1">Prefer to call?</h4>
                <a href="tel:5551234567" className="inline-flex items-center space-x-2 bg-white/20 hover:bg-white/30 px-3 py-1.5 rounded-md transition-colors">
                  <PhoneIcon className="h-3 w-3" />
                  <span className="font-mono">(555) 123-4567</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;

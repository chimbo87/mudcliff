import React, { useState } from 'react';

const QuoteForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Thank you for your request! We will contact you shortly.');
  };

  return (
    <section className="py-8 bg-gradient-to-b from-white to-[#F8FAFC]">
      <div className="container mx-auto px-2">
        <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-md overflow-hidden">
          <div className="md:flex">
            {/* Left Info Panel */}
            <div className="md:w-2/5 bg-[#1E40AF] p-4 text-white">
              <h2 className="text-2xl font-bold mb-4">Request a Free Quote</h2>
              <p className="mb-4 text-sm">
                Fill out the form and our team will get back to you within 24 hours with a customized quote.
              </p>

              <div className="space-y-3 text-sm">
                <div className="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <div>
                    <h3 className="font-semibold">Call Us Directly</h3>
                    <p>+26377 327 9790</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <div>
                    <h3 className="font-semibold">Email Us</h3>
                    <p>info@mudcliff.com</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <div>
                    <h3 className="font-semibold">Response Time</h3>
                    <p>Within 24 hours</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Form Panel */}
            <div className="md:w-3/5 p-4">
              <form onSubmit={handleSubmit} className="space-y-4 text-sm">
                <div>
                  <label htmlFor="name" className="block font-medium mb-1">Full Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#1E40AF] focus:border-transparent text-sm"
                    required
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="email" className="block font-medium mb-1">Email Address</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#1E40AF] focus:border-transparent text-sm"
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className="block font-medium mb-1">Phone Number</label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#1E40AF] focus:border-transparent text-sm"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="service" className="block font-medium mb-1">Service Needed</label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#1E40AF] focus:border-transparent text-sm"
                    required
                  >
                    <option value="">Select a service</option>
                    <option value="electrical">Electrical Services</option>
                    <option value="plumbing">Plumbing Services</option>
                    <option value="solar">Solar Installation</option>
                    <option value="maintenance">Maintenance & Repair</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block font-medium mb-1">Project Details</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows="3"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#1E40AF] focus:border-transparent text-sm"
                    required
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-[#EA580C] hover:bg-orange-700 text-white font-semibold py-2 rounded-md transition duration-300 text-sm"
                >
                  Request Quote
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default QuoteForm;

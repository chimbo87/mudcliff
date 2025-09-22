import React from 'react';

const ContactHero = () => {
  return (
    <section className="relative bg-gradient-to-r from-[#1E40AF] to-[#0F2A7F] py-10 px-4 sm:px-6 lg:px-8">
      <div className="absolute inset-0 bg-black opacity-20"></div>
      <div className="relative max-w-4xl mx-auto text-center">
        <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
          Get In Touch With Us
        </h1>
        <p className="text-sm md:text-base text-blue-100 max-w-2xl mx-auto">
          Ready to power your home with reliable electrical, plumbing, and solar solutions? 
          Our expert team is here to help with all your installation and maintenance needs.
        </p>
        <div className="mt-4 flex flex-col sm:flex-row gap-2 justify-center">
          <div className="bg-[#EA580C] text-white px-4 py-2 rounded-lg font-semibold shadow">
            Emergency Service: 24/7 Available
          </div>
          <div className="bg-[#10B981] text-white px-4 py-2 rounded-lg font-semibold shadow">
            Free Estimates & Consultations
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactHero;

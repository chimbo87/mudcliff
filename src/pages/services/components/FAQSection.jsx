import React, { useState } from 'react';

const FAQSection = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqs = [
    {
      question: "How long does a typical electrical installation take?",
      answer:
        "The duration varies based on the project scope. A standard electrical installation for a home can take 1-3 days, while more complex projects may require a week or more. We provide a timeline estimate during our initial consultation.",
    },
    {
      question: "Do you offer emergency plumbing services?",
      answer:
        "Yes, we offer 24/7 emergency plumbing services for urgent issues like burst pipes, severe leaks, and clogged drains that could cause property damage. Our response time is typically within 2 hours for emergency calls.",
    },
    {
      question: "What are the benefits of solar panel installation?",
      answer:
        "Solar panels can significantly reduce your electricity bills, increase your property value, provide energy independence, and reduce your carbon footprint. With various incentives available, most homeowners see a return on investment within 5-7 years.",
    },
    {
      question: "Are your technicians licensed and insured?",
      answer:
        "Absolutely. All our technicians are fully licensed, certified, and insured. We regularly update their training to ensure they're knowledgeable about the latest technologies and safety standards in electrical, plumbing, and solar installation.",
    },
    {
      question: "Do you provide warranties on your work?",
      answer:
        "Yes, we stand behind our work with comprehensive warranties. Most installations come with a 1-2 year labor warranty, and we also honor manufacturer warranties on all parts and equipment we install.",
    },
    {
      question: "How do I request a quote for services?",
      answer:
        "You can request a quote by filling out our online form, calling our office, or sending us an email. We'll schedule a convenient time to assess your needs and provide a detailed, transparent estimate with no obligation.",
    },
  ];

  return (
    <section className="py-8 bg-white">
      <div className="container mx-auto px-3">
        <div className="text-center mb-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-[#1E40AF] mb-2">
            Frequently Asked Questions
          </h2>
          <p className="text-base text-[#64748B] max-w-2xl mx-auto">
            Find answers to common questions about our services
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="mb-3 border border-gray-200 rounded-md overflow-hidden"
            >
              <button
                className="flex justify-between items-center w-full p-4 text-left bg-white hover:bg-gray-50 transition-colors duration-200"
                onClick={() => toggleFAQ(index)}
              >
                <span className="text-base font-medium text-gray-800">
                  {faq.question}
                </span>
                <svg
                  className={`w-4 h-4 text-[#1E40AF] transition-transform duration-300 ${
                    activeIndex === index ? "transform rotate-180" : ""
                  }`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>

              <div
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  activeIndex === index ? "max-h-80" : "max-h-0"
                }`}
              >
                <div className="p-4 bg-gray-50 border-t border-gray-200">
                  <p className="text-sm text-gray-600">{faq.answer}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Support */}
        <div className="text-center mt-8 bg-[#10B981] text-white p-6 rounded-lg max-w-3xl mx-auto">
          <h3 className="text-xl font-bold mb-3">Still Have Questions?</h3>
          <p className="text-sm mb-4">
            Our team is here to help you with any questions about our services
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-3">
            <button className="bg-white text-[#10B981] font-semibold py-2 px-6 rounded-full text-sm transition duration-300 hover:bg-gray-100">
              Call Us Now
            </button>
            <button className="bg-transparent border border-white text-white font-semibold py-2 px-6 rounded-full text-sm transition duration-300 hover:bg-white hover:text-[#10B981]">
              Send Message
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;

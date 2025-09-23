import { useState, useRef, useEffect } from "react";
import { useLocation } from "react-router-dom";
import {
  PaperAirplaneIcon,
  UserIcon,
  EnvelopeIcon,
  PhoneIcon,
  WrenchScrewdriverIcon,
  ChatBubbleLeftRightIcon,
} from "@heroicons/react/24/outline";

const ContactForm = () => {
  const location = useLocation();
  const contactRef = useRef(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  useEffect(() => {
    if (location.hash === "#contact-form" && contactRef.current) {
      contactRef.current.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  }, [location]);
  const services = [
    "Electrical Installation",
    "Electrical Maintenance",
    "Plumbing Installation",
    "Plumbing Maintenance",
    "Solar Panel Installation",
    "Solar System Maintenance",
    "Emergency Repair",
    "Other",
  ];

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Create WhatsApp message
    const whatsappMessage = `Hello Mudcliff Team,

I hope this message finds you well. I am reaching out to request a quote for your professional services.

*Client Details:*
📝 Name: ${formData.name}
📧 Email: ${formData.email}
📞 Phone: ${formData.phone}

*Service Required:*
🔧 ${formData.service}

*Project Details:*
${formData.message}

I would appreciate it if you could provide me with a detailed quote and timeline for this project. Please feel free to contact me at your earliest convenience to discuss this further.

Thank you for your time and consideration. I look forward to working with your team.

Best regards,
${formData.name}`;

    // WhatsApp number (remove spaces and format properly)
    const whatsappNumber = "263773279790";
    
    // Encode the message for URL
    const encodedMessage = encodeURIComponent(whatsappMessage);
    
    // Create WhatsApp URL
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;

    // Simulate form processing delay
    await new Promise((resolve) => setTimeout(resolve, 1500));

    // Open WhatsApp
    window.open(whatsappUrl, '_blank');

    // Show success message
    alert(
      "Your message has been prepared for WhatsApp! Please send the message to complete your request. We will get back to you within 2 hours."
    );
    
    // Reset form
    setFormData({ name: "", email: "", phone: "", service: "", message: "" });
    setIsSubmitting(false);
  };

  return (
    <section className="py-10 bg-gradient-to-br from-blue-50 to-green-50 px-4 sm:px-6 lg:px-8"  id="contact-form">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-[#1E40AF] to-[#10B981] rounded-full mb-4 shadow-md">
            <ChatBubbleLeftRightIcon className="h-8 w-8 text-white" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-[#1E40AF] mb-2">
            Send Us a Message
          </h2>
          <p className="text-[#64748B] text-sm md:text-base max-w-2xl mx-auto">
            Fill out the form below and we'll send your request via WhatsApp. Our expert team will contact you within{" "}
            <span className="font-semibold text-[#EA580C]">2 hours</span>
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
                <p className="text-blue-100 mt-1 text-xs">
                  We'll respond faster than you can say "power outage"!
                </p>
              </div>

              <div className="p-6">
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {/* Name Field */}
                    <div className="relative">
                      <label className="block text-xs font-semibold text-gray-700 mb-1">
                        Full Name *
                      </label>
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
                      <label className="block text-xs font-semibold text-gray-700 mb-1">
                        Email Address *
                      </label>
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
                      <label className="block text-xs font-semibold text-gray-700 mb-1">
                        Phone Number *
                      </label>
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
                      <label className="block text-xs font-semibold text-gray-700 mb-1">
                        Service Needed *
                      </label>
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
                            <option key={index} value={service}>
                              {service}
                            </option>
                          ))}
                        </select>
                        <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
                          <svg
                            className="h-3 w-3 text-gray-400"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M19 9l-7 7-7-7"
                            />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Message Field */}
                  <div className="relative">
                    <label className="block text-xs font-semibold text-gray-700 mb-1">
                      Project Details *
                    </label>
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
                    className={`w-full py-3 px-4 rounded-md font-semibold text-sm transition-all duration-300 flex items-center justify-center space-x-2 text-white ${
                      isSubmitting
                        ? "bg-gray-400 cursor-not-allowed"
                        : "bg-gradient-to-r from-[#25D366] to-[#128C7E] hover:from-[#128C7E] hover:to-[#25D366] shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
                    }`}
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-4 h-4 border-t-2 border-white rounded-full animate-spin"></div>
                        <span>Preparing WhatsApp...</span>
                      </>
                    ) : (
                      <>
                        <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.890-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.594z"/>
                        </svg>
                        <span>Send via WhatsApp</span>
                      </>
                    )}
                  </button>

                  <p className="text-center text-xs text-gray-500 pt-3 border-t border-gray-200">
                    <svg
                      className="inline w-3 h-3 mr-1 text-green-500"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                    We respect your privacy. Your information will never be
                    shared.
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
                  {
                    icon: "clock",
                    title: "Fast Response",
                    text: "We guarantee a response within 2 hours during business hours",
                  },
                  {
                    icon: "check",
                    title: "Licensed Experts",
                    text: "All our technicians are certified and insured professionals",
                  },
                  {
                    icon: "star",
                    title: "Satisfaction Guarantee",
                    text: "We stand behind our work with a 100% satisfaction guarantee",
                  },
                  {
                    icon: "phone",
                    title: "Free Estimates",
                    text: "Get a detailed, no-obligation quote for your project",
                  },
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start space-x-3">
                    <div className="bg-white/20 rounded-full p-1 mt-1">
                      <svg
                        className="h-4 w-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d={
                            item.icon === "clock"
                              ? "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                              : item.icon === "check"
                              ? "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                              : item.icon === "star"
                              ? "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                              : "M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z"
                          }
                        />
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
                <h4 className="font-semibold mb-2">Contact us directly:</h4>
                <div className="space-y-2">
                  <a
                    href="tel:+263773279790"
                    className="inline-flex items-center space-x-2 bg-white/20 hover:bg-white/30 px-3 py-1.5 rounded-md transition-colors w-full"
                  >
                    <PhoneIcon className="h-3 w-3" />
                    <span className="font-mono">+263 773279790</span>
                  </a>
                  <a
                    href="https://wa.me/263773279790"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center space-x-2 bg-[#25D366]/20 hover:bg-[#25D366]/30 px-3 py-1.5 rounded-md transition-colors w-full"
                  >
                    <svg className="h-3 w-3" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.890-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.594z"/>
                    </svg>
                    <span>WhatsApp Direct</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
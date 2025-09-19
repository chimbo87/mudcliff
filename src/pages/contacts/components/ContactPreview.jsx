import React, { useEffect } from 'react';
import { useForm } from '@formspree/react';
import toast, { Toaster } from 'react-hot-toast';

const ContactPreview = () => {
  const [state, handleSubmit] = useForm("xyzpvwnr");

  useEffect(() => {
    if (state.succeeded) {
      // Clear form inputs
      const form = document.querySelector('.contact-form');
      if (form) {
        form.reset();
      }
      
      toast.success('Message sent successfully!', {
        duration: 4000,
        position: 'bottom-center',
        style: {
          background: '#10b981', 
          color: '#fff',
        },
        iconTheme: {
          primary: '#fff',
          secondary: '#10b981',
        },
      });
    }
    if (state.errors && state.errors.length > 0) {
      toast.error('Failed to send message. Please try again.', {
        duration: 4000,
        position: 'top-center',
        style: {
          background: '#ef4444', // red-500
          color: '#fff',
        },
        iconTheme: {
          primary: '#fff',
          secondary: '#ef4444',
        },
      });
    }
  }, [state.succeeded, state.errors]);

  return (
    <section className="bg-slate-800 py-20 relative overflow-hidden">
      {/* Background gradient effect */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-blue-500/10 to-transparent -translate-y-1/3 translate-x-1/3 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <Toaster 
          toastOptions={{
            className: '',
            style: {
              border: '1px solid #334155',
              padding: '16px',
              fontSize: '0.875rem',
            },
          }}
        />
        
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-50 mb-4">Let's Connect</h2>
          <p className="text-slate-300 text-xl max-w-2xl mx-auto">
            Have a project in mind? Let's make it happen!
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          <form className="contact-form space-y-8" onSubmit={handleSubmit}>
            <div className="form-control">
              <div className="relative">
                <input
                  id="name"
                  type="text"
                  className="w-full bg-slate-900 border-0 border-b-2 border-slate-700 focus:border-blue-500 text-slate-50 px-4 py-3 focus:outline-none focus:ring-0 transition-colors"
                  placeholder="Your Name"
                  name="name"
                  required
                  disabled={state.submitting}
                />
                <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-500 transition-all duration-300"></div>
              </div>
            </div>

            <div className="form-control">
              <div className="relative">
                <input
                  id="email"
                  type="email"
                  className="w-full bg-slate-900 border-0 border-b-2 border-slate-700 focus:border-blue-500 text-slate-50 px-4 py-3 focus:outline-none focus:ring-0 transition-colors"
                  placeholder="Email Address"
                  name="email"
                  required
                  disabled={state.submitting}
                />
                <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-500 transition-all duration-300"></div>
              </div>
            </div>

            <div className="form-control">
              <div className="relative">
                <textarea
                  id="message"
                  className="w-full bg-slate-900 border-0 border-b-2 border-slate-700 focus:border-blue-500 text-slate-50 px-4 py-3 focus:outline-none focus:ring-0 transition-colors resize-none"
                  placeholder="Your Message"
                  name="message"
                  rows="5"
                  required
                  disabled={state.submitting}
                />
                <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-500 transition-all duration-300"></div>
              </div>
            </div>

            <button
              type="submit"
              className="btn bg-gradient-to-r from-blue-500 to-green-500 text-white hover:bg-blue-600 hover:border-blue-600 w-full py-2 text-lg flex items-center justify-center gap-3 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
              disabled={state.submitting}
            >
              {state.submitting ? (
                <span className="flex items-center gap-2">
                  <span className="loading loading-spinner loading-sm"></span>
                  Sending...
                </span>
              ) : (
                <>
                  Send Message
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </>
              )}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactPreview;
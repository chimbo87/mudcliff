import React, { useState, useEffect } from 'react';
import { 
  StarIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
  ChatBubbleLeftRightIcon,
  MapPinIcon,
  CalendarDaysIcon,
  BoltIcon,
  WrenchScrewdriverIcon,
  SunIcon,
  UserCircleIcon,
  CheckBadgeIcon,
  HeartIcon
} from '@heroicons/react/24/outline';
import { StarIcon as StarSolidIcon } from '@heroicons/react/24/solid';

const CustomerTestimonials = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const testimonials = [
    {
      id: 1,
      name: 'Tendai Mukamuri',
      location: 'Borrowdale, Harare',
      service: 'electrical',
      serviceIcon: BoltIcon,
      serviceColor: 'text-blue-600',
      serviceBg: 'bg-blue-100',
      rating: 5,
      date: 'March 2024',
      avatar: 'TM',
      testimonial: 'Outstanding electrical work! They completely rewired our home in Borrowdale and installed modern LED lighting throughout. The team was professional, punctual, and cleaned up perfectly after the job. Highly recommended for anyone in Harare.',
      project: 'Complete Home Rewiring',
      verified: true
    },
    {
      id: 2,
      name: 'Mrs. Chipo Ndoro',
      location: 'Hillside, Bulawayo',
      service: 'plumbing',
      serviceIcon: WrenchScrewdriverIcon,
      serviceColor: 'text-orange-600',
      serviceBg: 'bg-orange-100',
      rating: 5,
      date: 'February 2024',
      avatar: 'CN',
      testimonial: 'Excellent plumbing service! Our kitchen renovation required complete plumbing overhaul. The technicians were knowledgeable, explained everything clearly, and completed the work on schedule. Great value for money.',
      project: 'Kitchen Plumbing Renovation',
      verified: true
    },
    {
      id: 3,
      name: 'David Mujuru',
      location: 'Mount Pleasant, Harare',
      service: 'solar',
      serviceIcon: SunIcon,
      serviceColor: 'text-green-600',
      serviceBg: 'bg-green-100',
      rating: 5,
      date: 'January 2024',
      avatar: 'DM',
      testimonial: 'Amazing solar installation! Our 10kW system has been working flawlessly. The team handled everything from permits to installation. Our electricity bills have dropped by 80%. Best investment we ever made!',
      project: '10kW Solar System Installation',
      verified: true
    },
    {
      id: 4,
      name: 'Grace Sibanda',
      location: 'CBD, Bulawayo',
      service: 'electrical',
      serviceIcon: BoltIcon,
      serviceColor: 'text-blue-600',
      serviceBg: 'bg-blue-100',
      rating: 5,
      date: 'December 2023',
      avatar: 'GS',
      testimonial: 'Professional emergency service! When our office lost power during a crucial presentation, they responded within 30 minutes and had us back up in under an hour. Saved our important client meeting!',
      project: 'Emergency Electrical Repair',
      verified: true
    },
    {
      id: 5,
      name: 'Martin Chivasa',
      location: 'Avondale, Harare',
      service: 'plumbing',
      serviceIcon: WrenchScrewdriverIcon,
      serviceColor: 'text-orange-600',
      serviceBg: 'bg-orange-100',
      rating: 5,
      date: 'November 2023',
      avatar: 'MC',
      testimonial: 'Top-notch plumbing work! Complete bathroom renovation with modern fixtures. They handled the water pressure issues we had for years. Clean, efficient, and reasonably priced. Will definitely use them again.',
      project: 'Master Bathroom Renovation',
      verified: true
    },
    {
      id: 6,
      name: 'Joyce Mazuru',
      location: 'Chitungwiza',
      service: 'solar',
      serviceIcon: SunIcon,
      serviceColor: 'text-green-600',
      serviceBg: 'bg-green-100',
      rating: 5,
      date: 'October 2023',
      avatar: 'JM',
      testimonial: 'Fantastic solar service! They designed a perfect system for our family home. The installation was seamless, and the monitoring system helps us track our savings. Professional team from start to finish.',
      project: '8kW Residential Solar System',
      verified: true
    }
  ];

  const overallStats = {
    averageRating: 4.9,
    totalReviews: 1247,
    fiveStarPercentage: 94,
    recommendationRate: 98
  };

  // Auto-play testimonials
  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => 
        prev === testimonials.length - 1 ? 0 : prev + 1
      );
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, testimonials.length]);

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => 
      prev === testimonials.length - 1 ? 0 : prev + 1
    );
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => 
      prev === 0 ? testimonials.length - 1 : prev - 1
    );
  };

  const currentReview = testimonials[currentTestimonial];

  const renderStars = (rating) => {
    return [...Array(5)].map((_, i) => (
      <StarSolidIcon 
        key={i} 
        className={`h-4 w-4 ${i < rating ? 'text-yellow-400' : 'text-gray-300'}`} 
      />
    ));
  };

  return (
    <section className="py-12 lg:py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-3">
            What Our Customers Say
          </h2>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Don't just take our word for it. Here's what homeowners and businesses across 
            Zimbabwe say about our electrical, plumbing, and solar services.
          </p>
        </div>

        {/* Overall Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
          <div className="bg-yellow-50 rounded-lg p-4 text-center border border-yellow-200">
            <div className="flex justify-center mb-2">
              {renderStars(5)}
            </div>
            <div className="text-2xl font-bold text-gray-900 mb-1">{overallStats.averageRating}</div>
            <div className="text-slate-600 text-sm font-medium">Average Rating</div>
          </div>
          <div className="bg-blue-50 rounded-lg p-4 text-center border border-blue-200">
            <HeartIcon className="h-6 w-6 text-blue-600 mx-auto mb-2" />
            <div className="text-2xl font-bold text-gray-900 mb-1">{overallStats.totalReviews}+</div>
            <div className="text-slate-600 text-sm font-medium">Happy Customers</div>
          </div>
          <div className="bg-green-50 rounded-lg p-4 text-center border border-green-200">
            <CheckBadgeIcon className="h-6 w-6 text-green-600 mx-auto mb-2" />
            <div className="text-2xl font-bold text-gray-900 mb-1">{overallStats.fiveStarPercentage}%</div>
            <div className="text-slate-600 text-sm font-medium">5-Star Reviews</div>
          </div>
          <div className="bg-orange-50 rounded-lg p-4 text-center border border-orange-200">
            <StarIcon className="h-6 w-6 text-orange-600 mx-auto mb-2" />
            <div className="text-2xl font-bold text-gray-900 mb-1">{overallStats.recommendationRate}%</div>
            <div className="text-slate-600 text-sm font-medium">Would Recommend</div>
          </div>
        </div>

        {/* Main Testimonial Carousel */}
        <div className="relative">
          <div 
            className="bg-gray-50 rounded-xl p-6 lg:p-8 shadow-lg"
            onMouseEnter={() => setIsAutoPlaying(false)}
            onMouseLeave={() => setIsAutoPlaying(true)}
          >
            {/* Navigation Arrows */}
            <button
              onClick={prevTestimonial}
              className="absolute left-2 top-1/2 -translate-y-1/2 w-10 h-10 bg-white rounded-full shadow-md hover:shadow-lg transition-shadow duration-300 flex items-center justify-center z-10 group"
            >
              <ChevronLeftIcon className="h-5 w-5 text-slate-600 group-hover:text-blue-600 transition-colors duration-300" />
            </button>
            <button
              onClick={nextTestimonial}
              className="absolute right-2 top-1/2 -translate-y-1/2 w-10 h-10 bg-white rounded-full shadow-md hover:shadow-lg transition-shadow duration-300 flex items-center justify-center z-10 group"
            >
              <ChevronRightIcon className="h-5 w-5 text-slate-600 group-hover:text-blue-600 transition-colors duration-300" />
            </button>

            {/* Quote Icon */}
            <div className="flex justify-center mb-6">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                <ChatBubbleLeftRightIcon className="h-6 w-6 text-blue-600" />
              </div>
            </div>

            {/* Testimonial Content */}
            <div className="text-center max-w-4xl mx-auto">
              {/* Rating Stars */}
              <div className="flex justify-center mb-4">
                {renderStars(currentReview.rating)}
              </div>

              {/* Testimonial Text */}
              <blockquote className="text-lg lg:text-xl text-slate-700 font-medium leading-relaxed mb-6 italic">
                "{currentReview.testimonial}"
              </blockquote>

              {/* Customer Info */}
              <div className="flex flex-col sm:flex-row items-center justify-center space-y-3 sm:space-y-0 sm:space-x-6 mb-4">
                {/* Avatar and Name */}
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-sm">
                    {currentReview.avatar}
                  </div>
                  <div className="text-left">
                    <div className="flex items-center space-x-1">
                      <span className="font-bold text-gray-900 text-sm">{currentReview.name}</span>
                      {currentReview.verified && (
                        <CheckBadgeIcon className="h-4 w-4 text-blue-500" />
                      )}
                    </div>
                    <div className="text-slate-600 text-xs">Verified Customer</div>
                  </div>
                </div>

                {/* Service Type */}
                <div className="flex items-center space-x-2">
                  <div className={`w-7 h-7 ${currentReview.serviceBg} rounded-md flex items-center justify-center`}>
                    <currentReview.serviceIcon className={`h-4 w-4 ${currentReview.serviceColor}`} />
                  </div>
                  <span className="text-slate-600 text-sm font-medium">{currentReview.project}</span>
                </div>
              </div>

              {/* Location and Date */}
              <div className="flex flex-col sm:flex-row items-center justify-center space-y-1 sm:space-y-0 sm:space-x-4 text-slate-500 text-xs">
                <div className="flex items-center space-x-1">
                  <MapPinIcon className="h-3 w-3" />
                  <span>{currentReview.location}</span>
                </div>
                <div className="flex items-center space-x-1">
                  <CalendarDaysIcon className="h-3 w-3" />
                  <span>{currentReview.date}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Testimonial Indicators */}
          <div className="flex justify-center mt-6 space-x-1">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentTestimonial(index)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === currentTestimonial
                    ? 'bg-blue-600 scale-110'
                    : 'bg-gray-300 hover:bg-gray-400'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Service-Specific Testimonials Grid */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.slice(0, 3).map((testimonial) => (
            <div key={testimonial.id} className="bg-white rounded-lg p-5 shadow-md hover:shadow-lg transition-shadow duration-300 border border-gray-100">
              {/* Service Badge */}
              <div className="flex items-center justify-between mb-3">
                <div className={`flex items-center space-x-1 ${testimonial.serviceBg} px-2 py-1 rounded-md`}>
                  <testimonial.serviceIcon className={`h-3 w-3 ${testimonial.serviceColor}`} />
                  <span className={`text-xs font-medium ${testimonial.serviceColor}`}>
                    {testimonial.service.charAt(0).toUpperCase() + testimonial.service.slice(1)}
                  </span>
                </div>
                <div className="flex">
                  {renderStars(testimonial.rating)}
                </div>
              </div>

              {/* Testimonial */}
              <p className="text-slate-700 mb-3 text-sm leading-relaxed line-clamp-4">
                "{testimonial.testimonial.substring(0, 120)}..."
              </p>

              {/* Customer Info */}
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center text-gray-600 font-semibold text-xs">
                  {testimonial.avatar}
                </div>
                <div>
                  <div className="font-semibold text-gray-900 text-xs">{testimonial.name}</div>
                  <div className="text-slate-500 text-xs">{testimonial.location}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-12 bg-gradient-to-r from-blue-700 to-blue-800 rounded-xl p-6 text-center text-white">
          <h3 className="text-xl font-bold mb-3">
            Join Our Satisfied Customers
          </h3>
          <p className="text-blue-100 mb-4 text-sm max-w-2xl mx-auto">
            Experience the same quality service that has earned us hundreds of 5-star reviews 
            across Zimbabwe. Get your free quote today and see why we're the trusted choice.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <button className="bg-white text-blue-700 px-6 py-2 rounded-md font-semibold text-sm hover:bg-gray-100 transition-colors duration-300">
              Get Your Free Quote
            </button>
            <button className="bg-blue-600 text-white px-6 py-2 rounded-md font-semibold text-sm hover:bg-blue-500 transition-colors duration-300 border border-blue-500">
              Read More Reviews
            </button>
          </div>

          {/* Trust Badges */}
          <div className="flex flex-wrap justify-center items-center gap-4 mt-6 text-blue-100 text-xs">
            <div className="flex items-center space-x-1">
              <CheckBadgeIcon className="h-4 w-4" />
              <span>Verified Reviews</span>
            </div>
            <div className="flex items-center space-x-1">
              <StarIcon className="h-4 w-4 text-yellow-400" />
              <span>4.9/5 Average Rating</span>
            </div>
            <div className="flex items-center space-x-1">
              <HeartIcon className="h-4 w-4" />
              <span>1,200+ Happy Customers</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CustomerTestimonials;
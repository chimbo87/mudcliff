import React from 'react';
import { 
  ShieldCheckIcon,
  ClockIcon,
  StarIcon,
  CurrencyDollarIcon,
  UserGroupIcon,
  WrenchScrewdriverIcon,
  AcademicCapIcon,
  PhoneIcon,
  CheckBadgeIcon,
  TrophyIcon
} from '@heroicons/react/24/outline';

const WhyChooseUs = () => {
  const reasons = [
    {
      id: 1,
      icon: ShieldCheckIcon,
      title: 'Licensed & Insured',
      description: 'Fully licensed professionals with comprehensive insurance coverage for your peace of mind.',
      color: 'blue',
      iconBg: 'bg-blue-100',
      iconColor: 'text-blue-700'
    },
    {
      id: 2,
      icon: ClockIcon,
      title: '24/7 Emergency Service',
      description: 'Round-the-clock availability for urgent electrical, plumbing, and solar emergencies.',
      color: 'orange',
      iconBg: 'bg-orange-100',
      iconColor: 'text-orange-600'
    },
    {
      id: 3,
      icon: StarIcon,
      title: '5-Star Rated Service',
      description: 'Consistently excellent service quality with thousands of satisfied customers.',
      color: 'green',
      iconBg: 'bg-green-100',
      iconColor: 'text-green-600'
    },
    {
      id: 4,
      icon: CurrencyDollarIcon,
      title: 'Transparent Pricing',
      description: 'Upfront pricing with no hidden fees. You know the cost before we start the work.',
      color: 'blue',
      iconBg: 'bg-blue-100',
      iconColor: 'text-blue-700'
    },
    {
      id: 5,
      icon: AcademicCapIcon,
      title: 'Certified Technicians',
      description: 'Highly trained and certified professionals with ongoing education and training.',
      color: 'orange',
      iconBg: 'bg-orange-100',
      iconColor: 'text-orange-600'
    },
    {
      id: 6,
      icon: CheckBadgeIcon,
      title: 'Satisfaction Guarantee',
      description: '100% satisfaction guarantee on all our work. We stand behind our quality.',
      color: 'green',
      iconBg: 'bg-green-100',
      iconColor: 'text-green-600'
    }
  ];

  const stats = [
    {
      number: '15+',
      label: 'Years in Business',
      icon: TrophyIcon,
      color: 'text-blue-700'
    },
    {
      number: '2,500+',
      label: 'Satisfied Customers',
      icon: UserGroupIcon,
      color: 'text-orange-600'
    },
    {
      number: '5,000+',
      label: 'Projects Completed',
      icon: WrenchScrewdriverIcon,
      color: 'text-green-600'
    },
    {
      number: '24/7',
      label: 'Emergency Response',
      icon: PhoneIcon,
      color: 'text-blue-700'
    }
  ];

  return (
    <section className="py-10 lg:py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-5 lg:px-6">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">
            Why Choose ProServices?
          </h2>
          <p className="text-base text-slate-600 max-w-3xl mx-auto leading-normal">
            We're committed to providing exceptional service quality, reliability, and customer satisfaction. 
            Here's what sets us apart from the competition.
          </p>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
          {stats.map((stat, index) => (
            <div key={index} className="bg-white rounded-xl p-4 text-center shadow-md hover:shadow-lg transition-shadow duration-300">
              <div className="mb-3">
                <stat.icon className={`h-6 w-6 ${stat.color} mx-auto`} />
              </div>
              <div className="text-2xl font-bold text-gray-900 mb-1.5">{stat.number}</div>
              <div className="text-sm text-slate-600 font-medium">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Column - Reasons Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {reasons.map((reason) => (
              <div
                key={reason.id}
                className="bg-white rounded-lg p-4 shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-0.5 group"
              >
                <div className="mb-3">
                  <div className={`w-10 h-10 ${reason.iconBg} rounded-lg flex items-center justify-center group-hover:scale-105 transition-transform duration-300`}>
                    <reason.icon className={`h-5 w-5 ${reason.iconColor}`} />
                  </div>
                </div>
                <h3 className="text-base font-bold text-gray-900 mb-2">
                  {reason.title}
                </h3>
                <p className="text-sm text-slate-600 leading-normal">
                  {reason.description}
                </p>
              </div>
            ))}
          </div>

          {/* Right Column - Featured Content */}
          <div className="bg-white rounded-xl p-6 shadow-lg">
            <div className="mb-5">
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Our Commitment to Excellence
              </h3>
              <p className="text-sm text-slate-600 leading-normal mb-5">
                With over 15 years of experience serving the community, we've built our reputation 
                on quality workmanship, honest pricing, and exceptional customer service.
              </p>
            </div>

            {/* Key Features List */}
            <div className="space-y-3 mb-6">
              <div className="flex items-start space-x-2.5">
                <CheckBadgeIcon className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                <div>
                  <div className="font-semibold text-gray-900 text-sm">Quality Workmanship</div>
                  <div className="text-slate-600 text-xs">Every job completed to the highest standards</div>
                </div>
              </div>
              <div className="flex items-start space-x-2.5">
                <CheckBadgeIcon className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                <div>
                  <div className="font-semibold text-gray-900 text-sm">Fast Response Time</div>
                  <div className="text-slate-600 text-xs">Quick scheduling and emergency response</div>
                </div>
              </div>
              <div className="flex items-start space-x-2.5">
                <CheckBadgeIcon className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                <div>
                  <div className="font-semibold text-gray-900 text-sm">Fair & Competitive Pricing</div>
                  <div className="text-slate-600 text-xs">No surprises, just honest and upfront costs</div>
                </div>
              </div>
              <div className="flex items-start space-x-2.5">
                <CheckBadgeIcon className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                <div>
                  <div className="font-semibold text-gray-900 text-sm">Ongoing Support</div>
                  <div className="text-slate-600 text-xs">Follow-up service and maintenance support</div>
                </div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="space-y-3">
              <button className="w-full bg-blue-700 text-white py-2.5 px-5 rounded-md font-semibold hover:bg-blue-800 transition-colors duration-300 text-sm">
                Schedule Your Service Today
              </button>
              <div className="flex items-center justify-center space-x-1.5 text-slate-600 text-sm">
                <PhoneIcon className="h-4 w-4" />
                <span className="font-medium">Call us: (555) 123-4567</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Testimonial/Trust Section */}
        <div className="mt-12 bg-white rounded-xl p-6 shadow-md">
          <div className="text-center">
            <div className="flex justify-center mb-3">
              {[...Array(5)].map((_, i) => (
                <StarIcon key={i} className="h-5 w-5 text-yellow-400 fill-current" />
              ))}
            </div>
            <blockquote className="text-base text-slate-700 font-medium mb-3 italic">
              "Outstanding service! Professional, reliable, and reasonably priced. 
              They've been our go-to for all electrical and plumbing needs for years."
            </blockquote>
            <cite className="text-slate-600 font-semibold text-sm">- Sarah Johnson, Homeowner</cite>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
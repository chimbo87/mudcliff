import React, { useState, useEffect, useRef } from 'react';
import { 
  TrophyIcon,
  UserGroupIcon,
  WrenchScrewdriverIcon,
  PhoneIcon,
  ClockIcon,
  StarIcon,
  ShieldCheckIcon,
  BoltIcon,
  HomeIcon,
  BuildingOfficeIcon,
  CheckCircleIcon,
  MapPinIcon
} from '@heroicons/react/24/outline';

const StatisticsSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [counters, setCounters] = useState({});
  const sectionRef = useRef(null);

  const mainStats = [
    {
      id: 'years',
      number: 15,
      suffix: '+',
      label: 'Years in Business',
      icon: TrophyIcon,
      color: 'blue',
      bgGradient: 'from-blue-500 to-blue-600',
      iconBg: 'bg-blue-100',
      iconColor: 'text-blue-700'
    },
    {
      id: 'customers',
      number: 2500,
      suffix: '+',
      label: 'Happy Customers',
      icon: UserGroupIcon,
      color: 'orange',
      bgGradient: 'from-orange-500 to-orange-600',
      iconBg: 'bg-orange-100',
      iconColor: 'text-orange-600'
    },
    {
      id: 'projects',
      number: 5000,
      suffix: '+',
      label: 'Projects Completed',
      icon: WrenchScrewdriverIcon,
      color: 'green',
      bgGradient: 'from-green-500 to-green-600',
      iconBg: 'bg-green-100',
      iconColor: 'text-green-600'
    },
    {
      id: 'response',
      number: 24,
      suffix: '/7',
      label: 'Emergency Response',
      icon: PhoneIcon,
      color: 'blue',
      bgGradient: 'from-blue-500 to-blue-600',
      iconBg: 'bg-blue-100',
      iconColor: 'text-blue-700'
    }
  ];

  const additionalStats = [
    {
      icon: ClockIcon,
      value: '< 2 Hours',
      label: 'Average Response Time',
      color: 'text-orange-600'
    },
    {
      icon: StarIcon,
      value: '4.9/5',
      label: 'Customer Rating',
      color: 'text-yellow-500'
    },
    {
      icon: ShieldCheckIcon,
      value: '100%',
      label: 'Licensed & Insured',
      color: 'text-green-600'
    },
    {
      icon: BoltIcon,
      value: '98%',
      label: 'First-Time Fix Rate',
      color: 'text-blue-700'
    }
  ];

  const serviceBreakdown = [
    {
      icon: BoltIcon,
      service: 'Electrical',
      percentage: 40,
      projects: '2,000+',
      color: 'blue',
      bgColor: 'bg-blue-500'
    },
    {
      icon: WrenchScrewdriverIcon,
      service: 'Plumbing',
      percentage: 35,
      projects: '1,750+',
      color: 'orange',
      bgColor: 'bg-orange-500'
    },
    {
      icon: HomeIcon,
      service: 'Residential',
      percentage: 70,
      projects: '3,500+',
      color: 'green',
      bgColor: 'bg-green-500'
    },
    {
      icon: BuildingOfficeIcon,
      service: 'Commercial',
      percentage: 30,
      projects: '1,500+',
      color: 'slate',
      bgColor: 'bg-slate-500'
    }
  ];

  // Intersection Observer for animation trigger
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // Counter animation effect
  useEffect(() => {
    if (!isVisible) return;

    const animateCounters = () => {
      const duration = 2000; // 2 seconds
      const steps = 60; // 60 steps for smooth animation
      const stepDuration = duration / steps;

      mainStats.forEach(stat => {
        let currentCount = 0;
        const increment = stat.number / steps;
        
        const timer = setInterval(() => {
          currentCount += increment;
          
          if (currentCount >= stat.number) {
            currentCount = stat.number;
            clearInterval(timer);
          }
          
          setCounters(prev => ({
            ...prev,
            [stat.id]: Math.floor(currentCount)
          }));
        }, stepDuration);
      });
    };

    const timeout = setTimeout(animateCounters, 200);
    return () => clearTimeout(timeout);
  }, [isVisible]);

  return (
    <section 
      ref={sectionRef} 
      className="relative py-10 lg:py-16"
    >
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1581578731548-c64695cc6952?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')"
          }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/80 to-slate-900/80"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-5 lg:px-6">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3">
            Our Track Record Speaks
          </h2>
          <p className="text-base text-blue-100 max-w-3xl mx-auto leading-normal">
            Numbers that showcase our commitment to quality service, customer satisfaction, 
            and professional excellence across all our service areas.
          </p>
        </div>

        {/* Main Statistics */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
          {mainStats.map((stat) => (
            <div
              key={stat.id}
              className="bg-white/90 backdrop-blur-sm rounded-xl p-5 text-center shadow-md hover:shadow-lg transition-all duration-500 hover:-translate-y-1 group"
            >
              <div className={`w-12 h-12 ${stat.iconBg} rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-105 transition-transform duration-300`}>
                <stat.icon className={`h-6 w-6 ${stat.iconColor}`} />
              </div>
              
              <div className="text-2xl lg:text-3xl font-bold text-gray-900 mb-1.5">
                {isVisible ? counters[stat.id] || 0 : 0}{stat.suffix}
              </div>
              
              <div className="text-sm text-slate-600 font-semibold">
                {stat.label}
              </div>
              
              {/* Progress bar animation */}
              <div className="mt-3 h-1 bg-gray-200 rounded-full overflow-hidden">
                <div 
                  className={`h-full bg-gradient-to-r ${stat.bgGradient} transition-all duration-2000 ease-out ${
                    isVisible ? 'w-full' : 'w-0'
                  }`}
                ></div>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
          {additionalStats.map((stat, index) => (
            <div
              key={index}
              className="bg-white/90 backdrop-blur-sm rounded-lg p-4 text-center shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              <stat.icon className={`h-6 w-6 ${stat.color} mx-auto mb-2`} />
              <div className="text-xl font-bold text-gray-900 mb-1">{stat.value}</div>
              <div className="text-xs text-slate-600 font-medium">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Service Breakdown */}
        <div className="bg-white/90 backdrop-blur-sm rounded-xl p-6 shadow-lg mb-12">
          <h3 className="text-xl font-bold text-gray-900 mb-6 text-center">
            Service Distribution
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {serviceBreakdown.map((item, index) => (
              <div key={index} className="space-y-2.5">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2.5">
                    <item.icon className={`h-5 w-5 text-${item.color}-600`} />
                    <span className="font-semibold text-gray-900 text-sm">{item.service}</span>
                  </div>
                  <div className="text-right">
                    <div className="font-bold text-gray-900 text-sm">{item.percentage}%</div>
                    <div className="text-xs text-slate-600">{item.projects}</div>
                  </div>
                </div>
                
                <div className="w-full bg-gray-200 rounded-full h-2 overflow-hidden">
                  <div
                    className={`h-full ${item.bgColor} transition-all duration-1000 ease-out ${
                      isVisible ? `w-[${item.percentage}%]` : 'w-0'
                    }`}
                    style={{ width: isVisible ? `${item.percentage}%` : '0%' }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Achievements Banner */}
        <div className="bg-gradient-to-r from-blue-700/95 to-blue-800/95 backdrop-blur-sm rounded-xl p-6 text-center text-white">
          <h3 className="text-xl font-bold mb-4">Why These Numbers Matter</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="flex items-center space-x-2.5">
              <CheckCircleIcon className="h-6 w-6 text-blue-200 flex-shrink-0" />
              <div className="text-left">
                <div className="font-semibold text-sm">Proven Experience</div>
                <div className="text-blue-100 text-xs">15+ years of reliable service</div>
              </div>
            </div>
            
            <div className="flex items-center space-x-2.5">
              <StarIcon className="h-6 w-6 text-yellow-400 flex-shrink-0" />
              <div className="text-left">
                <div className="font-semibold text-sm">Customer Trust</div>
                <div className="text-blue-100 text-xs">2,500+ satisfied customers</div>
              </div>
            </div>
            
            <div className="flex items-center space-x-2.5">
              <MapPinIcon className="h-6 w-6 text-green-400 flex-shrink-0" />
              <div className="text-left">
                <div className="font-semibold text-sm">Local Leader</div>
                <div className="text-blue-100 text-xs">Serving the community since 2009</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatisticsSection;
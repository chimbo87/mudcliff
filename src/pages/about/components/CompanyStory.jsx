import React from 'react';
import { 
  LightBulbIcon, 
  WrenchScrewdriverIcon, 
  SunIcon, 
  HeartIcon, 
  UserGroupIcon,
  ClockIcon
} from '@heroicons/react/24/outline';

const CompanyStory = () => {
  // Company milestones data
  const milestones = [
    {
      year: '2010',
      title: 'Company Founded',
      description: 'Started as a small family business with focus on quality electrical work.',
      icon: <LightBulbIcon className="h-6 w-6" />
    },
    {
      year: '2013',
      title: 'Expanded to Plumbing',
      description: 'Added plumbing services to become a more complete home solutions provider.',
      icon: <WrenchScrewdriverIcon className="h-6 w-6" />
    },
    {
      year: '2016',
      title: 'Went Green',
      description: 'Began offering solar installation services to promote sustainable energy.',
      icon: <SunIcon className="h-6 w-6" />
    },
    {
      year: '2020',
      title: '500+ Projects',
      description: 'Successfully completed over 500 projects with 98% customer satisfaction.',
      icon: <HeartIcon className="h-6 w-6" />
    },
    {
      year: '2023',
      title: '25 Team Members',
      description: 'Grew to a team of 25 highly skilled technicians and support staff.',
      icon: <UserGroupIcon className="h-6 w-6" />
    }
  ];

  return (
    <section className="py-12 px-4 bg-[#F8FAFC]">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-[#1E40AF] mb-4">Our Story</h2>
          <div className="w-20 h-1 bg-[#EA580C] mx-auto mb-6"></div>
          <p className="text-lg text-[#64748B] max-w-3xl mx-auto">
            From humble beginnings to becoming a trusted name in home services, our journey has been guided by 
            our commitment to quality, reliability, and customer satisfaction.
          </p>
        </div>

        {/* Main Content */}
        <div className="flex flex-col lg:flex-row gap-12">
          {/* Text Content */}
          <div className="lg:w-1/2">
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h3 className="text-2xl font-semibold text-[#1E40AF] mb-6">Building Trust Since 2010</h3>
              
              <p className="text-[#64748B] mb-4">
                Founded in 2010, our company began with a simple mission: to provide exceptional electrical services 
                that homeowners could trust. What started as a one-person operation has grown into a comprehensive 
                home services company serving thousands of satisfied customers.
              </p>
              
              <p className="text-[#64748B] mb-4">
                In 2013, we expanded our expertise to include plumbing services, recognizing that our customers 
                needed a reliable provider for all their home maintenance needs. Our team of skilled professionals 
                shares a commitment to quality workmanship and outstanding customer service.
              </p>
              
              <p className="text-[#64748B] mb-6">
                Our most significant evolution came in 2016 when we embraced sustainable energy solutions by 
                adding solar installation to our services. This allowed us to not only serve our customers but 
                also contribute to a greener future for our community.
              </p>
              
              <div className="flex items-center mt-8 p-4 bg-[#1E40AF] bg-opacity-5 rounded-xl border-l-4 border-[#10B981]">
                <div className="mr-4 text-[#10B981]">
                  <HeartIcon className="h-8 w-8" />
                </div>
                <p className="text-[#64748B]">
                  Today, we're proud to have completed over 500 projects with a 98% customer satisfaction rate, 
                  and we continue to grow while staying true to our core values of quality, reliability, and 
                  environmental responsibility.
                </p>
              </div>
            </div>
          </div>

          {/* Milestones Timeline */}
          <div className="lg:w-1/2">
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h3 className="text-2xl font-semibold text-[#1E40AF] mb-8 text-center">Our Journey</h3>
              
              <div className="relative">
                {/* Timeline line */}
                <div className="absolute left-5 top-0 h-full w-0.5 bg-[#EA580C] bg-opacity-30"></div>
                
                {/* Milestones */}
                <ul className="space-y-10">
                  {milestones.map((milestone, index) => (
                    <li key={index} className="relative pl-16">
                      <div className="absolute left-0 flex items-center justify-center w-10 h-10 rounded-full bg-[#1E40AF] text-white">
                        {milestone.icon}
                      </div>
                      
                      <div className="flex flex-col sm:flex-row sm:items-center mb-2">
                        <span className="text-lg font-bold text-[#EA580C] mr-4">{milestone.year}</span>
                        <h4 className="text-xl font-semibold text-[#1E40AF]">{milestone.title}</h4>
                      </div>
                      
                      <p className="text-[#64748B]">{milestone.description}</p>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="mt-16 bg-[#1E40AF] rounded-2xl shadow-lg p-8 text-white">
          <h3 className="text-2xl font-semibold text-center mb-10">By The Numbers</h3>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">13+</div>
              <p className="text-[#F8FAFC]">Years Experience</p>
            </div>
            
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">500+</div>
              <p className="text-[#F8FAFC]">Projects Completed</p>
            </div>
            
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">25+</div>
              <p className="text-[#F8FAFC]">Skilled Team Members</p>
            </div>
            
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">98%</div>
              <p className="text-[#F8FAFC]">Customer Satisfaction</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CompanyStory;
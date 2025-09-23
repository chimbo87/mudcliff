import React, { useState } from 'react';
import { 
  EnvelopeIcon,
  PhoneIcon,
  MapPinIcon,
  AcademicCapIcon,
  StarIcon,
  BoltIcon,
  WrenchScrewdriverIcon,
  SunIcon,
  UserGroupIcon
} from '@heroicons/react/24/outline';

const TeamMembers = () => {
  const [hoveredMember, setHoveredMember] = useState(null);

  const teamMembers = [
    {
      id: 1,
      name: "T Nyapwere",
      position: "Founder & CEO",
      department: "Leadership",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80",
      email: "john@company.com",
      phone: "+1 (555) 123-4567",
      experience: "15+ Years",
      specialties: ["Business Strategy", "Solar Technology", "Team Leadership"],
      bio: "Visionary leader with extensive experience in renewable energy and infrastructure development.",
      icon: UserGroupIcon,
      color: "blue"
    },
    {
      id: 2,
      name: "T Nyapwere",
      position: "Lead Electrician",
      department: "Electrical",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b550?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80",
      email: "sarah@company.com",
      phone: "+1 (555) 123-4568",
      experience: "12+ Years",
      specialties: ["Commercial Electrical", "Smart Home Systems", "Safety Inspections"],
      bio: "Master electrician specializing in complex commercial installations and smart home automation.",
      icon: BoltIcon,
      color: "orange"
    },
    {
      id: 3,
      name: "T Nyapwere",
      position: "Solar Systems Engineer",
      department: "Solar",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80",
      email: "michael@company.com",
      phone: "+1 (555) 123-4569",
      experience: "10+ Years",
      specialties: ["Solar Design", "Energy Storage", "Grid Integration"],
      bio: "Renewable energy expert focused on designing efficient and sustainable solar solutions.",
      icon: SunIcon,
      color: "green"
    },
    {
      id: 4,
      name: "T Nyapwere",
      position: "Master Plumber",
      department: "Plumbing",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80",
      email: "lisa@company.com",
      phone: "+1 (555) 123-4570",
      experience: "14+ Years",
      specialties: ["Water Systems", "Eco-Friendly Solutions", "Emergency Repairs"],
      bio: "Expert plumber with a focus on sustainable water management and emergency response.",
      icon: WrenchScrewdriverIcon,
      color: "blue"
    },
    {
      id: 5,
      name: "T Nyapwere",
      position: "Project Manager",
      department: "Operations",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80",
      email: "david@company.com",
      phone: "+1 (555) 123-4571",
      experience: "8+ Years",
      specialties: ["Project Coordination", "Quality Control", "Client Relations"],
      bio: "Detail-oriented project manager ensuring seamless execution of complex installations.",
      icon: AcademicCapIcon,
      color: "orange"
    },
    {
      id: 6,
      name: "T Nyapwere",
      position: "Customer Success Manager",
      department: "Customer Service",
      image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80",
      email: "emma@company.com",
      phone: "+1 (555) 123-4572",
      experience: "6+ Years",
      specialties: ["Client Support", "Process Improvement", "Training"],
      bio: "Dedicated to ensuring exceptional customer experiences and continuous service improvement.",
      icon: UserGroupIcon,
      color: "green"
    }
  ];

  const getColorClasses = (color) => {
    switch (color) {
      case 'blue': return { bg: 'bg-blue-500', text: 'text-blue-600', border: 'border-blue-200', light: 'bg-blue-50' };
      case 'green': return { bg: 'bg-green-500', text: 'text-green-600', border: 'border-green-200', light: 'bg-green-50' };
      case 'orange': return { bg: 'bg-orange-500', text: 'text-orange-600', border: 'border-orange-200', light: 'bg-orange-50' };
      default: return { bg: 'bg-slate-500', text: 'text-slate-600', border: 'border-slate-200', light: 'bg-slate-50' };
    }
  };

  return (
    <div className="py-12 px-4 bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <span className="inline-block px-3 py-1 bg-orange-500 text-white text-xs font-semibold rounded-full mb-3">
            Our Team
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">
            Meet Our Experts
          </h2>
          <p className="text-base text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Dedicated professionals with decades of combined experience, committed to delivering 
            exceptional service and innovative solutions.
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {teamMembers.map((member) => {
            const colors = getColorClasses(member.color);
            return (
              <div
                key={member.id}
                className="group relative bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-lg transition-all duration-500 transform hover:-translate-y-1"
                onMouseEnter={() => setHoveredMember(member.id)}
                onMouseLeave={() => setHoveredMember(null)}
              >
                {/* Background Gradient */}
                <div className={`absolute inset-0 ${colors.light} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>
                
                {/* Card Content */}
                <div className="relative p-6">
                  {/* Profile Image */}
                  <div className="relative mb-4">
                    <div className="w-28 h-28 mx-auto rounded-xl overflow-hidden ring-2 ring-white shadow-md">
                      <img 
                        src={member.image} 
                        alt={member.name}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                    </div>
                    {/* Icon Badge */}
                    <div className={`absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-10 h-10 ${colors.bg} rounded-lg flex items-center justify-center shadow-md`}>
                      <member.icon className="w-5 h-5 text-white" />
                    </div>
                  </div>

                  {/* Member Info */}
                  <div className="text-center mb-4">
                    <h3 className="text-xl font-bold text-slate-800 mb-1">{member.name}</h3>
                    <p className={`text-base font-semibold ${colors.text} mb-1`}>{member.position}</p>
                    <p className="text-slate-500 text-xs">{member.department}</p>
                    
                    {/* Experience Badge */}
                    <div className="inline-flex items-center px-2 py-1 bg-slate-100 rounded-full text-xs text-slate-600 mt-2">
                      <StarIcon className="w-3 h-3 mr-1" />
                      {member.experience}
                    </div>
                  </div>

                  {/* Specialties */}
                  <div className="mb-4">
                    <div className="flex flex-wrap gap-1 justify-center">
                      {member.specialties.slice(0, 2).map((specialty, index) => (
                        <span key={index} className={`px-2 py-1 ${colors.light} ${colors.text} text-xs rounded-full font-medium`}>
                          {specialty}
                        </span>
                      ))}
                      {member.specialties.length > 2 && (
                        <span className="px-2 py-1 bg-slate-100 text-slate-600 text-xs rounded-full font-medium">
                          +{member.specialties.length - 2} more
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Bio */}
                  <p className="text-slate-600 text-sm text-center mb-4 leading-relaxed">
                    {member.bio}
                  </p>

                  {/* Contact Info - Always Visible */}
                  <div className="space-y-1">
                    <div className="flex items-center justify-center text-slate-500 text-xs">
                      <EnvelopeIcon className="w-3 h-3 mr-1" />
                      <span>{member.email}</span>
                    </div>
                    <div className="flex items-center justify-center text-slate-500 text-xs">
                      <PhoneIcon className="w-3 h-3 mr-1" />
                      <span>{member.phone}</span>
                    </div>
                  </div>
                </div>

                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
              </div>
            );
          })}
        </div>

        {/* Team Stats */}
        <div className="bg-white rounded-2xl p-6 md:p-8 shadow-md">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-slate-800 mb-3">Our Team in Numbers</h3>
            <p className="text-base text-slate-600">The expertise and dedication that drives our success</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
  <div className="text-center">
    <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center mx-auto mb-3">
      <UserGroupIcon className="w-8 h-8 text-white" />
    </div>
    <div className="text-3xl font-bold text-slate-800 mb-1">50+</div>
    <div className="text-sm text-slate-600">Team Members</div>
  </div>

  <div className="text-center">
    <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-xl flex items-center justify-center mx-auto mb-3">
      <AcademicCapIcon className="w-8 h-8 text-white" />
    </div>
    <div className="text-3xl font-bold text-slate-800 mb-1">200+</div>
    <div className="text-sm text-slate-600">Certifications</div>
  </div>

  <div className="text-center">
    <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl flex items-center justify-center mx-auto mb-3">
      <StarIcon className="w-8 h-8 text-white" />
    </div>
    <div className="text-3xl font-bold text-slate-800 mb-1">150+</div>
    <div className="text-sm text-slate-600">Years Combined Experience</div>
  </div>

  <div className="text-center">
    <div className="w-16 h-16 bg-gradient-to-br from-slate-500 to-slate-600 rounded-xl flex items-center justify-center mx-auto mb-3">
      <MapPinIcon className="w-8 h-8 text-white" />
    </div>
    <div className="text-3xl font-bold text-slate-800 mb-1">24/7</div>
    <div className="text-sm text-slate-600">Emergency Support</div>
  </div>
</div>
        </div>

        {/* Join Our Team CTA */}
        <div className="mt-12 text-center">
          <div className="bg-gradient-to-r from-blue-600 to-green-600 rounded-2xl p-6 md:p-8 text-white">
            <h3 className="text-2xl font-bold mb-3">Ready to Join Our Team?</h3>
            <p className="text-base mb-6 opacity-90 max-w-2xl mx-auto">
              We're always looking for talented professionals who share our passion for excellence 
              and sustainable solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <button className="px-6 py-3 bg-white text-blue-600 text-sm font-semibold rounded-lg hover:bg-gray-100 transition-colors duration-300">
                View Open Positions
              </button>
              <button className="px-6 py-3 border border-white text-white text-sm font-semibold rounded-lg hover:bg-white hover:text-blue-600 transition-all duration-300">
                Submit Resume
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamMembers;
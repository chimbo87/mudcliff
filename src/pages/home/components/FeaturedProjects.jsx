import React, { useState } from 'react';
import { 
  BoltIcon,
  WrenchScrewdriverIcon,
  SunIcon,
  EyeIcon,
  MapPinIcon,
  CalendarDaysIcon,
  ArrowRightIcon,
  StarIcon,
  CheckCircleIcon
} from '@heroicons/react/24/outline';
import { useNavigate } from "react-router-dom";  

// Import your images - make sure these paths are correct
import project01 from '../../../assets/images/mud02.jpg';
import project02 from '../../../assets/images/mud27.jpg';
import project03 from '../../../assets/images/mud07.jpg';
import project04 from '../../../assets/images/mud10.jpg';
import project05 from '../../../assets/images/mud29.jpg';
import project06 from '../../../assets/images/mud22.jpg';

const FeaturedProjects = () => {
  const navigate = useNavigate();
  const [activeFilter, setActiveFilter] = useState('all');

  const filters = [
    { id: 'all', name: 'All Projects', count: 12 },
    { id: 'electrical', name: 'Electrical', count: 5 },
    { id: 'plumbing', name: 'Plumbing', count: 4 },
    { id: 'solar', name: 'Solar', count: 3 }
  ];

  const projects = [
    {
      id: 1,
      title: 'Modern Office Electrical Upgrade',
      category: 'electrical',
      location: 'Downtown Business District',
      date: '2024',
      description: 'Complete electrical system modernization for a 10,000 sq ft office building including LED lighting and smart controls.',
      image: project01, // Fixed: using correct variable
      icon: BoltIcon,
      color: 'blue',
      bgColor: 'from-blue-500 to-blue-600',
      iconBg: 'bg-blue-100',
      iconColor: 'text-blue-700',
      features: ['LED Lighting System', 'Smart Controls', 'Panel Upgrade', '100% Code Compliant']
    },
    {
      id: 2,
      title: 'Luxury Home Plumbing Renovation',
      category: 'plumbing',
      location: 'Residential Hills',
      date: '2024',
      description: 'Full plumbing renovation including master bathroom suite, kitchen upgrade, and whole-house repiping.',
      image: project02, // Fixed: using correct variable
      icon: WrenchScrewdriverIcon,
      color: 'orange',
      bgColor: 'from-orange-500 to-orange-600',
      iconBg: 'bg-orange-100',
      iconColor: 'text-orange-600',
      features: ['Master Bath Suite', 'Kitchen Upgrade', 'Whole House Repipe', 'Premium Fixtures']
    },
    {
      id: 3,
      title: 'Residential Solar Installation',
      category: 'solar',
      location: 'Suburbia Heights',
      date: '2024',
      description: '25kW solar panel system installation with battery storage for energy independence.',
      image: project03, // Fixed: was project02, now project03
      icon: SunIcon,
      color: 'green',
      bgColor: 'from-green-500 to-green-600',
      iconBg: 'bg-green-100',
      iconColor: 'text-green-600',
      features: ['25kW Solar Array', 'Battery Storage', 'Smart Monitoring', '25-Year Warranty']
    },
    {
      id: 4,
      title: 'Restaurant Kitchen Electrical',
      category: 'electrical',
      location: 'Commercial District',
      date: '2023',
      description: 'Commercial kitchen electrical installation with high-capacity circuits and safety systems.',
      image: project04, // Fixed: was project03, now project04
      icon: BoltIcon,
      color: 'blue',
      bgColor: 'from-blue-500 to-blue-600',
      iconBg: 'bg-blue-100',
      iconColor: 'text-blue-700',
      features: ['High-Capacity Circuits', 'Safety Systems', 'Emergency Lighting', 'Code Compliance']
    },
    {
      id: 5,
      title: 'Multi-Unit Plumbing Project',
      category: 'plumbing',
      location: 'Apartment Complex',
      date: '2023',
      description: 'Complete plumbing system installation for 24-unit apartment complex with modern fixtures.',
      image: project05, // Fixed: was project04, now project05
      icon: WrenchScrewdriverIcon,
      color: 'orange',
      bgColor: 'from-orange-500 to-orange-600',
      iconBg: 'bg-orange-100',
      iconColor: 'text-orange-600',
      features: ['24 Units Complete', 'Modern Fixtures', 'Water Efficient', 'Maintenance Plan']
    },
    {
      id: 6,
      title: 'Commercial Solar Farm',
      category: 'solar',
      location: 'Industrial Park',
      date: '2023',
      description: '500kW commercial solar installation powering manufacturing facility with grid-tie system.',
      image: project06, // Fixed: was project05, now project06
      icon: SunIcon,
      color: 'green',
      bgColor: 'from-green-500 to-green-600',
      iconBg: 'bg-green-100',
      iconColor: 'text-green-600',
      features: ['500kW Installation', 'Grid-Tie System', 'Manufacturing Power', 'ROI in 4 Years']
    }
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  // Debug: Check if images are loading
  console.log('Project images:', projects.map(p => ({ id: p.id, image: p.image })));

  return (
    <section className="py-10 lg:py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-5 lg:px-6">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">
            Featured Projects
          </h2>
          <p className="text-base text-slate-600 max-w-3xl mx-auto leading-normal">
            Explore our recent work and see the quality craftsmanship we deliver 
            across electrical, plumbing, and solar installations.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {filters.map((filter) => (
            <button
              key={filter.id}
              onClick={() => setActiveFilter(filter.id)}
              className={`px-5 py-2 rounded-full font-semibold transition-all duration-300 text-sm ${
                activeFilter === filter.id
                  ? 'bg-blue-700 text-white shadow-md'
                  : 'bg-gray-100 text-slate-600 hover:bg-gray-200'
              }`}
            >
              {filter.name}
              <span className="ml-1.5 text-xs opacity-75">({filter.count})</span>
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="group bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-500 overflow-hidden hover:-translate-y-1"
            >
              {/* Project Image - Fixed with better styling */}
              <div className="relative h-56 overflow-hidden bg-gray-200">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  onError={(e) => {
                    console.error(`Error loading image for project ${project.id}:`, project.image);
                    e.target.style.display = 'none';
                  }}
                />
                
                {/* Hover Overlay - Fixed opacity issues */}
                <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-30 transition-opacity duration-300 flex items-center justify-center">
                  <button className="bg-white text-gray-900 px-3 py-1.5 rounded-md font-semibold opacity-0 group-hover:opacity-100 transform translate-y-3 group-hover:translate-y-0 transition-all duration-300 flex items-center space-x-1.5 text-sm">
                    <EyeIcon className="h-3.5 w-3.5" />
                    <span>View Details</span>
                  </button>
                </div>

                {/* Service Category Badge */}
                <div className="absolute top-3 right-3">
                  <div className={`${project.iconBg} rounded-full p-1.5`}>
                    <project.icon className={`h-4 w-4 ${project.iconColor}`} />
                  </div>
                </div>
              </div>

              {/* Project Content */}
              <div className="p-5">
                <div className="flex items-center space-x-3 text-xs text-slate-500 mb-2">
                  <div className="flex items-center space-x-1">
                    <MapPinIcon className="h-3.5 w-3.5" />
                    <span>{project.location}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <CalendarDaysIcon className="h-3.5 w-3.5" />
                    <span>{project.date}</span>
                  </div>
                </div>

                <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-blue-700 transition-colors duration-300">
                  {project.title}
                </h3>

                <p className="text-slate-600 mb-3 leading-normal text-sm">
                  {project.description}
                </p>

                {/* Project Features */}
                <div className="space-y-1.5 mb-4">
                  {project.features.slice(0, 2).map((feature, index) => (
                    <div key={index} className="flex items-center space-x-1.5">
                      <CheckCircleIcon className={`h-3.5 w-3.5 ${project.iconColor} flex-shrink-0`} />
                      <span className="text-xs text-slate-600">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* View Project Button */}
                <button className="w-full bg-gray-50 text-slate-700 py-2 px-3 rounded-md font-semibold hover:bg-gray-100 transition-colors duration-300 flex items-center justify-center space-x-1.5 group-hover:bg-blue-50 group-hover:text-blue-700 text-sm" onClick={() => navigate("/our-work")}>
                  <span>View Full Project</span>
                  <ArrowRightIcon className="h-3.5 w-3.5 group-hover:translate-x-0.5 transition-transform duration-300" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA Section */}
        <div className="bg-gradient-to-r from-blue-700 to-blue-800 rounded-xl p-6 text-center text-white">
          <h3 className="text-xl font-bold mb-3">
            Ready to Start Your Next Project?
          </h3>
          <p className="text-blue-100 mb-4 max-w-2xl mx-auto text-sm">
            Join hundreds of satisfied customers who have trusted us with their 
            electrical, plumbing, and solar installation needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <button className="bg-white text-blue-700 px-6 py-2 rounded-md font-semibold hover:bg-gray-100 transition-colors duration-300 text-sm" onClick={() => navigate("/contacts#contact-form")}>
              Get Free Estimate
            </button>
            <button className="bg-blue-600 text-white px-6 py-2 rounded-md font-semibold hover:bg-blue-500 transition-colors duration-300 border border-blue-500 text-sm" onClick={() => navigate("/our-work")}>
              View All Projects
            </button>
          </div>

          {/* Trust Indicators */}
          <div className="flex justify-center items-center space-x-5 mt-6 text-blue-100 text-xs">
            <div className="flex items-center space-x-1">
              <StarIcon className="h-4 w-4 text-yellow-400 fill-current" />
              <span>5-Star Rated</span>
            </div>
            <div className="flex items-center space-x-1">
              <CheckCircleIcon className="h-4 w-4" />
              <span>Licensed & Insured</span>
            </div>
            <div className="flex items-center space-x-1">
              <CheckCircleIcon className="h-4 w-4" />
              <span>Satisfaction Guaranteed</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProjects;
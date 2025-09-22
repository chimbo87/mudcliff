import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { projectsData, categories } from './ProjectsData';

const OurWorkGrid = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [isLoading, setIsLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const navigate = useNavigate();

  const projectsPerPage = 12;

  // Filter projects and reverse the order (newest first)
  const filteredProjects = activeCategory === 'all' 
    ? [...projectsData].reverse()
    : [...projectsData].filter(project => project.category === activeCategory).reverse();

  // Calculate pagination
  const indexOfLastProject = currentPage * projectsPerPage;
  const indexOfFirstProject = indexOfLastProject - projectsPerPage;
  const currentProjects = filteredProjects.slice(indexOfFirstProject, indexOfLastProject);
  const totalPages = Math.ceil(filteredProjects.length / projectsPerPage);

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  // Go to next page
  const nextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  // Go to previous page
  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  // Reset to first page when category changes
  React.useEffect(() => {
    setCurrentPage(1);
  }, [activeCategory]);

  // Helper function to truncate description to 10 words
  const truncateDescription = (text, maxWords = 10) => {
    const words = text.split(' ');
    return words.length > maxWords 
      ? words.slice(0, maxWords).join(' ') + '...'
      : text;
  };

  // Handle project click - navigate to project details
  const handleProjectClick = (projectId) => {
    setIsLoading(true);
    
    // Show loading spinner for 1 second before navigating
    setTimeout(() => {
      navigate(`/project-details/${projectId}`);
      setIsLoading(false);
    }, 500);
  };

  return (
    <section className="py-12 bg-gradient-to-b from-white to-[#f0f8ff]">
      <div className="max-w-7xl mx-auto px-4">
        {/* Loading Overlay */}
        {isLoading && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white p-6 rounded-lg shadow-lg flex flex-col items-center">
              <div className="animate-spin rounded-full h-10 w-10 border-b-2 border-[#0066cc] mb-3"></div>
              <p className="text-[#1e3a5f] text-sm">Loading installation details...</p>
            </div>
          </div>
        )}
        
        {/* Section Header */}
        <div className="text-center mb-8">
          <h2 className="text-2xl md:text-3xl font-bold text-[#1e3a5f] mb-2">
            Our <span className="text-[#0066cc]">Installation</span> Portfolio
          </h2>
          <p className="text-sm md:text-base text-[#6b7280] max-w-xl mx-auto">
            Explore our professional electrical, plumbing, and solar installation projects and maintenance services
          </p>
        </div>

        {/* Service Filter Buttons */}
        <div className="mb-6">
          <div className="flex overflow-x-auto pb-2 scrollbar-hide gap-2" style={{scrollbarWidth: 'none', msOverflowStyle: 'none'}}>
            <style jsx>{`
              .scrollbar-hide::-webkit-scrollbar {
                display: none;
              }
            `}</style>
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`flex-shrink-0 flex items-center space-x-1 px-3 py-1.5 rounded-full text-sm font-semibold transition-all duration-300 whitespace-nowrap ${
                  activeCategory === category.id
                    ? 'bg-[#0066cc] text-white shadow transform scale-105'
                    : 'bg-white text-[#1e3a5f] border border-[#1e3a5f] border-opacity-20 hover:border-[#0066cc] hover:text-[#0066cc]'
                }`}
              >
                <span>{category.icon}</span>
                <span>{category.name}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Installations Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-4">
          {currentProjects.map((project) => (
            <div
              key={project.id}
              className="group bg-white rounded-xl overflow-hidden shadow hover:shadow-lg transform border border-gray-100 cursor-pointer transition-all duration-300 hover:-translate-y-1"
              onClick={() => handleProjectClick(project.id)}
            >
              {/* Installation Image */}
              <div className="relative overflow-hidden h-40">
                <img
                  src={project.images[0]}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                {/* Overlay Button */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <button className="bg-[#0066cc] text-white px-3 py-1.5 rounded-full text-sm font-semibold transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300 shadow">
                    View Installation
                  </button>
                </div>

                {/* Service Type Badge */}
                <div className="absolute top-2 left-2">
                  <span className="bg-[#1e3a5f] bg-opacity-90 text-white px-2 py-0.5 rounded-full text-xs font-medium">
                    {categories.find(cat => cat.id === project.category)?.name}
                  </span>
                </div>
              </div>

              {/* Installation Info */}
              <div className="p-3">
                <h3 className="text-sm md:text-base font-bold text-[#1e3a5f] mb-1 group-hover:text-[#0066cc] transition-colors duration-300 truncate">
                  {project.title}
                </h3>
                <p className="text-xs md:text-sm text-[#6b7280] leading-snug">
                  {truncateDescription(project.description)}
                </p>

                {/* Installation Meta */}
                <div className="mt-2 flex items-center justify-between">
                  <div className="flex items-center space-x-1 text-[#0066cc] text-xs">
                    <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                    </svg>
                    <span>View Details</span>
                  </div>
                  <div className="w-6 h-6 bg-[#0066cc] bg-opacity-20 rounded-full flex items-center justify-center">
                    <svg className="w-3 h-3 text-[#0066cc]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination Controls */}
        {filteredProjects.length > projectsPerPage && (
          <div className="flex justify-center items-center mt-8 space-x-2">
            <button
              onClick={prevPage}
              disabled={currentPage === 1}
              className={`px-3 py-1 rounded-full text-sm font-semibold ${
                currentPage === 1
                  ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
                  : 'bg-[#1e3a5f] text-white hover:bg-[#2c4d7a]'
              }`}
            >
              Previous
            </button>
            
            <div className="flex space-x-1">
              {Array.from({ length: totalPages }, (_, i) => i + 1).map((number) => (
                <button
                  key={number}
                  onClick={() => paginate(number)}
                  className={`w-8 h-8 rounded-full text-sm font-semibold ${
                    currentPage === number
                      ? 'bg-[#0066cc] text-white'
                      : 'bg-white text-[#1e3a5f] border border-gray-200 hover:bg-gray-100'
                  }`}
                >
                  {number}
                </button>
              ))}
            </div>
            
            <button
              onClick={nextPage}
              disabled={currentPage === totalPages}
              className={`px-3 py-1 rounded-full text-sm font-semibold ${
                currentPage === totalPages
                  ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
                  : 'bg-[#1e3a5f] text-white hover:bg-[#2c4d7a]'
              }`}
            >
              Next
            </button>
          </div>
        )}

        {/* Installation Count */}
        <div className="text-center mt-4 text-sm text-[#6b7280]">
          Showing {indexOfFirstProject + 1}-{Math.min(indexOfLastProject, filteredProjects.length)} of {filteredProjects.length} installations
        </div>
      </div>
    </section>
  );
};

export default OurWorkGrid;
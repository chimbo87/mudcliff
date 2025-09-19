import React from 'react';
import projects from './ProjectData';
import { useNavigate } from 'react-router-dom';

const ProjectsGrid = () => {
  const navigate = useNavigate();

  const getTechCategoryColor = (category) => {
    const categoryColors = {
      'Frontend': 'from-blue-500 to-cyan-500',
      'Backend': 'from-green-500 to-emerald-500',
      'Database': 'from-orange-500 to-amber-500',
      'Styling': 'from-purple-500 to-violet-500',
      'Authentication': 'from-red-500 to-pink-500',
      'Payment': 'from-indigo-500 to-blue-500',
      'Storage': 'from-yellow-500 to-orange-500',
      'Real-time': 'from-teal-500 to-cyan-500',
      'AI/ML': 'from-pink-500 to-rose-500',
      'Visualization': 'from-emerald-500 to-teal-500',
      'API': 'from-violet-500 to-purple-500',
      'Blockchain': 'from-gray-700 to-gray-900',
      'Jobs': 'from-red-600 to-orange-600',
      'Cloud': 'from-blue-600 to-indigo-600',
      'Caching': 'from-red-500 to-red-700',
      'DevOps': 'from-blue-400 to-blue-600',
      'Streaming': 'from-gray-800 to-black',
      'Development': 'from-yellow-400 to-yellow-600',
      'Wallet': 'from-orange-500 to-yellow-500'
    };
    return categoryColors[category] || 'from-slate-500 to-slate-600';
  };

  const handleViewDetails = (projectId) => {
    navigate(`/project/${projectId}`);
  };
  return (
    <div className="min-h-screen bg-slate-900 text-white">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-[10%] left-[5%] w-72 h-72 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full opacity-10 blur-3xl animate-pulse"></div>
          <div className="absolute bottom-[10%] right-[5%] w-64 h-64 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full opacity-10 blur-3xl animate-pulse" style={{ animationDelay: "2s" }}></div>
          <div className="absolute top-[50%] left-[50%] transform -translate-x-1/2 -translate-y-1/2 w-60 h-60 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full opacity-10 blur-3xl animate-pulse" style={{ animationDelay: "4s" }}></div>
        </div>

        <div className="relative z-10 container mx-auto px-4 py-12">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              My <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-emerald-400 bg-clip-text text-transparent">Projects</span>
            </h1>
            <p className="text-lg text-slate-300 max-w-3xl mx-auto leading-relaxed">
              Explore my portfolio of full-stack applications, from e-commerce platforms to AI-powered dashboards. 
              Each project showcases different technologies and problem-solving approaches.
            </p>
          </div>
        </div>
      </div>

      {/* Projects Grid */}
      <div className="container mx-auto px-4 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {projects.map((project) => (
            <div 
              key={project.id}
              className="group bg-slate-800/30 border border-slate-700/50 rounded-xl overflow-hidden hover:bg-slate-800/50 transition-all duration-500 hover:scale-[1.02] hover:shadow-xl hover:shadow-blue-500/10"
            >
              {/* Project Image */}
              <div className="relative h-40 overflow-hidden">
                <img 
                  src={project.images[0]} 
                  alt={project.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent"></div>
                
                {/* Status Badge */}
                <div className="absolute top-3 right-3">
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                    project.status === 'Completed' 
                      ? 'bg-green-500/20 text-green-400 border border-green-500/30' 
                      : 'bg-yellow-500/20 text-yellow-400 border border-yellow-500/30'
                  }`}>
                    {project.status}
                  </span>
                </div>

                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-slate-900/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <button 
                    onClick={() => handleViewDetails(project.id)}
                    className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white px-4 py-2 rounded-md font-medium hover:from-blue-600 hover:to-cyan-600 transition-all duration-300 transform translate-y-4 group-hover:translate-y-0 text-sm"
                  >
                    View Details
                  </button>
                </div>
              </div>

              {/* Project Content */}
              <div className="p-4">
                {/* Project Name */}
                <h3 className="text-lg font-bold mb-2 group-hover:text-blue-400 transition-colors duration-300">
                  {project.name}
                </h3>

                {/* Project Description */}
                <p className="text-slate-400 text-xs mb-3 line-clamp-2 leading-relaxed">
                  {project.shortDescription}
                </p>

                {/* Tech Stack */}
                <div className="mb-4">
                  <h4 className="text-xs font-medium text-slate-300 mb-2">Tech Stack</h4>
                  <div className="flex flex-wrap gap-1.5">
                    {project.techStack.slice(0, 4).map((tech, index) => (
                      <span
                        key={index}
                        className={`px-2 py-1 rounded-full text-xs font-medium bg-gradient-to-r ${getTechCategoryColor(tech.category)} text-white opacity-90 hover:opacity-100 transition-opacity duration-300`}
                      >
                        {tech.name}
                      </span>
                    ))}
                    {project.techStack.length > 4 && (
                      <span className="px-2 py-1 rounded-full text-xs font-medium bg-slate-700 text-slate-300 border border-slate-600">
                        +{project.techStack.length - 4}
                      </span>
                    )}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-2">
                  <a 
                    href={project.liveLink} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex-1 bg-gradient-to-r from-blue-500 to-cyan-500 text-white py-2 px-3 rounded-md text-xs font-medium hover:from-blue-600 hover:to-cyan-600 transition-all duration-300 hover:shadow-md hover:shadow-blue-500/25 flex items-center justify-center gap-1 group/btn"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 group-hover/btn:rotate-12 transition-transform duration-300" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M12.586 4.586a2 2 0 112.828 2.828l-3 3a2 2 0 01-2.828 0 1 1 0 00-1.414 1.414 4 4 0 005.656 0l3-3a4 4 0 00-5.656-5.656l-1.5 1.5a1 1 0 101.414 1.414l1.5-1.5zm-5 5a2 2 0 012.828 0 1 1 0 101.414-1.414 4 4 0 00-5.656 0l-3 3a4 4 0 105.656 5.656l1.5-1.5a1 1 0 10-1.414-1.414l-1.5 1.5a2 2 0 11-2.828-2.828l3-3z" clipRule="evenodd" />
                    </svg>
                    Live Demo
                  </a>
                  
                  <a 
                    href={project.githubLink} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex-1 bg-slate-700/50 border border-slate-600 text-slate-300 py-2 px-3 rounded-md text-xs font-medium hover:bg-slate-600/50 hover:text-white hover:border-slate-500 transition-all duration-300 flex items-center justify-center gap-1 group/btn"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="currentColor" className="group-hover/btn:scale-110 transition-transform duration-300">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                    </svg>
                    GitHub
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12 bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20 rounded-xl p-8 max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold mb-3">
            Ready to <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">collaborate?</span>
          </h2>
          <p className="text-slate-300 mb-6 max-w-2xl mx-auto text-sm">
            I'm always excited to work on new projects and bring innovative ideas to life. 
            Let's discuss how we can work together to create something amazing.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center max-w-md mx-auto">
            <button className="flex-1 bg-gradient-to-r from-blue-500 to-purple-500 text-white py-2 px-4 rounded-md font-medium hover:from-blue-600 hover:to-purple-600 transition-all duration-300 text-sm">
              Get In Touch
            </button>
            <button className="flex-1 bg-slate-800 border border-slate-700 text-slate-300 py-2 px-4 rounded-md font-medium hover:bg-slate-700 hover:text-white transition-all duration-300 text-sm">
              View Resume
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectsGrid;
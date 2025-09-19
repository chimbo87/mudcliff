import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import projects from './ProjectData';

const ProjectDetails = () => {
  const { id } = useParams();
  const project = projects.find(p => p.id === parseInt(id));
  const [activeTab, setActiveTab] = useState('overview');
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  if (!project) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white flex items-center justify-center">
        <div className="text-center p-6 bg-slate-800/50 backdrop-blur-sm rounded-xl border border-slate-700/50 shadow-xl">
          <div className="w-14 h-14 mx-auto mb-3 bg-gradient-to-r from-red-500 to-pink-500 rounded-full flex items-center justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L4.082 16.5c-.77.833.192 2.5 1.732 2.5z" />
            </svg>
          </div>
          <h1 className="text-2xl font-bold mb-3 bg-gradient-to-r from-white to-slate-300 bg-clip-text text-transparent">Project Not Found</h1>
          <p className="text-slate-400 mb-4 text-sm">The project you're looking for doesn't exist or has been moved.</p>
          <Link to="/projects" className="btn btn-primary btn-sm gap-1 shadow-md hover:shadow-sm transition-all duration-300 text-sm">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
            </svg>
            Back to Projects
          </Link>
        </div>
      </div>
    );
  }

  const getTechCategoryColor = (category) => {
    const categoryColors = {
      'Frontend': 'badge-info',
      'Backend': 'badge-success',
      'Database': 'badge-warning',
      'Styling': 'badge-secondary',
      'Authentication': 'badge-error',
      'Payment': 'badge-primary',
      'Storage': 'badge-warning',
      'Real-time': 'badge-accent',
      'AI/ML': 'badge-error',
      'Visualization': 'badge-success',
      'API': 'badge-secondary',
      'Blockchain': 'badge-neutral',
      'Jobs': 'badge-error',
      'Cloud': 'badge-info',
      'Caching': 'badge-error',
      'DevOps': 'badge-info',
      'Streaming': 'badge-neutral',
      'Development': 'badge-warning',
      'Wallet': 'badge-warning'
    };
    return categoryColors[category] || 'badge-neutral';
  };

  const handleImageChange = (index) => {
    setCurrentImageIndex(index);
  };

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % project.images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + project.images.length) % project.images.length);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
      {/* Hero Section with Background Pattern */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-purple-500/5"></div>
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        
        <div className="relative container mx-auto px-4 py-6 max-w-7xl">
          {/* Enhanced Header with back button */}
          <div className="mb-6">
            <Link to="/projects" className="group inline-flex items-center gap-2 px-3 py-1.5 bg-slate-800/50 backdrop-blur-sm rounded-lg border border-slate-700/50 hover:border-slate-600/50 transition-all duration-300 hover:bg-slate-800/70 text-sm">
              <div className="w-6 h-6 rounded-md bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 text-white" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
                </svg>
              </div>
              <span className="font-medium">Back to Projects</span>
            </Link>
          </div>

          {/* Enhanced Project Header */}
          <div className="grid lg:grid-cols-3 gap-6 mb-8">
            {/* Project Info - spans 2 columns */}
            <div className="lg:col-span-2 space-y-4">
              {/* Status and Meta Info */}
              <div className="flex flex-wrap items-center gap-3">
                <span className={`px-3 py-1 rounded-full text-xs font-semibold border backdrop-blur-sm ${
                  project.status === 'Completed' 
                    ? 'bg-emerald-500/20 text-emerald-400 border-emerald-500/30' 
                    : 'bg-amber-500/20 text-amber-400 border-amber-500/30'
                }`}>
                  <span className="w-1.5 h-1.5 rounded-full bg-current inline-block mr-1.5"></span>
                  {project.status}
                </span>
                <div className="flex items-center gap-1.5 text-slate-400 text-xs">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span>{project.duration}</span>
                </div>
                <div className="flex items-center gap-1.5 text-slate-400 text-xs">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                  <span>{project.role}</span>
                </div>
              </div>
              
              {/* Project Title and Description */}
              <div>
                <h1 className="text-3xl lg:text-4xl font-bold mb-4 bg-gradient-to-r from-white via-blue-100 to-purple-100 bg-clip-text text-transparent leading-tight">
                  {project.name}
                </h1>
                <p className="text-slate-300 leading-relaxed max-w-3xl text-sm">
                  {project.fullDescription}
                </p>
              </div>
              
              {/* Action Buttons */}
              <div className="flex flex-wrap gap-3">
                <a 
                  href={project.liveLink} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-500 hover:to-blue-400 rounded-lg font-semibold text-white shadow-md shadow-blue-500/20 hover:shadow-blue-500/30 transition-all duration-300 hover:scale-105 text-sm"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 group-hover:rotate-12 transition-transform duration-300" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M12.586 4.586a2 2 0 112.828 2.828l-3 3a2 2 0 01-2.828 0 1 1 0 00-1.414 1.414 4 4 0 005.656 0l3-3a4 4 0 00-5.656-5.656l-1.5 1.5a1 1 0 101.414 1.414l1.5-1.5zm-5 5a2 2 0 012.828 0 1 1 0 101.414-1.414 4 4 0 00-5.656 0l-3 3a4 4 0 105.656 5.656l1.5-1.5a1 1 0 10-1.414-1.414l-1.5 1.5a2 2 0 11-2.828-2.828l3-3z" clipRule="evenodd" />
                  </svg>
                  View Live Demo
                </a>
                
                <a 
                  href={project.githubLink} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-2 px-4 py-2 bg-slate-800/50 hover:bg-slate-700/50 border border-slate-600/50 hover:border-slate-500/50 rounded-lg font-semibold text-white backdrop-blur-sm transition-all duration-300 hover:scale-105 text-sm"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor" className="group-hover:rotate-12 transition-transform duration-300">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.020.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                  View Source Code
                </a>
              </div>
            </div>
            
            {/* Enhanced Image Gallery */}
            <div className="space-y-4">
              <div className="relative overflow-hidden rounded-xl border border-slate-700/50 shadow-xl group">
                {/* Main Image Display */}
                <div className="relative h-56">
                  <img 
                    src={project.images[currentImageIndex]} 
                    alt={`${project.name} screenshot ${currentImageIndex + 1}`}
                    className="w-full h-56 object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none"></div>
                  
                  {/* Navigation Arrows */}
                  {project.images.length > 1 && (
                    <>
                      <button
                        onClick={prevImage}
                        className="absolute left-2 top-1/2 transform -translate-y-1/2 w-8 h-8 bg-black/50 hover:bg-black/70 rounded-full flex items-center justify-center text-white transition-all duration-300 opacity-0 group-hover:opacity-100"
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                        </svg>
                      </button>
                      <button
                        onClick={nextImage}
                        className="absolute right-2 top-1/2 transform -translate-y-1/2 w-8 h-8 bg-black/50 hover:bg-black/70 rounded-full flex items-center justify-center text-white transition-all duration-300 opacity-0 group-hover:opacity-100"
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </button>
                    </>
                  )}
                  
                  {/* Image Counter */}
                  <div className="absolute top-2 right-2 bg-black/50 backdrop-blur-sm rounded-full px-2 py-1 text-xs text-white">
                    {currentImageIndex + 1} / {project.images.length}
                  </div>
                </div>
              </div>
              
              {/* Enhanced Image Dots */}
              {project.images.length > 1 && (
                <div className="flex justify-center gap-2">
                  {project.images.map((image, index) => (
                    <button
                      key={index}
                      onClick={() => handleImageChange(index)}
                      className={`relative w-12 h-8 rounded-lg overflow-hidden border-2 transition-all duration-300 ${
                        index === currentImageIndex
                          ? 'border-blue-500 scale-110 shadow-md shadow-blue-500/30'
                          : 'border-slate-600 hover:border-slate-500 hover:scale-105'
                      }`}
                    >
                      <img 
                        src={image} 
                        alt={`${project.name} thumbnail ${index + 1}`}
                        className="w-full h-full object-cover"
                      />
                      <div className={`absolute inset-0 transition-all duration-300 ${
                        index === currentImageIndex
                          ? 'bg-blue-500/20'
                          : 'bg-black/30 hover:bg-black/20'
                      }`}></div>
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="container mx-auto px-4 max-w-7xl pb-8">
        {/* Enhanced Tabs Navigation with Horizontal Scroll */}
        <div className="mb-6">
          <div className="relative">
            <div className="flex overflow-x-auto scrollbar-hide gap-1.5 p-1.5 bg-slate-800/30 backdrop-blur-sm rounded-xl border border-slate-700/50 min-w-0">
              {[
                { key: 'overview', label: 'Overview', icon: '📋' },
                { key: 'techstack', label: 'Tech Stack', icon: '⚡' },
                { key: 'features', label: 'Features', icon: '✨' },
                { key: 'challenges', label: 'Challenges', icon: '🎯' },
                { key: 'learnings', label: 'Learnings', icon: '💡' }
              ].map((tab) => (
                <button
                  key={tab.key}
                  className={`flex items-center gap-2 px-4 py-2 rounded-lg font-semibold transition-all duration-300 text-sm whitespace-nowrap flex-shrink-0 ${
                    activeTab === tab.key 
                      ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-md shadow-blue-500/20' 
                      : 'text-slate-300 hover:text-white hover:bg-slate-700/50'
                  }`}
                  onClick={() => setActiveTab(tab.key)}
                >
                  <span className="text-base">{tab.icon}</span>
                  <span>{tab.label}</span>
                </button>
              ))}
            </div>
            
            {/* Scroll Indicators */}
            <div className="absolute left-0 top-0 bottom-0 w-4 bg-gradient-to-r from-slate-800/30 to-transparent pointer-events-none rounded-l-xl"></div>
            <div className="absolute right-0 top-0 bottom-0 w-4 bg-gradient-to-l from-slate-800/30 to-transparent pointer-events-none rounded-r-xl"></div>
          </div>
          
          {/* Custom scrollbar styles */}
          <style jsx>{`
            .scrollbar-hide {
              -ms-overflow-style: none;
              scrollbar-width: none;
            }
            .scrollbar-hide::-webkit-scrollbar {
              display: none;
            }
          `}</style>
        </div>

        {/* Enhanced Tab Content */}
        <div className="bg-slate-800/20 backdrop-blur-sm rounded-xl border border-slate-700/30 p-6 mb-8 shadow-xl">
          {/* Overview Tab */}
          {activeTab === 'overview' && (
            <div className="space-y-6">
              <div>
                <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
                  <span className="w-7 h-7 rounded-md bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center text-xs">📋</span>
                  Project Overview
                </h2>
                <p className="text-slate-300 text-sm leading-relaxed mb-6">{project.fullDescription}</p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  { title: 'Project Status', value: project.status, icon: '🚀' },
                  { title: 'Project Duration', value: project.duration, icon: '⏱️' },
                  { title: 'My Role', value: project.role, icon: '👨‍💻' },
                  { title: 'Key Technologies', value: 'tech-stack', icon: '🔧' }
                ].map((item, index) => (
                  <div key={index} className="group bg-gradient-to-br from-slate-700/30 to-slate-800/30 rounded-lg p-4 border border-slate-600/30 hover:border-slate-500/50 transition-all duration-300 hover:scale-105">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-xl">{item.icon}</span>
                      <h3 className="font-semibold text-white text-base">{item.title}</h3>
                    </div>
                    {item.value === 'tech-stack' ? (
                      <div className="flex flex-wrap gap-1.5">
                        {project.techStack.slice(0, 3).map((tech, techIndex) => (
                          <span key={techIndex} className="badge badge-outline badge-xs">
                            {tech.name}
                          </span>
                        ))}
                        {project.techStack.length > 3 && (
                          <span className="badge badge-outline badge-xs">
                            +{project.techStack.length - 3} more
                          </span>
                        )}
                      </div>
                    ) : (
                      <p className="text-slate-300 text-sm">{item.value}</p>
                    )}
                  </div>
                ))}
              </div>
              
              <div className="flex flex-wrap gap-3 pt-3">
                <a 
                  href={project.liveLink} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="btn btn-primary btn-sm gap-1 shadow-md hover:shadow-sm transition-all duration-300 text-sm"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M12.586 4.586a2 2 0 112.828 2.828l-3 3a2 2 0 01-2.828 0 1 1 0 00-1.414 1.414 4 4 0 005.656 0l3-3a4 4 0 00-5.656-5.656l-1.5 1.5a1 1 0 101.414 1.414l1.5-1.5zm-5 5a2 2 0 012.828 0 1 1 0 101.414-1.414 4 4 0 00-5.656 0l-3 3a4 4 0 105.656 5.656l1.5-1.5a1 1 0 10-1.414-1.414l-1.5 1.5a2 2 0 11-2.828-2.828l3-3z" clipRule="evenodd" />
                  </svg>
                  Live Demo
                </a>
                
                <a 
                  href={project.githubLink} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="btn btn-outline btn-sm gap-1 hover:shadow-md transition-all duration-300 text-sm"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                  View Code
                </a>
              </div>
            </div>
          )}

          {/* Tech Stack Tab */}
          {activeTab === 'techstack' && (
            <div>
              <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
                <span className="w-7 h-7 rounded-md bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center text-xs">⚡</span>
                Technology Stack
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                {project.techStack.map((tech, index) => (
                  <div key={index} className={`group relative overflow-hidden badge ${getTechCategoryColor(tech.category)} gap-2 p-3 text-sm font-semibold hover:scale-105 transition-all duration-300 cursor-pointer`}>
                    <div 
                      className="w-2.5 h-2.5 rounded-full flex-shrink-0" 
                      style={{ backgroundColor: tech.color }}
                    ></div>
                    <span className="flex-1">{tech.name}</span>
                    <span className="text-xs opacity-75 bg-black/20 px-1.5 py-0.5 rounded-full">
                      {tech.category}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Features Tab */}
          {activeTab === 'features' && (
            <div>
              <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
                <span className="w-7 h-7 rounded-md bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center text-xs">✨</span>
                Key Features
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {project.features.map((feature, index) => (
                  <div key={index} className="group bg-gradient-to-br from-slate-700/30 to-slate-800/30 rounded-lg p-4 border border-slate-600/30 hover:border-slate-500/50 transition-all duration-300 hover:scale-105">
                    <div className="flex items-start gap-3">
                      <div className="w-10 h-10 rounded-lg bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-500/30 flex items-center justify-center text-xl flex-shrink-0">
                        {feature.icon}
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold text-white text-base mb-1.5">{feature.title}</h3>
                        <p className="text-slate-400 leading-relaxed text-sm">{feature.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Challenges Tab */}
          {activeTab === 'challenges' && (
            <div>
              <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
                <span className="w-7 h-7 rounded-md bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center text-xs">🎯</span>
                Challenges & Solutions
              </h2>
              <div className="space-y-3">
                {project.challenges.map((challenge, index) => (
                  <div key={index} className="group flex items-start gap-3 p-3 bg-gradient-to-r from-slate-700/20 to-slate-800/20 rounded-lg border border-slate-600/30 hover:border-blue-500/30 transition-all duration-300">
                    <div className="w-8 h-8 rounded-md bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-500/30 flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform duration-300">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-blue-400" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <p className="text-slate-300 leading-relaxed flex-1 text-sm">{challenge}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Learnings Tab */}
          {activeTab === 'learnings' && (
            <div>
              <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
                <span className="w-7 h-7 rounded-md bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center text-xs">💡</span>
                Key Learnings
              </h2>
              <div className="space-y-3">
                {project.learnings.map((learning, index) => (
                  <div key={index} className="group flex items-start gap-3 p-3 bg-gradient-to-r from-slate-700/20 to-slate-800/20 rounded-lg border border-slate-600/30 hover:border-green-500/30 transition-all duration-300">
                    <div className="w-8 h-8 rounded-md bg-gradient-to-r from-green-500/20 to-emerald-500/20 border border-green-500/30 flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform duration-300">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-green-400" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <p className="text-slate-300 leading-relaxed flex-1 text-sm">{learning}</p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Enhanced Call to Action */}
        <div className="relative overflow-hidden bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-pink-500/10 border border-blue-500/20 rounded-xl p-6 text-center backdrop-blur-sm">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/5 to-purple-600/5"></div>
          <div className="relative z-10">
            <div className="w-14 h-14 mx-auto mb-4 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center shadow-md shadow-blue-500/20">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
              </svg>
            </div>
            <h2 className="text-2xl font-bold mb-3 bg-gradient-to-r from-white to-slate-300 bg-clip-text text-transparent">
              Interested in this project?
            </h2>
            <p className="text-slate-300 text-sm mb-6 max-w-2xl mx-auto leading-relaxed">
              I'm always open to discussing this project, sharing insights about my development process, or exploring potential collaboration opportunities.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
  <button className="group relative inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white font-medium rounded-xl shadow-lg shadow-blue-500/30 hover:shadow-blue-500/40 transition-all duration-300 hover:scale-105 overflow-hidden">
    <span className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 group-hover:translate-y-[-2px] transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 7.89a2 2 0 002.83 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
    </svg>
    <span className="relative">Get In Touch</span>
  </button>
  
  <Link to="/projects" className="group relative inline-flex items-center justify-center px-6 py-3 bg-slate-800/60 backdrop-blur-sm border border-slate-600/50 hover:border-blue-400/50 text-white font-medium rounded-xl shadow-md hover:shadow-blue-400/20 transition-all duration-300 hover:scale-105 overflow-hidden">
    <span className="absolute inset-0 bg-gradient-to-r from-blue-400/10 to-purple-400/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 group-hover:translate-y-[-2px] transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
    </svg>
    <span className="relative">View All Projects</span>
  </Link>
</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;
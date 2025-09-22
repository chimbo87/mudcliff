// ================================================
// Updated ProjectDetails.jsx for Electrical, Plumbing & Solar Company
import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { projectsData, categories } from "./ProjectsData";

const ProjectDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [project, setProject] = useState(null);
  const [activeTab, setActiveTab] = useState("overview");
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  // Find project by ID when component mounts or ID changes
  useEffect(() => {
    const foundProject = projectsData.find((p) => p.id === parseInt(id));
    if (foundProject) {
      setProject(foundProject);
    } else {
      // Redirect to services page if project not found
      navigate("/our-work");
    }
  }, [id, navigate]);

  const tabs = [
    { id: "overview", name: "Overview", icon: "📋" },
    { id: "specifications", name: "Specifications", icon: "⚡" },
    { id: "solutions", name: "Solutions", icon: "🔧" },
    { id: "equipment", name: "Equipment", icon: "🔌" },
  ];

  // Show loading state while project is being loaded
  if (!project) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-white to-blue-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-20 w-20 border-b-2 border-orange-500 mx-auto mb-2"></div>
          <p className="text-blue-900 text-sm">Loading service details...</p>
        </div>
      </div>
    );
  }

  const categoryInfo = categories.find((cat) => cat.id === project.category);

  // Get related projects (same category, exclude current project)
  const relatedProjects = projectsData
    .filter((p) => p.category === project.category && p.id !== project.id)
    .slice(0, 2);

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-blue-50">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-blue-900 to-blue-700 text-white">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-3 py-8">
          {/* Back Button */}
          <button
            onClick={() => navigate("/our-work")}
            className="mb-4 inline-flex items-center px-3 py-1 bg-white/10 backdrop-blur-sm rounded-full text-white hover:bg-white/20 transition-all duration-300 text-sm"
          >
            <svg
              className="w-4 h-4 mr-1"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M10 19l-7-7m0 0l7-7m-7 7h18"
              />
            </svg>
            Back to Our Work
          </button>

          <div className="grid lg:grid-cols-2 gap-6 items-center">
            {/* Project Info */}
            <div>
              <div className="flex items-center space-x-2 mb-3">
                <span className="text-2xl">{categoryInfo?.icon}</span>
                <span className="bg-orange-500 px-2 py-0.5 rounded-full text-xs font-semibold">
                  {categoryInfo?.name}
                </span>
                <span className="bg-green-500 px-2 py-0.5 rounded-full text-xs font-semibold capitalize">
                  {project.status}
                </span>
              </div>

              <h1 className="text-2xl lg:text-3xl font-bold mb-2 leading-tight">
                {project.title}
              </h1>

              <p className="text-sm lg:text-base text-white/90 mb-4 leading-relaxed">
                {project.description}
              </p>

              {/* Quick Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
                <div className="bg-white/10 backdrop-blur-sm rounded p-2 text-center">
                  <div className="text-lg font-bold">Quote</div>
                  <div className="text-xs text-white/80">Investment</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded p-2 text-center">
                  <div className="text-lg font-bold">{project.duration}</div>
                  <div className="text-xs text-white/80">Timeframe</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded p-2 text-center">
                  <div className="text-lg font-bold">
                    {project.location.split(",")[0]}
                  </div>
                  <div className="text-xs text-white/80">Location</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded p-2 text-center">
                  <div className="text-lg font-bold">
                    {new Date(project.completionDate).getFullYear()}
                  </div>
                  <div className="text-xs text-white/80">Completed</div>
                </div>
              </div>
            </div>

            {/* Main Project Image */}
            <div className="relative">
              <div className="relative overflow-hidden rounded-xl shadow-xl">
                <img
                  src={project.images[activeImageIndex]}
                  alt={project.title}
                  className="w-full h-64 lg:h-72 object-cover transform hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
              </div>

              {/* Image Navigation */}
              {project.images.length > 1 && (
                <div className="flex justify-center mt-2 space-x-1">
                  {project.images.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setActiveImageIndex(index)}
                      className={`w-2 h-2 rounded-full transition-all duration-300 ${
                        index === activeImageIndex
                          ? "bg-orange-500 scale-125"
                          : "bg-white/50 hover:bg-white/80"
                      }`}
                    />
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-3 py-6">
        <div className="grid lg:grid-cols-3 gap-6">
          {/* Content Area */}
          <div className="lg:col-span-2">
            {/* Tab Navigation */}
            <div className="flex flex-wrap gap-1 mb-4 p-0.5 bg-white rounded-lg shadow-sm border border-gray-100">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center space-x-1 px-3 py-2 rounded-md font-semibold transition-all duration-300 flex-1 justify-center text-xs ${
                    activeTab === tab.id
                      ? "bg-orange-500 text-white shadow-sm transform scale-105"
                      : "text-blue-900 hover:bg-orange-500/10 hover:text-orange-500"
                  }`}
                >
                  <span>{tab.icon}</span>
                  <span>{tab.name}</span>
                </button>
              ))}
            </div>

            {/* Tab Content */}
            <div className="bg-white rounded-xl shadow-md border border-gray-100 overflow-hidden">
              <div className="p-4">
                {activeTab === "overview" && (
                  <div className="space-y-4">
                    <div>
                      <h3 className="text-xl font-bold text-blue-900 mb-2">
                        Service Overview
                      </h3>
                      <p className="text-gray-600 leading-relaxed text-sm">
                        {project.fullDescription}
                      </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-3">
                      <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-3 rounded-lg">
                        <h4 className="font-bold text-blue-900 mb-1 flex items-center text-sm">
                          <span className="mr-1">👤</span> Client Information
                        </h4>
                        <p className="text-gray-600 text-xs">
                          {project.client}
                        </p>
                        <p className="text-xs text-gray-600 mt-0.5">
                          {project.location}
                        </p>
                      </div>

                      <div className="bg-gradient-to-br from-green-50 to-green-100 p-3 rounded-lg">
                        <h4 className="font-bold text-blue-900 mb-1 flex items-center text-sm">
                          <span className="mr-1">📅</span> Project Timeline
                        </h4>
                        <p className="text-gray-600 text-xs">
                          Start:{" "}
                          {new Date(project.startDate).toLocaleDateString()}
                        </p>
                        <p className="text-gray-600 text-xs">
                          Completed:{" "}
                          {new Date(
                            project.completionDate
                          ).toLocaleDateString()}
                        </p>
                      </div>
                    </div>
                  </div>
                )}

                {activeTab === "specifications" && (
                  <div className="space-y-4">
                    <h3 className="text-xl font-bold text-blue-900 mb-2">
                      Technical Specifications
                    </h3>

                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <div className="flex justify-between py-1 border-b border-gray-100 text-sm">
                          <span className="font-semibold text-blue-900">
                            Service Type:
                          </span>
                          <span className="text-gray-600">
                            {project.contractor}
                          </span>
                        </div>
                        <div className="flex justify-between py-1 border-b border-gray-100 text-sm">
                          <span className="font-semibold text-blue-900">
                            Project Manager:
                          </span>
                          <span className="text-gray-600">
                            {project.architect}
                          </span>
                        </div>
                        <div className="flex justify-between py-1 border-b border-gray-100 text-sm">
                          <span className="font-semibold text-blue-900">
                            Duration:
                          </span>
                          <span className="text-gray-600">
                            {project.duration}
                          </span>
                        </div>
                        <div className="flex justify-between py-1 border-b border-gray-100 text-sm">
                          <span className="font-semibold text-blue-900">
                            Budget:
                          </span>
                          <span className="text-gray-600 font-bold">
                            Custom Quote
                          </span>
                        </div>
                      </div>

                      <div className="bg-gradient-to-br from-yellow-50 to-yellow-100 p-3 rounded-lg">
                        <h4 className="font-bold text-blue-900 mb-2 flex items-center text-sm">
                          <span className="mr-1">🏷️</span> Service Tags
                        </h4>
                        <div className="flex flex-wrap gap-1">
                          {project.tags.map((tag, index) => (
                            <span
                              key={index}
                              className="bg-white px-2 py-0.5 rounded-full text-xs font-medium text-blue-900 shadow-xs"
                            >
                              #{tag}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {activeTab === "solutions" && (
                  <div>
                    <h3 className="text-xl font-bold text-blue-900 mb-3">
                      Implemented Solutions
                    </h3>
                    <div className="grid md:grid-cols-2 gap-2">
                      {project.features.map((feature, index) => (
                        <div
                          key={index}
                          className="flex items-start space-x-2 p-2 bg-gradient-to-r from-blue-50 to-white rounded-md border border-gray-100 hover:shadow-sm transition-shadow duration-300 text-sm"
                        >
                          <div className="w-6 h-6 bg-orange-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                            <svg
                              className="w-4 h-4 text-white"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M5 13l4 4L19 7"
                              />
                            </svg>
                          </div>
                          <span className="text-blue-900 font-medium">
                            {feature}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {activeTab === "equipment" && (
                  <div>
                    <h3 className="text-xl font-bold text-blue-900 mb-3">
                      Equipment & Materials
                    </h3>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
                      {project.materials.map((material, index) => (
                        <div
                          key={index}
                          className="bg-gradient-to-br from-blue-100 to-blue-50 p-3 rounded-lg text-center border border-blue-200 hover:border-blue-300 transition-colors duration-300"
                        >
                          <div className="w-8 h-8 bg-blue-600 rounded-full mx-auto mb-1 flex items-center justify-center">
                            <span className="text-sm">⚡</span>
                          </div>
                          <h4 className="font-semibold text-blue-900 text-xs">
                            {material}
                          </h4>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-4">
            {/* Image Gallery */}
            <div className="bg-white rounded-xl shadow-md border border-gray-100 overflow-hidden">
              <div className="p-3">
                <h3 className="text-lg font-bold text-blue-900 mb-2 flex items-center text-sm">
                  <span className="mr-1">📸</span> Project Gallery
                </h3>
                <div className="grid grid-cols-2 gap-2">
                  {project.images.map((image, index) => (
                    <div
                      key={index}
                      className={`relative cursor-pointer rounded-md overflow-hidden transition-all duration-300 ${
                        index === activeImageIndex
                          ? "ring-2 ring-orange-500 transform scale-105"
                          : "hover:transform hover:scale-105"
                      }`}
                      onClick={() => setActiveImageIndex(index)}
                    >
                      <img
                        src={image}
                        alt={`${project.title} - Image ${index + 1}`}
                        className="w-full h-20 object-cover"
                      />
                      {index === activeImageIndex && (
                        <div className="absolute inset-0 bg-orange-500/20 flex items-center justify-center">
                          <div className="w-4 h-4 bg-orange-500 rounded-full flex items-center justify-center">
                            <svg
                              className="w-3 h-3 text-white"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                              />
                            </svg>
                          </div>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Contact CTA */}
            <div className="bg-gradient-to-br from-blue-900 to-blue-700 rounded-xl p-3 text-white">
              <h3 className="text-lg font-bold mb-1 text-sm">
                Need Similar Services?
              </h3>
              <p className="text-white/90 mb-2 text-xs">
                Contact us for a free consultation and customized quote for your electrical, plumbing, or solar needs.
              </p>
              <button
                className="w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold py-1.5 rounded-md transition-colors duration-300 transform hover:scale-105 text-xs"
                onClick={() => navigate("/contact#contact-form")}
              >
                Get Free Quote
              </button>
            </div>

            {/* Project Stats */}
            <div className="bg-white rounded-xl shadow-md border border-gray-100 overflow-hidden">
              <div className="p-3">
                <h3 className="text-lg font-bold text-blue-900 mb-2 text-sm">
                  Project Statistics
                </h3>
                <div className="space-y-2">
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-gray-600">Project Progress</span>
                    <span className="font-bold text-green-600">100%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-1.5">
                    <div className="bg-green-500 h-1.5 rounded-full w-full"></div>
                  </div>

                  <div className="grid grid-cols-2 gap-2 mt-3">
                    <div className="text-center p-2 bg-blue-50 rounded-md text-xs">
                      <div className="text-base font-bold text-blue-900">
                        {project.images.length}
                      </div>
                      <div className="text-gray-600">Photos</div>
                    </div>
                    <div className="text-center p-2 bg-blue-50 rounded-md text-xs">
                      <div className="text-base font-bold text-blue-900">
                        {project.features.length}
                      </div>
                      <div className="text-gray-600">Solutions</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Related Projects */}
            <div className="bg-white rounded-xl shadow-md border border-gray-100 overflow-hidden">
              <div className="p-3">
                <h3 className="text-lg font-bold text-blue-900 mb-2 text-sm">
                  More {categoryInfo?.name} Work
                </h3>
                <div className="space-y-2">
                  {relatedProjects.map((relatedProject) => (
                    <div
                      key={relatedProject.id}
                      className="flex items-center space-x-2 p-2 bg-blue-50 rounded-md hover:bg-blue-100 transition-colors cursor-pointer text-xs"
                      onClick={() =>
                        navigate(`/project-details/${relatedProject.id}`)
                      }
                    >
                      <div className="w-10 h-10 rounded-md overflow-hidden">
                        <img
                          src={relatedProject.images[0]}
                          alt={relatedProject.title}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div>
                        <div className="font-medium text-blue-900">
                          {relatedProject.title}
                        </div>
                        <div className="text-gray-600">
                          Custom Quote
                        </div>
                      </div>
                    </div>
                  ))}

                  {relatedProjects.length === 0 && (
                    <p className="text-gray-600 text-xs text-center py-2">
                      No other projects in this category yet.
                    </p>
                  )}
                </div>
                <button
                  className="w-full text-blue-700 hover:text-orange-500 font-medium py-1 mt-2 transition-colors duration-300 text-xs"
                  onClick={() => navigate("/our-work")}
                >
                  View All Services →
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom CTA Section */}
        <div className="mt-8 bg-gradient-to-r from-blue-50 to-blue-100 rounded-xl p-4 text-center">
          <h3 className="text-xl font-bold text-blue-900 mb-2">
            Ready to Start Your Project?
          </h3>
          <p className="text-gray-600 mb-3 max-w-2xl mx-auto text-sm">
            Our certified technicians are ready to handle your electrical, plumbing, and solar installation needs with professional expertise and quality craftsmanship.
          </p>
          <div className="flex flex-col sm:flex-row gap-2 justify-center">
            <button className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-1.5 rounded-full font-semibold transition-colors duration-300 transform hover:scale-105 text-xs">
              Schedule Consultation
            </button>
            <button
              className="border border-blue-900 text-blue-900 hover:bg-blue-900 hover:text-white px-4 py-1.5 rounded-full font-semibold transition-all duration-300 text-xs"
              onClick={() => navigate("/our-work")}
            >
              View Our Work
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;

export const getProjectById = (id) => {
  return projectsData.find((project) => project.id === parseInt(id));
};
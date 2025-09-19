import React from 'react';

const PersonalInterests = () => {
  const interests = [
    {
      title: "Open Source Contributor",
      description: "I love contributing to open source projects and being part of the developer community.",
      icon: "💻",
      color: "bg-blue-500"
    },
    {
      title: "Tech Blogger",
      description: "Sharing knowledge through articles about React, JavaScript, and web development best practices.",
      icon: "✍️",
      color: "bg-emerald-500"
    },
    {
      title: "Photography Enthusiast",
      description: "Capturing moments and exploring creative composition in my free time.",
      icon: "📷",
      color: "bg-amber-500"
    },
    {
      title: "Mentorship",
      description: "Helping junior developers grow is one of my most rewarding activities.",
      icon: "🧑‍🏫",
      color: "bg-violet-500"
    },
    {
      title: "Outdoor Adventures",
      description: "Hiking and nature walks help me recharge and find inspiration.",
      icon: "⛰️",
      color: "bg-pink-500"
    },
    {
      title: "Continuous Learning",
      description: "Always exploring new technologies and frameworks to expand my skill set.",
      icon: "📚",
      color: "bg-teal-500"
    }
  ];

  return (
    <section className="bg-slate-800 py-20 relative overflow-hidden">
      {/* Background gradient effect */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-amber-500/10 to-transparent -translate-y-1/3 translate-x-1/3 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-50 mb-4 relative inline-block">
            Beyond Code
            <div className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 w-20 h-1 bg-gradient-to-r from-blue-500 to-emerald-500 rounded-full"></div>
          </h2>
          <p className="text-slate-300 text-xl max-w-2xl mx-auto">
            What drives me and what I enjoy outside of development
          </p>
        </div>

        {/* Interests Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {interests.map((interest, index) => (
            <div 
              key={index}
              className="card bg-slate-900 rounded-xl p-6 border-l-4 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
              style={{ borderLeftColor: getComputedColor(interest.color) }}
            >
              <div className={`w-12 h-12 rounded-full flex items-center justify-center text-white text-xl mb-4 ${interest.color}`}>
                {interest.icon}
              </div>
              <h3 className="text-xl font-semibold text-slate-50 mb-3">{interest.title}</h3>
              <p className="text-slate-400">{interest.description}</p>
            </div>
          ))}
        </div>

        {/* Motivation Section */}
        <div className="card bg-slate-900 rounded-xl p-8 border-t-4 border-blue-500 max-w-4xl mx-auto">
          <h3 className="text-2xl font-semibold text-slate-50 mb-6 text-center">
            What Drives Me as a Developer
          </h3>
          <p className="text-slate-300 text-lg text-center leading-relaxed">
            I'm passionate about creating intuitive, accessible digital experiences that solve real problems. 
            The constant evolution of web technologies excites me, and I thrive on the challenge of turning 
            complex requirements into elegant solutions. For me, development is equal parts creative expression 
            and technical problem-solving.
          </p>
        </div>
      </div>
    </section>
  );
};

// Helper function to get computed color from Tailwind class
function getComputedColor(tailwindClass) {
  const colorMap = {
    'bg-blue-500': '#3b82f6',
    'bg-emerald-500': '#10b981',
    'bg-amber-500': '#f59e0b',
    'bg-violet-500': '#8b5cf6',
    'bg-pink-500': '#ec4899',
    'bg-teal-500': '#14b8a6'
  };
  
  return colorMap[tailwindClass] || '#3b82f6'; // Default to blue
}

export default PersonalInterests;
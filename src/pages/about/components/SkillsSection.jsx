import React from 'react';

const SkillsSection = () => {
  const skills = [
    { 
      name: 'React', 
      level: 'Expert',
      icon: '⚛️',
      color: '#61DAFB'
    },
    { 
      name: 'JavaScript', 
      level: 'Intermediate',
      icon: '🟨',
      color: '#F7DF1E'
    },
    { 
      name: 'Node.js', 
      level: 'Intermediate',
      icon: '🟢',
      color: '#339933'
    },
    { 
      name: 'UI/UX Design', 
      level: 'Intermediate',
      icon: '🎨',
      color: '#8B5CF6'
    },
    { 
      name: 'Tailwind CSS', 
      level: 'Expert',
      icon: '💨',
      color: '#06B6D4'
    },
    { 
      name: 'MongoDB', 
      level: 'Advanced',
      icon: '🍃',
      color: '#47A248'
    },
  ];

  const getLevelColor = (level) => {
    switch (level) {
      case 'Expert': return 'bg-emerald-500';
      case 'Advanced': return 'bg-blue-500';
      case 'Intermediate': return 'bg-amber-500';
      default: return 'bg-slate-500';
    }
  };

  const getLevelTextColor = (level) => {
    switch (level) {
      case 'Expert': return 'text-emerald-400';
      case 'Advanced': return 'text-blue-400';
      case 'Intermediate': return 'text-amber-400';
      default: return 'text-slate-400';
    }
  };

  return (
    <section className="py-16 px-4 md:px-8 lg:px-16 bg-slate-900 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-0 left-0 w-1/3 h-1/3 bg-blue-500/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-1/3 h-1/3 bg-emerald-500/10 rounded-full blur-3xl"></div>
      
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center px-4 py-2 bg-blue-500/10 border border-blue-500/20 rounded-full mb-6">
            <span className="text-blue-400 text-sm font-semibold">TECHNICAL SKILLS</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            My <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-emerald-500">Expertise</span>
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto text-lg">
            Technologies and skills I use to create exceptional digital experiences
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Skills Cards */}
          <div>
            <h3 className="text-xl font-semibold mb-8 text-slate-200 flex items-center gap-3">
              <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
              Technical Proficiency
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {skills.map((skill, index) => (
                <div 
                  key={index}
                  className="bg-slate-800/50 border border-slate-700 rounded-xl p-4 backdrop-blur-sm 
                             hover:border-blue-500/50 transition-all duration-300 group"
                >
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-3">
                      <div 
                        className="w-10 h-10 rounded-lg flex items-center justify-center text-lg"
                        style={{ backgroundColor: `${skill.color}20` }}
                      >
                        {skill.icon}
                      </div>
                      <span className="text-slate-200 font-semibold">{skill.name}</span>
                    </div>
                    <span className={`px-2 py-1 rounded-full text-xs font-semibold ${getLevelTextColor(skill.level)}`}>
                      {skill.level}
                    </span>
                  </div>
                  
                  {/* Level indicator dots */}
                  <div className="flex gap-1">
                    {[1, 2, 3].map((dot) => (
                      <div
                        key={dot}
                        className={`h-2 rounded-full flex-1 ${
                          dot <= (skill.level === 'Expert' ? 3 : skill.level === 'Advanced' ? 2 : 1)
                            ? getLevelColor(skill.level)
                            : 'bg-slate-700'
                        }`}
                      />
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Services */}
          <div>
            <h3 className="text-xl font-semibold mb-8 text-slate-200 flex items-center gap-3">
              <span className="w-2 h-2 bg-emerald-500 rounded-full"></span>
              What I Do
            </h3>
            <div className="grid grid-cols-1 gap-6">
              {[
                { 
                  title: 'Web Development', 
                  desc: 'Creating responsive and performant web applications with modern technologies.',
                  icon: '💻',
                  color: 'from-blue-500/20 to-blue-600/20'
                },
                { 
                  title: 'UI/UX Design', 
                  desc: 'Designing intuitive user interfaces with focus on user experience and accessibility.',
                  icon: '🎨',
                  color: 'from-purple-500/20 to-purple-600/20'
                },
                { 
                  title: 'API Development', 
                  desc: 'Building robust and scalable RESTful APIs for web and mobile applications.',
                  icon: '🔌',
                  color: 'from-emerald-500/20 to-emerald-600/20'
                },
                { 
                  title: 'DevOps & Deployment', 
                  desc: 'Setting up deployment pipelines and cloud infrastructure for applications.',
                  icon: '☁️',
                  color: 'from-cyan-500/20 to-cyan-600/20'
                }
              ].map((service, index) => (
                <div 
                  key={index} 
                  className={`bg-gradient-to-r ${service.color} border border-slate-700 p-6 rounded-xl 
                             backdrop-blur-sm hover:border-blue-500/50 transition-all duration-300 group`}
                >
                  <div className="flex items-start gap-4">
                    <div className="text-2xl flex-shrink-0">{service.icon}</div>
                    <div>
                      <h4 className="text-lg font-semibold mb-2 text-slate-200 group-hover:text-white transition-colors">
                        {service.title}
                      </h4>
                      <p className="text-slate-400 text-sm leading-relaxed">{service.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16 pt-12 border-t border-slate-700/50">
          {[
            { number: '50+', label: 'Projects Completed' },
            { number: '5+', label: 'Years Experience' },
            { number: '20+', label: 'Technologies' },
            { number: '100%', label: 'Client Satisfaction' }
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-emerald-500 mb-2">
                {stat.number}
              </div>
              <div className="text-slate-400 text-sm font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
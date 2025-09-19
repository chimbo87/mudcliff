import React from "react";
import profilepic from "../../../assets/images/archford.jpg";
import { useNavigate } from "react-router-dom";
const AboutHero = () => {
  const navigate = useNavigate();
  return (
    <section className="py-16 px-4 md:px-8 lg:px-16 bg-gray-900">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Image Section */}
        <div className="order-2 md:order-1 flex justify-center md:justify-end">
          <div className="relative">
            <div className="w-64 h-64 md:w-80 md:h-80 bg-gradient-to-br from-blue-500 to-green-500 rounded-full overflow-hidden shadow-2xl shadow-blue-500/20">
              <img
                src={profilepic}
                alt="Archford"
                className="w-full h-full object-cover mix-blend-overlay opacity-90"
              />
            </div>
            <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-gradient-to-tr from-blue-500 to-green-500 rounded-full -z-10 opacity-70"></div>
            <div className="absolute -top-4 -left-4 w-24 h-24 bg-gradient-to-tr from-blue-500 to-green-500 rounded-full -z-10 opacity-50"></div>
          </div>
        </div>

        {/* Content Section */}
        <div className="order-1 md:order-2 text-center md:text-left">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">
            Hi, I'm{" "}
            <span className="bg-gradient-to-r from-blue-500 to-green-500 bg-clip-text text-transparent">
              Archford
            </span>
          </h1>
          <h2 className="text-xl md:text-2xl text-slate-300 mb-6">
            Full Stack Developer & UI/UX Enthusiast
          </h2>
          <p className="text-slate-400 mb-8 leading-relaxed">
            I create digital experiences that are fast, accessible, and visually
            appealing. With a passion for both design and development, I bridge
            the gap between aesthetics and functionality.
          </p>
          <div className="flex flex-wrap gap-4 justify-center md:justify-start">
            <button
              className="px-6 py-3 bg-gradient-to-r from-blue-500 to-green-500 text-white rounded-lg font-medium hover:shadow-lg hover:shadow-blue-500/30 transition-all duration-300"
              onClick={() => navigate("/contacts")}
            >
              Contact Me
            </button>
            <button
              className="px-6 py-3 border border-slate-700 text-slate-300 rounded-lg font-medium hover:border-blue-500 hover:text-blue-400 transition-all duration-300"
              onClick={() => navigate("/projects")}
            >
              My Projects
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutHero;

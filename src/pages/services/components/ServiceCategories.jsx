// ServiceCategories.jsx
import React, { useState } from 'react';

const ServiceCategories = ({ activeTab, setActiveTab }) => {
  const categories = [
    {
      id: 'electrical',
      name: 'Electrical',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      )
    },
    {
      id: 'plumbing',
      name: 'Plumbing',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 12L3 9m3 3l3 3m-3-3h18m-9 0h9M3 15l3 3m-3-3l3-3m-3 3h18" />
        </svg>
      )
    },
    {
      id: 'solar',
      name: 'Solar',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
        </svg>
      )
    }
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col md:flex-row justify-center space-y-2 md:space-y-0 md:space-x-4">
        {categories.map((category) => (
          <button
            key={category.id}
            className={`flex items-center justify-center px-6 py-3 rounded-lg transition-all duration-300 ${
              activeTab === category.id
                ? 'bg-[#1E40AF] text-white shadow-lg'
                : 'bg-white text-gray-700 border border-gray-200 hover:bg-gray-50'
            }`}
            onClick={() => setActiveTab(category.id)}
          >
            <span className="mr-2">{category.icon}</span>
            <span className="font-medium">{category.name}</span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default ServiceCategories;
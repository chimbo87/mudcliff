import React, { useState } from 'react';
import ServicesHero from "./components/ServicesHero";
import ServiceCategories from "./components/ServiceCategories";
import ServiceCards from "./components/ServiceCards";
import ProcessSteps from './components/ProcessSteps';
import FAQSection from './components/FAQSection';
import QuoteForm from './components/QuoteForm';

function Services() {
    const [activeTab, setActiveTab] = useState('electrical');
  return (
    <div className="min-h-screen bg-[#F8FAFC]">
      <ServicesHero />
      <ServiceCategories activeTab={activeTab} setActiveTab={setActiveTab} />
      <ServiceCards activeTab={activeTab} />
      <ProcessSteps/>
      <FAQSection/>
      <QuoteForm/>
    </div>
  );
}

export default Services;

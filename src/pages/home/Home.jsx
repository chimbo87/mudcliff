import React from "react";
import Hero from "./components/Hero";
import ServicesOverview from "./components/ServicesOverview";
import WhyChooseUs from "./components/WhyChooseUs";
import FeaturedProjects from "./components/FeaturedProjects";
import StatisticsSection from "./components/StatisticsSection";
import CustomerTestimonials from "./components/CustomerTestimonials";


function Home() {
  return (
    <div>
      <Hero />
      <ServicesOverview/>
      <WhyChooseUs/>
      <FeaturedProjects/>
      <StatisticsSection/>
      <CustomerTestimonials/>
    </div>
  );
}

export default Home;

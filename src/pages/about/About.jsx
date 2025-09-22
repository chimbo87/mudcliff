import React from "react";
import AboutHero from "./components/AboutHero";
import CompanyStory from "./components/CompanyStory";
import MissionVision from "./components/MissionVision";
import TeamMembers from "./components/TeamMembers";
import CompanyValues from "./components/CompanyValues";
import CTASection from "./components/CTASection";
function About() {
  return (
    <div>
      <AboutHero />
      <MissionVision/>
      <CompanyStory />
      <TeamMembers/>
      <CompanyValues/>
      <CTASection/>
    </div>
  );
}

export default About;

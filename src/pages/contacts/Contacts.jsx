import React from "react";
import ContactHero from "./components/ContactHero";
import ContactInformation from "./components/ContactInformation";
import ContactForm from "./components/ContactForm";
import ServiceAreasMap from "./components/ServiceAreasMap";
import BusinessHours from "./components/BusinessHours.JSX";
// import SocialMediaLinks from "./components/SocialMediaLinks";

function Contacts() {
  return (
    <div>
      <ContactHero />
      <ContactInformation />
      <ContactForm />
      <ServiceAreasMap/>
      <BusinessHours/>
      {/* <SocialMediaLinks/> */}
    </div>
  );
}

export default Contacts;

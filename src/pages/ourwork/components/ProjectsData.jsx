import project01 from "../../../assets/images/mud01.jpg";
import project02 from "../../../assets/images/mud02.jpg";
import project03 from "../../../assets/images/mud03.jpg";
import project04 from "../../../assets/images/mud04.jpg";
import project05 from "../../../assets/images/mud05.jpg";
import project06 from "../../../assets/images/mud06.jpg";
import project07 from "../../../assets/images/mud07.jpg";
import project08 from "../../../assets/images/mud08.jpg";
import project09 from "../../../assets/images/mud09.jpg";
import project10 from "../../../assets/images/mud10.jpg";
import project11 from "../../../assets/images/mud12.jpg";
import project12 from "../../../assets/images/mud13.jpg";
import project13 from "../../../assets/images/mud14.jpg";
import project14 from "../../../assets/images/mud15.jpg";
import project15 from "../../../assets/images/mud16.jpg";
import project16 from "../../../assets/images/mud17.jpg";


export const projectsData = [
  {
    id: 1,
    category: "electrical",
    title: "Complete Home Electrical Rewiring",
    location: "Avondale, Harare",
    client: "Peter R",
    duration: "2 weeks",
    budget: "R 45,000",
    status: "completed",
    completionDate: "2024-08-15",
    startDate: "2024-08-01",
    description:
      "Complete electrical system upgrade with modern safety features, smart home integration, and energy-efficient lighting throughout the property.",
    fullDescription:
      "This comprehensive electrical rewiring project involved replacing outdated wiring with modern, code-compliant electrical systems. We installed new circuit breakers, upgraded the main electrical panel, and implemented smart home features including automated lighting and energy monitoring. The project included installation of LED lighting throughout, additional power outlets in strategic locations, and dedicated circuits for high-power appliances. Safety features such as GFCI outlets in wet areas and surge protection were also implemented.",
    images: [project08, project02, project03, project04],
    features: [
      "Complete electrical system upgrade",
      "Smart home integration",
      "Energy-efficient LED lighting",
      "Safety circuit breakers",
      "Surge protection installation",
    ],
    materials: ["Copper Wiring", "LED Fixtures", "Smart Switches", "Circuit Breakers"],
    contractor: "Professional Electricians",
    architect: "Electrical Design Specialists",
    tags: ["rewiring", "smart-home", "safety-upgrade", "energy-efficient"],
  },
  {
    id: 2,
    category: "plumbing",
    title: "Modern Plumbing System Installation",
    location: "Borrowdale, Harare",
    client: "Tafadzwa M",
    duration: "3 weeks",
    budget: "R 68,000",
    status: "completed",
    completionDate: "2024-09-10",
    startDate: "2024-08-20",
    description:
      "Complete plumbing system overhaul with PEX piping, water-efficient fixtures, and advanced water heating solutions for optimal performance.",
    fullDescription:
      "This plumbing installation involved replacing old galvanized pipes with modern PEX piping system throughout the property. We installed water-efficient fixtures including low-flow toilets and faucets, and implemented a tankless water heater for on-demand hot water. The project included proper drainage solutions, backflow prevention devices, and water pressure regulation systems. We also added shut-off valves in strategic locations for easy maintenance and future upgrades.",
      images: [project08, project06, project07, project08],
    features: [
      "PEX piping system installation",
      "Tankless water heater",
      "Water-efficient fixtures",
      "Advanced drainage solutions",
      "Backflow prevention system",
    ],
    materials: ["PEX Piping", "Brass Fixtures", "Tankless Heater", "PVC Drainage"],
    contractor: "Expert Plumbing Team",
    architect: "Plumbing System Design",
    tags: ["plumbing-overhaul", "water-efficient", "tankless-heater", "modern-piping"],
  },
  {
    id: 3,
    category: "solar",
    title: "Residential Solar Power System",
    location: "Allington, Harare",
    client: "Williams Family",
    duration: "4 weeks",
    budget: "R 120,000",
    status: "completed",
    completionDate: "2024-07-20",
    startDate: "2024-06-25",
    description:
      "Complete solar power installation with battery backup, grid-tie capability, and energy monitoring system for maximum energy independence.",
    fullDescription:
      "This solar installation project involved designing and installing a comprehensive 5kW solar power system with battery backup. The system includes high-efficiency solar panels, hybrid inverter, lithium-ion battery storage, and smart energy monitoring. We installed roof-mounted panels with optimal orientation for maximum sunlight exposure and implemented a grid-tie system for net metering. The installation includes weatherproof conduits, proper grounding, and remote monitoring capabilities.",
      images: [project09, project02, project03, project04],
    features: [
      "5kW solar panel array",
      "Lithium-ion battery backup",
      "Grid-tie capability",
      "Smart energy monitoring",
      "Remote system management",
    ],
    materials: ["Solar Panels", "Lithium Batteries", "Hybrid Inverter", "Monitoring System"],
    contractor: "Solar Installation Experts",
    architect: "Renewable Energy Design",
    tags: ["solar-power", "battery-backup", "grid-tie", "energy-independence"],
  },
  {
    id: 4,
    category: "maintenance",
    title: "Commercial Electrical Maintenance",
    location: "Highlands, Harare",
    client: "Peterson Property",
    duration: "1 week",
    budget: "R 25,000",
    status: "completed",
    completionDate: "2024-06-15",
    startDate: "2024-06-08",
    description:
      "Routine electrical maintenance and safety inspection for commercial property including system testing and preventive maintenance.",
    fullDescription:
      "This comprehensive electrical maintenance service included thorough inspection of all electrical systems, testing of circuit breakers and safety devices, and preventive maintenance tasks. We identified and repaired potential hazards, replaced worn components, and optimized system performance. The service included thermal imaging to detect hot spots, load testing of electrical circuits, and updating safety protocols. Regular maintenance ensures system reliability and prevents costly downtime.",
      images: [project10, project02, project03, project04],
    features: [
      "Complete system inspection",
      "Safety device testing",
      "Preventive maintenance",
      "Thermal imaging analysis",
      "Load testing and optimization",
    ],
    materials: ["Replacement Parts", "Testing Equipment", "Safety Devices", "Maintenance Tools"],
    contractor: "Maintenance Specialists",
    architect: "Safety Compliance Team",
    tags: ["commercial-maintenance", "safety-inspection", "preventive-care", "system-optimization"],
  },
  {
    id: 5,
    category: "electrical",
    title: "Smart Home Automation System",
    location: "Msasa Park, Harare",
    client: "Tinashe G",
    duration: "2 weeks",
    budget: "R 55,000",
    status: "completed",
    completionDate: "2024-08-30",
    startDate: "2024-08-16",
    description:
      "Advanced home automation installation with smart lighting, climate control, security integration, and voice command capabilities.",
    fullDescription:
      "This smart home installation integrated lighting control, HVAC management, security systems, and entertainment controls into a unified automation platform. We installed smart switches, motion sensors, smart thermostats, and integrated security cameras with remote access. The system features voice control compatibility, scheduled automation routines, and energy usage monitoring. All components were professionally installed with proper wiring and network integration for reliable operation.",
      images: [project13, project02, project03, project04],
    features: [
      "Whole-home automation",
      "Voice control integration",
      "Energy monitoring system",
      "Security system integration",
      "Remote access capability",
    ],
    materials: ["Smart Switches", "Motion Sensors", "Automation Hub", "Network Equipment"],
    contractor: "Automation Specialists",
    architect: "Smart Home Design",
    tags: ["home-automation", "smart-lighting", "voice-control", "energy-monitoring"],
  },
  {
    id: 6,
    category: "plumbing",
    title: "Emergency Plumbing Repair Service",
    location: "Eastly, Harare",
    client: "George M",
    duration: "1 day",
    budget: "R 8,500",
    status: "completed",
    completionDate: "2024-05-25",
    startDate: "2024-05-25",
    description:
      "24/7 emergency plumbing service for burst pipe repair, water damage mitigation, and system restoration with minimal disruption.",
    fullDescription:
      "This emergency service responded to a burst pipe situation that caused significant water damage. Our team quickly isolated the water supply, repaired the damaged section, and implemented water extraction and drying procedures. We replaced the compromised piping with upgraded materials, restored water service, and conducted pressure testing to ensure system integrity. The rapid response prevented further damage and restored normal operation within hours.",
      images: [project12, project02, project03, project04],
    features: [
      "24/7 emergency response",
      "Burst pipe repair",
      "Water damage mitigation",
      "Rapid system restoration",
      "Preventive upgrades",
    ],
    materials: ["Emergency Repair Kit", "Water Extraction Equipment", "Replacement Piping", "Sealants"],
    contractor: "Emergency Response Team",
    architect: "Rapid Repair Specialists",
    tags: ["emergency-repair", "burst-pipe", "water-damage", "rapid-response"],
  },
  {
    id: 7,
    category: "solar",
    title: "Solar Water Heating Installation",
    location: "Zimre Park, Harare",
    client: "Thompson H",
    duration: "3 days",
    budget: "R 35,000",
    status: "completed",
    completionDate: "2024-09-05",
    startDate: "2024-09-02",
    description:
      "Efficient solar water heating system installation with thermal panels, storage tank, and backup electric heating for consistent hot water supply.",
    fullDescription:
      "This solar water heating project involved installing thermal solar panels on the roof, connecting them to an insulated storage tank, and integrating with the existing water heating system. The system includes temperature control, circulation pumps, and backup electric heating element for cloudy days. We installed proper mounting hardware, weatherproof connections, and monitoring systems to track energy savings and system performance.",
      images: [project14, project02, project03, project04],
    features: [
      "Thermal solar panels",
      "Insulated storage tank",
      "Backup heating system",
      "Temperature monitoring",
      "Energy savings tracking",
    ],
    materials: ["Solar Thermal Panels", "Storage Tank", "Circulation System", "Control Unit"],
    contractor: "Solar Thermal Experts",
    architect: "Heating System Design",
    tags: ["solar-water-heating", "energy-saving", "thermal-panels", "hot-water"],
  },
  {
    id: 8,
    category: "maintenance",
    title: "Routine Plumbing System Check",
    location: "Norton, Harare",
    client: "Davis R",
    duration: "1 day",
    budget: "R 6,500",
    status: "completed",
    completionDate: "2024-07-12",
    startDate: "2024-07-12",
    description:
      "Comprehensive plumbing maintenance including leak detection, pressure testing, fixture inspection, and preventive care recommendations.",
    fullDescription:
      "This routine maintenance service included thorough inspection of all plumbing components, testing water pressure, checking for leaks, and assessing fixture condition. We cleaned drains, inspected water heater performance, tested shut-off valves, and provided recommendations for preventive maintenance. The service helps identify potential issues before they become major problems, ensuring system reliability and water efficiency.",
      images: [project15, project02, project03, project04],
    features: [
      "Complete system inspection",
      "Leak detection service",
      "Water pressure testing",
      "Fixture performance check",
      "Preventive care plan",
    ],
    materials: ["Inspection Tools", "Testing Equipment", "Cleaning Supplies", "Replacement Parts"],
    contractor: "Maintenance Professionals",
    architect: "Preventive Care Team",
    tags: ["routine-maintenance", "leak-detection", "pressure-testing", "preventive-care"],
  },
  {
    id: 9,
    category: "electrical",
    title: "Commercial Lighting Upgrade",
    location: "CBD, Harare",
    client: "Office Complex Ltd",
    duration: "1 week",
    budget: "R 85,000",
    status: "completed",
    completionDate: "2024-10-15",
    startDate: "2024-10-08",
    description:
      "Energy-efficient LED lighting upgrade for commercial office space with smart controls, motion sensors, and daylight harvesting technology.",
    fullDescription:
      "This lighting upgrade project replaced outdated fluorescent lighting with modern LED fixtures throughout the commercial office space. We installed smart lighting controls with occupancy sensors, daylight harvesting technology, and programmable scheduling. The upgrade significantly reduced energy consumption while improving lighting quality and employee comfort. The project included proper disposal of old fixtures and minimal disruption to business operations.",
      images: [project16, project02, project03, project04],
    features: [
      "LED lighting installation",
      "Smart control system",
      "Motion sensor integration",
      "Daylight harvesting",
      "Energy usage monitoring",
    ],
    materials: ["LED Fixtures", "Smart Controls", "Sensors", "Control Wiring"],
    contractor: "Commercial Electrical Team",
    architect: "Lighting Design Specialists",
    tags: ["commercial-lighting", "LED-upgrade", "smart-controls", "energy-efficiency"],
  },
  {
    id: 10,
    category: "plumbing",
    title: "Bathroom Plumbing Renovation",
    location: "Borrowdale, Harare",
    client: "Wilson H",
    duration: "2 weeks",
    budget: "R 42,000",
    status: "completed",
    completionDate: "2024-05-15",
    startDate: "2024-05-01",
    description:
      "Complete bathroom plumbing renovation with modern fixtures, efficient water distribution, and upgraded drainage systems.",
    fullDescription:
      "This bathroom plumbing renovation involved replacing all plumbing lines, installing modern water-efficient fixtures, and upgrading drainage systems. We installed new supply lines, drainage pipes, and ventilation systems to meet current building codes. The project included installation of a new toilet, shower system, vanity, and proper waterproofing to prevent future issues. All work was completed with attention to detail and long-term reliability.",
      images: [project02, project02, project03, project04],
    features: [
      "Complete pipe replacement",
      "Water-efficient fixtures",
      "Upgraded drainage system",
      "Professional waterproofing",
      "Code compliance upgrade",
    ],
    materials: ["Copper Piping", "PVC Drainage", "Modern Fixtures", "Waterproofing Membrane"],
    contractor: "Plumbing Renovation Team",
    architect: "Bathroom Design Specialists",
    tags: ["bathroom-renovation", "pipe-replacement", "water-efficient", "drainage-upgrade"],
  },
  {
    id: 11,
    category: "solar",
    title: "Off-Grid Solar System",
    location: "Greendale, Harare",
    client: "Martinez Family",
    duration: "3 weeks",
    budget: "R 95,000",
    status: "completed",
    completionDate: "2024-04-18",
    startDate: "2024-03-28",
    description:
      "Complete off-grid solar power system with generator backup for remote property, providing reliable electricity independent of utility grid.",
    fullDescription:
      "This off-grid solar installation provides complete energy independence for a remote property. The system includes solar panels, battery bank, charge controller, inverter, and backup generator. We designed the system to meet all electrical needs including lighting, appliances, and water pumping. The installation includes proper battery maintenance systems, generator integration, and remote monitoring capabilities for system performance tracking.",
      images: [project06, project02, project03, project04],
    features: [
      "Complete off-grid capability",
      "Large battery storage",
      "Generator backup system",
      "Remote monitoring",
      "All-weather reliability",
    ],
    materials: ["Solar Array", "Battery Bank", "Inverter System", "Backup Generator"],
    contractor: "Off-Grid Specialists",
    architect: "Remote Power Design",
    tags: ["off-grid", "battery-storage", "generator-backup", "remote-power"],
  },
  {
    id: 12,
    category: "maintenance",
    title: "Electrical Safety Inspection",
    location: "Allington, Harare",
    client: "Garcia P",
    duration: "1 day",
    budget: "R 4,500",
    status: "completed",
    completionDate: "2024-03-28",
    startDate: "2024-03-28",
    description:
      "Comprehensive electrical safety inspection including wiring assessment, outlet testing, circuit analysis, and safety compliance verification.",
    fullDescription:
      "This electrical safety inspection service involved thorough examination of all electrical components including wiring condition, outlet safety, circuit breaker functionality, and grounding systems. We used specialized testing equipment to identify potential hazards, measured voltage and current levels, and verified compliance with safety standards. The service included detailed reporting with recommendations for improvements and necessary repairs.",
      images: [project03, project02, project03, project04],
    features: [
      "Complete safety assessment",
      "Wiring condition analysis",
      "Circuit testing",
      "Grounding verification",
      "Compliance certification",
    ],
    materials: ["Testing Equipment", "Safety Gear", "Measurement Tools", "Reporting Software"],
    contractor: "Safety Inspection Team",
    architect: "Compliance Specialists",
    tags: ["safety-inspection", "compliance-check", "hazard-assessment", "electrical-testing"],
  },
  {
    id: 13,
    category: "electrical",
    title: "Data Center Power Backup",
    location: "Warren Park, Harare",
    client: "Tech Solutions Ltd",
    duration: "2 weeks",
    budget: "R 150,000",
    status: "completed",
    completionDate: "2024-08-30",
    startDate: "2024-08-16",
    description:
      "Uninterruptible power supply system for data center with automatic transfer switches, generator backup, and power conditioning.",
    fullDescription:
      "This critical power system installation ensures continuous operation of a data center during power outages. The project included UPS systems, automatic transfer switches, backup generators, and power conditioning equipment. We installed proper grounding, surge protection, and monitoring systems to maintain power quality and reliability. The system provides seamless transition during utility power failures with zero downtime.",
      images: [project10, project02, project03, project04],
    features: [
      "UPS system installation",
      "Automatic transfer switches",
      "Generator integration",
      "Power conditioning",
      "24/7 monitoring",
    ],
    materials: ["UPS Units", "Transfer Switches", "Generators", "Monitoring System"],
    contractor: "Critical Power Team",
    architect: "Data Center Power Design",
    tags: ["data-center", "UPS-system", "power-backup", "critical-power"],
  },
  {
    id: 14,
    category: "plumbing",
    title: "Water Filtration System Installation",
    location: "Kuwadzana, Harare",
    client: "Community Center",
    duration: "3 days",
    budget: "R 28,000",
    status: "completed",
    completionDate: "2024-08-30",
    startDate: "2024-08-27",
    description:
      "Whole-house water filtration system with multi-stage purification, UV sterilization, and mineral enhancement for clean, safe drinking water.",
    fullDescription:
      "This water filtration installation provides clean, safe drinking water throughout the property. The system includes sediment filtration, carbon filtration, reverse osmosis, and UV sterilization stages. We installed proper bypass valves for maintenance, pressure gauges for monitoring, and automatic shut-off features. The system improves water quality while maintaining adequate water pressure for all household needs.",
      images: [project16, project02, project03, project04],
    features: [
      "Multi-stage filtration",
      "UV sterilization",
      "Reverse osmosis",
      "Automatic monitoring",
      "Easy maintenance access",
    ],
    materials: ["Filtration Units", "UV Sterilizer", "RO System", "Monitoring Equipment"],
    contractor: "Water Treatment Specialists",
    architect: "Filtration System Design",
    tags: ["water-filtration", "purification", "UV-sterilization", "clean-water"],
  },
  {
    id: 15,
    category: "solar",
    title: "Agricultural Solar Pumping System",
    location: "Highglen, Harare",
    client: "Farm Enterprises",
    duration: "2 weeks",
    budget: "R 75,000",
    status: "completed",
    completionDate: "2024-08-30",
    startDate: "2024-08-16",
    description:
      "Solar-powered water pumping system for agricultural irrigation with automatic controls, remote monitoring, and efficient water distribution.",
    fullDescription:
      "This solar pumping system provides reliable water supply for agricultural irrigation without grid electricity dependency. The installation includes solar panels, DC water pump, controller system, and storage tank. We implemented automatic operation based on sunlight availability, remote monitoring capabilities, and efficient water distribution to irrigation zones. The system reduces operational costs and provides sustainable water management.",
      images: [project12, project02, project03, project04],
    features: [
      "Solar-powered pumping",
      "Automatic operation",
      "Remote monitoring",
      "Efficient irrigation",
      "Cost-saving operation",
    ],
    materials: ["Solar Panels", "DC Pump", "Controller", "Storage Tank"],
    contractor: "Agricultural Solar Team",
    architect: "Irrigation System Design",
    tags: ["solar-pumping", "agricultural", "irrigation", "water-management"],
  },
  {
    id: 16,
    category: "maintenance",
    title: "Solar System Performance Check",
    location: "Chitungwiza, Harare",
    client: "Davis R",
    duration: "1 day",
    budget: "R 7,500",
    status: "completed",
    completionDate: "2024-07-12",
    startDate: "2024-07-12",
    description:
      "Comprehensive solar system maintenance including panel cleaning, performance testing, component inspection, and efficiency optimization.",
    fullDescription:
      "This solar maintenance service ensures optimal performance of existing solar installations. We cleaned solar panels, tested system output, inspected all components for wear or damage, and optimized system settings. The service included checking connections, verifying inverter operation, testing battery health, and updating monitoring software. Regular maintenance maximizes energy production and extends system lifespan.",
      images: [project01, project02, project03, project04],
    features: [
      "Panel cleaning and inspection",
      "Performance testing",
      "Component health check",
      "System optimization",
      "Efficiency reporting",
    ],
    materials: ["Cleaning Equipment", "Testing Tools", "Replacement Parts", "Monitoring Software"],
    contractor: "Solar Maintenance Team",
    architect: "Performance Optimization",
    tags: ["solar-maintenance", "performance-check", "panel-cleaning", "system-optimization"],
  },
  {
    id: 17,
    category: "electrical",
    title: "Industrial Motor Control Installation",
    location: "Ruwa, Harare",
    client: "Manufacturing Plant",
    duration: "3 weeks",
    budget: "R 120,000",
    status: "completed",
    completionDate: "2024-07-12",
    startDate: "2024-06-21",
    description:
      "Advanced motor control system for industrial machinery with variable frequency drives, safety interlocks, and remote operation capabilities.",
    fullDescription:
      "This industrial electrical project involved installing sophisticated motor control systems for manufacturing equipment. We implemented variable frequency drives for energy efficiency, safety interlock systems for operator protection, and remote monitoring capabilities. The installation included proper motor starters, control panels, and integration with existing automation systems. All work complied with industrial safety standards and regulations.",
      images: [project02, project02, project03, project04],
    features: [
      "Variable frequency drives",
      "Safety interlock systems",
      "Remote operation",
      "Energy efficiency optimization",
      "Industrial compliance",
    ],
    materials: ["VFD Units", "Control Panels", "Safety Devices", "Monitoring System"],
    contractor: "Industrial Electrical Team",
    architect: "Motor Control Design",
    tags: ["industrial", "motor-control", "VFD", "safety-systems"],
  },
  {
    id: 18,
    category: "plumbing",
    title: "Commercial Kitchen Plumbing",
    location: "Zimre, Harare",
    client: "Restaurant Chain",
    duration: "2 weeks",
    budget: "R 65,000",
    status: "completed",
    completionDate: "2024-08-15",
    startDate: "2024-08-01",
    description:
      "Specialized plumbing installation for commercial kitchen with grease traps, high-volume fixtures, and compliance with health regulations.",
    fullDescription:
      "This commercial kitchen plumbing project involved installing specialized systems for food service operations. We installed commercial-grade sinks, dishwashers, grease traps, and high-volume water heaters. The system includes proper drainage for food waste, ventilation for steam removal, and compliance with health department regulations. All installations were designed for heavy use and easy maintenance.",
      images: [project09, project02, project03, project04],
    features: [
      "Commercial-grade fixtures",
      "Grease trap installation",
      "Health code compliance",
      "High-volume water heating",
      "Easy maintenance design",
    ],
    materials: ["Commercial Fixtures", "Grease Traps", "Heavy-duty Piping", "Ventilation Systems"],
    contractor: "Commercial Plumbing Team",
    architect: "Kitchen System Design",
    tags: ["commercial-kitchen", "grease-trap", "health-compliance", "high-volume"],
  },
  {
    id: 19,
    category: "solar",
    title: "Hybrid Solar-Inverter System",
    location: "Southerton, Harare",
    client: "Miller E",
    duration: "3 weeks",
    budget: "R 110,000",
    status: "completed",
    completionDate: "2024-05-25",
    startDate: "2024-05-04",
    description:
      "Advanced hybrid solar system with grid-tie capability, battery storage, and smart energy management for optimal power usage and cost savings.",
    fullDescription:
      "This hybrid solar installation combines solar power generation with battery storage and grid connectivity for maximum flexibility. The system automatically switches between power sources based on availability and cost, prioritizing solar energy and battery usage. We installed smart energy management systems, remote monitoring, and automatic grid synchronization. The system provides uninterrupted power while maximizing energy savings.",
      images: [project08, project02, project03, project04],
    features: [
      "Hybrid inverter technology",
      "Smart energy management",
      "Automatic source switching",
      "Remote system control",
      "Maximum cost savings",
    ],
    materials: ["Hybrid Inverter", "Battery Storage", "Monitoring System", "Grid-tie Equipment"],
    contractor: "Hybrid System Specialists",
    architect: "Energy Management Design",
    tags: ["hybrid-system", "smart-energy", "grid-tie", "cost-optimization"],
  },
];

// Helper functions for working with project data
export const getProjectsByCategory = (category) => {
  if (category === "all") return projectsData;
  return projectsData.filter((project) => project.category === category);
};

export const getProjectById = (id) => {
  return projectsData.find((project) => project.id === parseInt(id));
};

export const getRecentProjects = (count = 6) => {
  return projectsData
    .sort((a, b) => new Date(b.completionDate) - new Date(a.completionDate))
    .slice(0, count);
};

export const getFeaturedProjects = () => {
  return projectsData.filter(
    (project) =>
      ["completed"].includes(project.status) &&
      parseFloat(project.budget.replace(/[^\d.]/g, "")) > 30000
  );
};

export const getProjectsByBudgetRange = (minBudget, maxBudget) => {
  return projectsData.filter((project) => {
    const budget = parseFloat(project.budget.replace(/[^\d.]/g, ""));
    return budget >= minBudget && budget <= maxBudget;
  });
};

// Categories configuration for electrical, plumbing, solar, and maintenance
export const categories = [
  { id: "all", name: "All Services", icon: "⚡" },
  { id: "electrical", name: "Electrical", icon: "💡" },
  { id: "plumbing", name: "Plumbing", icon: "🔧" },
  { id: "solar", name: "Solar", icon: "☀️" },
  { id: "maintenance", name: "Maintenance", icon: "🛠️" },
];

export default projectsData;
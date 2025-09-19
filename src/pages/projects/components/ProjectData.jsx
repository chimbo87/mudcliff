import project01 from "../../../assets/images/thread.png";
import gigbee from "../../../assets/images/gigbee.png";
import gigbee01 from "../../../assets/images/gigbee01.png";
import gigbee02 from "../../../assets/images/gigbee02.png";
import gigbee03 from "../../../assets/images/gigbee03.png";

import trots01 from "../../../assets/images/trots01.png";
import trots02 from "../../../assets/images/trots02.png";
import trots03 from "../../../assets/images/trots03.png";
import trots04 from "../../../assets/images/trots04.png";

import radid01 from "../../../assets/images/radid01.png";
import radid02 from "../../../assets/images/radid02.png";
import radid03 from "../../../assets/images/radid03.png";
import radid04 from "../../../assets/images/radid04.png";

import mara01 from "../../../assets/images/mara01.png";
import mara02 from "../../../assets/images/mara02.png";
import mara03 from "../../../assets/images/mara03.png";
import mara04 from "../../../assets/images/mara04.png";

import gol01 from "../../../assets/images/gol01.png";
import gol02 from "../../../assets/images/gol02.png";
import gol03 from "../../../assets/images/gol03.png";
import gol04 from "../../../assets/images/gol04.png";
const projects = [
  {
    id: 1,
    name: "Job Freelance App",
    shortDescription: "A comprehensive freelance marketplace connecting clients with skilled professionals",
    fullDescription: "This freelance platform enables seamless collaboration between clients and freelancers with features like real-time messaging, project management tools, secure payment processing, and portfolio showcasing. The application includes advanced job matching algorithms, review systems, and a user-friendly dashboard for managing projects, proposals, and earnings.",
    images: [
      gigbee,
      gigbee01,
      gigbee02,
      gigbee03
    ],
    techStack: [
      { name: "React", category: "Frontend", color: "#61DAFB" },
      { name: "Node.js", category: "Backend", color: "#339933" },
      { name: "MongoDB", category: "Database", color: "#47A248" },
      { name: "Tailwind CSS", category: "Styling", color: "#38B2AC" },
      { name: "Express.js", category: "Backend", color: "#000000" },
      { name: "JWT", category: "Authentication", color: "#000000" },
      { name: "Socket.io", category: "Real-time", color: "#010101" },
      { name: "Cloudinary", category: "Media Storage", color: "#3448C5" }
    ],
    features: [
      {
        icon: "👤",
        title: "User Authentication",
        description: "Secure registration and login system with role-based access for clients and freelancers"
      },
      {
        icon: "💬",
        title: "Real-time Chat",
        description: "Instant messaging system for seamless communication between clients and freelancers"
      },
      {
        icon: "📋",
        title: "Project Management",
        description: "Complete project tracking with milestones, deadlines, and progress monitoring"
      },
      {
        icon: "💰",
        title: "Secure Payments",
        description: "Escrow payment system with secure transactions and dispute resolution"
      },
      {
        icon: "⭐",
        title: "Rating System",
        description: "Comprehensive review and rating system to build trust and reputation"
      },
      {
        icon: "🔍",
        title: "Smart Job Matching",
        description: "AI-powered job recommendations based on skills and preferences"
      },
      {
        icon: "📄",
        title: "Resume Builder",
        description: "Professional resume generator with customizable templates"
      },
      {
        icon: "📊",
        title: "Dashboard Analytics",
        description: "Detailed earnings reports and performance analytics for freelancers"
      }
    ],
    liveLink: "https://simba-2nc0.onrender.com/login",
    githubLink: "#",
    status: "Inprogress",
    duration: "3 months",
    role: "Full Stack Developer",
    challenges: [
      "Implementing real-time notifications and chat functionality",
      "Building secure payment escrow system with refund capabilities",
      "Developing efficient job matching algorithms",
      "Ensuring data privacy and security for user information"
    ],
    learnings: [
      "Real-time communication implementation with Socket.io",
      "Payment gateway integration and financial transaction security",
      "Advanced MongoDB queries for complex data relationships",
      "User experience optimization for multi-role platforms"
    ]
  },

  {
    id: 2,
    name: "Business Marketing App",
    shortDescription: "A dynamic marketing platform for businesses to list services, post adverts, and engage with their community.",
    fullDescription: "Trotsbasket is a comprehensive marketing and community engagement platform designed to bridge the gap between businesses and customers. Businesses can create detailed listings, publish promotional adverts, and gain valuable insights through customer reviews and ratings. The platform fosters community interaction via a built-in blog and enhances business visibility through a searchable public directory. I was responsible for architecting and developing the entire responsive frontend, ensuring an intuitive and seamless user experience across all devices.",
    images: [
      trots01,
      trots02,
      trots03,
      trots04
    ],
    techStack: [
      { name: "React", category: "Frontend", color: "#61DAFB" },
      { name: "TypeScript", category: "Frontend", color: "#3178C6" },
      { name: "Context API", category: "State Management", color: "#6D31C6" },
      { name: "React Query", category: "Data Fetching", color: "#FF4154" },
      { name: "Tailwind CSS", category: "Styling", color: "#38B2AC" },
      { name: "React Hook Form", category: "Forms", color: "#EC5990" },
      { name: "Framer Motion", category: "Animation", color: "#000000" }
    ],
    features: [
      {
        icon: "🏢",
        title: "Business Listings",
        description: "Businesses can create and manage detailed public profiles with services, hours, and contact info."
      },
      {
        icon: "📢",
        title: "Advert Management",
        description: "Create, schedule, and publish targeted promotional campaigns to reach a wider audience."
      },
      {
        icon: "⭐",
        title: "Reviews & Ratings",
        description: "Customers can leave feedback and ratings, providing social proof and valuable insights for businesses."
      },
      {
        icon: "📈",
        title: "Insights Dashboard",
        description: "Businesses get analytics on advert performance, customer engagement, and review trends."
      },
      {
        icon: "📝",
        title: "Community Blog",
        description: "Publish articles and updates to engage the community and improve SEO visibility."
      },
      {
        icon: "📱",
        title: "Fully Responsive",
        description: "A seamless experience on desktops, tablets, and mobile devices, built with a mobile-first approach."
      }
    ],
    liveLink: "https://trotsbasket.com/",
    githubLink: "#",
    status: "Inprogess",
    duration: "2 months",
    role: "Frontend Developer",
    challenges: [
      "Designing and implementing a complex, multi-step form for business listings and advert creation.",
      "Ensuring a consistent and responsive layout across a wide variety of device screen sizes.",
      "Managing complex state for user data, business profiles, and advert campaigns efficiently.",
      "Optimizing frontend performance for fast loading times and smooth interactions."
    ],
    learnings: [
      "Advanced state management patterns using React Context and hooks for a large-scale application.",
      "Mastering responsive design principles and CSS frameworks (Tailwind CSS) to build fluid layouts.",
      "Implementing efficient data fetching, caching, and synchronization with React Query.",
      "Enhancing user experience with modern UI/UX practices and subtle animations using Framer Motion."
    ]
  }
,
{
  id: 3,
  name: "Radid Construction",
  shortDescription: "A modern, responsive website for a construction company showcasing their portfolio and services.",
  fullDescription: "A sleek and professional website designed for EliteBuild Construction to establish a strong online presence. The site effectively communicates the company's expertise, showcases their high-quality projects through an interactive gallery, and provides an easy way for potential clients to get in touch. I developed the entire frontend, focusing on a clean design, smooth animations, and a fully responsive layout that looks impeccable on all devices.",
  images: [
    radid01,
    radid02,
    radid03,
    radid04
  ],
  techStack: [
    { name: "React", category: "Frontend", color: "#61DAFB" },
    { name: "Tailwind CSS", category: "Styling", color: "#38B2AC" },
    { name: "DaisyUI", category: "Component Library", color: "#5A0FC8" },
    { name: "Framer Motion", category: "Animation", color: "#000000" },
    { name: "React Hook Form", category: "Forms", color: "#EC5990" },
    { name: "React Icons", category: "Icons", color: "#E91E63" }
  ],
  features: [
    {
      icon: "🏗️",
      title: "Service Showcase",
      description: "A dedicated section to highlight the company's core construction and renovation services."
    },
    {
      icon: "🖼️",
      title: "Project Gallery",
      description: "An interactive, filterable gallery to showcase completed construction projects with high-quality images."
    },
    {
      icon: "📱",
      title: "Fully Responsive",
      description: "A flawlessly responsive design that ensures a perfect experience on desktop, tablet, and mobile."
    },
    {
      icon: "✨",
      title: "Smooth Animations",
      description: "Engaging and polished page transitions and micro-interactions using Framer Motion."
    },
    {
      icon: "📧",
      title: "Contact Form",
      description: "A user-friendly contact form with validation for generating new client leads."
    },
    {
      icon: "⚡",
      title: "Fast Performance",
      description: "Optimized for speed and SEO, ensuring quick load times and better search engine visibility."
    }
  ],
  liveLink: "https://radid-constructions.vercel.app/",
  githubLink: "#",
  status: "Completed",
  duration: "2 Weeks",
  role: "Frontend Developer",
  challenges: [
    "Designing and implementing a responsive image gallery that maintains aspect ratios across different screen sizes.",
    "Creating meaningful and performant animations with Framer Motion without compromising site speed.",
    "Utilizing DaisyUI's component classes effectively alongside custom Tailwind CSS styling for a unique design.",
    "Ensuring the website conveys strength and professionalism while remaining modern and approachable."
  ],
  learnings: [
    "Advanced techniques for combining Tailwind CSS with component libraries like DaisyUI.",
    "Mastering Framer Motion for creating complex animations and gesture-based interactions.",
    "Best practices for image optimization and responsive design in a media-heavy website.",
    "Improving SEO and accessibility for business websites to reach a wider audience."
  ]
},
{
  id: 4,
  name: "E-commerce store",
  shortDescription: "A custom-built e-commerce platform for handmade goods, facilitating sales through WhatsApp.",
  fullDescription: "A bespoke e-commerce website developed for a client specializing in handmade crafts. The platform features a clean, product-focused design with a grid display, advanced filtering, and a fully functional cart. The unique checkout process is handled directly via WhatsApp, where users can send their cart to discuss customizations and get price quotations. I was responsible for the full design, frontend development, and deployment, creating a seamless bridge between browsing products and initiating a personalized conversation with the business owner.",
  images: [
    mara01,
    mara02,
    mara03,
    mara04
  ],
  techStack: [
    { name: "React", category: "Frontend", color: "#61DAFB" },
    { name: "JavaScript (ES6+)", category: "Frontend", color: "#F7DF1E" },
    { name: "Tailwind CSS", category: "Styling", color: "#38B2AC" },
    { name: "Neon Postgres", category: "Database", color: "#336791" },
    { name: "Vercel", category: "Deployment", color: "#000000" },
    { name: "WhatsApp API", category: "Integration", color: "#25D366" }
  ],
  features: [
    {
      icon: "🛍️",
      title: "Product Catalog",
      description: "Beautiful grid layout showcasing products with high-quality images and detailed descriptions."
    },
    {
      icon: "🛒",
      title: "Add to Cart",
      description: "Full cart functionality allowing users to add, remove, and update quantities of items."
    },
    {
      icon: "🔍",
      title: "Search & Filters",
      description: "Advanced filtering by category, price, and other attributes to easily find products."
    },
    {
      icon: "💬",
      title: "WhatsApp Checkout",
      description: "Directly send the cart contents via WhatsApp to get a quote and complete the purchase."
    },
    {
      icon: "📱",
      title: "Fully Responsive",
      description: "A seamless shopping experience on any device, from desktop to mobile."
    },
    {
      icon: "⚡",
      title: "Fast Performance",
      description: "Optimized and deployed on Vercel for lightning-fast load times and a smooth user experience."
    }
  ],
  liveLink: "https://www.marangasei-market.co.za/",
  githubLink: "#",
  status: "Completed",
  duration: "1 months",
  role: "Full Stack Developer",
  challenges: [
    "Designing an intuitive user flow that seamlessly transitions from the website to a WhatsApp conversation.",
    "Managing complex client-side state for the shopping cart without a dedicated state management library.",
    "Ensuring the product data from the Neon Postgres database was efficiently fetched and displayed.",
    "Creating a responsive product grid that adapts beautifully to all screen sizes."
  ],
  learnings: [
    "Advanced React hooks for state and effect management in a real-world application.",
    "Integration of third-party APIs (WhatsApp) to create unique user workflows.",
    "Deployment and serverless database management using Vercel and Neon Postgres.",
    "Client communication and project customization based on specific requirements and feedback."
  ]
},
{
  id: 5,
  name: "Gold4africa",
  shortDescription: "An elegant and luxurious website for a gold investment firm, designed to build trust and capture user interest.",
  fullDescription: "A premium, high-converting website for a gold trading and investment company. The design emphasizes luxury, stability, and trust through a sophisticated color palette, smooth animations, and a polished user experience. The 7-page site effectively communicates the value proposition of investing in gold, showcases market insights, and provides easy pathways for potential clients to engage. I developed the entire frontend, focusing on performance, visual appeal, and creating a seamless journey from visitor to lead.",
  images: [
    gol01,
    gol02,
    gol03,
    gol04
  ],
  techStack: [
    { name: "React", category: "Frontend", color: "#61DAFB" },
    { name: "JavaScript (ES6+)", category: "Frontend", color: "#F7DF1E" },
    { name: "Tailwind CSS", category: "Styling", color: "#38B2AC" },
    { name: "Framer Motion", category: "Animation", color: "#000000" },
    { name: "React Router", category: "Routing", color: "#CA4245" },
    { name: "React Icons", category: "Icons", color: "#E91E63" }
  ],
  features: [
    {
      icon: "✨",
      title: "Immersive Animations",
      description: "Subtle and elegant page transitions and scroll-triggered animations using Framer Motion to enhance user engagement."
    },
    {
      icon: "🏛️",
      title: "Multi-page Layout",
      description: "A comprehensive 7-page structure including Home, About, Services, Market, Gallery, Blog, and Contact."
    },
    {
      icon: "📊",
      title: "Live Gold Price Ticker",
      description: "A dynamic display of real-time (or daily) gold prices to provide immediate value to visitors."
    },
    {
      icon: "📱",
      title: "Fully Responsive",
      description: "A flawless experience across all devices, ensuring accessibility for all potential clients."
    },
    {
      icon: "✉️",
      title: "Lead Capture Forms",
      description: "Strategically placed contact forms and call-to-actions to convert visitors into qualified leads."
    },
    {
      icon: "⚡",
      title: "Optimized Performance",
      description: "Fast-loading pages and smooth interactions, crucial for maintaining a premium user experience."
    }
  ],
  liveLink: "https://www.gold4africa.com/",
  githubLink: "#",
  status: "Completed",
  duration: "1 week",
  role: "Frontend Developer",
  challenges: [
    "Creating a visual identity that conveys luxury and trustworthiness through UI and animations.",
    "Managing complex page transitions and animation sequences across 7 different pages without performance loss.",
    "Designing a responsive layout that maintains its elegance and impact on both mobile and desktop views.",
    "Integrating dynamic content, like a price ticker, in a way that feels seamless and professional."
  ],
  learnings: [
    "Advanced animation choreography and timing with Framer Motion to create a premium feel.",
    "Best practices for multi-page React application structure and routing.",
    "Techniques for optimizing website performance and load times for image-heavy, animated sites.",
    "UI/UX principles for designing high-stakes financial or investment websites that require building user trust."
  ]
}
];

export default projects;
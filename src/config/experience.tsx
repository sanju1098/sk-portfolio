import russellLogo from "../assets/Images/RTLogo.jpg";
import unisysLogo from "../assets/Images/UnisysLogo.jpg";
import hsiplLogo from "../assets/Images/HSIPLLogo.jpg";
import stcLogo from "../assets/Images/SCTLogo.jpg";

export const timeLineExperiences = [
  { years: "May 2025 – Present", company: "Russell Tobin" },
  { years: "Jun 2023  - Apr 2025", company: "Unisys India Pvt Ltd" },
  { years: "Oct 2021 – Jun 2023", company: "Harlalka Services India Pvt Ltd" },
  {
    years: "Feb 2021 – Sep 2021",
    company: "Sixth Circle Technologies Pvt Ltd",
  },
];

export const workExperiences = [
  {
    company:
      "Russell Tobin Associates Staffing Solutions (Client: Morgan Stanley).",
    logo: russellLogo,
    role: "Senior Application Development Engineer.",
    timeline: "May 2025  - Present",
    location: "Bangalore, Karnataka.",
    projects: [
      {
        name: "Tech Events Portal",
        responsibilities: [
          "Architected and delivered a scalable event management platform in Morgan Stanley’s ETS team with ShadCN UI, and built a dynamic multi-step form using React Hook Form and Zod, ensuring 100% validation coverage and reducing errors.",
          "Optimized API efficiency with TanStack Query for data fetching, caching, and eliminating redundant requests, improving load times, and implemented role-based access control with protected routes to enable secure, permission-based CRUD operations.",
          "Enhanced event discoverability and user experience by developing dynamic calendar & list views, implementing advanced client-side filters (debounced search, date, location), and adding CSV export functionality for events and user data.",
        ],
      },
    ],
  },
  {
    company: "Unisys India Private Limited.",
    logo: unisysLogo,
    role: "Application Development Engineer.",
    timeline: "June 2023  - April 2025",
    location: "Bangalore, Karnataka.",
    projects: [
      {
        name: "Airline Retailing Platform.",
        responsibilities: [
          "Developed a responsive airline order tracking interface using React.js and TypeScript to render and manage IATA OrderView RS (v21.3.4) XML data, enabling real-time status visualization and robust form-driven workflows.",
          "Improved application performance and scalability by implementing route-based code splitting, optimizing Webpack builds, and introducing a structured order flow with progress tracking and XML validation.",
        ],
      },
      {
        name: "AI-Powered Conversational Chat UI & Admin UI (Digital Engineer).",
        responsibilities: [
          "Reduced build time by optimizing with Vite.js and deployed the application to Azure using Docker multi-stage builds in collaboration with the DevOps team.",
          "Developed a real-time AI-powered chat interface using Next.js and Vercel’s useChat SDK, improving response accuracy through API tuning and ensuring session persistence and chat history management.",
          "Enhanced overall user experience by improving API response times and implementing a feedback system that contributed to higher customer satisfaction.",
        ],
      },
      {
        name: "Unisys Component Library (UI UX Framework).",
        responsibilities: [
          "Delivered a React-based design system with 75+ reusable, WCAG-compliant components, integrated with Storybook for live documentation and tested using Jest and React Testing Library.",
          "Created and deployed demo applications for Web and Mobile (including React Native templates) to showcase cross-platform component usage to internal teams.",
          "Implemented global theming support for user-level customization and conducted peer code reviews, contributing to faster UI delivery and improved consistency across frontend modules.",
        ],
      },
    ],
  },
  {
    company: "Harlalka Services India Private Limited.",
    logo: hsiplLogo,
    role: "Frontend Developer.",
    timeline: "October 2021 – June 2023",
    location: "Bangalore, Karnataka.",
    projects: [
      {
        name: " VMware CSP Market Place (Client: VMWare)",
        responsibilities: [
          "Developed responsive and reusable UI components using React.js, HTML5, CSS3, and VMware Clarity Design System with Storybook, enhancing performance, maintainability, and cross-team component documentation.",
          "Implemented robust form validation and error handling across class and functional components for version control and EULA flows, while debugging critical issues in the publisher module to improve code quality and application performance.",
          "Improved accessibility compliance with NVDA and WCAG 2.0 standards, raising adherence from 50% to 80% by resolving 100+ ARIA and contrast issues, and delivered incremental features in Agile sprints following full SDLC practices.",
        ],
      },
    ],
  },
  {
    company: "Sixth Circle Technologies Pvt Ltd.",
    logo: stcLogo,
    role: "Intern Web Developer.",
    timeline: "February 2021 – September 2021",
    location: "Bangalore, Karnataka.",
    projects: [
      {
        name: " Custom Local Retail Market Aggregator Platform (Custom LMAP)",
        responsibilities: [
          "Built end-to-end product and order management features by designing PostgreSQL schemas, developing Django REST API layers, and integrating full-stack UI screens for seamless data interaction",
        ],
      },
    ],
  },
];

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
          "Architected and delivered a scalable event management platform in Morgan Stanley’s ETS, built with modular ShadCN UI components and a dynamic multi-step form using React Hook Form + Zod for complete validation and seamless UX.",
          "Optimized frontend performance using TanStack Query with efficient API caching, dynamic calendar/list views, and responsive client-side filters.",
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
          "Developed a real-time airline order creation and tracking UI for Iberia Airline using React.js and TypeScript, integrating the IATA Airline Retailing Order View Schema (v21.3.4) and RESTful APIs within a microservices architecture.",
          "Enhanced page performance by 25% through route-based lazy loading and dynamic code splitting, while mentoring junior engineers on Webpack and modular UI design, improving sprint delivery efficiency.",
        ],
      },
      {
        name: "AI-Powered Conversational Chat UI (Digital Engineer)",
        responsibilities: [
          "Built an AI-powered conversational chat interface using Next.js, Vercel, and useChat SDK, handling 1K+ daily messages with source-cited responses.",
          "Improved API response time by 2s using React Query caching/retries and increased CSAT by 15% through an integrated feedback system.",
          "Optimized build size and streamlined CI/CD using Docker multi-stage builds, deploying efficiently to Azure with the DevOps team.",
        ],
      },
      {
        name: "Unisys Component Library (UI UX Framework).",
        responsibilities: [
          "Delivered a React-based internal component library (npm package/design system) with 75+ WCAG-compliant UI components, showcased in Storybook, reducing UI development time and improving cross-team consistency.",
          "Acted as Scrum Master and frontend developer, facilitating sprints, resolving blockers, and conducting code reviews — boosting team velocity by 20% and ensuring consistent, high-quality UI delivery.",
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
          "Developed responsive, reusable UI components using React.js, HTML5, CSS3, and VMware Clarity Design System, documented via Storybook for consistency and maintainability.",
          "Migrated class-based to functional components, added robust form validation and error handling for version control and EULA workflows, improving reliability and accuracy.",
          "Improved WCAG 2.0 accessibility compliance through NVDA testing and resolution of 100+ ARIA/contrast issues, while actively contributing to Agile sprints and SDLC practices.",
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

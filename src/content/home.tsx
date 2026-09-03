import {
  Code,
  ShieldCheck,
  Paintbrush,
  Layers,
  Server,
  Sparkles,
} from "lucide-react";

export const stats = [
  { label: "Recent Build", value: "PromptStack — AI Prompt Platform" },
  { label: "Backend Focus", value: "Node.js, Express & REST APIs" },
  { label: "Strengths", value: "Scalable UI Systems & Reusable Components" },
  { label: "Currently Exploring", value: "AI-Powered Product Development" },
];

export const services = [
  {
    icon: <Code className="text-accent-foreground" size={24} />,
    title: "Frontend Development",
    description:
      "Building responsive, accessible, and performant user interfaces with modern frameworks.",
  },
  {
    icon: <Server className="text-accent-foreground" size={24} />,
    title: "Backend Development",
    description:
      "Building practical backend applications and REST APIs with Node.js, Express, databases, and secure authentication.",
  },
  {
    icon: <Sparkles className="text-accent-foreground" size={24} />,
    title: "AI-Powered Applications",
    description:
      "Integrating LLMs and AI APIs to build intelligent features, chatbots, and AI-driven products.",
  },
  {
    icon: <Layers className="text-accent-foreground" size={24} />,
    title: "Technical Architecture",
    description:
      "Designing scalable and maintainable application architecture using modern tools and best practices.",
  },
  {
    icon: <Paintbrush className="text-accent-foreground" size={24} />,
    title: "UI/UX & Design Systems",
    description:
      "Crafting intuitive interfaces and reusable component libraries for consistent, scalable UIs.",
  },
  {
    icon: <ShieldCheck className="text-accent-foreground" size={24} />,
    title: "Testing & Performance",
    description:
      "Writing robust tests with Jest and React Testing Library while optimizing for speed and scalability.",
  },
];

export const featuredProjects = [
  {
    name: "PromptStack",
    subtitle: "AI prompt management platform",
    category: ["Full-stack", "AI"],
    live: "https://prompt-stack-ai.vercel.app",
    repo: "https://github.com/sanju1098/prompt-stack",
    images: [
      {
        src: "https://res.cloudinary.com/dwsalphhy/image/upload/v1788337410/d2174917-383f-4e01-bf65-148f1f802276.png",
        alt: "PromptStack UI",
      },
    ],
    description:
      "Full-stack AI prompt management platform to create, organize, search, test and reuse prompt templates with dynamic variables, a template marketplace, workspace analytics and an interactive playground powered by Gemini and Groq.",
    stack: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "shadcn/ui",
      "MongoDB",
      "Mongoose",
      "Gemini",
      "Groq",
    ],
  },
  {
    name: "Incident Management System",
    subtitle: "Production-ready incident management API",
    category: ["Backend", "Node.js", "Express"],
    live: "",
    repo: "https://github.com/sanju1098/incident-management-system",
    images: [
      {
        src: "https://res.cloudinary.com/dwsalphhy/image/upload/v1788337601/f34b4e34-d9bd-4d0e-98f4-4c696aabf54c.png",
        alt: "Incident Management System API",
      },
    ],
    description:
      "Production-ready backend API for incident management with JWT authentication, refresh tokens, role-based access control, user and team management, secure file uploads, validation, and protected REST endpoints.",
    stack: [
      "Node.js",
      "Express.js",
      "MongoDB",
      "Mongoose",
      "JWT",
      "Zod",
      "Cloudinary",
      "REST APIs",
    ],
  },
  {
    name: "Chatuuu",
    subtitle: "AI conversational chat application",
    category: ["AI", "Frontend"],
    live: "https://chatuuu-ai.vercel.app",
    repo: "https://github.com/sanju1098/chatuuu",
    images: [
      {
        src: "https://res.cloudinary.com/dwsalphhy/image/upload/v1788349571/27f392ad-1075-46f6-9d06-e724c221fc29.png",
        alt: "Chatuuu UI",
      },
    ],
    description:
      "Modern AI chat application with streaming responses, model selection, file and image attachments, reasoning and source displays, and reusable conversational UI components built for AI-powered chat experiences.",
    stack: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Vercel AI SDK",
      "Radix UI",
      "AI SDK React",
    ],
  },
];

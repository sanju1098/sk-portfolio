import {
  Code2,
  Globe,
  Palette,
  Gauge,
  FlaskConical,
  TerminalSquare,
  Database,
  GitBranch,
} from "lucide-react";

export const skillCategories = [
  {
    title: "Programming Languages",
    icon: <Code2 className="w-8 h-8 text-orange-500" />,
    description: "Core frontend programming languages and fundamentals",
    skills: [
      {
        name: "JavaScript",
        icon: (
          <div className="w-12 h-12 bg-yellow-400 rounded flex items-center justify-center text-black font-bold text-lg">
            JS
          </div>
        ),
      },
      {
        name: "TypeScript",
        icon: (
          <div className="w-12 h-12 bg-blue-600 rounded flex items-center justify-center text-white font-bold text-lg">
            TS
          </div>
        ),
      },
      {
        name: "HTML5",
        icon: (
          <div className="w-12 h-12 bg-orange-600 rounded flex items-center justify-center text-white font-bold text-sm">
            HTML
          </div>
        ),
      },
      {
        name: "CSS3",
        icon: (
          <div className="w-12 h-12 bg-blue-500 rounded flex items-center justify-center text-white font-bold text-lg">
            CSS
          </div>
        ),
      },
    ],
  },

  {
    title: "Frontend Frameworks",
    icon: <Globe className="w-8 h-8 text-blue-500" />,
    description: "Modern React ecosystem and state management tools",
    skills: [
      { name: "React", icon: "⚛️" },
      { name: "Next.js", icon: "▲" },
      {
        name: "Redux Toolkit",
        icon: (
          <div className="w-12 h-12 bg-purple-600 rounded flex items-center justify-center text-white font-bold text-sm">
            Redux
          </div>
        ),
      },
      {
        name: "TanStack Query",
        icon: (
          <div className="w-12 h-12 bg-[#fc5e65] rounded flex items-center justify-center text-white font-bold text-xs">
            Query
          </div>
        ),
      },
    ],
  },

  {
    title: "UI Libraries & Styling",
    icon: <Palette className="w-8 h-8 text-purple-500" />,
    description: "Component libraries and modern styling approaches",
    skills: [
      { name: "Tailwind CSS", icon: "🎨" },
      { name: "ShadCN UI", icon: "🎪" },
      { name: "Material UI", icon: "🎯" },
      { name: "SASS", icon: "💗" },
      { name: "Styled Components", icon: "💅" },
    ],
  },

  {
    title: "Accessibility & Performance",
    icon: <Gauge className="w-8 h-8 text-green-500" />,
    description: "Web standards, accessibility, and performance optimization",
    skills: [
      {
        name: "WCAG Guidelines",
        icon: (
          <div className="w-12 h-12 bg-green-600 rounded flex items-center justify-center text-white font-bold text-xs">
            A11Y
          </div>
        ),
      },
      { name: "NVDA Screen Reader", icon: "🎧" },
      { name: "SEO", icon: "🔍" },
      { name: "Lazy Loading", icon: "⚡" },
      { name: "Code Splitting", icon: "📦" },
      { name: "Web Vitals", icon: "📊" },
      { name: "Lighthouse", icon: "🏮" },
    ],
  },

  {
    title: "Testing & Code Quality",
    icon: <FlaskConical className="w-8 h-8 text-indigo-500" />,
    description: "Testing libraries and code quality tools",
    skills: [
      { name: "Storybook", icon: "📖" },
      { name: "Jest", icon: "🃏" },
      { name: "React Testing Library", icon: "🧪" },
      { name: "ESLint & Prettier", icon: "✨" },
    ],
  },

  {
    title: "Build Tools & DevOps",
    icon: <TerminalSquare className="w-8 h-8 text-yellow-500" />,
    description: "Build systems, deployment, and environment setup",
    skills: [
      { name: "Vite", icon: "⚡" },
      { name: "Webpack", icon: "📦" },
      { name: "Docker", icon: "🐳" },
      { name: "NGINX", icon: "🟢" },
    ],
  },

  {
    title: "APIs, Databases & Tools",
    icon: <Database className="w-8 h-8 text-teal-500" />,
    description: "Data handling, APIs, and design tools",
    skills: [
      { name: "REST APIs", icon: "🌐" },
      { name: "MongoDB", icon: "🍃" },
      { name: "Postman", icon: "📮" },
      { name: "AI SDK", icon: "🤖" },
      { name: "Figma", icon: "🎨" },
    ],
  },

  {
    title: "Version Control & Package Managers",
    icon: <GitBranch className="w-8 h-8 text-red-500" />,
    description: "Collaboration tools and dependency management",
    skills: [
      { name: "Git & GitHub", icon: "🐙" },
      { name: "NPM", icon: "📦" },
      { name: "Yarn", icon: "🧶" },
    ],
  },
];

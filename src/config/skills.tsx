import {
  Code2,
  Globe,
  FlaskConical,
  TerminalSquare,
  Database,
  Palette,
} from "lucide-react";

export const skillCategories = [
  {
    title: "Programming Languages",
    icon: <Code2 className="w-8 h-8 text-orange-500" />,
    description: "Core frontend languages",
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
    description: "Modern React ecosystem",
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
      { name: "Tanstack Query", icon: "🔄" },
    ],
  },
  {
    title: "Styling & Design",
    icon: <Palette className="w-8 h-8 text-purple-500" />,
    description: "Modern styling solutions",
    skills: [
      { name: "Tailwind CSS", icon: "🎨" },
      { name: "SASS", icon: "💗" },
      { name: "Styled Components", icon: "💅" },
      { name: "Material UI", icon: "🎯" },
      { name: "Shadcn UI", icon: "🎪" },
    ],
  },
  {
    title: "Testing & Quality",
    icon: <FlaskConical className="w-8 h-8 text-green-500" />,
    description: "Testing and code quality",
    skills: [
      { name: "Jest", icon: "🃏" },
      { name: "React Testing Library", icon: "🧪" },
      {
        name: "WCAG Guidelines",
        icon: (
          <div className="w-12 h-12 bg-green-600 rounded flex items-center justify-center text-white font-bold text-xs">
            A11Y
          </div>
        ),
      },
      { name: "ESLint & Prettier", icon: "✨" },
    ],
  },
  {
    title: "Build Tools & DevOps",
    icon: <TerminalSquare className="w-8 h-8 text-yellow-500" />,
    description: "Development and deployment tools",
    skills: [
      { name: "Vite", icon: "⚡" },
      { name: "Webpack", icon: "📦" },
      { name: "Docker", icon: "🐳" },
      { name: "Git & GitHub", icon: "🐙" },
      { name: "Storybook", icon: "📖" },
    ],
  },
  {
    title: "Additional Technologies",
    icon: <Database className="w-8 h-8 text-teal-500" />,
    description: "APIs and additional tools",
    skills: [
      { name: "REST APIs", icon: "🌐" },
      { name: "PostgreSQL", icon: "🐘" },
      { name: "MongoDB", icon: "🍃" },
      { name: "Postman", icon: "📮" },
      { name: "Figma", icon: "🎨" },
    ],
  },
];

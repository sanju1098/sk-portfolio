import { Code2, Globe, FlaskConical, TerminalSquare } from "lucide-react";

export const skillCategories = [
  {
    title: "Programming Languages",
    icon: <Code2 className="w-8 h-8 text-orange-500" />,
    skills: [
      { name: "JavaScript", level: 95, icon: "🟨" },
      { name: "TypeScript", level: 90, icon: "🔷" },
      { name: "HTML", level: 85, icon: "☕" },
      { name: "CSS", level: 80, icon: "🐍" },
    ],
  },
  {
    title: "Frontend Frameworks & Libraries",
    icon: <Globe className="w-8 h-8 text-teal-500" />,
    skills: [
      { name: "React", level: 95, icon: "⚛️" },
      { name: "Next.js", level: 85, icon: "▲" },
      { name: "Redux Toolkit", level: 90, icon: "🔄" },
      { name: "Tanstack Query", level: 90, icon: "🔄" },
      { name: "Material UI", level: 90, icon: "🔄" },
      { name: "Shadcn UI", level: 90, icon: "🔄" },
      { name: "Tailwind CSS", level: 90, icon: "🎨" },
      { name: "Sass", level: 90, icon: "🎨" },
      { name: "Styled Components", level: 90, icon: "🎨" },
    ],
  },
  {
    title: "Testing & Accessibility",
    icon: <FlaskConical className="w-8 h-8 text-red-500" />,
    skills: [
      { name: "Jest", level: 85, icon: "🃏" },
      { name: "React Testing Library", level: 85, icon: "🧪" },
      { name: "WCAG", level: 80, icon: "♿" },
    ],
  },
  {
    title: "Build Tools & Utilities",
    icon: <TerminalSquare className="w-8 h-8 text-yellow-500" />,
    skills: [
      { name: "Vite", level: 90, icon: "⚡" },
      { name: "Webpack", level: 85, icon: "📦" },
      { name: "Storybook", level: 80, icon: "📖" },
      { name: "Docker", level: 80, icon: "📮" },
    ],
  },
];

export const additionalTech = [
  { name: "PostgreSQL", icon: "🗼" },
  { name: "MongoDB", icon: "🗼" },
  { name: "Babel", icon: "🗼" },
  { name: "REST APIs", icon: "🌐" },
  { name: "ESLint & Prettier", icon: "🌐" },
  { name: "Microservices", icon: "🔧" },
  { name: "i18next ", icon: "🔧" },
  { name: "Agile/Scrum", icon: "📋" },
  { name: "Jira", icon: "📊" },
  { name: "Figma", icon: "🎨" },
  { name: "Git & GitHub", icon: "🎨" },
  { name: "Postman", icon: "🎨" },
  { name: "Design Systems", icon: "⚡" },
  { name: "Performance Optimization", icon: "⚡" },
];

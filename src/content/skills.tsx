import {
  AISDKIcon,
  CodeSplitIcon,
  CSSIcon,
  DockerIcon,
  ESLintIcon,
  FigmaIcon,
  GitIcon,
  GitHubActionsIcon,
  HTMLIcon,
  JavaScriptIcon,
  JestIcon,
  LazyLoadingIcon,
  LightHouseIcon,
  MaterialUIIcon,
  MongoDBIcon,
  NextJSIcon,
  NginxIcon,
  NpmIcon,
  NvdaIcon,
  PnpmIcon,
  PostmanIcon,
  PrettierIcon,
  ReactIcon,
  ReactQueryIcon,
  ReactTestingLibraryIcon,
  RedisIcon,
  ReduxIcon,
  RestApiIcon,
  SassIcon,
  SEOIcon,
  ShadcnUIIcon,
  StorybookIcon,
  StyledComponentsIcon,
  TailwindIcon,
  TypeScriptIcon,
  ViteIcon,
  WebpackIcon,
  WebVitalsIcon,
  YarnIcon,
} from "@/components/icons";
import {
  Code2,
  Globe,
  Server,
  TerminalSquare,
  FlaskConical,
} from "lucide-react";
import { FaNodeJs } from "react-icons/fa";
import { SiExpress } from "react-icons/si";

export const skillCategories = [
  {
    title: "Languages & Markup",
    icon: <Code2 className="w-8 h-8 text-orange-500" />,
    description: "Core languages and markup fundamentals for the web",
    skills: [
      { name: "HTML5", icon: <HTMLIcon /> },
      { name: "CSS3", icon: <CSSIcon /> },
      { name: "SASS", icon: <SassIcon /> },
      { name: "JavaScript", icon: <JavaScriptIcon /> },
      { name: "TypeScript", icon: <TypeScriptIcon /> },
    ],
  },

  {
    title: "Frontend",
    icon: <Globe className="w-8 h-8 text-blue-500" />,
    description:
      "UI frameworks, styling, state management, and build tooling for building modern interfaces",
    skills: [
      { name: "React", icon: <ReactIcon /> },
      { name: "Next.js", icon: <NextJSIcon /> },
      { name: "Redux Toolkit", icon: <ReduxIcon /> },
      { name: "TanStack Query", icon: <ReactQueryIcon /> },
      { name: "Tailwind CSS", icon: <TailwindIcon /> },
      { name: "ShadCN UI", icon: <ShadcnUIIcon /> },
      { name: "Material UI", icon: <MaterialUIIcon /> },
      { name: "Styled Components", icon: <StyledComponentsIcon /> },
      { name: "Vite", icon: <ViteIcon /> },
      { name: "Webpack", icon: <WebpackIcon /> },
    ],
  },

  {
    title: "Backend & Database",
    icon: <Server className="w-8 h-8 text-green-600" />,
    description:
      "Server-side runtimes, frameworks, APIs, and databases for building and persisting application data",
    skills: [
      { name: "Node.js", icon: <FaNodeJs /> },
      { name: "Express.js", icon: <SiExpress /> },
      { name: "REST APIs", icon: <RestApiIcon /> },
      { name: "MongoDB", icon: <MongoDBIcon /> },
      { name: "Redis", icon: <RedisIcon /> },
      { name: "AI SDK", icon: <AISDKIcon /> },
      { name: "NGINX", icon: <NginxIcon /> },
      { name: "Docker", icon: <DockerIcon /> },
    ],
  },

  {
    title: "Tools & Platforms",
    icon: <TerminalSquare className="w-8 h-8 text-yellow-500" />,
    description:
      "Version control, package managers, design, and productivity tools used day-to-day",
    skills: [
      { name: "Git & GitHub", icon: <GitIcon /> },
      { name: "GitHub Actions", icon: <GitHubActionsIcon /> },
      { name: "Npm", icon: <NpmIcon /> },
      { name: "Yarn", icon: <YarnIcon /> },
      { name: "Pnpm", icon: <PnpmIcon /> },
      { name: "Postman", icon: <PostmanIcon /> },
      { name: "Figma", icon: <FigmaIcon /> },
      { name: "SEO", icon: <SEOIcon /> },
      { name: "Lazy Loading", icon: <LazyLoadingIcon /> },
      { name: "Code Splitting", icon: <CodeSplitIcon /> },
      { name: "Web Vitals", icon: <WebVitalsIcon /> },
      { name: "Lighthouse", icon: <LightHouseIcon /> },
      {
        name: "WCAG Guidelines",
        icon: (
          <div className="w-12 h-12 bg-green-600 rounded flex items-center justify-center text-white font-bold text-xs">
            A11Y
          </div>
        ),
      },
      { name: "NVDA Screen Reader", icon: <NvdaIcon /> },
    ],
  },

  {
    title: "Testing",
    icon: <FlaskConical className="w-8 h-8 text-indigo-500" />,
    description: "Testing libraries and code quality tools",
    skills: [
      { name: "Storybook", icon: <StorybookIcon /> },
      { name: "Jest", icon: <JestIcon /> },
      { name: "React Testing Library", icon: <ReactTestingLibraryIcon /> },
      { name: "ESLint", icon: <ESLintIcon /> },
      { name: "Prettier", icon: <PrettierIcon /> },
    ],
  },
];

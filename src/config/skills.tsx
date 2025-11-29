import {
  AISDKIcon,
  CodeSplitIcon,
  CSSIcon,
  DockerIcon,
  ESLintIcon,
  FigmaIcon,
  GitIcon,
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
  PostmanIcon,
  PrettierIcon,
  ReactIcon,
  ReactQueryIcon,
  ReactTestingLibraryIcon,
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
        icon: <JavaScriptIcon />,
      },
      {
        name: "TypeScript",
        icon: <TypeScriptIcon />,
      },
      {
        name: "HTML5",
        icon: <HTMLIcon />,
      },
      {
        name: "CSS3",
        icon: <CSSIcon />,
      },
    ],
  },

  {
    title: "Frontend Frameworks",
    icon: <Globe className="w-8 h-8 text-blue-500" />,
    description: "Modern React ecosystem and state management tools",
    skills: [
      { name: "React", icon: <ReactIcon /> },
      { name: "Next.js", icon: <NextJSIcon /> },
      {
        name: "Redux Toolkit",
        icon: <ReduxIcon />,
      },
      {
        name: "TanStack Query",
        icon: <ReactQueryIcon />,
      },
    ],
  },

  {
    title: "UI Libraries & Styling",
    icon: <Palette className="w-8 h-8 text-purple-500" />,
    description: "Component libraries and modern styling approaches",
    skills: [
      { name: "Tailwind CSS", icon: <TailwindIcon /> },
      { name: "ShadCN UI", icon: <ShadcnUIIcon /> },
      { name: "Material UI", icon: <MaterialUIIcon /> },
      { name: "SASS", icon: <SassIcon /> },
      { name: "Styled Components", icon: <StyledComponentsIcon /> },
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
      { name: "NVDA Screen Reader", icon: <NvdaIcon /> },
      { name: "SEO", icon: <SEOIcon /> },
      { name: "Lazy Loading", icon: <LazyLoadingIcon /> },
      { name: "Code Splitting", icon: <CodeSplitIcon /> },
      { name: "Web Vitals", icon: <WebVitalsIcon /> },
      { name: "Lighthouse", icon: <LightHouseIcon /> },
    ],
  },

  {
    title: "Testing & Code Quality",
    icon: <FlaskConical className="w-8 h-8 text-indigo-500" />,
    description: "Testing libraries and code quality tools",
    skills: [
      { name: "Storybook", icon: <StorybookIcon /> },
      { name: "Jest", icon: <JestIcon /> },
      { name: "React Testing Library", icon: <ReactTestingLibraryIcon /> },
      { name: "Prettier", icon: <PrettierIcon /> },
      { name: "ESLint & Prettier", icon: <ESLintIcon /> },
    ],
  },

  {
    title: "Build Tools & DevOps",
    icon: <TerminalSquare className="w-8 h-8 text-yellow-500" />,
    description: "Build systems, deployment, and environment setup",
    skills: [
      { name: "Vite", icon: <ViteIcon /> },
      { name: "Webpack", icon: <WebpackIcon /> },
      { name: "Docker", icon: <DockerIcon /> },
      { name: "NGINX", icon: <NginxIcon /> },
    ],
  },

  {
    title: "APIs, Databases & Tools",
    icon: <Database className="w-8 h-8 text-teal-500" />,
    description: "Data handling, APIs, and design tools",
    skills: [
      { name: "REST APIs", icon: <RestApiIcon /> },
      { name: "MongoDB", icon: <MongoDBIcon /> },
      { name: "Postman", icon: <PostmanIcon /> },
      { name: "AI SDK", icon: <AISDKIcon /> },
      { name: "Figma", icon: <FigmaIcon /> },
    ],
  },

  {
    title: "Version Control & Package Managers",
    icon: <GitBranch className="w-8 h-8 text-red-500" />,
    description: "Collaboration tools and dependency management",
    skills: [
      { name: "Git & GitHub", icon: <GitIcon /> },
      { name: "NPM", icon: <NpmIcon /> },
      { name: "Yarn", icon: <YarnIcon /> },
    ],
  },
];

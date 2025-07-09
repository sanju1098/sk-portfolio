import { skillCategories } from "@/config/skills";

const Skills = () => {
  return (
    <div className="bg-white dark:bg-gray-900 transition-colors duration-300">
      <div className="pt-20">
        <section id="skills" className="py-10 bg-gray-50 dark:bg-gray-800/50">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-orange-500 to-teal-600 bg-clip-text text-transparent">
                Technical Skills
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
                Frontend development expertise with modern technologies and best
                practices
              </p>
            </div>

            {/* Main Skills Grid */}
            <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8 max-w-7xl mx-auto">
              {skillCategories.map((category, index) => (
                <div
                  key={index}
                  className="bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900 rounded-2xl p-6 hover:shadow-xl transition-all duration-300 border border-gray-200 dark:border-gray-700">
                  <div className="flex items-center gap-3 mb-6">
                    {category.icon}
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                        {category.title}
                      </h3>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        {category.description}
                      </p>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    {category.skills.map(skill => (
                      <div
                        key={skill.name}
                        className="flex flex-col items-center p-4 bg-white dark:bg-gray-800 rounded-xl hover:scale-105 transition-transform duration-200 shadow-sm hover:shadow-md">
                        <div className="text-4xl mb-3">{skill.icon}</div>
                        <span className="text-sm font-semibold text-gray-800 dark:text-gray-200 text-center">
                          {skill.name}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Skills;

// import {
// 	Code2,
// 	Globe,
// 	FlaskConical,
// 	TerminalSquare,
// 	BadgeHelp,
// 	DatabaseZap,
// 	CloudCog,
// 	Languages,
// 	GitFork,
// 	Ruler,
// 	FileCode,
// 	Palette,
// 	Boxes,
// 	FileStack,
// 	LayoutTemplate,
// 	Network,
// 	Chrome,
// 	Braces,
// 	Figma,
// 	GitMerge,
// 	Flashlight,
// } from "lucide-react";

// const Skills = () => {
// 	const skillCategories = [
// 		{
// 			title: "Programming Languages",
// 			icon: <Code2 className="w-8 h-8 text-orange-500" />,
// 			skills: [
// 				{
// 					name: "JavaScript",
// 					icon: <FileCode className="w-5 h-5 text-yellow-500" />,
// 				},
// 				{
// 					name: "TypeScript",
// 					icon: <Braces className="w-5 h-5 text-blue-600" />,
// 				},
// 				{
// 					name: "HTML",
// 					icon: <LayoutTemplate className="w-5 h-5 text-orange-600" />,
// 				},
// 				{ name: "CSS", icon: <Palette className="w-5 h-5 text-blue-500" /> },
// 			],
// 		},
// 		{
// 			title: "Frontend Frameworks & Libraries",
// 			icon: <Globe className="w-8 h-8 text-teal-500" />,
// 			skills: [
// 				{ name: "React", icon: <Chrome className="w-5 h-5 text-cyan-500" /> },
// 				{
// 					name: "Next.js",
// 					icon: <Network className="w-5 h-5 text-black dark:text-white" />,
// 				},
// 				{
// 					name: "Redux Toolkit",
// 					icon: <Boxes className="w-5 h-5 text-purple-500" />,
// 				},
// 				{
// 					name: "Tanstack Query",
// 					icon: <CloudCog className="w-5 h-5 text-red-500" />,
// 				},
// 				{
// 					name: "Material UI",
// 					icon: <Palette className="w-5 h-5 text-indigo-500" />,
// 				},
// 				{
// 					name: "Shadcn UI",
// 					icon: <LayoutTemplate className="w-5 h-5 text-green-500" />,
// 				},
// 				{
// 					name: "Tailwind CSS",
// 					icon: <Ruler className="w-5 h-5 text-sky-400" />,
// 				},
// 				{ name: "Sass", icon: <Palette className="w-5 h-5 text-pink-500" /> },
// 				{
// 					name: "Styled Components",
// 					icon: <Palette className="w-5 h-5 text-rose-500" />,
// 				},
// 			],
// 		},
// 		{
// 			title: "Testing & Accessibility",
// 			icon: <FlaskConical className="w-8 h-8 text-red-500" />,
// 			skills: [
// 				{ name: "Jest", icon: <BadgeHelp className="w-5 h-5 text-pink-500" /> },
// 				{
// 					name: "React Testing Library",
// 					icon: <FileStack className="w-5 h-5 text-purple-500" />,
// 				},
// 				{
// 					name: "WCAG",
// 					icon: <Languages className="w-5 h-5 text-green-600" />,
// 				},
// 			],
// 		},
// 		{
// 			title: "Build Tools & Utilities",
// 			icon: <TerminalSquare className="w-8 h-8 text-yellow-500" />,
// 			skills: [
// 				{
// 					name: "Vite",
// 					icon: <Flashlight className="w-5 h-5 text-yellow-500" />,
// 				},
// 				{ name: "Webpack", icon: <Boxes className="w-5 h-5 text-blue-700" /> },
// 				{
// 					name: "Storybook",
// 					icon: <FileStack className="w-5 h-5 text-violet-500" />,
// 				},
// 				{
// 					name: "Docker",
// 					icon: <DatabaseZap className="w-5 h-5 text-blue-400" />,
// 				},
// 			],
// 		},
// 	];

// 	const additionalTech = [
// 		{
// 			name: "PostgreSQL",
// 			icon: <DatabaseZap className="w-5 h-5 text-indigo-700" />,
// 		},
// 		{
// 			name: "MongoDB",
// 			icon: <DatabaseZap className="w-5 h-5 text-green-600" />,
// 		},
// 		{ name: "Babel", icon: <Braces className="w-5 h-5 text-yellow-600" /> },
// 		{ name: "REST APIs", icon: <Network className="w-5 h-5 text-blue-600" /> },
// 		{
// 			name: "ESLint & Prettier",
// 			icon: <FileCode className="w-5 h-5 text-purple-700" />,
// 		},
// 		{
// 			name: "Microservices",
// 			icon: <CloudCog className="w-5 h-5 text-sky-600" />,
// 		},
// 		{
// 			name: "i18next",
// 			icon: <Languages className="w-5 h-5 text-emerald-600" />,
// 		},
// 		{
// 			name: "Agile/Scrum",
// 			icon: <GitFork className="w-5 h-5 text-orange-600" />,
// 		},
// 		{ name: "Jira", icon: <Boxes className="w-5 h-5 text-blue-500" /> },
// 		{ name: "Figma", icon: <Figma className="w-5 h-5 text-pink-500" /> },
// 		{
// 			name: "Git & GitHub",
// 			icon: <GitMerge className="w-5 h-5 text-black dark:text-white" />,
// 		},
// 		{ name: "Postman", icon: <Network className="w-5 h-5 text-orange-500" /> },
// 		{
// 			name: "Design Systems",
// 			icon: <Palette className="w-5 h-5 text-teal-500" />,
// 		},
// 		{
// 			name: "Performance Optimization",
// 			icon: <Chrome className="w-5 h-5 text-lime-500" />,
// 		},
// 	];

// 	return (
// 		<div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
// 			<div className="pt-20">
// 				<section className="py-10 bg-gray-50 dark:bg-gray-800/50">
// 					<div className="container mx-auto px-6">
// 						<div className="text-center mb-16">
// 							<h2 className="text-4xl md:text-5xl font-bold mb-6 text-black dark:text-white">
// 								Technical Skills
// 							</h2>
// 							<p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
// 								A comprehensive overview of my technical expertise
// 							</p>
// 						</div>

// 						<div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
// 							{skillCategories.map((category, index) => (
// 								<div
// 									key={index}
// 									className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-8 hover:shadow-lg transition-shadow duration-300"
// 								>
// 									<div className="flex items-center gap-4 mb-8">
// 										{category.icon}
// 										<h3 className="text-2xl font-bold text-gray-900 dark:text-white">
// 											{category.title}
// 										</h3>
// 									</div>

// 									<div className="space-y-4">
// 										{category.skills.map((skill) => (
// 											<div
// 												key={skill.name}
// 												className="flex justify-start items-center gap-4"
// 											>
// 												<span>{skill.icon}</span>
// 												<span className="font-medium text-gray-800 dark:text-gray-200">
// 													{skill.name}
// 												</span>
// 											</div>
// 										))}
// 									</div>
// 								</div>
// 							))}
// 						</div>

// 						<div className="mt-16 text-center">
// 							<h3 className="text-2xl font-bold mb-8 text-gray-900 dark:text-white">
// 								Additional Technologies
// 							</h3>
// 							<div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
// 								{additionalTech.map((tech) => (
// 									<span
// 										key={tech.name}
// 										className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-orange-100 to-teal-100 dark:from-orange-900/30 dark:to-teal-900/30 text-gray-800 dark:text-gray-200 rounded-full text-sm font-medium hover:shadow-md transition-shadow duration-200"
// 									>
// 										{tech.icon}
// 										{tech.name}
// 									</span>
// 								))}
// 							</div>
// 						</div>
// 					</div>
// 				</section>
// 			</div>
// 		</div>
// 	);
// };

// export default Skills;

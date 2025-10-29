import React from "react";
import { projects, workProfiles } from "@/config/project";
import { ExternalLink, Github } from "lucide-react";

const Projects: React.FC = React.memo(() => {
  return (
    <div className="bg-white dark:bg-gray-900 transition-colors duration-300">
      <div className="pt-20">
        <section id="projects" className="py-10 bg-gray-50 dark:bg-gray-800/50">
          <div className="container mx-auto px-6">
            <div className="animate-fade-in text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                <span className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-orange-500 to-teal-600 bg-clip-text text-transparent">
                  Featured Projects
                </span>
              </h1>
              <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto text-center">
                Top projects I’ve worked on — a curated selection highlighting
                impact, technologies used, and live demos.
              </p>
            </div>

            <div className="px-0 md:px-4 m-4">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {projects.map((project, index) => (
                  <div
                    key={index}
                    className="bg-white dark:bg-gray-900 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group">
                    <div className="flex flex-col">
                      {/* Project Image */}
                      <div className="bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-900 flex flex-col p-4">
                        <div className="flex gap-2 mb-2">
                          <span className="w-3 h-3 bg-red-500 rounded-full" />
                          <span className="w-3 h-3 bg-yellow-500 rounded-full" />
                          <span className="w-3 h-3 bg-green-500 rounded-full" />
                        </div>
                        <img
                          src={project.image}
                          alt={project.title}
                          loading="lazy"
                          className="w-full h-auto rounded-xl object-cover transition-transform duration-300 group-hover:scale-105"
                        />
                      </div>

                      {/* Project Content */}
                      <div className="p-6 flex flex-col flex-1">
                        <div className="flex items-start justify-between">
                          <h3 className="text-xl font-bold text-gray-900 dark:text-white transition-colors duration-300 group-hover:text-orange-600">
                            {project.title}
                          </h3>
                          <div className="flex space-x-2">
                            {project.gitLink && (
                              <a
                                target="_blank"
                                rel="noopener noreferrer"
                                href={project.gitLink}
                                className="p-2 text-gray-600 dark:text-gray-400 hover:text-orange-500 dark:hover:text-orange-500 transition-colors duration-200 transform hover:scale-125"
                                title="View Source on GitHub">
                                <Github size={20} />
                              </a>
                            )}
                            {project.demoLink && (
                              <a
                                target="_blank"
                                rel="noopener noreferrer"
                                href={project.demoLink}
                                className="p-2 text-gray-600 dark:text-gray-400 hover:text-orange-500 dark:hover:text-orange-500 transition-colors duration-200 transform hover:scale-125"
                                title="View Live Preview">
                                <ExternalLink size={20} />
                              </a>
                            )}
                          </div>
                        </div>

                        <p className="text-gray-600 dark:text-gray-400 leading-relaxed transition-colors duration-300 group-hover:text-gray-800 dark:group-hover:text-gray-200">
                          {project.description}
                        </p>

                        <div className="flex flex-wrap gap-2 mt-2">
                          {project.techStack.map(tech => (
                            <span
                              key={tech}
                              className="px-3 py-1 bg-gradient-to-r from-orange-100 to-teal-100 dark:from-orange-900/30 dark:to-teal-900/30 text-orange-700 dark:text-orange-300 rounded-full text-sm font-medium transition-transform duration-200 hover:scale-110">
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <p className="mt-8 text-gray-700 dark:text-gray-300 text-lg leading-relaxed">
              Apart from these featured projects, I’ve also shared several{" "}
              <span className="font-semibold bg-gradient-to-r from-orange-500 to-teal-600 bg-clip-text text-transparent">
                continuation works, experimental apps, and code samples
              </span>{" "}
              on my{" "}
              <a
                href="https://github.com/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                className="text-orange-600 dark:text-orange-400 hover:underline hover:text-orange-700 dark:hover:text-orange-300">
                GitHub
              </a>{" "}
              and{" "}
              <a
                href="https://codesandbox.io/u/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                className="text-orange-600 dark:text-orange-400 hover:underline hover:text-orange-700 dark:hover:text-orange-300">
                CodeSandbox
              </a>
              . Explore more of my projects and ongoing work there!
            </p>
            <div className="flex justify-center gap-4 flex-wrap">
              {workProfiles.map((profile, index) => (
                <button
                  key={profile.profileName + index}
                  className={`inline-flex items-center gap-2 px-5 py-2 rounded-lg ${profile.className} transition-colors`}
                  onClick={() =>
                    window.open(
                      `${profile.link}`,
                      "_blank",
                      "noopener,noreferrer",
                    )
                  }>
                  {profile.icon}
                  {profile.profileName}
                </button>
              ))}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
});

export default Projects;

import { projects, workProfiles } from "@/config/project";
import { ExternalLink, Github } from "lucide-react";
import { Link } from "react-router-dom";

const Projects = () => {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
      <div className="pt-20">
        <section id="projects" className="py-10 bg-gray-50 dark:bg-gray-800/50">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-orange-500 to-teal-600 bg-clip-text text-transparent">
                Featured Projects
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
                A showcase of my recent work building scalable web applications
                and innovative solutions
              </p>
            </div>

            <div className="space-y-8 max-w-6xl mx-auto">
              {projects.map((project, index) => (
                <div
                  key={index}
                  className="bg-white dark:bg-gray-900 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden">
                  <div className="flex flex-col lg:flex-row">
                    {/* Project Image */}
                    <div className="lg:w-2/5 bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-900 flex flex-col p-4">
                      <div className="flex gap-2 mb-2">
                        <span className="w-3 h-3 bg-red-500 rounded-full" />
                        <span className="w-3 h-3 bg-yellow-500 rounded-full" />
                        <span className="w-3 h-3 bg-green-500 rounded-full" />
                      </div>
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-auto rounded-xl object-cover transition hover:scale-[1.01]"
                      />
                    </div>

                    {/* Project Content */}
                    <div className="lg:w-3/5 p-8">
                      <div className="flex items-start justify-between mb-4">
                        <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                          {project.title}
                        </h3>
                        <div className="flex space-x-2">
                          {project.gitLink && (
                            <a
                              target="_blank"
                              rel="noopener noreferrer"
                              href={project.gitLink}
                              className="p-2 text-gray-600 dark:text-gray-400 hover:text-orange-500 transition-colors duration-200">
                              <Github size={20} />
                            </a>
                          )}

                          {project.demoLink && (
                            <a
                              target="_blank"
                              rel="noopener noreferrer"
                              href={project.demoLink}
                              className="p-2 text-gray-600 dark:text-gray-400 hover:text-orange-500 transition-colors duration-200">
                              <ExternalLink size={20} />
                            </a>
                          )}
                        </div>
                      </div>

                      <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
                        {project.description}
                      </p>

                      <div className="flex flex-wrap gap-2">
                        {project.techStack.map(tech => (
                          <span
                            key={tech}
                            className="px-3 py-1 bg-gradient-to-r from-orange-100 to-teal-100 dark:from-orange-900/30 dark:to-teal-900/30 text-orange-700 dark:text-orange-300 rounded-full text-sm font-medium">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap justify-evenly m-8 gap-6">
              {workProfiles.map((profile: any, index: number) => {
                return (
                  <div
                    key={index}
                    className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 hover:border-orange-500 transition-colors duration-300 w-full sm:w-[48%] lg:w-[30%] rounded-xl p-6 flex flex-col items-center text-center shadow-md">
                    {profile.icon}
                    <h3 className="text-xl text-black dark:text-white font-semibold mt-4">
                      {profile.profileName}
                    </h3>
                    <p className="mt-2 text-gray-600 dark:text-gray-300">
                      {profile.description}
                    </p>
                    <Link
                      to={profile.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-4 text-orange-600 dark:text-orange-400 font-medium hover:underline hover:text-orange-700 dark:hover:text-orange-300 transition-colors">
                      Visit {profile.profileName} →
                    </Link>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Projects;

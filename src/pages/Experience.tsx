import { workExperiences } from "@/config/experience";
import { MapPin, Calendar, Globe, Building } from "lucide-react";

const Experience = () => {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
      <div className="pt-20">
        <section
          id="experience"
          className="py-10 bg-gray-50 dark:bg-gray-800/50">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-orange-500 to-teal-600 bg-clip-text text-transparent">
                Professional Experience
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
                My journey through different roles and the impact I've made at
                each organization
              </p>
            </div>

            <div className="max-w-4xl mx-auto">
              {workExperiences.map((exp, index) => (
                <div key={index} className="relative pl-8 pb-12 last:pb-0">
                  {/* Timeline line */}
                  {index !== workExperiences.length - 1 && (
                    <div className="absolute left-4 top-12 w-0.5 h-full bg-gradient-to-b from-orange-500 to-teal-600"></div>
                  )}

                  {/* Timeline dot */}
                  <div className="absolute left-2 top-6 w-4 h-4 bg-gradient-to-r from-orange-500 to-teal-600 rounded-full border-4 border-white dark:border-gray-900"></div>

                  <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 p-8">
                    <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-6">
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2 flex items-center">
                          <Building
                            size={22}
                            className="mr-2 text-orange-400"
                          />
                          {exp.company}
                        </h3>
                        <h4 className="text-xl font-semibold text-orange-600 dark:text-orange-400 mb-3">
                          {exp.role}
                        </h4>
                      </div>
                      <div className="flex flex-col md:items-end space-y-2">
                        <div className="flex items-center text-gray-600 dark:text-gray-400">
                          <Calendar size={16} className="mr-2" />
                          <span className="font-medium">{exp.timeline}</span>
                        </div>
                        <div className="flex items-center text-gray-600 dark:text-gray-400">
                          <MapPin size={16} className="mr-2" />
                          <span>{exp.location}</span>
                        </div>
                      </div>
                    </div>

                    <div className="">
                      <ul className="space-y-4">
                        {exp?.projects?.map((project, idx) => (
                          <div
                            key={idx}
                            className="text-gray-900 dark:text-white">
                            <div className="font-medium text-md mb-1 flex items-center">
                              <Globe
                                size={20}
                                className="mr-2 text-orange-500"
                              />
                              {project.name}
                            </div>
                            {project.responsibilities.map((resp, rIdx) => (
                              <li
                                key={rIdx}
                                className="text-gray-600 dark:text-gray-400 text-sm mb-2">
                                • {resp}
                              </li>
                            ))}
                          </div>
                        ))}
                      </ul>
                    </div>
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

export default Experience;

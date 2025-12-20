import React from "react";
import { workExperiences } from "@/config/experience";
import { MapPin, Calendar } from "lucide-react";

const Experience: React.FC = React.memo(() => {
  return (
    <div className="bg-white dark:bg-gray-900 transition-colors duration-300">
      <div className="pt-20">
        <section
          id="experience"
          className="py-10 bg-gray-50 dark:bg-gray-800/50">
          <div className="container mx-auto px-6">
            <div className="animate-fade-in text-center">
              <h1 tabIndex={0} className="text-4xl md:text-5xl font-bold mb-6">
                <span className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-orange-500 to-teal-600 bg-clip-text text-transparent">
                  Professional Experience
                </span>
              </h1>
              <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
                My journey through different roles and the impact I've made at
                each organization
              </p>
            </div>

            <div className="max-w-7xl mx-auto m-4">
              {workExperiences.map((exp, index) => (
                <div key={index} className="relative md:pl-8 pb-12 last:pb-0">
                  {/* Timeline line - hidden on mobile */}
                  {index !== workExperiences.length - 1 && (
                    <div className="hidden md:block absolute left-4 top-12 w-0.5 h-full bg-gradient-to-b from-orange-500 to-teal-600"></div>
                  )}

                  {/* Timeline dot - hidden on mobile */}
                  <div className="hidden md:block absolute left-2 top-6 w-4 h-4 bg-gradient-to-r from-orange-500 to-teal-600 rounded-full border-4 border-white dark:border-gray-900"></div>

                  <div className="bg-gray-100 dark:bg-gray-900 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 p-6 md:p-8">
                    <div className="flex flex-col space-y-4 md:space-y-0 md:flex-row md:items-start md:justify-between">
                      <div className="flex items-start space-x-4 flex-1 min-w-0">
                        <div className="w-12 h-12 bg-gray-100 dark:bg-gray-800 rounded-xl flex items-center justify-center flex-shrink-0">
                          <img
                            src={exp.logo}
                            alt={`${exp.company} logo`}
                            className="w-12 h-12 object-contain"
                          />
                        </div>
                        <div className="flex-1 min-w-0">
                          <h3
                            tabIndex={0}
                            className="text-xl md:text-2xl font-bold text-gray-900 dark:text-white mb-2 break-words">
                            {exp.company}
                          </h3>
                          <p
                            tabIndex={0}
                            className="text-lg md:text-xl font-semibold text-orange-600 dark:text-orange-400 mb-3 break-words">
                            {exp.role}
                            {/* {exp.duration && (
                              <span className="hidden md:inline-flex items-center text-sm bg-gradient-to-r from-orange-100 to-teal-50 dark:from-orange-900/40 dark:to-teal-900/30 text-gray-700 dark:text-gray-200 mx-2 px-3 py-1 rounded-full shadow-sm">
                                {exp.duration}
                              </span>
                            )} */}
                          </p>
                        </div>
                      </div>
                      <div className="flex flex-col md:items-end space-y-2 md:flex-shrink-0 md:ml-4">
                        <div className="flex items-center text-gray-600 dark:text-gray-400">
                          <Calendar size={16} className="mr-2 flex-shrink-0" />
                          <span className="font-medium text-sm md:text-base">
                            {exp.timeline}
                          </span>
                        </div>
                        <div className="flex items-center text-gray-600 dark:text-gray-400">
                          <MapPin size={16} className="mr-2 flex-shrink-0" />
                          <span className="text-sm md:text-base">
                            {exp.location}
                          </span>
                        </div>
                      </div>
                    </div>

                    {exp?.projects?.map((project, idx) => (
                      <div key={idx} className="mb-1 p-2">
                        <div className="flex items-center font-medium text-md text-gray-900 dark:text-white mb-2">
                          {/* <Globe size={18} className="mr-2 text-orange-500" /> */}
                          {project.name}
                        </div>
                        <ul className="list-disc list-inside space-y-1 text-gray-600 dark:text-gray-400 text-sm">
                          {project.responsibilities.map((resp, rIdx) => (
                            <li
                              key={rIdx}
                              className="text-gray-600 dark:text-gray-400 text-sm">
                              {resp}
                            </li>
                          ))}
                        </ul>
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
});

export default Experience;

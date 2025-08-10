import { timeLineExperiences, workExperiences } from "@/config/experience";
import { MapPin, Calendar, Globe, Building } from "lucide-react";

const Experience = () => {
  return (
    <div className="bg-white dark:bg-gray-900 transition-colors duration-300">
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

            <div className="flex flex-col md:flex-row md:items-start md:justify-between relative mb-8">
              <div className="hidden md:block absolute top-5 left-0 w-full h-1 bg-gray-300 dark:bg-gray-600"></div>

              {timeLineExperiences.map((exp, index) => (
                <div
                  key={index}
                  className="flex-1 flex flex-col items-center md:items-center relative z-10 mb-8">
                  {/* Circle */}
                  <div className="w-10 h-10 flex items-center justify-center bg-orange-500 text-white rounded-full shadow-lg mb-4 relative z-10">
                    {timeLineExperiences.length - index}
                  </div>

                  {/* Text */}
                  <div className="text-center max-w-[150px]">
                    <span className="block text-xs font-semibold text-orange-500">
                      {exp.years}
                    </span>
                    <h3 className="text-sm font-semibold text-gray-900 dark:text-gray-100">
                      {exp.company}
                    </h3>
                  </div>
                </div>
              ))}
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

                  <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-lg hover:shadow-xl duration-300 p-6 md:p-8 border-2 border-transparent hover:border-orange-500 dark:hover:border-teal-500 transition-colors">
                    <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900 dark:text-white flex items-center mb-1">
                          <Building
                            size={22}
                            className="mr-2 text-orange-400"
                          />
                          {exp.company}
                        </h3>
                        <h4 className="text-lg font-semibold text-orange-600 dark:text-orange-400 mb-3">
                          {exp.role}
                        </h4>
                        <div className="flex flex-wrap gap-x-6 gap-y-1 text-gray-600 dark:text-gray-400 text-sm">
                          <span className="flex items-center">
                            <Calendar size={16} className="mr-2" />
                            {exp.timeline}
                          </span>
                          <span className="flex items-center">
                            <MapPin size={16} className="mr-2" />
                            {exp.location}
                          </span>
                        </div>
                      </div>
                    </div>

                    <div className="space-y-6 mt-4">
                      {exp?.projects?.map((project, idx) => (
                        <div
                          key={idx}
                          className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-4 md:p-5 mb-2 transition-transform duration-300 hover:scale-105 hover:shadow-2xl">
                          <div className="flex items-center font-medium text-md text-gray-900 dark:text-white mb-2">
                            <Globe size={18} className="mr-2 text-orange-500" />
                            {project.name}
                          </div>
                          <ul className="list-disc list-inside space-y-1 text-gray-600 dark:text-gray-400 text-sm pl-5">
                            {project.responsibilities.map((resp, rIdx) => (
                              <li key={rIdx}>{resp}</li>
                            ))}
                          </ul>
                        </div>
                      ))}
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

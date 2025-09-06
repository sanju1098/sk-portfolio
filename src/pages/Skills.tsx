import React from "react";
import { skillCategories } from "@/config/skills";

const Skills: React.FC = React.memo(() => {
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
                  className="bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900 rounded-2xl p-6 border border-gray-200 dark:border-gray-700 shadow-md hover:shadow-2xl hover:-translate-y-2 hover:scale-[1.03] transition-all duration-300 group relative overflow-hidden">
                  <div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="w-full h-full bg-gradient-to-tr from-orange-100/30 to-teal-100/30 dark:from-orange-900/20 dark:to-teal-900/20 blur-2xl" />
                  </div>
                  <div className="flex items-center gap-3 mb-6 relative z-10">
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

                  <div className="grid grid-cols-2 gap-4 relative z-10">
                    {category.skills.map(skill => (
                      <div
                        key={skill.name}
                        className="flex flex-col items-center p-4 bg-white dark:bg-gray-800 rounded-xl hover:scale-110 hover:bg-gradient-to-br hover:from-orange-50 hover:to-teal-50 dark:hover:from-orange-900/30 dark:hover:to-teal-900/30 transition-transform duration-200 shadow-sm hover:shadow-lg cursor-pointer">
                        <div className="text-4xl mb-3 transition-transform duration-200 group-hover:scale-110">
                          {skill.icon}
                        </div>
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
});

export default Skills;

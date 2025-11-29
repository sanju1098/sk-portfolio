import React from "react";
import { skillCategories } from "@/config/skills";

const Skills: React.FC = React.memo(() => {
  return (
    <div className="bg-white dark:bg-gray-900 transition-colors duration-300">
      <div className="pt-20">
        <section id="skills" className="py-10 bg-gray-50 dark:bg-gray-800/50">
          <div className="container mx-auto px-6">
            <div className="animate-fade-in text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                <span className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-orange-500 to-teal-600 bg-clip-text text-transparent">
                  Technical Skills
                </span>
              </h1>
              <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
                Frontend development expertise with modern technologies and best
                practices
              </p>
            </div>

            {/* Main Skills Grid */}
            <div className="max-w-8xl mx-auto px-4 py-10 grid lg:grid-cols-3 md:grid-cols-2 gap-8">
              {skillCategories.map((category, index) => (
                <div
                  key={index}
                  className="rounded-2xl overflow-hidden border border-gray-200 dark:border-gray-700bg-white dark:bg-gray-900 shadow-md hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
                  {/* Header */}
                  <div className="flex items-center gap-3 p-5 bg-gradient-to-r from-orange-400/10 to-teal-400/10 dark:from-orange-400/20 dark:to-teal-400/20">
                    <div className="text-3xl">{category.icon}</div>
                    <div>
                      <h3 className="text-lg font-bold text-gray-900 dark:text-white">
                        {category.title}
                      </h3>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        {category.description}
                      </p>
                    </div>
                  </div>

                  {/* Skills */}
                  <div className="grid grid-cols-3 gap-4 p-5">
                    {category.skills.map(skill => (
                      <div
                        key={skill.name}
                        className="flex flex-col items-center p-4 rounded-xl bg-gray-50 dark:bg-gray-800 hover:bg-gradient-to-br hover:from-orange-50 hover:to-teal-50 dark:hover:from-orange-900/20 dark:hover:to-teal-900/20transition-all duration-200 shadow-sm hover:shadow-md cursor-pointe">
                        <div className="text-4xl mb-2">{skill.icon}</div>
                        <p className="text-md font-semibold text-gray-700 dark:text-gray-200 text-center">
                          {skill.name}
                        </p>
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

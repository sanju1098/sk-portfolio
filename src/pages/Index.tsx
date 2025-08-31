import React from "react";
import { achievements, primaryTechStack, services } from "@/config/home";
import {
  ArrowRight,
  Download,
  Rocket,
  CheckCircle,
  Award,
  Target,
  Sparkles,
} from "lucide-react";
import { Link } from "react-router-dom";
const Index: React.FC = React.memo(() => {
  return (
    <div className=" bg-white dark:bg-gray-900 transition-colors duration-300">
      <div className="">
        {/* Hero Section */}
        <section
          id="home"
          className=" flex items-center justify-center relative overflow-hidden">
          {/* Enhanced Background */}
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-gradient-to-br from-orange-50 via-white to-teal-50 dark:from-gray-900 dark:via-gray-900 dark:to-gray-800"></div>
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_25%,rgba(251,146,60,0.15),transparent_50%)]"></div>
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_75%,rgba(20,184,166,0.15),transparent_50%)]"></div>

            {/* Animated Background Elements */}
            <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-r from-orange-400 to-orange-600 rounded-full blur-3xl opacity-20 animate-pulse"></div>
            <div className="absolute bottom-32 right-16 w-40 h-40 bg-gradient-to-r from-teal-400 to-teal-600 rounded-full blur-3xl opacity-20 animate-pulse delay-1000"></div>
            <div className="absolute top-1/3 right-20 w-24 h-24 bg-gradient-to-r from-purple-400 to-purple-600 rounded-full blur-2xl opacity-20 animate-pulse delay-500"></div>
          </div>

          <div className="container mx-auto px-6 text-center relative z-10">
            <div className="max-w-5xl mx-auto">
              {/* Status Badge */}

              {/* <div className="mb-8 animate-fade-in">
                <div className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-orange-500/10 to-teal-500/10 border border-orange-200 dark:border-orange-800 rounded-full backdrop-blur-sm">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                  <span className="text-orange-600 dark:text-orange-400 font-medium">
                    Available for new opportunities
                  </span>
                  <Sparkles className="text-orange-500" size={16} />
                </div>
              </div> */}

              {/* Main Heading with Enhanced Typography */}
              <div className="mb-8 mt-[70px] animate-fade-in">
                <h1 className="text-4xl md:text-6xl lg:text-7xl font-black mb-4 leading-tight">
                  <span className="block text-gray-800 dark:text-white mb-2">
                    I'm
                  </span>
                  <span className="block bg-gradient-to-r from-orange-500 via-orange-600 to-teal-600 bg-clip-text text-transparent">
                    Sanjay Kumar S R
                  </span>
                </h1>

                <div className="flex flex-col md:flex-row items-center justify-center gap-3 mb-6">
                  <div className="hidden md:block w-2 h-2 bg-orange-500 rounded-full"></div>
                  <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-gray-700 dark:text-gray-300">
                    Senior Application Developer
                  </h2>
                  <div className="hidden md:block w-2 h-2 bg-orange-500 rounded-full"></div>
                </div>
              </div>

              {/* Enhanced Description */}
              <div className="mb-12 animate-fade-in">
                <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-400 mb-8 max-w-4xl mx-auto leading-relaxed font-medium">
                  Professional Application Developer with{" "}
                  <span className="text-orange-600 dark:text-orange-400 font-bold">
                    4+ years
                  </span>{" "}
                  of experience crafting
                  <span className="bg-gradient-to-r from-orange-500 to-teal-600 bg-clip-text text-transparent font-bold">
                    {" "}
                    responsive, scalable, and user-centric
                  </span>{" "}
                  web applications.
                </p>

                {/* Tech Stack Pills */}
                <div className="flex flex-wrap justify-center gap-3 mb-8">
                  {primaryTechStack.map((tech, index) => (
                    <span
                      key={index}
                      className="px-4 py-2 bg-white/80 dark:bg-gray-800/80 border border-gray-200 dark:border-gray-700 rounded-full text-sm font-semibold text-gray-700 dark:text-gray-300 hover:scale-110 hover:bg-orange-100 dark:hover:bg-orange-900/30 transition-all duration-300 cursor-default shadow hover:shadow-lg">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Enhanced Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16 animate-fade-in">
                <Link
                  to="/experience"
                  className="group relative px-10 py-5 bg-gradient-to-r from-orange-500 to-teal-600 text-white rounded-2xl font-bold text-lg hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300 flex items-center gap-3 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-r from-orange-600 to-teal-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <span className="relative z-10">View My Experience</span>
                  <ArrowRight
                    size={24}
                    className="relative z-10 transition-transform duration-300 group-hover:translate-x-4"
                  />
                </Link>

                <a
                  href="/assets/Resume.pdf"
                  download="SanjayKumar-Resume"
                  target="_blank"
                  className="group px-10 py-5 border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-2xl font-bold text-lg hover:border-orange-500 hover:text-orange-500 hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 flex items-center gap-3">
                  <Download size={24} className="group-hover:animate-bounce" />
                  Download Resume
                </a>
              </div>

              {/* Enhanced Achievements Grid */}
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16 animate-fade-in">
                {achievements.map((achievement, index) => (
                  <div
                    key={index}
                    className="group bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm rounded-2xl p-6 border border-gray-200 dark:border-gray-700 hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 bg-gradient-to-r from-green-500 to-green-600 rounded-full flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-200">
                        <CheckCircle className="text-white" size={16} />
                      </div>
                      <p className="text-sm font-semibold text-gray-700 dark:text-gray-300 leading-relaxed">
                        {achievement}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* What I Do Section */}
        <section className="py-12 bg-gray-50 dark:bg-gray-800/50">
          <div className="container mx-auto px-6">
            <div className="text-center mb-10">
              <h2 className="text-5xl md:text-6xl font-black mb-8 bg-gradient-to-r from-gray-800 to-gray-600 dark:from-white dark:to-gray-300 bg-clip-text text-transparent">
                What I Do
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed">
                Committed to delivering high-quality, production-ready
                applications that provide seamless and efficient user
                experiences across various devices and platforms.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-12">
              {services.map((service, index) => (
                <div
                  key={index}
                  className="relative group p-8 bg-white dark:bg-gray-900 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden">
                  <div className="absolute inset-0 pointer-events-none"></div>
                  <div className="relative z-10 flex flex-col items-center text-center">
                    <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-teal-600 rounded-lg flex items-center justify-center mb-5 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-lg">
                      {service.icon}
                    </div>
                    <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-4">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      {service.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Skills Highlight Section */}
        <section className="py-12 bg-white dark:bg-gray-900">
          <div className="container mx-auto px-6">
            <div className="text-center mb-10">
              <h2 className="text-5xl md:text-6xl font-black mb-8 bg-gradient-to-r from-gray-800 to-gray-600 dark:from-white dark:to-gray-300 bg-clip-text text-transparent">
                My Expertise
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed">
                Skilled in writing clean, maintainable code and collaborating
                effectively with cross-functional teams in Agile environments.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-5xl mx-auto">
              <div className="text-center group">
                <div className="w-24 h-24 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 group-hover:shadow-xl transition-all duration-300">
                  <Award className="text-white animate-bounce" size={36} />
                </div>
                <h3 className="text-xl font-bold mb-4 text-black dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-600 transition-colors duration-300">
                  Modern Frameworks
                </h3>
                <p className="text-gray-600 dark:text-gray-400 text-lg">
                  React.js, Next.js, TypeScript
                </p>
              </div>

              <div className="text-center group">
                <div className="w-24 h-24 bg-gradient-to-r from-green-500 to-green-600 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 group-hover:shadow-xl transition-all duration-300">
                  <Target className="text-white animate-bounce" size={36} />
                </div>
                <h3 className="text-xl font-bold mb-4 text-black dark:text-white group-hover:text-green-600 dark:group-hover:text-green-600 transition-colors duration-300">
                  UI/UX Design
                </h3>
                <p className="text-gray-600 dark:text-gray-400 text-lg">
                  Component-based architecture
                </p>
              </div>

              <div className="text-center group">
                <div className="w-24 h-24 bg-gradient-to-r from-purple-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 group-hover:shadow-xl transition-all duration-300">
                  <Rocket className="text-white animate-bounce" size={36} />
                </div>
                <h3 className="text-xl font-bold mb-4 text-black dark:text-white group-hover:text-purple-600 dark:group-hover:text-purple-600 transition-colors duration-300">
                  Integration
                </h3>
                <p className="text-gray-600 dark:text-gray-400 text-lg">
                  REST API, State Management
                </p>
              </div>
            </div>

            <div className="text-center mt-16">
              <Link
                to="/skills"
                className="group inline-flex items-center gap-3 px-10 py-5 bg-gradient-to-r from-orange-500 to-teal-600 text-white rounded-2xl font-bold text-lg hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300">
                <span>View All Skills</span>
                <ArrowRight
                  size={24}
                  className="relative z-10 transition-transform duration-300 group-hover:translate-x-4"
                />
              </Link>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
});

export default Index;

import { badges } from "@/config/about";
import {
  Code,
  FileSymlink,
  Github,
  Heart,
  Linkedin,
  Mail,
  User,
} from "lucide-react";
import React from "react";

const About: React.FC = React.memo(() => {
  return (
    <div className="bg-white dark:bg-gray-900 transition-colors duration-300">
      <div className="pt-20">
        <section
          id="experience"
          className="py-10 bg-gray-50 dark:bg-gray-800/50">
          <div className="container mx-auto px-6">
            <div className="animate-fade-in text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                <span className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-orange-500 to-teal-600 bg-clip-text text-transparent">
                  Let's Connect
                </span>
              </h1>
              <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
                Ready to build something amazing together? I'd love to hear from
                you.
              </p>
            </div>

            {/* About Me Section  */}
            <div className="px-6">
              <div className="container mx-auto">
                <div className="bg-white dark:bg-gray-800 rounded-3xl shadow-xl p-8 md:p-12 animate-fade-in my-4">
                  <div className="flex items-center mb-8">
                    <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-teal-600 rounded-full flex items-center justify-center mr-6">
                      <User className="text-white" size={32} />
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
                      About Me
                    </h2>
                  </div>

                  <div className="space-y-2">
                    <p className="text-gray-600 dark:text-gray-400 text-lg leading-relaxed">
                      I'm a passionate Frontend Developer with{" "}
                      <strong>4+ years</strong> of experience crafting
                      beautiful, responsive, and user-friendly web applications.
                      I specialize in React, TypeScript, and modern web
                      technologies.
                    </p>

                    <p className="text-gray-600 dark:text-gray-400 text-lg leading-relaxed">
                      When I'm not coding, you'll find me exploring new
                      technologies, contributing to open-source projects, or
                      sharing my knowledge with the developer community.
                    </p>

                    <div className="flex flex-wrap gap-6 mt-8 justify-center">
                      <div className="flex items-center space-x-4 text-gray-600 dark:text-gray-400">
                        <Code size={20} />
                        <span>Open source contributor</span>
                      </div>
                      <div className="flex items-center space-x-4 text-gray-600 dark:text-gray-400">
                        <Heart size={20} />
                        <span>Passionate about clean code</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* My Work & Achievements Section */}
            <div className="container mx-auto mb-4">
              <div className="bg-gradient-to-br from-orange-50 to-teal-50 dark:from-gray-800 dark:to-gray-700 rounded-3xl shadow-xl p-8 md:p-12 animate-fade-in">
                <div className="flex items-center mb-8">
                  <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-teal-600 rounded-full flex items-center justify-center mr-6">
                    <Code className="text-white" size={32} />
                  </div>
                  <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
                    My Achievements
                  </h2>
                </div>
                <div className="flex flex-wrap gap-8 justify-center">
                  {badges.map((badge, index) => (
                    <div
                      className="flex flex-col items-center justify-between min-w-[180px] max-w-[200px] px-2 py-4 bg-white dark:bg-gray-900 rounded-xl shadow-md"
                      key={index}>
                      <div className="flex flex-col items-center w-full">
                        <div className="flex items-center justify-center w-28 h-28 bg-gray-50 dark:bg-gray-800 rounded-lg overflow-hidden border border-gray-200 dark:border-gray-700 mb-3">
                          <img
                            loading="lazy"
                            src={badge.imageLink}
                            alt={badge.name}
                            className="object-contain w-24 h-24"
                          />
                        </div>
                        <div className="text-center w-full">
                          <div
                            className="text-gray-700 dark:text-gray-300 text-md mt-1 truncate"
                            title={badge.name}>
                            {badge.name}
                          </div>
                          <a
                            href={badge.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-teal-500 text-sm hover:underline flex items-center justify-center gap-2 font-semibold mt-1"
                            aria-label={badge.buttonName}>
                            {badge.buttonName}
                            <FileSymlink size={18} strokeWidth={2} />
                          </a>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Get in Touch */}
            <section className="py-16 px-6">
              <div className="container">
                <div className="grid grid-cols-1 gap-12">
                  {/* Contact Information */}
                  <div className="space-y-8 animate-fade-in">
                    <div>
                      <h3 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">
                        Get In Touch
                      </h3>
                      <p className="text-gray-600 dark:text-gray-400 mb-8 leading-relaxed text-lg">
                        I'm always open to discussing new opportunities,
                        interesting projects, or just having a chat about the
                        latest in frontend development. Feel free to reach out
                        through any of the channels below.
                      </p>
                    </div>

                    <div className="space-y-6">
                      <div className="flex items-center gap-6 group hover:scale-105 transition-transform duration-200">
                        <div className="w-12 h-12 rounded-full flex items-center justify-center group-hover:shadow-lg transition-shadow duration-200">
                          <Mail
                            className="text-orange-500 dark:text-teal-600"
                            size={30}
                          />
                        </div>
                        <div>
                          <h4 className="font-semibold text-gray-900 dark:text-white text-lg">
                            Email
                          </h4>
                          <a
                            href="mailto:sanjay.kumar981110@gmail.com"
                            className="text-gray-600 dark:text-gray-400 hover:text-orange-500 transition-colors">
                            Reach me directly at{" "}
                            <strong>sanjay.kumar981110@gmail.com</strong>
                          </a>
                        </div>
                      </div>

                      <div className="flex items-center gap-6 group hover:scale-105 transition-transform duration-200">
                        <div className="w-12 h-12 rounded-full flex items-center justify-center group-hover:shadow-lg transition-shadow duration-200">
                          <Linkedin
                            className="text-blue-600 dark:text-blue-700"
                            size={30}
                          />
                        </div>
                        <div>
                          <h4 className="font-semibold text-gray-900 dark:text-white text-lg">
                            LinkedIn
                          </h4>
                          <a
                            href="https://www.linkedin.com/in/sanjay-kumar-s-r/"
                            className="text-gray-600 dark:text-gray-400 hover:text-blue-600 transition-colors">
                            Connect with me on LinkedIn for professional updates{" "}
                            <strong>linkedin.com/in/sanjay-kumar-s-r/</strong>
                          </a>
                        </div>
                      </div>

                      <div className="flex items-center gap-6 group hover:scale-105 transition-transform duration-200">
                        <div className="w-12 h-12 rounded-full flex items-center justify-center group-hover:shadow-lg transition-shadow duration-200">
                          <Github
                            className="text-gray-900 dark:text-gray-700 "
                            size={30}
                          />
                        </div>
                        <div>
                          <h4 className="font-semibold text-gray-900 dark:text-white text-lg">
                            Github
                          </h4>
                          <a
                            href="https://github.com/sanju1098"
                            className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors">
                            Explore my projects and contributions on{" "}
                            <strong>github.com/sanju1098</strong>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </section>
      </div>
    </div>
  );
});

export default About;

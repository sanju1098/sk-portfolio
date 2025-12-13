import { certificates, workAchievements } from "@/config/about";
import {
  FileBadge,
  FileSymlink,
  Github,
  GraduationCap,
  Link2,
  Linkedin,
  Mail,
  School,
  Trophy,
  User,
} from "lucide-react";
import React from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

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

            <div className="px-0 md:px-12">
              {/* About Me Section  */}
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
                    <p className="text-gray-600 dark:text-gray-400 text-lg leading-relaxed mb-6">
                      I'm a passionate <strong>Frontend Developer</strong> with
                      over <strong>4 years</strong> of experience crafting
                      beautiful, responsive, and user-friendly web applications.
                      My focus lies in building high-performance web solutions
                      that help businesses grow, meet client requirements, and
                      deliver exceptional user experiences — whether it’s a
                      website that enhances brand presence or a software product
                      that simplifies complex workflows.
                    </p>

                    <p className="text-gray-600 dark:text-gray-400 text-lg leading-relaxed">
                      Since writing my first lines of code in{" "}
                      <strong>late 2021</strong>, I’ve continually refined my
                      skills, mastering <strong>React</strong>,{" "}
                      <strong>TypeScript</strong>, and modern web technologies
                      while developing a strong eye for{" "}
                      <strong>clean design, accessibility,</strong> and seamless
                      interactions. I take pride in writing neat, maintainable,
                      and long-lasting code that stands the test of time —
                      ensuring better performance, optimization, and scalability
                      for every project I build.
                    </p>
                  </div>
                </div>
              </div>

              {/* Professional Achievements Section */}
              <div className="container mx-auto mb-4">
                <div className="bg-gradient-to-br from-orange-50 to-teal-50 dark:from-gray-800 dark:to-gray-700 rounded-3xl shadow-xl p-8 md:p-12 animate-fade-in">
                  <div className="flex items-center">
                    <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-teal-600 rounded-full flex items-center justify-center mr-6">
                      <Trophy className="text-white" size={32} />
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
                      Professional Achievements
                    </h2>
                  </div>
                  <div className="flex flex-wrap gap-8 justify-center">
                    {[...workAchievements]
                      .sort((a, b) => {
                        const da = new Date(a.issueDate).getTime();
                        const db = new Date(b.issueDate).getTime();
                        if (db !== da) return db - da; // recent first
                        return a.name.localeCompare(b.name);
                      })
                      .map((achievement, index) => (
                        <div
                          className="flex flex-col items-center justify-between min-w-[180px] max-w-[200px] px-2 py-4 bg-white dark:bg-gray-900 rounded-xl shadow-md"
                          key={index}>
                          <div className="flex flex-col items-center w-full">
                            <img
                              loading="lazy"
                              src={achievement.badgeImage}
                              alt={achievement.name}
                              className="object-contain w-36 h-24"
                            />
                            <div className="text-center w-full">
                              <div
                                className="text-gray-700 dark:text-gray-300 text-md mt-1 truncate"
                                title={achievement.name}>
                                {achievement.name}
                              </div>
                              {achievement.image ? (
                                <Dialog>
                                  <div className="flex justify-center w-full">
                                    <DialogTrigger asChild>
                                      <button
                                        className="mx-auto text-teal-500 text-sm hover:cursor-pointer flex items-center justify-center gap-2 font-semibold mt-1"
                                        aria-label={achievement.buttonName}>
                                        {achievement.buttonName}
                                        <FileSymlink
                                          size={18}
                                          strokeWidth={2}
                                        />
                                      </button>
                                    </DialogTrigger>
                                  </div>
                                  <DialogContent className="mx-4 sm:mx-auto w-full max-w-[90vw] sm:max-w-xl md:max-w-4xl bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm border border-gray-200 dark:border-gray-700 shadow-lg p-4 sm:p-6 rounded-lg sm:rounded-2xl overflow-auto max-h-[85vh] text-gray-900 dark:text-white dark:[&_svg]:text-white">
                                    <DialogHeader>
                                      <DialogTitle className="flex items-center gap-4">
                                        <span className="block text-lg sm:text-2xl md:text-3xl font-extrabold">
                                          {achievement.name}
                                        </span>
                                      </DialogTitle>
                                      <DialogDescription>
                                        <div className="flex flex-col items-center gap-4">
                                          <img
                                            loading="lazy"
                                            src={achievement.image}
                                            alt={achievement.name}
                                            className="w-full sm:w-auto max-w-full sm:max-w-[560px] md:max-w-[800px] h-auto max-h-[50vh] sm:max-h-[60vh] md:max-h-[70vh] object-contain rounded-md"
                                          />

                                          {achievement.redirectLink && (
                                            <Button
                                              type="button"
                                              className="bg-teal-500 text-white hover:bg-teal-600 hover:scale-105 transition-transform duration-150 shadow-sm hover:shadow-lg mt-2"
                                              onClick={() =>
                                                window.open(
                                                  achievement.redirectLink,
                                                  "_blank",
                                                  "noopener,noreferrer",
                                                )
                                              }
                                              aria-label={`Open ${achievement.name} in new tab`}>
                                              {achievement.buttonName}
                                            </Button>
                                          )}
                                        </div>
                                      </DialogDescription>
                                    </DialogHeader>
                                  </DialogContent>
                                </Dialog>
                              ) : (
                                <a
                                  href={achievement.redirectLink}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="text-teal-500 text-sm hover:underline flex items-center justify-center gap-2 font-semibold mt-1"
                                  aria-label={achievement.buttonName}>
                                  {achievement.buttonName}
                                  <Link2 size={18} strokeWidth={2} />
                                </a>
                              )}
                            </div>
                          </div>
                        </div>
                      ))}
                  </div>
                </div>
              </div>

              {/* Certifications & Awards Section */}
              <div className="container mx-auto mb-4">
                <div className="bg-gradient-to-br from-orange-50 to-teal-50 dark:from-gray-800 dark:to-gray-700 rounded-3xl shadow-xl p-8 md:p-12 animate-fade-in">
                  <div className="flex items-center">
                    <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-teal-600 rounded-full flex items-center justify-center mr-6">
                      <FileBadge className="text-white" size={32} />
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
                      Certifications & Awards
                    </h2>
                  </div>
                  <div className="flex flex-wrap gap-8 justify-center">
                    {[...certificates]
                      .sort((a, b) => {
                        const da = new Date(a.issueDate).getTime();
                        const db = new Date(b.issueDate).getTime();
                        if (db !== da) return db - da; // recent first
                        return a.name.localeCompare(b.name);
                      })
                      .map((achievement, index) => (
                        <div
                          className="flex flex-col items-center justify-between min-w-[180px] max-w-[200px] px-2 py-4 bg-white dark:bg-gray-900 rounded-xl shadow-md"
                          key={index}>
                          <div className="flex flex-col items-center w-full">
                            <img
                              loading="lazy"
                              src={achievement.badgeImage}
                              alt={achievement.name}
                              className="object-contain w-36 h-24"
                            />
                            <div className="text-center w-full">
                              <div
                                className="text-gray-700 dark:text-gray-300 text-md mt-1 truncate"
                                title={achievement.name}>
                                {achievement.name}
                              </div>
                              <a
                                href={achievement.redirectLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-teal-500 text-sm hover:underline flex items-center justify-center gap-2 font-semibold mt-1"
                                aria-label={achievement.buttonName}>
                                {achievement.buttonName}
                                <Link2 size={18} strokeWidth={2} />
                              </a>
                            </div>
                          </div>
                        </div>
                      ))}
                  </div>
                </div>
              </div>

              {/* Education Section  */}
              <div className="container mx-auto">
                <div className="bg-white dark:bg-gray-800 rounded-3xl shadow-xl p-8 md:p-12 animate-fade-in my-4">
                  <div className="flex items-center mb-8">
                    <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-teal-600 rounded-full flex items-center justify-center mr-6">
                      <School className="text-white" size={32} />
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
                      Education
                    </h2>
                  </div>

                  <div className="space-y-2">
                    <div className="flex items-start gap-6">
                      <div className="flex-shrink-0">
                        <div className="w-12 h-12 rounded-full flex items-center justify-center shadow-md">
                          <GraduationCap
                            className="text-orange-500 dark:text-teal-600 "
                            size={28}
                          />
                        </div>
                      </div>

                      <div className="flex-1">
                        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2">
                          <div>
                            <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                              Bachelor of Engineering — Computer Science
                            </h3>
                            <p className="text-md text-gray-600 dark:text-gray-400 mt-1">
                              T John Institute of Technology, Bangalore
                            </p>
                          </div>

                          <time
                            className="mt-1 sm:mt-0 inline-block text-sm text-gray-500 dark:text-gray-400 bg-gray-100 dark:bg-gray-800 px-3 py-1 rounded-full"
                            dateTime="2016-08">
                            Aug 2016 — Oct 2020
                          </time>
                        </div>
                      </div>
                    </div>
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
                              Connect with me on LinkedIn for professional
                              updates{" "}
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
          </div>
        </section>
      </div>
    </div>
  );
});

export default About;

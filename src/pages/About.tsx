import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { aboutWork } from "@/config/about";
import {
  Code,
  Github,
  Heart,
  Link,
  Linkedin,
  Mail,
  MapPin,
  Send,
  User,
} from "lucide-react";

const About = () => {
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
                    My Work & Achievements
                  </h2>
                </div>
                <div className="flex flex-wrap gap-6 justify-center">
                  {aboutWork.map((item, index) => (
                    <div
                      key={index}
                      className="bg-white dark:bg-gray-800 p-6 rounded-xl hover:shadow-lg transition-all duration-300 hover:scale-105 group flex-1 min-w-[180px] max-w-[220px] relative">
                      {item.link && (
                        <a
                          href={item.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="absolute top-4 right-4 text-teal-500 hover:underline"
                          aria-label={`Visit ${item.title}`}>
                          <Link size={18} strokeWidth={2} />
                        </a>
                      )}
                      <div className="text-center">
                        <div className="text-3xl font-bold text-teal-500 mb-2">
                          {item.count}
                        </div>
                        <p className="text-gray-600 dark:text-gray-400 group-hover:text-teal-500 transition-colors flex items-center justify-center gap-2">
                          {item.title}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="flex flex-wrap gap-6 justify-center">
                  <div className="flex flex-col items-center justify-center mt-8">
                    <img
                      loading="lazy"
                      src={
                        "https://espresa-prod-app-store.s3.amazonaws.com/company/card/e1f35856035b46d9bcd354c0dc7b2e69.png"
                      }
                      alt="Espresa"
                      className="w-48 mb-4"
                    />
                    <a
                      href={
                        "https://app.espresa.com/r/shared/643a0a4f-7974-46ea-be54-953178b2e353/"
                      }
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-teal-500 hover:underline flex items-center gap-2"
                      aria-label="See Badge">
                      See Badge
                      <Link size={18} strokeWidth={2} />
                    </a>
                  </div>
                  {/*  */}
                </div>
              </div>
              {/*  */}
            </div>

            {/* Get in Touch */}
            <section className="py-16 px-6">
              <div className="container">
                <div className="grid lg:grid-cols-2 gap-12">
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
                      <div className="flex items-center space-x-4 group hover:scale-105 transition-transform duration-200">
                        <div className="w-14 h-14 bg-gradient-to-r from-orange-500 to-teal-600 rounded-xl flex items-center justify-center group-hover:shadow-lg transition-shadow duration-200">
                          <Mail className="text-white" size={24} />
                        </div>
                        <div>
                          <h4 className="font-semibold text-gray-900 dark:text-white text-lg">
                            Email
                          </h4>
                          <a
                            href="mailto:sanjay.kumar981110@gmail.com"
                            className="text-gray-600 dark:text-gray-400 hover:text-orange-500 transition-colors">
                            sanjay.kumar981110@gmail.com
                          </a>
                        </div>
                      </div>

                      <div className="flex items-center space-x-4 group hover:scale-105 transition-transform duration-200">
                        <div className="w-14 h-14 bg-gradient-to-r from-orange-500 to-teal-600 rounded-xl flex items-center justify-center group-hover:shadow-lg transition-shadow duration-200">
                          <MapPin className="text-white" size={24} />
                        </div>
                        <div>
                          <h4 className="font-semibold text-gray-900 dark:text-white text-lg">
                            Location
                          </h4>
                          <p className="text-gray-600 dark:text-gray-400">
                            Bengaluru, Karnataka, IN
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Social Links */}
                    <div className="pt-8">
                      <h4 className="font-semibold text-gray-900 dark:text-white mb-6 text-xl">
                        Follow Me & Connect
                      </h4>
                      <div className="flex space-x-4">
                        <a
                          href="https://www.linkedin.com/in/sanjay-kumar-s-r/"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-14 h-14 bg-gray-100 dark:bg-gray-800 rounded-xl flex items-center justify-center hover:bg-gradient-to-r hover:from-orange-500 hover:to-teal-600 hover:text-white hover:scale-110 transition-all duration-300 group">
                          <Linkedin size={24} />
                        </a>
                        <a
                          href="https://github.com/sanju1098"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-14 h-14 bg-gray-100 dark:bg-gray-800 rounded-xl flex items-center justify-center hover:bg-gradient-to-r hover:from-orange-500 hover:to-teal-600 hover:text-white hover:scale-110 transition-all duration-300 group">
                          <Github size={24} />
                        </a>
                      </div>
                      <p className="text-sm text-gray-500 dark:text-gray-400 mt-4">
                        Connect with me on LinkedIn for professional updates, or
                        drop me an email for project inquiries.
                      </p>
                    </div>
                  </div>

                  {/* Contact Form */}
                  <div className="bg-gray-50 dark:bg-gray-800 rounded-3xl animate-fade-in">
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                      Send Me a Message
                    </h3>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label
                          htmlFor="name"
                          className="block text-sm font-semibold text-gray-900 dark:text-white mb-2">
                          Name *
                        </label>
                        <Input
                          type="text"
                          id="name"
                          name="name"
                          required
                          placeholder="Your Name"
                          className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-orange-500"
                        />
                      </div>
                      <div>
                        <label
                          htmlFor="email"
                          className="block text-sm font-semibold text-gray-900 dark:text-white mb-2">
                          Email *
                        </label>
                        <Input
                          type="text"
                          id="email"
                          name="email"
                          required
                          placeholder="Your Email"
                          className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-orange-500"
                        />
                      </div>
                    </div>
                    <div className="mt-6">
                      <label
                        htmlFor="subject"
                        className="block text-sm font-semibold text-gray-900 dark:text-white mb-2">
                        Subject *
                      </label>
                      <Input
                        type="text"
                        id="subject"
                        name="subject"
                        required
                        placeholder="Subject"
                        className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-orange-500"
                      />
                    </div>
                    <div className="mt-6">
                      <label
                        htmlFor="message"
                        className="block text-sm font-semibold text-gray-900 dark:text-white mb-2">
                        Message *
                      </label>
                      <Textarea
                        id="message"
                        name="message"
                        // value={formData.message}
                        // onChange={handleChange}
                        required
                        rows={6}
                        placeholder="Tell me about your project, opportunity, or just say hello..."
                        className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-orange-500"
                      />
                    </div>
                    <div className="mt-6">
                      <button
                        type="submit"
                        className="w-full bg-gradient-to-r from-orange-500 to-teal-600 hover:from-orange-600 hover:to-teal-700 text-white font-semibold py-4 rounded-xl transition-all duration-200 hover:scale-105 hover:shadow-lg flex items-center justify-center gap-2">
                        <span>Send Message</span>
                        <Send size={20} />
                      </button>
                    </div>

                    <div className="mt-6 p-4 bg-orange-50 dark:bg-orange-900/20 rounded-xl">
                      <p className="text-sm text-orange-700 dark:text-orange-300">
                        <strong>Quick Response:</strong> I typically respond to
                        messages within 24 hours. For urgent matters, feel free
                        to reach out on LinkedIn.
                      </p>
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
};

export default About;

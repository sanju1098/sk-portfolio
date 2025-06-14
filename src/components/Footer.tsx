import { Heart, Globe, Github, Linkedin, Mail } from "lucide-react";
import { Links } from "react-router-dom";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = [
    {
      name: "Portfolio Website",
      link: "https://sanjay-dev-beta.vercel.app/",
      icon: <Globe className="h-6 w-6" />,
    },
    {
      name: "GitHub",
      link: "https://github.com/sanju1098",
      icon: <Github className="h-6 w-6" />,
    },
    {
      name: "LinkedIn",
      link: "https://www.linkedin.com/in/sanjay-kumar-s-r/",
      icon: <Linkedin className="h-6 w-6" />,
    },
    {
      name: "Email",
      link: "mailto:sanjay.kumar981110@gmail.com",
      icon: <Mail className="h-6 w-6" />,
    },
  ];

  return (
    <footer className="bg-gray-900 dark:bg-black text-white py-10">
      <div className="container mx-auto px-6">
        <div className="text-center">
          {/* Social Links */}
          <div className="flex justify-center items-center gap-6 mb-8">
            {footerLinks.map((links: any, index: number) => (
              <a
                key={index}
                href={links.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-orange-500 transition-colors duration-200 transform hover:scale-110"
                aria-label={Links.name}>
                {links.icon}
              </a>
            ))}
          </div>

          <div className="border-t border-gray-800 pt-8">
            <p className="text-gray-400 flex items-center justify-center gap-2 mb-2">
              Made with <Heart size={16} className="text-red-500" /> using React
              & Tailwind CSS
            </p>
            <p className="text-gray-500 text-md">
              Copyright © {currentYear}{" "}
              <span className="font-semibold bg-gradient-to-r from-orange-500 to-teal-600 bg-clip-text text-transparent">
                Sanjay Kumar S R
              </span>
              . All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

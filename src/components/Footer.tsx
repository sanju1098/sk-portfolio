import {
  Heart,
  // Globe, Github, Linkedin, Mail, FileText
} from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  // const footerLinks = [
  //   {
  //     name: "Portfolio",
  //     link: "https://sanjay-dev-beta.vercel.app/",
  //     icon: <Globe className="h-6 w-6" />,
  //   },
  //   {
  //     name: "GitHub Profile",
  //     link: "https://github.com/sanju1098",
  //     icon: <Github className="h-6 w-6" />,
  //   },
  //   {
  //     name: "LinkedIn Profile",
  //     link: "https://www.linkedin.com/in/sanjay-kumar-s-r/",
  //     icon: <Linkedin className="h-6 w-6" />,
  //   },
  //   {
  //     name: "Medium Profile",
  //     link: "https://medium.com/@sanjay--kumar",
  //     icon: <FileText className="h-6 w-6" />,
  //   },
  //   {
  //     name: "Email",
  //     link: "mailto:sanjay.kumar981110@gmail.com",
  //     icon: <Mail className="h-6 w-6" />,
  //   },
  // ];

  return (
    <footer className="bg-gray-950 dark:bg-black text-white py-4">
      <div className="container mx-auto px-6">
        <div className="text-center">
          {/* Social Links */}
          {/* <div className="flex justify-center items-center gap-6 mb-8">
            {footerLinks.map((links: any, index: number) => (
              <a
                key={index}
                href={links.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-orange-500 transition-colors duration-200 transform hover:scale-110"
                aria-label={links.name}
                title={links.name}>
                <span className="inline-block hover:animate-bounce">
                  {links.icon}
                </span>
              </a>
            ))}
          </div> */}

          <div className="border-gray-700">
            <p
              tabIndex={0}
              className="text-gray-100 flex items-center justify-center gap-2 mb-2">
              Made with <Heart size={16} className="text-red-500" /> using React
              & Tailwind CSS
            </p>
            <p className="text-gray-200 text-md" tabIndex={0}>
              Copyright © {currentYear}{" "}
              <span className="font-semibold bg-gradient-to-r from-orange-600 to-teal-400 bg-clip-text text-transparent">
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

import firebaseAppImg from "../assets/Images/firebase.png";
import booktheshowImg from "../assets/Images/booktheshow.png";
import chatAppImg from "../assets/Images/chatappUI.png";
import cryptoLoom from "../assets/Images/cryptoLoom.png";
import clerkAuthAppImg from "../assets/Images/clerkAuth.png";
import notesImg from "../assets/Images/notes.png";
import weatherImg from "../assets/Images/weather.png";
import travelgenieImg from "../assets/Images/travelGenie.png";
import aiStudioVerseImg from "../assets/Images/aiStudioVerse.png";
import { Codesandbox, Github } from "lucide-react";

export const projects = [
  {
    image: aiStudioVerseImg,
    title: "AI Studio Verse ",
    description:
      "AI Studio Verse is a comprehensive AI-powered platform that combines intelligent text generation, advanced image analysis, and interactive chat capabilities. Built with a modern, responsive design, it provides creators and professionals with an intuitive workspace to harness AI tools for content creation and analysis.",
    gitLink: "https://github.com/sanju1098/ai-studio-verse",
    demoLink: "https://ai-studio-verse.vercel.app/",
    techStack: [
      "Vite.JS",
      "Typescript",
      "Tailwind CSS",
      "Gemini AI",
      "Shadcn/ui",
    ],
  },
  {
    image: booktheshowImg,
    title: "Book The Show",
    description:
      "BookTheShow is a full-featured web application that allows users to browse movies, explore theaters, and book movie tickets across multiple cities and languages. It includes Firebase authentication with support for both email/password login and Google sign-in, enabling users to securely manage their bookings with ease.",
    gitLink: "https://github.com/sanju1098/booktheshow",
    demoLink: "https://booktheshow.vercel.app/",
    techStack: [
      "React JS",
      "Tailwind CSS",
      "JavaScript",
      "Firebase",
      "Firebase Auth",
      "Shadcn-UI",
      "Movie API",
    ],
  },
  {
    image: firebaseAppImg,
    title: "Firebase Authentication with Google OAuth",
    description:
      "Developed a secure user authentication system within a React.js application, leveraging Firebase Authentication for seamless login functionality. The application features a modern and intuitive user interface built with Material-UI components, ensuring a polished user experience. Firebase Authentication provides robust, scalable security with support for multiple sign-in methods, including email/password and Google authentication.",
    gitLink: "https://github.com/sanju1098/Firebase-Authentication",
    techStack: ["React JS", "Material UI", "JavaScript", "CSS", "Firebase"],
  },
  {
    image: travelgenieImg,
    title: "TravelGenie.AI",
    description:
      "TravelGenie.AI is a smart travel planning platform powered by Gemini 1.5 Flash AI, designed to create personalized itineraries. By entering details like destination, dates, budget, and interests, users get optimized trip plans with curated activities. The AI enables fast itinerary generation and real-time recommendations.",
    gitLink: "https://github.com/sanju1098/travel-genie-ai",
    demoLink: "https://travel-genie-ai-gem.vercel.app/",
    techStack: [
      "React JS",
      "TypeScript",
      "Material UI",
      "Tailwind CSS",
      "Vite",
      "Gemini 1.5 Flash AI",
    ],
  },
  {
    image: weatherImg,
    title: "Weather Forecast",
    description:
      "Weather Forecast provides real-time weather updates for any searched city with a modern, user-friendly interface. It displays current weather details, including temperature, wind speed, humidity, and atmospheric pressure, along with a five-day forecast. The UI features a clean design with structured cards and clear typography for easy readability.",
    gitLink: "https://github.com/sanju1098/Simple-Notes-App",
    demoLink: "https://reactjs-weather-appplication.netlify.app/",
    techStack: [
      "React JS",
      "Typescript",
      "Vite",
      "Open Weathermap API",
      "JavaScript",
      "CSS",
    ],
  },
  {
    image: cryptoLoom,
    title: "CryptoLoom",
    description:
      "CryptoLoom is a real-time cryptocurrency dashboard that streams live market data from Binance’s WebSocket API. It displays up-to-date price, volume, and percentage change for various cryptocurrencies in both card and table views.",
    gitLink: "https://github.com/sanju1098/crypto-loom",
    demoLink: "https://crypto-loom-pi.vercel.app/",
    techStack: ["React JS", "TypeScript", "Vite", "WebSocket", "Binance API"],
  },
  {
    image: chatAppImg,
    title: "WebSocket Real-Time Chat Application",
    description:
      "Developed a WebSocket-based chat application that enables users to log in and engage in real-time conversations. The app supports dynamic user authentication and maintains chat connections for seamless communication. A login page with user identification and enhance the user experience. Material UI was used to ensure a consistent and user-friendly interface throughout the application.",
    gitLink: "https://github.com/sanju1098/react-websocket-chat",
    techStack: ["React JS", "Vite", "Material UI", "Node Server", "JavaScript"],
  },
  {
    image: clerkAuthAppImg,
    title: "Clerk-authenticated Web app with Mock.io API",
    description:
      "Next.js web application that integrates Clerk for secure user authentication, providing a seamless login and registration experience. It utilizes mockapi.io to handle API requests, simulating a real backend and enabling easy management of user data and interactions.",
    gitLink: "https://github.com/sanju1098/clerk-auth-nextjs",
    techStack: [
      "React JS",
      "TypeScript",
      "Next.JS",
      "Clerk Next.JS",
      "Mock.io",
      "Tailwind CSS",
    ],
  },
  {
    image: notesImg,
    title: "Notes Management App – A Simple CRUD Application",
    description:
      "This project is a CRUD-based Notes Management Application that allows users to create, update, delete, and search for notes efficiently. Users can add new notes, edit existing ones, and remove unwanted notes while utilizing a search functionality to quickly find notes by name.",
    gitLink: "https://github.com/sanju1098/Simple-Notes-App",
    demoLink: "https://notes-app-crud.netlify.app/",
    techStack: ["React JS", "Redux", "Bootstrap", "JavaScript", "CSS"],
  },
];

export const workProfiles = [
  {
    profileName: "GitHub Profile",
    icon: <Github size="3rem" className="text-gray-800 dark:text-white" />,
    description: `I actively maintain several repositories focused on frontend
            development, UI components, and performance optimizations. Explore
            my projects, code snippets, and experiments on GitHub.`,
    link: "https://github.com/sanju1098",
  },
  {
    profileName: "CodeSandbox Profile",
    icon: <Codesandbox size="3rem" className="text-gray-800 dark:text-white" />,
    description: `Apart from my projects, I experiment with React components, UI
            designs, state management techniques, and JavaScript utilities in
            CodeSandbox. You’ll find reusable components, small projects, and
            interactive demos showcasing my work.`,
    link: "https://codesandbox.io/u/Sanjay%20Kumar%20SR",
  },
];

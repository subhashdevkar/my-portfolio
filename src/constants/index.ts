import jsIcon from "../assets/icon-javscript.svg"
import tsIcon from "../assets/icon-typescript.svg"
import tailwindIcon from "../assets/icon-tailwindcss.svg"
import expressIcon from "../assets/icon-express.svg"
import reactIcon from "../assets/icon-react.svg"
import mongodbIcon from "../assets/icon-mongodb.svg"
import socketIcon from "../assets/icon-socket.svg"
import nodeIcon from "../assets/nodejs-1-logo-svg-vector.svg"
import firebaseIcon from "../assets/firebase-1-logo-svg-vector.svg"
import jwtIcon from "../assets/icon-jwt.webp"
import reduxIcon from "../assets/redux-logo-png-transparent.png"
import materialUiIcon from "../assets/material-ui-logo-svg-vector.svg"

export const WORKS_DATA = [
    {
        id: 1,
        title: "Tik Tok Toe Game",
        description: "Tic-Tac-Toe is a classic React-based game with a clean, responsive UI built using Bootstrap. It includes move history navigation, win/draw detection, and state management using React hooks, following a modular and reusable component structure.",
        image: "/tik-tok-toe-game.png",
        link: "https://tic-tac-toe-self-tau.vercel.app/",
        mainTechnologies: ["React.js", "Bootstrap", "JavaScript", "HTML", "CSS"]
    },
    {
        id: 2,
        title: "Cookie-stuff",
        description: "Cookie-Stuff is a full-stack e-commerce application built with React and Node.js, featuring JWT-based authentication, Redux Toolkit for state management, Stripe payment integration, and a scalable backend using Express and MongoDB.",
        image: "/cookie-stuff.png",
        link: "https://cookie-stuff.vercel.app/",
        mainTechnologies: ["Redux Toolkit", "React Router v7", "Tailwind CSS", "Material UI", "Stripe Payments", "JWT Authentication", " Multer", "bcrypt"]
    },
    {
        id: 3,
        title: "Om-kudrat",
        description: "Om-Kudrat is a full-stack web application built with React and Node.js, offering a modern and accessible UI using Tailwind CSS and Radix UI, secure JWT authentication, file uploads, and a scalable Express and MongoDB backend.",
        image: "/Om-kudrat.png",
        link: "https://github.com/subhashdevkar/on-kudrat.git",
        mainTechnologies: ["React 19", " Vite", "Tailwind CSS", "Radix UI", "React Router v7", "Axios", "Shadcn", "Node.js", "Express.js (v5)", "MongoDB", "Mongoose", "JWT Authentication", "Multer", "Nodemailer"]
    },
    {
        id: 4,
        title: "Event Booking System",
        description: "Event Booking System is a MERN-based application that allows users to browse and book events with real-time seat availability. It features JWT authentication, RESTful APIs, and WebSocket-powered live seat updates for a seamless booking experience.",
        image: "/Om-kudrat.png",
        link: "https://github.com/subhashdevkar/on-kudrat.git",
        mainTechnologies: ["React Hook Form", "Zod", "Socket.io Client", "Lucide React", "Mongoose", "Socket.io", "JWT Authentication", "bcrypt", "CORS", "dotenv", "Nodemon"]
    },
    {
        id: 5,
        title: "SplitEx",
        description: "SplitEx is a full-stack expense and payment management application built with React and TypeScript on the frontend and Node.js on the backend, featuring JWT authentication, Stripe payments, Redis-powered background jobs, cron tasks, and a scalable MongoDB architecture.",
        image: "/Om-kudrat.png",
        link: "https://github.com/subhashdevkar/on-kudrat.git",
        mainTechnologies: ["TypeScript", "Shadcn", "Firebase", "Lucide React", "Redis", "BullMQ", "Stripe API", "JWT Authentication", "Firebase Admin", "Nodemailer", "Zod"]
    },
]

export const WORK_EXPERIENCE = [
    {
        id: 1,
        role: "SDE Intern",
        description: "Assisted in the development of scalable web applications using React.js and Node.js. Optimized frontend components for better performance and collaborated with the backend team to integrate RESTful APIs. Participated in code reviews and debugging sessions to ensure high-quality code standards.",
        companyName: "Vyapar TaxOne",
        workOnTech: ["React Js", "Node Js"],
        from: "15/11/2025",
        to: "present"
    },
    {
        id: 2,
        role: "MERN Stack Developer - Intern",
        description: "Built and maintained full-stack applications using the MERN stack. Designed responsive user interfaces with React and managed server-side logic using Node.js and Express. Implemented database schemas and aggregation pipelines in MongoDB to handle complex data requirements.",
        companyName: "Vision Infotech",
        workOnTech: ["React Js", "Node Js"],
        from: "01/09/2025",
        to: "10/11/2025"
    },
    {
        id: 3,
        role: "Digital Marketing Executive",
        description: "Executes strategic digital marketing campaigns focusing on SEO and social media advertising. Managed Facebook Ad campaigns to increase brand awareness and lead generation. Analyzed web traffic metrics to optimize marketing strategies and improve user engagement.",
        companyName: "Tech Vibe Infotech",
        workOnTech: ["SEO", "facebook ads"],
        from: "01/09/2025",
        to: "10/11/2025"
    }
]


export const TECH_STACKS = [
    {
        id: 1,
        name: "React Js",
        icon: reactIcon
    },
    {
        id: 2,
        name: "Node Js",
        icon: nodeIcon
    },
    {
        id: 3,
        name: "MongoDB",
        icon: mongodbIcon
    },
    {
        id: 4,
        name: "Express Js",
        icon: expressIcon
    },
    {
        id: 5,
        name: "Firebase",
        icon: firebaseIcon
    },
    {
        id: 6,
        name: "Socket.io",
        icon: socketIcon
    },
    {
        id: 7,
        name: "JWT",
        icon: jwtIcon
    },
    {
        id: 8,
        name: "Redux",
        icon: reduxIcon
    },
    {
        id: 9,
        name: "tailwind css",
        icon: tailwindIcon
    },
    {
        id: 10,
        name: "Material UI",
        icon: materialUiIcon
    },
    {
        id: 11,
        name: "typescript",
        icon: tsIcon
    },
    {
        id: 12,
        name: "javascript",
        icon: jsIcon
    }
]
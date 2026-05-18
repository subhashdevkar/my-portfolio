import jsIcon from '../assets/icon-javscript.svg'
import tsIcon from '../assets/icon-typescript.svg'
import tailwindIcon from '../assets/icon-tailwindcss.svg'
import expressIcon from '../assets/icon-express.svg'
import reactIcon from '../assets/icon-react.svg'
import mongodbIcon from '../assets/icon-mongodb.svg'
import socketIcon from '../assets/icon-socket.svg'
import nodeIcon from '../assets/nodejs-1-logo-svg-vector.svg'
import firebaseIcon from '../assets/firebase-1-logo-svg-vector.svg'
import jwtIcon from '../assets/icon-jwt.webp'
import reduxIcon from '../assets/redux-logo-png-transparent.png'
import materialUiIcon from '../assets/material-ui-logo-svg-vector.svg'
import grafanaIcon from '../assets/grafana_labs_logo.jpg'
import clickhouseIcon from '../assets/clickhouseinc_logo.jpg'
import kafkaIcon from '../assets/kafka_stream_logo.jpg'
export const prometheusIcon =
    'https://prometheus.io/_next/static/media/prometheus-logo.7aa022e5.svg'
export const LINKEDIN_URL =
    'https://www.linkedin.com/in/subhash-devkar-full-stack-developer'
export const TWITTER_URL = 'https://x.com/subhashdevkar23'
export const GITHUB_URL = 'https://github.com/subhashdevkar'

/** Place your PDF in `public/resume.pdf` (or update this path). */
export const RESUME_URL = '/subhash-devkar-mern-stack-developer.pdf'

export const WORKS_DATA = [
    {
        id: 1,
        title: 'Tik Tok Toe Game',
        description:
            'Tic-Tac-Toe is a classic React-based game with a clean, responsive UI built using Bootstrap. It includes move history navigation, win/draw detection, and state management using React hooks, following a modular and reusable component structure.',
        image: '/tik-tok-toe-game.png',
        link: 'https://tic-tac-toe-self-tau.vercel.app/',
        mainTechnologies: ['React.js', 'Bootstrap', 'JavaScript', 'HTML', 'CSS'],
    },
    {
        id: 2,
        title: 'Cookie-stuff',
        description:
            'Cookie-Stuff is a full-stack e-commerce application built with React and Node.js, featuring JWT-based authentication, Redux Toolkit for state management, Stripe payment integration, and a scalable backend using Express and MongoDB.(it will take a liitle bit time to load everything and for better view explore it on laptop or pc)',
        image: '/cookie-stuff.png',
        link: 'https://cookie-stuff.vercel.app/',
        mainTechnologies: [
            'Redux Toolkit',
            'React Router v7',
            'Tailwind CSS',
            'Material UI',
            'Stripe Payments',
            'JWT Authentication',
            ' Multer',
            'bcrypt',
        ],
    },
    {
        id: 3,
        title: 'Om-kudrat',
        description:
            'Om-Kudrat is a full-stack web application built with React and Node.js, offering a modern and accessible UI using Tailwind CSS and Radix UI, secure JWT authentication, file uploads, and a scalable Express and MongoDB backend.',
        image: '/Om-kudrat.png',
        link: 'https://github.com/subhashdevkar/on-kudrat.git',
        mainTechnologies: [
            'React 19',
            ' Vite',
            'Tailwind CSS',
            'Radix UI',
            'React Router v7',
            'Axios',
            'Shadcn',
            'Node.js',
            'Express.js (v5)',
            'MongoDB',
            'Mongoose',
            'JWT Authentication',
            'Multer',
            'Nodemailer',
        ],
    },
    {
        id: 4,
        title: 'Event Booking System',
        description:
            'Event Booking System is a MERN-based application that allows users to browse and book events with real-time seat availability. It features JWT authentication, RESTful APIs, and WebSocket-powered live seat updates for a seamless booking experience.',
        image: '/EvBook-System.png',
        link: 'https://github.com/subhashdevkar/on-kudrat.git',
        mainTechnologies: [
            'React Hook Form',
            'Zod',
            'Socket.io Client',
            'Lucide React',
            'Mongoose',
            'Socket.io',
            'JWT Authentication',
            'bcrypt',
            'CORS',
            'dotenv',
            'Nodemon',
        ],
    },
    {
        id: 5,
        title: 'SplitEx',
        description:
            'SplitEx is a full-stack expense and payment management application built with React and TypeScript on the frontend and Node.js on the backend, featuring JWT authentication, Stripe payments, Redis-powered background jobs, cron tasks, and a scalable MongoDB architecture.',
        image: '/SplitEx.png',
        link: 'https://github.com/subhashdevkar/on-kudrat.git',
        mainTechnologies: [
            'TypeScript',
            'Shadcn',
            'Firebase',
            'Lucide React',
            'Redis',
            'BullMQ',
            'Stripe API',
            'JWT Authentication',
            'Firebase Admin',
            'Nodemailer',
            'Zod',
        ],
    },
]

export const WORK_EXPERIENCE = [
    {
        id: 1,
        companyLogo: 'https://static.suvit.io/images/taxone/logo/s_logo.svg',
        role: 'SDE',
        description:
            'Implemented production-grade monitoring using Grafana and Prometheus to track system performance and application metrics in real time. Worked with Kafka for event streaming and ClickHouse for high-performance log storage and analytics to monitor system behavior.Assisted in the development of scalable web applications using React.js and Node.js.',
        companyName: 'Vyapar TaxOne',
        workOnTech: ['React Js', 'Node Js'],
        from: 'Nov 2025',
        to: 'Present',
        link: 'https://taxone.vyapar.com/',
    },
    {
        id: 2,
        companyLogo:
            'https://bunny-wp-pullzone-dth19nafvq.b-cdn.net/wp-content/uploads/2025/01/vision-new-header-logo.svg',
        role: 'MERN Stack Developer - Intern',
        description:
            'Built and maintained full-stack applications using the MERN stack. Designed responsive user interfaces with React and managed server-side logic using Node.js and Express. Implemented database schemas and aggregation pipelines in MongoDB to handle complex data requirements.',
        companyName: 'Vision Infotech',
        workOnTech: ['React Js', 'Node Js'],
        from: 'Sep 2025',
        to: 'Nov 2025',
        link: 'http://visioninfotech.net/',
    },
    {
        id: 3,
        companyLogo: '/tech-vibe-infotech.jpg',
        role: 'Digital Marketing Executive',
        description:
            'Executes strategic digital marketing campaigns focusing on SEO and social media advertising. Managed Facebook Ad campaigns to increase brand awareness and lead generation. Analyzed web traffic metrics to optimize marketing strategies and improve user engagement.',
        companyName: 'Tech Vibe Infotech',
        workOnTech: ['SEO', 'facebook ads'],
        from: 'Jan 2024',
        to: 'Dec 2024',
        link: 'https://techvibeinfotech.com/',
    },
]

export const TECH_STACKS = [
    {
        id: 1,
        name: 'React Js',
        icon: reactIcon,
    },
    {
        id: 2,
        name: 'Node Js',
        icon: nodeIcon,
    },
    {
        id: 3,
        name: 'MongoDB',
        icon: mongodbIcon,
    },
    {
        id: 4,
        name: 'Express Js',
        icon: expressIcon,
    },
    {
        id: 5,
        name: 'Firebase',
        icon: firebaseIcon,
    },
    {
        id: 6,
        name: 'Socket.io',
        icon: socketIcon,
    },
    {
        id: 7,
        name: 'JWT',
        icon: jwtIcon,
    },
    {
        id: 8,
        name: 'Redux',
        icon: reduxIcon,
    },
    {
        id: 9,
        name: 'tailwind css',
        icon: tailwindIcon,
    },
    {
        id: 10,
        name: 'Material UI',
        icon: materialUiIcon,
    },
    {
        id: 11,
        name: 'typescript',
        icon: tsIcon,
    },
    {
        id: 12,
        name: 'javascript',
        icon: jsIcon,
    },
    {
        id: 13,
        name: 'Prometheus',
        icon: prometheusIcon,
    },
    {
        id: 14,
        name: 'Grafana',
        icon: grafanaIcon,
    },
    {
        id: 15,
        name: 'Click House',
        icon: clickhouseIcon,
    },
    {
        id: 16,
        name: 'Kafka',
        icon: kafkaIcon,
    },
]

export const READ_BOOKS = [
    {
        id: 1,
        title: 'Rich Dad Poor Dad',
        image: 'https://m.media-amazon.com/images/I/71HJj3XmheL._SL1500_.jpg',
        link: 'https://www.amazon.in/Rich-Dad-Poor-Middle-Anniversary/dp/1612681131/ref=sr_1_2_sspa?s=books&sr=1-2-spons&aref=YtlHIVNm3F&sp_csd=d2lkZ2V0TmFtZT1zcF9hdGY&psc=1',
    },
    {
        id: 2,
        title: 'The Psychology of Money',
        image: 'https://m.media-amazon.com/images/I/71XEsXS5RlL._SL1500_.jpg',
        link: 'https://www.amazon.in/Psychology-Money-Morgan-Housel/dp/9390166268/ref=sr_1_1_sspa?s=books&sr=1-1-spons&aref=lfOubyymlm&sp_csd=d2lkZ2V0TmFtZT1zcF9hdGY&psc=1',
    },
    {
        id: 3,
        title: 'Atomic Habits',
        image: 'https://m.media-amazon.com/images/I/817HaeblezL._SL1500_.jpg',
        link: 'https://www.amazon.in/Atomic-Habits-James-Clear/dp/1847941834/ref=sr_1_4?sr=8-4',
    },
    {
        id: 4,
        title: 'Rich Dad\'s Cashflow Quadrant',
        image: 'https://m.media-amazon.com/images/I/71Dtqc3HWrL._SL1500_.jpg',
        link: 'https://www.amazon.in/Rich-Dads-Cashflow-Quadrant-Financial/dp/1612680062/ref=sr_1_3?sr=8-3',
    },
    {
        id: 5,
        title: 'One Up On Wall Street',
        image: 'https://m.media-amazon.com/images/I/71sNaCDncJL._SL1500_.jpg',
        link: 'https://www.amazon.in/One-Up-Wall-Street-Paperback/dp/0743200403?s=bazaar',
    },
    {
        id: 6,
        title: 'The Parable of the Pipeline',
        image: 'https://m.media-amazon.com/images/I/81nU0pj10xL._SL1500_.jpg',
        link: 'https://www.amazon.in/Parable-Pipeline-Ongoing-Residual-Economy/dp/9388241770/ref=sr_1_2?sr=8-2',
    },
    {
        id: 7,
        title: 'Secrets Of The Millionaire Mind',
        image: 'https://m.media-amazon.com/images/I/71arFc42rFL._SL1500_.jpg',
        link: 'https://www.amazon.in/Secrets-Millionaire-Mind-Think-Rich/dp/0749927895/ref=sr_1_4?sr=8-4',
    },
    {
        id: 8,
        title: 'Think And Grow Rich',
        image: 'https://m.media-amazon.com/images/I/61IxJuRI39L._SL1000_.jpg',
        link: 'https://www.amazon.in/Think-Grow-Rich-Landmark-Bestseller/dp/1585424331/ref=sr_1_5?sr=8-5',
    },
    {
        id: 9,
        title: 'The Richest Man in Babylon',
        image: 'https://m.media-amazon.com/images/I/71HX66uNvfL._SL1500_.jpg',
        link: 'https://www.amazon.in/Richest-Man-Babylon-George-Clason/dp/9388144317/ref=sr_1_3?sr=8-3',
    },
    {
        id: 10,
        title: 'Real Estate Planning',
        image: 'https://m.media-amazon.com/images/I/71Cpq708BBL._SL1500_.jpg',
        link: 'https://www.amazon.in/Real-Estate-Planning-How-House/dp/939037832X/ref=sr_1_1?sr=8-1',
    },
    {
        id: 11,
        title: 'Goals',
        image: 'https://m.media-amazon.com/images/I/81IOIPrD6KL._SL1500_.jpg',
        link: 'https://www.amazon.in/Penguin-Goals-Brian-Tracy/dp/1609947002/ref=sr_1_4?sr=8-4',
    },
    {
        id: 12,
        title: 'Eat That Frog!',
        image: 'https://m.media-amazon.com/images/I/61VBqinG-ZL._SL1500_.jpg',
        link: 'https://www.amazon.in/That-Frog-Best-Book-paperBack/dp/B0GTDJ2GFN/ref=sr_1_3?sr=8-3',
    },
    {
        id: 13,
        title: 'Who Moved My Cheese?',
        image: 'https://m.media-amazon.com/images/I/71vfjx-h4wL._SL1500_.jpg',
        link: 'https://www.amazon.in/Who-Moved-My-Cheese-Amazing/dp/0091816971/ref=sr_1_2?sr=8-2',
    },
]

export const BOOKS_TO_READ = [
    {
        id: 1,
        title: 'Shoe Dog',
        image: 'https://m.media-amazon.com/images/I/71HJj3XmheL._SL1500_.jpg',
        link: 'https://www.amazon.in/Shoe-Dog-Memoir-Creator-Nike/dp/0812993718/ref=sr_1_2_sspa?s=books&sr=1-2-spons&aref=YtlHIVNm3F&sp_csd=d2lkZ2V0TmFtZT1zcF9hdGY&psc=1',
    },
    {
        id: 2,
        title: 'Dhirubhaism',
        image: 'https://m.media-amazon.com/images/I/71HJj3XmheL._SL1500_.jpg',
        link: 'https://www.amazon.in/Dhirubhaism-Khalil-Gibran/dp/9390166268/ref=sr_1_2_sspa?s=books&sr=1-2-spons&aref=YtlHIVNm3F&sp_csd=d2lkZ2V0TmFtZT1zcF9hdGY&psc=1',
    },
    {
        id: 3,
        title: 'Thinking, Fast and Slow',
        image: 'https://m.media-amazon.com/images/I/71HJj3XmheL._SL1500_.jpg',
        link: 'https://www.amazon.in/Thinking-Fast-Slow-Daniel-Kahneman/dp/0374533555/ref=sr_1_2_sspa?s=books&sr=1-2-spons&aref=YtlHIVNm3F&sp_csd=d2lkZ2V0TmFtZT1zcF9hdGY&psc=1',
    },
]
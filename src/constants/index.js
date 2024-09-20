import { meta, shopify, starbucks, tesla, spider } from "../assets/images";
import {
    car,
    contact,
    css,
    estate,
    express,
    git,
    github,
    html,
    javascript,
    linkedin,
    mongodb,
    mui,
    nodejs,
    pricewise,
    react,
    snapgram,
    summiz,
    tailwindcss,
    threads,
    typescript,
    golang,
    docker,
    nginx,
    python,
    redis,
    mysql,
    chat,
    sports
} from "../assets/icons";

export const skills = [
    {
        imageUrl: css,
        name: "CSS",
        type: "Frontend",
    },
    {
        imageUrl: express,
        name: "Express",
        type: "Backend",
    },
    {
        imageUrl: git,
        name: "Git",
        type: "Version Control",
    },
    {
        imageUrl: github,
        name: "GitHub",
        type: "Version Control",
    },
    {
        imageUrl: html,
        name: "HTML",
        type: "Frontend",
    },
    {
        imageUrl: javascript,
        name: "JavaScript",
        type: "Frontend",
    },
    {
        imageUrl: mongodb,
        name: "MongoDB",
        type: "Database",
    },
    {
        imageUrl: mui,
        name: "Material-UI",
        type: "Frontend",
    },
    {
        imageUrl: nodejs,
        name: "Node.js",
        type: "Backend",
    },
    {
        imageUrl: react,
        name: "React",
        type: "Frontend",
    },
    {
        imageUrl: tailwindcss,
        name: "Tailwind CSS",
        type: "Frontend",
    },
    {
        imageUrl: typescript,
        name: "TypeScript",
        type: "Frontend",
    },
    {
        imageUrl: golang,
        name: "Golang",
        type: "Backend"
    },
    {
        imageUrl: docker,
        name: "Docker",
        type: "Devops"
    },
    {
        imageUrl: nginx,
        name: "Nginx",
        type: "Devops"
    },
    {
        imageUrl: python,
        name: "Python",
        type: "Backend"
    },
    {
        imageUrl: redis,
        name: "Redis",
        type: "Database"
    },
    {
        imageUrl: mysql,
        name: "Mysql",
        type: "Database"
    }
];

export const experiences = [
    {
        title: "Software Developer",
        company_name: "Spider R&D",
        icon: spider,
        iconbg: "#000000",
        date: "Jan 2024 - Present",
        points: [
           "Worked on ideating and designing tasks related to Database Management System and Application Development for first year students.",
           "Collaborated with team members for various group projects.",
           "Conducted a workshop during Spider Week '24, which led to knowledge sharing on large scale system design.",
           "Participated in NIT Trichy Pragyan '24 Open House Exhibition, showcasing various projects developed by the club.",
           "Mentored participants in the TriNIT hackathon, offering guidance, technical support and strategic advices, helping teams to effectively tackle challenges."
        ]
    },
];

export const socialLinks = [
    {
        name: 'Contact',
        iconUrl: contact,
        link: '/contact',
    },
    {
        name: 'GitHub',
        iconUrl: github,
        link: 'https://github.com/akilesh1706',
    },
    {
        name: 'LinkedIn',
        iconUrl: linkedin,
        link: 'https://www.linkedin.com/in/akileshsk/',
    }
];

export const projects = [
    {
        iconUrl: summiz,
        theme: 'btn-back-red',
        name: 'Nocaine',
        description: 'An intelligent system that monitors, identifies, and investigates illegal activities hosted on the dark web. Nocaine classifies the dark web services it reaches into various crime classes based on text and image content available in it',
        link: 'https://github.com/akilesh1706/RJPOLICE_HACK_1429_NOCAINE_11'
    },
    {
        iconUrl: sports,
        theme: 'btn-back-yellow',
        name: 'Sportsfete',
        description: 'A web platform developed for my college’s annual interdepartmental sports fest, where students from various departments compete in a range of sports events.',
        link: 'https://sportsfete.org'
    },
    {
        iconUrl: chat,
        theme: 'btn-back-green',
        name: 'Chat App',
        description: 'Developed a real time chat application enabling seamless real time communication amoung users, implementing features for creating and engaging in private chat rooms for group specific interactions.',
        link: 'https://github.com/akilesh1706/websocket',
    }
];
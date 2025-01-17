// carreer icons imports
import certificateIcon from "../public/certificate.svg";
import collegeIcon from "../public/college.svg";
import telekomIcon from "../public/telekom.svg";
import machinasIcon from "../public/machinas.svg";

// tech imports
import reactIcon from '../public/react.svg';
import htmlIcon from '../public/html.svg';
import cssIcon from '../public/css.svg';
import javascriptIcon from '../public/javascript.svg';
import typescriptIcon from '../public/typescript.svg';
import tailwindIcon from '../public/tailwind.svg';
import bootstrapIcon from '../public/bootstrap.svg';
import nodejsIcon from '../public/nodejs.svg';
import expressjsIcon from '../public/expressjs.svg';
import gitIcon from '../public/git.svg';
import jQueryIcon from '../public/jquery.svg';
import angularIcon from '../public/angular.svg';
import mongoDbIcon from '../public/mongodb.svg';
import mysqlIcon from '../public/mysql.svg';
import python from '../public/python.svg';
import dlib from '../public/dlib.svg';
import openCV from '../public/openCV.svg';
import scikitLearn from '../public/scikit-learn.svg';
import Matplotlib from '../public/matplotlib.svg';

// project imports
import spendingAppImage from '../public/spendingApp.png';
import twitterImage from '../public/Twitter.png';
import gazeImage from '../public/GazeAI.png';



export const techIcons = {
    React: { icon: reactIcon, isRotating: true, hasBackground: false },
    HTML: { icon: htmlIcon, isRotating: false, hasBackground: false },
    CSS: { icon: cssIcon, isRotating: false, hasBackground: false },
    JavaScript: { icon: javascriptIcon, isRotating: false, hasBackground: false },
    TypeScript: { icon: typescriptIcon, isRotating: false, hasBackground: false },
    Tailwind: { icon: tailwindIcon, isRotating: false, hasBackground: false },
    Bootstrap: { icon: bootstrapIcon, isRotating: false, hasBackground: false },
    NodeJS: { icon: nodejsIcon, isRotating: false, hasBackground: false },
    ExpressJS: { icon: expressjsIcon, isRotating: false, hasBackground: true },
    Git: { icon: gitIcon, isRotating: false, hasBackground: true },
    jQuery: { icon: jQueryIcon, isRotating: false, hasBackground: true },
    Angular: { icon: angularIcon, isRotating: false, hasBackground: false },
    MongoDB: { icon: mongoDbIcon, isRotating: false, hasBackground: false },
    MySQL: { icon: mysqlIcon, isRotating: false, hasBackground: true },
    Python: { icon: python, isRotating: false, hasBackground: false },
    Dlib: { icon: dlib, isRotating: false, hasBackground: true },
    OpenCV: { icon: openCV, isRotating: false, hasBackground: false },
    'scikit-learn': { icon: scikitLearn, isRotating: false, hasBackground: true },
    Matplotlib: { icon: Matplotlib, isRotating: false, hasBackground: false }
};

export const navigationLinks = [
  { text: "About Me", id: "about-me" },
  { text: "Skills", id: "skills" },
  { text: "Career", id: "career" },
  { text: "Projects", id: "projects" },
  { text: "Contact", id: "contact" },
];

export const profileDescription = [
  "Full Stack Developer 💻",
  "Snowboarder 🏂",
  "Footballer ⚽",
  "Traveller ✈️",
  "Gamer 👾",
];

export const careerAchievements = [
  {
    title: "Ion Creanga National College",
    date: "2014-2018",
    description: "Mathematics-Informatics",
    icon: certificateIcon,
  },
  {
    title:
      "Faculty of Electronics, Telecommunications and Information Technology",
    date: "2018-2022",
    description: "Electrical Engineering",
    icon: collegeIcon,
  },
  {
    title: "Telekom Romania",
    date: "June 2021 - September 2021",
    description: "Internship",
    icon: telekomIcon,
  },
  {
    title: "Machinas",
    date: "September 2022 - Present",
    description: "Full Stack Developer",
    icon: machinasIcon,
  },
];

export const projects = [
  {
    title: "Expense Tracker",
    description:
      "A website where you can track your incomes and expenses, as well as visualize the data in charts. It is also possible to add a note to each transaction.",
    image: spendingAppImage,
    link: "https://spending-app-frontend.vercel.app",
    technologies: ["React", "Tailwind", "NodeJS", "ExpressJS", "MongoDB"],
  },
  {
    title: "Twitter Clone",
    description:
      "A clone for a social media platform where users can post tweets, follow others, like, and comment. It includes a real-time feed, hashtags, and user authentication.",
    image: twitterImage,
    link: "https://twitter-clone-ger1git.vercel.app",
    technologies: ["React", "Tailwind", "NodeJS", "ExpressJS", "MongoDB"],
  },
  {
    title: "Gaze Prediction",
    description:
      "An application that predicts the direction of gaze in images using a convolutional neural network (CNN). Showcased expertise in machine learning and computer vision with OpenCV-based image processing.",
    image: gazeImage,
    link: "",
    technologies: ["Python", "Dlib", "OpenCV", "scikit-learn", "Matplotlib"],
  },
];

export const markupLogos = [
  { icon: htmlIcon, label: 'HTML' },
  { icon: cssIcon, label: 'CSS' },
  { icon: tailwindIcon, label: 'Tailwind' },
  { icon: bootstrapIcon, label: 'Bootstrap' }
];

export const databasesLogos = [
  { icon: mongoDbIcon, label: 'MongoDB' },
  { icon: mysqlIcon, label: 'MySQL' }
];

export const frontendLogos = [
  { icon: reactIcon, label: 'React' },
  { icon: angularIcon, label: 'Angular' },
  { icon: jQueryIcon, label: 'jQuery' }
];

export const backendLogos = [
  { icon: nodejsIcon, label: 'NodeJS' },
  { icon: expressjsIcon, label: 'Express.js' }
];

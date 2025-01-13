import certificateIcon from "../public/certificate.svg";
import collegeIcon from "../public/college.svg";
import telekomIcon from "../public/telekom.svg";
import machinasIcon from "../public/machinas.svg";

export const navigationLinks = [
  { text: "About Me", id: "about-me" },
  { text: "Skills", id: "skills" },
  { text: "Career", id: "career" },
  { text: "Projects", id: "projects" },
  { text: "Contact", id: "contact" },
];

export const profileDescription = [
  "Full Stack Developer💻",
  "Snowboarder🏂",
  "Footballer⚽",
  "Traveller✈️",
  "Gamer👾",
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
    title: "Machinas Ecommerce SRL",
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
    image: "src/public/spendingApp.png",
    link: "https://github.com/Ger1Git/spendingApp",
    technologies: ["React", "Tailwind", "NodeJS", "ExpressJS", "MongoDB"],
  },
  {
    title: "Twitter Clone",
    description:
      "A clone for a social media platform where users can post tweets, follow others, like, and comment. It includes a real-time feed, hashtags, and user authentication.",
    image: "src/public/portfolio.png",
    link: "https://github.com/Ger1Git/TwitterClone",
    technologies: ["React", "Tailwind", "NodeJS", "ExpressJS"],
  },
  {
    title: "Expense Tracker",
    description:
      "A website where you can track your incomes and expenses, as well as visualize the data in charts. It is also possible to add a note to each transaction.",
    image: "src/public/portfolio.png",
    link: "https://github.com/Ger1Git/spendingApp",
    technologies: ["React", "Tailwind", "NodeJS", "ExpressJS", "MongoDB"],
  },
];

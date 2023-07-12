import Project from "./Project";
import hackShop from "../public/HackShop.jpg";
import hackFlix from "../public/HackFlix.jpg";
import portfolio from "../public/Portfolio.jpg";
import javaScriptLogo from "../public/javascriptLogo.svg";
import reactLogo from "../public/reactLogo.svg";
import reduxLogo from "../public/Redux.png";
import html5Logo from "../public/html-5.svg";
import cssLogo from "../public/css-3.svg";
import bootstrapLogo from "../public/Bootstrap_logo.svg";
import nodeLogo from "../public/nodejsLogo.svg";
import expressLogo from "../public/express.png";
import mysqlLogo from "../public/mysql-official.svg";
import emailjsLogo from "../public/emailjs.svg";
import gitLogo from "../public/git.svg";
import gitHubLogo from "../public/githubLogo.png";
import sequelizeLogo from "../public/sequelize.png";
import nextLogo from "../public/next-js.svg";
import tailwindLogo from "../public/Tailwind_CSS_Logo.svg";

const projects = [
  {
    name: "HackShop",
    imgSrc: hackShop,
    description:
      "HackShop was the final project of the Full Stack Web Development Bootcamp held at Hack Academy. The objective of this project was to put into practice the knowledge acquired during the course using the technologies seen in the course. We developed both the Backend and the FrontEnd using the following technologies.",
    technologies: [
      {
        name: "JavaScript",
        techImg: javaScriptLogo,
      },
      {
        name: "React",
        techImg: reactLogo,
      },
      {
        name: "Redux",
        techImg: reduxLogo,
      },
      {
        name: "HTML5",
        techImg: html5Logo,
      },
      {
        name: "CSS3",
        techImg: cssLogo,
      },
      {
        name: "Bootstrap",
        techImg: bootstrapLogo,
      },
      {
        name: "Node Js",
        techImg: nodeLogo,
      },
      {
        name: "Express",
        techImg: expressLogo,
      },
      {
        name: "Sequelize",
        techImg: sequelizeLogo,
      },
      {
        name: "MySQL",
        techImg: mysqlLogo,
      },
      {
        name: "Git",
        techImg: gitLogo,
      },
      {
        name: "GitHub",
        techImg: gitHubLogo,
      },
    ],
  },
  {
    name: "HackFlix",
    imgSrc: hackFlix,
    description:
      "Web application that uses React Js consuming The Movie Database API to provide an easy-to-use movie and series browsing experience. The application allows users to filter movies and series by category, sort them by popularity, rating and release date, as well as search for movies by title. In addition, users can click on each movie or series to get more information, such as title, overview, average rating and watch a video.",
    technologies: [
      {
        name: "JavaScript",
        techImg: javaScriptLogo,
      },
      {
        name: "React",
        techImg: reactLogo,
      },
      {
        name: "HTML5",
        techImg: html5Logo,
      },
      {
        name: "CSS3",
        techImg: cssLogo,
      },
      {
        name: "Bootstrap",
        techImg: bootstrapLogo,
      },
    ],
  },
  {
    name: "Portfolio",
    imgSrc: portfolio,
    description:
      "My personal portfolio was created to showcase my projects and skills. I have done both design and development and I am very happy with the result. I used NextJs to build it, Tailwind CSS to style it, framer motion to create the animations and emailjs for the contact form submission.",
    technologies: [
      {
        name: "NextJs",
        techImg: nextLogo,
      },
      {
        name: "React",
        techImg: reactLogo,
      },
      {
        name: "Tailwind",
        techImg: tailwindLogo,
      },
      {
        name: "EmailJs",
        techImg: emailjsLogo,
      },
    ],
  },
];

export default function Projects() {
  return (
    <div
      className="w-full min-h-screen px-8 md:px-20 pt-32 md:pt-20 py-8 lg:py-20 "
      id="projects"
    >
      <div className="flex items-center justify-center">
        <h3 className="text-4xl">Projects</h3>
      </div>
      <div className="mt-8 md:mt-20 md:p-10 xl:px-50 w-full 2xl:w-[80%] 2xl:mx-auto flex flex-col flex-wrap h-auto items-center justify-around gap-20 text-gray-400">
        {projects.map((project, i) => {
          return <Project project={project} key={project.imgSrc + i} />;
        })}
      </div>
    </div>
  );
}

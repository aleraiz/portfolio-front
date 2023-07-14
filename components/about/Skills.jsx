import { useEffect, useRef } from "react";
import SkillLogo from "../SkillLogo";
import htmlImage from "../../public/html-5.svg";
import cssImage from "../../public/css-3.svg";
import javaScript from "../../public/javascriptLogo.svg";
import reactLogo from "../../public/reactLogo.svg";
import reduxLogo from "../../public/Redux.png";
import nextJs from "../../public/next-js.svg";
import node from "../../public/nodejsLogo.svg";
import express from "../../public/express.png";
import mySQL from "../../public/mysql-official.svg";
import mongo from "../../public/mongodb.png";
import git from "../../public/git.svg";
import bootstrap from "../../public/Bootstrap_logo.svg";
import tailwind from "../../public/Tailwind_CSS_Logo.svg";
import gitHub from "../../public/githubLogo.png";
import sequelize from "../../public/sequelize.png";
import { motion, useInView, useAnimation } from "framer-motion";

const skills = [
  {
    imgSrc: htmlImage,
    alt: "HTML logo",
    style: "w-3/6",
  },
  {
    imgSrc: cssImage,
    alt: "CSS logo",
    style: "w-3/6",
  },
  {
    imgSrc: javaScript,
    alt: "JavaScript logo",
    style: "w-4/6",
  },
  {
    imgSrc: reactLogo,
    alt: "React logo",
    style: "w-5/6",
  },
  {
    imgSrc: reduxLogo,
    alt: "Redux logo",
    style: "w-5/6",
  },
  {
    imgSrc: nextJs,
    alt: "NextJs logo",
    style: "w-4/6",
  },
  {
    imgSrc: node,
    alt: "NodeJs logo",
    style: "w-5/6",
  },
  {
    imgSrc: express,
    alt: "Express logo",
    style: "w-4/6",
  },
  {
    imgSrc: sequelize,
    alt: "Sequelize logo",
    style: "w-4/6",
  },
  {
    imgSrc: mySQL,
    alt: "mySQL logo",
    style: "w-4/6",
  },
  {
    imgSrc: mongo,
    alt: "MongoDB logo",
    style: "w-4/6",
  },
  {
    imgSrc: git,
    alt: "Git logo",
    style: "w-4/6",
  },
  {
    imgSrc: bootstrap,
    alt: "Bootstrap logo",
    style: "w-4/6",
  },
  {
    imgSrc: tailwind,
    alt: "Tailwind logo",
    style: "w-4/6",
  },
  {
    imgSrc: gitHub,
    alt: "Github logo",
    style: "w-50 bg-dark",
  },
];

export default function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.6 });
  const skillsControl = useAnimation();

  useEffect(() => {
    isInView ? skillsControl.start("visible") : null;
  }, [isInView]);
  return (
    <div className="flex flex-col items-center mx-auto lg:w-[75%]">
      <h3 className="text-light text-3xl my-10">Skills</h3>
      <div
        ref={ref}
        className=" w-full flex  flex-wrap h-auto items-center justify-around "
      >
        {skills.map((skill, i) => {
          return (
            <motion.div
              key={i + skill.imgSrc}
              variants={{
                hidden: {
                  opacity: 0,
                  translateY: i % 2 === 0 ? "-12vh" : "12vh",
                },
                visible: { opacity: 1, translateY: 0 },
              }}
              initial={"hidden"}
              animate={skillsControl}
              transition={{
                type: "spring",
                duration: 0.8,
                delay: i * 0.3,
                bounce: 0.4,
              }}
            >
              <SkillLogo
                key={i + skill.imgSrc}
                className={skill.style}
                imgSrc={skill.imgSrc}
                alt={skill.alt}
              />
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}

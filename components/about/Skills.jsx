import { useEffect, useRef } from "react";
import SkillLogo from "../SkillLogo";
import htmlImage from "../../public/html-5.svg";
import cssImage from "../../public/css-3.svg";
import javaScript from "../../public/javascriptLogo.svg";
import reactLogo from "../../public/reactLogo.svg";
import reduxLogo from "../../public/Redux.png";
import nextJs from "../../public/next-js.svg";
import mySQL from "../../public/mysql-official.svg";
import mongo from "../../public/mongodb.png";
import git from "../../public/git.svg";
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
    style: "w-6/6",
  },
  {
    imgSrc: reduxLogo,
    alt: "Redux logo",
    style: "w-4/6",
  },
  {
    imgSrc: nextJs,
    alt: "NextJs logo",
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
];

export default function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const skillsControl = useAnimation();

  useEffect(() => {
    isInView ? skillsControl.start("visible") : null;
  }, [isInView]);
  return (
    <div className="flex flex-col items-center mx-auto my-24 lg:w-[75%]">
      <h3 ref={ref} className="text-light text-3xl mb-10">
        Skills
      </h3>
      <div className=" w-full flex  flex-wrap h-auto items-center justify-around lg:my-40">
        {skills.map((skill, i) => {
          return (
            <motion.div
              key={i + skill.imgSrc}
              variants={{
                hidden: {
                  opacity: 0,
                  translateY: i % 2 === 0 ? "-10vh" : "10vh",
                },
                visible: { opacity: 1 },
                visible: { opacity: 1, translateY: 0 },
              }}
              initial={"hidden"}
              animate={skillsControl}
              transition={{
                type: "spring",
                duration: 1,
                delay: i * 0.5,
                bounce: 0.4,
              }}
            >
              <SkillLogo
                className={skill.style}
                imgSrc={skill.imgSrc}
                alt={skill.alt}
              />
            </motion.div>
          );
        })}
      </div>
      {/* <motion.div
        initial={{ opacity: 0, scale: 0 }}
        whileInView={{ opacity: 1, scale: 0.8 }}
        transition={{ duration: 2 }}
        className=" w-full flex  flex-wrap h-auto items-center justify-around"
      >
        <SkillLogo className={"w-3/6"} imgSrc={htmlImage} alt={"HTML logo"} />
        <SkillLogo className={"w-3/6"} imgSrc={cssImage} alt={"CSS logo"} />
        <SkillLogo
          className={"w-4/6"}
          imgSrc={javaScript}
          alt={"JavScript logo"}
        />
        <SkillLogo className={"w-4/6"} imgSrc={reactLogo} alt={"React logo"} />
        <SkillLogo className={"w-6/6"} imgSrc={reduxLogo} alt={"Redux logo"} />
        <SkillLogo className={"w-4/6"} imgSrc={nextJs} alt={"NextJs logo"} />
        <SkillLogo className={"w-4/6"} imgSrc={mySQL} alt={"MySQL logo"} />
        <SkillLogo className={"w-4/6"} imgSrc={mongo} alt={"MongoDB logo"} />
        <SkillLogo className={"w-4/6"} imgSrc={git} alt={"Git logo"} />
      </motion.div> */}
    </div>
  );
}

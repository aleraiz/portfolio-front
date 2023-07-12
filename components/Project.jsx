import Image from "next/image";
import { motion } from "framer-motion";
import style from "../styles/Project.module.css";
import { Link } from "react-scroll";

export default function Project({ project }) {
  let { technologies } = project;

  return (
    <div className={`${style.project}`}>
      <div className="grid md:grid-cols-4 gap-5 bg-dark md:p-2 rounded-lg">
        <div className="md:col-span-1">
          {project.name === "Portfolio" ? (
            <Link
              to={project.link}
              spy={true}
              smooth={true}
              duration={1000}
              activeClass="active"
            >
              <Image
                src={project.imgSrc}
                width={480}
                height={480}
                alt={project.name}
                className="cursor-pointer sm:w-[480px] lg:w-[250px] rounded-lg md:rounded-none"
              />
            </Link>
          ) : (
            <a href={project.link} target="_blank">
              <Image
                src={project.imgSrc}
                width={480}
                height={480}
                alt={project.name}
                className="cursor-pointer sm:w-[480px] lg:w-[250px] rounded-lg md:rounded-none"
              />
            </a>
          )}
        </div>
        <div className="hidden md:flex flex-col col-span-3 ">
          <div className="text-sm">{project.description}</div>
          <div className="hidden md:flex gap-2 mt-5 flex-wrap">
            {technologies &&
              technologies.map((technologie) => {
                return (
                  <div className="flex items-center" key={technologie.name}>
                    <div
                      className={`flex items-center ${
                        technologie.name === "NextJs"
                          ? "bg-light rounded-full"
                          : ""
                      }`}
                    >
                      <Image
                        src={technologie.techImg}
                        width={20}
                        height={20}
                        alt={`${technologie.name} logo`}
                        className={`cursor-pointer h-5 ${
                          technologie.name === "Github" ? "w-50" : ""
                        } ${technologie.name === "NextJs" ? "scale-105" : ""}`}
                      />
                    </div>
                    <div className="text-sm ms-1 ">{technologie.name}</div>
                  </div>
                );
              })}
          </div>
        </div>
      </div>
    </div>
  );
}

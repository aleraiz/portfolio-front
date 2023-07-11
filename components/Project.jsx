import Image from "next/image";
import { motion } from "framer-motion";
import style from "../styles/Project.module.css";

export default function Project({ project }) {
  let { technologies } = project;

  return (
    <div className={`${style.project}`}>
      <div className="grid md:grid-cols-4 gap-5 bg-dark md:p-2 rounded-lg">
        <div className="md:col-span-1">
          <Image
            src={project.imgSrc}
            width={480}
            height={480}
            alt={project.name}
            className="cursor-pointer sm:w-[480px] lg:w-[250px] rounded-lg md:rounded-none"
          />
        </div>
        <div className="hidden md:flex flex-col col-span-3 ">
          <div className="text-sm">{project.description}</div>
          <div className="hidden md:flex gap-2 mt-5 flex-wrap">
            {technologies &&
              technologies.map((technologie) => {
                return (
                  <div className="flex items-center" key={technologie.name}>
                    <div className="flex items-center">
                      <Image
                        src={technologie.techImg}
                        width={20}
                        height={20}
                        alt={`${technologie.name} logo`}
                        className={`cursor-pointer h-5 ${
                          technologie.name === "Github" ? "w-50" : ""
                        }`}
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

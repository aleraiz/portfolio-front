import Image from "next/image";
import { motion } from "framer-motion";

export default function Project({ project }) {
  let { technologies } = project;

  return (
    <div className="text-gray-400 flex flex-col">
      <div className="flex gap-10">
        <Image
          src={project.imgSrc}
          width={480}
          height={480}
          alt={project.name}
          className="cursor-pointer object-contain sm:w-[480px]"
        />
        <div className="hidden lg:flex items-center">
          {/* <div>{project.name}</div> */}
          <div className="text-sm">{project.description}</div>
        </div>
      </div>

      <div className="hidden lg:flex gap-2 mt-5 flex-wrap">
        {technologies &&
          technologies.map((technologie) => {
            return (
              <div className="flex items-center " key={technologie.name}>
                <div className="flex items-center">
                  <Image
                    src={technologie.techImg}
                    width={20}
                    height={20}
                    alt={`${technologie.name} logo`}
                    // className="cursor-pointer h-5"
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
  );
}

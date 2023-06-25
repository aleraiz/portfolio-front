import Image from "next/image";
import { motion, useAnimation } from "framer-motion";
import { useEffect, useState } from "react";

export default function SkillLogo({ imgSrc, className, alt }) {
  return (
    <motion.div
      whileHover={{ scale: 1.1 }}
      className="h-20 w-20 sm:h-32 sm:w-32 flex justify-center items-center bg-light rounded-full m-3 sm:m-8 cursor-pointer relative"
    >
      <Image src={imgSrc} className={`${className}`} alt={`${alt}`} />
      {/* <div className="absolute h-20 w-20 sm:h-32 sm:w-32 rounded-full">
        <motion.div
          variants={{
            hidden: {
              opacity: 0,
            },
            visible: { opacity: 1 },
          }}
          initial={"hidden"}
          // whileHover={{ opacity: 1, transition: 1, translateY: 80 }}
          className="flex h-20 w-20 sm:h-32 sm:w-32 bg-slate-400 rounded-full justify-center items-center "
        >
          <h3>nombre</h3>
        </motion.div>
      </div> */}
    </motion.div>
  );
}

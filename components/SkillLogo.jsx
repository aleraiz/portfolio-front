import Image from "next/image";
import { motion } from "framer-motion";

export default function SkillLogo({ imgSrc, className, alt }) {
  return (
    <motion.div
      whileHover={{ scale: 1.1 }}
      // className="h-20 w-20 sm:h-32 sm:w-32 flex justify-center items-center bg-light rounded-full m-8"
      className="h-20 w-20 sm:h-32 sm:w-32 flex justify-center items-center bg-light rounded-full m-3 sm:m-8"
    >
      <Image src={imgSrc} className={`${className}`} alt={`${alt}`} />
    </motion.div>
  );
}

import Image from "next/image";
import { motion } from "framer-motion";

export default function SkillLogo({ imgSrc, className, alt }) {
  return (
    <motion.div
      whileHover={{ scale: 1.2 }}
      className="h-32 w-32 flex justify-center items-center bg-light rounded-full m-8"
    >
      <Image src={imgSrc} className={`${className}`} alt={`${alt}`} />
    </motion.div>
  );
}

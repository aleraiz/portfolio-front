import img from "../public/HackFlix.jpg";
import { motion } from "framer-motion";
import styles from "../styles/Project.module.css";

export default function Project() {
  return (
    <div className={styles.projectContainer}>
      <motion.div
        // whileHover={{ scale: 1.1 }}
        className={styles.imageContainer}
        style={{
          backgroundImage: "url(HackShop.jpg)",
        }}
      >
        <motion.div className={styles.textContainer}>
          <button className="py-2 px-4  bg-transparent hover:bg-slate-800 hover:border border-gray-700 text-gray-400 hover:text-gray-400 hover:border-gray-600 hover:scale-105 focus:ring-offset-indigo-200  transition ease-in duration-200 text-center text-base font-semibold shadow-md rounded-lg focus:outline-none focus:ring-2 focus:ring-offset-2">
            See More
          </button>
        </motion.div>
      </motion.div>
    </div>
  );
}

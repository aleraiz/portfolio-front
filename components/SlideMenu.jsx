import CustomLink from "./customHooks/useCustomLink";
import { motion, AnimatePresence } from "framer-motion";
import Hamburger from "hamburger-react";

const slideMenu = {
  hidden: {
    x: "100vh",
  },
  visible: {
    x: 0,
    transition: { duration: 0.7 },
  },
  exit: {
    x: "100vh",
    transition: { duration: 1 },
  },
};

export default function SlideMenu({ isOpen, setOpen }) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          variants={slideMenu}
          initial="hidden"
          animate="visible"
          exit="exit"
          className={`flex flex-col justify-between right-0 top-[81px]  py-20 fixed items-center  bg-dark z-50  w-[60%] sm:w-[40%] h-[500px]`}
        >
          <nav className="flex flex-col space-y-5">
            <CustomLink
              onClick={() => setOpen(!isOpen)}
              to="mainSection"
              name="Home"
              className="text-center"
              offset={-50}
            />
            <CustomLink
              to="about"
              name="About"
              className="text-center"
              offset={-50}
              onClick={() => setOpen(!isOpen)}
            />
            <CustomLink
              to="projects"
              name="Projects"
              className="text-center"
              offset={-50}
              onClick={() => setOpen(!isOpen)}
            />
            <CustomLink
              to="contact"
              name="Contact"
              className="text-center"
              offset={10}
              onClick={() => setOpen(!isOpen)}
            />
          </nav>
          <div>redes?</div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

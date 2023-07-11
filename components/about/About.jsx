import Certificates from "./Certificates";
import { Link } from "react-scroll";
import Skills from "./Skills";
import { useEffect, useState } from "react";
import { motion, useInView, useAnimation } from "framer-motion";

export default function About() {
  return (
    <div
      className="w-full min-h-screen px-8 md:px-20 pt-32 md:pt-20 py-8 lg:py-20 "
      id="about"
    >
      <div className="flex items-center justify-center text-light">
        <h3 className="text-4xl">About me</h3>
      </div>
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 3 }}
        className="mt-8 md:mt-20 md:p-20 xl:px-56 text-gray-400"
      >
        <p className="my-2">
          I'm Alejandro, a very positive and highly motivated Full Stack
          Developer based in Uruguay, who enjoys building beautiful websites and
          web applications.
        </p>
        <p className="my-2">
          Check out some of my work in the{" "}
          <Link
            to="projects"
            spy={true}
            smooth={true}
            duration={1000}
            className="font-bold cursor-pointer text-light"
          >
            Projects{" "}
          </Link>
          section.
        </p>
        <p className="my-2">
          I'm open to Job opportunities where I can contribute, learn and grow.
        </p>
        <p className="my-2">
          I love new challenges, if you have a good opportunity that matches my
          skills, then don't hesitate to{" "}
          <Link
            to="contact"
            spy={true}
            smooth={true}
            duration={1000}
            className="font-bold cursor-pointer text-light"
          >
            Contact{" "}
          </Link>
          me.
        </p>
      </motion.div>
      <Skills />
      <Certificates />
    </div>
  );
}

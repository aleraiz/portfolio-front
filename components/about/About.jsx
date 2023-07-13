import Certificates from "./Certificates";
import { Link } from "react-scroll";
import Skills from "./Skills";
import { useEffect, useState } from "react";
import { motion, useInView, useAnimation } from "framer-motion";

export default function About() {
  return (
    <div className="w-full px-8 md:px-20  md:pt-20 py-8 lg:py-20 " id="about">
      {/* <div
      className="w-full min-h-screen px-8 md:px-20 pt-32 md:pt-20 py-8 lg:py-20 "
      id="about"
    > */}
      <div className="flex items-center justify-center text-light">
        <h3 className="text-4xl my-10">About me</h3>
      </div>
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 1 }}
        // className="mt-8 md:mt-20 md:p-20 xl:px-56 text-gray-400"
        className="md:px-20 xl:px-56 text-gray-400"
      >
        <p className="my-2">
          I'm Alejandro, a very positive and highly motivated Full Stack
          Developer based in Uruguay, who enjoys building beautiful websites and
          web applications.
        </p>
        <p className="my-2">
          I love new challenges and am always looking for opportunities to
          expand my knowledge and improve my technical skills. I enjoy working
          in teams and am able to adapt quickly to different work environments.
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
          section. Each of them represents a unique challenge and has given me
          the opportunity to apply my programming skills to solve complex
          problems.
        </p>
        <p className="my-2">
          I'm open to Job opportunities where I can contribute, learn and grow.
          If you have a good opportunity that matches my skills, then don't
          hesitate to{" "}
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

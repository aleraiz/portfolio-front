import Certificates from "./Certificates";
import Skills from "./Skills";
import { useEffect, useState } from "react";
import { motion, useInView, useAnimation } from "framer-motion";

export default function About() {
  return (
    <div
      className="w-full min-h-screen border border-light px-8 md:px-20 pt-32 md:pt-20 py-8 lg:py-20 "
      id="about"
    >
      <div className="flex items-center justify-center text-light">
        <h3 className="text-4xl">About me</h3>
      </div>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 2 }}
        viewport={{ once: true, amount: 0.5 }}
        className="border rounded-2xl mt-8 md:mt-20 md:p-20 shadow-outline"
      >
        <p className="my-2">
          I am Alejandro, a Full Stack Developer based in Uruguay.
        </p>
        <p className="my-2">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni nulla
          odit reiciendis tenetur, itaque repudiandae laboriosam officia
          dignissimos saepe cupiditate dicta maiores reprehenderit. Pariatur
        </p>
        <p className="my-2">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni nulla
          odit reiciendis tenetur, itaque repudiandae laboriosam officia
          dignissimos saepe cupiditate dicta maiores reprehenderit. Pariatur
          dignissimos saepe cupiditate dicta maiores reprehenderit. Pariatur
          dignissimos saepe cupiditate dicta maiores reprehenderit. Pariatur
          dignissimos saepe cupiditate dicta maiores reprehenderit. Pariatur
          dignissimos saepe cupiditate dicta maiores reprehenderit. Pariatur
        </p>
      </motion.div>
      <Skills />
      <Certificates />
    </div>
  );
}

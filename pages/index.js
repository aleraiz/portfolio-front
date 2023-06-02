import Link from "next/link";
import About from "@/components/about/About";
import NavBar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Contact from "@/components/Contact";
import Projects from "@/components/Projects";
import MainSection from "@/components/MainSection";
import { useState } from "react";
import Head from "next/head";
import SlideMenu from "@/components/SlideMenu";

export default function Home() {
  const [isOpen, setOpen] = useState(false);
  return (
    // <div className={"w-full h-full min-h-screen z-0 bg-dark pt-0  text-white"}>
    <div className={`w-full h-full min-h-screen bg-dark pt-0  text-white`}>
      <Head>
        <title>Alejandro Raíz</title>
      </Head>
      <NavBar isOpen={isOpen} setOpen={setOpen} />
      <SlideMenu isOpen={isOpen} setOpen={setOpen} />
      <MainSection />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

import Link from "next/link";
import About from "@/components/About";
import NavBar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Contact from "@/components/Contact";
import Projects from "@/components/Projects";
import MainSection from "@/components/MainSection";
import Head from "next/head";

export default function Home() {
  return (
    <div className={"w-full h-full min-h-screen z-0 bg-dark pt-0  text-white"}>
      <Head>
        <title>Alejandro Raíz</title>
      </Head>
      <NavBar />
      <MainSection />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

import Image from "next/image";
// import profileImg from "../public/profile-img.png";
import profileImg from "../public/developer-pic-1.png";

import TextAnimated from "@/components/TextAnimated";
import Link from "next/link";
import About from "@/components/About";
import NavBar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Contact from "@/components/Contact";

export default function Home({ hola = "hola" }) {
  console.log(hola);
  return (
    <div className={"w-full h-full min-h-screen z-0 bg-dark pt-0  text-white"}>
      <NavBar />

      <div className="flex items-center justify-between w-full min-h-screen px-32">
        <div className="w-1/2">
          <Image
            src={profileImg}
            alt="ProfileImage"
            className="w-full h-auto"
          ></Image>
        </div>
        <div className="w-1/2 flex flex-col items-start self-center">
          <TextAnimated text={"Hey! I'm Alejandro Raíz"} />
          <p className="text-2xl text-primary">Full Stack Developer</p>
        </div>
      </div>
      <About />
      <Contact />
      <Footer />
    </div>
  );
}

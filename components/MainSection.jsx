import profileImg from "../public/developer-pic-1.png";
import TextAnimated from "@/components/TextAnimated";
import Image from "next/image";
import NameAnimated from "./NameAnimated";
import TextNameAnimated from "./TextNameAnimated";

export default function MainSection() {
  return (
    <div
      className="flex flex-col md:flex-row items-center lg:justify-items-center w-full min-h-screen px-8 md:px-10 lg:px-20 py-8 lg:py-20 pt-32 md:pt-20"
      id="mainSection"
    >
      <div className="w-full sm:w-3/4 md:w-1/2 my-auto">
        <Image
          src={profileImg}
          alt="ProfileImage"
          className="w-full 2xl:w-3/4 h-auto mx-auto"
        ></Image>
      </div>
      <div className="w-3/4 md:w-1/2 flex flex-col items-start self-center mb-auto md:mb-0">
        <TextNameAnimated text={"Hey! I'm Ale Raíz"} />
        <TextAnimated text={"Hey! I'm "} />
        <NameAnimated name={"Ale Raíz"} />
        <h2 className="w-full text-2xl mt-4 text-primary text-center">
          Full Stack Developer
        </h2>
      </div>
    </div>
  );
}

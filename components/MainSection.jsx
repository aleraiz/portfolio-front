import profileImg from "../public/developer-pic-1.png";
import TextAnimated from "@/components/TextAnimated";
import Image from "next/image";

export default function MainSection() {
  return (
    <div
      className="flex items-center justify-between w-full min-h-screen px-32 py-20"
      id="mainSection"
    >
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
  );
}

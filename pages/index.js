import Layout from "@/components/Layout";
import Image from "next/image";
import profileImg from "../public/profile-img.png";
import TextAnimated from "@/components/TextAnimated";
import Link from "next/link";

export default function Home() {
  return (
    <main
      className={`flex items-center min-h-screen w-full text-white bg-dark }`}
    >
      <Layout className="pt-0">
        <div className="flex items-center justify-between w-full">
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
            {/* <div className="flex items-center self-start mt-4">
              <Link
                href="/CV-AlejandroRaiz.pdf"
                target={"_blank"}
                className="flex items-center bg-light text-dark p-2 px-4 rounded-lg text-lg font-semibold
                hover:bg-dark hover:text-light border-2 border-solid border-transparent hover:border-light
                mr-3 
                "
              >
                Resume
              </Link>
              <Link
                href="mailto:alejandroraiz7@gmail.com"
                target={"_blank"}
                className="flex items-center text-light text-lg font-semibold
                 hover:text-primary underline
                ml-3
                "
              >
                Contact
              </Link>
            </div> */}
          </div>
        </div>
      </Layout>
    </main>
  );
}

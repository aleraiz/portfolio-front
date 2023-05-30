import Link from "next/link";
// import Layout from "./Layout";
import linkedinLogo from "../public/LinkedIn.svg";
import githubLogo from "../public/githubLogo.png";

import Image from "next/image";

export default function Footer() {
  return (
    <footer className="w-full text-light py-6 flex flex-col items-center justify-center">
      <div className="mt-5 flex items-center justify-center flex-wrap">
        <Link
          href={"https://www.linkedin.com/in/alejandro-raiz/"}
          target={"_blank"}
        >
          <Image
            src={linkedinLogo}
            width={32}
            height={32}
            alt="ProfileImage"
            className="hover:scale-110 hover:transition ease duration-300"
          ></Image>
        </Link>
        <Link href={"https://github.com/aleraiz"} target={"_blank"}>
          <Image
            src={githubLogo}
            width={32}
            height={32}
            alt="ProfileImage"
            className=" ms-4 hover:scale-110 hover:transition ease duration-300"
          ></Image>
        </Link>
      </div>
      <div className="mt-4">
        &copy; Developed by
        <Link href={"/"}>
          <span className="ms-1 text-primary">Alejandro Raíz</span>
        </Link>
      </div>
    </footer>
  );
}

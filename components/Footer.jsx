import ExtLink from "next/link";
import { Link } from "react-scroll";
import linkedinLogo from "../public/LinkedIn.svg";
import githubLogo from "../public/githubLogo.png";

import Image from "next/image";

export default function Footer() {
  return (
    <footer className="w-full text-light py-6 flex flex-col items-center justify-center">
      <div className="mt-5 flex items-center justify-center flex-wrap">
        <ExtLink
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
        </ExtLink>
        <ExtLink href={"https://github.com/aleraiz"} target={"_blank"}>
          <Image
            src={githubLogo}
            width={32}
            height={32}
            alt="ProfileImage"
            className=" ms-4 hover:scale-110 hover:transition ease duration-300"
          ></Image>
        </ExtLink>
      </div>
      <div className="mt-4">
        &copy; Developed by
        <Link
          to={"mainSection"}
          spy={true}
          smooth={true}
          offset={-50}
          duration={1000}
          activeClass="active"
          className="ms-1 text-primary cursor-pointer"
        >
          Alejandro Raíz
        </Link>
      </div>
    </footer>
  );
}

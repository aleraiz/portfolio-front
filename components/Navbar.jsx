import Link from "next/link";
import Logo from "./Logo";
import { useRouter } from "next/router";

const CustomLink = ({ href, name, className = "" }) => {
  const router = useRouter();
  return (
    <Link href={href} className={`${className} relative group`}>
      {name}
      <span
        className={`h-[1px] inline-block w-0 bg-light absolute -mt-1 right-0 top-0.5
        group-hover:w-full transition-[width] ease duration-300
        `}
      >
        &nbsp;
      </span>
      <span
        className={`h-[1px] inline-block bg-light absolute left-0 -bottom-0.5
        group-hover:w-full transition-[width] ease duration-300
        ${router.asPath === href ? "w-full" : "w-0"}
        `}
      >
        &nbsp;
      </span>
    </Link>
  );
};

export default function NavBar() {
  return (
    <header
      id="navbar"
      className=" text-light w-full px-32 py-4 font-normal flex items-center justify-between"
    >
      <Logo />
      <nav>
        <CustomLink href="/" name="Home" className="mr-3" />
        <CustomLink href="/about" name="About" className="mx-3" />
        <CustomLink href="/projects" name="Projects" className="mx-3" />
        <CustomLink href="/contact" name="Contact" className="ml-3" />
      </nav>
    </header>
  );
}

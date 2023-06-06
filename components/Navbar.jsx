import { Link } from "react-scroll";
import Logo from "./Logo";
import Hamburger from "hamburger-react";
import SlideMenu from "./SlideMenu";
import CustomLink from "../components/customHooks/useCustomLink";

// const CustomLink = ({ to, name, className = "", offset }) => {
//   return (
//     <Link
//       to={to}
//       spy={true}
//       smooth={true}
//       offset={offset}
//       duration={1000}
//       activeClass="active"
//       className={`${className} relative group cursor-pointer`}
//     >
//       {name}
//       <span
//         className={`h-[1px] inline-block w-0 bg-light absolute -mt-1 right-0 top-0.5
//         group-hover:w-full transition-[width] ease duration-300
//         `}
//       >
//         &nbsp;
//       </span>
//       <span
//         className={`h-[1px] inline-block w-0 bg-light absolute left-0 -bottom-0.5
//         group-hover:w-full transition-[width] ease duration-300
//         `}
//       >
//         &nbsp;
//       </span>
//     </Link>
//   );
// };

export default function NavBar({ isOpen, setOpen }) {
  console.log(isOpen);
  return (
    <header
      id="navbar"
      className="bg-dark border border-light  text-light w-full px-8 md:px-10 lg:px-20 py-4 font-normal flex items-center justify-between fixed"
    >
      <Logo />
      <nav className="hidden lg:block">
        <CustomLink
          to="mainSection"
          name="Home"
          className="mr-3"
          offset={-50}
        />
        <CustomLink to="about" name="About" className="mx-3" offset={-50} />
        <CustomLink
          to="projects"
          name="Projects"
          className="mx-3"
          offset={-50}
        />
        <CustomLink to="contact" name="Contact" className="ml-3" offset={-50} />
      </nav>

      <section className="lg:hidden">
        <div className="cursor-pointer">
          <Hamburger toggled={isOpen} toggle={setOpen} size={20} />
        </div>
      </section>
    </header>
  );
}

// const CustomLink = ({ to, name, className = "", offset }) => {
//   return (
//     <Link
//       to={to}
//       spy={true}
//       smooth={true}
//       offset={offset}
//       duration={1000}
//       activeClass="active"
//       className={`${className} relative group cursor-pointer`}
//     >
//       {name}
//       <span
//         className={`h-[1px] inline-block w-0 bg-light absolute -mt-1 right-0 top-0.5
//         group-hover:w-full transition-[width] ease duration-300
//         `}
//       >
//         &nbsp;
//       </span>
//       <span
//         className={`h-[1px] inline-block w-0 bg-light absolute left-0 -bottom-0.5
//         group-hover:w-full transition-[width] ease duration-300
//         `}
//       >
//         &nbsp;
//       </span>
//     </Link>
//   );
// };

// export default function NavBar() {
//   return (
//     <header
//       id="navbar"
//       className="fixed bg-dark text-light w-full px-32 py-4 font-normal flex items-center justify-between"
//     >
//       <Logo />
//       <nav>
//         <CustomLink
//           to="mainSection"
//           name="Home"
//           className="mr-3"
//           offset={-50}
//         />
//         <CustomLink to="about" name="About" className="mx-3" offset={-50} />
//         <CustomLink
//           to="projects"
//           name="Projects"
//           className="mx-3"
//           offset={-50}
//         />
//         <CustomLink to="contact" name="Contact" className="ml-3" offset={10} />
//       </nav>
//     </header>
//   );
// }

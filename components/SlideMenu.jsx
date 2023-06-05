import CustomLink from "./customHooks/useCustomLink";

export default function SlideMenu({ isOpen, setOpen }) {
  return (
    <div
      className={`flex flex-col justify-between top-[81px] py-20 fixed items-center border border-light bg-dark z-50  w-[60%] sm:w-[40%] h-[500px] ${
        isOpen ? "right-0 " : "right-[-60%]"
      }  transition-all ease-in duration-700`}
    >
      <nav className="flex flex-col space-y-5">
        <CustomLink
          onClick={() => setOpen(!isOpen)}
          to="mainSection"
          name="Home"
          className="text-center"
          offset={-50}
        />
        <CustomLink
          to="about"
          name="About"
          className="text-center"
          offset={-50}
          onClick={() => setOpen(!isOpen)}
        />
        <CustomLink
          to="projects"
          name="Projects"
          className="text-center"
          offset={-50}
          onClick={() => setOpen(!isOpen)}
        />
        <CustomLink
          to="contact"
          name="Contact"
          className="text-center"
          offset={10}
          onClick={() => setOpen(!isOpen)}
        />
      </nav>
      <div>redes?</div>
    </div>
  );
}

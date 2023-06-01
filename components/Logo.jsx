// import Link from "next/link";
import { Link } from "react-scroll";

export default function Logo() {
  return (
    <>
      <h1 className="font-bold hover:scale-110 hover:transition ease duration-300 cursor-pointer">
        <Link to="mainSection" spy={true} smooth={true} duration={1000}>
          <h1>
            Alejandro <span className="text-primary">Raíz</span>
          </h1>
        </Link>
      </h1>
    </>
  );
}

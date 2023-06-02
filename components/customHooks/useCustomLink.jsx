import { Link } from "react-scroll";
export default function useCustomLink({
  to,
  name,
  className = "",
  offset,
  onClick,
}) {
  return (
    <Link
      to={to}
      spy={true}
      smooth={true}
      offset={offset}
      duration={1000}
      activeClass="active"
      className={`${className} relative group cursor-pointer`}
      onClick={onClick}
    >
      {name}
      <span
        className={`h-[1px] inline-block w-0 bg-light absolute -mt-1 right-0 top-0.5
            group-hover:w-full transition-[width] ease duration-300
            `}
      >
        &nbsp;
      </span>
      <span
        className={`h-[1px] inline-block w-0 bg-light absolute left-0 -bottom-0.5
            group-hover:w-full transition-[width] ease duration-300
            `}
      >
        &nbsp;
      </span>
    </Link>
  );
}

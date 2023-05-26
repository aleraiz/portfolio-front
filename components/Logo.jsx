import Link from "next/link";

export default function Logo() {
  return (
    <>
      <h1 className="font-bold hover:scale-110 hover:transition ease duration-300">
        <Link href="/">
          Alejandro <span className="text-primary">Raíz</span>
        </Link>
      </h1>
    </>
  );
}

import Link from "next/link";

export default function Logo() {
  return (
    <>
      <h1 className="font-bold">
        <Link href="/">
          Alejandro <span className="text-primary">Raíz</span>
        </Link>
      </h1>
    </>
  );
}

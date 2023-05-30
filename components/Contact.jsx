import Link from "next/link";

export default function Contact() {
  return (
    <div className="w-full min-h-screen px-32 border border-light pt-20">
      <div className="flex items-center justify-center ">
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
      </div>
    </div>
  );
}

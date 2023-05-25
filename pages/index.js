import Image from "next/image";
// import { Inter } from "next/font/google";
// import { Sofia_Sans } from "next/font/google";
import { Manrope } from "next/font/google";

const manrope = Manrope({ subsets: ["latin"], variable: "--font-manrope" });

export default function Home() {
  return (
    <main
      className={`flex min-h-screen flex-col text-white bg-slate-900 ${manrope.variable} font-manrope p-5 }`}
    >
      <div className="bg-red-400 flex items-center justify-between">
        <div>Alejandro Raiz</div>
        <div className="bg-yellow-200">
          <ul className="bg-slate-400 flex items-center justify-between">
            <li>Home</li>
            <li>About</li>
            <li>Projects</li>
          </ul>
        </div>
      </div>
    </main>
  );
}

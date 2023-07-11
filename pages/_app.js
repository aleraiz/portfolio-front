import Footer from "@/components/Footer";
import NavBar from "@/components/Navbar";
import "@/styles/globals.css";
import { Manrope } from "next/font/google";

const manrope = Manrope({ subsets: ["latin"], variable: "--font-manrope" });

export default function App({ Component, pageProps }) {
  return (
    // <div className={`${manrope.variable} font-manrope bg-dark`}>
    <div className={`${manrope.variable} font-manrope`}>
      <Component {...pageProps} />
    </div>
  );
}

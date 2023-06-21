import Image from "next/image";
import webDevCertificate from "../../public/DesarrolloWeb.png";
import JavaScriptCertificate from "../../public/JavaScript.png";
import ReactCertificate from "../../public/ReactJs.png";
import BootcampCertificate from "../../public/Bootcamp.png";
import { motion } from "framer-motion";

export default function Certificates() {
  return (
    <div className="flex flex-col items-center my-24">
      <h3 className="text-light text-3xl mb-10">Certificates</h3>
      <div className=" w-full flex  flex-wrap h-auto items-center justify-around gap-10">
        <motion.div
          initial={{ opacity: 0, x: -2000 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <Image
            src={webDevCertificate}
            width={480}
            height={480}
            alt="Web development certificate"
            className="lg:hover:scale-105 hover:transition ease-in-out duration-1000 cursor-pointer"
          />
        </motion.div>
        <Image
          src={JavaScriptCertificate}
          width={480}
          height={480}
          alt="JavaScript certificate"
          className="lg:hover:scale-105 hover:transition ease-in-out duration-1000 cursor-pointer"
        />
        <Image
          src={ReactCertificate}
          width={480}
          height={480}
          alt="ReactJs certificate"
          className="lg:hover:scale-105 hover:transition ease-in-out duration-1000 cursor-pointer"
        />
        <Image
          src={BootcampCertificate}
          width={480}
          height={480}
          alt="FullStack Web Development certificate"
          className="lg:hover:scale-105 hover:transition ease-in-out duration-1000 cursor-pointer"
        />
      </div>
    </div>
  );
}

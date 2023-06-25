import { useEffect, useRef } from "react";
import { motion, useInView, useAnimation } from "framer-motion";
import Image from "next/image";

export default function Certificate({ certificate, i }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const certificatesControl = useAnimation();

  useEffect(() => {
    console.log(isInView);
    isInView ? certificatesControl.start("visible") : null;
  }, [isInView]);
  return (
    <div ref={ref} key={i + certificate.imgSrc}>
      <motion.div
        variants={{
          hidden: {
            opacity: 0,
            translateX: i % 2 === 0 ? "-100vw" : "100vw",
          },
          visible: {
            opacity: 1,
            translateX: 0,
            transition: { duration: 1, delay: 0.5 },
          },
          whileHovering: {
            scale: 1.1,
          },
        }}
        initial={"hidden"}
        animate={certificatesControl}
        whileHover={"whileHovering"}
      >
        <Image
          src={certificate.imgSrc}
          width={480}
          height={480}
          alt={certificate.alt}
          className="cursor-pointer"
        />
      </motion.div>
    </div>
  );
}

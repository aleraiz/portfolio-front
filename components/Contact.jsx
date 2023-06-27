import { useEffect, useRef } from "react";
import { motion, useInView, useAnimation } from "framer-motion";
import statics from "../static/statics.json";

export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });

  const formControl = useAnimation();
  useEffect(() => {
    if (isInView) {
      // Fire the animation
      formControl.start("visible");
    }
  }, [isInView]);

  return (
    <div
      className="w-full min-h-screen border border-light px-8 md:px-20 pt-32 md:pt-20 py-8 lg:py-20 "
      id="contact"
    >
      <div className="flex items-center justify-center text-light">
        <h3 className="text-4xl">Contact</h3>
      </div>
      <div className="flex flex-col md:flex-row items-center justify-center min-h-[60vh] ">
        <div className="flex flex-col items-center justify-center h-full my-auto">
          <form className="flex w-full  space-x-3">
            <div className="w-full max-w-6xl px-5 py-2 md:py-10 m-auto  bg-dark rounded-lg shadow dark:bg-gray-800">
              <div
                ref={ref}
                // className="mb-6  font-light text-center text-light dark:text-white"
                className="mb-6  font-light text-center text-gray-400 dark:text-white"
              >
                Want to work together or have any questions?
              </div>
              <motion.div
                className="grid max-w-2xl grid-cols-2 gap-4 m-auto mt-10"
                variants={{
                  hidden: { opacity: 0, y: 200 },
                  visible: { opacity: 1, y: 0 },
                }}
                initial="hidden"
                animate={formControl}
                transition={{ duration: 1, delay: 0.25 }}
              >
                <div className="col-span-2 lg:col-span-1">
                  <div className=" relative ">
                    <input
                      type="text"
                      id="contact-form-name"
                      className={statics.styles.formInputs}
                      placeholder="Name"
                    />
                  </div>
                </div>
                <div className="col-span-2 lg:col-span-1">
                  <div className=" relative ">
                    <input
                      type="text"
                      id="contact-form-email"
                      className={statics.styles.formInputs}
                      placeholder="email"
                    />
                  </div>
                </div>
                <div className="col-span-2">
                  <label className="text-gray-700" htmlFor="name">
                    <textarea
                      className={`${statics.styles.formInputs} border rounded-sm `}
                      // className="border-transparent flex-1 appearance-none w-full py-2 px-4 bg-slate-800 border-gray-700 text-gray-400 placeholder-gray-500 focus:ring-2 focus:outline-none focus:ring-gray-700 shadow-slate-600 text-base focus:outline-double border rounded-sm"
                      id="comment"
                      placeholder="Enter your message"
                      name="message"
                      rows="5"
                      cols="40"
                    ></textarea>
                  </label>
                </div>
                <div className="col-span-2 text-right">
                  <button
                    type="submit"
                    className="py-2 px-4  bg-slate-800 border border-gray-700 text-gray-400 hover:text-gray-400 hover:border-gray-600 hover:scale-105 focus:ring-offset-indigo-200 w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md rounded-lg focus:outline-none focus:ring-2 focus:ring-offset-2  "
                  >
                    Send
                  </button>
                </div>
              </motion.div>
            </div>
          </form>
        </div>
        {/* <div className="flex items-center justify-center ">
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
        </div> */}
      </div>
    </div>
  );
}

import Image from "next/image";
import Link from "next/link";
import pplWorking from "../public/drawingof2softwar.jpg";
export default function Contact() {
  return (
    <div
      // className="w-full lg:min-h-screen px-32 border border-light py-8 lg:py-20 section"
      className="w-full min-h-screen border border-light px-8 md:px-20 pt-32 md:pt-20 py-8 lg:py-20 "
      id="contact"
    >
      <div className="flex items-center justify-center text-light">
        <h3 className="text-4xl">Contact</h3>
      </div>
      <div className="flex flex-col md:flex-row items-center justify-center min-h-[60vh] ">
        <div className="flex flex-col items-center justify-center h-full my-auto md:w-6/12">
          <form className="flex w-full max-w-sm space-x-3">
            <div className="w-full max-w-2xl px-5 py-2 md:py-10 m-auto  bg-dark rounded-lg shadow dark:bg-gray-800">
              <div className="mb-6  font-light text-center text-light dark:text-white">
                Want to work together or have any questions?
              </div>
              <div className="grid max-w-xl grid-cols-2 gap-4 m-auto mt-10">
                <div className="col-span-2 lg:col-span-1">
                  <div className=" relative ">
                    <input
                      type="text"
                      id="contact-form-name"
                      className=" border-transparent flex-1 appearance-none  w-full py-2 px-4 bg-slate-800 border-gray-700 text-gray-400 placeholder-gray-500 focus:ring-2 focus:outline-none focus:ring-gray-700 shadow-slate-600 text-base  focus:outline-double"
                      placeholder="Name"
                    />
                  </div>
                </div>
                <div className="col-span-2 lg:col-span-1">
                  <div className=" relative ">
                    <input
                      type="text"
                      id="contact-form-email"
                      className=" border-transparent flex-1 appearance-none  w-full py-2 px-4 bg-slate-800 border-gray-700 text-gray-400 placeholder-gray-500 focus:ring-2 focus:outline-none focus:ring-gray-700 shadow-slate-600 text-base  focus:outline-double"
                      placeholder="email"
                    />
                  </div>
                </div>
                <div className="col-span-2">
                  <label className="text-gray-700" htmlFor="name">
                    <textarea
                      className="rounded-sm border-transparent flex-1 appearance-none border w-full py-2 px-4 bg-slate-800 border-gray-700 text-gray-400 placeholder-gray-500 focus:ring-2 focus:outline-none focus:ring-gray-700 shadow-slate-600 text-base  focus:outline-double"
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
              </div>
            </div>
          </form>
        </div>
        <div className="md:flex justify-center items-center w-2/3 md:w-6/12 m-auto">
          <Image
            src={pplWorking}
            alt="ProfileImage"
            width={400}
            height={400}
            className="md:w-[60%]"
          />

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
    </div>
  );
}

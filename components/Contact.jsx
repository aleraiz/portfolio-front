import { useEffect, useRef, useState } from "react";
import {
  motion,
  useInView,
  useAnimation,
  AnimatePresence,
} from "framer-motion";
import statics from "../static/statics.json";
import emailjs from "@emailjs/browser";
import { BsSendCheckFill } from "react-icons/bs";
import { IconContext } from "react-icons";

export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });
  const form = useRef();

  const formControl = useAnimation();
  useEffect(() => {
    if (isInView) {
      // Fire the animation
      formControl.start("visible");
    }
  }, [isInView]);
  const [contactMail, setContactMail] = useState({ email: "" });
  const [emailSent, setEmailSent] = useState(false);
  const [fullForm, SetfullForm] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  const [validationEmailMessage, setValidationEmailMessage] = useState("");

  const handleMouseOver = () => {
    setIsHovering(true);
  };

  const handleMouseOut = () => {
    setIsHovering(false);
  };

  const checkValidation = (email) => {
    console.log(email);
    const regEx = /[a-zA-Z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,8}(.[a-z{2,8}])?/g;
    if (regEx.test(email)) {
      setValidationEmailMessage("Email is Valid");
    } else if (email == "") {
      setValidationEmailMessage("Please enter email");
    } else if (!regEx.test(email)) {
      setValidationEmailMessage("Invalid Email");
    } else {
      setValidationEmailMessage("");
    }
  };

  const handleChange = (e) => {
    let { name, value } = e.target;
    let newContactMail = { ...contactMail, [name]: value };

    checkValidation(newContactMail.email);

    if (
      newContactMail.name &&
      newContactMail.name.length > 1 &&
      newContactMail.email &&
      validationEmailMessage === "Email is Valid" &&
      newContactMail.message &&
      newContactMail.message.length > 1
    ) {
      SetfullForm(true);
    } else {
      SetfullForm(false);
    }
    setContactMail(newContactMail);
  };

  const sendEmail = (e) => {
    e.preventDefault();

    {
      fullForm
        ? emailjs
            .sendForm(
              "service_9ux09xd",
              "template_pjl1yld",
              form.current,
              "5u1q2cdMobk0igCi-"
            )
            .then(
              (result) => {
                console.log(result.text);
                setEmailSent(true);
                setTimeout(() => {
                  setEmailSent(false);
                  setContactMail({});
                  SetfullForm(false);
                  setValidationEmailMessage("");
                }, 5000);

                e.target.reset();
              },
              (error) => {
                console.log(error.text);
              }
            )
        : "";
    }
  };

  const formVariants = {
    hidden: {
      opacity: 0,
      y: 200,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
        delay: 0.25,
      },
    },
  };

  const sentEmailVariants = {
    hidden: {
      x: -300,
    },
    visible: {
      x: 0,
      transition: {
        duration: 1,
        when: "beforeChildren",
      },
    },
    exit: {
      x: "100vw",
      opacity: 0,
      transition: {
        duration: 3,
      },
    },
  };

  const messageVariants = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      color: "#00E54C",
      transition: {
        duration: 3,
      },
    },
  };

  return (
    <div id="contact" className="w-full min-h-[90vh] px-8 md:px-20  py-8 ">
      <div className="flex items-center justify-center text-light pt-20 md:pt-10">
        <h3 className="text-4xl">Contact</h3>
      </div>
      <div className="flex flex-col md:flex-row items-center justify-center min-h-[60vh] ">
        <div className="flex flex-col items-center justify-center h-full my-auto">
          <form
            ref={form}
            className="flex w-full space-x-3 bg-transparent"
            onSubmit={sendEmail}
          >
            <div className="w-full max-w-6xl px-5 py-2 md:py-10 m-auto  bg-dark rounded-lg ">
              <div
                ref={ref}
                className="mb-6  font-light text-center text-gray-400 dark:text-white"
              >
                Want to work together or have any questions?
              </div>
              <motion.div
                className="grid max-w-2xl grid-cols-2 gap-4 m-auto mt-10"
                variants={formVariants}
                initial="hidden"
                animate={formControl}
              >
                <div className="col-span-2 lg:col-span-1">
                  <div className=" relative ">
                    <input
                      type="text"
                      name="name"
                      id="contact-form-name"
                      className={statics.styles.formInputs}
                      placeholder="Name"
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <div className="col-span-2 lg:col-span-1">
                  <div className=" relative ">
                    <input
                      type="text"
                      name="email"
                      id="contact-form-email"
                      className={statics.styles.formInputs}
                      placeholder="email"
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <div className="col-span-2">
                  <label className="text-gray-700" htmlFor="name">
                    <textarea
                      className={`${statics.styles.formInputs} border rounded-sm `}
                      id="contact-form-comment"
                      placeholder="Enter your message"
                      name="message"
                      rows="8"
                      cols="40"
                      onChange={handleChange}
                    ></textarea>
                  </label>
                </div>
                <div className="col-span-2 text-right">
                  <button
                    type="submit"
                    className={`py-2 px-4 text-gray-400  bg-slate-800 border border-gray-700  hover:border-gray-600 ${
                      !fullForm ? "hover:text-primary" : ""
                    }  focus:ring-offset-indigo-200 w-full text-center text-base font-semibold shadow-md rounded-lg`}
                    onMouseOver={handleMouseOver}
                    onMouseOut={handleMouseOut}
                  >
                    {isHovering && !fullForm
                      ? "Please complete the form before submitting!"
                      : "Send"}
                  </button>
                </div>
              </motion.div>
              <div className="py-2 px-4 text-gray-400 text-center">
                {validationEmailMessage}
              </div>
            </div>
          </form>
          <AnimatePresence>
            {emailSent && (
              <motion.div
                className="flex items-center justify-center sm:justify-between lg:mt-4"
                variants={sentEmailVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
              >
                <motion.p variants={messageVariants} className="text-gray-400 ">
                  Message sent successfully
                </motion.p>
                <IconContext.Provider value={{ size: "30px" }}>
                  <div className="ms-3 text-gray-400 ">
                    {<BsSendCheckFill />}
                  </div>
                </IconContext.Provider>
              </motion.div>
            )}
          </AnimatePresence>
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
        </div> */}
      </div>
    </div>
  );
}

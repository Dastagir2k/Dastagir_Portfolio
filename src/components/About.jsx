import { useEffect } from "react";
import { motion } from "framer-motion";
import { useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

import AboutImg from "../assets/about.png";

export default function About() {
  const boxVariant = {
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
    hidden: { opacity: 0, scale: 0 },
  };
  const control = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      control.start("visible");
    } else {
      control.start("hidden");
    }
  }, [control, inView]);
  const config = {
    line1:
      "Hi, My name is S Dastagir Ahmed. I am a Full stack web developer. I built beautiful Websites with React.js , Tailwind CSS + Bootstrap",
    line2:
      "I am proficient in Frontend skills like React.js, Redux, Redux Tool Kit, Axios, Tailwind CSS, SaSS, Css3 and many more.",
    line3: "In backend I know Node.js, Express.js, Mysql , MongoDB, and Mongoose",
  };

  return (
    <motion.section
      ref={ref}
      variants={boxVariant}
      initial="hidden"
      animate={control}
      className="flex flex-col md:flex-row h-[calc(100dvh)] bg-gradient-to-b  from-gray-800 to-black px-5"
      id="about"
    >
      <div className="py-5 md:w-1/2">
        <img src={AboutImg} />
      </div>
      <div className="md:w-1/2 flex justify-center">
        <div className="flex flex-col justify-center text-white">
          <h1 className="text-4xl border-b-4 border-primary mb-5 w-[170px] font-bold text-purple-400 border-purple-400">
            About Me
          </h1>
          <p className="pb-5">{config.line1}</p>
          <p className="pb-5">{config.line2}</p>
          <p className="pb-5">{config.line3}</p>
        </div>
      </div>
    </motion.section>
  );
}

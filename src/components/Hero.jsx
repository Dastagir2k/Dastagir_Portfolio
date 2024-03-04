import HeriImg from "../assets/Lovepik_com-401643778-programmer.png";
import { BsTwitterX } from "react-icons/bs";
import { AiOutlineGithub, AiOutlineLinkedin } from "react-icons/ai";
import { motion } from "framer-motion";
import { useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
const Hero = () => {
  const boxVariant = {
    visible: { opacity: 1, scale: 1, transition: { duration: 0.6 } },
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
  return (
    <motion.section
      ref={ref}
      variants={boxVariant}
      initial="hidden"
      animate={control}
      id="home"
      className="flex flex-col md:flex-row px-5 py-32 bg-gradient-to-b from-gray-800 to-black justify-center"
    >
      <div className="md:w-1/2 flex flex-col">
        <h1 className=" text-white text-7xl font-hero-font">
          Hi,
          <br /> {`I'm`} Dastagir
          <p className="text-4xl ">I m a Full-stack Developer</p>
        </h1>
        <div className="flex py-20 ">
          <a href="https://twitter.com/DastagirAhmed14" target="_blank" className="pr-4 text-purple-400 hover:text-white ">
            <BsTwitterX size={35} />
          </a>
          <a href="https://github.com/Dastagir2k" target="_blank" className="pr-4 text-purple-400 hover:text-white">
            <AiOutlineGithub size={40} />
          </a>
          <a href="https://www.linkedin.com/in/dastagir-ahmed-73b052256/" target="_blank" className=" text-purple-400 hover:text-white">
            <AiOutlineLinkedin size={40} />
          </a>
        </div>
      </div>
      <img className=" md:w-1/3" src={HeriImg} />
    </motion.section>
  );
};

export default Hero;

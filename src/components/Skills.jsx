import { useEffect } from "react";
import { motion } from "framer-motion";
import { useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { AiOutlineHtml5 } from "react-icons/ai";
import { FaCss3Alt } from "react-icons/fa";
import { TbBrandJavascript } from "react-icons/tb";
import { FaReact } from "react-icons/fa";
import { TbBrandCpp } from "react-icons/tb";
import { FaNode } from "react-icons/fa";
import { SiExpress } from "react-icons/si";
import { DiMongodb } from "react-icons/di";
import { SiMysql } from "react-icons/si";

const Skills = () => {
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
  return (
    <div
      ref={ref}
      variants={boxVariant}
      initial="hidden"
      animate={control}
      id="skills"
      className="md:pt-10 bg-gradient-to-b from-gray-800 to-black text-white min-h-screen"
    >
      <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center pt-10">
        <div className="">
          <p className="text-4xl font-bold border-b-4 p-2 inline pt-10 text-purple-400 border-purple-400">
            Experience
          </p>
          <p className="py-6">
            These are the Technologies I have worked with .
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-8 text-center py-8 px-4 md:px-12">
          <div className="shadow-md hover:scale-105 duration-500 py-2 rounded-lg hover:text-purple-400  cursor-pointer">
            <motion.div
              drag
              dragConstraints={{
                top: 0,
                bottom: 0,
                left: 0,
                right: 0,
              }}
              
              whileHover={{
                scale: [1, 1, 1.4, 1.4, 1],
                borderRadius: ["20%", "20%", "50%", "50%", "20%"],
                rotate: [0, 0, 360, 360, 0],
              }}
              dragElastic={0.8}
              transition={{
                duration: 2,
              }}
            >
              <AiOutlineHtml5 size={80} className="w-20 mx-auto " />
            </motion.div>
            <p className="mt-4">HTML</p>
          </div>
          <div className="shadow-md hover:scale-105 duration-500 py-2 rounded-lg hover:text-purple-400 cursor-pointer">
            <motion.div
              drag
              dragConstraints={{
                top: 0,
                bottom: 0,
                left: 0,
                right: 0,
              }}
              whileHover={{
                scale: [1, 1, 1.4, 1.4, 1],
                borderRadius: ["20%", "20%", "50%", "50%", "20%"],
                rotate: [0, 0, 360, 360, 0],
              }}
              dragElastic={0.8}
              transition={{
                duration: 2,
              }}
            >
              <FaCss3Alt size={80} className="w-20 mx-auto " />
            </motion.div>
            <p className="mt-4">CSS</p>
          </div>
          <div className="shadow-md hover:scale-105 duration-500 py-2 rounded-lg hover:text-purple-400 cursor-pointer ">
            <motion.div
              drag
              dragConstraints={{
                top: 0,
                bottom: 0,
                left: 0,
                right: 0,
              }}
              whileHover={{
                scale: [1, 1, 1.4, 1.4, 1],
                borderRadius: ["20%", "20%", "50%", "50%", "20%"],
                rotate: [0, 0, 360, 360, 0],
              }}
              dragElastic={0.8}
              transition={{
                duration: 2,
              }}
            >
              <TbBrandJavascript size={80} className="w-20 mx-auto " />
            </motion.div>
            <p className="mt-4">JavaScript</p>
          </div>
          <div className="shadow-md hover:scale-105 duration-500 py-2 rounded-lg hover:text-purple-400 cursor-pointer">
            <motion.div
              drag
              dragConstraints={{
                top: 0,
                bottom: 0,
                left: 0,
                right: 0,
              }}
              whileHover={{
                scale: [1, 1, 1.4, 1.4, 1],
                borderRadius: ["20%", "20%", "50%", "50%", "20%"],
                rotate: [0, 0, 360, 360, 0],
              }}
              dragElastic={0.8}
              transition={{
                duration: 2,
              }}
            >
              <FaReact size={80} className="w-20 mx-auto" />
            </motion.div>
            <p className="mt-4">React.js</p>
          </div>
          <div className="shadow-md hover:scale-105 duration-500 py-2 rounded-lg hover:text-purple-400 cursor-pointer">
            <motion.div
              drag
              dragConstraints={{
                top: 0,
                bottom: 0,
                left: 0,
                right: 0,
              }}
              whileHover={{
                scale: [1, 1, 1.4, 1.4, 1],
                borderRadius: ["20%", "20%", "50%", "50%", "20%"],
                rotate: [0, 0, 360, 360, 0],
              }}
              dragElastic={0.8}
              transition={{
                duration: 2,
              }}
            >
              <TbBrandCpp size={80} className="w-20 mx-auto" />
            </motion.div>
            <p className="mt-4">C++</p>
          </div>
          <div className="shadow-md hover:scale-105 duration-500 py-2 rounded-lg hover:text-purple-400 cursor-pointer">
            <motion.div
              drag
              dragConstraints={{
                top: 0,
                bottom: 0,
                left: 0,
                right: 0,
              }}
              whileHover={{
                scale: [1, 1, 1.4, 1.4, 1],
                borderRadius: ["20%", "20%", "50%", "50%", "20%"],
                rotate: [0, 0, 360, 360, 0],
              }}
              dragElastic={0.8}
              transition={{
                duration: 2,
              }}
            >
              <FaNode size={80} className="w-20 mx-auto" />
            </motion.div>
            <p className="mt-4">Node.js</p>
          </div>
          <div className="shadow-md hover:scale-105 duration-500 py-2 rounded-lg hover:text-purple-400 cursor-pointer">
            <motion.div
              drag
              dragConstraints={{
                top: 0,
                bottom: 0,
                left: 0,
                right: 0,
              }}
              whileHover={{
                scale: [1, 1, 1.4, 1.4, 1],
                borderRadius: ["20%", "20%", "50%", "50%", "20%"],
                rotate: [0, 0, 360, 360, 0],
              }}
              dragElastic={0.8}
              transition={{
                duration: 2,
              }}
            >
              <SiExpress size={80} className="w-20 mx-auto" />
            </motion.div>
            <p className="mt-4">Express.js</p>
          </div>
          <div className="shadow-md hover:scale-105 duration-500 py-2 rounded-lg hover:text-purple-400 cursor-pointer">
            <motion.div
              drag
              dragConstraints={{
                top: 0,
                bottom: 0,
                left: 0,
                right: 0,
              }}
              whileHover={{
                scale: [1, 1, 1.4, 1.4, 1],
                borderRadius: ["20%", "20%", "50%", "50%", "20%"],
                rotate: [0, 0, 360, 360, 0],
              }}
              dragElastic={0.8}
              transition={{
                duration: 2,
              }}
            >
              <DiMongodb size={80} className="w-20 mx-auto" />
            </motion.div>
            <p className="mt-4">MongoDB</p>
          </div>
          <div className="shadow-md hover:scale-105 duration-500 py-2 rounded-lg hover:text-purple-400 cursor-pointer">
            <motion.div
              drag
              dragConstraints={{
                left: 0,
                top: 0,
                bottom: 0,
                right: 0,
              }}
              dragElastic={0.8}
              whileHover={{
                scale: [1, 1, 1.4, 1.4, 1],
                borderRadius: ["20%", "20%", "50%", "50%", "20%"],
                rotate: [0, 0, 360, 360, 0],
              }}
              transition={{
                duration: 3,
              }}
            >
              <SiMysql size={80} className="w-20 mx-auto" />
            </motion.div>
            <p className="mt-4">MySQL</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;

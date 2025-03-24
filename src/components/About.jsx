import { useEffect } from "react";
import { motion } from "framer-motion";
import { useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

import AboutImg from "../assets/about.png";

export default function About() {
 

  
  const config = {
    line1:
      "Hi, My name is S Dastagir Ahmed. I am a Full stack web developer. I built beautiful Websites with React.js , Tailwind CSS + Bootstrap , node.js and Express.js.",
    line2:
      "I am proficient in Frontend skills like React.js, Redux, Redux Tool Kit, Axios, Tailwind CSS, SaSS, Css3 and many more.",
    line3: "In backend I worked with Node.js, Express.js, Mysql , MongoDB, and Mongoose",
  };

  return (
    <div
     
      className="flex flex-col md:flex-row h-[calc(100dvh)] bg-gradient-to-b  from-gray-800 to-black px-5"
      id="about"
    >
      <motion.div 
      className="py-5 md:w-1/2"
      initial={{
        opacity:0.5,
        x:-300
      }}
      whileInView={{
        x:1,
        opacity:1
      }}
      transition={{
        duration:1.5
      }}>
        <img src={AboutImg} />
      </motion.div>
      <div className="md:w-1/2 flex justify-center">
        <div className="flex flex-col justify-center text-white">
          <h1 className="text-4xl border-b-4 border-primary mb-5 w-[170px] font-bold text-purple-400 border-purple-400">
            About Me
          </h1>
          {Object.keys(config).map((val,i)=>(
            <motion.span
            initial={{opacity:0}}
          whileInView={{opacity:1}}
          // whileInView={{
          //   opacity:1
          // }}
          viewport={{
            once:true
          }}
          transition={{
            duration: 0.4,
            delay: i * 1.1
              }}
             key={i}
             className=" text-2xl"
            >
              {config[val]}
            </motion.span>
          ))}
        </div>
      </div>
    </div>
  );
}



import websiteImg1 from "../assets/netflix_project.jfif";
import websiteImg2 from "../assets/Nike.png";
import websiteImg3 from "../assets/recipe.png";
import { useEffect } from "react";
import { motion } from "framer-motion";
import { useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
const Projects = () => {
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
    projects: [
      {
        image: websiteImg1,
        description: "A Netflix-inspired streaming platform featuring user authentication, built with React, Firebase, and integrated with a movies API",
        link: "https://dastagir-netflix.vercel.app/",
      },
      {
        image: websiteImg2,
        description:
          "A dynamic e-commerce platform offering Nike products, powered by React and styled with Tailwind CSS.",
        link: "https://dastagir-nike.vercel.app/",
      },
      {
        image: websiteImg3,
        description: "An intuitive recipe application providing step-by-step instructions and ingredient lists for various dishes.",
        link: "hhttps://dastagir-recipie.vercel.app/",
      },
    ],
  };

  return (
    <motion.section
      ref={ref}
      variants={boxVariant}
      initial="hidden"
      animate={control}
      id="project"
      className="flex flex-col min-h-screen py-20 px-5 justify-center bg-gradient-to-b  from-gray-800 to-black text-white"
    >
      <div className="flex-grow">
        <div className="flex flex-col px-10 py-5">
          <h1 className="text-4xl border-b-4 border-secondary mb-5 w-[150px] border-purple-400 font-bold text-purple-400">
            Projects
          </h1>
          <p>
            These are some of my best projects. I have built these with React,
            MERN, and vanilla CSS. Check them out.
          </p>
        </div>
      </div>
      <div className="flex-grow">
        <div className="flex flex-col md:flex-row px-10 gap-5">
          {config.projects.map((project, index) => (
            <div className="relative" key={index}>
              <img
                className="h-[300px] w-[500px]"
                src={project.image}
                alt={`Project ${index + 1}`}
              />
              <div className="project-desc">
                <p className="text-center px-5 py-5">{project.description}</p>
                <div className="flex justify-center">
                  <a
                    className="btn"
                    target="_blank"
                    rel="noopener noreferrer"
                    href={project.link}
                  >
                    View Project
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default Projects;

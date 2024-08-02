
// import websiteImg4 from "../assets/netflix_project.jfif";
// import websiteImg1 from "../assets/reserve-eat.png";
// import websiteImg2 from "../assets/Nike.png";
// import websiteImg3 from "../assets/recipe.png";
// import { useEffect } from "react";
// import { motion } from "framer-motion";
// import { useAnimation } from "framer-motion";
// import { useInView } from "react-intersection-observer";
// const Projects = () => {
//   const boxVariant = {
//     visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
//     hidden: { opacity: 0, scale: 0 },
//   };
//   const control = useAnimation();
//   const [ref, inView] = useInView();

//   useEffect(() => {
//     if (inView) {
//       control.start("visible");
//     } else {
//       control.start("hidden");
//     }
//   }, [control, inView]);
//   const config = {
//     projects: [
//       {
//         image: websiteImg2,
//         description:
//           "A dynamic e-commerce platform offering Nike products, powered by React and styled with Tailwind CSS.",
//         link: "https://dastagir-nike.vercel.app/",
//       },
//       {
//         image: websiteImg1,
//         description: "A hotel table booking platform where customers can browse a variety of restaurants and book tables. Built with React for the frontend, Node.js and Express for the backend, and MySQL for the database. The platform includes user authentication, email notifications for bookings, and an admin interface for managing restaurants and bookings",
//         link: "https://dastagir-reserve-eat.vercel.app/",
//       },
//       {
//         image: websiteImg4,
//         description: "A Netflix-inspired streaming platform featuring user authentication, built with React, Firebase, and integrated with a movies API",
//         link: "https://dastagir-netflix.vercel.app/",
//       },
      
//       {
//         image: websiteImg3,
//         description: "An intuitive recipe application providing step-by-step instructions and ingredient lists for various dishes.",
//         link: "https://dastagir-recipie.vercel.app/",
//       },
      
//     ],
//   };

//   return (
//     <div
//       ref={ref}
//       variants={boxVariant}
//       initial="hidden"
//       animate={control}
//       id="project"
//       className="flex flex-col min-h-screen py-20 px-5 justify-center bg-gradient-to-b  from-gray-800 to-black text-white"
//     >
//       <div className="flex-grow">
//         <div className="flex flex-col px-10 py-5">
//           <h1 className="text-4xl border-b-4 border-secondary mb-5 w-[150px] border-purple-400 font-bold text-purple-400">
//             Projects
//           </h1>
//           <p>
//             These are some of my best projects. I have built these with React,
//             Mysql , Nodejs , Expressjs , Redux , TailwindCSs, and vanilla CSS. Check them out.
//           </p>
//         </div>
//       </div>
//       <div className="flex-grow">
//         <div className="grid md:grid-cols-2  grid-cols-1 md:px-20 gap-3 rounded-3xl ">
//           {config.projects.map((project, index) => (
//             <div className="relative" 
//             key={index}
//              >
//               <motion.img
//                 initial={{
//                   x:-300,
//                   opacity:0.5
//                 }}
//                 whileInView={{
                  
//                   x:1,
//                   opacity:1,
                  
//                 }}
                
//                 transition={{
//                   type:"spring",
//                   stiffness:60,
//                   duration:4
//                 }}
//                 className="md:h-[400px] md:w-[600px] h-[200px] w-[400px] rounded-3xl"
//                 src={project.image}
//                 alt={`Project ${index + 1}`}
//               />
//               <div className="project-desc md:h-[400px] md:w-[600px] h-[200px] w-[400px] rouded-3xl ">
//                 <p className="text-center px-5 py-5">{project.description}</p>
//                 <div className="flex justify-center">
//                   <a
//                     className="btn bg-purple-500 text-white md:px-3 font-semibold rounded-md py-2"
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     href={project.link}
//                   >
//                     View Project
//                   </a>
//                 </div>
//               </div>
//             </div>
//           ))}
           
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Projects;



import websiteImg4 from "../assets/netflix_project.jfif";
import websiteImg1 from "../assets/reserve-eat.png";
import websiteImg2 from "../assets/Nike.png";
import websiteImg3 from "../assets/recipe.png";
import { useEffect } from "react";
import { motion, useMotionValue } from "framer-motion";
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
        image: websiteImg2,
        description:
          "A dynamic e-commerce platform offering Nike products, powered by React and styled with Tailwind CSS.",
        link: "https://dastagir-nike.vercel.app/",
      },
      {
        image: websiteImg1,
        description:
          "A hotel table booking platform where customers can browse a variety of restaurants and book tables. The platform includes user authentication, email notifications for bookings, and an admin interface for managing restaurants and bookings",
        link: "https://dastagir-reserve-eat.vercel.app/",
      },
      {
        image: websiteImg4,
        description: "A Netflix-inspired streaming platform featuring user authentication, built with React, Firebase, and integrated with a movies API",
        link: "https://dastagir-netflix.vercel.app/",
      },
      {
        image: websiteImg3,
        description: "An intuitive recipe application providing step-by-step instructions and ingredient lists for various dishes.",
        link: "https://dastagir-recipie.vercel.app/",
      },
    ],
  };

  return (
    <div
      ref={ref}
      variants={boxVariant}
      initial="hidden"
      animate={control}
      id="project"
      className="flex flex-col min-h-screen py-20 px-5 justify-center bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="flex-grow">
        <div className="flex flex-col px-10 py-5">
          <h1 className="text-4xl border-b-4 border-secondary mb-5 w-[150px] border-purple-400 font-bold text-purple-400">
            Projects
          </h1>
          <p>
            These are some of my best projects. I have built these with React,
            Mysql, Nodejs, Expressjs, Redux, TailwindCSS, and vanilla CSS. Check them out.
          </p>
        </div>
      </div>
      <div className="flex-grow">
        <div className="grid md:grid-cols-2 grid-cols-1 md:px-20 gap-3 rounded-3xl">
          {config.projects.map((project, index) => (
            <div className="relative" key={index}>
              <motion.img
                initial={{ x: -300, opacity: 0.5 }}
                whileInView={{ x: 1, opacity: 1 }}
                transition={{ type: "spring", stiffness: 60, duration: 4 }}
                className="w-full md:h-[400px] h-[200px] rounded-3xl"
                src={project.image}
                alt={`Project ${index + 1}`}
              />
              <div className="project-desc absolute inset-0 flex flex-col justify-center items-center md:text-2xl font-light py-12 bg-gray-500 bg-opacity-75 duration-700 hover:opacity-100 rounded-3xl">
                <p className="text-center px-5 py-2">{project.description}</p>
                <div className="flex justify-center">
                  <a
                    className="btn bg-purple-500 text-white px-3 font-semibold rounded-md py-2"
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
    </div>
  );
};

export default Projects;

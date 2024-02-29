
// import websiteImg1 from '../assets/ecommerce-websites.jpg';
// import websiteImg2 from '../assets/food-ecommerce.jpg';
// import websiteImg3 from '../assets/food-ecommerce.jpg';
// const Projects = () => {
//     const config = {
//         projects : [
//             {
//                 image: websiteImg1,
//                 description: 'A Ecommerce Website. Built with MERN Stack.',
//                 link: 'https://github.com/jvlcode/jvlcart'
//             },
//             {
//                 image: websiteImg2,
//                 description: 'Food Ecommerce website like Swiggy, Built with Angular & .Net',
//                 link: 'https://github.com/jvlcode/food'
//             },
//             {
//                 image: websiteImg3,
//                 description: 'Basic Blog Website . Built with Next JS and MongoDB',
//                 link: 'https://github.com/jvlcode/blog'
//             }
//         ]
//     }

//   return (
  
//     <section id='projects' className="flex  flex-col py-20 px-5   justify-center bg-primary text-white">
//         <div className="w-full">
//             <div className="flex flex-col px-10 py-5">
//                 <h1 className="text-4xl border-b-4 border-secondary mb-5 w-[150px] font-bold">Projects</h1>
//                 <p>These are some of my best projects. I have built these with React, MERN and vanilla CSS. Check them out.</p>
//             </div>
//         </div>
//         <div className="w-full">
//             <div className='flex flex-col md:flex-row px-10 gap-5'>
//                 {config.projects.map((project,val) => (
//                      <div className='relative' key={val}>
//                         <img className='h-[300px] w-[500px]' src={project.image}/>
//                         <div className='project-desc'>
//                             <p className='text-center px-5 py-5'>{project.description}</p>
//                             <div className='flex justify-center'>
//                                 <a className='btn' target='_blank' href={project.link}>View Project</a>
//                             </div>
//                         </div>
//                     </div>
//                 ))}
               
               
//             </div>
//         </div>
//     </section>
//   );
// };

// export default Projects;


import websiteImg1 from '../assets/ecommerce-websites.jpg';
import websiteImg2 from '../assets/food-ecommerce.jpg';
import websiteImg3 from '../assets/food-ecommerce.jpg';

const Projects = () => {
    const config = {
        projects: [
            {
                image: websiteImg1,
                description: 'A Ecommerce Website. Built with MERN Stack.',
                link: 'https://github.com/jvlcode/jvlcart'
            },
            {
                image: websiteImg2,
                description: 'Food Ecommerce website like Swiggy, Built with Angular & .Net',
                link: 'https://github.com/jvlcode/food'
            },
            {
                image: websiteImg3,
                description: 'Basic Blog Website . Built with Next JS and MongoDB',
                link: 'https://github.com/jvlcode/blog'
            }
        ]
    };

    return (
        <section id='project' className="flex flex-col min-h-screen py-20 px-5 justify-center bg-gradient-to-b  from-gray-800 to-black text-white">
            <div className="flex-grow">
                <div className="flex flex-col px-10 py-5">
                    <h1 className="text-4xl border-b-4 border-secondary mb-5 w-[150px] font-bold">Projects</h1>
                    <p>These are some of my best projects. I have built these with React, MERN, and vanilla CSS. Check them out.</p>
                </div>
            </div>
            <div className="flex-grow">
                <div className='flex flex-col md:flex-row px-10 gap-5'>
                    {config.projects.map((project, index) => (
                        <div className='relative' key={index}>
                            <img className='h-[300px] w-[500px]' src={project.image} alt={`Project ${index + 1}`} />
                            <div className='project-desc'>
                                <p className='text-center px-5 py-5'>{project.description}</p>
                                <div className='flex justify-center'>
                                    <a className='btn' target='_blank' rel='noopener noreferrer' href={project.link}>View Project</a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;


import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import About from './components/About';

const ScrollAnimationComponent = () => {
    const boxVariant = {
        visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
        hidden: { opacity: 0, scale: 0 }
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
    <motion.div
    className="box"
    ref={ref}
    variants={boxVariant}
    initial="hidden"
    animate={control}
    >
    
     <About/>
    </motion.div>
  );
};

export default ScrollAnimationComponent;



// import { useEffect, useState } from 'react';
// import { motion, useViewportScroll } from 'framer-motion';
// import About from './components/About';

// const ScrollAnimationComponent = () => {
//   const [scrollY, setScrollY] = useState(0);
//   const { scrollYProgress } = useViewportScroll();

//   useEffect(() => {
//     const updateScrollY = () => {
//       setScrollY(scrollYProgress.get());
//     };

//     scrollYProgress.onChange(updateScrollY);

//     return () => {
//       scrollYProgress.clearListeners();
//     };
//   }, [scrollYProgress]);

//   return (
//     <motion.div
//       animate={{ opacity: scrollY > 0.5 ? 1 : 0 }}
//       transition={{ duration: 0.3 }}
//     >
//       <About/>
//       <About/>
//       <About/>
//       <About/>
//       <About/>
//     </motion.div>
//   );
// };

// export default ScrollAnimationComponent;

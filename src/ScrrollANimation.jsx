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



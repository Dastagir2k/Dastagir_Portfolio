import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import './WelcomePage.css'; // Import the CSS for the blinking cursor

const WelcomePage = () => {
  const navigate = useNavigate();
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
      setTimeout(() => {
        navigate('/home');
      }, 2000); // Duration for the exit animation
    }, 3800); // Duration of animation in milliseconds

    return () => clearTimeout(timer);
  }, [navigate]);

  useEffect(() => {
    const text = "Welcome to Dastagir Portfolio";
    let i = 0;
    const typingSpeed = 100; // Speed of typing
    const element = document.getElementById('typing-text');

    const typeWriter = () => {
      if (i < text.length) {
        element.innerHTML = text.substring(0, i + 1) + '<span class="cursor">|</span>';
        i++;
        setTimeout(typeWriter, typingSpeed);
      } else {
        element.innerHTML = text; // Remove cursor after typing is done
      }
    };

    typeWriter();
  }, []);

  const bounceTransition = {
    type: 'spring',
    stiffness: 150, // Lower stiffness for a smoother bounce
    damping: 4, // Controls the bounce effect, lower value for more bounce
    mass: 1, // Optional: Mass of the spring
  };

  const exitAnimation = {
    y: '-100%',
    transition: { duration: 2, ease: 'easeInOut' } // Shutter effect duration
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          className="flex flex-col items-center justify-center h-screen bg-gradient-to-b from-gray-600 to-black font-thin"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={exitAnimation}
          transition={{ duration: 2 }} // Animation duration for fade-in effect
        >
          <motion.img
            src='../code.png'
            className='h-1/2 w-1/3 font-thin px-4'
            animate={{
              y: ['20%', '-20%'],
              scale: [1, 1.2, 1],
              rotate: [0, 10, -10, 0]
            }}
            transition={{
              ...bounceTransition,
              duration: 2, // Duration of one cycle of the animation
              repeat: Infinity,
              repeatType: 'loop'
            }}
          />
          <br />
          <h1 className="text-white text-4xl px-4">
            <span id="typing-text" className="typing-container text-white font-hero-font"></span>
          </h1>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default WelcomePage;

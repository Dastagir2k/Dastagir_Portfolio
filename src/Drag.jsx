import {motion, useMotionValue, useTransform } from 'framer-motion'
import React from 'react'

const Drag = () => {
    const x=useMotionValue(0)
    const y=useMotionValue(0)
    const rotateX=useTransform(y,[-100,100],[-60,60]);
    const rotateY=useTransform(x,[-100,100],[-60,60]);


  return (
    <div className=' m-auto mt-20 h-40 w-40 bg-red-400 rounded-full'>
        <motion.div
        className="t-10 h-80 w-80 bg-white rounded-md"
        style={{x,y,rotateX,rotateY}}
        drag 
        dragConstraints={{ top: 0, right: 0, bottom: 0, left: 0 }}
        dragElastic={0.6}
        whileTap={{ cursor: "grabbing" }}
        >
        </motion.div>
        Motion
    </div>
  )
}

export default Drag


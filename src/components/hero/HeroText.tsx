import React from 'react';
import { motion } from 'framer-motion';

// Animation variants for the container
const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3
    }
  }
};

// Animation for each letter
const letterAnimation = {
  hidden: { 
    opacity: 0,
    y: 50,
    rotateX: -90
  },
  show: { 
    opacity: 1,
    y: 0,
    rotateX: 0,
    transition: {
      type: "spring",
      damping: 12,
      stiffness: 100
    }
  }
};

// Animation for text sections
const textAnimation = {
  hidden: { opacity: 0, y: 20 },
  show: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut"
    }
  }
};

export const HeroText = () => {
  const mainText = "Fastastic";
  const subText = "Solutions";

  return (
    <motion.div
      variants={container}
      initial="hidden"
      animate="show"
      className="space-y-4"
    >
      <div className="overflow-hidden">
        <motion.h1 className="font-orbitron">
          <div className="flex flex-wrap justify-center text-5xl md:text-7xl lg:text-8xl font-bold mb-2">
            {mainText.split("").map((char, index) => (
              <motion.span
                key={`main-${index}`}
                variants={letterAnimation}
                className="inline-block"
                style={{
                  color: "transparent",
                  WebkitBackgroundClip: "text",
                  backgroundClip: "text",
                  backgroundImage: "linear-gradient(to right, #f0abfc, #c084fc, #a855f7)",
                  padding: "0 1px",
                }}
              >
                {char}
              </motion.span>
            ))}
          </div>
          <div className="flex flex-wrap justify-center text-3xl md:text-4xl lg:text-5xl font-bold mt-2">
            {subText.split("").map((char, index) => (
              <motion.span
                key={`sub-${index}`}
                variants={letterAnimation}
                className="inline-block"
                style={{
                  color: "transparent",
                  WebkitBackgroundClip: "text",
                  backgroundClip: "text",
                  backgroundImage: "linear-gradient(to right, #c084fc, #a855f7, #8b5cf6)",
                  padding: "0 1px",
                }}
              >
                {char}
              </motion.span>
            ))}
          </div>
        </motion.h1>
      </div>
      
      <motion.p 
        variants={textAnimation}
        className="text-xl md:text-2xl lg:text-3xl font-light text-purple-200 mb-8 font-raleway"
      >
        World's Fastest Digital Solutions Provider
      </motion.p>
      
      <motion.div 
        variants={textAnimation}
        className="text-base md:text-lg text-gray-300 max-w-3xl mx-auto space-y-6 font-raleway"
      >
        <p className="leading-relaxed">
          Experience lightning-fast delivery with our expert team. We specialize in rapid development
          of websites, mobile apps, and automation solutions—delivering 90% of projects within 48 hours.
        </p>
        <p className="leading-relaxed">
          From concept to completion, we work at unprecedented speeds without compromising on quality.
          Our streamlined process and expert team ensure your vision comes to life faster than ever.
        </p>
        <p className="text-lg md:text-xl font-medium text-purple-300">
          Why wait months when you can launch in days? Get your project fast-tracked today.
        </p>
      </motion.div>
      
      <motion.div
        variants={container}
        className="flex flex-wrap gap-4 justify-center mt-8"
      >
        {[
          { value: "48h", label: "Project\nDelivery" },
          { value: "90%", label: "Success\nRate" },
          { value: "24/7", label: "Express\nSupport" }
        ].map((item, index) => (
          <motion.div
            key={index}
            variants={{
              hidden: { scale: 0, opacity: 0 },
              show: { 
                scale: 1, 
                opacity: 1,
                transition: {
                  type: "spring",
                  delay: 0.8 + index * 0.2
                }
              }
            }}
            className="flex items-center space-x-2 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg p-4 hover:scale-105 transition-transform"
          >
            <span className="text-4xl font-bold text-white">{item.value}</span>
            <span className="text-sm text-purple-100 whitespace-pre-line">{item.label}</span>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
};
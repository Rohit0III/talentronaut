import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const OurTeamSection = () => {
  const { ref: leftRef, inView: leftInView } = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  const { ref: rightRef, inView: rightInView } = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  const { ref: centerRef, inView: centerInView } = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  return (
    <div className="relative flex items-center justify-center my-16 bg-white">
      {/* Left Text with advanced animation */}
      <div
        className="hidden md:block absolute left-8 top-1/2 transform -translate-y-1/2 text-orange-1000 text-2xl font-bold tracking-wide"
      >
        <div className="flex flex-col items-center space-y-2">
          <span>O</span>
          <span>U</span>
          <span>R</span>
        </div>
      </div>

      {/* Center Content with staggered animation */}
      <motion.div
        ref={centerRef}
        initial={{ opacity: 0, y: 50 }}
        animate={{
          opacity: centerInView ? 1 : 0,
          y: centerInView ? 0 : 50,
        }}
        transition={{
          duration: 1.2,
          ease: "easeOut",
          delay: 0.4,
        }}
        className="text-center"
      >
        <div className="text-orange-1000 text-2xl font-bold tracking-wide my-8">
          <span>Our Team</span>
        </div>
        <h1 className="text-5xl md:text-8xl transform scale-y-125 font-serif leading-tight">
          We Use What <br /> We Build.
        </h1>
        <motion.p
          className="mt-6 text-center text-lg font-normal leading-relaxed text-gray-800 max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{
            opacity: centerInView ? 1 : 0,
            y: centerInView ? 0 : 20,
          }}
          transition={{
            duration: 1,
            ease: "easeOut",
            delay: 0.6,
          }}
        >
          At the heart of our process is a deep-seated belief in the quality and
          potential of MindPalace. Before anything reaches your hands, it
          undergoes rigorous testing and scrutiny. We stand behind every
          feature, every security measure, and every innovation, ensuring that
          each meets our high standards.
        </motion.p>
      </motion.div>

      {/* Right Text with advanced animation */}
      <div
        className="absolute right-8 top-1/2 transform -translate-y-1/2 text-orange-1000 text-2xl font-bold tracking-wide"
      >
        <div className="hidden md:flex flex-col items-center space-y-2">
          <span>T</span>
          <span>E</span>
          <span>A</span>
          <span>M</span>
        </div>
      </div>
    </div>
  );
};

export default OurTeamSection;

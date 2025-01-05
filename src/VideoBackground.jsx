import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const VideoBackground = () => {
  const { ref: topContentRef, inView: topContentInView } = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  const { ref: bottomContentRef, inView: bottomContentInView } = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  return (
    <div className="relative h-screen overflow-hidden rounded-[2rem] m-2">
      {/* Video Background */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        autoPlay
        muted
        loop
      >
        <source
          src="https://cdn.prod.website-files.com/66a316c9b5b625f7454f779e%2F66b825f6754fe5eef250db1e_Signup-transcode.mp4"
          type="video/mp4"
        />
      </video>

      <div className="bg-black absolute inset-0 w-full h-full object-cover opacity-30"></div>

      {/* Content */}
      <div className="relative h-full flex flex-col justify-between">
        {/* Top Content */}
        <motion.div
          ref={topContentRef}
          initial={{ opacity: 0, y: -100 }}
          animate={{ opacity: topContentInView ? 1 : 0, y: topContentInView ? 0 : -100 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="absolute top-0 inset-x-0 justify-center px-4 py-4 md:flex"
        >
          <div className="text-white text-center md:text-start">
            <h1 className="text-5xl lg:text-8xl font-serif leading-0">
              Step into <br /> Your Future
            </h1>
          </div>
          {/* Sign Up Section */}
          <div className="text-center md:text-start lg:ms-auto">
            <p className="mt-4 text-xl sm:text-2xl text-white max-w-3xl">
              Plan ahead with confidence using data-driven insights that help you make better decisions for your future.
            </p>
            <button className="mt-6 px-12 py-4 text-lg font-extrabold text-black bg-orange-1000 rounded-full shadow-lg hover:bg-orange-900 transition">
              SIGN UP
            </button>
          </div>
        </motion.div>

        {/* Bottom Content */}
        <motion.div
          ref={bottomContentRef}
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: bottomContentInView ? 1 : 0, y: bottomContentInView ? 0 : 100 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="absolute bottom-0 w-full px-4 py-8"
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4 justify-center items-center">
            {/* Feature Box 1 */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="relative border-2 h-full border-orange-1000 rounded-full md:rounded-[2.5rem] lg:rounded-full px-8 py-6 lg:py-6 md:py-8 text-center text-white"
            >
              <h3 className="text-lg lg:text-xl font-bold text-orange-1000 uppercase">
                Make Informed Decisions
              </h3>
              <p className="mt-4 text-sm lg:text-lg">
                Use data-driven insights to confidently plan your future decisions.
              </p>
            </motion.div>

            {/* Feature Box 2 */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="relative border-2 h-full border-orange-1000 rounded-full md:rounded-[2.5rem] lg:rounded-full px-8 py-6 text-center text-white"
            >
              <h3 className="text-lg lg:text-xl font-bold text-orange-1000 uppercase">
                Get Ahead with Personalized Suggestions
              </h3>
              <p className="mt-4 text-sm lg:text-lg">
                Unlock ideas you never saw coming—project proposals, emails, DMs, and custom gifts.
              </p>
            </motion.div>

            {/* Feature Box 3 */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="relative border-2 h-full border-orange-1000 rounded-full md:rounded-[2.5rem] lg:rounded-full px-8 py-6 text-center text-white"
            >
              <h3 className="text-lg lg:text-xl font-bold text-orange-1000 uppercase">
                Plan Memorable Events
              </h3>
              <p className="mt-4 text-sm lg:text-lg">
                Get customized advice for planning your next trip, dinner, or meeting.
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default VideoBackground;

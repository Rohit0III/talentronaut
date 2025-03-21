"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"

const VideoBackground = () => {
  const { ref: topContentRef, inView: topContentInView } = useInView({
    triggerOnce: true,
    threshold: 0.5,
  })

  const { ref: bottomContentRef, inView: bottomContentInView } = useInView({
    triggerOnce: true,
    threshold: 0.5,
  })

  const features = [
    {
      title: "Make Informed Decisions",
      description: "Use data-driven insights to confidently plan your future decisions.",
      delay: 0.2,
      link: "https://www.linksus.in/",
      image: "/scre.png",
    },
    {
      title: "Get Ahead with Personalized Suggestions",
      description: "Unlock ideas you never saw coming—project proposals, emails, DMs, and custom gifts.",
      delay: 0.4,
      link: "https://www.example2.com",
      image: "https://www.example2.com/screenshot.jpg",
    },
    {
      title: "Plan Memorable Events",
      description: "Get customized advice for planning your next trip, dinner, or meeting.",
      delay: 0.6,
      link: "https://www.example3.com",
      image: "https://www.example3.com/screenshot.jpg",
    },
  ];

  return (
    <div className="relative min-h-screen overflow-hidden rounded-lg sm:rounded-xl md:rounded-2xl lg:rounded-[2rem] m-2">
      {/* Video Background with proper aspect ratio handling */}
      <div className="absolute inset-0">
        <video
          className="w-full h-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          aria-hidden="true"
        >
          <source
            src="https://cdn.prod.website-files.com/66a316c9b5b625f7454f779e%2F66b825f6754fe5eef250db1e_Signup-transcode.mp4"
            type="video/mp4"
          />
        </video>
        <div className="absolute inset-0 bg-black/30" aria-hidden="true" />
      </div>

      {/* Content Container */}
      <div className="relative min-h-screen flex flex-col gap-5 justify-between">
        {/* Top Content */}
        <motion.div
          ref={topContentRef}
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: topContentInView ? 1 : 0, y: topContentInView ? 0 : -50 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="pt-8 sm:pt-12 md:pt-16 lg:pt-20 px-4 sm:px-6 md:px-8 lg:px-12"
        >
          <div className="text-white text-center max-w-4xl mx-auto">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-serif leading-tight">
              Explore Our Recent Projects
            </h1>
          </div>
        </motion.div>

        {/* Bottom Content */}
        <motion.div
          ref={bottomContentRef}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: bottomContentInView ? 1 : 0, y: bottomContentInView ? 0 : 50 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="pb-8 sm:pb-12 md:pb-16 lg:pb-20 px-4 sm:px-6 md:px-8 lg:px-12"
        >
          <div>
            {/* Feature Cards in Row Layout */}
            <div className="flex flex-row flex-wrap h- justify-center gap-6 sm:gap-8">
              {features.map((feature, index) => (
                <a
                  key={index}
                  href={feature.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative border-2 border-orange-500 rounded-2xl sm:rounded-3xl md:rounded-[2.5rem] p-6 sm:p-8 text-center text-white backdrop-blur-sm bg-black/10 w-full max-w-sm h-96  overflow-hidden"
                >
                  <div
                    className="absolute inset-0 bg-cover bg-center opacity-30"
                    style={{ backgroundImage: `url(${feature.image})` }}
                  />
                  <div className="relative z-10">
                    <h3 className="text-base sm:text-lg md:text-xl font-bold text-orange-500 uppercase">
                      {feature.title}
                    </h3>
                    <p className="mt-3 sm:mt-4 text-sm bottom-[-1] sm:text-base md:text-lg">{feature.description}</p>
                  </div>
                </a>
              ))}
            </div>

            {/* Sign Up Section */}
            <div className="text-center mt-8 sm:mt-10 md:mt-14">
              <p className="text-lg sm:text-xl md:text-2xl text-white max-w-3xl mx-auto">
                Plan ahead with confidence using data-driven insights that help you make better decisions
                for your future.
              </p>
              <button className="mt-6 px-8 sm:px-10 md:px-12 py-3 sm:py-4 text-base sm:text-lg font-bold text-black bg-orange-500 rounded-full shadow-lg hover:bg-orange-400 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2">
                SIGN UP
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default VideoBackground

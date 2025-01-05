import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Section = () => {
    // Define advanced animation variants
    const animationVariants = {
        hidden: {
            opacity: 0,
            y: 50,
            scale: 0.95,
            transition: {
                duration: 0.6,
                ease: [0.42, 0, 0.58, 1], // Ease-out cubic
            },
        },
        visible: {
            opacity: 1,
            y: 0,
            scale: 1,
            transition: {
                duration: 0.8,
                ease: [0.42, 0, 0.58, 1], // Smooth ease-in-out
                delay: 0.2,
                when: 'beforeChildren',
            },
        },
    };

    // Intersection observer hook
    const { ref: rightRef, inView: rightInView } = useInView({
        triggerOnce: true,
        threshold: 0.2,
    });

    return (
        <div className="flex flex-col lg:flex-row items-center justify-between bg-[#e8f1ea] rounded-[2rem] m-2 shadow-lg overflow-hidden">
            {/* Left Section with Video Background */}
            <div className="relative w-full h-[40vh] md:min-w-[45%] md:h-[70vh] lg:h-[80vh] rounded-[2rem] overflow-hidden">
                <motion.video
                    className="absolute top-0 left-0 w-full h-full object-cover"
                    autoPlay
                    muted
                    loop
                    loading="lazy"
                    style={{ willChange: 'transform' }}
                >
                    <source
                        src="https://cdn.prod.website-files.com/66a316c9b5b625f7454f779e%2F66b822b341c2396d1bff37d6_Past-transcode.mp4"
                        type="video/mp4"
                    />
                    <source
                        src="https://cdn.prod.website-files.com/66a316c9b5b625f7454f779e%2F66b822b341c2396d1bff37d6_Past-transcode.webm"
                        data-wf-ignore="true"
                    />
                    Your browser does not support the video tag.
                </motion.video>
                <div className="absolute inset-0 flex items-center justify-center">
                    <button className="px-6 md:px-12 text-xl lg:text-2xl py-4 md:py-6 border-2 border-white text-white font-bold rounded-full hover:bg-white hover:text-gray-800 transition duration-300">
                        GET STARTED
                    </button>
                </div>
            </div>

            {/* Right Section */}
            <motion.div
                ref={rightRef}
                initial="hidden"
                animate={rightInView ? 'visible' : 'hidden'}
                variants={animationVariants}
                className="w-full h-[60vh] md:h-[70vh] lg:h-[80vh] relative mt-6 md:mt-0 md:pl-6 px-4"
            >
                {/* Top Section */}
                <motion.div
                    initial="hidden"
                    animate={rightInView ? 'visible' : 'hidden'}
                    variants={animationVariants}
                    transition={{ duration: 1, delay: 0.4 }}
                    className="absolute top-0"
                >
                    <h2 className="text-5xl md:text-8xl text-gray-800 font-semibold">
                        See into Your Past
                    </h2>
                    <p className="mt-4 text-md md:text-lg">
                        Instantly bring up past conversations and memories with friends, family, and colleagues,
                        making it easy to continue where you left off.
                    </p>
                </motion.div>

                {/* Bottom Section with Staggered Animations */}
                <motion.div
                    className="absolute bottom-0 w-full grid grid-cols-1 md:grid-cols-3 gap-4 py-6 rounded-lg"
                    initial="hidden"
                    animate={rightInView ? 'visible' : 'hidden'}
                    variants={animationVariants}
                    transition={{ duration: 1, ease: 'easeOut', delay: 0 }}
                >
                    <motion.div
                        className="grid grid-cols-1 gap-4 p-2 border-l border-black"
                        variants={{
                            hidden: { opacity: 0, y: 20 },
                            visible: { opacity: 1, y: 0 },
                        }}
                        transition={{ duration: 0.8, delay: 0 }}
                    >
                        <h3 className="text-md font-bold text-black flex items-center">
                            <span className="w-2 h-2 bg-red-500 rounded-full inline-block mr-2"></span>
                            Effortlessly Access Notes
                        </h3>
                        <p className="text-sm mt-2">
                            Quickly grab your notes and to-dos without digging through multiple apps.
                        </p>
                    </motion.div>

                    <motion.div
                        className="grid grid-cols-1 gap-4 p-2 md:border-r border-l border-black"
                        variants={{
                            hidden: { opacity: 0, y: 20 },
                            visible: { opacity: 1, y: 0 },
                        }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                    >
                        <h3 className="text-md font-bold text-black flex items-center">
                            <span className="w-2 h-2 bg-red-500 rounded-full inline-block mr-2"></span>
                            Gather Information Fast
                        </h3>
                        <p className="text-sm mt-2">
                            Keep all your project-related info together so you can find it easily when you need it.
                        </p>
                    </motion.div>

                    <motion.div
                        className="grid grid-cols-1 gap-4 p-2 md:border-l-0 border-l border-black"
                        variants={{
                            hidden: { opacity: 0, y: 20 },
                            visible: { opacity: 1, y: 0 },
                        }}
                        transition={{ duration: 0.8, delay: 0.6 }}
                    >
                        <h3 className="text-md font-bold text-black flex items-center">
                            <span className="w-2 h-2 bg-red-500 rounded-full inline-block mr-2"></span>
                            Share Memories with Friends
                        </h3>
                        <p className="text-sm mt-2">
                            Bring back those awesome chats and memories with friends and family, turning nostalgia into fun.
                        </p>
                    </motion.div>
                </motion.div>

            </motion.div>
        </div>
    );
};

export default Section;

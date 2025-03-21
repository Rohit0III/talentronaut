import { motion, useAnimation } from 'framer-motion';
import { useInView } from "react-intersection-observer";
import React from 'react';
import { FaBoltLightning } from "react-icons/fa6";


const HeroSection = () => {
    const animationVariants = {
        hidden: {
            opacity: 0,
            y: -100,
            scale: 0.98,
        },
        visible: {
            opacity: 1,
            y: 0,
            scale: 1,
            transition: {
                duration: 0.8,
                ease: [0.25, 0.8, 0.25, 1],
                delay: 0.4,
            },
        },
    };

    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0,
    });

    const controls = useAnimation();
    React.useEffect(() => {
        if (inView) {
            controls.start("visible");
        } else {
            controls.start("hidden");
        }
    }, [inView, controls]);

    return (
        <div
            className="relative lg:h-[95vh] h-[75vh] max-sm:h-[60%] bg-cover bg-center rounded-[2.5rem] m-2 flex flex-col"
            style={{ backgroundImage: "url('/hero-bg.jpg')" }}
        >
            {/* Overlay to darken background for better contrast */}
            <div className="absolute inset-0 bg-black bg-opacity-5 rounded-[2.5rem] z-0"></div>

            {/* Logo at Top */}
            <div className="absolute top-6 left-6 hidden lg:block z-10">
                <img
                    src="/logo-talentronaut.png"
                    alt="Talentronaut Logo"
                    className="rounded-full w-24 h-20"
                />
            </div>

            {/* Main Content Section */}
            <motion.div
                ref={ref}
                initial="hidden"
                animate={controls}
                variants={animationVariants}
                className="relative z-10 flex flex-1 flex-col justify-between px-4 lg:px-8 text-white"
            >
                {/* Top Content */}
                <div>
                    <p className="md:hidden text-sm lg:text-lg max-w-lg lg:max-w-none p-4">
                        Integrate data from all your apps into a single platform, with perfect
                        memory and predictive capabilities.
                    </p>
                </div>


                {/* Email Input & Button */}
                <div className="flex flex-col md:flex-row items-center justify-between gap-4 w-full max-w-md mx-auto lg:max-w-none pb-20 lg:pb-32">
                    {/* Adjusted padding-bottom here to prevent overlap */}
                    {/* Email Input */}
                    <p className="hidden lg:block text-sm lg:text-lg max-w-lg lg:max-w-none p-4">
                        Integrate data from all your apps into a single platform, with perfect
                        memory and predictive capabilities.
                    </p>
                    <div className="flex border items-center border-gray-600 rounded-2xl px-3 w-full">
                        <div className="w-3 h-3 bg-purple-900 rounded-full me-4" />
                        <input
                            type="email"
                            placeholder="Enter Your Email_"
                            className="py-2 md:py-3 text-white placeholder-purple-900 text-xl lg:text-2xl font-serif bg-transparent focus:outline-none w-full"
                        />
                    </div>
                    {/* Button */}
                    <button className="flex items-center text-sm lg:text-lg bg-purple-900 text-White font-extrabold justify-center py-4 rounded-full hover:bg-orange-600 w-full lg:w-52">
                        <span className="transform text-white scale-y-75">HOP IN</span>
                        <FaBoltLightning className="ms-2" />
                    </button>
                </div>
            </motion.div>

            {/* Footer Logo */}

            <motion.div
    ref={ref}
    initial="hidden"
    animate={controls}
    variants={animationVariants}
    className="absolute bottom-6 md:bottom-4 w-full text-center z-10"
>
    <h1 className="text-orange-600 font-extrabold max-sm:text-5xl text-9xl md:text-8xl lg:text-[156px] tracking-wide">
        TALENTRONAUT
    </h1>
</motion.div>
        </div >
    );
};

export default HeroSection;

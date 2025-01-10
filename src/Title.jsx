import React from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

function Title() {
    // Animation variants for Framer Motion
    const animationVariants = {
        hidden: {
            opacity: 0,
            transform: "translateY(-50%) scale(0.95)",
        },
        visible: {
            opacity: 1,
            transform: "translateY(0%) scale(1)",
            transition: {
                duration: 0.6, // Faster animation for better user experience
                ease: "easeOut", // Simpler easing function
                delay: 0.15, // Reduced delay for quicker visibility
            },
        },
    };

    // Intersection Observer Hook with debounce
    const { ref, inView } = useInView({
        triggerOnce: true, // Trigger animation only once
        threshold: 0.3, // Element needs to be 30% visible
    });

    // Animation Controls
    const controls = useAnimation();

    React.useEffect(() => {
        if (inView) {
            controls.start("visible");
        }
    }, [inView, controls]);

    return (
        <div className="flex justify-center items-center my-2 px-4">
            {/* Animated Title Container */}
            <motion.div
                ref={ref}
                initial="hidden"
                animate={controls}
                variants={animationVariants}
                className="text-center mx-auto max-w-max min-w-full"
            >
                {/* Lazy-Loaded Responsive Image */}
                <img
                    src="https://cdn.prod.website-files.com/66a316c9b5b625f7454f779e/66a7a8f0d94fc30069599ee2_headline.svg"
                    alt="Title"
                    loading="lazy" // Lazy load for better performance
                    className="hidden md:block w-full h-auto mx-auto"
                />

                {/* Fallback Text for SEO or Accessibility */}
                <h1 className="md:hidden text-4xl font-serif text-gray-900">
                    Your Personal <br /> Time Machine
                </h1>
            </motion.div>
        </div>
    );
}

export default Title;

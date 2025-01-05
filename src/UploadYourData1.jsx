import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { FaChrome, FaRegStickyNote, FaSlack, FaSpotify, FaWhatsapp } from "react-icons/fa";
import { SiNotion, SiGmail, SiImessage } from "react-icons/si";

const UploadYourData = () => {
    // Animation variants for parent (stagger effect)
    const parentVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.15, // Stagger delay for children
            },
        },
    };

    // Animation variants for children
    const childVariants = {
        hidden: { opacity: 0, scale: 0.8 },
        visible: {
            opacity: 1,
            scale: 1,
            transition: { duration: 0.4, ease: "easeOut" },
        },
    };

    // Intersection Observer
    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.2, // Trigger animation when 20% of the element is visible
    });

    return (
        <div className="lg:hidden flex flex-col items-center px-4 my-8 bg-white">
            {/* Left Section */}
            <motion.h1
                className="text-6xl font-serif mb-6 mt-4 text-gray-800 text-center"
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, ease: "easeOut" }}
                ref={ref}
            >
                Upload Your Data
            </motion.h1>

            {/* Right Section: Apps Grid */}
            <motion.div
                className="grid grid-cols-3 grid-rows-6 gap-2"
                ref={ref}
                variants={parentVariants}
                initial="hidden"
                animate={inView ? "visible" : ""}
            >
                {/* Text Box */}
                <motion.div
                    className="flex items-end justify-start border border-gray-300 col-span-2 row-span-2 bg-white rounded-xl shadow-sm p-4"
                    variants={childVariants}
                >
                    <p className="text-gray-700 font-medium text-xl">
                        Connect all your<br />
                        essential apps.
                    </p>
                </motion.div>

                {/* App Icons */}
                <motion.div
                    className="flex items-center justify-center border border-gray-300 bg-white rounded-xl shadow-sm"
                    variants={childVariants}
                >
                    <SiGmail className="text-3xl m-10" />
                </motion.div>

                <motion.div
                    className="flex items-center justify-center border border-gray-300 bg-white rounded-xl shadow-sm"
                    variants={childVariants}
                >
                    <FaRegStickyNote className="text-3xl" />
                </motion.div>

                <motion.div
                    className="flex items-center justify-center border border-gray-300 bg-white rounded-xl shadow-sm"
                    variants={childVariants}
                >
                    <FaSlack className="text-3xl" />
                </motion.div>

                <motion.div
                    className="flex items-center justify-center border border-gray-300 col-span-2 bg-white rounded-xl shadow-sm"
                    variants={childVariants}
                >
                    <FaSpotify className="text-3xl" />
                </motion.div>

                <motion.div
                    className="flex items-center justify-center border border-gray-300 col-span-2 row-span-2 bg-white rounded-xl shadow-sm"
                    variants={childVariants}
                >
                    <FaChrome className="text-3xl" />
                </motion.div>

                <motion.div
                    className="flex items-center justify-center border border-gray-300 bg-white rounded-xl shadow-sm"
                    variants={childVariants}
                >
                    <FaWhatsapp className="text-3xl" />
                </motion.div>

                <motion.div
                    className="flex items-center justify-center border border-gray-300 bg-white rounded-xl shadow-sm"
                    variants={childVariants}
                >
                    <SiNotion className="text-3xl" />
                </motion.div>

                <motion.div
                    className="flex items-center justify-center border border-gray-300 col-span-3 bg-white rounded-xl shadow-sm"
                    variants={childVariants}
                >
                    <SiImessage className="text-3xl" />
                </motion.div>
            </motion.div>
        </div>
    );
};

export default UploadYourData;

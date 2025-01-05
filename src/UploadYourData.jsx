import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
    FaChrome,
    FaRegStickyNote,
    FaSlack,
    FaSpotify,
    FaWhatsapp,
} from "react-icons/fa";
import { SiNotion, SiGmail, SiImessage } from "react-icons/si";

const UploadYourData = () => {
    const { ref: titleRef, inView: titleInView } = useInView({
        triggerOnce: true,
        threshold: 0.5,
    });

    const animationVariants = {
        hidden: { opacity: 0, scale: 0.8, y: 50 },
        visible: (delay) => ({
            opacity: 1,
            scale: 1,
            y: 0,
            transition: {
                duration: 0.3,  // Shortened duration for faster animation
                ease: "easeOut",
                delay,
            },
        }),
    };

    const icons = [
        { component: FaSlack, delay: 0.1 },
        { component: FaSpotify, delay: 0.2, colSpan: 2 },
        { component: FaWhatsapp, delay: 0.3 },
        { component: FaChrome, delay: 0.4, colSpan: 2, rowSpan: 2 },
        { component: "text", text: "Connect all your\nessential apps.", delay: 0.5, colSpan: 2, rowSpan: 2 },
        { component: SiGmail, delay: 0.6 },
        { component: FaRegStickyNote, delay: 0.7 },
        { component: SiNotion, delay: 0.8 },
        { component: SiImessage, delay: 0.9, colSpan: 3 },
    ];

    return (
        <div className="hidden lg:flex items-end justify-between px-10 my-10 bg-white">
            {/* Left Section */}
            <div className="text-left">
                <motion.h1
                    ref={titleRef}
                    className="text-7xl font-light mb-4"
                    initial="hidden"
                    animate={titleInView ? "visible" : "hidden"}
                    variants={animationVariants}
                >
                    Upload Your Data
                </motion.h1>
            </div>

            {/* Right Section */}
            <div className="grid grid-cols-6 grid-rows-3 gap-2">
                {icons.map((icon, index) => {
                    const IconComponent = icon.component;

                    return (
                        <motion.div
                            key={index}
                            ref={titleRef}
                            className={`flex items-center justify-center border border-black p-12 bg-white rounded-3xl ${
                                icon.colSpan ? `col-span-${icon.colSpan}` : ""
                            } ${icon.rowSpan ? `row-span-${icon.rowSpan}` : ""}`}
                            initial="hidden"
                            animate={titleInView ? "visible" : "hidden"}
                            custom={icon.delay}
                            variants={animationVariants}
                        >
                            {IconComponent === "text" ? (
                                <p className="text-gray-900 font-normal leading-6 text-lg m-4">
                                    {icon.text}
                                </p>
                            ) : (
                                <IconComponent className="text-3xl" />
                            )}
                        </motion.div>
                    );
                })}
            </div>
        </div>
    );
};

export default UploadYourData;

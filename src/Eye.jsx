import React from 'react';
import { FaArrowRight } from "react-icons/fa";
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';

function Eye() {
    const { ref: titleRef, inView: titleInView } = useInView({
        triggerOnce: true,
        threshold: 0.5,
    });

    const { ref: inputRef, inView: inputInView } = useInView({
        triggerOnce: true,
        threshold: 0.5,
    });

    const { ref: buttonRef, inView: buttonInView } = useInView({
        triggerOnce: true,
        threshold: 0.5,
    });

    return (
        <div
            ref={titleRef}
            className='m-4 rounded-2xl grid grid-rows-3 p-6 md:p-8 bg-[url("https://cdn.prod.website-files.com/66a316c9b5b625f7454f779e/66a44304e99458cd3f128513_noone.webp")] bg-cover bg-center mx-4'
        >
            {/* Title Animation */}
            <motion.h1
                className='text-4xl md:text-7xl text-white font-serif text-start'
                initial={{ opacity: 0, y: -50 }}
                animate={{
                    opacity: titleInView ? 1 : 0,
                    y: titleInView ? 0 : -50,
                }}
                transition={{ duration: 0.8 }}
            >
                Time Waits<br />
                for No One
            </motion.h1>

            <div></div>

            <div className="flex flex-col md:flex-row gap-4 mt-auto mb-2">
                {/* Input Animation */}
                <motion.div
                    ref={inputRef}
                    className='flex items-center border border-gray-400 w-full rounded-2xl px-3'
                    initial={{ opacity: 0, x: -50 }}
                    animate={{
                        opacity: inputInView ? 1 : 0,
                        x: inputInView ? 0 : -50,
                    }}
                    transition={{ duration: 0.8 }}
                >
                    <div className='w-3 h-3 bg-orange-1000 rounded-full me-4' />
                    <input
                        type="email"
                        placeholder="Enter Your Email_"
                        className="py-3 md:py-4 text-white placeholder-white text-lg md:text-3xl font-serif bg-transparent focus:outline-none"
                    />
                </motion.div>

                {/* Button Animation */}
                <motion.button
                    ref={buttonRef}
                    className="flex items-center w-full md:w-52 text-lg bg-orange-1000 text-black font-extrabold justify-center py-2 rounded-full hover:bg-orange-600"
                    initial={{ opacity: 0, x: 50 }}
                    animate={{
                        opacity: buttonInView ? 1 : 0,
                        x: buttonInView ? 0 : 50,
                    }}
                    transition={{ duration: 0.8 }}
                >
                    HOP IN
                    <FaArrowRight className="ms-2" />
                </motion.button>
            </div>
                <span className='text-center md:mr-6 md:text-end'>Terms</span>
        </div>
    );
}

export default Eye;

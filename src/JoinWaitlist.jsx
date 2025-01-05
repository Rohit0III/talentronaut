import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

function JoinWaitlist() {
    const { ref: step1Ref, inView: step1InView } = useInView({
        triggerOnce: true,
        threshold: 0.5,
    });

    const { ref: step2Ref, inView: step2InView } = useInView({
        triggerOnce: true,
        threshold: 0.5,
    });

    const { ref: step3Ref, inView: step3InView } = useInView({
        triggerOnce: true,
        threshold: 0.5,
    });

    const { ref: description1Ref, inView: description1InView } = useInView({
        triggerOnce: true,
        threshold: 0.5,
    });

    const { ref: description2Ref, inView: description2InView } = useInView({
        triggerOnce: true,
        threshold: 0.5,
    });

    const { ref: description3Ref, inView: description3InView } = useInView({
        triggerOnce: true,
        threshold: 0.5,
    });

    const { ref: bgRef, inView: bgInView } = useInView({
        triggerOnce: true,
        threshold: 0.5,
    });

    return (
        <motion.div
            className="grid grid-cols-1 lg:grid-cols-2 rounded-3xl m-4 bg-orange-1000"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
        >
            <div className="grid grid-cols-3 grid-rows-3 p-8 divide-x divide-black">
                {/* Step 1 */}
                <motion.div
                    ref={step1Ref}
                    className="flex flex-col border-l border-black ps-2"
                    initial={{ opacity: 0, y: -50 }}
                    animate={{
                        opacity: step1InView ? 1 : 0,
                        y: step1InView ? 0 : -50,
                    }}
                    transition={{ duration: 0.8 }}
                >
                    <span className="text-8xl">1</span>
                    <span className="text-xl font-bold text-white">
                        Create <br />
                        your account
                    </span>
                </motion.div>

                {/* Step 2 */}
                <motion.div
                    ref={step2Ref}
                    className="flex flex-col ps-2"
                    initial={{ opacity: 0, y: -50 }}
                    animate={{
                        opacity: step2InView ? 1 : 0,
                        y: step2InView ? 0 : -50,
                    }}
                    transition={{ duration: 0.8 }}
                >
                    <span className="text-8xl">2</span>
                    <span className="text-xl font-bold text-white">
                        Create <br />
                        your account
                    </span>
                </motion.div>

                {/* Step 3 */}
                <motion.div
                    ref={step3Ref}
                    className="flex flex-col ps-2"
                    initial={{ opacity: 0, y: -50 }}
                    animate={{
                        opacity: step3InView ? 1 : 0,
                        y: step3InView ? 0 : -50,
                    }}
                    transition={{ duration: 0.8 }}
                >
                    <span className="text-8xl">3</span>
                    <span className="text-xl font-bold text-white">
                        Create <br />
                        your account
                    </span>
                </motion.div>

                <div />
                <div />
                <div />

                {/* Step Descriptions */}
                <motion.div
                    ref={description1Ref}
                    className="row-start-3 items-end flex text-white ps-2"
                    initial={{ opacity: 0 }}
                    animate={{
                        opacity: description1InView ? 1 : 0,
                    }}
                    transition={{ duration: 1 }}
                >
                    Sign up with your <br />email.
                </motion.div>

                <motion.div
                    ref={description2Ref}
                    className="row-start-3 items-end flex text-white ps-2"
                    initial={{ opacity: 0 }}
                    animate={{
                        opacity: description2InView ? 1 : 0,
                    }}
                    transition={{ duration: 1 }}
                >
                    Link your most-used <br />apps.
                </motion.div>

                <motion.div
                    ref={description3Ref}
                    className="row-start-3 items-end flex text-white ps-2"
                    initial={{ opacity: 0 }}
                    animate={{
                        opacity: description3InView ? 1 : 0,
                    }}
                    transition={{ duration: 1 }}
                >
                    Enjoy perfect memory and predictive capabilities.
                </motion.div>
            </div>

            {/* Background with animation */}
            <motion.div
                ref={bgRef}
                className="items-end justify-end relative w-full pt-[80%] bg-[auto_140%] bg-center bg-[url('https://cdn.prod.website-files.com/66a316c9b5b625f7454f779e/66b6cf7e70706d360d02b123_phone.webp')] bg-no-repeat rounded-3xl"
                initial={{ scale: 1.1 }}
                animate={{
                    scale: bgInView ? 1 : 1.1,
                }}
                transition={{ duration: 1, ease: 'easeOut' }}
            >
                {/* Button with animation */}
                <motion.div
                    className="bg-white rounded-full py-4 font-extrabold px-10 my-4 mx-auto lg:me-4 lg:ms-auto max-w-xs text-center"
                    whileHover={{ scale: 1.1 }}
                    transition={{ type: 'spring', stiffness: 300 }}
                >
                    JOIN THE WAITLIST
                </motion.div>
            </motion.div>
        </motion.div>
    );
}

export default JoinWaitlist;

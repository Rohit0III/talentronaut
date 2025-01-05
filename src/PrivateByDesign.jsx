import React, { useEffect, useRef, useState } from "react";
import Eye from "./Eye";
import Footer from "./Footer";
import Bottom from "./Bottom";
import TestimonialSlider from "./TestimonialSlider";

const PrivateByDesign = () => {
    const [inView1, setInView1] = useState(false);
    const [inView2, setInView2] = useState(false);

    const containerRef1 = useRef(null);
    const containerRef2 = useRef(null);

    useEffect(() => {
        const observerCallback = (setInView) => ([entry]) => {
            setInView(entry.isIntersecting); // Update state when the component is in view
        };

        const observer1 = new IntersectionObserver(observerCallback(setInView1), { threshold: 0.5 });
        const observer2 = new IntersectionObserver(observerCallback(setInView2), { threshold: 0.5 });

        if (containerRef1.current) observer1.observe(containerRef1.current);
        if (containerRef2.current) observer2.observe(containerRef2.current);

        return () => {
            if (containerRef1.current) observer1.unobserve(containerRef1.current);
            if (containerRef2.current) observer2.unobserve(containerRef2.current);
        };
    }, []);

    return (
        <div
            className={`${inView1 || inView2 ? "bg-black text-white" : "bg-white text-black"
                } overflow-hidden transition-all duration-1000`}
        >
            {/* First Section */}
            <div ref={containerRef1} className="hidden lg:relative py-8 px-8">
                <div className="absolute inset-0 flex justify-center items-center">
                    <h1 className="text-7xl md:text-9xl transform scale-y-150 font-serif mb-12 tracking-wide">
                        Private by Design
                    </h1>
                </div>

                {/* Circular elements */}
                <div className="grid grid-cols-1 md:grid-cols-6 gap-8 max-w-6xl mx-auto h-[90svh]">
                    {/* Top-left text */}
                    <div className="flex justify-center items-end">
                        <div className="flex bg-black border border-red-500 text-red-500 aspect-[3/5] rounded-full px-4 py-8 max-w-xs">
                            <span className="flex justify-center items-center text-sm">
                                We believe that you own the data you create, including all that
                                you've created in the past.
                            </span>
                        </div>
                    </div>

                    {/* Center text */}
                    <div className="flex justify-center items-start">
                        <div className="flex bg-black border border-red-500 text-red-500 aspect-[3/5] rounded-full px-4 py-8 max-w-xs">
                            <span className="flex justify-center items-center text-sm">
                                You have peace of mind, ownership, and control over your personal
                                data.
                            </span>
                        </div>
                    </div>

                    <div />
                    {/* Top-right text */}
                    <div className="flex justify-center items-end translate-y-6">
                        <div className="flex bg-black border border-red-500 text-red-500 aspect-[3/5] rounded-full px-4 py-8 max-w-xs">
                            <span className="flex justify-center items-center text-sm">
                                Your data remains secure and confidential.
                            </span>
                        </div>
                    </div>

                    {/* Bottom-left text */}
                    <div className="flex justify-center items-start translate-y-12">
                        <div className="flex bg-black border border-red-500 text-red-500 aspect-[3/5] rounded-full px-4 py-8 max-w-xs">
                            <span className="flex justify-center items-center text-sm">
                                Our products are built with your privacy in mind from the ground
                                up.
                            </span>
                        </div>
                    </div>

                    {/* Bottom-center text */}
                    <div className="flex justify-center items-center translate-y-24">
                        <div className="flex bg-black border border-red-500 text-red-500 aspect-[3/5] rounded-full px-4 py-8 max-w-xs">
                            <span className="flex justify-center items-center text-sm">
                                We never use your data to train a model without your permission.
                            </span>
                        </div>
                    </div>
                </div>
            </div>

            {/* for mobile responsiveness */}
            <div ref={containerRef1}>
                <TestimonialSlider />
            </div>
            {/* Second Section */}
            <div ref={containerRef2}>
                <Eye />
                <Footer />
                <Bottom />
            </div>
        </div>
    );
};

export default PrivateByDesign;

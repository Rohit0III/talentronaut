import React from 'react';

function Footer() {
    return (
        <div className="flex flex-col md:flex-row items-center justify-between bg-[#e8f1ea] rounded-[2rem] m-4 shadow-lg overflow-hidden">
            {/* Left Section with Video Background */}
            <div className="relative w-full md:min-w-[45%] aspect-w-16 aspect-h-9 md:h-[350px] rounded-[2rem] overflow-hidden">
                <video
                    className="absolute top-0 left-0 w-full h-full object-cover"
                    autoPlay
                    muted
                    loop
                >
                    <source
                        src="https://cdn.prod.website-files.com/66a316c9b5b625f7454f779e%2F66b822b341c2396d1bff37d6_Past-transcode.mp4"
                        type="video/mp4"
                    />
                    <source
                        src="https://cdn.prod.website-files.com/66a316c9b5b625f7454f779e%2F66b822b341c2396d1bff37d6_Past-transcode.webm"
                        type="video/webm"
                    />
                    Your browser does not support the video tag.
                </video>
                <div className="absolute top-0 left-0 w-full h-full object-cover bg-black opacity-10" />
                <div className="flex flex-col justify-between items-center relative h-full">
                    {/* Image at the top */}
                    <div className="flex justify-center w-full">
                        <img
                            className="hidden md:block my-4 opacity-20 hover:opacity-100"
                            src="https://cdn.prod.website-files.com/66a316c9b5b625f7454f779e/66a4436400aa346e11fe35ad_mindpalace-logo-primary.svg"
                            loading="lazy"
                            alt="MindPalace logo"
                        />
                        <img
                            className="md:hidden my-4 opacity-60 hover:opacity-100 min-w-lg h-auto aspect-[1/0.6]"
                            src="https://cdn.prod.website-files.com/66a316c9b5b625f7454f779e/66a798591dba0124ef1c8dd6_mindpalace-logo-symbol_outline.svg"
                            loading="lazy"
                            alt="MindPalace logo"
                        />

                    </div>

                    {/* Text at the bottom */}
                    <div className="grid md:grid-cols-3 grid-cols-1 justify-start md:justify-center divide-x-0 md:divide-x-2 divide-y-2 md:divide-y-0 w-full text-start md:text-center">
                        <span className="px-6 md:px-12 py-2 md:py-4 font-extrabold text-3xl text-white">
                            GET STARTED
                        </span>
                        <span className="px-6 md:px-12 py-2 md:py-4 font-extrabold text-3xl text-white">
                            Blog
                        </span>
                        <span className="px-6 md:px-12 py-2 md:py-4 font-extrabold text-3xl text-white">
                            FAQ
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer;

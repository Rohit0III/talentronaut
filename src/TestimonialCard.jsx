import React from "react";

const Testimonials = () => {
    return (
        <div className="container mx-auto px-4 grid grid-cols-12 grid-rows-24 gap-8 w-full">
            {/* First Testimonial */}
            <div className="col-start-1 col-end-13 md:col-start-2 md:col-end-6 md:row-start-2 md:row-end-7">
                <div className="relative overflow-hidden aspect-[4/5.5] rounded-t-full rounded-b-none shadow-md">
                    <video
                        className="absolute top-0 left-0 w-full h-full object-cover"
                        src="https://cdn.prod.website-files.com/66a316c9b5b625f7454f779e%2F66b82602f5f5d1125a4c4587_kim-ho-transcode.mp4"
                        poster="https://cdn.prod.website-files.com/66a316c9b5b625f7454f779e%2F66b82602f5f5d1125a4c4587_kim-ho-poster-00001.jpg"
                        autoPlay
                        loop
                        muted
                    />
                    <div className="absolute bottom-6 left-6 text-white">
                        <h3 className="text-lg font-semibold">KIM HO</h3>
                        <p className="text-sm italic">Director of Operations</p>
                    </div>
                </div>
                <div className="flex items-center space-x-4 mt-4">
                    <img
                        className="w-16 h-16 rounded-full shadow-md"
                        src="https://cdn.prod.website-files.com/66a316c9b5b625f7454f779e/66bbd016ab2173bb84fea341_kim.png"
                        alt="Kim Ho"
                    />
                    <p className="text-sm">
                        MindPalace has helped put my relationship with my siblings into perspective so I can better understand their points of view.
                    </p>
                </div>
            </div>

            {/* Second Testimonial */}
            <div className="col-start-1 col-end-13 md:col-start-8 md:col-end-11 md:row-start-1 md:row-end-3">
                <div className="relative overflow-hidden aspect-[1/1] rounded-full shadow-md">
                    <video
                        className="absolute top-0 left-0 w-full h-full object-cover"
                        src="https://cdn.prod.website-files.com/66a316c9b5b625f7454f779e%2F66bad3cbfc5ba5a52cee00eb_matthewgardnerv4-transcode.mp4"
                        poster="https://cdn.prod.website-files.com/66a316c9b5b625f7454f779e%2F66bad3cbfc5ba5a52cee00eb_matthewgardnerv4-poster-00001.jpg"
                        autoPlay
                        loop
                        muted
                    />
                    <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center">
                        <h3 className="text-lg font-semibold">MATTHEW GARDNER</h3>
                        <p className="text-sm italic">CPO & Co-Founder</p>
                    </div>
                </div>

                <div className="flex items-center space-x-4 mt-4">
                    <img
                        className="w-16 h-16 rounded-full shadow-md"
                        src="https://cdn.prod.website-files.com/66a316c9b5b625f7454f779e/66bbd0eb6bad6dc279597132_matt.png"
                        alt="Matthew Gardner"
                    />
                    <div className="flex-shrink-0 max-w-[225px] overflow-visible">
                        <p className="text-sm">
                            MindPalace helped me find the perfect birthday gift for my wife with shocking clarity into our past and refreshing wisdom for the next year.
                        </p>
                    </div>
                </div>
            </div>

            {/* Third Testimonial */}
            <div className="col-start-1 col-end-13 md:col-start-7 md:col-end-12 md:row-start-5 md:row-end-8">
                <div className="relative overflow-hidden aspect-[4/2] rounded-full shadow-md">
                    <video
                        className="absolute top-0 left-0 w-full h-full object-cover"
                        src="https://cdn.prod.website-files.com/66a316c9b5b625f7454f779e%2F66bacf6fd37e493d8b9849b7_Jaredspeigel_1-transcode.mp4"
                        poster="https://cdn.prod.website-files.com/66a316c9b5b625f7454f779e%2F66bacf6fd37e493d8b9849b7_Jaredspeigel_1-poster-00001.jpg"
                        autoPlay
                        loop
                        muted
                    />
                    <div className="absolute inset-0 flex flex-col items-start ms-8 justify-center text-white text-center">
                        <h3 className="text-lg font-semibold">JARED SPIEGEL</h3>
                        <p className="text-sm italic">CEO & Co-Founder</p>
                    </div>
                </div>
                <div className="flex items-center space-x-4 mt-4">
                    <img
                        className="w-16 h-16 rounded-full shadow-md"
                        src="https://cdn.prod.website-files.com/66a316c9b5b625f7454f779e/66bbd0ebd9ee7d923c031138_jared.png"
                        alt="Jared Spiegel"
                    />
                    <p className="text-sm">
                        MindPalace lets me show up every day as my best self. I’m finally free from the restrictions of my own memory and the hassles of app-hopping.
                    </p>
                </div>
            </div>

            {/* Fourth Testimonial */}
            <div className="col-start-1 col-end-13 md:col-start-2 md:col-end-7 md:row-start-8 md:row-end-9 lg:col-start-3 lg:col-end-6 px-8 lg:row-start-9 lg:row-end-10">
                <div className="relative overflow-hidden aspect-[4/5] rounded-2xl shadow-md">
                    <video
                        className="absolute top-0 left-0 w-full h-full object-cover"
                        src="https://cdn.prod.website-files.com/66a316c9b5b625f7454f779e%2F66bad3b02dacc5cd84d054e2_dextertortoriellohd-transcode.mp4"
                        poster="https://cdn.prod.website-files.com/66a316c9b5b625f7454f779e%2F66bad3b02dacc5cd84d054e2_dextertortoriellohd-poster-00001.jpg"
                        autoPlay
                        loop
                        muted
                    />
                    <div className="absolute bottom-6 left-6 text-white">
                        <h3 className="text-lg font-semibold">DEXTER TORTORIELLO</h3>
                        <p className="text-sm italic">CTO & Co-Founder</p>
                    </div>
                </div>
                <div className="flex items-center space-x-4 mt-4">
                    <img
                        className="w-16 h-16 rounded-full shadow-md"
                        src="https://cdn.prod.website-files.com/66a316c9b5b625f7454f779e/66bbd0eaec54423f008b8cb7_dexter.png"
                        alt="Dexter Tortoriello"
                    />
                    <div className="flex-shrink-0 max-w-xs overflow-visible">
                        <p className="text-sm">
                            MindPalace is my secret weapon for synthesizing ideas from raw notes, augmenting my memory and removing all friction between thought and action.
                        </p>
                    </div>
                </div>


            </div>
        </div >
    );
};

export default Testimonials;

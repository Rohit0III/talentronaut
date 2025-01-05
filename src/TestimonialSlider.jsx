import { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules"; // Correct import for modules in Swiper 7+
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";


export default function TestimonialSlider() {
    const swiperRef = useRef(null);
    return (
        <div className="lg:hidden mx-auto h-[90svh] flex flex-col items-center justify-center">
            <span className="text-white text-4xl transform scale-y-150 font-serif mt-32 mb-12">
                Private by Design
            </span>
            <Swiper
                modules={[Navigation, Pagination, Autoplay]}
                spaceBetween={12}
                breakpoints={{
                    // When window width is >= 640px (mobile screens)
                    0: {
                        slidesPerView: 2,
                    },
                    640: {
                        slidesPerView: 2,
                    },
                    // When window width is >= 768px (tablet screens)
                    768: {
                        slidesPerView: 2,
                    },
                    // When window width is >= 1024px (desktop screens)
                    965: {
                        slidesPerView: 3,
                    },
                }}
                onSwiper={(swiper) => (swiperRef.current = swiper)}
                autoplay={{ delay: 3000, disableOnInteraction: false }}
                setWrapperSize={true}
                className="w-full my-auto min-h-[50%]"
            >
                <SwiperSlide className="">
                    <div className="flex justify-center items-center">
                        <div className="flex border border-red-500 text-red-500 aspect-[3/5] rounded-full px-4 py-4 max-w-[19rem]">
                            <span className="flex justify-center items-center text-2xl font-bold">
                                We believe that you own the data you create, including all that
                                you've created in the past.
                            </span>
                        </div>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className="flex justify-center items-center">
                        <div className="flex  border border-red-500 text-red-500 aspect-[3/5] rounded-full px-4 py-8 max-w-[19rem]">
                            <span className="flex justify-center items-center text-2xl font-bold">
                                You have peace of mind, ownership, and control over your personal
                                data.
                            </span>
                        </div>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className="flex justify-center items-center">
                        <div className="flex  border border-red-500 text-red-500 aspect-[3/5] rounded-full px-4 py-8 max-w-[19rem]">
                            <span className="flex justify-center items-center text-2xl font-bold">
                                Your data remains secure and confidential.
                            </span>
                        </div>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className="flex justify-center items-center">
                        <div className="flex  border border-red-500 text-red-500 aspect-[3/5] rounded-full px-4 py-8 max-w-[19rem]">
                            <span className="flex justify-center items-center text-2xl font-bold">
                                Our products are built with your privacy in mind from the ground
                                up.
                            </span>
                        </div>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className="flex justify-center items-center">
                        <div className="flex  border border-red-500 text-red-500 aspect-[3/5] rounded-full px-4 py-8 max-w-[19rem]">
                            <span className="flex justify-center items-center text-2xl font-bold">
                                We never use your data to train a model without your permission.
                            </span>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>

            {/* Custom Buttons */}
            <div className="flex gap-4 mt-6 ms-auto mb-20 mr-12">
                {/* Previous Button */}
                <button
                    className="border bg-none border-red-500 text-white px-4 py-4 rounded-full hover:bg-red-900"
                    onClick={() => swiperRef.current?.slidePrev()}
                >
                    <svg class="h-6 w-6 text-red-500 group-hover:text-white" viewBox="0 0 24 24" fill="none"
                        xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M20.9999 12L4.99992 12M9.99992 6L4.70703 11.2929C4.3737 11.6262 4.20703 11.7929 4.20703 12C4.20703 12.2071 4.3737 12.3738 4.70703 12.7071L9.99992 18"
                            stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                </button>

                {/* Next Button */}
                <button
                    className="border border-red-500 text-white px-4 py-4 rounded-full hover:bg-red-900"
                    onClick={() => swiperRef.current?.slideNext()}
                >
                    <svg class="h-6 w-6 text-red-500 group-hover:text-white" viewBox="0 0 24 24" fill="none"
                        xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M3 12L19 12M14 18L19.2929 12.7071C19.6262 12.3738 19.7929 12.2071 19.7929 12C19.7929 11.7929 19.6262 11.6262 19.2929 11.2929L14 6"
                            stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                </button>
            </div>
        </div>
    );
}

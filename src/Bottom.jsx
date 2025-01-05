import React from 'react'
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter, FaLinkedin } from "react-icons/fa6";
function Bottom() {
    return (
        <>
            <div className="grid p-4 gap-4 grid-cols-3 items-center justify-between bg-black overflow-hidden text-black">
                {/* Left Section with Video Background */}
                <div className='bg-orange-1000 px-4 text-4xl py-8 md:py-10 rounded-3xl md:rounded-full shadow-lg flex items-center justify-center'>
                    <FaInstagram />
                </div>
                <div className='bg-orange-1000 px-4 text-4xl py-8 md:py-10 rounded-3xl md:rounded-full shadow-lg flex items-center justify-center'>
                    <FaXTwitter />
                </div>
                <div className='bg-orange-1000 text-4xl px-4 py-8 md:py-10 rounded-3xl md:rounded-full  shadow-lg flex items-center justify-center'>
                    <FaLinkedin />
                </div>
            </div>
            <div className='flex bg-black text-white text-sm'>
                <p className='whitespace-nowrap'>
                    © 2024 MindPalace. All rights reserved.
                </p>
                <div className='flex justify-end w-full'>
                    <span className='mx-1'>
                        Terms
                    </span>
                    <span className='mx-1'>
                        Privacy
                    </span>
                </div>
            </div>
        </>
    )
}

export default Bottom

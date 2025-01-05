import React from "react";

const Loader = () => {
    return (
        <div className="relative h-screen shadow-md border-b">
            <div className="fixed animate-bounce inset-0 z-50 flex items-center justify-center bg-white">
                <div className="flex flex-col items-center">
                    {/* Rotating and bouncing logo */}
                    <img
                        src="https://cdn.prod.website-files.com/66a316c9b5b625f7454f779e/66a42197cc9c2c121112a75c_mindpalace-logo-wordmark.svg"
                        alt="MindPalace Logo"
                        className="w-[80%] h-32"
                    />
                    {/* Subtext below the logo */}
                    <p className="mt-5 text-gray-600 text-lg animate-pulse">
                        Loading, please wait...
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Loader;

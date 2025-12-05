import React from "react";
import { useNavigate } from "react-router-dom";

const Carousel = () => {
  const navigate = useNavigate();
  return (
    <>
      <div
        className="text-center overflow-hidden 
        mt-20 lg:mt-[108px] h-auto md:h-screen w-full bg-no-repeat
        bg-cover
        bg-top md:bg-center
       bg-[url('/images/banner-home-mobile.webp')]
       sm:bg-[url('/images/banner-home-mobile-534.webp')]
        md:bg-[url('/images/banner-home.webp')]"
        id="home"
      >
        <div className="max-w-4xl mx-auto flex flex-col items-center justify-center h-full w-full py-20 sm:py-40 md:py-70 px-8 md:px-4">
          <h1
            className="max-w-[260px] sm:max-w-full md:max-w-full  ylwColor font-bold mb-2 md:mb-4 font-notoSerif px-4 text-lg sm:text-2xl md:text-4xl"
            style={{ textShadow: "2px 2px 4px rgba(0,0,0,0.8)" }}
          >
            Arab Heritage must lead Arab Tourism
          </h1>
          <p
            className="max-w-[350px] sm:max-w-[600px] md:max-w-full text-center text-white text-sm sm:text-lg md:text-2xl mb-6"
            style={{ textShadow: "2px 2px 4px rgba(0,0,0,0.8)" }}
          >
            A pilgrim becomes a believer. A visitor becomes an ambassador. And
            the Kingdom becomes the world’s living heritage.
          </p>
          <button
            onClick={() => navigate("/contact")}
            className="text-[10px] sm:text-[14px] text-white hover:text-[#ed9127] px-4 md:px-6 py-1 md:py-2 rounded-full bg-[#ed9127] hover:bg-white  cursor-pointer relative z-10 transition-colors"
          >
            Contact Us
          </button>
        </div>
      </div>
    </>
  );
};

export default Carousel;

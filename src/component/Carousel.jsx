import React from "react";
import { useNavigate } from "react-router-dom";

const Carousel = () => {
  const navigate = useNavigate();
  return (
    <>
      <div
        className="text-center
         overflow-hidden
         mt-[74px]
         lg:mt-[108px]
         h-auto 
         md:h-full
           w-full
           bg-no-repeat
            bg-center
            bg-cover md:bg-cover"
        id="home"
        style={{
          backgroundImage: `url('${
            import.meta.env.BASE_URL
          }images/banner-home.webp')`,
        }}
      >
        <div className="max-w-4xl mx-auto flex flex-col items-center justify-center h-full w-full py-10 md:py-80 px-4">
          <h1 className="ylwColor font-bold mb-4 font-notoSerif px-4 text-2xl md:text-4xl">
            Arab Heritage must lead Arab Tourism
          </h1>
          <p className="text-center text-white text-md md:text-2xl mb-6">
            A pilgrim becomes a believer. A visitor becomes an ambassador. And
            the Kingdom becomes the world’s living heritage.
          </p>
          <button
            onClick={() => navigate('/contact')}
            className="text-white hover:text-[#ed9127] px-6 py-2 rounded-full bg-[#ed9127] hover:bg-[#fff]  cursor-pointer relative z-10 transition-colors"
          >
            Contact Us
          </button>
        </div>
      </div>
    </>
  );
};

export default Carousel;

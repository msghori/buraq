import { useState } from "react";

export default function WorkCarousel() {
  const images = [
    `${import.meta.env.BASE_URL}images/work/Slide1.webp`,
    `${import.meta.env.BASE_URL}images/work/Slide3.webp`,
    `${import.meta.env.BASE_URL}images/work/Slide4.webp`,
    `${import.meta.env.BASE_URL}images/work/Slide5.webp`,
    `${import.meta.env.BASE_URL}images/work/Slide6.webp`,
    `${import.meta.env.BASE_URL}images/work/Slide7.webp`,
    `${import.meta.env.BASE_URL}images/work/Slide8.webp`,
    `${import.meta.env.BASE_URL}images/work/Slide9.webp`,
    `${import.meta.env.BASE_URL}images/work/Slide10.webp`,
    `${import.meta.env.BASE_URL}images/work/Slide11.webp`,
    `${import.meta.env.BASE_URL}images/work/Slide12.webp`,
    `${import.meta.env.BASE_URL}images/work/Slide13.webp`,
    `${import.meta.env.BASE_URL}images/work/Slide14.webp`,
    `${import.meta.env.BASE_URL}images/work/Slide15.webp`,
    `${import.meta.env.BASE_URL}images/work/Slide16.webp`,
    `${import.meta.env.BASE_URL}images/work/Slide17.webp`,
    `${import.meta.env.BASE_URL}images/work/Slide18.webp`,
    `${import.meta.env.BASE_URL}images/work/Slide19.webp`,
    `${import.meta.env.BASE_URL}images/work/Slide20.webp`,
    `${import.meta.env.BASE_URL}images/work/Slide21.webp`,
    `${import.meta.env.BASE_URL}images/work/Slide22.webp`,
    `${import.meta.env.BASE_URL}images/work/Slide23.webp`,
    `${import.meta.env.BASE_URL}images/work/Slide24.webp`,
    `${import.meta.env.BASE_URL}images/work/Slide25.webp`,
    `${import.meta.env.BASE_URL}images/work/Slide27.webp`,
    `${import.meta.env.BASE_URL}images/work/Slide28.webp`,
    `${import.meta.env.BASE_URL}images/work/Slide29.webp`,
    `${import.meta.env.BASE_URL}images/work/Slide30.webp`,
    `${import.meta.env.BASE_URL}images/work/Slide31.webp`,
    `${import.meta.env.BASE_URL}images/work/Slide32.webp`,
    `${import.meta.env.BASE_URL}images/work/Slide33.webp`,
    `${import.meta.env.BASE_URL}images/work/Slide35.webp`,
    `${import.meta.env.BASE_URL}images/work/Slide37.webp`,
    `${import.meta.env.BASE_URL}images/work/Slide38.webp`,
    `${import.meta.env.BASE_URL}images/work/Slide39.webp`,
    `${import.meta.env.BASE_URL}images/work/Slide40.webp`,
    `${import.meta.env.BASE_URL}images/work/Slide42.webp`,
    `${import.meta.env.BASE_URL}images/work/Slide44.webp`,
    `${import.meta.env.BASE_URL}images/work/Slide46.webp`,
    `${import.meta.env.BASE_URL}images/work/Slide47.webp`,
    `${import.meta.env.BASE_URL}images/work/Slide49.webp`,
    `${import.meta.env.BASE_URL}images/work/Slide50.webp`,
    `${import.meta.env.BASE_URL}images/work/Slide51.webp`,
    `${import.meta.env.BASE_URL}images/work/Slide52.webp`,
    `${import.meta.env.BASE_URL}images/work/Slide53.webp`,
    `${import.meta.env.BASE_URL}images/work/Slide55.webp`,
    `${import.meta.env.BASE_URL}images/work/Slide56.webp`,
    `${import.meta.env.BASE_URL}images/work/Slide57.webp`,
    `${import.meta.env.BASE_URL}images/work/Slide58.webp`,
  ];

  const [current, setCurrent] = useState(0);

  const prevSlide = () => {
    setCurrent(current === 0 ? images.length - 1 : current - 1);
  };

  const nextSlide = () => {
    setCurrent(current === images.length - 1 ? 0 : current + 1);
  };

  return (
    <div className="relative w-full max-w-7xl mx-auto mb-8">
      <div className="overflow-hidden rounded-lg h-auto md:h-[500px] object-contain bg-[#1e1e1e]">
        <img
          src={images[current]}
          alt={`slide ${current}`}
          className="w-full h-full object-contain transition-all duration-500"
          onError={nextSlide} // 👉 Skip missing image
        />
      </div>

      {/* Arrows */}
      <button
        onClick={prevSlide}
        className="absolute top-1/2 left-2 -translate-y-1/2 p-2 rounded-full hover:bg-opacity-90 cursor-pointer"
      >
        <svg width="40" height="40" viewBox="0 0 24 24" fill="none">
          <path
            d="M15 18L9 12L15 6"
            stroke="#f39412"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>
      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-2 -translate-y-1/2  p-2 rounded-full hover:bg-opacity-90 cursor-pointer"
      >
        <svg width="40" height="40" viewBox="0 0 24 24" fill="none">
          <path
            d="M9 18L15 12L9 6"
            stroke="#f39412"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>

      {/* Dots */}
      <div className="flex flex-wrap justify-center mt-4 space-x-2">
        {images.map((_, index) => (
          <span
            key={index}
            className={`w-3 h-3 rounded-full mb-2 hidden sm:block cursor-pointer ${
              index === current ? "bg-white" : "bg-[#f39412]"
            }`}
            onClick={() => setCurrent(index)}
          ></span>
        ))}
      </div>
    </div>
  );
}

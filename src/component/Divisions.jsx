import React from "react";
import { useNavigate } from "react-router-dom";

const Divisions = () => {
  const navigate = useNavigate();

  const navigateToPage = (path) => {
    navigate(path);
    window.scrollTo(0, 0);
  };
  return (
    <div
      className="max-w-6xl mx-auto px-4 py-10 text-white text-center"
      id="divisions"
    >
      <h1 className="ylwColor font-bold font-notoSerif px-4 text-2xl md:text-4xl mb-[250px] lg:mb-[320px]">
        Divisions
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center ylwColor font-notoSerif font-extrabold">
        <div className="max-w-[300px] md:max-w-auto mx-auto  border rounded-md px-20 pt-15 pb-10 relative mb-[200px] lg:mb-[250px]">
          <img
            src={`${
              import.meta.env.BASE_URL
            }images/divisions/restoration-dev.webp`}
            alt="Opportunity"
            className="w-[295px] lg:w-full h-80 object-contain absolute top-[-70px] lg:top-[-100px] left-1/2  p-4 -translate-x-1/2 -translate-y-1/2"
          />
          <h2>
            <button
              onClick={() =>
                navigateToPage("/divisions/restoration-development")
              }
              className="hover:text-white cursor-pointer"
            >
              Restoration & Development
            </button>
          </h2>
        </div>
        <div className="max-w-[300px] md:max-w-auto mx-auto border rounded-md px-20 pt-15 pb-10 relative mb-[200px] lg:mb-[250px]">
          <img
            src={`${import.meta.env.BASE_URL}images/divisions/site-mana.png`}
            alt="Opportunity"
            className="w-[295px] lg:w-full h-80 object-contain absolute top-[-70px] lg:top-[-100px] left-1/2  p-4 -translate-x-1/2 -translate-y-1/2"
          />
          <h2>
            <button
              onClick={() => navigateToPage("/divisions/site-management")}
              className="hover:text-white cursor-pointer"
            >
              Site Management & Enhancement
            </button>
          </h2>
        </div>
        <div className="max-w-[300px] md:max-w-auto mx-auto border rounded-md px-20 pt-15 pb-10 relative mb-[200px] lg:mb-[250px]">
          <img
            src={`${
              import.meta.env.BASE_URL
            }images/divisions/tourism-Infra.webp`}
            alt="Opportunity"
            className="w-[295px] lg:w-full h-80 object-contain absolute top-[-70px] lg:top-[-100px] left-1/2  p-4 -translate-x-1/2 -translate-y-1/2"
          />
          <h2>
            <button
              onClick={() =>
                navigateToPage("/divisions/tourism-infrastructure")
              }
              className="hover:text-white cursor-pointer"
            >
              Tourism & Infrastructure
            </button>
          </h2>
        </div>
        <div className="max-w-[300px] md:max-w-auto mx-auto border rounded-md px-20 pt-15 pb-10 relative mb-[200px] md:mb-0">
          <img
            src={`${import.meta.env.BASE_URL}images/divisions/ai-immers.webp`}
            alt="Opportunity"
            className="w-[295px] lg:w-full h-80 object-contain absolute top-[-70px] lg:top-[-100px] left-1/2  p-4 -translate-x-1/2 -translate-y-1/2"
          />
          <h2>
            <button
              onClick={() => navigateToPage("/divisions/ai-technology")}
              className="hover:text-white cursor-pointer"
            >
              AI & Immersive Technology
            </button>
          </h2>
        </div>
        <div className="max-w-[300px] md:max-w-auto mx-auto border rounded-md px-20 pt-15 pb-10 relative mb-[200px] md:mb-0">
          <img
            src={`${import.meta.env.BASE_URL}images/divisions/film-av.webp`}
            alt="Opportunity"
            className="w-[295px] lg:w-full h-80 object-contain absolute top-[-70px] lg:top-[-100px] left-1/2  p-4 -translate-x-1/2 -translate-y-1/2"
          />
          <h2>
            <button
              onClick={() => navigateToPage("/divisions/immersive-films")}
              className="hover:text-white cursor-pointer"
            >
              Immersive Films & AV Kiosks
            </button>
          </h2>
        </div>
        <div className="max-w-[300px] md:max-w-auto mx-auto border rounded-md px-20 pt-15 pb-10 relative mb-0">
          <img
            src={`${
              import.meta.env.BASE_URL
            }images/divisions/branding-merchandise.webp`}
            alt="Opportunity"
            className="w-[295px] lg:w-full h-80 object-contain absolute top-[-70px] lg:top-[-100px] left-1/2  p-4 -translate-x-1/2 -translate-y-1/2"
          />

          <h2>
            <button
              onClick={() => navigateToPage("/divisions/branding-merchandise")}
              className="hover:text-white cursor-pointer"
            >
              Branding & Merchandise
            </button>
          </h2>
        </div>
      </div>
    </div>
  );
};

export default Divisions;

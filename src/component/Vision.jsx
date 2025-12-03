import React from "react";
import Opportunity from "./Opportunity";

const Vision = () => {
  return (
    <>
      <div
        id="about"
        className="text-center overflow-hidden"
        style={{
          backgroundImage: `url('${
            import.meta.env.BASE_URL
          }images/pattern.png')`,
          backgroundColor: "#1e1e1e",
          backgroundRepeat: "repeat",
          paddingTop: "50px",
          color: "#ffffff",
        }}
      >
        <h1 className="ylwColor  font-bold mb-4 font-notoSerif px-4 text-2xl md:text-4xl">
          Guardians of Sanctity. Builders of Legacy.
        </h1>
        <ul className=" list-disc list-inside flex flex-wrap justify-center space-x-4 md:space-x-6 text-sm md:text-xl px-4 mb-8">
          <li className="list-none py-2 md:py-8">
            <span className="ylwColor">C</span>onserve
          </li>
          <li className="py-2 md:py-8">
            <span className="ylwColor">R</span>estore
          </li>
          <li className="py-2 md:py-8">
            <span className="ylwColor">P</span>reserve
          </li>
          <li className="py-2 md:py-8">
            <span className="ylwColor">D</span>evelop
          </li>
          <li className="list-none text-6xl md:text-6xl pt-3 w-full md:w-auto">
            <span className="ylwColor font-Comforter">with</span>
          </li>
          <li className="list-none py-2 md:py-8">
            <span className="ylwColor">S</span>anctity
          </li>
          <li className="py-2 md:py-8">
            <span className="ylwColor">S</span>pirituality
          </li>
          <li className="py-2 md:py-8">
            <span className="ylwColor">S</span>pirit
          </li>
          <li className="py-2 md:py-8">
            <span className="ylwColor">S</span>ustainability
          </li>
        </ul>
        {/* vision and mission holder */}
        <div className="blackColor">
          <div className="w-full md:max-w-[1920px] mx-auto">
            <div className="flex flex-col md:flex-row gap-8">
              {/* left box vision */}
              <div className="flex-1 px-4 pt-[100px] ps-4 md:ps-[110px] bg-transparent order-1">
                <div className="py-4 text-left">
                  <h2 className="text-2xl md:text-4xl font-bold mb-2 font-notoSerif ylwColor">
                    The Vision
                  </h2>
                  <p className="mb-6">
                    We are theGuardians of
                    <span className="font-bold">
                      {" "}
                      Custodians Of Sanctity{" "}
                    </span>{" "}
                    - reviving the spirit, soul, and spirituality of Islamic
                    heritage in a sustainable way.
                  </p>
                  <p>
                    We are also the{" "}
                    <span className="font-bold"> Builders of Legacy </span> -
                    Transforming Arab culture and the stories of the Kingdom
                    into living experiences for new generations.
                  </p>
                </div>
                <div className="py-4 text-left">
                  <h2 className="text-2xl md:text-4xl font-bold mb-2 font-notoSerif ylwColor">
                    The Mission
                  </h2>
                  <p>
                    Our mission is twofold:
                    <br />
                    <span className="font-bold"> Religious Tourism: </span> To
                    safeguard sacred sites and pilgrim journeys, ensuring every
                    step is dignified and every prayer enriched with history.
                  </p>
                  <p>
                    <span className="font-bold"> Cultural Tourism: </span> To
                    inspire Arab youth and global travelers, offering not only
                    entertainment but also enlightenment creating cultural
                    ambassadors who carry The Kingdom’s story across the world.
                  </p>
                </div>
              </div>
              {/* left box */}
              {/* right box */}
              <div className="flex-1 order-2">
                <img
                  src={`${import.meta.env.BASE_URL}images/vision-bg.webp`}
                  alt="Vision"
                  className="w-full h-full object-contain xl:object-cover"
                />
              </div>
              {/* right box */}
            </div>
          </div>
        </div>
        {/* vision and mission holder */}
        <Opportunity />
      </div>
    </>
  );
};

export default Vision;

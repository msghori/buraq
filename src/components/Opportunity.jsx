import React from "react";

const Opportunity = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 pt-10" id="opportunity">
      <h1 className="ylwColor font-bold mb-4 font-notoSerif px-4 text-xl md:text-4xl">
        The Opportunity
      </h1>
      <p className="text-sm md:text-md lg:text-xl mb-6 md:mb-8 font-poppins  text-left md:text-center">
        Saudi Arabia uniquely positioned to lead with sanctity, culture, and
        innovation combined
      </p>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-left">
        <div>
          <h2 className="ylwColor font-medium">Unparalleled Scale</h2>
          <p className="text-sm">
            Over 30 million Umrah pilgrims projected annually by Vision 2030.
            1.84 million Hajj pilgrims in 2023 - 1.6 million international
            travelers from across the globe.
          </p>
        </div>
        <div>
          <h2 className="ylwColor font-medium">Tourism Transformation</h2>
          <p className="text-sm">
            Saudi Arabia’s NEOM & giga-projects are reshaping the global tourism
            landscape, creating unprecedented flows of visitors beyond
            pilgrimage.
          </p>
        </div>
        <div>
          <h2 className="ylwColor font-medium">Generational Demand</h2>
          <p className="text-sm">
            Gen Z & Gen Alpha seek more than ritual, they crave immersive,
            digital-first, identity-driven journeys.
          </p>
        </div>
        <div>
          <h2 className="ylwColor font-medium">Market Momentum</h2>
          <p className="text-sm">
            Global surge in faith-driven, heritage-rich tourism, growing faster
            than conventional leisure tourism.
          </p>
        </div>
      </div>
      <div className="">
        <img
          src={`${import.meta.env.BASE_URL}images/oppurtunity-bg.webp`}
          alt="Opportunity"
          className="w-full h-full object-contain md:object-cover mt-8"
        />
      </div>
    </div>
  );
};

export default Opportunity;

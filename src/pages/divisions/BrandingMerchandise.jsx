import React from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../../component/Navbar";
import Footer from "../../component/Footer";
import ScrollToTop from "../../component/ScrollToTop";

const BrandingMerchandise = () => {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen bg-[#1e1e1e] text-white">
      <Navbar />
      <div className="max-w-7xl mx-auto">
        <div className="pt-20">
          {/* Banner */}
          <div
            className="h-96 bg-cover bg-center flex items-center justify-center"
            style={{
              backgroundImage: `url('${
                import.meta.env.BASE_URL
              }images/divisions/branding-merchandise-banner.webp')`,
            }}
          >
            <div className="text-center relative">
              <p className="max-w-6xl max-auto text-white text-2xl md:text-4xl px-2 md:px-0">
                Perfumes • China • Clothing & Apparel • Luggage • Crystal Décor
                Tourist Souvenirs • Books & Publications.
              </p>
              <div
                className="absolute top-[-30px] right-[-70px]"
                style={{
                  backgroundImage: `url('${
                    import.meta.env.BASE_URL
                  }images/rectangle.png')`,
                  backgroundRepeat: "no-repeat",
                  width: "100px",
                  height: "100px",
                }}
              ></div>
            </div>
          </div>

          {/* Content */}
          <div className="max-w-7xl mx-auto px-4 py-10">
            <h1 className="ylwColor text-4xl font-bold mb-4 font-notoSerif text-center mb-12">
              The Branding & Merchandise
            </h1>
            <h2 className="ylwColor text-xl md:text-2xl text-left mb-4">
              Carrying heritage home.
            </h2>
            <h3 className="ylwColor text-md text-left mb-4">
              Scope & Offering
            </h3>
            <ul className="list-disc list-outside leading-tight space-y-2 ps-5 mb-6 text-white text-md">
              <li>
                Perfumes & Oud Collections: Signature blends inspired by
                heritage sites.
              </li>
              <li>
                Calligraphy & Islamic Art: Limited-edition pieces, manuscripts,
                and design collectibles.
              </li>
              <li>
                Crafts & Souvenirs: Handcrafted jewelry, crystal décor, china,
                pottery, carpets, and apparel.
              </li>
              <li>
                Collaborations: Arab master artisans + partnerships with global
                luxury retailers.
              </li>
            </ul>
            <h3 className="ylwColor text-md text-left mb-4">
              Global Presence & Online Reach
            </h3>
            <ul className="list-disc list-outside leading-tight space-y-2 ps-5 mb-6 text-white text-md">
              <li>
                At Every Heritage Site: Souvenir houses, curated boutiques,
                publications & gift shops.
              </li>
              <li>
                E-commerce Platforms: Global online shop + integration with
                travel platforms.
              </li>
              <li>
                Flagship CK Plant Branding: Centralized production hub for
                perfumes, china, apparel, and crystal.
              </li>
            </ul>
            <h3 className="ylwColor text-md text-left mb-4">Visitor Value</h3>
            <ul className="list-disc list-outside leading-tight space-y-2 ps-5 mb-6 text-white text-md">
              <li>Authenticity: Take home Arabia’s soul in tangible form.</li>
              <li>
                Accessibility: Options from luxury collectibles to affordable
                souvenirs.
              </li>
              <li>
                Legacy: Every product is a story - connecting travelers to
                heritage.
              </li>
            </ul>
            <h3 className="ylwColor text-md text-left mb-4">Why Invest?</h3>
            <ul className="list-disc list-outside leading-tight space-y-2 ps-5 mb-6 text-white text-md mb-[250px]">
              <li>
                High-margin vertical: Heritage merchandise sustains revenue far
                beyond site visits.
              </li>
              <li>
                Scalable franchise model: “Alia Franchises” for global presence
                in malls, airports, and cultural hubs.
              </li>
              <li>
                LBrand Ecosystem: Each heritage site generates its own branded
                line of perfumes, apparel, china, and lifestyle products.
              </li>
            </ul>
            {/* Other Divisions */}
            <div className="mt-16">
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 text-center ylwColor font-notoSerif font-extrabold">
                <div className="border rounded-md px-4 pt-15 pb-10 relative  mb-[190px] sm:mb-[40] md:mb-[90] lg:mb-[0]">
                  <img
                    src={`${
                      import.meta.env.BASE_URL
                    }images/divisions/restoration-dev.webp`}
                    alt="Restoration Development"
                    className="w-full h-70 sm:h-50 object-contain absolute top-[-80px] md:top-[-40px] left-1/2 p-4 -translate-x-1/2 -translate-y-1/2"
                  />
                  <button
                    onClick={() => navigate("/divisions/restoration-development")}
                    className="hover:text-white cursor-pointer text-sm"
                  >
                    Restoration & Development
                  </button>
                </div>
                <div className="border rounded-md px-4 pt-15 pb-10 relative mb-[190px] sm:mb-[40] md:mb-[90] lg:mb-[0]">
                  <img
                    src={`${
                      import.meta.env.BASE_URL
                    }images/divisions/site-mana.png`}
                    alt="Site Management"
                    className="w-full h-70 sm:h-50 object-contain absolute  top-[-80px] md:top-[-40px] left-1/2 p-4 -translate-x-1/2 -translate-y-1/2"
                  />
                  <button
                    onClick={() => navigate("/divisions/site-management")}
                    className="hover:text-white cursor-pointer text-sm"
                  >
                    Site Management & Enhancement
                  </button>
                </div>
                <div className="border rounded-md px-4 pt-15 pb-10 relative  mb-[190px] sm:mb-[40] md:mb-[90] lg:mb-[0]">
                  <img
                    src={`${
                      import.meta.env.BASE_URL
                    }images/divisions/tourism-Infra.webp`}
                    alt="Tourism Infrastructure"
                    className="w-full h-70 sm:h-50 object-contain absolute  top-[-80px] md:top-[-40px] left-1/2 p-4 -translate-x-1/2 -translate-y-1/2"
                  />
                  <button
                    onClick={() => navigate("/divisions/tourism-infrastructure")}
                    className="hover:text-white cursor-pointer text-sm"
                  >
                    Tourism & Infrastructure
                  </button>
                </div>
                <div className="border rounded-md px-4 pt-15 pb-10 relative  mb-[190px] sm:mb-[40]  md:mb-[90] lg:mb-[0]">
                  <img
                    src={`${
                      import.meta.env.BASE_URL
                    }images/divisions/ai-immers.webp`}
                    alt="AI Technology"
                    className="w-full h-70 sm:h-50 object-contain absolute  top-[-80px] md:top-[-40px] left-1/2 p-4 -translate-x-1/2 -translate-y-1/2"
                  />
                  <button
                    onClick={() => navigate("/divisions/ai-technology")}
                    className="hover:text-white cursor-pointer text-sm"
                  >
                    AI & Immersive Technology
                  </button>
                </div>
                <div className="border rounded-md px-4 pt-15 pb-10 relative  mb-[190px] sm:mb-[40] md:mb-[90] lg:mb-[0]">
                  <img
                    src={`${
                      import.meta.env.BASE_URL
                    }images/divisions/film-av.webp`}
                    alt="Immersive Films"
                    className="w-full h-70 sm:h-50 object-contain absolute  top-[-80px] md:top-[-40px] left-1/2 p-4 -translate-x-1/2 -translate-y-1/2"
                  />
                  <button
                    onClick={() => navigate("/divisions/immersive-films")}
                    className="hover:text-white cursor-pointer text-sm"
                  >
                    Immersive Films & AV Kiosks
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default BrandingMerchandise;

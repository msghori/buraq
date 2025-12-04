import React from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../../component/Navbar";
import Footer from "../../component/Footer";
import ScrollToTop from "../../component/ScrollToTop";
import { useCleanURL } from "../../hooks/useCleanURL";

const TourismInfrastructure = () => {
  const navigate = useNavigate();
  useCleanURL();
  
  const navigateToPage = (path) => {
    navigate(path);
    window.scrollTo(0, 0);
  };
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
              }images/divisions/tourism-infra-banner.webp')`,
            }}
          >
            <div className="text-center relative">
              <p className="max-w-6xl max-auto text-white text-2xl md:text-4xl px-2 md:px-0">
                Building not only the pathways of faith, but the pathways of
                Arab pride. Under the House of Saud’s stewardship, every journey
                becomes a story of sanctity, culture, and prosperity.
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
              The Tourism & Infrastructre
            </h1>

            <h2 className="ylwColor text-xl md:text-2xl text-left mb-4">
              Building the pathways of faith.
            </h2>
            <h3 className="ylwColor text-md text-left mb-4">Our Mission</h3>

            <p className="text-white leading-relaxed mb-6">
              Pilgrimage is sacred, but the journey must also inspire pride,
              identity, and prosperity.
              <br /> Buraq designs the supporting ecosystem of trails, hubs, and
              experiences that make Saudi Arabia not only the heart of Islam,
              but also the beating heart of Arab culture and hospitality.
            </p>

            <h3 className="ylwColor text-md text-left mb-4">Core Focus</h3>
            <ul className="list-disc list-outside leading-tight space-y-2 ps-5 mb-6 text-white text-md">
              <li>LHeritage Trails & Infrastructure</li>
              <li>
                Pilgrim-friendly pathways linking sacred sites to cultural
                districts.
              </li>
              <li>
                Smart transport, shaded boulevards, and heritage night lighting.
              </li>
              <li>
                Infrastructure that welcomes millions with dignity and beauty.
              </li>
              <li>Cultural Hubs & Hospitality</li>
              <li>
                Cafés, craft bazaars, souks, and food courts celebrating Arab
                flavors and folklore.
              </li>
              <li>
                Integration of global chains and luxury brands, set against
                authentic Arab identity.
              </li>
              <li>
                Festivals of poetry, music, and storytelling - Arabia as
                cultural stage of the world.
              </li>
              <li>Arab Identity & House of Saud Legacy</li>
              <li>
                Tourism as a showcase of Arab heritage and unity, placing the
                Arab voice at the center of global cultural diplomacy.
              </li>
              <li>
                Highlighting the House of Saud’s stewardship - from protecting
                the Two Holy Mosques to championing modern Arab tourism.
              </li>
              <li>
                Sites, plazas, and districts that embody the valor, honor, and
                hospitality of Arab culture.
              </li>
              <li>Capacity Building & Prosperity</li>
              <li>
                Training young Saudis in tourism, design, and heritage
                management.
              </li>
              <li>
                Empowering artisans and entrepreneurs to create global
                export-quality crafts.
              </li>
              <li>
                Tourism as an economic engine, driving jobs, GDP impact, and
                Arab pride
              </li>
            </ul>

            <h3 className="ylwColor text-md text-left mb-4">Visitor Value</h3>
            <ul className="list-disc list-outside leading-tight space-y-2 ps-5 mb-6 text-white text-md">
              <li>
                For ministries: Buraq is the one-stop partner that not only
                manages sites, but builds a global-ready tourism economy around
                them.
              </li>
              <li>
                For pilgrims & travelers: Seamless journeys where faith,
                comfort, and culture unite.
              </li>
              <li>
                For the Arab world: A tourism model that showcases Arab identity
                with dignity and places the Kingdom at the cultural forefront.
              </li>
            </ul>
            <h3 className="ylwColor text-md text-left mb-4">Why Invest?</h3>
            <ul className="list-disc list-outside leading-tight space-y-2 ps-5 mb-6 text-white text-md mb-[250px]">
              <li>
                Revenue Expansion: Tourism ecosystem multiplies spend across
                infrastructure, hospitality, retail, and events.
              </li>
              <li>
                GDP Contribution: Every USD 100–150 uplift per pilgrim
                translates into billions in added economic impact.
              </li>
              <li>
                Prestige & Legitimacy: Projects under the House of Saud’s
                umbrella carry unmatched global credibility.
              </li>
              <li>
                Global + Local Synergy: International chains ensure standards;
                Arab crafts ensure authenticity.
              </li>
            </ul>
            {/* Other Divisions */}
            <div className="mt-16">
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 text-center ylwColor font-notoSerif font-extrabold">
                <div className="border rounded-md px-4 pt-15 pb-10 relative mb-[190px] sm:mb-[40] md:mb-[90] lg:mb-[0]">
                  <img
                    src={`${
                      import.meta.env.BASE_URL
                    }images/divisions/restoration-dev.webp`}
                    alt="Restoration Development"
                    className="w-full h-70 sm:h-50 object-contain absolute top-[-80px] md:top-[-40px] left-1/2 p-4 -translate-x-1/2 -translate-y-1/2"
                  />
                  <button
                    onClick={() => navigateToPage("/divisions/restoration-development")}
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
                    className="w-full h-70 sm:h-50 object-contain absolute top-[-80px] md:top-[-40px] left-1/2 p-4 -translate-x-1/2 -translate-y-1/2"
                  />
                  <button
                    onClick={() => navigateToPage("/divisions/site-management")}
                    className="hover:text-white cursor-pointer text-sm"
                  >
                    Site Management & Enhancement
                  </button>
                </div>
                <div className="border rounded-md px-4 pt-15 pb-10 relative mb-[190px] sm:mb-[40] md:mb-[90] lg:mb-[0]">
                  <img
                    src={`${
                      import.meta.env.BASE_URL
                    }images/divisions/ai-immers.webp`}
                    alt="AI Technology"
                    className="w-full h-70 sm:h-50 object-contain absolute top-[-80px] md:top-[-40px] left-1/2 p-4 -translate-x-1/2 -translate-y-1/2"
                  />
                  <button
                    onClick={() => navigateToPage("/divisions/ai-technology")}
                    className="hover:text-white cursor-pointer text-sm"
                  >
                    AI & Immersive Technology
                  </button>
                </div>
                <div className="border rounded-md px-4 pt-15 pb-10 relative mb-[190px] sm:mb-[40] md:mb-[90] lg:mb-[0]">
                  <img
                    src={`${
                      import.meta.env.BASE_URL
                    }images/divisions/film-av.webp`}
                    alt="Immersive Films"
                    className="w-full h-70 sm:h-50 object-contain absolute top-[-80px] md:top-[-40px] left-1/2 p-4 -translate-x-1/2 -translate-y-1/2"
                  />
                  <button
                    onClick={() => navigateToPage("/divisions/immersive-films")}
                    className="hover:text-white cursor-pointer text-sm"
                  >
                    Immersive Films & AV Kiosks
                  </button>
                </div>
                <div className="border rounded-md px-4 pt-15 pb-10 relative mb-[190px] sm:mb-[40] md:mb-[90] lg:mb-[0]">
                  <img
                    src={`${
                      import.meta.env.BASE_URL
                    }images/divisions/branding-merchandise.webp`}
                    alt="Branding Merchandise"
                    className="w-full h-70 sm:h-50 object-contain absolute top-[-80px] md:top-[-40px] left-1/2 p-4 -translate-x-1/2 -translate-y-1/2"
                  />
                  <button
                    onClick={() => navigateToPage("/divisions/branding-merchandise")}
                    className="hover:text-white cursor-pointer text-sm"
                  >
                    Branding & Merchandise
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

export default TourismInfrastructure;

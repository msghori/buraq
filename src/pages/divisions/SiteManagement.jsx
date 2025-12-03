import React from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../../component/Navbar";
import Footer from "../../component/Footer";
import ScrollToTop from "../../component/ScrollToTop";

const SiteManagement = () => {
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
              }images/divisions/site-mana-banner.webp')`,
            }}
          >
            <div className="text-center relative">
              <p className="max-w-6xl max-auto text-white text-2xl md:text-4xl px-2 md:px-0">
                Transforms sacred sites into sanctuaries of peace and prosperity
                where pilgrims pray in comfort, travelers engage with meaning,
                and investors see heritage turn into recurring revenue.
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
              The Site Management & Enhancement
            </h1>
            <h2 className="ylwColor text-xl md:text-2xl text-left mb-4">
              Re-imagined radiant sanctuaries.
            </h2>
            <p className="text-white leading-relaxed mb-6">
              Heritage is not preserved by restoration alone — it must be
              sustained, beautified, and experienced with dignity. Buraq ensures
              that every sacred site moves from survival to serenity, from
              forgotten to flourishing, from ruins to radiant sanctuaries.
            </p>

            <h3 className="ylwColor text-md text-left mb-4">Core Focus</h3>
            <ul className="list-disc list-outside leading-tight space-y-2 ps-5 mb-6 text-white text-md">
              <li>
                Long-Term Upkeep & Beautification: Continuous care of mosques,
                museums and heritage spaces so they remain pristine for
                generations.
              </li>
              <li>
                Heritage Interpretation: Guided storytelling, multilingual
                signage, cultural programming — transforming every visit into a
                journey of meaning.
              </li>
              <li>
                Smart Infrastructure: Crowd-flow management to welcome millions
                of pilgrims gracefully.
              </li>
              <li>
                Shaded plazas, fountains, and rest courts for comfort and
                reflection.
              </li>
              <li>
                Digital guidance systems - AR maps, AI kiosks, immersive
                wayfinding.
              </li>
              <li>
                Movies and improved interactive digital interfaces 3-D and 5-D
                experiences.
              </li>
            </ul>

            <h3 className="ylwColor text-md text-left mb-4">Visitor Value</h3>
            <ul className="list-disc list-outside leading-tight space-y-2 ps-5 mb-6 text-white text-md">
              <li>
                Visitors experience peace, beauty, and safety in sacred
                journeys.
              </li>

              <li>
                Pilgrims enjoy modern comforts that elevate devotion, not
                distract from it.
              </li>
              <li>
                Travelers encounter heritage wrapped in world-class hospitality.
              </li>
              <li>
                In short we take the stress out of sacred travel and replace it
                with serenity.
              </li>
            </ul>

            <h3 className="ylwColor text-md text-left mb-4">Why Invest?</h3>
            <ul className="list-disc list-outside leading-tight space-y-2 ps-5 mb-6 text-white text-md">
              <li>
                Predictable Recurring Revenue: Long-term site management
                contracts with governments, foundations, and ministries.
              </li>

              <li>
                remium Upsell Opportunities: Guided experiences, comfort
                packages, cultural exhibitions, VIP access
              </li>
            </ul>
            <h3 className="ylwColor text-md text-left mb-4">
              Humble Goal with Profound Impact:
            </h3>
            <p className="text-white leading-relaxed mb-6  mb-[250px]">
              Through imaginative planning and improved services, we aim to
              increase per-visitor spending by at least USD 100 — a modest
              figure that, at scale of tens of millions of pilgrims, represents
              billions in sustainable revenue uplift.
            </p>

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
                    onClick={() =>
                      navigate("/divisions/restoration-development")
                    }
                    className="hover:text-white cursor-pointer text-sm"
                  >
                    Restoration & Development
                  </button>
                </div>
                <div className="border rounded-md px-4 pt-15 pb-10 relative mb-[190px] sm:mb-[40] md:mb-[90] lg:mb-[0]">
                  <img
                    src={`${
                      import.meta.env.BASE_URL
                    }images/divisions/tourism-Infra.webp`}
                    alt="Tourism Infrastructure"
                    className="w-full h-70 sm:h-50 object-contain absolute top-[-80px] md:top-[-40px] left-1/2 p-4 -translate-x-1/2 -translate-y-1/2"
                  />
                  <button
                    onClick={() =>
                      navigate("/divisions/tourism-infrastructure")
                    }
                    className="hover:text-white cursor-pointer text-sm"
                  >
                    Tourism & Infrastructure
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
                    onClick={() =>
                      (navigate("/divisions/ai-technology"))
                    }
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
                    onClick={() =>
                      (navigate("/divisions/immersive-films"))
                    }
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
                    onClick={() =>
                      (navigate("/divisions/branding-merchandise"))
                    }
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

export default SiteManagement;

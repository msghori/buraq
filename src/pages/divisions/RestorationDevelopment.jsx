import React from "react";
import Navbar from "../../component/Navbar";
import Footer from "../../component/Footer";
import ScrollToTop from "../../component/ScrollToTop";

const RestorationDevelopment = () => {
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
              }images/divisions/restoration-dev-banner.webp')`,
            }}
          >
            <div className="text-center relative">
              <p className="max-w-6xl max-auto text-white text-2xl md:text-4xl px-2 md:px-0">
                We build not just walls and domes, but sanctuaries of the soul -
                where faith, history, and future meet.
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
              The Restoration & Development
            </h1>
            <h2 className="ylwColor text-xl md:text-2xl text-left mb-4">
              Reviving stones, renewing souls.
            </h2>
            <h3 className="ylwColor text-md text-left mb-4">
              Scope & Core Focus
            </h3>
            <ul className="list-disc list-outside leading-tight space-y-2 ps-5 mb-6 text-white text-md">
              <li>
                Sacred & Historic Restoration: Mosques, forts, heritage trails,
                battle trails, historic homes and Arab heritage landmarks
                revived with full respect to their sanctity.
              </li>
              <li>
                Adaptive Re-Use: Thoughtful transformation into living
                sanctuaries of prayer, reflection, education, and cultural
                engagement - never compromising on holiness.
              </li>
              <li>
                Authenticity & Craftsmanship: Local artisans and master
                calligraphers employed; traditional Arab materials and
                centuries-old techniques revived for modern value.
              </li>
            </ul>
            <h3 className="ylwColor text-md text-left mb-4">Our Strategy</h3>
            <ul className="list-disc list-outside leading-tight space-y-2 ps-5 mb-6 text-white text-md">
              <li>
                Sanctity First: Projects begin with religious scholars &
                cultural custodians ensuring spiritual correctness.
              </li>
              <li>
                Sustainable Practices: Environmentally conscious methods -
                renewable stone, solar lighting, water recycling, and
                heritage-craft revival.
              </li>
              <li>
                Community Jobs & Pride: Training artisans, creating custodial
                jobs, empowering guides, and igniting local pride.
              </li>
            </ul>
            <h3 className="ylwColor text-md text-left mb-4">Visitor Value</h3>
            <ul className="list-disc list-outside leading-tight space-y-2 ps-5 mb-6 text-white text-md">
              <li>To enter a restored site is to enter living history.</li>
              <li>
                Not just a monument - but a sanctuary of faith, poetry, memory,
                and soul.
              </li>
              <li>
                Visitors carry home reverence and belonging, forever tied to
                Arabia’s sacred heart.
              </li>
            </ul>

            <h3 className="ylwColor text-md text-left mb-4">Why Invest?</h3>
            <ul className="list-disc list-outside leading-tight space-y-2 ps-5 mb-6 text-white text-md">
              <li>
                Ever-Green Market: Faith-driven tourism in Saudi Arabia and
                across the Arab world draws tens of millions annually - ensuring
                perpetual demand.
              </li>
              <li>
                Revenue Through Restoration: Restored sites are not static
                monuments but living centers generating footfall, donations,
                cultural events, and heritage retail.
              </li>
              <li>
                Brand Leverage: Each restored landmark becomes an ambassador of
                Arabia’s spiritual soul - enhancing national image and investor
                credibility.
              </li>
            </ul>

            <h3 className="ylwColor text-md text-left mb-4">
              Religious & Arab Heritage
            </h3>
            <ul className="list-disc list-outside leading-tight space-y-2 ps-5 mb-6 text-white text-md mb-[250px]">
              <li>
                Custodianship of Sanctity: Reviving Prophet-era mosques and Arab
                heritage ensures a spiritual trust passed down through
                centuries. Cultural Continuity: By restoring the Arab world’s
                tangible and intangible heritage, we guard not just buildings
                but the soul of a civilization.
              </li>
              <li>
                Global Prestige: Arabia becomes a beacon of heritage leadership
                - blending sanctity with modern hospitality, attracting
                pilgrims, scholars, and tourists alike.
              </li>
            </ul>

            {/* Other Divisions */}
            <div className="mt-16">
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 text-center ylwColor font-notoSerif font-extrabold">
                <div className="border rounded-md px-4 pt-15 pb-10 relative mb-[190px] sm:mb-[40] md:mb-[90] lg:mb-[0]">
                  <img
                    src={`${
                      import.meta.env.BASE_URL
                    }images/divisions/site-mana.png`}
                    alt="Site Management"
                    className="w-full h-70 sm:h-50 object-contain absolute top-[-80px] md:top-[-40px] left-1/2 p-4 -translate-x-1/2 -translate-y-1/2"
                  />
                  <button
                    onClick={() =>
                      (window.location.href = "/divisions/site-management")
                    }
                    className="hover:text-white cursor-pointer text-sm"
                  >
                    Site Management & Enhancement
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
                      (window.location.href =
                        "/divisions/tourism-infrastructure")
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
                      (window.location.href = "/divisions/ai-technology")
                    }
                    className="hover:text-white cursor-pointer text-sm"
                  >
                    AI & Immersive Technology
                  </button>
                </div>
                <div className="border rounded-md px-4 pt-15 pb-10 relative mb-[0px] sm:mb-[40] md:mb-[90] lg:mb-[0]">
                  <img
                    src={`${
                      import.meta.env.BASE_URL
                    }images/divisions/film-av.webp`}
                    alt="Immersive Films"
                    className="w-full h-70 sm:h-50 object-contain absolute top-[-80px] md:top-[-40px] left-1/2 p-4 -translate-x-1/2 -translate-y-1/2"
                  />
                  <button
                    onClick={() =>
                      (window.location.href = "/divisions/immersive-films")
                    }
                    className="hover:text-white cursor-pointer text-sm"
                  >
                    Immersive Films & AV Kiosks
                  </button>
                </div>
                <div className="border rounded-md px-4 pt-15 pb-10 relative mb-[0px] sm:mb-[40] md:mb-[90] lg:mb-[0]">
                  <img
                    src={`${
                      import.meta.env.BASE_URL
                    }images/divisions/branding-merchandise.webp`}
                    alt="Branding Merchandise"
                    className="w-full h-70 sm:h-50 object-contain absolute top-[-80px] md:top-[-40px] left-1/2 p-4 -translate-x-1/2 -translate-y-1/2"
                  />
                  <button
                    onClick={() =>
                      (window.location.href = "/divisions/branding-merchandise")
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

export default RestorationDevelopment;

import React from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import ScrollToTop from "../../components/ScrollToTop";
const AITechnology = () => {
  const navigate = useNavigate();

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
              }images/divisions/ai-immers-banner.webp')`,
            }}
          >
            <div className="text-center relative">
              <p className="max-w-4xl max-auto text-white text-xl md:text-2xl  px-2 md:px-0">
                Digitizing sanctity, Arab identity, and Kingdom legacy Making
                history eternal, portable, and alive in every heart.
              </p>
              <div
                className="absolute top-[-30px] right-[-70px] hidden md:block"
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
            <h1 className="ylwColor text-2xl md:text-4xl font-bold font-notoSerif text-center mb-12">
              AI & Immersive Technology
            </h1>

            <h2 className="ylwColor text-xl md:text-2xl text-left mb-4">
              History in your hand, faith in your heart.
            </h2>
            <h3 className="ylwColor text-md text-left mb-4">Our Mission</h3>

            <p className="text-white text-sm leading-relaxed mb-6">
              We are bringing the sacred, the cultural, and the national into
              the digital age.
              <br />
              Buraq harnesses AI, AR, and VR to make the religious journeys,
              Arab heritage, and Kingdom history interactive, shareable, and
              unforgettable.
            </p>

            <h3 className="ylwColor text-md text-left mb-4">Core Focus</h3>
            <ul className="list-disc list-outside leading-tight space-y-2 ps-5 mb-6 text-white text-sm">
              <li>Religious Heritage</li>
              <li>
                AR Pilgrim Guides: Point your device at Uhud, Badr, or Khandaq,
                watch battles, sermons, and prophetic moments unfold.
              </li>
              <li>
                VR Sacred Museums: Walk through a 3D re-creation of Madinah’s
                old mosques, the Hijaz caravan routes, and Hajj journeys across
                centuries.
              </li>
              <li>Arab Cultural Identity</li>
              <li>
                Arab Folklore in AR: Experience Bedouin poetry, music, and oral
                traditions digitally revived.
              </li>
              <li>
                Craft & Calligraphy Archives: AI preserves ancient scripts,
                tribal designs, and crafts for global access.
              </li>
              <li>
                Arab Youth Engagement: Gamified heritage apps that make identity
                a source of pride.
              </li>
              <li>Kingdom & House of Saud History</li>
              <li>
                Immersive Diriyah: Step into 18th-century Diriyah and witness
                the birth of the Saudi state.
              </li>
              <li>
                House of Saud Legacy Journeys: Experience battles, unity
                struggles, and the evolution of the Kingdom — presented with
                dignity and pride.
              </li>
              <li>
                Vision 2030 Futurescapes: AR/VR integration of Saudi’s
                giga-projects linking past and future.
              </li>
            </ul>

            <h3 className="ylwColor text-md text-left mb-4">Customer Value</h3>
            <ul className="list-disc list-outside leading-tight space-y-2 ps-5 mb-6 text-white text-sm">
              <li>For Pilgrims: Sacred journeys deepened by living history.</li>
              <li>
                For Arab Youth & Travelers: A proud connection to identity and
                cultural memory.
              </li>
              <li>
                For the Kingdom: A platform that elevates the House of Saud’s
                role as custodians of the Two Holy Mosques and champions of Arab
                heritage.
              </li>
            </ul>
            <h3 className="ylwColor text-md text-left mb-4">Why Invest?</h3>
            <ul className="list-disc list-outside leading-tight space-y-2 ps-5 mb-6 text-white text-sm mb-[250px]">
              <li>
                Scalable & Borderless: From a shrine in Madinah to a VR headset
                in New York — heritage travels globally.
              </li>
              <li>
                Revenue Models: Paid pilgrim AR apps, VR exhibitions, premium
                cultural subscriptions, museum partnerships.
              </li>
              <li>
                Arab Cultural Diplomacy: Tech becomes the soft power tool of
                Saudi Arabia — positioning the Kingdom as global leader in faith
                + culture + innovation.
              </li>
              <li>
                Impact: Even a modest $10–15 digital spend per pilgrim creates
                hundreds of millions in annual recurring revenue; global
                streaming multiplies this impact.
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
                    onClick={() =>
                      navigateToPage("/divisions/restoration-development")
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
                    }images/divisions/tourism-Infra.webp`}
                    alt="Tourism Infrastructure"
                    className="w-full h-70 sm:h-50 object-contain absolute top-[-80px] md:top-[-40px] left-1/2 p-4 -translate-x-1/2 -translate-y-1/2"
                  />
                  <button
                    onClick={() =>
                      navigateToPage("/divisions/tourism-infrastructure")
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
                    onClick={() =>
                      navigateToPage("/divisions/branding-merchandise")
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

export default AITechnology;

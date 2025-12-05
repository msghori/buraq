import React from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import ScrollToTop from "../../components/ScrollToTop";
const ImmersiveFilms = () => {
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
              }images/divisions/film-av-banner.webp')`,
            }}
          >
            <div className="text-center relative">
              <p className="max-w-4xl max-auto text-white text-xl md:text-2xl px-2 md:px-0">
                Our films are prayers in motion, our kiosks are storytellers in
                steel, and our immersive shows turn history into living
                experience. With Bilal Lashari’s vision, Arabia’s story will not
                just be remembered it will be impossible to forget.
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
              The Immersive Films & AV Kiosks
            </h1>
            <h2 className="ylwColor text-xl md:text-2xl text-left mb-4">
              Stories that live beyond time.
            </h2>
            <h3 className="ylwColor text-md text-left mb-4">Our Mission</h3>
            <p className="text-white text-sm leading-relaxed mb-6">
              Heritage must not only be preserved — it must be told, seen, and
              felt.
              <br />
              Buraq transforms sacred journeys, Arab culture, and Kingdom legacy
              into cinematic and immersive storytelling that transcends
              language, geography, and generations.
            </p>
            <h3 className="ylwColor text-md text-left mb-4">Core Focus</h3>
            Heritage Documentaries & Global Streaming
            <ul className="list-disc list-outside leading-tight space-y-2 ps-5 mb-6 text-white text-sm">
              <li>
                Multilingual productions that carry the sanctity of Mecca,
                Medina, Hijaz, and Arabia’s heritage to audiences worldwide.
              </li>
              <li>
                Films that double as cultural diplomacy, positioning Saudi
                Arabia as a leader in faith and identity-driven tourism.
              </li>
            </ul>
            Cinematic Retelling of Sacred Journeys
            <ul className="list-disc list-outside leading-tight space-y-2 ps-5 mb-6 text-white text-sm">
              <li>
                Battles of Badr, Uhud, and Khandaq recreated with reverence and
                spectacle.
              </li>
              <li>
                Immersive films that make viewers witnesses rather than
                spectators.
              </li>
            </ul>
            Interactive AV Kiosks & Story Pods
            <ul className="list-disc list-outside leading-tight space-y-2 ps-5 mb-6 text-white text-sm">
              <li>Placed in heritage sites, airports, and museums.</li>
              <li>
                Allow pilgrims and travelers to explore stories in their own
                language, in bite-sized, compelling formats.
              </li>
            </ul>
            Immersive Storytelling Beyond Film
            <ul className="list-disc list-outside leading-tight space-y-2 ps-5 mb-6 text-white text-sm">
              <li>
                Projection mapping on historic walls, sound-and-light shows, VR
                domes, and AR exhibitions.
              </li>
              <li>
                Storytelling not only through screens, but through atmospheres
                and environments.
              </li>
            </ul>
            The Bilal Lashari Advantage
            <ul className="list-disc list-outside leading-tight space-y-2 ps-5 mb-6 text-white text-sm">
              <li>
                Bill Lashari brings cinematic genius, visual grandeur, and
                emotional impact to Buraq’s storytelling.
              </li>
              <li>
                His artistry ensures heritage films are not dry records - they
                are living legends retold with power and reverence.
              </li>

              <li>
                Globally recognized for narrative innovation, Lashari gives
                Buraq productions Hollywood-grade spectacle with Arab
                authenticity.
              </li>
              <li>
                With his name attached, Buraq films and kiosks become
                immediately marketable to festivals, streaming platforms, and
                global audiences.
              </li>
            </ul>
            <h3 className="ylwColor text-md text-left mb-4">Customer Value</h3>
            <ul className="list-disc list-outside leading-tight space-y-2 ps-5 mb-6 text-white text-sm">
              <li>
                For Pilgrims: A chance to take their journey home - heritage
                they can relive and share.
              </li>
              <li>
                For Arab Youth: Stories told in cinematic language that
                resonates with their generation.
              </li>
              <li>
                For the Kingdom: A cultural export that cements Saudi Arabia as
                the epicenter of Islamic and Arab storytelling.
              </li>
            </ul>
            <h3 className="ylwColor text-md text-left mb-4">Why Invest?</h3>
            <ul className="list-disc list-outside leading-tight space-y-2 ps-5 mb-6 text-white text-sm mb-[250px]">
              <li>
                Scalable Reach: One film, thousands of kiosks, millions of
                viewers globally.
              </li>
              <li>
                Revenue Streams: Streaming rights, on-site kiosks, immersive
                exhibitions, premium content.
              </li>
              <li>
                Soft Power: Film and media as Saudi Arabia’s cultural ambassador
                to the world.
              </li>
              <li>
                Impact at Scale: If even 20% of pilgrims spend USD 5–10 on
                immersive films or kiosk content, the result is hundreds of
                millions in revenue annually - while amplifying cultural
                prestige.
              </li>
            </ul>
            {/* Other Divisions */}
            <div className="mt-16">
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 text-center ylwColor font-notoSerif font-extrabold">
                <div className="border rounded-md px-4 pt-15 pb-10 relative mb-[190px] sm:mb-[40] md:mb-[90] lg:mb-0">
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

export default ImmersiveFilms;

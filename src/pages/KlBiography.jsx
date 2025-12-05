import React, { useState } from "react";
// import Header from "../component/Header";
import Footer from "../components/Footer";
// import Navbar from "../components/Navbar";
import Header from "../components/Header";
import ScrollToTop from "../components/ScrollToTop";
const KlBiography = () => {
  const [openTab, setOpenTab] = useState(0);

  return (
    <>
      <div className="min-h-screen bg-[#1e1e1e] text-white">
        <Header />
        <div className="pt-25">
          {/* Banner */}
          <div
            className="h-96 bg-cover bg-center flex items-center justify-center"
            style={{
              backgroundImage: `url('${
                import.meta.env.BASE_URL
              }images/work/work-banner.webp')`,
            }}
          >
            <div className="text-center">
              <div className="max-w-7xl mx-auto px-4 py-10">
                <h1 className="ylwColor text-4xl font-bold mb-0 font-notoSerif text-center">
                  The Architect of Revival
                </h1>
              </div>
              <p className="max-w-6xl max-auto text-white text-xl md:text-2xl px-2 md:px-0">
                Where sacred memory becomes immersive experience.
              </p>
            </div>
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-4 pt-10">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-0 md:gap-8 py-5 md:py-10">
            {/* lashari */}
            <div className="col-span-1 mb-4 md:mb-0">
              <img
                src={`${
                  import.meta.env.BASE_URL
                }images/biography/kamran-lashari-profile.webp`}
                alt="Kamran Lashari"
                className="w-full h-auto object-cover rounded-lg"
              />
            </div>
            <div className="col-span-3">
              <h1 className="text-2xl font-notoSerif mb-2">
                Architect of Modern Islamabad — Custodian of Lahore’s Cultural
                Soul
              </h1>
              <h2 className="ylwColor text-2xl font-bold mb-4">
                Kamran Lashari BIOGRAPHY
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-4">
                <div>Urban Development</div>
                <div>Heritage Conservation</div>
                <div>Cultural Diplomacy</div>
                <div>Sustainability Leadership</div>
              </div>
              <p className="text-white text-sm leading-relaxed">
                A highly respected and visionary civil servant with 40+ years of
                impactful leadership in Pakistan’s top government institutions.
                Widely recognized as the Architect of Modern Islamabad and the
                Custodian of Lahore’s Cultural Soul, Kamran Lashari has
                transformed cityscapes, preserved centuries-old heritage, and
                fostered cultural diplomacy at national and international
                levels. His unmatched expertise spans urban development,
                large-scale project execution, strategic policy design, and
                heritage-led tourism.
              </p>
              <div className="max-w-lg mx-auto text-sm text-center p-4 mt-4 rounded-lg bg-[#343434]">
                <p>
                  We do not want to turn the Walled City into a museum. We want
                  its people to live with dignity
                </p>
              </div>
            </div>
          </div>
          {/* collapse detail */}
          <div className="space-y-4 pb-10">
            <CollapsibleTab
              title="SIGNATURE ROLES & CONTRIBUTION"
              isOpen={openTab === 0}
              onToggle={() => setOpenTab(openTab === 0 ? -1 : 0)}
            >
              <div className="grid grid-cols-1 md:grid-cols-5">
                <div className="col-span-4">
                  <div className="grid grid-cols-1 md:grid-cols-3 font-notoSerif mb-2">
                    <span className="ylwColor mb-2">Director General</span>
                    <span>Walled City of Lahore Authority</span>
                    <span className="text-[12px] opacity-80 font-poppins">
                      Apr 2012 – May 2025
                    </span>
                  </div>
                  <div className="text-white text-sm leading-relaxed mb-8">
                    Spearheaded comprehensive conservation of Lahore’s
                    400-year-old Walled City.
                    <br /> Directed landmark restorations: Shahi Hammam (UNESCO
                    Award of Merit, 2016), Royal Trail, Royal Kitchens, Picture
                    Wall, and Hazoori Bagh.
                    <br /> Launched night tourism & illumination at historic
                    sites, boosting cultural tourism.
                    <br />
                    Hosted Lahore Biennale 03, welcoming over 3 million visitors
                    — blending art, heritage, and community revival.
                    <br /> Fostered international cultural diplomacy — organized
                    exclusive heritage tours for foreign dignitaries.
                    <br />
                    <h2 className="font-bold mt-4"> Guided mega-projects:</h2>
                    Old Fortified Wall Reconstruction: PKR 1.88 billion
                    <br /> Spice Market Infrastructure Revamp: PKR 1.005 billion
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 font-notoSerif">
                    <span className="ylwColor mb-2">Federal Secretary</span>
                    <span>Ministry of Petroleum</span>
                    <span className="text-[12px] opacity-80 font-poppins">
                      Islamabad, 2010
                    </span>
                  </div>
                  <p className="text-white text-sm leading-relaxed mb-6 mt-1">
                    Provided strategic leadership and high-level policy
                    direction for Pakistan’s vital petroleum sector.
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-3 font-notoSerif">
                    <span className="ylwColor mb-2">Chief Commissioner</span>
                    <span>Islamabad Capital Territory (ICT)</span>
                    <span className="text-[12px] opacity-80 font-poppins">
                      Islamabad, 2009
                    </span>
                  </div>
                  <p className="text-white text-sm leading-relaxed mb-6  mt-1">
                    Oversaw the administration and governance of the capital
                    city, ensuring efficient public service delivery.
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-3 font-notoSerif">
                    <span className="ylwColor mb-2">Federal Secretary</span>
                    <span>Ministry of Environment</span>
                    <span className="text-[12px] opacity-80 font-poppins">
                      Islamabad, 1 year
                    </span>
                  </div>
                  <p className="text-white text-sm leading-relaxed mb-6  mt-1">
                    Guided national-level environmental policy and
                    sustainability programs.
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-3 font-notoSerif">
                    <span className="ylwColor mb-2">Federal Secretary</span>
                    <span>Ministry of Housing & Works</span>
                    <span className="text-[12px] opacity-80 font-poppins">
                      Islamabad, 2 years
                    </span>
                  </div>
                  <p className="text-white text-sm leading-relaxed mb-6  mt-1">
                    Directed national housing schemes and key urban
                    infrastructure developments in Islamabad.
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-3 font-notoSerif">
                    <span className="ylwColor mb-2">Chairman</span>
                    <span>Capital Development Authority (CDA)</span>
                    <span className="text-[12px] opacity-80 font-poppins">
                      Nov 2003 – Oct 2008
                    </span>
                  </div>
                  <p className="text-white text-sm leading-relaxed mb-6  mt-1">
                    Directed national housing schemes and key urban
                    infrastructure developments in Islamabad.
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-3 font-notoSerif">
                    <span className="ylwColor mb-2">Director General</span>
                    <span>Parks & Horticulture Authority (PHA)</span>
                    <span className="text-[12px] opacity-80 font-poppins">
                      Lahore, 1998 – 2003
                    </span>
                  </div>
                  <p className="text-white text-sm leading-relaxed mb-6  mt-1">
                    Created the iconic Gawalmandi Food Street (2002), one of
                    Pakistan’s most innovative cultural urban projects.
                    <br />
                    Led major public festivals: Freedom Festival (1994), Canal
                    Mela, Jashan-e-Baharan.
                    <br />
                    Oversaw beautification and illumination of Mall Road and
                    public cricket grounds.
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-3 font-notoSerif">
                    <span className="ylwColor mb-2">Deputy Commissioner</span>
                    <span>Lahore</span>
                    <span className="text-[12px] opacity-80 font-poppins">
                      Twice, 1993 – 1996
                    </span>
                  </div>
                  <p className="text-white text-sm leading-relaxed mb-6  mt-1">
                    Managed district administration, public services, and law
                    and order.
                    <br />
                    Orchestrated All Pakistan Young Performers Festival (1994),
                    engaging 4,000 students from 64 districts.
                    <br />
                    Led Basant festival celebrations and cultural events at
                    Shahi Hammam and Girls School.
                  </p>
                </div>
                <div className="col-span-1">
                  <div className="grid grid-cols-1">
                    <img
                      src={`${
                        import.meta.env.BASE_URL
                      }images/biography/kamran-digital-1.webp`}
                      alt="Kamran Lashari"
                      className="w-full h-auto object-cover rounded-lg mb-6"
                    />
                    <img
                      src={`${
                        import.meta.env.BASE_URL
                      }images/biography/kamran-digital-2.webp`}
                      alt="Kamran Lashari"
                      className="w-full h-auto object-cover rounded-lg mb-6"
                    />
                    <img
                      src={`${
                        import.meta.env.BASE_URL
                      }images/biography/kamran-digital-3.webp`}
                      alt="Kamran Lashari"
                      className="w-full h-auto object-cover rounded-lg"
                    />
                  </div>
                </div>
              </div>
            </CollapsibleTab>

            <CollapsibleTab
              title="MAJOR PARTNERSHIPS & DIPLOMACY"
              isOpen={openTab === 1}
              onToggle={() => setOpenTab(openTab === 1 ? -1 : 1)}
            >
              <div className="grid grid-cols-1 md:grid-cols-3">
                <div>
                  <span className="font-notoSerif">Aga Khan Trust</span>
                  <p className="text-white text-sm leading-relaxed pt-2 mb-2">
                    Partnered with Aga Khan Trust for Culture, US Embassy,
                    Evacuee Trust Property Board, and the World Bank for
                    heritage conservation and urban regeneration.
                  </p>
                </div>
                <div>
                  <span className="font-notoSerif">Cross-sector alliances</span>
                  <p className="text-white text-sm leading-relaxed pt-2 mb-2">
                    Pioneered cross-sector alliances for the Bhatti Gate
                    Rehabilitation Project — restoring 538 heritage buildings
                    under the Punjab Tourism Economic Growth Program.{" "}
                  </p>
                </div>
                <div>
                  <span className="font-notoSerif">International Agencies</span>
                  <p className="text-white text-sm leading-relaxed pt-2 mb-2">
                    Collaborated with international agencies to conserve the
                    Naag Mandir inside Lahore Fort — highlighting interfaith
                    cultural preservation.{" "}
                  </p>
                </div>
              </div>
            </CollapsibleTab>

            <CollapsibleTab
              title="AWARDS & RECOGNITION"
              isOpen={openTab === 2}
              onToggle={() => setOpenTab(openTab === 2 ? -1 : 2)}
            >
              <h1 className="font-notoSerif mb-3">Honors & Achievements</h1>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div>
                  <img
                    src={`${
                      import.meta.env.BASE_URL
                    }images/biography/award-1.webp`}
                    alt="Award"
                    className="w-full h-auto object-cover mb-2"
                  />
                  <h2 className="text-sm mb-2">
                    <span className="text-sm float-right">2025</span>
                    Knight of the Order of Arts and Letters (France)
                  </h2>
                  <p className="text-[12px]">
                    Awarded by French Ministry of Culture
                  </p>
                </div>
                <div>
                  <img
                    src={`${
                      import.meta.env.BASE_URL
                    }images/biography/award-2.webp`}
                    alt="Award"
                    className="w-full h-auto object-cover mb-2"
                  />
                  <span className="text-sm float-right">2016</span>
                  <h2 className="text-sm mb-2">UNESCO Award of Merit </h2>
                  <p className="text-[12px]">
                    For exemplary restoration of the Shahi Hammam, Lahore.
                  </p>
                </div>
                <div>
                  <img
                    src={`${
                      import.meta.env.BASE_URL
                    }images/biography/award-3.webp`}
                    alt="Award"
                    className="w-full h-auto object-cover mb-2"
                  />
                  <h2 className="text-sm mb-2">
                    75 Development Leadership Award
                    <span className="text-sm float-right">2023</span>
                  </h2>
                  <p className="text-[12px]">
                    From the Ministry of Planning, Development & Special
                    Initiatives, for national socio-economic progress.
                  </p>
                </div>
                <div>
                  <img
                    src={`${
                      import.meta.env.BASE_URL
                    }images/biography/award-4.webp`}
                    alt="Award"
                    className="w-full h-auto object-cover mb-2"
                  />
                  <h2 className="text-sm mb-2">
                    Tamgha-e-Imtiaz
                    <span className="text-sm float-right">2020</span>
                  </h2>
                  <p className="text-[12px] inline">
                    Civil Award by the President of Pakistan for outstanding
                    public service.
                  </p>
                </div>
                <div>
                  <img
                    src={`${
                      import.meta.env.BASE_URL
                    }images/biography/award-5.webp`}
                    alt="Award"
                    className="w-full h-auto object-cover mb-2"
                  />
                  <h2 className="text-sm mb-2">
                    Commendation Certificate – Quaid-i-Azam Day Ceremony
                  </h2>
                  <p className="text-[12px]">
                    For outstanding performance in organizing a national
                    celebration.
                  </p>
                </div>
                <div>
                  <img
                    src={`${
                      import.meta.env.BASE_URL
                    }images/biography/award-6.webp`}
                    alt="Award"
                    className="w-full h-auto object-cover mb-2"
                  />
                  <h2 className="text-sm mb-2">
                    Most Creative Project
                    <span className="text-sm float-right">2002</span>
                  </h2>
                  <p className="text-[12px] inline">
                    Recognized for the creation of Gawalmandi Food Street as a
                    culturally transformative initiative.
                  </p>
                </div>
              </div>
            </CollapsibleTab>

            <CollapsibleTab
              title="MEDIA & FILM CONTRIBUTIONS"
              isOpen={openTab === 3}
              onToggle={() => setOpenTab(openTab === 3 ? -1 : 3)}
            >
              <div className="grid grid-cols-1 md:grid-cols-5">
                <div className="col-span-4">
                  <div className="grid grid-cols-1 md:grid-cols-3 font-notoSerif mb-2">
                    <span>Voice-over Narration</span>
                    <span>The Legend of Maula Jatt</span>
                    <span className="text-sm opacity-80">2022</span>
                  </div>
                  <p className="text-white text-sm leading-relaxed mb-8">
                    Served as the narrator for the critically acclaimed and
                    commercially successful film The Legend of Maula Jatt,
                    directed by Bilal Lashari.
                    <br /> Provided the opening and closing voice-over, setting
                    the tone and context for Pakistan’s highest-grossing film to
                    date.
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-3 font-notoSerif mb-2">
                    <span>On-screen Appearance</span>
                    <span>Waar</span>
                    <span className="text-sm opacity-80">2013</span>
                  </div>
                  <p className="text-white text-sm leading-relaxed mb-8">
                    Served as the narrator for the critically acclaimed and
                    commercially successful film The Legend of Maula Jatt,
                    directed by Bilal Lashari. <br /> Provided the opening and
                    closing voice-over, setting the tone and context for
                    Pakistan’s highest-grossing film to date.
                  </p>
                </div>
                <div className="col-span-1">
                  <div className="grid grid-cols-1"></div>
                </div>
              </div>
            </CollapsibleTab>

            <CollapsibleTab
              title="CONFERENCES & LEADERSHIP"
              isOpen={openTab === 4}
              onToggle={() => setOpenTab(openTab === 4 ? -1 : 4)}
            >
              <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                <div className="col-span-2">
                  <div className="grid grid-cols-1 font-notoSerif mb-2">
                    <span>
                      International Conference on Heritage & Cultural
                      Conservation
                    </span>
                  </div>
                  <p className="text-white text-sm leading-relaxed mb-6">
                    Date: May 18, 2024 Venue: University of Lahore <br />
                    Engaged with global experts to shape international
                    strategies for preserving tangible and intangible cultural
                    heritage.
                  </p>
                  <ul>
                    <li className="mb-2">
                      <span className="font-notoSerif">
                        President, Old Ravians Union
                      </span>{" "}
                      <span className="text-sm">
                        – GC University Lahore (2006–2017)
                      </span>
                    </li>
                    <li className="mb-2">
                      <span className="font-notoSerif">
                        President, Pakistan Swimming Federation
                      </span>{" "}
                      <span className="text-sm">(2004–2012)</span>
                    </li>
                    <li className="mb-2">
                      <span className="font-notoSerif">
                        Chairman, Lahore Gymkhana Club
                      </span>{" "}
                      <span className="text-sm">(2017–2020)</span>
                    </li>
                    <li className="mb-2">
                      <span className="font-notoSerif">
                        Vice President, Pakistan Olympics Association
                      </span>{" "}
                      <span className="text-sm">(entered OCA in 2015)</span>
                    </li>
                    <li className="mb-2">
                      <span className="font-notoSerif">
                        Chairman, Lahore Arts Council
                      </span>{" "}
                      <span className="text-sm">
                        – Alhamra (2017; resigned March 31, 2017)
                      </span>
                    </li>
                  </ul>
                </div>
                <div className="col-span-2">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <img
                      src={`${
                        import.meta.env.BASE_URL
                      }images/biography/conference-1.webp`}
                      alt="Kamran Lashari"
                      className="w-full h-auto object-cover rounded-lg mb-6"
                    />
                    <img
                      src={`${
                        import.meta.env.BASE_URL
                      }images/biography/conference-2.webp`}
                      alt="Kamran Lashari"
                      className="w-full h-auto object-cover rounded-lg mb-6"
                    />
                  </div>
                </div>
              </div>
            </CollapsibleTab>

            <CollapsibleTab
              title="Education"
              isOpen={openTab === 5}
              onToggle={() => setOpenTab(openTab === 5 ? -1 : 5)}
            >
              <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-20">
                <div className="border rounded-lg p-4 text-left border-[#f39412]">
                  <h1 className="font-notoSerif">
                    M.Sc. Public Administration
                  </h1>
                  <p>Virginia Commonwealth University</p>
                  <p>USA (1989)</p>
                </div>

                <div className="border rounded-lg p-4 text-left border-[#f39412]">
                  <h1 className="font-notoSerif">LL.B.</h1>
                  <p>University of the Punjab</p>
                  <p>Pakistan</p>
                </div>
              </div>
            </CollapsibleTab>
          </div>
          {/* collapse detail */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 py-10">
            {/* lashari */}
            <div className="col-span-2  flex items-center">
              <h1 className="ylwColor text-xl md:text-2xl font-notoSerif mb-2">
                “We do not want to turn the Walled City into a museum. We want
                its people to live with dignity.”{" "}
                <span className="font-poppins text-sm"> — Kamran Lashari</span>
              </h1>
            </div>
            <div className="col-span-2">
              <img
                src={`${
                  import.meta.env.BASE_URL
                }images/biography/kamran-digital-4.webp`}
                alt="biography"
                className="w-full h-auto object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      </div>
      <Footer />
      <ScrollToTop />
    </>
  );
};

const CollapsibleTab = ({ title, children, isOpen = false, onToggle }) => {
  return (
    <div className="border border-gray-600 rounded-lg">
      <button
        onClick={onToggle}
        className="w-full flex justify-between items-center p-4 text-left hover:bg-gray-800 transition-colors cursor-pointer"
      >
        <h3 className="ylwColor text-md md:text-xl font-semibold">{title}</h3>
        <svg
          className={`w-8 h-8 ylwColor transition-transform ${
            isOpen ? "rotate-90" : ""
          }`}
          fill="transparent"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 5l7 7-7 7"
          />
        </svg>
      </button>
      {isOpen && <div className="p-4 border-t border-gray-600">{children}</div>}
    </div>
  );
};

export default KlBiography;

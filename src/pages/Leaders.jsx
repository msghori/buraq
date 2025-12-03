import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../component/Navbar";
import Footer from "../component/Footer";
import ScrollToTop from "../component/ScrollToTop";

const Leaders = () => {
  return (
    <div className="min-h-screen bg-[#1e1e1e] text-white">
      <Navbar />
      <div className="pt-30">
        <div className="max-w-7xl mx-auto px-4 py-10">
          <h1 className="ylwColor text-4xl font-bold mb-8 font-notoSerif text-center">
            Custodians & Curators
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            {/* lashari */}
            <div className="md:col-span-3">
              <h2 className="ylwColor text-2xl font-bold mb-4">
                Kamran Lashari
              </h2>
              <p className="text-white leading-relaxed">
                Lashari served as the Petroleum Secretary of Pakistan and Chief
                Secretary Sindh. Other assignments he held include Federal
                Secretary for Environment and chairman of the Capital
                Development Authority (CDA). He was brought in CDA by then
                Interior Minister Faisal Saleh Hayat. He is widely regarded as
                the most successful chairman in CDA's history. He served as
                chairman CDA for five years and became an aide of President
                Pervez Musharraf. In the initial stages of his career, he served
                as assistant commissioner of Umerkot and deputy commissioner of
                Karachi and Sukkur. He also served in Punjab as deputy
                commissioner in many districts.
              </p>
              <Link
                to="/worksDetail"
                className="text-gray-400 pe-8 hover:underline hover:text-white"
              >
                Explore works
              </Link>
              <Link
                to="/klBiography"
                className="text-gray-400 pe-8 hover:underline hover:text-white"
              >
                Biography
              </Link>
              <a href=""></a>
            </div>
            <div className="md:col-span-1">
              <img
                src={`${
                  import.meta.env.BASE_URL
                }images/leaders/kamran-lashari.webp`}
                alt="Kamran Lashari"
                className="w-full h-auto object-cover rounded-lg"
              />
            </div>
            {/* lashari */}
            {/* sabahat */}

            <div className="md:col-span-3">
              <h2 className="ylwColor text-2xl font-bold mb-4">
                Sabahat Rafiq
              </h2>
              <p className="text-white leading-relaxed">
                An architect and conservationist who founded Luna Heritage with
                a vision to revive endangered cultural spaces in Pakistan. Her
                work reflects a deep passion for history, architecture, and
                social impact. <br />
                Sabahat has studied regional restoration techniques and applied
                them in projects that blend modern needs with traditional
                aesthetics. Her approach combines academic rigor with practical
                community engagement.
              </p>
            </div>
            <div className="md:col-span-1">
              <img
                src={`${import.meta.env.BASE_URL}images/leaders/sabahat.webp`}
                alt="sabahat"
                className="w-full h-auto object-cover rounded-lg"
              />
            </div>
            {/* sabahat */}

            {/* Naveed Sherwani */}
            <div className="md:col-span-1">
              <img
                src={`${import.meta.env.BASE_URL}images/leaders/naveed.webp`}
                alt="naveed"
                className="w-full h-auto object-cover rounded-lg"
              />
            </div>
            <div className="md:col-span-3">
              <h2 className="ylwColor text-2xl font-bold mb-4">
                Naveed Sherwani
              </h2>
              <p className="text-white leading-relaxed">
                Dr. Naveed Sherwani is a renowned semiconductor industry veteran
                with over 30 years of entrepreneurial, engineering, and
                leadership experience. He is widely recognized as a pioneer in
                ASIC and microprocessor design automation and a key driver
                behind the global adoption of RISC-V.
                <br /> Throughout his career, Dr. Naveed has founded or
                co-founded more than eleven silicon companies and raised over
                $850 million across 15 funding rounds from leading venture
                capital firms. While serving as President, CEO, or Chairman, his
                companies were named the “Most Respected Private Semiconductor
                Company” five times by the Global Semiconductor Alliance (GSA).
              </p>
              <a href="">Explore works</a>
            </div>

            {/* Naveed Sherwani */}
            {/* Ahmed Osilan */}
            <div className="md:col-span-1">
              <img
                src={`${
                  import.meta.env.BASE_URL
                }images/leaders/ahmed-osilan.webp`}
                alt="ahmed-osilan"
                className="w-full h-auto object-cover rounded-lg"
              />
            </div>
            <div className="md:col-span-3">
              <h2 className="ylwColor text-2xl font-bold mb-4">Ahmed Osilan</h2>
              <p className="text-white leading-relaxed">
                An accomplished Executive Board Member and Managing Director at
                Tanmiah Food Company, his visionary leadership, strategic
                thinking, and extensive industry knowledge have been
                instrumental in the Company's success.
                <br /> Tanmiah, a listed Company on the Saudi Stock Exchange is
                a prominent player in the food industry, specialising in the
                production and distribution of poultry and meat products. <br />
                As the Managing Director and official spokesperson, Ahmed Osilan
                is responsible for providing strategic leadership, overseeing
                operations, and driving the overall performance of Tanmiah.
                Under his guidance, the Company has achieved significant
                milestones and established itself as a leading brand in the
                market.
              </p>
            </div>

            {/* Ahmed Osilan */}

            {/* Eyad Bakhsh */}
            <div className="md:col-span-3">
              <h2 className="ylwColor text-2xl font-bold mb-4">Eyad Bakhsh</h2>
              <p className="text-white leading-relaxed">
                Private Equity investment professional focused on identifying
                high-potential businesses and accelerating their growth through
                strategic and operational enhancements. Expert in financial
                modeling, competitive analysis, and cross-functional
                collaboration with management teams. Passionate about building
                sustainable value and supporting companies through
                transformational change. Leading the fund’s strategic direction,
                capital deployment, and portfolio performance. Known for
                building trusted relationships with investors, aligning
                management teams, and unlocking operational and commercial
                growth across diverse sectors.
              </p>
            </div>
            <div className="md:col-span-1">
              <img
                src={`${
                  import.meta.env.BASE_URL
                }images/leaders/eyad-bakhsh.webp`}
                alt="eyad-bakhsh"
                className="w-full h-auto object-cover rounded-lg"
              />
            </div>
            {/* Eyad Bakhsh */}
            {/* Bilal Lashari */}

            <div className="md:col-span-3">
              <h2 className="ylwColor text-2xl font-bold mb-4">
                Bilal Lashari
              </h2>
              <p className="text-white leading-relaxed">
                Bilal Lashari is a Pakistani filmmaker, cinematographer,
                screenwriter and occasional actor. He made his directorial debut
                with Waar, which at the time of release became Pakistan's
                highest-grossing film. His next feature The Legend of Maula Jatt
                was a remake of the 1979 film Maula Jatt.
              </p>
              <a href="">Explore works</a>
            </div>
            <div className="md:col-span-1">
              <img
                src={`${
                  import.meta.env.BASE_URL
                }images/leaders/bilal-lashari.webp`}
                alt="bilal-lashari"
                className="w-full h-auto object-cover rounded-lg"
              />
            </div>
            {/* Bilal Lashari */}
          </div>
          {/* partner */}
          <div className="grid grid-cols-1">
            <h1 className="ylwColor text-4xl font-bold mb-4 font-notoSerif text-center">
              Trusted Partnerships
            </h1>
            <p className="text-center mb-8">
              In collaboration with globally recognized partners who share our
              passion for heritage and innovation
            </p>
            <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-5 gap-4 items-center justify-center">
              <div className="flex justify-center bg-[#c8c8c8]">
                <img
                  src={`${
                    import.meta.env.BASE_URL
                  }images/partners/partner1.webp`}
                  alt="Partner 1"
                  className="h-22 w-auto object-contain"
                />
              </div>
              <div className="flex justify-center bg-white">
                <img
                  src={`${
                    import.meta.env.BASE_URL
                  }images/partners/partner2.webp`}
                  alt="Partner 2"
                  className="h-22 w-auto object-contain bg-white"
                />
              </div>
              <div className="flex justify-center bg-white">
                <img
                  src={`${
                    import.meta.env.BASE_URL
                  }images/partners/partner3.webp`}
                  alt="Partner 3"
                  className="h-22 w-auto object-contain"
                />
              </div>
              <div className="flex justify-center bg-white">
                <img
                  src={`${
                    import.meta.env.BASE_URL
                  }images/partners/partner4.webp`}
                  alt="Partner 4"
                  className="h-22 w-auto object-contain"
                />
              </div>
              <div className="flex justify-center bg-white">
                <img
                  src={`${
                    import.meta.env.BASE_URL
                  }images/partners/partner5.webp`}
                  alt="Partner 5"
                  className="h-22 w-auto object-contain"
                />
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

export default Leaders;

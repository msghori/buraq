import Footer from "../components/Footer";
import Header from "../components/Header";
import WorkCarousel from "../components/WorkCarousel";
import { useCleanURL } from "../hooks/useCleanURL";

const WorksDetail = () => {
  useCleanURL();
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
                  Walled City of Lahore
                </h1>
              </div>
              <p className="max-w-6xl max-auto text-white text-xl md:text-2xl px-2 md:px-0">
                Where sacred memory becomes immersive experience.
              </p>
            </div>
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-4 pt-10">
          <WorkCarousel />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default WorksDetail;

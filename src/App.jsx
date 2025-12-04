import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Leaders from "./pages/Leaders";
import ContactUs from "./pages/ContactUs";
import RestorationDevelopment from "./pages/divisions/RestorationDevelopment";
import SiteManagement from "./pages/divisions/SiteManagement";
import TourismInfrastructure from "./pages/divisions/TourismInfrastructure";
import AITechnology from "./pages/divisions/AITechnology";
import ImmersiveFilms from "./pages/divisions/ImmersiveFilms";
import BrandingMerchandise from "./pages/divisions/BrandingMerchandise";
import WorksDetail from "./pages/worksDetail";
import KlBiography from "./pages/KlBiography";
import { CleanRouter } from "./components/CleanRouter";

function App() {
  return (
    <CleanRouter>
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/leaders" element={<Leaders />} />
      <Route path="/contact" element={<ContactUs />} />
      <Route
        path="/divisions/restoration-development"
        element={<RestorationDevelopment />}
      />
      <Route path="/divisions/site-management" element={<SiteManagement />} />
      <Route
        path="/divisions/tourism-infrastructure"
        element={<TourismInfrastructure />}
      />
      <Route path="/divisions/ai-technology" element={<AITechnology />} />
      <Route path="/divisions/immersive-films" element={<ImmersiveFilms />} />
      <Route
        path="/divisions/branding-merchandise"
        element={<BrandingMerchandise />}
      />
      <Route path="/worksDetail" element={<WorksDetail />} />
      <Route path="/KlBiography" element={<KlBiography />} />
      </Routes>
    </CleanRouter>
  );
}

export default App;

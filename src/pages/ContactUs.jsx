import React from "react";
import Header from "../components/Header.jsx";
import Contact from "../components/Contact.jsx";
import Footer from "../components/Footer.jsx";
import ScrollToTop from "../components/ScrollToTop.jsx";
import { useCleanURL } from "../hooks/useCleanURL";
const ContactUs = () => {
  useCleanURL();
  return (
    <>
      <div className="mt-[130px]">
        <Header />
        <h1 className="ylwColor font-bold mb-4 font-notoSerif px-4 text-2xl md:text-4xl text-center pt-10">
          Preserving the Past Through Restoration
        </h1>
        <div className="py-10">
          <Contact />
        </div>
        <Footer />
        <ScrollToTop />
      </div>
    </>
  );
};

export default ContactUs;

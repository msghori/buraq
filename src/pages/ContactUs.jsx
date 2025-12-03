import React from "react";
import Header from "../component/Header.jsx";
import Contact from "../component/Contact.jsx";
import Footer from "../component/Footer.jsx";
import ScrollToTop from "../component/ScrollToTop.jsx";
const ContactUs = () => {
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

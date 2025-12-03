import React, { useEffect } from "react";
import Header from "../component/Header";
import Carousel from "../component/Carousel";
import Vision from "../component/Vision";
import Divisions from "../component/Divisions";
import Contact from "../component/Contact";
import Footer from "../component/Footer";
import ScrollToTop from "../component/ScrollToTop";

const Home = () => {
  useEffect(() => {
    const hash = window.location.hash;
    if (hash) {
      setTimeout(() => {
        const element = document.getElementById(hash.substring(1));
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    }
  }, []);

  return (
    <>
      <Header />
      <Carousel />
      <Vision />
      <Divisions />
      <Contact />
      <Footer />
      <ScrollToTop />
    </>
  );
};

export default Home;

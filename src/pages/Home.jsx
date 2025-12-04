import React from "react";
import Header from "../component/Header";
import Carousel from "../component/Carousel";
import Vision from "../component/Vision";
import Divisions from "../component/Divisions";
import Contact from "../component/Contact";
import Footer from "../component/Footer";
import ScrollToTop from "../component/ScrollToTop";

const Home = () => {

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

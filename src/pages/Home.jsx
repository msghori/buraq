import React from "react";
import Header from "../components/Header";
import Carousel from "../components/Carousel";
import Vision from "../components/Vision";
import Divisions from "../components/Divisions";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import ScrollToTop from "../components/ScrollToTop";

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

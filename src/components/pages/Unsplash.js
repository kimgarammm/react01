import React from "react";
import Header from "../layout/Header";
import Contents from "../layout/Contents";
import Footer from "../layout/Footer";
import Title from "../layout/Title";
import Contact from "../layout/Contact";
import UnsplashCont from "../includes/UnsplashCont";

function Unsplash() {
  return (
    <>
      <Header />
      <Contents>
        <Title title={["Unsplash", "API"]} />
        <UnsplashCont />
        <Contact />
      </Contents>
      <Footer />
    </>
  );
}

export default Unsplash;

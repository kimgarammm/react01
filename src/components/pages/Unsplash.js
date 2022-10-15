import React from "react";
import Header from "../layout/Header";
import Contents from "../layout/Contents";
import Footer from "../layout/Footer";
import Title from "../layout/Title";
import Contact from "../layout/Contact";
import UnsplashCont from "../includes/UnsplashCont";
import UnsplashSearch from "../includes/UnsplashSearch";
import UnsplashSwiper from "../includes/UnsplashSwiper";
import SubTitle from "../layout/SubTitle";
import { useEffect, useState } from "react";

function Unsplash() {
  const [image, setImages] = useState([]);
  const [swiper, setSwiper] = useState([]);

  const search = (query) => {
    fetch(
      `https://api.unsplash.com/search/photos?query=${query}&client_id=n1I0Rq5j3_YeAaay6pOldHW_vybPRxo3m931a-lo6DQ&per_page=30`
    )
      .then((response) => response.json())
      .then((result) => setImages(result.results))
      .catch((error) => console.log("error", error));
  };

  useEffect(() => {
    fetch(
      "https://api.unsplash.com/search/photos?query=random?&client_id=n1I0Rq5j3_YeAaay6pOldHW_vybPRxo3m931a-lo6DQ&per_page=30"
    )
      .then((response) => response.json())
      .then((result) => setImages(result.results))
      .catch((error) => console.log("error", error));
    fetch(
      "https://api.unsplash.com/search/photos?query=cat?&client_id=n1I0Rq5j3_YeAaay6pOldHW_vybPRxo3m931a-lo6DQ&per_page=30"
    )
      .then((response) => response.json())
      .then((result) => setSwiper(result.results))
      .catch((error) => console.log("error", error));
  }, []);

  return (
    <>
      <Header />
      <Contents>
        <Title title={["Unsplash", "Api"]} />
        <SubTitle subtitle={["Cat", "Love"]} />
        <UnsplashSwiper swiper={swiper} />
        <UnsplashSearch onSearch={search} />
        <UnsplashCont image={image} />
        <Contact />
      </Contents>
      <Footer />
    </>
  );
}

export default Unsplash;

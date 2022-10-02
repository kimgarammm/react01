import React from "react";
import Header from "../layout/Header";
import Contents from "../layout/Contents";
import Footer from "../layout/Footer";
import Title from "../layout/Title";
import Contact from "../layout/Contact";
import UnsplashCont from "../includes/UnsplashCont";
import UnsplashSearch from "../includes/UnsplashSearch";
import { useState } from "react";
import { useEffect } from "react";

function Unsplash() {
  const [images, setImages] = useState([]);
  const search = (query) => {
    fetch(
      `https://api.unsplash.com/photos/${query}client_id=n1I0Rq5j3_YeAaay6pOldHW_vybPRxo3m931a-lo6DQ&count=30`
    )
      .then((response) => response.json())
      .then((result) => setImages(result.results));
  };
  useEffect(() => {
    fetch(
      "https://api.unsplash.com/photos/random?client_id=n1I0Rq5j3_YeAaay6pOldHW_vybPRxo3m931a-lo6DQ&count=30"
    )
      .then((response) => response.json())
      .then((result) => setImages(result.results))
      .catch((error) => console.log("error", error));
  }, []);
  return (
    <>
      <Header />
      <Contents>
        <Title title={["Unsplash", "Api"]} />
        <UnsplashSearch onSearch={search} />
        <UnsplashCont images={images} />

        <Contact />
      </Contents>
      <Footer />
    </>
  );
}
export default Unsplash;

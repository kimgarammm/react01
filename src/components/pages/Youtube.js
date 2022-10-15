import React from "react";
import Header from "../layout/Header";
import Contents from "../layout/Contents";
import Footer from "../layout/Footer";
import Title from "../layout/Title";
import Contact from "../layout/Contact";
import YoutubeCont from "../includes/YoutubeCont";
import Youtubesearch from "../includes/Youtubesearch";
import YoutubeSwiper from "../includes/YoutubeSwiper";
import SubTitle from "../layout/SubTitle";

import { useState, useEffect } from "react";

function Youtube() {
  const [youtubes, setYoutubes] = useState([]);
  const [swiper, setSwiper] = useState([]);

  const search = (query) => {
    fetch(
      `https://youtube.googleapis.com/youtube/v3/search?part=snippet&q=${query}&key=AIzaSyCiFhVoDTSh6qtaySYS0Ji5U7BgB3Cdf_s&maxResults=28&type=video`
    )
      .then((response) => response.json())
      .then((result) => setYoutubes(result.results));
  };

  useEffect(() => {
    fetch(
      `https://youtube.googleapis.com/youtube/v3/search?part=snippet&q=garam&key=AIzaSyCiFhVoDTSh6qtaySYS0Ji5U7BgB3Cdf_s&maxResults=28`
    )
      .then((response) => response.json())
      .then((result) => setYoutubes(result.items))
      // .then((result) => console.log(result))
      .catch((error) => console.log("error", error));
    fetch(
      `https://youtube.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&regionCode=KR&maxResults=25&key=AIzaSyCiFhVoDTSh6qtaySYS0Ji5U7BgB3Cdf_s`
    )
      .then((response) => response.json())
      .then((result) => setSwiper(result.items))
      // .then((result) => console.log(result))
      .catch((error) => console.log("error", error));
  }, []);
  return (
    <>
      <Header />
      <Contents>
       
        <Title title={["Youtube", "Api"]} /> 
        <SubTitle subtitle={["Most", "Popular"]} />
        <YoutubeSwiper swiper={swiper} />
        <Youtubesearch onSearch={search} />
        <YoutubeCont youtubes={youtubes} />
        <Contact />
      </Contents>
      <Footer />
    </>
  );
}

export default Youtube;

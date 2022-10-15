import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";

// Import Swiper styles
import "swiper/css";

export default function MovieSwiper({ swiper }) {
  if (swiper.length !== 0) {
    console.log({ swiper });
    return (
      <>
        <Swiper
          slidesPerView={3}
          spaceBetween={30}
          loop={true}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          modules={[Autoplay]}
          className="mySwiper"
        >
          <SwiperSlide>
            <img
              src={`https://image.tmdb.org/t/p/w342${swiper[0].poster_path}`}
              alt={swiper[0].title}
            />
            <span>{swiper[0].title}</span>
          </SwiperSlide>
          <SwiperSlide>
            <img
              src={`https://image.tmdb.org/t/p/w342${swiper[1].poster_path}`}
              alt={swiper[1].title}
            />
            <span>{swiper[1].title}</span>
          </SwiperSlide>
          <SwiperSlide>
            <img
              src={`https://image.tmdb.org/t/p/w342${swiper[2].poster_path}`}
              alt={swiper[2].title}
            />
            <span>{swiper[2].title}</span>
          </SwiperSlide>
          <SwiperSlide>
            <img
              src={`https://image.tmdb.org/t/p/w342${swiper[3].poster_path}`}
              alt={swiper[3].title}
            />
            <span>{swiper[3].title}</span>
          </SwiperSlide>
          <SwiperSlide>
            <img
              src={`https://image.tmdb.org/t/p/w342${swiper[4].poster_path}`}
              alt={swiper[4].title}
            />
            <span>{swiper[4].title}</span>
          </SwiperSlide>
          <SwiperSlide>
            <img
              src={`https://image.tmdb.org/t/p/w342${swiper[5].poster_path}`}
              alt={swiper[5].title}
            />
            <span>{swiper[5].title}</span>
          </SwiperSlide>
          <SwiperSlide>
            <img
              src={`https://image.tmdb.org/t/p/w342${swiper[6].poster_path}`}
              alt={swiper[6].title}
            />
            <span>{swiper[6].title}</span>
          </SwiperSlide>
          <SwiperSlide>
            <img
              src={`https://image.tmdb.org/t/p/w342${swiper[7].poster_path}`}
              alt={swiper[7].title}
            />
            <span>{swiper[7].title}</span>
          </SwiperSlide>
          <SwiperSlide>
            <img
              src={`https://image.tmdb.org/t/p/w342${swiper[8].poster_path}`}
              alt={swiper[8].title}
            />
            <span>{swiper[8].title}</span>
          </SwiperSlide>
        </Swiper>
      </>
    );
  }
}

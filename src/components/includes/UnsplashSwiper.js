import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

export default function UnsplashSwiper({ swiper }) {
  if (swiper.length !== 0) {
    console.log({ swiper });
    return (
      <div className="UnsplashSwiper_item">
        <>
          <Swiper
            slidesPerView={3}
            spaceBetween={30}
            loop={true}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            pagination={{ clickable: true }}
            modules={[Autoplay, Pagination]}
            className="mySwiper"
            Pagination={true}
          >
            <SwiperSlide>
              <a href={`https://unsplash.com/photos/${swiper[0].id}`}>
                <img
                  src={swiper[0].urls.regular}
                  alt={swiper[0].alt_description}
                />

                <span>{swiper[0].alt_description}</span>
              </a>
            </SwiperSlide>
            <SwiperSlide>
              <a href={`https://unsplash.com/photos/${swiper[1].id}`}>
                <img
                  src={swiper[1].urls.regular}
                  alt={swiper[1].alt_description}
                />

                <span>{swiper[1].alt_description}</span>
              </a>
            </SwiperSlide>
            <SwiperSlide>
              <a href={`https://unsplash.com/photos/${swiper[2].id}`}>
                <img
                  src={swiper[2].urls.regular}
                  alt={swiper[2].alt_description}
                />

                <span>{swiper[2].alt_description}</span>
              </a>
            </SwiperSlide>
            <SwiperSlide>
              <a href={`https://unsplash.com/photos/${swiper[3].id}`}>
                <img
                  src={swiper[3].urls.regular}
                  alt={swiper[3].alt_description}
                />

                <span>{swiper[3].alt_description}</span>
              </a>
            </SwiperSlide>
            <SwiperSlide>
              <a href={`https://unsplash.com/photos/${swiper[4].id}`}>
                <img
                  src={swiper[4].urls.regular}
                  alt={swiper[4].alt_description}
                />

                <span>{swiper[4].alt_description}</span>
              </a>
            </SwiperSlide>
            <SwiperSlide>
              <a href={`https://unsplash.com/photos/${swiper[5].id}`}>
                <img
                  src={swiper[5].urls.regular}
                  alt={swiper[5].alt_description}
                />

                <span>{swiper[5].alt_description}</span>
              </a>
            </SwiperSlide>
            <SwiperSlide>
              <a href={`https://unsplash.com/photos/${swiper[6].id}`}>
                <img
                  src={swiper[6].urls.regular}
                  alt={swiper[6].alt_description}
                />

                <span>{swiper[6].alt_description}</span>
              </a>
            </SwiperSlide>
            <SwiperSlide>
              <a href={`https://unsplash.com/photos/${swiper[7].id}`}>
                <img
                  src={swiper[7].urls.regular}
                  alt={swiper[7].alt_description}
                />

                <span>{swiper[7].alt_description}</span>
              </a>
            </SwiperSlide>
            <SwiperSlide>
              <a href={`https://unsplash.com/photos/${swiper[8].id}`}>
                <img
                  src={swiper[8].urls.regular}
                  alt={swiper[8].alt_description}
                />

                <span>{swiper[8].alt_description}</span>
              </a>
            </SwiperSlide>
          </Swiper>
        </>
      </div>
    );
  }
}

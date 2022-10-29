import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

export default function YoutubeSwiper({ swiper }) {
  if (swiper.length !== 0) {
    console.log({ swiper });
    return (
      <div className="youtubeswiper_item">
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
              <a href={`https://www.youtube.com/watch?v=${swiper[0].id}`}>
                <img
                  src={swiper[0].snippet.thumbnails.medium.url}
                  alt={swiper[0].snippet.title}
                />
                <p>{swiper[0].snippet.title}</p>
              </a>
            </SwiperSlide>
            <SwiperSlide>
              <a href={`https://www.youtube.com/watch?v=${swiper[1].id}`}>
                <img
                  src={swiper[1].snippet.thumbnails.medium.url}
                  alt={swiper[1].snippet.title}
                />
                <p>{swiper[1].snippet.title}</p>
              </a>
            </SwiperSlide>
            <SwiperSlide>
              <a href={`https://www.youtube.com/watch?v=${swiper[2].id}`}>
                <img
                  src={swiper[2].snippet.thumbnails.medium.url}
                  alt={swiper[2].snippet.title}
                />
                <p>{swiper[2].snippet.title}</p>
              </a>
            </SwiperSlide>
            <SwiperSlide>
              <a href={`https://www.youtube.com/watch?v=${swiper[3].id}`}>
                <img
                  src={swiper[3].snippet.thumbnails.medium.url}
                  alt={swiper[3].snippet.title}
                />
                <p>{swiper[3].snippet.title}</p>
              </a>
            </SwiperSlide>
            <SwiperSlide>
              <a href={`https://www.youtube.com/watch?v=${swiper[4].id}`}>
                <img
                  src={swiper[4].snippet.thumbnails.medium.url}
                  alt={swiper[4].snippet.title}
                />
                <p>{swiper[4].snippet.title}</p>
              </a>
            </SwiperSlide>
            <SwiperSlide>
              <a href={`https://www.youtube.com/watch?v=${swiper[5].id}`}>
                <img
                  src={swiper[5].snippet.thumbnails.medium.url}
                  alt={swiper[5].snippet.title}
                />
                <p>{swiper[5].snippet.title}</p>
              </a>
            </SwiperSlide>
            <SwiperSlide>
              <a href={`https://www.youtube.com/watch?v=${swiper[6].id}`}>
                <img
                  src={swiper[6].snippet.thumbnails.medium.url}
                  alt={swiper[6].snippet.title}
                />
                <p>{swiper[6].snippet.title}</p>
              </a>
            </SwiperSlide>
            <SwiperSlide>
              <a href={`https://www.youtube.com/watch?v=${swiper[7].id}`}>
                <img
                  src={swiper[7].snippet.thumbnails.medium.url}
                  alt={swiper[7].snippet.title}
                />
                <p>{swiper[7].snippet.title}</p>
              </a>
            </SwiperSlide>
            <SwiperSlide>
              <a href={`https://www.youtube.com/watch?v=${swiper[8].id}`}>
                <img
                  src={swiper[8].snippet.thumbnails.medium.url}
                  alt={swiper[8].snippet.title}
                />
                <p>{swiper[8].snippet.title}</p>
              </a>
            </SwiperSlide>
          </Swiper>
        </>
      </div>
    );
  }
}

"use client";
import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

function BottomSlider() {
  const arr = [1, 2, 3, 4, 5, 6];

  const swiperRef = useRef<any>(null);

  const onPrevClick = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slidePrev();
    }
  };

  const onNextClick = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slideNext();
    }
  };
  return (
    <>
      <div className="container-fluid pb-50">
        <Swiper
          ref={swiperRef}
          spaceBetween={10}
          slidesPerView={4}
          navigation={{
            prevEl: ".trending-btn-prev",
            nextEl: ".trending-btn-next",
          }}
          loop={true}
          effect={"coverflow"}
          coverflowEffect={{
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
          }}
          pagination={{ clickable: true }}
          autoplay={{ delay: 1000, disableOnInteraction: false }}
          className="instagram-wrapper"
        >
          {arr.map((data: any, index: number) => {
            return (
              <SwiperSlide key={index}>
                <div className="instagram-slider-two swiper">
                  <div className="swiper-wrapper">
                    <div className="swiper-slide">
                      <a
                        className="instagram-slide"
                        href="https://www.instagram.com"
                        target="_blank"
                      >
                        <img src="/img/instagram/insta-1.webp" alt="Image" />
                        <span>
                          @Baxo on Instagram
                          <i className="flaticon-right-arrow" />
                        </span>
                      </a>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            );
          })}

          <div
            className="instagram-prev"
            style={{ cursor: "pointer" }}
            onClick={onPrevClick}
          >
            <i className="flaticon-arrow-left" />
          </div>
          <div
            className="instagram-next"
            onClick={onNextClick}
            style={{ cursor: "pointer" }}
          >
            <i className="flaticon-arrow-right" />
          </div>
        </Swiper>
      </div>
    </>
  );
}

export default BottomSlider;

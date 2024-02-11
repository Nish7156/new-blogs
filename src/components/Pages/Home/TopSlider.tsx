"use client";
import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

function TopSlider() {
  const arr = [1, 2, 3];

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
      <div className="container">
        <div className="trending-box-two">
          <span>Trending</span>
          <div className="trending-slider-two swiper">
            <Swiper
              ref={swiperRef}
              spaceBetween={50}
              slidesPerView={1}
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
            >
              {arr.map((data: any, index: number) => {
                return (
                  <SwiperSlide className="" key={index}>
                    <div className="swiper-slide news-card-one">
                      <div className="news-card-img">
                        <img src="/img/news/trending-1.webp" alt="Image" />
                      </div>
                      <div className="news-card-info">
                        <a href="news-by-category.html" className="news-cat">
                          Fashion
                        </a>
                        <h3>
                          <a href="business-details.html">
                            Fashion Across The Globe: Exploring 15 Trendsetting
                            Destinations
                          </a>
                        </h3>
                        <ul className="news-metainfo list-style">
                          <li>
                            <i className="fi fi-rr-calendar-minus" />
                            <a href="news-by-date.html">Mar 03, 2023</a>
                          </li>
                          <li>
                            <i className="fi fi-rr-clock-three" />
                            15 Min Read
                          </li>
                        </ul>
                      </div>
                    </div>
                  </SwiperSlide>
                );
              })}
            </Swiper>
            <div className="trending-btn">
              <div
                className="trending-btn-prev"
                style={{ cursor: "pointer" }}
                onClick={onPrevClick}
              >
                <img src="/img/icons/left-short-arrow.svg" alt="Image" />
              </div>
              <div
                className="trending-btn-next"
                onClick={onNextClick}
                style={{ cursor: "pointer" }}
              >
                <img src="/img/icons/right-short-arrow.svg" alt="Image" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default TopSlider;

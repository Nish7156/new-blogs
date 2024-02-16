"use client";
import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

function CustomSlider({
  children,
  data,
  customClass,
  slidesPerView,
  spaceBetween,
  btnClass1,
  btnClass2,
  subChildren,
  wrapperClass,
}: any) {
  console.log("isClient", '===')

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
      <Swiper
        ref={swiperRef}
        spaceBetween={spaceBetween ? spaceBetween : 50}
        slidesPerView={slidesPerView ? slidesPerView : 1}
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
        className={`${customClass ? customClass : ""}`}
      >
        {data?.map((item: any, index: number) => {
          return (
            <SwiperSlide className="" key={index}>
                  {React.cloneElement(children, { data:item })}
            </SwiperSlide>
          );
        })}
        {subChildren ? (
          <>
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
          </>
        ) : null}
      </Swiper>
      {!subChildren && (
        <div className={wrapperClass ? wrapperClass : "trending-btn"}>
          <div
            className={btnClass1 ? btnClass1 : "trending-btn-prev"}
            style={{ cursor: "pointer" }}
            onClick={onPrevClick}
          >
            <img src="/img/icons/left-short-arrow.svg" alt="Image" />
          </div>
          <div
            className={btnClass2 ? btnClass2 : "trending-btn-next"}
            onClick={onNextClick}
            style={{ cursor: "pointer" }}
          >
            <img src="/img/icons/right-short-arrow.svg" alt="Image" />
          </div>
        </div>
      )}
    </>
  );
}

export default CustomSlider;

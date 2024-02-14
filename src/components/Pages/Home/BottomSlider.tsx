import React from "react";

import CustomSlider from "@/components/Utilty/CustomSlider";

function BottomSlider() {
  const arr = [1, 2, 3, 4, 5, 6];

  return (
    <>
      <div className="container-fluid pb-50">
        <CustomSlider
          data={arr}
          customClass="instagram-wrapper"
          spaceBetween={20}
          slidesPerView={4}
          subChildren
        >
          <SliderCard />
        </CustomSlider>
      </div>
    </>
  );
}

export default BottomSlider;

const SliderCard = () => {
  return (
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
  );
};

import React from "react";
import CustomSlider from "@/components/Utilty/CustomSlider";
import Image from "next/image";

function TopSlider() {
  const arr = [1, 2, 3];

  console.log("isClient");

  return (
    <>
      <div className="container">
        <div className="trending-box-two">
          <span>Trending</span>
          <div className="trending-slider-two swiper">
            <CustomSlider data={arr}>
              <SliderCard />
            </CustomSlider>
          </div>
        </div>
      </div>
    </>
  );
}

export default TopSlider;

const SliderCard = () => {
  return (
    <div className="swiper-slide news-card-one">
      <div className="news-card-img">
        <Image
          src="/img/news/trending-1.webp"
          alt="Image"
          width={100}
          height={100}
          loading="lazy"
        />
      </div>
      <div className="news-card-info">
        <a href="news-by-category.html" className="news-cat">
          Fashion
        </a>
        <h3>
          <a href="business-details.html">
            Fashion Across The Globe: Exploring 15 Trendsetting Destinations
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
  );
};

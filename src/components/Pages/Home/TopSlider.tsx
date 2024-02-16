import React, { Suspense } from "react";
import CustomSlider from "@/components/Utilty/CustomSlider";
import Image from "next/image";

async function getData() {
  const res = await fetch("https://dummyjson.com/products");

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

async function TopSlider() {
  const data = await getData();
  return (
    <>
      <div className="container">
        <div className="trending-box-two">
          <span>Trending</span>
          <div className="trending-slider-two swiper">
            <Suspense fallback={<>Loading</>}>
              <CustomSlider data={data?.products.slice(0, 3)}>
                <SliderCard />
              </CustomSlider>
            </Suspense>
          </div>
        </div>
      </div>
    </>
  );
}

export default TopSlider;

const SliderCard = ({ item }: any) => {
  console.log(item);

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

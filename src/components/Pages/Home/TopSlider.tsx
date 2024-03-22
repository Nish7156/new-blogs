import React, { Suspense } from "react";
import CustomSlider from "@/components/Utilty/CustomSlider";
import Image from "next/image";
import { checkEnvironment } from "@/components/Utilty/checkEnvironment ";
import Link from "next/link";

async function getData() {
  const res = await fetch(`${checkEnvironment()}/api/blogs`, {
    cache: "no-cache",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

async function TopSlider() {
  const data = await getData();

  return (
    <>
      {data.length != 0 ? (
        <div className="container">
          <div className="trending-box-two">
            <span>Trending</span>
            <div className="trending-slider-two swiper">
              <Suspense fallback={<>Loading</>}>
                <CustomSlider data={data?.slice(0, 3)}>
                  <SliderCard />
                </CustomSlider>
              </Suspense>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}

export default TopSlider;

const SliderCard = ({ item }: any) => {
  return (
    <div className="swiper-slide news-card-one">
      <Link href={"/"}>
        <div className="news-card-img">
          <Image
            src="/img/news/trending-1.webp"
            alt="Image"
            width={100}
            height={100}
            loading="lazy"
          />
        </div>
      </Link>
      <div className="news-card-info">
        <Link href="/" className="news-cat">
          Fashion
        </Link>
        <h3>
          <Link href="">
            Fashion Across The Globe: Exploring 15 Trendsetting Destinations
          </Link>
        </h3>
        <ul className="news-metainfo list-style">
          <li>
            <i className="fi fi-rr-calendar-minus" />
            <Link href="/">Mar 03, 2023</Link>
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

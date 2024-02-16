import CustomImageAuto from "@/components/elements/CustomImageAuto";
import Link from "next/link";
import React from "react";

async function getData() {
  const res = await fetch("https://dummyjson.com/products");

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

async function HeroGrid() {
  const data = await getData();
  return (
    <>
      <div className="container">
        <div className="row featured-news-three">
          <div className="col-xl-6">
            <Link href={`/categories/${data.products[1].category}/${data.products[1].title.toLowerCase().replace(/\s+/g, '-')}`}>
            <div className="news-card-eleven">
              <div className="news-card-img">
                <CustomImageAuto
                  src={data.products[1].images[0]}
                  layout="fill"
                  className={"image"}
                  alt=""
                />
              </div>
              <div className="news-card-info">
                <Link href="news-by-category.html" className="news-cat">
                  Business
                </Link>
                <h3>
                  <Link href="">
                    Revolutionizing The Business World: The Power Of Innovation
                  </Link>
                </h3>
                <p>
                  Lorem ipsum dosectetur adipisicing elit, sed do.Lorem ipsum
                  dolor sit amet consectet Null fringilla purus at leo dignissim
                  congue. Mauris elementum accumsan.
                </p>
                <ul className="news-metainfo list-style">
                  <li className="author">
                    <span className="author-img">
                      <img src="/img/author/author-thumb-1.webp" alt="Image" />
                    </span>
                    <a href="author.html">James William</a>
                  </li>
                  <li>
                    <i className="fi fi-rr-calendar-minus" />
                    <a href="news-by-date.html">Feb 03, 2023</a>
                  </li>
                  <li>
                    <i className="fi fi-rr-clock-three" />
                    15 Min Read
                  </li>
                </ul>
              </div>
            </div>
            </Link>
          </div>
          <div className="col-xl-6">
            <div className="row">
              {data &&
                data?.products.slice(4, 8).map((data: any) => {
                  return (
                    <div className="col-md-6" key={data}>
                      <div className="news-card-thirteen">
                        <div className="news-card-img">
                          <CustomImageAuto src={data?.images[0]} alt="Iamge" />
                          <Link href="business.html" className="news-cat">
                            Fashion
                          </Link>
                        </div>
                        <div className="news-card-info">
                          <h3>
                            <Link href="business-details.html">
                              {data?.title}
                            </Link>
                          </h3>
                          <ul className="news-metainfo list-style">
                            <li>
                              <i className="fi fi-rr-calendar-minus" />
                              <a href="news-by-date.html">Mar 30, 2023</a>
                            </li>
                            <li>
                              <i className="fi fi-rr-clock-three" />
                              11 Min Read
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  );
                })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default HeroGrid;

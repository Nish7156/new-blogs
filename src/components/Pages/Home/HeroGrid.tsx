import CustomImageAuto from "@/components/elements/CustomImageAuto";
import Image from "next/image";
import React from "react";

function HeroGrid() {
  const arr = [1, 2, 3, 4];
  return (
    <>
      <div className="container">
        <div className="row featured-news-three">
          <div className="col-xl-6">
            <div className="news-card-eleven">
              <div className="news-card-img">
                <CustomImageAuto
                  src="/img/news/news-75.webp"
                  layout="fill"
                  className={"image"}
                  alt=""
                />
              </div>
              <div className="news-card-info">
                <a href="news-by-category.html" className="news-cat">
                  Business
                </a>
                <h3>
                  <a href="business-details.html">
                    Revolutionizing The Business World: The Power Of Innovation
                  </a>
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
          </div>
          <div className="col-xl-6">
            <div className="row">
              {arr.map((data: any) => {
                return (
                  <div className="col-md-6" key={data}>
                    <div className="news-card-thirteen">
                      <div className="news-card-img">
                        <CustomImageAuto
                          src="/img/news/news-76.webp"
                          alt="Iamge"
                        />
                        <a href="business.html" className="news-cat">
                          Fashion
                        </a>
                      </div>
                      <div className="news-card-info">
                        <h3>
                          <a href="business-details.html">
                            Dressing Fashion Tips For Any Occasion
                          </a>
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

import React from "react";

function NewsSliderMiddle() {
  return (
    <>
      <div className="container ptb-100">
        <div className="popular-news-slider swiper">
          <div className="swiper-wrapper">
            <div className="swiper-slide pp-news-card">
              <img src="/img/news/news-86.webp" alt="Image" />
              <div className="pp-news-info">
                <a href="business.html" className="news-cat">
                  Politics
                </a>
                <h3>
                  <a href="business-details.html">
                    Empowering the People: The Role of Politics in Society
                  </a>
                </h3>
                <ul className="news-metainfo list-style">
                  <li>
                    <i className="fi fi-rr-calendar-minus" />
                    <a href="news-by-date.html">Feb 03, 2023</a>
                  </li>
                  <li>
                    <i className="fi fi-rr-comment" />
                    03
                  </li>
                  <li>
                    <i className="fi fi-rr-eye" />
                    1.2k Views
                  </li>
                </ul>
              </div>
            </div>
            {/* <div className="swiper-slide pp-news-card">
              <img src="/img/news/news-87.webp" alt="Image" />
              <div className="pp-news-info">
                <a href="business.html" className="news-cat">
                  Technology
                </a>
                <h3>
                  <a href="business-details.html">
                    Discovering The Logical Treasures Of 15 Regions
                  </a>
                </h3>
                <ul className="news-metainfo list-style">
                  <li>
                    <i className="fi fi-rr-calendar-minus" />
                    <a href="news-by-date.html">Feb 03, 2023</a>
                  </li>
                  <li>
                    <i className="fi fi-rr-comment" />
                    03
                  </li>
                  <li>
                    <i className="fi fi-rr-eye" />
                    1.2k Views
                  </li>
                </ul>
              </div>
            </div>
            <div className="swiper-slide pp-news-card">
              <img src="/img/news/news-88.webp" alt="Image" />
              <div className="pp-news-info">
                <a href="business.html" className="news-cat">
                  Sports
                </a>
                <h3>
                  <a href="business-details.html">
                    The Spirit Of Competition: The Excitement Of Sports
                  </a>
                </h3>
                <ul className="news-metainfo list-style">
                  <li>
                    <i className="fi fi-rr-calendar-minus" />
                    <a href="news-by-date.html">Feb 03, 2023</a>
                  </li>
                  <li>
                    <i className="fi fi-rr-comment" />
                    03
                  </li>
                  <li>
                    <i className="fi fi-rr-eye" />
                    1.2k Views
                  </li>
                </ul>
              </div>
            </div>
            <div className="swiper-slide pp-news-card">
              <img src="/img/news/news-89.webp" alt="Image" />
              <div className="pp-news-info">
                <a href="business.html" className="news-cat">
                  Politics
                </a>
                <h3>
                  <a href="business-details.html">
                    Queen Misses Games Due To Health Reasons
                  </a>
                </h3>
                <ul className="news-metainfo list-style">
                  <li>
                    <i className="fi fi-rr-calendar-minus" />
                    <a href="news-by-date.html">Feb 03, 2023</a>
                  </li>
                  <li>
                    <i className="fi fi-rr-comment" />
                    03
                  </li>
                  <li>
                    <i className="fi fi-rr-eye" />
                    1.2k Views
                  </li>
                </ul>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </>
  );
}

export default NewsSliderMiddle;

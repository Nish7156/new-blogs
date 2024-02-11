import React from 'react'

function HeroGrid() {
  return (
    <>
       <div className="container">
  <div className="row featured-news-three">
    <div className="col-xl-6">
      <div className="news-card-eleven">
        <div className="news-card-img">
          <img src="/img/news/news-75.webp" alt="Image" />
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
            Lorem ipsum dosectetur adipisicing elit, sed do.Lorem ipsum dolor
            sit amet consectet Null fringilla purus at leo dignissim congue.
            Mauris elementum accumsan.
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
        <div className="col-md-6">
          <div className="news-card-thirteen">
            <div className="news-card-img">
              <img src="/img/news/news-76.webp" alt="Iamge" />
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
        <div className="col-md-6">
          <div className="news-card-thirteen">
            <div className="news-card-img">
              <img src="/img/news/news-77.webp" alt="Iamge" />
              <a href="business.html" className="news-cat">
                Technology
              </a>
            </div>
            <div className="news-card-info">
              <h3>
                <a href="business-details.html">
                  Disrupting The Future: The Impact Of Technology
                </a>
              </h3>
              <ul className="news-metainfo list-style">
                <li>
                  <i className="fi fi-rr-calendar-minus" />
                  <a href="news-by-date.html">Mar 22, 2023</a>
                </li>
                <li>
                  <i className="fi fi-rr-clock-three" />
                  12 Min Read
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <div className="news-card-thirteen">
            <div className="news-card-img">
              <img src="/img/news/news-78.webp" alt="Iamge" />
              <a href="business.html" className="news-cat">
                Sports
              </a>
            </div>
            <div className="news-card-info">
              <h3>
                <a href="business-details.html">
                  Capturing Life's Memories: The Power Of Photography
                </a>
              </h3>
              <ul className="news-metainfo list-style">
                <li>
                  <i className="fi fi-rr-calendar-minus" />
                  <a href="news-by-date.html">Feb 27, 2023</a>
                </li>
                <li>
                  <i className="fi fi-rr-clock-three" />
                  10 Min Read
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <div className="news-card-thirteen">
            <div className="news-card-img">
              <img src="/img/news/news-79.webp" alt="Iamge" />
              <a href="business.html" className="news-cat">
                Photography
              </a>
            </div>
            <div className="news-card-info">
              <h3>
                <a href="business-details.html">
                  Cyclist Out Of Giro After Injuring Eye With Cork
                </a>
              </h3>
              <ul className="news-metainfo list-style">
                <li>
                  <i className="fi fi-rr-calendar-minus" />
                  <a href="news-by-date.html">Feb 27, 2023</a>
                </li>
                <li>
                  <i className="fi fi-rr-clock-three" />
                  15 Min Read
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
 
    </>
  )
}

export default HeroGrid
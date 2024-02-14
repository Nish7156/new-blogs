import CustomImageAuto from "@/components/elements/CustomImageAuto";
import React from "react";

function EditorsPick() {
  const arr = [1, 1, 1, 1, 1, 1];
  return (
    <>
      <div className="editor-news-three pt-100 pb-75">
        <div className="container">
          <div className="section-title-two mb-40">
            <div className="row align-items-center">
              <div className="col-md-7">
                <h2>Editor's pick</h2>
              </div>
              <div className="col-md-5 text-md-end">
                <a href="business.html" className="link-three">
                  View All News
                  <span>
                    <img src="/img/icons/arrow-right.svg" alt="Iamge" />
                  </span>
                </a>
              </div>
            </div>
          </div>
          <div className="row justify-content-center">
            {arr.map((data: any) => {
              return (
                <div className="col-xl-4 col-lg-6 col-md-6" key={data}>
                  <div className="news-card-thirteen">
                    <div className="news-card-img">
                      <CustomImageAuto
                        src="/img/news/news-80.webp"
                        alt="Iamge"
                      />
                      <a href="business.html" className="news-cat">
                        Lifestyle
                      </a>
                    </div>
                    <div className="news-card-info">
                      <h3>
                        <a href="business-details.html">
                          Jiraiya Banks Wants To Teach You How To Build A House
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
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}

export default EditorsPick;

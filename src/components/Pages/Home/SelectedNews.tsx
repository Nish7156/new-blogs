import CustomImageAuto from "@/components/elements/CustomImageAuto";
import { getEditoresBlogs } from "@/lib/load-blogs";
import React from "react";


async function SelectedNews() {
  const data = await getEditoresBlogs();
  const tabData = [
    { id: 1, name: "Politics" },
    { id: 2, name: "Sports" },
    { id: 3, name: "Business" },
  ];
  return (
    <div>
      <div className="selected-news-three pb-100">
        <div className="container">
          <div className="section-title-two mb-40">
            <div className="row align-items-center">
              <div className="col-md-6">
                <h2>Selected posts</h2>
              </div>
              <div className="col-md-6 text-md-end">
                <ul
                  className="nav nav-tabs news-tablist-three"
                  role="tablist"
                  style={{ border: "none" }}
                >
                  {tabData.map((tab) => (
                    <li className="nav-item" key={tab.id}>
                      <button
                        className={`nav-link ${tab.id === 1 ? "active" : ""}`}
                        data-bs-toggle="tab"
                        data-bs-target={`#tab_${tab.id}`}
                        type="button"
                        role="tab"
                      >
                        {tab.name}
                        <i className="flaticon-arrow-right" />
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          <div className="tab-content selected-news-content">
            <div className="tab-pane fade" id="tab_1" role="tabpanel">
              <div className="row justify-content-center">
                {data?.slice(0, 8).map((data: any) => {
                  return (
                    <div
                      key={data}
                      className="col-xxl-3 col-xl-4 col-lg-6 col-md-6"
                    >
                      <div className="news-card-thirteen">
                        <div className="news-card-img">
                          <CustomImageAuto src={data.image} alt="Iamge" />

                          <a href="business.html" className="news-cat">
                            {data?.category}
                          </a>
                        </div>
                        <div className="news-card-info">
                          <h3>
                            <a href="business-details.html">{data?.title}</a>
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
            <div
              className="tab-pane fade active show"
              id="tab_2"
              role="tabpanel"
            >
              <div className="row justify-content-center">
                {data?.slice(9, 17).map((data: any) => {
                  return (
                    <div
                      key={data}
                      className="col-xxl-3 col-xl-4 col-lg-6 col-md-6"
                    >
                      <div className="news-card-thirteen">
                        <div className="news-card-img">
                          <CustomImageAuto src={data.image} alt="Iamge" />

                          <a href="business.html" className="news-cat">
                            {data?.category}
                          </a>
                        </div>
                        <div className="news-card-info">
                          <h3>
                            <a href="business-details.html">{data?.title}</a>
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
            <div className="tab-pane fade" id="tab_3" role="tabpanel">
              <div className="row justify-content-center">
                {data?.slice(18, 26).map((data: any) => {
                  return (
                    <div
                      key={data}
                      className="col-xxl-3 col-xl-4 col-lg-6 col-md-6"
                    >
                      <div className="news-card-thirteen">
                        <div className="news-card-img">
                          <CustomImageAuto src={data.image} alt="Iamge" />

                          <a href="business.html" className="news-cat">
                            {data?.category}
                          </a>
                        </div>
                        <div className="news-card-info">
                          <h3>
                            <a href="business-details.html">{data?.title}</a>
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
          <a href="business.html" className="btn-three d-block w-100">
            View All News
            <i className="flaticon-arrow-right" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default SelectedNews;

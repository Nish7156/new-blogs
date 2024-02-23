import CustomImageAuto from "@/components/elements/CustomImageAuto";
import { extractDate } from "@/lib/helper";
import Link from "next/link";
import React from "react";

function MainContent({ data }: any) {
  if (!data) {
    return <p>Loading...</p>;
  }
  return (
    <div>
      <div className="sports-wrap ptb-100">
        <div className="container">
          <div className="row gx-55 gx-5">
            <div className="col-lg-8">
              <div className="row justify-content-start">
                {data &&
                  data?.slice(0, 10).map((data: any, index: number) => {
                    return (
                      <div className="col-md-6" key={index}>
                        <div className="news-card-thirteen">
                          <Link
                            href={`/categories/${data?.category}/${data?.slug}`}
                          >
                            <div className="news-card-img">
                              <CustomImageAuto
                                src={data?.image}
                                alt={data?.title || "image"}
                              />
                              <Link
                                href={`/categories/${data?.category}`}
                                className="news-cat"
                              >
                                {data?.category}
                              </Link>
                            </div>
                          </Link>
                          <div className="news-card-info">
                            <h3>
                              <Link
                                href={`/categories/${data?.category}/${data?.slug}`}
                              >
                                {data?.title}
                              </Link>
                            </h3>
                            <ul className="news-metainfo list-style">
                              <li>
                                <i className="fi fi-rr-calendar-minus" />
                                <Link
                                  href={`/categories/${data?.category}/${data?.slug}`}
                                >
                                  {extractDate(data?.dateline)}
                                </Link>
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
              <ul className="page-nav list-style text-center mt-20">
                <li>
                  <a href="business.html">
                    <i className="flaticon-arrow-left" />
                  </a>
                </li>
                <li>
                  <a className="active" href="business.html">
                    01
                  </a>
                </li>
                <li>
                  <a href="business.html">02</a>
                </li>
                <li>
                  <a href="business.html">03</a>
                </li>
                <li>
                  <a href="business.html">
                    <i className="flaticon-arrow-right" />
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-lg-4">
              <div className="sidebar">
                <div className="sidebar-widget-two">
                  <form action="#" className="search-box-widget">
                    <input type="search" placeholder="Search" />
                    <button type="submit">
                      <i className="fi fi-rr-search" />
                    </button>
                  </form>
                </div>
                <div className="sidebar-widget">
                  <h3 className="sidebar-widget-title">Categories</h3>
                  <ul className="category-widget list-style">
                    <li>
                      <a href="business.html">
                        <img src="/img/icons/arrow-right.svg" alt="Image" />
                        Celebration <span>(6)</span>
                      </a>
                    </li>
                    <li>
                      <a href="business.html">
                        <img src="/img/icons/arrow-right.svg" alt="Image" />
                        Culture<span>(3)</span>
                      </a>
                    </li>
                    <li>
                      <a href="business.html">
                        <img src="/img/icons/arrow-right.svg" alt="Image" />
                        Fashion<span>(2)</span>
                      </a>
                    </li>
                    <li>
                      <a href="business.html">
                        <img src="/img/icons/arrow-right.svg" alt="Image" />
                        Inspiration<span>(8)</span>
                      </a>
                    </li>
                    <li>
                      <a href="business.html">
                        <img src="/img/icons/arrow-right.svg" alt="Image" />
                        Lifestyle<span>(6)</span>
                      </a>
                    </li>
                    <li>
                      <a href="business.html">
                        <img src="/img/icons/arrow-right.svg" alt="Image" />
                        Politics<span>(2)</span>
                      </a>
                    </li>
                    <li>
                      <a href="business.html">
                        <img src="/img/icons/arrow-right.svg" alt="Image" />
                        Trending<span>(4)</span>
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="sidebar-widget">
                  <h3 className="sidebar-widget-title">Recent Posts</h3>
                  <div className="pp-post-wrap">
                    <div className="news-card-one">
                      <div className="news-card-img">
                        <img src="/img/news/news-thumb-4.webp" alt="Image" />
                      </div>
                      <div className="news-card-info">
                        <h3>
                          <a href="business-details.html">
                            Bernie Nonummy Pelopai Iatis Eum Litora
                          </a>
                        </h3>
                        <ul className="news-metainfo list-style">
                          <li>
                            <i className="fi fi-rr-calendar-minus" />
                            <a href="news-by-date.html">Apr 22, 2023</a>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="news-card-one">
                      <div className="news-card-img">
                        <img src="/img/news/news-thumb-5.webp" alt="Image" />
                      </div>
                      <div className="news-card-info">
                        <h3>
                          <a href="business-details.html">
                            How Youth Viral Diseases May The Year 2023
                          </a>
                        </h3>
                        <ul className="news-metainfo list-style">
                          <li>
                            <i className="fi fi-rr-calendar-minus" />
                            <a href="news-by-date.html">Apr 23, 2023</a>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="news-card-one">
                      <div className="news-card-img">
                        <img src="/img/news/news-thumb-6.webp" alt="Image" />
                      </div>
                      <div className="news-card-info">
                        <h3>
                          <a href="business-details.html">
                            Man Wearing Black Pullover Hoodie To Smoke
                          </a>
                        </h3>
                        <ul className="news-metainfo list-style">
                          <li>
                            <i className="fi fi-rr-calendar-minus" />
                            <a href="news-by-date.html">Apr 14, 2023</a>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="news-card-one">
                      <div className="news-card-img">
                        <img src="/img/news/news-thumb-7.webp" alt="Image" />
                      </div>
                      <div className="news-card-info">
                        <h3>
                          <a href="business-details.html">
                            First Prototype Flight Using Kinetic Launch System
                          </a>
                        </h3>
                        <ul className="news-metainfo list-style">
                          <li>
                            <i className="fi fi-rr-calendar-minus" />
                            <a href="news-by-date.html">Apr 07, 2023</a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="sidebar-widget">
                  <h3 className="sidebar-widget-title">Popular Tags</h3>
                  <ul className="tag-list list-style">
                    <li>
                      <a href="news-by-tags.html">BUSINESS</a>
                    </li>
                    <li>
                      <a href="news-by-tags.html">FOOD</a>
                    </li>
                    <li>
                      <a href="news-by-tags.html">SCIENCE</a>
                    </li>
                    <li>
                      <a href="news-by-tags.html">LIFESTYLE</a>
                    </li>
                    <li>
                      <a href="news-by-tags.html">SPORTS</a>
                    </li>
                    <li>
                      <a href="news-by-tags.html">PHOTO</a>
                    </li>
                    <li>
                      <a href="news-by-tags.html">TECHNOLOGY</a>
                    </li>
                    <li>
                      <a href="news-by-tags.html">CONTENT</a>
                    </li>
                    <li>
                      <a href="news-by-tags.html">FEATURED</a>
                    </li>
                    <li>
                      <a href="news-by-tags.html">AUDIO</a>
                    </li>
                    <li>
                      <a href="news-by-tags.html">FASHION</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MainContent;

import CustomImageAuto from "@/components/elements/CustomImageAuto";
import { extractDate } from "@/lib/helper";
import Link from "next/link";
import React from "react";
import SideBarData from "./SideBarData";

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
              {data?.length > 10 && (
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
              )}
            </div>
            <SideBarData />
          </div>
        </div>
      </div>
    </div>
  );
}

export default MainContent;

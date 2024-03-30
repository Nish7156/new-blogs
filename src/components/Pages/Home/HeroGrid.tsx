import CustomImageAuto from "@/components/elements/CustomImageAuto";
import { extractDate, formatCategory, getRandomTime, truncateText } from "@/lib/helper";
import Link from "next/link";
import React from "react";

async function HeroGrid({ data }: any) {
  let dataIndex = 0;


  return (
    <>
      <div className="container">
        <div className="row featured-news-three">
          <div className="col-xl-6">
            <Link
              href={`/${data[dataIndex]?.category}/${data[dataIndex]?.slug}`}
            >
              <div className="news-card-eleven">
                <div className="news-card-img">
                  <CustomImageAuto
                    src={data[dataIndex]?.image}
                    layout="fill"
                    className={"image"}
                    alt=""
                  />
                </div>
                <div className="news-card-info">
                  <Link
                    href={`/${data[dataIndex]?.category}`}
                    className="news-cat capitalize"
                  >
                    {formatCategory(data[dataIndex].category)}
                  </Link>
                  <h1>
                    <Link
                      href={`/${data[dataIndex]?.category}/${data[dataIndex]?.slug}`}
                    >
                      {data[dataIndex]?.title}
                    </Link>
                  </h1>
                  <div className="news-para">
                    <p>
                      {truncateText(data[dataIndex]?.description || "", 230)}
                    </p>
                  </div>
                  <ul className="news-metainfo list-style">
                    {data[dataIndex]?.author && (
                      <li className="author">
                        <span className="author-img">
                          <CustomImageAuto
                            src="/img/author/author-thumb-1.webp"
                            alt="Image"
                          />
                        </span>
                        <a href="author.html">James William</a>
                      </li>
                    )}
                    <li>
                      <i className="fi fi-rr-calendar-minus" />
                      <Link
                        href={`/${data[dataIndex]?.category}/${data[dataIndex]?.slug}`}
                        prefetch={true}
                      >
                        {extractDate(data[dataIndex]?.dateline)}
                      </Link>
                    </li>
                    <li>
                      <i className="fi fi-rr-clock-three" />
                      {getRandomTime() + " Min Read"}
                    </li>
                  </ul>
                </div>
              </div>
            </Link>
          </div>
          <div className="col-xl-6">
            <div className="row">
              {data &&
                data?.slice(1, 5).map((data: any, index: number) => {
                  return (
                    <div className="col-md-6" key={index}>
                      <div className="news-card-thirteen">
                        <div className="news-card-img">
                          <Link href={`/${data?.category}/${data?.slug}`}>
                            <CustomImageAuto src={data?.image} alt="Iamge" />
                          </Link>
                          <Link
                            href={`/${data?.category}`}
                            className="news-cat capitalize"
                          >
                            {formatCategory(data.category)}
                          </Link>
                        </div>
                        <div className="news-card-info">
                          <h3>
                            <Link href={`/${data?.category}/${data?.slug}`}>
                              {truncateText(data?.title, 80)}
                            </Link>
                          </h3>
                          <ul className="news-metainfo list-style">
                            <li>
                              <i className="fi fi-rr-calendar-minus" />
                              <a href="news-by-date.html">
                                {extractDate(data.dateline)}
                              </a>
                            </li>
                            <li>
                              <i className="fi fi-rr-clock-three" />
                              {getRandomTime() + " Min Read"}
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

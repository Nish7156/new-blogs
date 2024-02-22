import { checkEnvironment } from "@/components/Utilty/checkEnvironment ";
import CustomImageAuto from "@/components/elements/CustomImageAuto";
import Image from "next/image";
import Link from "next/link";
import React from "react";

async function getData() {
  const res = await fetch(`${checkEnvironment()}/api/blogs`, {
    cache: "force-cache",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

async function HeroGrid() {
  const data = await getData();

  let dataIndex = 1;

  return (
    <>
      <div className="container">
        <div className="row featured-news-three">
          <div className="col-xl-6">
            <Link
              href={`/categories/${data[dataIndex]?.category}/${data[dataIndex]?.slug}`}
            >
              <div className="news-card-eleven">
                <div className="news-card-img">
                  <CustomImageAuto
                    src={data[dataIndex].image}
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
                    <Link href="">{data[dataIndex].title}</Link>
                  </h3>
                  <p>
                    Lorem ipsum dosectetur adipisicing elit, sed do.Lorem ipsum
                    dolor sit amet consectet Null fringilla purus at leo
                    dignissim congue. Mauris elementum accumsan.
                  </p>
                  <ul className="news-metainfo list-style">
                    <li className="author">
                      <span className="author-img">
                        <CustomImageAuto
                          src="/img/author/author-thumb-1.webp"
                          alt="Image"
                        />
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
                data?.slice(8, 12).map((data: any, index: number) => {
                  return (
                    <div className="col-md-6" key={index}>
                      <div className="news-card-thirteen">
                        <div className="news-card-img">
                          <CustomImageAuto src={data?.image} alt="Iamge" />
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

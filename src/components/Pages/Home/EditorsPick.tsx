import CustomImageAuto from "@/components/elements/CustomImageAuto";
import { extractDate, getRandomTime, truncateText } from "@/lib/helper";
import { getEditoresBlogs } from "@/lib/load-blogs";
import Link from "next/link";
import React from "react";

async function EditorsPick({ data }: any) {
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
            {data.slice(6, 12).map((data: any, index: number) => {
              return (
                <div className="col-xl-4 col-lg-6 col-md-6" key={index}>
                  <div className="news-card-thirteen">
                    <div className="news-card-img">
                      <Link href={`/${data?.category}/${data?.slug}`}>
                        <CustomImageAuto src={data?.image} alt={data?.title} />
                      </Link>
                      <Link href={`/${data?.category}`} className="news-cat capitalize">
                        {data?.category}
                      </Link>
                    </div>
                    <div className="news-card-info">
                      <h3>
                        <Link href={`/${data?.category}/${data?.slug}`}>
                          {truncateText(data?.title, 75)}
                        </Link>
                      </h3>
                      <ul className="news-metainfo list-style">
                        <li>
                          <i className="fi fi-rr-calendar-minus" />
                          <Link href={`/${data?.category}/${data?.slug}`}>
                            {extractDate(data?.dateline)}
                          </Link>
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
    </>
  );
}

export default EditorsPick;

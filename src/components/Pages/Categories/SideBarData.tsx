import { checkEnvironment } from "@/components/Utilty/checkEnvironment ";
import { extractDate, formatCategory, truncateText } from "@/lib/helper";
import Image from "next/image";
import Link from "next/link";
import React from "react";

async function getCategories() {
  try {
    const res = await fetch(`${checkEnvironment()}/api/categories`, {
      cache: "no-cache",
    });
    if (!res.ok) {
      console.log("error");
    }
    return res.json();
  } catch (error) {
    console.log(error);
  }
}

async function getRecentBlogs() {
  try {
    const res = await fetch(`${checkEnvironment()}/api/recent-top-blogs`, {
      cache: "no-cache",
    });
    if (!res.ok) {
      console.log("error");
    }
    return res.json();
  } catch (error) {
    console.log(error);
  }
}

async function SideBarData() {
  const categoriesData = await getCategories();
  const recentBlogs = await getRecentBlogs();
  return (
    <>
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
              {categoriesData &&
                categoriesData
                  ?.slice(0, 14)
                  ?.map((data: any, index: number) => {
                    return (
                      <li key={index}>
                        <Link href={`/categories/${data?.category}`}>
                          <Image
                            width={13}
                            height={16}
                            src="/img/icons/arrow-right.svg"
                            alt="Image"
                          />
                          {formatCategory(data?.category)}{" "}
                          <span>({data?.count})</span>
                        </Link>
                      </li>
                    );
                  })}
            </ul>
          </div>
          <div className="sidebar-widget">
            <h3 className="sidebar-widget-title">Recent Posts</h3>
            <div className="pp-post-wrap">
              {recentBlogs?.map((data: any, index: Number) => {
                return (
                  <div className="news-card-one" key={data.title}>
                    <div className="news-card-img">
                      <Image
                        width={100}
                        height={100}
                        src={data?.image}
                        alt="Image"
                      />
                    </div>
                    <div className="news-card-info">
                      <h3>
                        <Link
                          href={`/categories/${data?.category}/${data?.slug}`}
                          prefetch={false}
                        >
                          {truncateText(data?.title, 50)}
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
                      </ul>
                    </div>
                  </div>
                );
              })}
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
    </>
  );
}

export default SideBarData;

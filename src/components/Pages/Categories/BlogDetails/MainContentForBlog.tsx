import CustomImageAuto from "@/components/elements/CustomImageAuto";
import Link from "next/link";
import React from "react";
import SideBarData from "../SideBarData";
import { extractDate, formatCategory } from "@/lib/helper";

function MainContentForBlog({ data }: any) {
  return (
    <div>
      <div className="news-details-wrap ptb-100">
        <div className="container">
          <div className="row gx-55 gx-5">
            <div className="col-lg-8">
              <article>
                <div className="news-img">
                  <CustomImageAuto src={data?.image} alt={data?.title} />
                  <Link
                    href={`/categories/${data?.category}`}
                    className="news-cat"
                  >
                    {formatCategory(data?.category)}
                  </Link>
                </div>
                <ul className="news-metainfo list-style">
                  <li className="author">
                    <span className="author-img">
                      <CustomImageAuto src="/img/author/author-thumb-1.webp" alt="Image" />
                    </span>
                    {/* <Link href="/">James William</Link> */}
                  </li>
                  <li>
                    <i className="fi fi-rr-calendar-minus" />
                    <Link href="" prefetch={false}>
                      {extractDate(data?.dateline)}
                    </Link>
                  </li>
                  <li>
                    <i className="fi fi-rr-clock-three" />
                    15 Min Read
                  </li>
                </ul>
                <div className="news-para">
                  <h1 className="capitalize">{data?.title}</h1>
                  <p>{data?.description}</p>
                  <p>
                    There are many variations of passages of Lorem Ipsum
                    available, but the majority have suffered alteration in some
                    form, by injected humour, or randomised words which don't
                    look even slightly believable. If you are going to use a
                    passage of Lorem Ipsum, you need to be sure there isn't
                    anything embarrassing hidden in the middle of text.
                  </p>
                </div>
                <div className="news-img">
                  <CustomImageAuto src="/img/news/single-news-2.webp" alt="Image" />
                </div>
                <div className="news-para">
                  <h5>
                    Mastering Digital Transformation: How to Stay Ahead in a
                    Rapidly Changing Business Landscape
                  </h5>
                  <p>
                    There are many variations of passages of Lorem Ipsum
                    available, but the majority have suffered alteration in some
                    form, by injected humour, or randomised words which don't
                    look even slightly believable. If you are going to use a
                    passage of Lorem Ipsum, you need to be sure there isn't
                    anything embarrassing hidden in the middle of text.
                  </p>
                  <h5>Unordered &amp; Ordered Lists</h5>
                  <p>
                    There are many variations of passages of Lorem Ipsum
                    available, but the majority have suffered alteration in some
                    form by injected humour, or randomised words which don't
                    look even slightly believable.
                  </p>
                  <ul className="content-feature-list list-style mt-15">
                    <li>
                      <span>
                        <i className="flaticon-arrow-right" />
                      </span>
                      It is a long established fact that a reader will be
                      distracted by the readable content.
                    </li>
                    <li>
                      <span>
                        <i className="flaticon-arrow-right" />
                      </span>
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting
                    </li>
                    <li>
                      <span>
                        <i className="flaticon-arrow-right" />
                      </span>
                      It was popularised in the 1960s with the release of
                      Letraset sheets
                    </li>
                    <li>
                      <span>
                        <i className="flaticon-arrow-right" />
                      </span>
                      Publishing software like Aldus PageMaker including
                      versions of Lorem Ipsum.
                    </li>
                    <li>
                      <span>
                        <i className="flaticon-arrow-right" />
                      </span>
                      All the Lorem Ipsum generators on the Internet tend to
                      repeat predefined.
                    </li>
                  </ul>
                  <p>
                    There are many variations of passages of Lorem Ipsum
                    available, but the majority have suffered alteration in some
                    form, by injected humour, or randomised words which don't
                    look even slightly believable. If you are going to use a{" "}
                    <strong>adipisicing</strong> of Lorem Ipsum, you need to be
                    sure there isn't anything embarrassing hidden in the middle
                    of text.
                  </p>
                </div>
                <blockquote className="wp-block-quote">
                  <i className="fi fi-rr-quote-right" />
                  <p>
                    “ People find waiting more tolerable when they can see the
                    work being done on their behalf ”
                  </p>
                  <h6>William Benjamin</h6>
                </blockquote>
                <div className="news-para">
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    stand dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a
                    type specim book. It has survived not only five centuries,
                    but also the leap into electronic typesetting, remaining
                    essentially unchange was popularised in the 1960s with the
                    release of Letraset sheets containing Lorem Ipsum passages,
                    and more recently with desktop publishing software like
                    Aldus PageMaker including versions of Lorem Ipsum.
                  </p>
                  <ol>
                    <li>
                      Lacus sed viverra tellus in hac habitasse platea dictumst.
                    </li>
                    <li>
                      Gravida neque convallis a <strong>cras</strong> semper
                      auctor neque vitae.
                    </li>
                    <li>
                      Lacus sed turpis tincidunt id aliquet risus feugiat in.
                    </li>
                    <li>
                      Risus commodo viverra manas accumsan lacus vel facilisis
                    </li>
                  </ol>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Quisquam culpa reprehenderit ad ipsa porro obcaecati
                    accusantium tempore officiis tenetur est!
                  </p>
                </div>
              </article>
            </div>
            <SideBarData />
          </div>
        </div>
      </div>
    </div>
  );
}

export default MainContentForBlog;

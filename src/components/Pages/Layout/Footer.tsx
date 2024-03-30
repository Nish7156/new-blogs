import Link from "next/link";
import React from "react";

function Footer() {
  return (
    <div>
      <div className="container-fluid">
        <div className="footer-wrap">
          <div className="row align-items-center">
            <div className="col-lg-4">
              <p className="copyright-text">
                © 2024 All Rights Reserved{" "}
                <Link href={"/"}>
                  <span>techofindia.in</span>
                </Link>
              </p>
            </div>
            <div className="col-lg-4 text-center">
              <ul className="social-profile list-style">
                <li>
                  <a href="https://www.fb.com" target="_blank">
                    <i className="flaticon-facebook-1" />
                  </a>
                </li>
                <li>
                  <a href="https://www.twitter.com" target="_blank">
                    <i className="flaticon-twitter-1" />
                  </a>
                </li>
                <li>
                  <a href="https://www.instagram.com" target="_blank">
                    <i className="flaticon-instagram-2" />
                  </a>
                </li>
                <li>
                  <a href="https://www.linkedin.com" target="_blank">
                    <i className="flaticon-linkedin" />
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-lg-4">
              <div className="footer-right">
                <button
                  className="subscribe-btn"
                  data-bs-toggle="modal"
                  data-bs-target="#newsletter-popup"
                >
                  Become a subscriber
                  <i className="flaticon-right-arrow" />
                </button>
                <p>
                  Get all the latest posts delivered straight to your inbox.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <button
        type="button"
        id="backtotop"
        className="position-fixed text-center border-0 p-0"
      >
        <i className="ri-arrow-up-line"></i>
      </button>
    </div>
  );
}

export default Footer;

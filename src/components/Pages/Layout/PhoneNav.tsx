"use client";
import { menuItems } from "@/lib/constant";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

function PhoneNav() {
  const [activeSubMenu, setActiveSubMenu] = useState(null);

  const toggleSubMenu = (index: any) => {
    setActiveSubMenu(activeSubMenu === index ? null : index);
  };

  return (
    <>
      <div
        className="responsive-navbar offcanvas offcanvas-end"
        data-bs-backdrop="static"
        tabIndex={-1}
        id="navbarOffcanvas"
      >
        <div className="offcanvas-header">
          <Link href="/" className="logo d-inline-block">
            <Image
              width={100}
              height={100}
              className="logo-light"
              src="/img/logo.webp"
              alt="logo"
            />
            <Image
              width={100}
              height={100}
              className="logo-dark"
              src="/img/logo-white.webp"
              alt="logo"
            />
          </Link>
          <button
            type="button"
            className="close-btn"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          >
            <i className="ri-close-line" />
          </button>
        </div>
        <div className="offcanvas-body">
          <div className="accordion" id="navbarAccordion">
            {menuItems.map((data, index) => (
              <div className="accordion-item" key={index}>
                <button
                  className={`accordion-button ${
                    activeSubMenu === index ? "" : "collapsed"
                  }`}
                  type="button"
                  onClick={() => toggleSubMenu(index)}
                >
                  {data.title}
                </button>
                {data?.subMenu && activeSubMenu === index && (
                  <div
                    className="accordion-collapse collapse show"
                    data-bs-parent="#navbarAccordion"
                  >
                    <div className="accordion-body">
                      <div className="accordion" id="navbarAccordion2">
                        {data.subMenu.map((item, subIndex) => (
                          <div className="accordion-item" key={subIndex}>
                            <a
                              className="accordion-link active"
                              href="index.html"
                            >
                              {item.title}
                            </a>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
          <div className="offcanvas-contact-info">
            <h4>Contact Info</h4>
            <ul className="contact-info list-style">
              <li>
                <i className="ri-map-pin-fill" />
                <p>28/A Street, New York, USA</p>
              </li>
              <li>
                <i className="ri-mail-fill" />
                <a href="/cdn-cgi/l/email-protection#28404d444447684a495047064b4745">
                  <span
                    className="__cf_email__"
                    data-cfemail="234b464f4f4c6341425b4c0d404c4e"
                  >
                    [email&nbsp;protected]
                  </span>
                </a>
              </li>
              <li>
                <i className="ri-phone-fill" />
                <a href="tel:1800123456789">+1 800 123 456 789</a>
              </li>
            </ul>
            <ul className="social-profile list-style">
              <li>
                <a href="https://www.fb.com" target="_blank">
                  <i className="ri-facebook-fill" />
                </a>
              </li>
              <li>
                <a href="https://www.instagram.com" target="_blank">
                  <i className="ri-instagram-line" />
                </a>
              </li>
              <li>
                <a href="https://www.linkedin.com" target="_blank">
                  <i className="ri-linkedin-fill" />
                </a>
              </li>
              <li>
                <a href="https://www.twitter.com" target="_blank">
                  <i className="ri-twitter-fill" />
                </a>
              </li>
            </ul>
          </div>
          <div className="others-option d-flex d-lg-none align-items-center">
            <div className="option-item">
              <a href="login.html" className="btn-two">
                Sign In
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default PhoneNav;

//@ts-nocheck
import React from "react";
import PhoneNav from "./PhoneNav";
import Link from "next/link";
import Image from "next/image";
import blogData from "../../../lib/data.json";

async function generateMenuItemsFromCategories() {
  // Assuming blogData is an array of objects where each object represents a blog post
  // and has category property
  const categories = blogData.reduce((uniqueCategories, blog) => {
    //@ts-ignore
    if (!uniqueCategories.find((category) => category.name === blog.category)) {
      //@ts-ignore
      uniqueCategories.push({
        name: blog.category,
        link: `/${blog.category.toLowerCase()}`,
      });
    }
    return uniqueCategories;
  }, []);

  // Adding the "Pages" section with sub-menu
  // categories.push({
  //   name: "Pages",
  //   subMenu: [
  //     { name: "About Us", link: "about.html" },
  //     { name: "Contact Us", link: "contact.html" },
  //   ],
  // });

  return categories;
}

async function Header() {
  const data = await generateMenuItemsFromCategories();

  return (
    <>
      <div className="navbar-area header-three sticky" id="navbar">
        <div className="container">
          <nav className="navbar navbar-expand-lg">
            <Link className="navbar-brand" href="/">
              <Image
                width={80}
                height={70}
                className="logo-light"
                src="/assets/TOI_logo_light.png"
                alt="logo"
              />
              <Image
                width={100}
                height={100}
                className="logo-dark"
                src="/assets/logo_dark.jpg"
                alt="logo"
              />
            </Link>
            {/* <button
              type="button"
              className="search-btn d-lg-none"
              data-bs-toggle="modal"
              data-bs-target="#searchModal"
            >
              <i className="flaticon-loupe" />
            </button> */}
            <a
              className="navbar-toggler"
              data-bs-toggle="offcanvas"
              href="#navbarOffcanvas"
              role="button"
              aria-controls="navbarOffcanvas"
            >
              <span className="burger-menu">
                <span className="top-bar" />
                <span className="middle-bar" />
                <span className="bottom-bar" />
              </span>
            </a>
            <div className="collapse navbar-collapse">
              <ul className="navbar-nav mx-auto">
                {data &&
                  data?.map((menuItem, index) => (
                    <li key={index} className="nav-item">
                      {menuItem?.subMenu ? (
                        <Link
                          href={`${menuItem?.link}`}
                          className="dropdown-toggle nav-link"
                        >
                          {menuItem.name}
                        </Link>
                      ) : (
                        <Link
                          href={menuItem.link}
                          className="nav-link capitalize"
                        >
                          {menuItem.name}
                        </Link>
                      )}
                      {menuItem?.subMenu && (
                        <ul className="dropdown-menu">
                          {menuItem &&
                            //@ts-ignore
                            menuItem?.subMenu?.map(
                              (subItem: any, subIndex: any) => (
                                <li key={subIndex} className="nav-item">
                                  <Link
                                    href={subItem.link}
                                    className="nav-link"
                                  >
                                    {subItem.name}
                                  </Link>
                                </li>
                              )
                            )}
                        </ul>
                      )}
                    </li>
                  ))}
              </ul>
              {/* <div className="others-option d-flex align-items-center">
                <div className="option-item">
                  <button
                    type="button"
                    className="search-btn"
                    data-bs-toggle="modal"
                    data-bs-target="#searchModal"
                  >
                    <i className="flaticon-loupe" />
                  </button>
                </div>
                <div className="option-item">
                  <Link href="/signin" className="btn-two">
                    Sign In
                  </Link>
                </div>
              </div> */}
            </div>
          </nav>
        </div>
      </div>
      <PhoneNav />
    </>
  );
}

export default Header;

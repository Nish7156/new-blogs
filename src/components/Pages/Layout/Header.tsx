import React from "react";

function Header() {
  return (
    <>
      <div className="navbar-area header-three sticky" id="navbar">
        <div className="container">
          <nav className="navbar navbar-expand-lg">
            <a className="navbar-brand" href="index.html">
              <img className="logo-light" src="/img/logo.webp" alt="logo" />
              <img
                className="logo-dark"
                src="/img/logo-white.webp"
                alt="logo"
              />
            </a>
            <button
              type="button"
              className="search-btn d-lg-none"
              data-bs-toggle="modal"
              data-bs-target="#searchModal"
            >
              <i className="flaticon-loupe" />
            </button>
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
                <li className="nav-item">
                  <a
                    href="javascript:void(0)"
                    className="dropdown-toggle nav-link active"
                  >
                    Home
                  </a>
                  <ul className="dropdown-menu">
                    <li className="nav-item">
                      <a href="index.html" className="nav-link">
                        {" "}
                        Home Demo One{" "}
                      </a>
                    </li>
                    <li className="nav-item">
                      <a href="index-2.html" className="nav-link">
                        {" "}
                        Home Demo Two{" "}
                      </a>
                    </li>
                    <li className="nav-item">
                      <a href="index-3.html" className="nav-link active">
                        Home Demo Three
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="nav-item">
                  <a
                    href="javascript:void(0)"
                    className="dropdown-toggle nav-link"
                  >
                    Pages
                  </a>
                  <ul className="dropdown-menu">
                    <li className="nav-item">
                      <a href="about.html" className="nav-link">
                        {" "}
                        About Us{" "}
                      </a>
                    </li>
                    <li className="nav-item">
                      <a href="contact.html" className="nav-link">
                        {" "}
                        Contact Us{" "}
                      </a>
                    </li>
                    <li className="nav-item">
                      <a href="team.html" className="nav-link">
                        {" "}
                        Team{" "}
                      </a>
                    </li>
                    <li className="nav-item">
                      <a href="author.html" className="nav-link">
                        {" "}
                        Author{" "}
                      </a>
                    </li>
                    <li className="nav-item">
                      <a href="privacy-policy.html" className="nav-link">
                        Privacy Policy
                      </a>
                    </li>
                    <li className="nav-item">
                      <a href="terms-conditions.html" className="nav-link">
                        Terms &amp; Conditions
                      </a>
                    </li>
                    <li className="nav-item">
                      <a href="error-404.html" className="nav-link">
                        404 Error Page
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="nav-item">
                  <a
                    href="javascript:void(0)"
                    className="dropdown-toggle nav-link"
                  >
                    Business
                  </a>
                  <ul className="dropdown-menu">
                    <li className="nav-item">
                      <a href="business.html" className="nav-link">
                        {" "}
                        Business News{" "}
                      </a>
                    </li>
                    <li className="nav-item">
                      <a href="business-details.html" className="nav-link">
                        Business News Details
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="nav-item">
                  <a
                    href="javascript:void(0)"
                    className="dropdown-toggle nav-link"
                  >
                    Politics
                  </a>
                  <ul className="dropdown-menu">
                    <li className="nav-item">
                      <a href="politics.html" className="nav-link">
                        Political News
                      </a>
                    </li>
                    <li className="nav-item">
                      <a href="politics-details.html" className="nav-link">
                        Political News Details
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="nav-item">
                  <a
                    href="javascript:void(0)"
                    className="dropdown-toggle nav-link"
                  >
                    Video
                  </a>
                  <ul className="dropdown-menu">
                    <li className="nav-item">
                      <a href="featured-video.html" className="nav-link">
                        Featured Video
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        href="featured-video-details.html"
                        className="nav-link"
                      >
                        Featured Video Details
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="nav-item">
                  <a
                    href="javascript:void(0)"
                    className="dropdown-toggle nav-link"
                  >
                    Sports
                  </a>
                  <ul className="dropdown-menu">
                    <li className="nav-item">
                      <a href="sports.html" className="nav-link">
                        {" "}
                        Sports News{" "}
                      </a>
                    </li>
                    <li className="nav-item">
                      <a href="sports-details.html" className="nav-link">
                        Sports News Details
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="nav-item">
                  <a
                    href="javascript:void(0)"
                    className="nav-link dropdown-toggle"
                  >
                    Shop
                  </a>
                  <ul className="dropdown-menu">
                    <li className="nav-item">
                      <a href="shop-grid.html" className="nav-link">
                        {" "}
                        Shop Grid{" "}
                      </a>
                    </li>
                    <li className="nav-item">
                      <a href="shop-left-sidebar.html" className="nav-link">
                        Shop Left Sidebar
                      </a>
                    </li>
                    <li className="nav-item">
                      <a href="shop-right-sidebar.html" className="nav-link">
                        Shop Right Sidebar
                      </a>
                    </li>
                    <li className="nav-item">
                      <a href="shop-details.html" className="nav-link">
                        Shop Details
                      </a>
                    </li>
                    <li className="nav-item">
                      <a href="cart.html" className="nav-link">
                        {" "}
                        Cart{" "}
                      </a>
                    </li>
                    <li className="nav-item">
                      <a href="wishlist.html" className="nav-link">
                        {" "}
                        Wishlist{" "}
                      </a>
                    </li>
                    <li className="nav-item">
                      <a href="checkout.html" className="nav-link">
                        {" "}
                        Checkout{" "}
                      </a>
                    </li>
                    <li className="nav-item">
                      <a href="login.html" className="nav-link">
                        {" "}
                        Login{" "}
                      </a>
                    </li>
                    <li className="nav-item">
                      <a href="signup.html" className="nav-link">
                        {" "}
                        Sign Up{" "}
                      </a>
                    </li>
                  </ul>
                </li>
              </ul>
              <div className="others-option d-flex align-items-center">
                <div className="option-item">
                  <a className="shopcart" href="cart.html">
                    <i className="flaticon-shopping-cart" /> <span>5</span>
                  </a>
                </div>
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
                  <a href="login.html" className="btn-two">
                    Sign In
                  </a>
                </div>
              </div>
            </div>
          </nav>
        </div>
      </div>

      <div
        className="responsive-navbar offcanvas offcanvas-end"
        data-bs-backdrop="static"
        tabIndex={-1}
        id="navbarOffcanvas"
      >
        <div className="offcanvas-header">
          <a href="index.html" className="logo d-inline-block">
            <img className="logo-light" src="/img/logo.webp" alt="logo" />
            <img className="logo-dark" src="/img/logo-white.webp" alt="logo" />
          </a>
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
            <div className="accordion-item">
              <button
                className="accordion-button collapsed active"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseOne"
                aria-expanded="false"
                aria-controls="collapseOne"
              >
                Home
              </button>
              <div
                id="collapseOne"
                className="accordion-collapse collapse"
                data-bs-parent="#navbarAccordion"
              >
                <div className="accordion-body">
                  <div className="accordion" id="navbarAccordion2">
                    <div className="accordion-item">
                      <a className="accordion-link active" href="index.html">
                        Home Demo One
                      </a>
                    </div>
                    <div className="accordion-item">
                      <a className="accordion-link" href="index-2.html">
                        Home Demo Two
                      </a>
                    </div>
                    <div className="accordion-item">
                      <a className="accordion-link" href="index-3.html">
                        Home Demo Three
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapbaxour"
                aria-expanded="false"
                aria-controls="collapbaxour"
              >
                Pages
              </button>
              <div
                id="collapbaxour"
                className="accordion-collapse collapse"
                data-bs-parent="#navbarAccordion"
              >
                <div className="accordion-body">
                  <div className="accordion" id="navbarAccordion45">
                    <div className="accordion-item">
                      <a className="accordion-link" href="about.html">
                        {" "}
                        About Us{" "}
                      </a>
                    </div>
                    <div className="accordion-item">
                      <a className="accordion-link" href="contact.html">
                        Contact Us
                      </a>
                    </div>
                    <div className="accordion-item">
                      <a href="team.html" className="accordion-link">
                        {" "}
                        Team{" "}
                      </a>
                    </div>
                    <div className="accordion-item">
                      <a href="author.html" className="accordion-link">
                        {" "}
                        Author{" "}
                      </a>
                    </div>
                    <div className="accordion-item">
                      <a href="privacy-policy.html" className="accordion-link">
                        Privacy Policy
                      </a>
                    </div>
                    <div className="accordion-item">
                      <a
                        href="terms-conditions.html"
                        className="accordion-link"
                      >
                        Terms &amp; Conditions
                      </a>
                    </div>
                    <div className="accordion-item">
                      <a href="error-404.html" className="accordion-link">
                        404 Error Page
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseTwo"
                aria-expanded="false"
                aria-controls="collapseTwo"
              >
                Business
              </button>
              <div
                id="collapseTwo"
                className="accordion-collapse collapse"
                data-bs-parent="#navbarAccordion"
              >
                <div className="accordion-body">
                  <div className="accordion" id="navbarAccordion7">
                    <div className="accordion-item">
                      <a href="business.html" className="accordion-link">
                        Business News
                      </a>
                    </div>
                    <div className="accordion-item">
                      <a
                        href="business-details.html"
                        className="accordion-link"
                      >
                        Business News Details
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseThree"
                aria-expanded="false"
                aria-controls="collapseThree"
              >
                Politics
              </button>
              <div
                id="collapseThree"
                className="accordion-collapse collapse"
                data-bs-parent="#navbarAccordion"
              >
                <div className="accordion-body">
                  <div className="accordion" id="navbarAccordion30">
                    <div className="accordion-item">
                      <a href="politics.html" className="accordion-link">
                        Political News
                      </a>
                    </div>
                    <div className="accordion-item">
                      <a
                        href="politics-details.html"
                        className="accordion-link"
                      >
                        Political News Details
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseFour"
                aria-expanded="false"
                aria-controls="collapseFour"
              >
                Video
              </button>
              <div
                id="collapseFour"
                className="accordion-collapse collapse"
                data-bs-parent="#navbarAccordion"
              >
                <div className="accordion-body">
                  <div className="accordion" id="navbarAccordion11">
                    <div className="accordion-item">
                      <a href="featured-video.html" className="accordion-link">
                        Featured Video
                      </a>
                    </div>
                    <div className="accordion-item">
                      <a
                        href="featured-video-details.html"
                        className="accordion-link"
                      >
                        Featured Video Details
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseFourth"
                aria-expanded="false"
                aria-controls="collapseFourth"
              >
                Sports
              </button>
              <div
                id="collapseFourth"
                className="accordion-collapse collapse"
                data-bs-parent="#navbarAccordion"
              >
                <div className="accordion-body">
                  <div className="accordion" id="navbarAccordion111">
                    <div className="accordion-item">
                      <a href="sports.html" className="accordion-link">
                        Sports News
                      </a>
                    </div>
                    <div className="accordion-item">
                      <a href="sports-details.html" className="accordion-link">
                        Sports News Details
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseFive"
                aria-expanded="false"
                aria-controls="collapseFive"
              >
                Shop
              </button>
              <div
                id="collapseFive"
                className="accordion-collapse collapse"
                data-bs-parent="#navbarAccordion"
              >
                <div className="accordion-body">
                  <div className="accordion" id="navbarAccordion70">
                    <div className="accordion-item">
                      <a href="shop-grid.html" className="accordion-link">
                        Shop Grid
                      </a>
                    </div>
                    <div className="accordion-item">
                      <a
                        href="shop-left-sidebar.html"
                        className="accordion-link"
                      >
                        Shop Left Sidebar
                      </a>
                    </div>
                    <div className="accordion-item">
                      <a
                        href="shop-right-sidebar.html"
                        className="accordion-link"
                      >
                        Shop Right Sidebar
                      </a>
                    </div>
                    <div className="accordion-item">
                      <a href="shop-details.html" className="accordion-link">
                        Shop Details
                      </a>
                    </div>
                    <div className="accordion-item">
                      <a href="cart.html" className="accordion-link">
                        {" "}
                        Cart{" "}
                      </a>
                    </div>
                    <div className="accordion-item">
                      <a href="wishlist.html" className="accordion-link">
                        Wishlist
                      </a>
                    </div>
                    <div className="accordion-item">
                      <a href="checkout.html" className="accordion-link">
                        Checkout
                      </a>
                    </div>
                    <div className="accordion-item">
                      <a href="login.html" className="accordion-link">
                        {" "}
                        Login{" "}
                      </a>
                    </div>
                    <div className="accordion-item">
                      <a href="signup.html" className="accordion-link">
                        {" "}
                        Sign Up{" "}
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
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

export default Header;

import React from "react";
import CustomImageAuto from "../elements/CustomImageAuto";

function TopSponserAd() {
  return (
    <>
      <div className="container">
        <div className="ad-section-two">
          <p>SPONSORED AD</p>
        </div>
        <div className="promo-wrap">
          <div className="promo-card-two">
            {/* <img
              src="/img/promo-shape-1.webp"
              alt="Image"
              className="promo-shape"
            /> */}
            <CustomImageAuto src="/img/promo-shape-1.webp" className="promo-shape"
              alt="Image"/>
            <div className="promo-content">
              <a href="index.html" className="logo">
                <img className="logo-light" src="/img/logo.webp" alt="Image" />
                <img
                  className="logo-dark"
                  src="/img/logo-white.webp"
                  alt="Image"
                />
              </a>
              <p>
                The European languages are members of the same family separ
                existence is a Baxo. For science, music, sport, etc.
              </p>
            </div>
            <img
              src="/img/promo-img-2.webp"
              alt="Image"
              className="promo-img"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default TopSponserAd;

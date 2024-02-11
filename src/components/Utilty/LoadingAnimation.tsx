import React from "react";

function LoadingAnimation() {
  return (
    <>
      <div className="loader-wrapper">
        <div className="loader"></div>
        <div className="loader-section section-left"></div>
        <div className="loader-section section-right"></div>
      </div>
    </>
  );
}

export default LoadingAnimation;

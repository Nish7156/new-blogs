import React from 'react'

function BottomSlider() {
  return (
    <>
       <div className="container-fluid pb-50">
  <div className="instagram-wrapper">
    <div className="instagram-slider-two swiper">
      <div className="swiper-wrapper">
        <div className="swiper-slide">
          <a
            className="instagram-slide"
            href="https://www.instagram.com"
            target="_blank"
          >
            <img src="/img/instagram/insta-1.webp" alt="Image" />
            <span>
              @Baxo on Instagram
              <i className="flaticon-right-arrow" />
            </span>
          </a>
        </div>
       
      </div>
    </div>
    <div className="instagram-prev">
      <i className="flaticon-arrow-left" />
    </div>
    <div className="instagram-next">
      <i className="flaticon-arrow-right" />
    </div>
  </div>
</div>
 
    </>
  )
}

export default BottomSlider
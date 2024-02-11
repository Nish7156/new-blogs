import React from 'react'

function NewsLetterBox() {
  return (
    <>
      <div className="container">
  <div className="newsletter-box">
    <div className="row">
      <div className="col-lg-6">
        <div className="newsletter-content">
          <h2>
            <img
              src="/img/newsletter-icon.webp"
              alt="Image"
              className="newsletter-icon"
            />
            Join Our Newsletter &amp; Read The New Posts First
          </h2>
        </div>
      </div>
      <div className="col-lg-6">
        <form action="#" className="newsletter-form">
          <div className="form-group">
            <input type="email" placeholder="Email Address" />
            <button type="button" className="btn-one">
              Subscribe
              <i className="flaticon-arrow-right" />
            </button>
          </div>
          <div className="form-check checkbox">
            <input className="form-check-input" type="checkbox" id="test_2" />
            <label className="form-check-label" htmlFor="test_2">
              I've read and accept
              <a href="privacy-policy.html">Privacy Policy</a>
            </label>
          </div>
        </form>
      </div>
    </div>
  </div>
</div>
  
    </>
  )
}

export default NewsLetterBox
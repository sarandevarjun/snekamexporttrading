import React from "react";
import LogoImage from "../assets/img/logo/logo.png";

const Footer = () => {
  return (
    <>
      {/* Footer */}
      <footer className="footer padding-t-100 bg-off-white">
        <div className="container">
          <div className="row footer-top padding-b-100">
            <div className="col-xl-4 col-lg-6 col-sm-12 col-12 cr-footer-border">
              <div className="cr-footer-logo">
                <div className="image">
                  <img src={LogoImage} alt="logo" className="logo" />
                  <img src={LogoImage} alt="logo" className="dark-logo" />
                </div>
              </div>
              <div className="cr-footer">
                <h4 className="cr-sub-title cr-title-hidden">
                  Contact us
                  <span className="cr-heading-res" />
                </h4>
                <ul className="cr-footer-links cr-footer-dropdown">
                  <li className="location-icon">
                    A12, Gladway GreenCity, Main Avenue, Avaniyapuram, Madurai -
                    12, Tamilnadu, India.
                  </li>
                  <li className="mail-icon">
                    <a href="mailto:snehamexporttrading@gmail.com">
                      snehamexporttrading@gmail.com
                    </a>
                  </li>
                  <li className="phone-icon">
                    <a href="tel:+91 6384946793"> +91 6384946793</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-xl-2 col-lg-3 col-sm-12 col-12 cr-footer-border">
              <div className="cr-footer">
                <h4 className="cr-sub-title">
                  Company
                  <span className="cr-heading-res" />
                </h4>
                <ul className="cr-footer-links cr-footer-dropdown">
                  <li>
                    <a href="/about">About Us</a>
                  </li>
                  <li>
                    <a href="/">Delivery Information</a>
                  </li>
                  <li>
                    <a href="/">Privacy Policy</a>
                  </li>
                  <li>
                    <a href="/">Terms &amp; Conditions</a>
                  </li>
                  <li>
                    <a href="/contact">contact Us</a>
                  </li>
                  <li>
                    <a href="/">Support Center</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-xl-2 col-lg-3 col-sm-12 col-12 cr-footer-border">
              <div className="cr-footer">
                <h4 className="cr-sub-title">
                  Category
                  <span className="cr-heading-res" />
                </h4>
                <ul className="cr-footer-links cr-footer-dropdown">
                  <li>
                    <a href="/products">Papad / Appalam</a>
                  </li>
                  <li>
                    <a href="/products">Peanut candies / Chikki</a>
                  </li>
                  <li>
                    <a href="/products">Banana leaves</a>
                  </li>
                  <li>
                    <a href="/products">Vaththal & &amp; Vadaham</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-xl-4 col-lg-12 col-sm-12 col-12 cr-footer-border">
              <div className="cr-footer cr-newsletter">
                <h4 className="cr-sub-title">
                  Subscribe Our Newsletter
                  <span className="cr-heading-res" />
                </h4>
                <div className="cr-footer-links cr-footer-dropdown">
                  <form className="cr-search-footer">
                    <input
                      className="search-input"
                      type="text"
                      placeholder="Search here..."
                    />
                    <a href="javascript:void(0)" className="search-btn">
                      <i className="ri-send-plane-fill" />
                    </a>
                  </form>
                </div>
                <div className="cr-social-media">
                  <span>
                    <a href="javascript:void(0)">
                      <i className="ri-facebook-line" />
                    </a>
                  </span>
                  <span>
                    <a href="javascript:void(0)">
                      <i className="ri-twitter-x-line" />
                    </a>
                  </span>
                  <span>
                    <a href="javascript:void(0)">
                      <i className="ri-youtube-line" />
                    </a>
                  </span>
                  <span>
                    <a href="javascript:void(0)">
                      <i className="ri-instagram-line" />
                    </a>
                  </span>
                </div>
                <div className="cr-payment">
                  <div className="cr-insta-slider swiper-container">
                    <div className="swiper-wrapper">
                      <div className="swiper-slide">
                        <a href="#" className="cr-payment-image">
                          <img src="../../assets/img/insta/1.jpg" alt="insta" />
                          <div className="payment-overlay" />
                        </a>
                      </div>
                      <div className="swiper-slide">
                        <a href="#" className="cr-payment-image">
                          <img src="../../assets/img/insta/2.jpg" alt="insta" />
                          <div className="payment-overlay" />
                        </a>
                      </div>
                      <div className="swiper-slide">
                        <a href="#" className="cr-payment-image">
                          <img src="../../assets/img/insta/3.jpg" alt="insta" />
                          <div className="payment-overlay" />
                        </a>
                      </div>
                      <div className="swiper-slide">
                        <a href="#" className="cr-payment-image">
                          <img src="../../assets/img/insta/4.jpg" alt="insta" />
                          <div className="payment-overlay" />
                        </a>
                      </div>
                      <div className="swiper-slide">
                        <a href="#" className="cr-payment-image">
                          <img src="../../assets/img/insta/5.jpg" alt="insta" />
                          <div className="payment-overlay" />
                        </a>
                      </div>
                      <div className="swiper-slide">
                        <a href="#" className="cr-payment-image">
                          <img src="../../assets/img/insta/6.jpg" alt="insta" />
                          <div className="payment-overlay" />
                        </a>
                      </div>
                      <div className="swiper-slide">
                        <a href="#" className="cr-payment-image">
                          <img src="../../assets/img/insta/7.jpg" alt="insta" />
                          <div className="payment-overlay" />
                        </a>
                      </div>
                      <div className="swiper-slide">
                        <a href="#" className="cr-payment-image">
                          <img src="../../assets/img/insta/8.jpg" alt="insta" />
                          <div className="payment-overlay" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="cr-last-footer">
            <p>
              © <span id="copyright_year" />{" "}
              <a href="/">Snekam Export Trading</a>, All rights reserved.
            </p>
          </div>
        </div>
      </footer>
      {/* Tab to top */}
      <a href="#Top" className="back-to-top result-placeholder">
        <i className="ri-arrow-up-line" />
        <div className="back-to-top-wrap">
          <svg viewBox="-1 -1 102 102">
            <path d="M50,1 a49,49 0 0,1 0,98 a49,49 0 0,1 0,-98" />
          </svg>
        </div>
      </a>
    </>
  );
};

export default Footer;

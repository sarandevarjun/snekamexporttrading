import React from "react";

import produtBannerImage from "../assets/img/product/product-banner.jpg";
import prodImage from "../assets/img/product/product-banner.jpg";
import productImage2 from "../assets/img/product/2.jpg";
import productImage3 from "../assets/img/product/3.jpg";
import productImage9 from "../assets/img/product/9.jpg";
import productImage11 from "../assets/img/product/11.jpg";
import productImage17 from "../assets/img/product/17.jpg";

const Popularproducts = () => {
  return (
    <>
      {/* Popular product */}
      <section className="section-popular-product-shape padding-b-100">
        <div className="container" data-aos="fade-up" data-aos-duration={2000}>
          <div className="row">
            <div className="col-lg-12">
              <div className="mb-30">
                <div className="cr-banner">
                  <h2>Popular Products</h2>
                </div>
                <div className="cr-banner-sub-title">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore lacus vel facilisis.{" "}
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="product-content row mb-minus-24" id="MixItUpDA2FB7">
            <div className="col-xl-3 col-lg-4 col-12 mb-24">
              <div className="row mb-minus-24 sticky">
                <div className="col-lg-12 col-sm-6 col-6 cr-product-box mb-24">
                  <div className="cr-product-tabs">
                    <ul>
                      <li className="active" data-filter="all">
                        All
                      </li>
                      <li data-filter=".papad">Papad</li>
                      <li data-filter=".peanut">Peanut</li>
                      <li data-filter=".bananaleaf">Banana Leaf</li>
                      <li data-filter=".vathal">Vathal</li>
                    </ul>
                  </div>
                </div>
                <div className="col-lg-12 col-sm-6 col-6 cr-product-box banner-480 mb-24">
                  <div className="cr-ice-cubes">
                    <img src={produtBannerImage} alt="product banner" />
                    <div className="cr-ice-cubes-contain">
                      <h4 className="title">Juicy </h4>
                      <h5 className="sub-title">Fruits</h5>
                      <span>100% Natural</span>
                      <a href="shop-left-sidebar.html" className="cr-button">
                        Shop Now
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-9 col-lg-8 col-12 mb-24">
              <div className="row mb-minus-24">
                <div className="mix peanut col-xxl-3 col-xl-4 col-6 cr-product-box mb-24">
                  <div className="cr-product-card">
                    <div className="cr-product-image">
                      <div className="cr-image-inner zoom-image-hover">
                        <img src={productImage11} alt="product-1" />
                      </div>
                      <div className="cr-side-view">
                        <a href="javascript:void(0)" className="wishlist">
                          <i className="ri-heart-line" />
                        </a>
                        <a
                          className="model-oraganic-product"
                          data-bs-toggle="modal"
                          href="#quickview"
                          role="button"
                        >
                          <i className="ri-eye-line" />
                        </a>
                      </div>
                      <a className="cr-shopping-bag" href="javascript:void(0)">
                        <i className="ri-shopping-bag-line" />
                      </a>
                    </div>
                    <div className="cr-product-details">
                      <div className="cr-brand">
                        <a href="shop-left-sidebar.html">Vegetables</a>
                        <div className="cr-star">
                          <i className="ri-star-fill" />
                          <i className="ri-star-fill" />
                          <i className="ri-star-fill" />
                          <i className="ri-star-fill" />
                          <i className="ri-star-line" />
                          <p>(4.5)</p>
                        </div>
                      </div>
                      <a href="product-left-sidebar.html" className="title">
                        Fresh organic villa farm lomon 500gm pack
                      </a>
                      <p className="cr-price">
                        <span className="new-price">$120.25</span>{" "}
                        <span className="old-price">$123.25</span>
                      </p>
                    </div>
                  </div>
                </div>
                <div className="mix papad col-xxl-3 col-xl-4 col-6 cr-product-box mb-24">
                  <div className="cr-product-card">
                    <div className="cr-product-image">
                      <div className="cr-image-inner zoom-image-hover">
                        <img src={productImage9} alt="product-1" />
                      </div>
                      <div className="cr-side-view">
                        <a href="javascript:void(0)" className="wishlist">
                          <i className="ri-heart-line" />
                        </a>
                        <a
                          className="model-oraganic-product"
                          data-bs-toggle="modal"
                          href="#quickview"
                          role="button"
                        >
                          <i className="ri-eye-line" />
                        </a>
                      </div>
                      <a className="cr-shopping-bag" href="javascript:void(0)">
                        <i className="ri-shopping-bag-line" />
                      </a>
                    </div>
                    <div className="cr-product-details">
                      <div className="cr-brand">
                        <a href="shop-left-sidebar.html">Snacks</a>
                        <div className="cr-star">
                          <i className="ri-star-fill" />
                          <i className="ri-star-fill" />
                          <i className="ri-star-fill" />
                          <i className="ri-star-fill" />
                          <i className="ri-star-fill" />
                          <p>(5.0)</p>
                        </div>
                      </div>
                      <a href="product-left-sidebar.html" className="title">
                        Best snakes with hazel nut pack 200gm
                      </a>
                      <p className="cr-price">
                        <span className="new-price">$145</span>{" "}
                        <span className="old-price">$150</span>
                      </p>
                    </div>
                  </div>
                </div>
                <div className="mix bananaleaf col-xxl-3 col-xl-4 col-6 cr-product-box mb-24">
                  <div className="cr-product-card">
                    <div className="cr-product-image">
                      <div className="cr-image-inner zoom-image-hover">
                        <img src={productImage2} alt="product-1" />
                      </div>
                      <div className="cr-side-view">
                        <a href="javascript:void(0)" className="wishlist">
                          <i className="ri-heart-line" />
                        </a>
                        <a
                          className="model-oraganic-product"
                          data-bs-toggle="modal"
                          href="#quickview"
                          role="button"
                        >
                          <i className="ri-eye-line" />
                        </a>
                      </div>
                      <a className="cr-shopping-bag" href="javascript:void(0)">
                        <i className="ri-shopping-bag-line" />
                      </a>
                    </div>
                    <div className="cr-product-details">
                      <div className="cr-brand">
                        <a href="shop-left-sidebar.html">Fruits</a>
                        <div className="cr-star">
                          <i className="ri-star-fill" />
                          <i className="ri-star-fill" />
                          <i className="ri-star-fill" />
                          <i className="ri-star-fill" />
                          <i className="ri-star-line" />
                          <p>(4.5)</p>
                        </div>
                      </div>
                      <a href="product-left-sidebar.html" className="title">
                        Fresh organic apple 1kg simla marming
                      </a>
                      <p className="cr-price">
                        <span className="new-price">$120.25</span>{" "}
                        <span className="old-price">$123.25</span>
                      </p>
                    </div>
                  </div>
                </div>
                <div className="mix vathal col-xxl-3 col-xl-4 col-6 cr-product-box mb-24">
                  <div className="cr-product-card">
                    <div className="cr-product-image">
                      <div className="cr-image-inner zoom-image-hover">
                        <img src={productImage2} alt="product-1" />
                      </div>
                      <div className="cr-side-view">
                        <a href="javascript:void(0)" className="wishlist">
                          <i className="ri-heart-line" />
                        </a>
                        <a
                          className="model-oraganic-product"
                          data-bs-toggle="modal"
                          href="#quickview"
                          role="button"
                        >
                          <i className="ri-eye-line" />
                        </a>
                      </div>
                      <a className="cr-shopping-bag" href="javascript:void(0)">
                        <i className="ri-shopping-bag-line" />
                      </a>
                    </div>
                    <div className="cr-product-details">
                      <div className="cr-brand">
                        <a href="shop-left-sidebar.html">Bakery</a>
                        <div className="cr-star">
                          <i className="ri-star-fill" />
                          <i className="ri-star-fill" />
                          <i className="ri-star-fill" />
                          <i className="ri-star-fill" />
                          <i className="ri-star-fill" />
                          <p>(5.0)</p>
                        </div>
                      </div>
                      <a href="product-left-sidebar.html" className="title">
                        Delicious white baked fresh bread and toast
                      </a>
                      <p className="cr-price">
                        <span className="new-price">$20</span>{" "}
                        <span className="old-price">$22.10</span>
                      </p>
                    </div>
                  </div>
                </div>
                <div className="mix peanut col-xxl-3 col-xl-4 col-6 cr-product-box mb-24">
                  <div className="cr-product-card">
                    <div className="cr-product-image">
                      <div className="cr-image-inner zoom-image-hover">
                        <img src={productImage11} alt="product-1" />
                      </div>
                      <div className="cr-side-view">
                        <a href="javascript:void(0)" className="wishlist">
                          <i className="ri-heart-line" />
                        </a>
                        <a
                          className="model-oraganic-product"
                          data-bs-toggle="modal"
                          href="#quickview"
                          role="button"
                        >
                          <i className="ri-eye-line" />
                        </a>
                      </div>
                      <a className="cr-shopping-bag" href="javascript:void(0)">
                        <i className="ri-shopping-bag-line" />
                      </a>
                    </div>
                    <div className="cr-product-details">
                      <div className="cr-brand">
                        <a href="shop-left-sidebar.html">Snacks</a>
                        <div className="cr-star">
                          <i className="ri-star-fill" />
                          <i className="ri-star-fill" />
                          <i className="ri-star-fill" />
                          <i className="ri-star-fill" />
                          <i className="ri-star-fill" />
                          <p>(5.0)</p>
                        </div>
                      </div>
                      <a href="product-left-sidebar.html" className="title">
                        Sweet crunchy nut mix 250gm pack
                      </a>
                      <p className="cr-price">
                        <span className="new-price">$120.25</span>{" "}
                        <span className="old-price">$123.25</span>
                      </p>
                    </div>
                  </div>
                </div>
                <div className="mix bananaleaf col-xxl-3 col-xl-4 col-6 cr-product-box mb-24">
                  <div className="cr-product-card">
                    <div className="cr-product-image">
                      <div className="cr-image-inner zoom-image-hover">
                        <img src={productImage3} alt="product-1" />
                      </div>
                      <div className="cr-side-view">
                        <a href="javascript:void(0)" className="wishlist">
                          <i className="ri-heart-line" />
                        </a>
                        <a
                          className="model-oraganic-product"
                          data-bs-toggle="modal"
                          href="#quickview"
                          role="button"
                        >
                          <i className="ri-eye-line" />
                        </a>
                      </div>
                      <a className="cr-shopping-bag" href="javascript:void(0)">
                        <i className="ri-shopping-bag-line" />
                      </a>
                    </div>
                    <div className="cr-product-details">
                      <div className="cr-brand">
                        <a href="shop-left-sidebar.html">Fruits</a>
                        <div className="cr-star">
                          <i className="ri-star-fill" />
                          <i className="ri-star-fill" />
                          <i className="ri-star-fill" />
                          <i className="ri-star-line" />
                          <i className="ri-star-line" />
                          <p>(3.2)</p>
                        </div>
                      </div>
                      <a href="product-left-sidebar.html" className="title">
                        Organic fresh venila farm watermelon 5kg
                      </a>
                      <p className="cr-price">
                        <span className="new-price">$50.30</span>{" "}
                        <span className="old-price">$72.60</span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Popularproducts;

import React from "react";

const Shop = () => {
  return (
    <>
      {/* Breadcrumb */}
      <section className="section-breadcrumb">
        <div className="cr-breadcrumb-image">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="cr-breadcrumb-title">
                  <h2>Shop</h2>
                  <span>
                    {" "}
                    <a href="index.html">Home</a> - Shop
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Shop */}
      <section className="section-shop padding-tb-100">
        <div className="container">
          <div className="row d-none">
            <div className="col-lg-12">
              <div
                className="mb-30"
                data-aos="fade-up"
                data-aos-duration={2000}
                data-aos-delay={400}
              >
                <div className="cr-banner">
                  <h2>Categories</h2>
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
          <div className="row">
            <div
              className="col-12"
              data-aos="fade-up"
              data-aos-duration={2000}
              data-aos-delay={600}
            >
              <div className="row">
                <div className="col-12">
                  <div className="cr-shop-bredekamp">
                    <div className="cr-toggle">
                      <a href="javascript:void(0)" className="shop_side_view">
                        <i className="ri-filter-line" />
                      </a>
                      <a
                        href="javascript:void(0)"
                        className="gridCol active-grid"
                      >
                        <i className="ri-grid-line" />
                      </a>
                      <a href="javascript:void(0)" className="gridRow">
                        <i className="ri-list-check-2" />
                      </a>
                    </div>
                    <div className="center-content">
                      <span>We found 29 items for you!</span>
                    </div>
                    <div className="cr-select">
                      <label>Sort By :</label>
                      <select
                        className="form-select"
                        aria-label="Default select example"
                      >
                        <option selected="">Featured</option>
                        <option value={1}>One</option>
                        <option value={2}>Two</option>
                        <option value={3}>Three</option>
                        <option value={4}>Four</option>
                        <option value={5}>Five</option>
                      </select>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row col-50 mb-minus-24">
                <div className="col-lg-3 col-6 cr-product-box mb-24">
                  <div className="cr-product-card">
                    <div className="cr-product-image">
                      <div className="cr-image-inner zoom-image-hover">
                        <img src="assets/img/product/1.jpg" alt="product-1" />
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
                      <p className="text">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore lacus vel
                        facilisis.
                      </p>
                      <p className="cr-price">
                        <span className="new-price">$120.25</span>{" "}
                        <span className="old-price">$123.25</span>
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 col-6 cr-product-box mb-24">
                  <div className="cr-product-card">
                    <div className="cr-product-image">
                      <div className="cr-image-inner zoom-image-hover">
                        <img src="assets/img/product/9.jpg" alt="product-1" />
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
                      <p className="text">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore lacus vel
                        facilisis.
                      </p>
                      <p className="cr-price">
                        <span className="new-price">$145</span>{" "}
                        <span className="old-price">$150</span>
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 col-6 cr-product-box mb-24">
                  <div className="cr-product-card">
                    <div className="cr-product-image">
                      <div className="cr-image-inner zoom-image-hover">
                        <img src="assets/img/product/2.jpg" alt="product-1" />
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
                      <p className="text">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore lacus vel
                        facilisis.
                      </p>
                      <p className="cr-price">
                        <span className="new-price">$120.25</span>{" "}
                        <span className="old-price">$123.25</span>
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 col-6 cr-product-box mb-24">
                  <div className="cr-product-card">
                    <div className="cr-product-image">
                      <div className="cr-image-inner zoom-image-hover">
                        <img src="assets/img/product/3.jpg" alt="product-1" />
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
                      <p className="text">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore lacus vel
                        facilisis.
                      </p>
                      <p className="cr-price">
                        <span className="new-price">$50.30</span>{" "}
                        <span className="old-price">$72.60</span>
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 col-6 cr-product-box mb-24">
                  <div className="cr-product-card">
                    <div className="cr-product-image">
                      <div className="cr-image-inner zoom-image-hover">
                        <img src="assets/img/product/10.jpg" alt="product-1" />
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
                      <p className="text">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore lacus vel
                        facilisis.
                      </p>
                      <p className="cr-price">
                        <span className="new-price">$120.25</span>{" "}
                        <span className="old-price">$123.25</span>
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 col-6 cr-product-box mb-24">
                  <div className="cr-product-card">
                    <div className="cr-product-image">
                      <div className="cr-image-inner zoom-image-hover">
                        <img src="assets/img/product/17.jpg" alt="product-1" />
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
                      <p className="text">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore lacus vel
                        facilisis.
                      </p>
                      <p className="cr-price">
                        <span className="new-price">$20</span>{" "}
                        <span className="old-price">$22.10</span>
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 col-6 cr-product-box mb-24">
                  <div className="cr-product-card">
                    <div className="cr-product-image">
                      <div className="cr-image-inner zoom-image-hover">
                        <img src="assets/img/product/13.jpg" alt="product-1" />
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
                      <p className="text">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore lacus vel
                        facilisis.
                      </p>
                      <p className="cr-price">
                        <span className="new-price">$20</span>{" "}
                        <span className="old-price">$22.10</span>
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 col-6 cr-product-box mb-24">
                  <div className="cr-product-card">
                    <div className="cr-product-image">
                      <div className="cr-image-inner zoom-image-hover">
                        <img src="assets/img/product/11.jpg" alt="product-1" />
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
                      <p className="text">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore lacus vel
                        facilisis.
                      </p>
                      <p className="cr-price">
                        <span className="new-price">$20</span>{" "}
                        <span className="old-price">$22.10</span>
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 col-6 cr-product-box mb-24">
                  <div className="cr-product-card">
                    <div className="cr-product-image">
                      <div className="cr-image-inner zoom-image-hover">
                        <img src="assets/img/product/12.jpg" alt="product-1" />
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
                      <p className="text">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore lacus vel
                        facilisis.
                      </p>
                      <p className="cr-price">
                        <span className="new-price">$20</span>{" "}
                        <span className="old-price">$22.10</span>
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 col-6 cr-product-box mb-24">
                  <div className="cr-product-card">
                    <div className="cr-product-image">
                      <div className="cr-image-inner zoom-image-hover">
                        <img src="assets/img/product/1.jpg" alt="product-1" />
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
                      <p className="text">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore lacus vel
                        facilisis.
                      </p>
                      <p className="cr-price">
                        <span className="new-price">$120.25</span>{" "}
                        <span className="old-price">$123.25</span>
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 col-6 cr-product-box mb-24">
                  <div className="cr-product-card">
                    <div className="cr-product-image">
                      <div className="cr-image-inner zoom-image-hover">
                        <img src="assets/img/product/9.jpg" alt="product-1" />
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
                      <p className="text">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore lacus vel
                        facilisis.
                      </p>
                      <p className="cr-price">
                        <span className="new-price">$145</span>{" "}
                        <span className="old-price">$150</span>
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 col-6 cr-product-box mb-24">
                  <div className="cr-product-card">
                    <div className="cr-product-image">
                      <div className="cr-image-inner zoom-image-hover">
                        <img src="assets/img/product/2.jpg" alt="product-1" />
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
                      <p className="text">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore lacus vel
                        facilisis.
                      </p>
                      <p className="cr-price">
                        <span className="new-price">$120.25</span>{" "}
                        <span className="old-price">$123.25</span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <nav aria-label="..." className="cr-pagination">
                <ul className="pagination">
                  <li className="page-item disabled">
                    <span className="page-link">Previous</span>
                  </li>
                  <li className="page-item active" aria-current="page">
                    <span className="page-link">1</span>
                  </li>
                  <li className="page-item">
                    <a className="page-link" href="#">
                      2
                    </a>
                  </li>
                  <li className="page-item">
                    <a className="page-link" href="#">
                      3
                    </a>
                  </li>
                  <li className="page-item">
                    <a className="page-link" href="#">
                      Next
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Shop;

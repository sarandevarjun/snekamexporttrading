import React from "react";
import LogoImage from "../assets/img/logo/logo.png";
const Header = () => {
  return (
    <>
      {/* Loader */}
      {/* <div id="cr-overlay">
        <span className="loader" />
      </div> 
      <header>
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="top-header">
                <a href="/" className="cr-logo">
                  <img src={LogoImage} alt="logo" className="logo" />
                  <img src={LogoImage} alt="logo" className="dark-logo" />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="cr-fix" id="cr-main-menu-desk">
          <div className="container">
            <div className="cr-menu-list">
              <nav className="navbar navbar-expand-lg">
                <div
                  className="collapse navbar-collapse"
                  id="navbarSupportedContent"
                >
                  <ul className="navbar-nav">
                    <li className="nav-item">
                      <a className="nav-link" href="/">
                        Home
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="/about">
                        About Us
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="/products">
                        Our Products
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="/gallery">
                        Gallery
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="/contact">
                        Contact Us
                      </a>
                    </li>
                  </ul>
                </div>
              </nav>
              <div className="cr-calling">
                <i className="ri-phone-line" />
                <a href="javascript:void(0)">+123 ( 456 ) ( 7890 )</a>
              </div>
            </div>
          </div>
        </div>
      </header>
      
      <div className="cr-sidebar-overlay" />
      <div id="cr_mobile_menu" className="cr-side-cart cr-mobile-menu">
        <div className="cr-menu-title">
          <span className="menu-title">My Menu</span>
          <button type="button" className="cr-close">
            ×
          </button>
        </div>
        <div className="cr-menu-inner">
          <div className="cr-menu-content">
            <ul>
              <li className="dropdown drop-list">
                <a href="/">Home</a>
              </li>
              <li className="dropdown drop-list">
                <span className="menu-toggle" />
                <a href="javascript:void(0)" className="dropdown-list">
                  Category
                </a>
                <ul className="sub-menu">
                  <li>
                    <a href="shop-left-sidebar">Shop Left sidebar</a>
                  </li>
                  <li>
                    <a href="shop-right-sidebar">Shop Right sidebar</a>
                  </li>
                  <li>
                    <a href="shop-full-width">Full Width</a>
                  </li>
                </ul>
              </li>
              <li className="dropdown drop-list">
                <span className="menu-toggle" />
                <a href="javascript:void(0)" className="dropdown-list">
                  product
                </a>
                <ul className="sub-menu">
                  <li>
                    <a href="product-left-sidebar">product Left sidebar</a>
                  </li>
                  <li>
                    <a href="product-right-sidebar">product Right sidebar</a>
                  </li>
                  <li>
                    <a href="product-full-width">Product Full Width </a>
                  </li>
                </ul>
              </li>
              <li className="dropdown drop-list">
                <span className="menu-toggle" />
                <a href="javascript:void(0)" className="dropdown-list">
                  Pages
                </a>
                <ul className="sub-menu">
                  <li>
                    <a href="/about">About Us</a>
                  </li>
                  <li>
                    <a href="/contact-us">Contact Us</a>
                  </li>
                  <li>
                    <a href="/cart">Cart</a>
                  </li>
                  <li>
                    <a href="/checkout">Checkout</a>
                  </li>
                  <li>
                    <a href="/track-order">Track Order</a>
                  </li>
                  <li>
                    <a href="/wishlist">Wishlist</a>
                  </li>
                  <li>
                    <a href="/faq">Faq</a>
                  </li>
                  <li>
                    <a href="/login">Login</a>
                  </li>
                  <li>
                    <a href="/register">Register</a>
                  </li>
                  <li>
                    <a href="/policy">Policy</a>
                  </li>
                </ul>
              </li>
              <li className="dropdown drop-list">
                <span className="menu-toggle" />
                <a href="javascript:void(0)" className="dropdown-list">
                  Blog
                </a>
                <ul className="sub-menu">
                  <li>
                    <a href="blog-left-sidebar">Left Sidebar</a>
                  </li>
                  <li>
                    <a href="blog-right-sidebar">Right Sidebar</a>
                  </li>
                  <li>
                    <a href="blog-full-width">Full Width</a>
                  </li>
                  <li>
                    <a href="blog-detail-left-sidebar">Detail Left Sidebar</a>
                  </li>
                  <li>
                    <a href="blog-detail-right-sidebar">Detail Right Sidebar</a>
                  </li>
                  <li>
                    <a href="blog-detail-full-width">Detail Full Width</a>
                  </li>
                </ul>
              </li>
              <li className="dropdown drop-list">
                <span className="menu-toggle" />
                <a href="javascript:void(0)">Element</a>
                <ul className="sub-menu">
                  <li>
                    <a href="elements-products">Products</a>
                  </li>
                  <li>
                    <a href="elements-typography">Typography</a>
                  </li>
                  <li>
                    <a href="elements-buttons">Buttons</a>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
  </div>*/}
      <header>
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="top-header">
                <a href="/" className="cr-logo">
                  <img src={LogoImage} alt="logo" className="logo" />
                  <img src={LogoImage} alt="logo" className="dark-logo" />
                </a>

                <div className="cr-right-bar" style={{ display: "none" }}>
                  <ul className="navbar-nav">
                    <li className="nav-item dropdown">
                      <a
                        className="nav-link dropdown-toggle cr-right-bar-item"
                        href="javascript:void(0)"
                      >
                        <i className="ri-user-3-line" />
                        <span>Account</span>
                      </a>
                      <ul className="dropdown-menu">
                        <li>
                          <a className="dropdown-item" href="register.html">
                            Register
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="checkout.html">
                            Checkout
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="login.html">
                            Login
                          </a>
                        </li>
                      </ul>
                    </li>
                  </ul>
                  <a href="wishlist.html" className="cr-right-bar-item">
                    <i className="ri-heart-3-line" />
                    <span>Wishlist</span>
                  </a>
                  <a
                    href="javascript:void(0)"
                    className="cr-right-bar-item Shopping-toggle"
                  >
                    <i className="ri-shopping-cart-line" />
                    <span>Cart</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="cr-fix" id="cr-main-menu-desk">
          <div className="container">
            <div className="cr-menu-list">
              <div className="cr-category-icon-block">
                <div className="cr-category-menu">
                  <div className="cr-category-toggle">
                    <i className="ri-menu-2-line" />
                  </div>
                </div>
                <div className="cr-cat-dropdown">
                  <div className="cr-cat-block">
                    <div className="cr-cat-tab">
                      <div
                        className="cr-tab-list nav flex-column nav-pills"
                        id="v-pills-tab"
                        role="tablist"
                        aria-orientation="vertical"
                      >
                        <button
                          className="nav-link active"
                          id="v-pills-home-tab"
                          data-bs-toggle="pill"
                          data-bs-target="#v-pills-home"
                          type="button"
                          role="tab"
                          aria-controls="v-pills-home"
                          aria-selected="true"
                        >
                          Peanut &amp; Candy
                        </button>
                        <button
                          className="nav-link"
                          id="v-pills-profile-tab"
                          data-bs-toggle="pill"
                          data-bs-target="#v-pills-profile"
                          type="button"
                          role="tab"
                          aria-controls="v-pills-profile"
                          aria-selected="false"
                          tabIndex={-1}
                        >
                          Papad &amp; Vathal
                        </button>
                        <button
                          className="nav-link"
                          id="v-pills-messages-tab"
                          data-bs-toggle="pill"
                          data-bs-target="#v-pills-messages"
                          type="button"
                          role="tab"
                          aria-controls="v-pills-messages"
                          aria-selected="false"
                          tabIndex={-1}
                        >
                          Banana Leaf
                        </button>
                        <button
                          className="nav-link"
                          id="v-pills-settings-tab"
                          data-bs-toggle="pill"
                          data-bs-target="#v-pills-settings"
                          type="button"
                          role="tab"
                          aria-controls="v-pills-settings"
                          aria-selected="false"
                          tabIndex={-1}
                        >
                          Papad
                        </button>
                        <a className="nav-link" href="shop-left-sidebar.html">
                          View All
                        </a>
                      </div>
                      <div className="tab-content" id="v-pills-tabContent">
                        <div
                          className="tab-pane fade show active"
                          id="v-pills-home"
                          role="tabpanel"
                          aria-labelledby="v-pills-home-tab"
                        >
                          <div className="tab-list row">
                            <div className="col">
                              <h6 className="cr-col-title">Dairy</h6>
                              <ul className="cat-list">
                                <li>
                                  <a href="shop-left-sidebar.html">Milk</a>
                                </li>
                                <li>
                                  <a href="shop-left-sidebar.html">Ice cream</a>
                                </li>
                                <li>
                                  <a href="shop-left-sidebar.html">Cheese</a>
                                </li>
                                <li>
                                  <a href="shop-left-sidebar.html">
                                    Frozen custard
                                  </a>
                                </li>
                                <li>
                                  <a href="shop-left-sidebar.html">
                                    Frozen yogurt
                                  </a>
                                </li>
                              </ul>
                            </div>
                            <div className="col">
                              <h6 className="cr-col-title">Vathal</h6>
                              <ul className="cat-list">
                                <li>
                                  <a href="shop-left-sidebar.html">Vathal 1</a>
                                </li>
                                <li>
                                  <a href="shop-left-sidebar.html">Vathal 2</a>
                                </li>
                                <li>
                                  <a href="shop-left-sidebar.html">Vathal 3</a>
                                </li>
                                <li>
                                  <a href="shop-left-sidebar.html">Vathal 4</a>
                                </li>
                                <li>
                                  <a href="shop-left-sidebar.html">Vathal 5</a>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                        <div
                          className="tab-pane fade"
                          id="v-pills-profile"
                          role="tabpanel"
                          aria-labelledby="v-pills-profile-tab"
                        >
                          <div className="tab-list row">
                            <div className="col">
                              <h6 className="cr-col-title">Banana</h6>
                              <ul className="cat-list">
                                <li>
                                  <a href="shop-left-sidebar.html">
                                    Fresh Banana Leaf
                                  </a>
                                </li>
                                <li>
                                  <a href="shop-left-sidebar.html">
                                    Fresh Banana Leaf 2
                                  </a>
                                </li>
                                <li>
                                  <a href="shop-left-sidebar.html">
                                    Fresh Banana Leaf{" "}
                                  </a>
                                </li>
                                <li>
                                  <a href="shop-left-sidebar.html">
                                    Fresh Banana Leaf{" "}
                                  </a>
                                </li>
                                <li>
                                  <a href="shop-left-sidebar.html">
                                    Fresh Banana Leaf{" "}
                                  </a>
                                </li>
                              </ul>
                            </div>
                            <div className="col">
                              <h6 className="cr-col-title">Peanut</h6>
                              <ul className="cat-list">
                                <li>
                                  <a href="shop-left-sidebar.html">Peanut 1</a>
                                </li>
                                <li>
                                  <a href="shop-left-sidebar.html">Peanut 2</a>
                                </li>
                                <li>
                                  <a href="shop-left-sidebar.html">Peanut 3</a>
                                </li>
                                <li>
                                  <a href="shop-left-sidebar.html">Peanut 4 </a>
                                </li>
                                <li>
                                  <a href="shop-left-sidebar.html">Peanut 5</a>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                        <div
                          className="tab-pane fade"
                          id="v-pills-messages"
                          role="tabpanel"
                          aria-labelledby="v-pills-messages-tab"
                        >
                          <div className="tab-list row">
                            <div className="col">
                              <h6 className="cr-col-title">Papad</h6>
                              <ul className="cat-list">
                                <li>
                                  <a href="shop-left-sidebar.html">Product 1</a>
                                </li>
                                <li>
                                  <a href="shop-left-sidebar.html">Product 1</a>
                                </li>
                                <li>
                                  <a href="shop-left-sidebar.html">Product 1</a>
                                </li>
                                <li>
                                  <a href="shop-left-sidebar.html">Popcorn</a>
                                </li>
                                <li>
                                  <a href="shop-left-sidebar.html">Product 1</a>
                                </li>
                              </ul>
                            </div>
                            <div className="col">
                              <h6 className="cr-col-title">Nuts Products</h6>
                              <ul className="cat-list">
                                <li>
                                  <a href="shop-left-sidebar.html">Product 1</a>
                                </li>
                                <li>
                                  <a href="shop-left-sidebar.html">Product 1</a>
                                </li>
                                <li>
                                  <a href="shop-left-sidebar.html">Product 1</a>
                                </li>
                                <li>
                                  <a href="shop-left-sidebar.html">Product 1</a>
                                </li>
                                <li>
                                  <a href="shop-left-sidebar.html">Product 1</a>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                        <div
                          className="tab-pane fade"
                          id="v-pills-settings"
                          role="tabpanel"
                          aria-labelledby="v-pills-settings-tab"
                        >
                          <div className="tab-list row">
                            <div className="col">
                              <h6 className="cr-col-title">Fresh Products</h6>
                              <ul className="cat-list">
                                <li>
                                  <a href="shop-left-sidebar.html">Product 1</a>
                                </li>
                                <li>
                                  <a href="shop-left-sidebar.html">Product 1</a>
                                </li>
                                <li>
                                  <a href="shop-left-sidebar.html">Product 1</a>
                                </li>
                                <li>
                                  <a href="shop-left-sidebar.html">Product 1</a>
                                </li>
                                <li>
                                  <a href="shop-left-sidebar.html">Product 1</a>
                                </li>
                              </ul>
                            </div>
                            <div className="col">
                              <h6 className="cr-col-title">
                                Dry food products
                              </h6>
                              <ul className="cat-list">
                                <li>
                                  <a href="shop-left-sidebar.html">Product 1</a>
                                </li>
                                <li>
                                  <a href="shop-left-sidebar.html">Product 2</a>
                                </li>
                                <li>
                                  <a href="shop-left-sidebar.html">Product 6</a>
                                </li>
                                <li>
                                  <a href="shop-left-sidebar.html">Product 3</a>
                                </li>
                                <li>
                                  <a href="shop-left-sidebar.html">Product 4</a>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <nav className="navbar navbar-expand-lg">
                <a
                  href="javascript:void(0)"
                  className="navbar-toggler shadow-none"
                >
                  <i className="ri-menu-3-line" />
                </a>
                <div className="cr-header-buttons">
                  <ul className="navbar-nav">
                    <li className="nav-item dropdown">
                      <a className="nav-link" href="javascript:void(0)">
                        <i className="ri-user-3-line" />
                      </a>
                      <ul className="dropdown-menu">
                        <li>
                          <a className="dropdown-item" href="register.html">
                            Register
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="checkout.html">
                            Checkout
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="login.html">
                            Login
                          </a>
                        </li>
                      </ul>
                    </li>
                  </ul>
                  <a href="wishlist.html" className="cr-right-bar-item">
                    <i className="ri-heart-line" />
                  </a>
                  <a
                    href="javascript:void(0)"
                    className="cr-right-bar-item Shopping-toggle"
                  >
                    <i className="ri-shopping-cart-line" />
                  </a>
                </div>
                <div
                  className="collapse navbar-collapse"
                  id="navbarSupportedContent"
                >
                  <ul className="navbar-nav">
                    <li className="nav-item">
                      <a className="nav-link" href="/">
                        Home
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="/about">
                        About Us
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="/products">
                        Our Products
                      </a>
                    </li>
                    {/* <li className="nav-item">
                      <a className="nav-link" href="/gallery">
                        Gallery
                      </a>
                    </li> */}
                    <li className="nav-item">
                      <a className="nav-link" href="/contact">
                        Contact Us
                      </a>
                    </li>
                  </ul>
                </div>
              </nav>
              <div className="cr-calling">
                <i className="ri-phone-line" />
                <a href="tel:+916384946793">+91 6384946793</a>
              </div>
            </div>
          </div>
        </div>
      </header>
      {/* Mobile menu */}
      <div className="cr-sidebar-overlay" />
      <div id="cr_mobile_menu" className="cr-side-cart cr-mobile-menu">
        <div className="cr-menu-title">
          <span className="menu-title">My Menu</span>
          <button type="button" className="cr-close">
            ×
          </button>
        </div>
        <div className="cr-menu-inner">
          <div className="cr-menu-content">
            <ul>
              <li className="dropdown drop-list">
                <a href="/">Home</a>
              </li>
              <li className="dropdown drop-list">
                <span className="menu-toggle" />
                <a href="javascript:void(0)" className="dropdown-list">
                  Category
                </a>
                <ul className="sub-menu">
                  <li>
                    <a href="shop-left-sidebar.html">Shop Left sidebar</a>
                  </li>
                  <li>
                    <a href="shop-right-sidebar.html">Shop Right sidebar</a>
                  </li>
                  <li>
                    <a href="shop-full-width.html">Full Width</a>
                  </li>
                </ul>
              </li>
              <li className="dropdown drop-list">
                <span className="menu-toggle" />
                <a href="javascript:void(0)" className="dropdown-list">
                  product
                </a>
                <ul className="sub-menu">
                  <li>
                    <a href="product-left-sidebar.html">product Left sidebar</a>
                  </li>
                  <li>
                    <a href="product-right-sidebar.html">
                      product Right sidebar
                    </a>
                  </li>
                  <li>
                    <a href="product-full-width.html">Product Full Width </a>
                  </li>
                </ul>
              </li>
              <li className="dropdown drop-list">
                <span className="menu-toggle" />
                <a href="javascript:void(0)" className="dropdown-list">
                  Pages
                </a>
                <ul className="sub-menu">
                  <li>
                    <a href="/about">About Us</a>
                  </li>
                  <li>
                    <a href="/contact">Contact Us</a>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;

import React from "react";

//Cateogories Image
import categoryImage1 from "../assets/img/categories/1.jpg";
import categoryImage2 from "../assets/img/categories/2.jpg";
import categoryImage3 from "../assets/img/categories/3.jpg";
import categoryImage4 from "../assets/img/categories/4.jpg";
import categoryImage5 from "../assets/img/categories/5.jpg";
import categoryImage6 from "../assets/img/categories/6.jpg";
import categoryImage7 from "../assets/img/categories/7.jpg";
import categoryImage8 from "../assets/img/categories/8.jpg";
import categoryImage9 from "../assets/img/categories/9.jpg";
import categoryImage10 from "../assets/img/categories/10.jpg";

const CategoriesSection = () => {
  return (
    <section className="section-categories padding-b-100">
      <div className="container">
        <div className="row mb-minus-24">
          <div className="col-lg-4 col-12 mb-24">
            <div className="cr-categories">
              <ul className="nav nav-tabs" id="myTab" role="tablist">
                <li className="nav-item" role="presentation">
                  <button
                    className="nav-link active center-categories-inner"
                    id="cake_milk-tab"
                    data-bs-toggle="tab"
                    data-bs-target="#cake_milk"
                    type="button"
                    role="tab"
                    aria-controls="cake_milk"
                    aria-selected="true"
                  >
                    Papad <span>(15 items)</span>
                  </button>
                </li>
                <li className="nav-item" role="presentation">
                  <button
                    className="nav-link center-categories-inner"
                    id="meat-tab"
                    data-bs-toggle="tab"
                    data-bs-target="#meat"
                    type="button"
                    role="tab"
                    aria-controls="meat"
                    aria-selected="false"
                    tabIndex="-1"
                  >
                    Fresh Banana Leaf <span>(5 items)</span>
                  </button>
                </li>
                <li className="nav-item" role="presentation">
                  <button
                    className="nav-link center-categories-inner"
                    id="Vegetables-tab"
                    data-bs-toggle="tab"
                    data-bs-target="#Vegetables"
                    type="button"
                    role="tab"
                    aria-controls="Vegetables"
                    aria-selected="false"
                    tabIndex="-1"
                  >
                    Vathal <span>(25 items)</span>
                  </button>
                </li>
                <li className="nav-item" role="presentation">
                  <button
                    className="nav-link center-categories-inner"
                    id="Custard-tab"
                    data-bs-toggle="tab"
                    data-bs-target="#Custard"
                    type="button"
                    role="tab"
                    aria-controls="Custard"
                    aria-selected="false"
                    tabIndex="-1"
                  >
                    Peanut <span>(5 items)</span>
                  </button>
                </li>

                <li className="nav-item" role="presentation">
                  <a
                    className="center-categories-inner cr-view-more"
                    href="shop-left-sidebar.html"
                  >
                    View More
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-8 col-12 mb-24">
            <div className="tab-content" id="myTabContent">
              <div
                className="tab-pane fade active show"
                id="cake_milk"
                role="tabpanel"
                aria-labelledby="cake_milk-tab"
              >
                <div className="row mb-minus-24">
                  <div className="col-6 cr-categories-box mb-24">
                    <div className="cr-side-categories">
                      <div className="categories-inner">
                        <h4>
                          50
                          <span>
                            <small>%</small>
                            <small>Off</small>
                          </span>
                        </h4>
                      </div>
                      <div className="categories-contain">
                        <div className="categories-text">
                          <h5>Cake</h5>
                        </div>
                        <div className="categories-button">
                          <a
                            href="shop-left-sidebar.html"
                            className="cr-button"
                          >
                            shop now
                          </a>
                        </div>
                      </div>
                      <img src={categoryImage3} alt="categories-3" />
                    </div>
                  </div>
                  <div className="col-6 cr-categories-box mb-24">
                    <div className="cr-side-categories">
                      <div className="categories-inner">
                        <h4>
                          40
                          <span>
                            <small>%</small>
                            <small>Off</small>
                          </span>
                        </h4>
                      </div>
                      <div className="categories-contain">
                        <div className="categories-text">
                          <h5>Milk</h5>
                        </div>
                        <div className="categories-button">
                          <a
                            href="shop-left-sidebar.html"
                            className="cr-button"
                          >
                            shop now
                          </a>
                        </div>
                      </div>
                      <img src={categoryImage4} alt="categories-4" />
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="tab-pane fade"
                id="meat"
                role="tabpanel"
                aria-labelledby="meat-tab"
              >
                <div className="row mb-minus-24">
                  <div className="col-6 cr-categories-box">
                    <div className="cr-side-categories">
                      <div className="categories-inner">
                        <h4>
                          35
                          <span>
                            <small>%</small>
                            <small>Off</small>
                          </span>
                        </h4>
                      </div>
                      <div className="categories-contain">
                        <div className="categories-text">
                          <h5>Fish Meat</h5>
                        </div>
                        <div className="categories-button">
                          <a
                            href="shop-left-sidebar.html"
                            className="cr-button"
                          >
                            shop now
                          </a>
                        </div>
                      </div>
                      <img src={categoryImage1} alt="categories-1" />
                    </div>
                  </div>
                  <div className="col-6 cr-categories-box">
                    <div className="cr-side-categories">
                      <div className="categories-inner">
                        <h4>
                          24
                          <span>
                            <small>%</small>
                            <small>Off</small>
                          </span>
                        </h4>
                      </div>
                      <div className="categories-contain">
                        <div className="categories-text">
                          <h5>Fresh Meat</h5>
                        </div>
                        <div className="categories-button">
                          <a
                            href="shop-left-sidebar.html"
                            className="cr-button"
                          >
                            shop now
                          </a>
                        </div>
                      </div>
                      <img src={categoryImage2} alt="categories-2" />
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="tab-pane fade"
                id="Vegetables"
                role="tabpanel"
                aria-labelledby="Vegetables-tab"
              >
                <div className="row mb-minus-24">
                  <div className="col-6 cr-categories-box mb-24">
                    <div className="cr-side-categories">
                      <div className="categories-inner">
                        <h4>
                          45
                          <span>
                            <small>%</small>
                            <small>Off</small>
                          </span>
                        </h4>
                      </div>
                      <div className="categories-contain">
                        <div className="categories-text">
                          <h5>Coriander</h5>
                        </div>
                        <div className="categories-button">
                          <a
                            href="shop-left-sidebar.html"
                            className="cr-button"
                          >
                            shop now
                          </a>
                        </div>
                      </div>
                      <img src={categoryImage5} alt="categories-5" />
                    </div>
                  </div>
                  <div className="col-6 cr-categories-box mb-24">
                    <div className="cr-side-categories">
                      <div className="categories-inner">
                        <h4>
                          20
                          <span>
                            <small>%</small>
                            <small>Off</small>
                          </span>
                        </h4>
                      </div>
                      <div className="categories-contain">
                        <div className="categories-text">
                          <h5>Broccoli</h5>
                        </div>
                        <div className="categories-button">
                          <a
                            href="shop-left-sidebar.html"
                            className="cr-button"
                          >
                            shop now
                          </a>
                        </div>
                      </div>
                      <img src={categoryImage6} alt="categories-6" />
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="tab-pane fade"
                id="Custard"
                role="tabpanel"
                aria-labelledby="Custard-tab"
              >
                <div className="row mb-minus-24">
                  <div className="col-6 cr-categories-box mb-24">
                    <div className="cr-side-categories">
                      <div className="categories-inner">
                        <h4>
                          30
                          <span>
                            <small>%</small>
                            <small>Off</small>
                          </span>
                        </h4>
                      </div>
                      <div className="categories-contain">
                        <div className="categories-text">
                          <h5>Apple</h5>
                        </div>
                        <div className="categories-button">
                          <a
                            href="shop-left-sidebar.html"
                            className="cr-button"
                          >
                            shop now
                          </a>
                        </div>
                      </div>
                      <img src={categoryImage7} alt="categories-7" />
                    </div>
                  </div>
                  <div className="col-6 cr-categories-box mb-24">
                    <div className="cr-side-categories">
                      <div className="categories-inner">
                        <h4>
                          25
                          <span>
                            <small>%</small>
                            <small>Off</small>
                          </span>
                        </h4>
                      </div>
                      <div className="categories-contain">
                        <div className="categories-text">
                          <h5>Mango</h5>
                        </div>
                        <div className="categories-button">
                          <a
                            href="shop-left-sidebar.html"
                            className="cr-button"
                          >
                            shop now
                          </a>
                        </div>
                      </div>
                      <img src={categoryImage8} alt="categories-8" />
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="tab-pane fade"
                id="Strawberry"
                role="tabpanel"
                aria-labelledby="Strawberry-tab"
              >
                <div className="row mb-minus-24">
                  <div className="col-6 cr-categories-box mb-24">
                    <div className="cr-side-categories">
                      <div className="categories-inner">
                        <h4>
                          33
                          <span>
                            <small>%</small>
                            <small>Off</small>
                          </span>
                        </h4>
                      </div>
                      <div className="categories-contain">
                        <div className="categories-text">
                          <h5>Strawberry</h5>
                        </div>
                        <div className="categories-button">
                          <a
                            href="shop-left-sidebar.html"
                            className="cr-button"
                          >
                            shop now
                          </a>
                        </div>
                      </div>
                      <img src={categoryImage9} alt="categories-9" />
                    </div>
                  </div>
                  <div className="col-6 cr-categories-box mb-24">
                    <div className="cr-side-categories">
                      <div className="categories-inner">
                        <h4>
                          15
                          <span>
                            <small>%</small>
                            <small>Off</small>
                          </span>
                        </h4>
                      </div>
                      <div className="categories-contain">
                        <div className="categories-text">
                          <h5>Strawberry</h5>
                        </div>
                        <div className="categories-button">
                          <a
                            href="shop-left-sidebar.html"
                            className="cr-button"
                          >
                            shop now
                          </a>
                        </div>
                      </div>
                      <img src={categoryImage10} alt="categories-10" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CategoriesSection;

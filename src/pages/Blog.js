import React from "react";

const Blog = () => {
  return (
    <>
      {/* Testimonial */}
      <section className="section-testimonial padding-b-100">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div
                className="mb-30"
                data-aos="fade-up"
                data-aos-duration={2000}
              >
                <div className="cr-banner">
                  <h2>Great Words From People</h2>
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
            <div className="col-lg-12">
              <div className="cr-testimonial-slider swiper-container">
                <div className="swiper-wrapper cr-testimonial-pt-50">
                  <div
                    className="swiper-slide"
                    data-aos="fade-up"
                    data-aos-duration={2000}
                  >
                    <div className="cr-testimonial">
                      <div className="cr-testimonial-image">
                        <img
                          src="assets/img/testimonial/1.jpg"
                          alt="businessman"
                        />
                      </div>
                      <div className="cr-testimonial-inner">
                        <span>Co Founder</span>
                        <h4 className="title">Stephen Smith</h4>
                        <p>
                          “eiusmpsu dolor sit amet, conse cte tur ng elit, sed
                          do eiusmod tem lacus vel facilisis.”
                        </p>
                        <div className="cr-star">
                          <i className="ri-star-fill" />
                          <i className="ri-star-fill" />
                          <i className="ri-star-fill" />
                          <i className="ri-star-fill" />
                          <i className="ri-star-fill" />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="swiper-slide"
                    data-aos="fade-up"
                    data-aos-duration={2000}
                  >
                    <div className="cr-testimonial">
                      <div className="cr-testimonial-image">
                        <img
                          src="assets/img/testimonial/2.jpg"
                          alt="businessman"
                        />
                      </div>
                      <div className="cr-testimonial-inner">
                        <span>Manager</span>
                        <h4 className="title">Lorem Robinson</h4>
                        <p>
                          “eiusmpsu dolor sit amet, conse cte tur ng elit, sed
                          do eiusmod tem lacus vel facilisis.”
                        </p>
                        <div className="cr-star">
                          <i className="ri-star-fill" />
                          <i className="ri-star-fill" />
                          <i className="ri-star-fill" />
                          <i className="ri-star-fill" />
                          <i className="ri-star-line" />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="swiper-slide"
                    data-aos="fade-up"
                    data-aos-duration={2000}
                  >
                    <div className="cr-testimonial">
                      <div className="cr-testimonial-image">
                        <img
                          src="assets/img/testimonial/3.jpg"
                          alt="businessman"
                        />
                      </div>
                      <div className="cr-testimonial-inner">
                        <span>Team Leader</span>
                        <h4 className="title">Saddika Alard</h4>
                        <p>
                          “eiusmpsu dolor sit amet, conse cte tur ng elit, sed
                          do eiusmod tem lacus vel facilisis.”
                        </p>
                        <div className="cr-star">
                          <i className="ri-star-fill" />
                          <i className="ri-star-fill" />
                          <i className="ri-star-fill" />
                          <i className="ri-star-fill" />
                          <i className="ri-star-fill" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Blog */}
      <section className="section-blog padding-b-100">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div
                className="mb-30"
                data-aos="fade-up"
                data-aos-duration={2000}
              >
                <div className="cr-banner">
                  <h2>Latest News</h2>
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
            <div className="col-lg-12">
              <div className="cr-blog-slider swiper-container">
                <div className="swiper-wrapper">
                  <div
                    className="swiper-slide"
                    data-aos="fade-up"
                    data-aos-duration={2000}
                  >
                    <div className="cr-blog">
                      <div className="cr-blog-content">
                        <span>
                          <code>By Admin</code> |{" "}
                          <a href="blog-left-sidebar.html">Snacks</a>
                        </span>
                        <h5>
                          Urna pretium elit mauris cursus at elit Vestibulum.
                        </h5>
                        <a
                          className="read"
                          href="blog-detail-left-sidebar.html"
                        >
                          Read More
                        </a>
                      </div>
                      <div className="cr-blog-image">
                        <img src="assets/img/blog/2.jpg" alt="blog-2" />
                        <div className="cr-blog-date">
                          <span>
                            10
                            <code>oct</code>
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="swiper-slide"
                    data-aos="fade-up"
                    data-aos-duration={2000}
                  >
                    <div className="cr-blog">
                      <div className="cr-blog-content">
                        <span>
                          <code>By Admin</code> |{" "}
                          <a href="blog-left-sidebar.html">Food</a>
                        </span>
                        <h5>Best guide to Shopping for organic ingredients.</h5>
                        <a
                          className="read"
                          href="blog-detail-left-sidebar.html"
                        >
                          Read More
                        </a>
                      </div>
                      <div className="cr-blog-image">
                        <img src="assets/img/blog/1.jpg" alt="blog-1" />
                        <div className="cr-blog-date">
                          <span>
                            09<code>sep</code>
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="swiper-slide"
                    data-aos="fade-up"
                    data-aos-duration={2000}
                  >
                    <div className="cr-blog">
                      <div className="cr-blog-content">
                        <span>
                          <code>By Admin</code> |{" "}
                          <a href="blog-left-sidebar.html">Snacks</a>
                        </span>
                        <h5>
                          Cursus at elit vestibulum urna pretium elit mauris.
                        </h5>
                        <a
                          className="read"
                          href="blog-detail-left-sidebar.html"
                        >
                          Read More
                        </a>
                      </div>
                      <div className="cr-blog-image">
                        <img src="assets/img/blog/3.jpg" alt="blog-2" />
                        <div className="cr-blog-date">
                          <span>
                            12
                            <code>oct</code>
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="swiper-slide"
                    data-aos="fade-up"
                    data-aos-duration={2000}
                  >
                    <div className="cr-blog">
                      <div className="cr-blog-content">
                        <span>
                          <code>By Admin</code> |{" "}
                          <a href="blog-left-sidebar.html">Vegetable</a>
                        </span>
                        <h5>Condimentum Nam enim bestMorbi odio sodales.</h5>
                        <a
                          className="read"
                          href="blog-detail-left-sidebar.html"
                        >
                          Read More
                        </a>
                      </div>
                      <div className="cr-blog-image">
                        <img src="assets/img/blog/2.jpg" alt="blog-3" />
                        <div className="cr-blog-date">
                          <span>
                            22
                            <code>jan</code>
                          </span>
                        </div>
                      </div>
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

export default Blog;

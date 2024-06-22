import React from "react";
import Services from "../components/Services";
import Productbanner from "../products/Productbanner";
import Blog from "./Blog";
import aboutBannerImage from "../assets/img/product/vision.jpg";
const About = () => {
  return (
    <>
      {/* Breadcrumb */}
      <section className="section-breadcrumb">
        <div className="cr-breadcrumb-image">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="cr-breadcrumb-title">
                  <h2>About Us</h2>
                  <span>
                    {" "}
                    <a href="/">Home</a> - About Us
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-about padding-tb-100">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div
                className="cr-about"
                data-aos="fade-up"
                data-aos-duration={2000}
                data-aos-delay={400}
              >
                <h4 className="heading">About Us!</h4>
                <div className="cr-about-content">
                  <p>
                    Sneham export trading is India’s leading export trading
                    company. We are also known for exporting quality products.
                    We love to export various quality products to our foreign
                    buyers.
                  </p>
                  <p>
                    The product will be exported as per our customer’s
                    requirements. We strive to maintain the highest levels of
                    transparency, accountability and equity on all facets of our
                    operations and interactions, whether it is with our
                    customers, the government and employees.
                  </p>
                  <p>
                    On-Time delivery, trustworthiness, and customer
                    satisfaction. Delivering quality products at the cheapest
                    price in the market. Expert in exporting products across
                    many countries all over the world.
                  </p>
                  <div className="elementor-counter">
                    <div className="row">
                      <div className="col-sm-4 col-12 margin-575">
                        <h4 className="elementor">
                          <span className="elementor-counter-number">600</span>
                          <span className="elementor-suffix">No of</span>
                        </h4>
                        <div className="elementor-counter-title">
                          <span>Vendors</span>
                        </div>
                      </div>
                      <div className="col-sm-4 col-12 margin-575">
                        <h4 className="elementor">
                          <span className="elementor-counter-number">410</span>
                          <span className="elementor-suffix">No of</span>
                        </h4>
                        <div className="elementor-counter-title">
                          <span>Customers</span>
                        </div>
                      </div>
                      <div className="col-sm-4 col-12 margin-575">
                        <h4 className="elementor">
                          <span className="elementor-counter-number">25</span>
                          <span className="elementor-suffix">No of</span>
                        </h4>
                        <div className="elementor-counter-title">
                          <span>Products</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div
                className="cr-about-image"
                data-aos="fade-up"
                data-aos-duration={2000}
                data-aos-delay={800}
              >
                <img src={aboutBannerImage} alt="side-view" />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section
        className="cr-terms-conditions padding-tb-100"
        data-aos="fade-up"
        data-aos-duration={2000}
        data-aos-delay={400}
      >
        <div className="container">
          <div className="row ">
            <div className="col-lg-12">
              <div className="mb-30">
                <div className="cr-banner">
                  <h2>Why Choose Us?</h2>
                </div>
                <div className="cr-banner-sub-title">
                  <p>The trusted source for why choose us</p>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-6">
              <div className="cr-common-wrapper spacing-991">
                <div className="col-sm-12 cr-cgi-block">
                  <div className="cr-cgi-block-inner">
                    <h5 className="cr-cgi-block-title">Quality</h5>
                    <p>
                      Is core at Sneham export trading Products and it is
                      reflected in all aspects of our business.
                    </p>
                  </div>
                </div>
                <div className="col-sm-12 cr-cgi-block">
                  <div className="cr-cgi-block-inner">
                    <h5 className="cr-cgi-block-title">
                      Customer Satisfaction
                    </h5>
                    <p>
                      We value our customers and serve them with great care and
                      professionalism, making sure to satisfy their needs.
                    </p>
                  </div>
                </div>
                <div className="col-sm-12 cr-cgi-block">
                  <div className="cr-cgi-block-inner">
                    <h5 className="cr-cgi-block-title">Our Team</h5>
                    <p>
                      We are backed by a team which forms the foundation of the
                      organization. We have the most industrious professionals
                      such as procurements agents and marketing personnel who
                      work hard to make the best quality ethnic food products
                      reach the clients within the stipulated time frame.{" "}
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 m-t-991">
              <div className="cr-common-wrapper">
                <div className="col-sm-12 cr-cgi-block">
                  <div className="cr-cgi-block-inner">
                    <h5 className="cr-cgi-block-title">Our Mission</h5>
                    <p>
                      We have a mission to meet up to the requirements of
                      modern-day global customer through our value-added
                      products and services.
                    </p>
                  </div>
                </div>
                <div className="col-sm-12 cr-cgi-block">
                  <div className="cr-cgi-block-inner">
                    <h5 className="cr-cgi-block-title">Quality Assurance</h5>
                    <p>
                      Quality is our main concern and it is maintained at every
                      point. All our ethnic food products are procured from the
                      leading companies in the market that manufacture them
                      using the best quality ingredients and checked to ensure
                      freshness, scrumptious taste and no contamination.
                      Moreover, ethnic food products are properly tested for
                      safe consumption and high nutritional content.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Productbanner />
      {/* <Services /> */}
      {/* <Blog /> */}
    </>
  );
};

export default About;

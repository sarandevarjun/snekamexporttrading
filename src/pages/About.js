import React from "react";
import Services from "../components/Services";
import Productbanner from "../products/Productbanner";
import Blog from "./Blog";
import aboutBannerImage from "../assets/img/about/about-us-banner.jpg";
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
                          <span className="elementor-counter-number">1.2</span>
                          <span className="elementor-suffix">k</span>
                        </h4>
                        <div className="elementor-counter-title">
                          <span>Vendors</span>
                        </div>
                      </div>
                      <div className="col-sm-4 col-12 margin-575">
                        <h4 className="elementor">
                          <span className="elementor-counter-number">410</span>
                          <span className="elementor-suffix">k</span>
                        </h4>
                        <div className="elementor-counter-title">
                          <span>Customers</span>
                        </div>
                      </div>
                      <div className="col-sm-4 col-12 margin-575">
                        <h4 className="elementor">
                          <span className="elementor-counter-number">4</span>
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
      <Productbanner />
      <Services />
      <Blog />
    </>
  );
};

export default About;

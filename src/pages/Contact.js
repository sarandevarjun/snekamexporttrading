import React from "react";
import Contactform from "./Contactform";

const Contact = () => {
  return (
    <>
      {/* Breadcrumb */}
      <section className="section-breadcrumb">
        <div className="cr-breadcrumb-image">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="cr-breadcrumb-title">
                  <h2>Contact Us</h2>
                  <span>
                    {" "}
                    <a href="index.html">Home</a> - Contact Us
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-Contact padding-tb-100">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div
                className="mb-30"
                data-aos="fade-up"
                data-aos-duration={2000}
                data-aos-delay={400}
              >
                <div className="cr-banner">
                  <h2>Get in Touch</h2>
                </div>
                <div className="cr-banner-sub-title">
                  <p>
                    You can also reach out to us by phone or email are many
                    variations
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="row mb-minus-24">
            <div
              className="col-lg-4 col-md-6 col-12 mb-24"
              data-aos="fade-up"
              data-aos-duration={2000}
              data-aos-delay={400}
            >
              <div className="cr-info-box">
                <div className="cr-icon">
                  <i className="ri-phone-line" />
                </div>
                <div className="cr-info-content">
                  <h4 className="heading">Contact</h4>
                  <p>
                    <a href="tel:+91 6384946793">
                      <i className="ri-phone-line" /> &nbsp; (+91)-6384946793
                    </a>
                  </p>
                  <p>
                    <a href="javascript:void(0)">
                      <i className="ri-phone-line" /> &nbsp; (+91)-6384946793
                    </a>
                  </p>
                </div>
              </div>
            </div>
            <div
              className="col-lg-4 col-md-6 col-12 mb-24"
              data-aos="fade-up"
              data-aos-duration={2000}
              data-aos-delay={600}
            >
              <div className="cr-info-box">
                <div className="cr-icon">
                  <i className="ri-mail-line" />
                </div>
                <div className="cr-info-content">
                  <h4 className="heading">Mail &amp; Website</h4>
                  <p>
                    <a href="mailto:snehamexporttrading@gmail.com">
                      <i className="ri-mail-line" /> &nbsp;
                      snehamexporttrading@gmail.com
                    </a>
                  </p>
                  <p>
                    <a href="http://www.snehamexporttrading.com">
                      <i className="ri-globe-line" /> &nbsp;
                      www.snehamexporttrading.com
                    </a>
                  </p>
                </div>
              </div>
            </div>
            <div
              className="col-lg-4 col-12 mb-24"
              data-aos="fade-up"
              data-aos-duration={2000}
              data-aos-delay={800}
            >
              <div className="cr-info-box">
                <div className="cr-icon">
                  <i className="ri-map-pin-line" />
                </div>
                <div className="cr-info-content">
                  <h4 className="heading">Address</h4>
                  <p>
                    <a href="javascript:void(0)">
                      <i className="ri-map-pin-line" /> A12, Gladway GreenCity,
                      Main Avenue, Avaniyapuram, Madurai - 12, Tamilnadu.
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="row padding-t-100 mb-minus-24">
            <div
              className="col-md-6 col-12 mb-24"
              data-aos="fade-up"
              data-aos-duration={2000}
              data-aos-delay={400}
            >
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15555.283156372366!2d78.07228913510356!3d9.986765199999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b009cb79e9ff6e5%3A0x5fa9a73cf36d6e08!2sSneham%20Export%20Trading!5e0!3m2!1sen!2sin!4v1647592468922!5m2!1sen!2sin"
                title="maps"
              ></iframe>
            </div>
            <div
              className="col-md-6 col-12 mb-24"
              data-aos="fade-up"
              data-aos-duration={2000}
              data-aos-delay={800}
            >
              <Contactform />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;

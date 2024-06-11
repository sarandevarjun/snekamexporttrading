import React from "react";
import whyUsImg from "../assets/img/about/about-us-banner.jpg";

const Whyus = () => {
  return (
    <>
      <section className="section-popular-product-shape padding-b-10">
        <div className="container" data-aos="fade-up" data-aos-duration={2000}>
          <div className="row">
            <div className="col-lg-12">
              <div className="mb-10">
                <div className="cr-banner">
                  <h2>Why choose us</h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="section-faq padding-tb-100">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="cr-faq-img">
                <img src={whyUsImg} alt="about" />
              </div>
            </div>
            <div className="col-lg-6">
              <div
                className="cr-faq"
                data-aos="fade-up"
                data-aos-duration={2000}
                data-aos-delay={400}
              >
                <div className="accordion" id="accordionExample">
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="heading-1">
                      <button
                        className="accordion-button shadow-none"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapse-1"
                        aria-expanded="true"
                        aria-controls="collapse-1"
                      >
                        Honesty
                      </button>
                    </h2>
                    <div
                      id="collapse-1"
                      className="accordion-collapse collapse show"
                      aria-labelledby="heading-1"
                      data-bs-parent="#accordionExample"
                    >
                      <div className="accordion-body">
                        <p>
                          Ensuring we work & communicate transparently with
                          trust & integrity among our Customers and Employees.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="heading-2">
                      <button
                        className="accordion-button collapsed shadow-none"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapse-2"
                        aria-expanded="false"
                        aria-controls="collapse-2"
                      >
                        Professionalism
                      </button>
                    </h2>
                    <div
                      id="collapse-2"
                      className="accordion-collapse collapse"
                      aria-labelledby="heading-2"
                      data-bs-parent="#accordionExample"
                    >
                      <div className="accordion-body">
                        <p>
                          Dedicated, responsible & accountable for doing the
                          right thing at the right time in the right way.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="heading-3">
                      <button
                        className="accordion-button collapsed shadow-none"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapse-3"
                        aria-expanded="false"
                        aria-controls="collapse-3"
                      >
                        Flexible Prices
                      </button>
                    </h2>
                    <div
                      id="collapse-3"
                      className="accordion-collapse collapse"
                      aria-labelledby="heading-3"
                      data-bs-parent="#accordionExample"
                    >
                      <div className="accordion-body">
                        <p>
                          We want to deliver the best possible product according
                          to your requirements. we have the whole range covered.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="heading-4">
                      <button
                        className="accordion-button collapsed shadow-none"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapse-4"
                        aria-expanded="false"
                        aria-controls="collapse-4"
                      >
                        Quality
                      </button>
                    </h2>
                    <div
                      id="collapse-4"
                      className="accordion-collapse collapse"
                      aria-labelledby="heading-4"
                      data-bs-parent="#accordionExample"
                    >
                      <div className="accordion-body">
                        <p>
                          We are a quality conscious firm renowned in the market
                          for providing the premium quality products.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="heading-5">
                      <button
                        className="accordion-button collapsed shadow-none"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapse-5"
                        aria-expanded="false"
                        aria-controls="collapse-5"
                      >
                        Policy
                      </button>
                    </h2>
                    <div
                      id="collapse-5"
                      className="accordion-collapse collapse"
                      aria-labelledby="heading-5"
                      data-bs-parent="#accordionExample"
                    >
                      <div className="accordion-body">
                        <p>
                          We are accredited with IEC, Udyam, GST certifications
                          which we strictly adhere to.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item" style={{ display: "none" }}>
                    <h2 className="accordion-header" id="heading-6">
                      <button
                        className="accordion-button collapsed shadow-none"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapse-6"
                        aria-expanded="false"
                        aria-controls="collapse-6"
                      >
                        Testing & Evaluation
                      </button>
                    </h2>
                    <div
                      id="collapse-6"
                      className="accordion-collapse collapse"
                      aria-labelledby="heading-6"
                      data-bs-parent="#accordionExample"
                    >
                      <div className="accordion-body">
                        <p>
                          At every single stage during the process, we have a
                          well structured & standard for quality checks.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item" style={{ display: "none" }}>
                    <h2 className="accordion-header" id="heading-7">
                      <button
                        className="accordion-button collapsed shadow-none"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapse-7"
                        aria-expanded="false"
                        aria-controls="collapse-7"
                      >
                        Logistics
                      </button>
                    </h2>
                    <div
                      id="collapse-7"
                      className="accordion-collapse collapse"
                      aria-labelledby="heading-7"
                      data-bs-parent="#accordionExample"
                    >
                      <div className="accordion-body">
                        <p>
                          Scheduled maintenance, time record, prompt delivery,
                          on time delivery etc.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item" style={{ display: "none" }}>
                    <h2 className="accordion-header" id="heading-8">
                      <button
                        className="accordion-button collapsed shadow-none"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapse-8"
                        aria-expanded="false"
                        aria-controls="collapse-8"
                      >
                        Quality Checks
                      </button>
                    </h2>
                    <div
                      id="collapse-8"
                      className="accordion-collapse collapse"
                      aria-labelledby="heading-8"
                      data-bs-parent="#accordionExample"
                    >
                      <div className="accordion-body">
                        <p>
                          We make no compromise on the quality and follow very
                          stringent norms.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item" style={{ display: "none" }}>
                    <h2 className="accordion-header" id="heading-9">
                      <button
                        className="accordion-button collapsed shadow-none"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapse-9"
                        aria-expanded="false"
                        aria-controls="collapse-9"
                      >
                        Packing
                      </button>
                    </h2>
                    <div
                      id="collapse-9"
                      className="accordion-collapse collapse"
                      aria-labelledby="heading-9"
                      data-bs-parent="#accordionExample"
                    >
                      <div className="accordion-body">
                        <p>
                          Weights, Measurement, labelling, bag tests, stitching,
                          sealing, cleaning, sanitation etc.
                        </p>
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

export default Whyus;

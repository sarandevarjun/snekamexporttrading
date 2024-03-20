import React from "react";

const Deal = () => {
  return (
    <>
      {/* Deal */}
      <section className="section-deal padding-b-100">
        <div className="bg-banner-deal">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <div className="cr-deal-rightside">
                  <div
                    className="cr-deal-content"
                    data-aos="fade-up"
                    data-aos-duration={2000}
                  >
                    <span>
                      <code>35%</code> OFF
                    </span>
                    <h4 className="cr-deal-title">
                      Great deal on organic food.
                    </h4>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do maecenas accumsan lacus vel facilisis.{" "}
                    </p>
                    <div id="timer" className="cr-counter">
                      <div className="cr-counter-inner">
                        <h4>
                          <span id="days" />
                          Days
                        </h4>
                        <h4>
                          <span id="hours" />
                          Hrs
                        </h4>
                        <h4>
                          <span id="minutes" />
                          Min
                        </h4>
                        <h4>
                          <span id="seconds" />
                          Sec
                        </h4>
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

export default Deal;

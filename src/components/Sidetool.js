import React from "react";

const Sidetool = () => {
  return (
    <>
      {/* Side-tool */}
      <div className="cr-tool-overlay" />
      <div className="cr-tool">
        <div className="cr-tool-btn">
          <a
            href="javascript:void(0)"
            className="btn-cr-tool result-placeholder"
          >
            <i className="ri-settings-line" />
          </a>
          <div className="color-variant">
            <div className="cr-bar-title">
              <h6>Tools</h6>
              <a href="javascript:void(0)" className="close-tools">
                <i className="ri-close-line" />
              </a>
            </div>
            <div className="cr-tools-detail">
              <div className="heading">
                <h2>Select Color</h2>
              </div>
              <ul className="cr-color">
                <li className="colors c1 active-colors"></li>
                <li className="colors c2"></li>
                <li className="colors c3"></li>
                <li className="colors c4"></li>
                <li className="colors c5"></li>
                <li className="colors c6"></li>
                <li className="colors c7"></li>
                <li className="colors c8"></li>
                <li className="colors c9"></li>
                <li className="colors c10"></li>
              </ul>
            </div>
            <div className="cr-tools-detail">
              <div className="heading">
                <h2>Dark mode</h2>
              </div>
              <ul className="dark-mode">
                <li className="dark"></li>
                <li className="white active-dark-mode"></li>
              </ul>
            </div>
            <div className="cr-tools-detail">
              <div className="heading">
                <h2>Backgrounds</h2>
              </div>
              <ul className="bg-panel">
                <li className="bg-1">
                  <img
                    src="../../assets/img/shape/bg-shape-1.png"
                    alt="bg-shape-1"
                  />
                </li>
                <li className="bg-2">
                  <img
                    src="../../assets/img/shape/bg-shape-2.png"
                    alt="bg-shape-2"
                  />
                </li>
                <li className="bg-3">
                  <img
                    src="../../assets/img/shape/bg-shape-3.png"
                    alt="bg-shape-3"
                  />
                </li>
                <li className="bg-4">
                  <img
                    src="../../assets/img/shape/bg-shape-4.png"
                    alt="bg-shape-4"
                  />
                </li>
                <li className="bg-5">
                  <img
                    src="../../assets/img/shape/bg-shape-5.png"
                    alt="bg-shape-5"
                  />
                </li>
                <li className="bg-6 active-bg-panel">
                  <img
                    src="../../assets/img/shape/bg-shape-6.png"
                    alt="bg-shape-6"
                  />
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidetool;

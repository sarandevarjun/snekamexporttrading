import React from "react";

const Modal = ({ productId, products }) => {
  const selectedProduct = products.find((product) => product.id === productId);

  if (!selectedProduct) {
    return null; // Render nothing if no product is selected
  }
  //console.log("selectedProduct::", selectedProduct);
  //console.log("selectedProduct::Here::", selectedProduct);

  return (
    <>
      {/* Model */}
      <div
        className="modal fade quickview-modal"
        id="quickview"
        aria-hidden="true"
        tabIndex={-1}
      >
        <div className="modal-dialog modal-dialog-centered cr-modal-dialog">
          <div className="modal-content">
            <button
              type="button"
              className="cr-close-model btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            />
            <div className="modal-body">
              <div className="row">
                <div className="col-md-5 col-sm-12 col-xs-12">
                  <div className="zoom-image-hover modal-border-image">
                    <img
                      src={selectedProduct.images}
                      alt="product-tab-2"
                      className="product-image"
                    />
                  </div>
                </div>
                <div className="col-md-7 col-sm-12 col-xs-12">
                  <div className="cr-size-and-weight-contain">
                    <h2 className="heading">{selectedProduct.name}</h2>
                    <p>{selectedProduct.long_description}</p>
                  </div>
                  <div className="cr-size-and-weight">
                    <div className="cr-review-star">
                      <div className="cr-star">
                        <i className="ri-star-fill" />
                        <i className="ri-star-fill" />
                        <i className="ri-star-fill" />
                        <i className="ri-star-fill" />
                        <i className="ri-star-fill" />
                      </div>
                      <p>( 75 Review )</p>
                    </div>
                    {/* <div className="cr-product-price">
                      <span className="new-price">$120.25</span>
                      <span className="old-price">$123.25</span>
                    </div> */}
                    <div className="cr-size-weight">
                      <h5>
                        <span>Size</span>/<span>Weight</span> :
                      </h5>
                      <div className="cr-kg">
                        <ul>
                          <li className="active-color">500gm</li>
                          <li>1kg</li>
                          <li>2kg</li>
                          <li>5kg</li>
                        </ul>
                      </div>
                    </div>
                    <div className="cr-add-card">
                      {/* <div className="cr-qty-main">
                        <input
                          type="text"
                          placeholder="."
                          defaultValue={1}
                          minLength={1}
                          maxLength={20}
                          className="quantity"
                        />
                        <button type="button" id="add_model" className="plus">
                          +
                        </button>
                        <button type="button" id="sub_model" className="minus">
                          -
                        </button>
                      </div> */}
                      <div className="cr-add-button">
                        <a className="cr-button" href="/contact">
                          Contact Us
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Modal;

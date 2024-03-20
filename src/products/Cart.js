import React from "react";

const Cart = () => {
  return (
    <>
      {/* Cart */}
      <div className="cr-cart-overlay" />
      <div className="cr-cart-view">
        <div className="cr-cart-inner">
          <div className="cr-cart-top">
            <div className="cr-cart-title">
              <h6>My Cart</h6>
              <button type="button" className="close-cart">
                ×
              </button>
            </div>
            <ul className="crcart-pro-items">
              <li>
                <a href="product-left-sidebar.html" className="crside_pro_img">
                  <img src="../../assets/img/product/4.jpg" alt="product-1" />
                </a>
                <div className="cr-pro-content">
                  <a
                    href="product-left-sidebar.html"
                    className="cart_pro_title"
                  >
                    Fresh Pomegranate
                  </a>
                  <span className="cart-price">
                    <span>$56.00</span> x 1kg
                  </span>
                  <div className="cr-cart-qty">
                    <div className="cart-qty-plus-minus">
                      <button type="button" className="plus">
                        +
                      </button>
                      <input
                        type="text"
                        placeholder="."
                        defaultValue={1}
                        minLength={1}
                        maxLength={20}
                        className="quantity"
                      />
                      <button type="button" className="minus">
                        -
                      </button>
                    </div>
                  </div>
                  <a href="javascript:void(0)" className="remove">
                    ×
                  </a>
                </div>
              </li>
              <li>
                <a href="product-left-sidebar.html" className="crside_pro_img">
                  <img src="../../assets/img/product/2.jpg" alt="product-2" />
                </a>
                <div className="cr-pro-content">
                  <a
                    href="product-left-sidebar.html"
                    className="cart_pro_title"
                  >
                    Green Apples
                  </a>
                  <span className="cart-price">
                    <span>$75.00</span> x 1kg
                  </span>
                  <div className="cr-cart-qty">
                    <div className="cart-qty-plus-minus">
                      <button type="button" className="plus">
                        +
                      </button>
                      <input
                        type="text"
                        placeholder="."
                        defaultValue={1}
                        minLength={1}
                        maxLength={20}
                        className="quantity"
                      />
                      <button type="button" className="minus">
                        -
                      </button>
                    </div>
                  </div>
                  <a href="javascript:void(0)" className="remove">
                    ×
                  </a>
                </div>
              </li>
              <li>
                <a href="product-left-sidebar.html" className="crside_pro_img">
                  <img src="../../assets/img/product/3.jpg" alt="product-3" />
                </a>
                <div className="cr-pro-content">
                  <a
                    href="product-left-sidebar.html"
                    className="cart_pro_title"
                  >
                    Watermelon - Small
                  </a>
                  <span className="cart-price">
                    <span>$48.00</span> x 5kg
                  </span>
                  <div className="cr-cart-qty">
                    <div className="cart-qty-plus-minus">
                      <button type="button" className="plus">
                        +
                      </button>
                      <input
                        type="text"
                        placeholder="."
                        defaultValue={1}
                        minLength={1}
                        maxLength={20}
                        className="quantity"
                      />
                      <button type="button" className="minus">
                        -
                      </button>
                    </div>
                  </div>
                  <a href="javascript:void(0)" className="remove">
                    ×
                  </a>
                </div>
              </li>
            </ul>
          </div>
          <div className="cr-cart-bottom">
            <div className="cart-sub-total">
              <table className="table cart-table">
                <tbody>
                  <tr>
                    <td className="text-left">Sub-Total :</td>
                    <td className="text-right">$300.00</td>
                  </tr>
                  <tr>
                    <td className="text-left">VAT (20%) :</td>
                    <td className="text-right">$60.00</td>
                  </tr>
                  <tr>
                    <td className="text-left">Total :</td>
                    <td className="text-right primary-color">$360.00</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="cart_btn">
              <a href="cart.html" className="cr-button">
                View Cart
              </a>
              <a href="checkout.html" className="cr-btn-secondary">
                Checkout
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cart;

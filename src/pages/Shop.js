import React, { useState, useEffect } from "react";
import Modal from "../components/Modal";
const Shop = () => {
  const [products, setProducts] = useState([]);
  const [selectedProductId, setSelectedProductId] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        // Import JSON files dynamically
        const bananaLeafData = await import("../data/banana_leaf.json");
        const papadData = await import("../data/papad.json");
        const peanutCandyData = await import("../data/peanut_candy.json");
        const vathalData = await import("../data/vathal.json");

        // Concatenate products from all JSON files
        const allProducts = [
          ...bananaLeafData.default.products,
          ...papadData.default.products,
          ...peanutCandyData.default.products,
          ...vathalData.default.products,
        ];

        // Set products state
        setProducts(allProducts);
        console.log("allProducts::", allProducts);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    // Call the fetchProducts function
    fetchProducts();
  }, []);

  const handleProductClick = (productId) => {
    setSelectedProductId(productId);
  };

  return (
    <>
      <section className="section-breadcrumb">
        <div className="cr-breadcrumb-image">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="cr-breadcrumb-title">
                  <h2>Shop</h2>
                  <span>
                    {" "}
                    <a href="index.html">Home</a> - Shop
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="section-shop padding-tb-100">
        <div className="container">
          <div className="row d-none">
            <div className="col-lg-12">
              <div
                className="mb-30"
                data-aos="fade-up"
                data-aos-duration={2000}
                data-aos-delay={400}
              >
                <div className="cr-banner">
                  <h2>Categories</h2>
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
            <div
              className="col-12"
              data-aos="fade-up"
              data-aos-duration={2000}
              data-aos-delay={600}
            >
              <div className="row">
                <div className="col-12">
                  <div className="cr-shop-bredekamp">
                    <div className="cr-toggle">
                      <a href="javascript:void(0)" className="shop_side_view">
                        <i className="ri-filter-line" />
                      </a>
                      <a
                        href="javascript:void(0)"
                        className="gridCol active-grid"
                      >
                        <i className="ri-grid-line" />
                      </a>
                      <a href="javascript:void(0)" className="gridRow">
                        <i className="ri-list-check-2" />
                      </a>
                    </div>
                    <div className="center-content">
                      <span>We found 29 items for you!</span>
                    </div>
                    <div className="cr-select">
                      <label>Sort By :</label>
                      <select
                        className="form-select"
                        aria-label="Default select example"
                      >
                        <option selected="">Featured</option>
                        <option value={1}>One</option>
                        <option value={2}>Two</option>
                        <option value={3}>Three</option>
                        <option value={4}>Four</option>
                        <option value={5}>Five</option>
                      </select>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row col-50 mb-minus-24">
                <div className="row col-50 mb-minus-24">
                  {products.map((product, index) => (
                    <div
                      key={index}
                      className="col-lg-3 col-6 cr-product-box mb-24"
                    >
                      <div className="cr-product-card">
                        <div className="cr-product-image">
                          <div className="cr-image-inner zoom-image-hover">
                            <img
                              src={product.images[0]}
                              alt={`product-${index + 1}`}
                            />
                          </div>
                          <div class="cr-side-view">
                            <a href="javascript:void(0)" class="wishlist">
                              <i class="ri-heart-line"></i>
                            </a>
                            <a
                              className="model-oraganic-product"
                              data-bs-toggle="modal"
                              onClick={() => handleProductClick(product.id)}
                              href="#quickview"
                              role="button"
                            >
                              <i class="ri-eye-line"></i>
                            </a>
                          </div>
                          {/* Other product details */}
                        </div>
                        <div className="cr-product-details">
                          <div className="cr-brand">
                            <a href={product.category}>{product.category}</a>
                            {/* Other product details */}
                          </div>
                          <a href="product-left-sidebar.html" className="title">
                            {product.name}
                          </a>
                          <p className="text">{product.short_description}</p>
                          {/* Other product details */}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Modal productId={selectedProductId} products={products} />
    </>
  );
};

export default Shop;

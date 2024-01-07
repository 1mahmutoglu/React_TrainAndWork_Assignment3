import React from 'react'

function Modal() {
  return (
    <>
    {/*  modal start  */}
    <div className="quickview-wrapper open">
      <div
        className="modal quick-modal  fade"
        id="quickview-content"
        tabIndex={-1}
        role="dialog"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <button
                aria-hidden="true"
                data-bs-dismiss="modal"
                className="close"
                type="button"
              >
                {" "}
                <i className="fa fa-times" />
              </button>
            </div>
            <div className="modal-body">
              <div className="row">
                <div className="col-lg-5 col-md-5 col-sm-5 col-xs-12">
                  <div className="product-images">
                    <div className="main-image images">
                      <img src="images/product/pic-5.jpg" alt="product" />
                    </div>
                    <div className="modal-product-thumb">
                      <div className="quick-thumbnails carousel slick-slider">
                        <div className="slick-slide slick-active">
                          <a href="images/product/pic-4.jpg">
                            <img src="images/product/pic-4.jpg" alt="product" />
                          </a>
                        </div>
                        <div className="slick-slide slick-active">
                          <a href="images/product/pic-5.jpg">
                            <img src="images/product/pic-5.jpg" alt="product" />
                          </a>
                        </div>
                        <div className="slick-slide slick-active">
                          <a href="images/product/pic-6.jpg">
                            <img src="images/product/pic-6.jpg" alt="product" />
                          </a>
                        </div>
                        <div className="slick-slide slick-active">
                          <a href="images/product/pic-8.jpg">
                            <img src="images/product/pic-8.jpg" alt="product" />
                          </a>
                        </div>
                        <div className="slick-slide">
                          <a href="images/product/pic-7.jpg">
                            <img src="images/product/pic-7.jpg" alt="product" />
                          </a>
                        </div>
                        <div className="slick-slide">
                          <a href="images/product/pic-3.jpg">
                            <img src="images/product/pic-3.jpg" alt="product" />
                          </a>
                        </div>
                        <div className="slick-slide">
                          <a href="images/product/pic-10.jpg">
                            <img src="images/product/pic-10.jpg" alt="product" />
                          </a>
                        </div>
                        <div className="slick-slide">
                          <a href="images/product/pic-2.jpg">
                            <img src="images/product/pic-2.jpg" alt="product" />
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-7 col-md-7 col-sm-7 col-xs-12 modal-details no-padding">
                  <div className="modal-details-inner clearfix">
                    <h2 className="title">Aenean sagittis</h2>
                    <div className="price-box">
                      <p className="price">
                        <span className="special-price">
                          <span className="amount">£75.00</span>
                        </span>
                      </p>
                    </div>
                    <a className="see-all" href="#">
                      See all features
                    </a>
                    <div className="quick-add-to-cart">
                      <form
                        className="cart"
                        method="post"
                        encType="multipart/form-data"
                      >
                        <div className="quantity">
                          <input
                            step={1}
                            min={1}
                            name="quantity"
                            defaultValue={1}
                            title="Qty"
                            className="input-text qty text"
                            size={4}
                            type="number"
                          />
                        </div>
                        <button
                          type="submit"
                          className="single-add-to-cart button"
                        >
                          Add to cart
                        </button>
                      </form>
                    </div>
                    <div className="quick-desc">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam
                      fringilla augue nec est tristique auctor. Donec non est at
                      libero vulputate rutrum. Morbi ornare lectus quis justo
                      gravida semper. Nulla tellus mi, vulputate adipiscing cursus
                      eu, suscipit id nulla.
                    </div>
                    <div className="single-product-sharing">
                      <h3 className="social-title">Share this product</h3>
                      <div className="thumb-social-sharing">
                        <ul className="social-icons">
                          <li>
                            <a
                              target="_blank"
                              data-bs-toggle="tooltip"
                              title="Facebook"
                              href="#"
                              className="facebook social-icon"
                            >
                              <i className="fa fa-facebook" />
                            </a>
                          </li>
                          <li>
                            <a
                              target="_blank"
                              data-bs-toggle="tooltip"
                              title="Twitter"
                              href="#"
                              className="twitter social-icon"
                            >
                              <i className="fa fa-twitter" />
                            </a>
                          </li>
                          <li>
                            <a
                              target="_blank"
                              data-bs-toggle="tooltip"
                              title="pinterest"
                              href="#"
                              className="pinterest social-icon"
                            >
                              <i className="fa fa-pinterest" />
                            </a>
                          </li>
                          <li>
                            <a
                              target="_blank"
                              data-bs-toggle="tooltip"
                              title="Google-plus"
                              href="#"
                              className="gplus social-icon"
                            >
                              <i className="fa fa-google-plus" />
                            </a>
                          </li>
                          <li>
                            <a
                              target="_blank"
                              data-bs-toggle="tooltip"
                              title="linkedin"
                              href="#"
                              className="linkedin social-icon"
                            >
                              <i className="fa fa-linkedin" />
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    {/*   modal end */}
  </>
  
  )
}

export default Modal

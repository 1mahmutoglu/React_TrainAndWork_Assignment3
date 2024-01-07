import React from 'react'
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { mystore } from '../../store/store';

function SingleProduct() {
  const { slug } = useParams("slug");
  const { products } = useSelector((mystore) => {
    return {
      products: mystore.products.data,
    }
  })
  const product = products && products.find(x => x.slug == slug)
  console.log(product)




  return (
  <>
  {
          product && product.map((item, index) => (
      <div className="main-container">
        <div className="product-page res-an">
          <div className="container">
            <nav className="breadcrumb tnms">
              <a href="#">Home</a>
              <span className="separator">/</span>
              <a href="#">Shop</a>
              <span className="separator">/</span> <a href="#">Accessories</a>
              <span className="separator">/</span>Feugiat Justo Lacinia
            </nav>
          </div>
          {/*  breadcramb end	 */}

          
          <div key={index} className="product-view">
            <div className="container">
              <div className="row">
                <div className="col-lg-8">
                  <div className="single-product-image none-left">
                    {/* <span class="onsale"><span class="sale-bg"></span><span class="sale-text">Sale</span></span> */}
                    <div className="images single-images slick-slider">
                      <div className="slick-slide slick-active">
                        <a href={product.image} rel="lightbox" title="">
                          <img
                            width={770}
                            height={826}
                            src="images/product/pic-2.jpg"
                            alt={13}
                            title={13}
                          />
                        </a>
                      </div>
                      
                    </div>
                    <div className="thumbnails single-thumbnails columns-3 slick-slider">
                      <div className="slick-slide slick-active">
                        <img src={product.image} alt={13} title={13} />
                      </div>
                      
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 clearfix">
                  <div className="product-info tas">
                    <h2 className="title lst-shop">{product.name}</h2>
                    <div className="ratings">
                      <div className="star-rating" title="Rated 5.00 out of 5" />
                    </div>
                    <div className="price-box">
                      <span className="special-price">
                        <span className="amount">£{product.price}</span>
                      </span>
                      <span className="old-price">
                        <span className="amount">£{product.oldPrice}</span>
                      </span>
                    </div>
                    
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
                            defaultValue={product.quantity}
                            title="Qty"
                            className="input-text qty text"
                            size={4}
                            type="number"
                          />
                        </div>
                        <button type="submit" className="single-add-to-cart button">
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
                      <div className="widget widget_socialsharing_widget">
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
            <div className="clearfix"> </div>
            <div className="row">
              <div className="products-reviews-tabs st-sng clearfix">
                <div className="container">
                  <div className="row">
                    <div className="col-lg-12 col-md-12">
                      <ul role="tablist" className="tabs">
                        <li role="presentation" className="description_tab active">
                          <a
                            data-bs-toggle="tab"
                            role="tab"
                            aria-controls="tab-description"
                            href="#tab-description"
                            aria-expanded="true"
                          >
                            Description
                          </a>
                        </li>
                        <li role="presentation" className="reviews_tab">
                          <a
                            data-bs-toggle="tab"
                            role="tab"
                            aria-controls="tab-reviews"
                            href="#tab-reviews"
                            aria-expanded="false"
                          >
                            Reviews (1)
                          </a>
                        </li>
                      </ul>
                      {/* Tab panes */}
                      <div className="tab-content">
                        <div
                          id="tab-description"
                          className="tab-pane active entry-content"
                          role="tabpanel"
                        >
                          <div className="product-tab-desc">
                            <p>
                              Lorem ipsum dolor sit amet, consectetur adipiscing
                              elit. Nam fringilla augue nec est tristique auctor.
                              Donec non est at libero vulputate rutrum. Morbi ornare
                              lectus quis justo gravida semper. Nulla tellus mi,
                              vulputate adipiscing cursus eu, suscipit id nulla.
                            </p>
                            <p>
                              Pellentesque aliquet, sem eget laoreet ultrices, ipsum
                              metus feugiat sem, quis fermentum turpis eros eget
                              velit. Donec ac tempus ante. Fusce ultricies massa
                              massa. Fusce aliquam, purus eget sagittis vulputate,
                              sapien libero hendrerit est, sed commodo augue nisi
                              non neque. Lorem ipsum dolor sit amet, consectetur
                              adipiscing elit. Sed tempor, lorem et placerat
                              vestibulum, metus nisi posuere nisl, in accumsan elit
                              odio quis mi. Cras neque metus, consequat et blandit
                              et, luctus a nunc. Etiam gravida vehicula tellus, in
                              imperdiet ligula euismod eget.
                            </p>
                          </div>
                        </div>
                        <div
                          id="tab-reviews"
                          className="tab-pane entry-content"
                          role="tabpanel"
                        >
                          <div className="row">
                            <div className="col-md-8 col-md-offset-2">
                              <div className="product-tab-desc">
                                <div id="reviews">
                                  <div id="comments">
                                    <h2>1 review for Feugiat justo lacinia</h2>
                                    <ul className="commentlist">
                                      <li>
                                        <div className="product-comments">
                                          <img
                                            alt=""
                                            className="img-circle"
                                            src="images/logo/admin.png"
                                          />
                                          <div className="product-comments-content">
                                            <p>
                                              <strong>admin</strong> -
                                              <span>March 7, 2016:</span>
                                              <span className="pro-comments-rating">
                                                <i className="fa fa-star" />
                                                <i className="fa fa-star" />
                                                <i className="fa fa-star" />
                                                <i className="fa fa-star" />
                                              </span>
                                            </p>
                                            <div className="desc">
                                              Lorem ipsum dolor sit amet,
                                              consectetur adipiscing elit. Nam
                                              fringilla augue nec est tristique
                                              auctor. Donec non est at libero
                                              vulputate rutrum.
                                            </div>
                                          </div>
                                        </div>
                                      </li>
                                      {/* #comment-## */}
                                    </ul>
                                  </div>
                                  <div className="clear" />
                                </div>
                                <div className="review-form-wrapper repair">
                                  <h3>Add a review</h3>
                                  <form action="https://htmldemo.net/chaos/chaos/-">
                                    <div className="form-group">
                                      <label>Name *</label>
                                      <input placeholder="your name" type="text" />
                                    </div>
                                    <div className="form-group">
                                      <label>Email *</label>
                                      <input
                                        placeholder="your email"
                                        type="email"
                                      />
                                    </div>
                                    <div className="your-rating">
                                      <label>Your Rating</label>
                                      <span>
                                        <a href="#">
                                          <i className="fa fa-star" />
                                        </a>
                                        <a href="#">
                                          <i className="fa fa-star" />
                                        </a>
                                      </span>
                                      <span>
                                        <a href="#">
                                          <i className="fa fa-star" />
                                        </a>
                                        <a href="#">
                                          <i className="fa fa-star" />
                                        </a>
                                        <a href="#">
                                          <i className="fa fa-star" />
                                        </a>
                                      </span>
                                      <span>
                                        <a href="#">
                                          <i className="fa fa-star" />
                                        </a>
                                        <a href="#">
                                          <i className="fa fa-star" />
                                        </a>
                                        <a href="#">
                                          <i className="fa fa-star" />
                                        </a>
                                        <a href="#">
                                          <i className="fa fa-star" />
                                        </a>
                                      </span>
                                      <span>
                                        <a href="#">
                                          <i className="fa fa-star" />
                                        </a>
                                        <a href="#">
                                          <i className="fa fa-star" />
                                        </a>
                                        <a href="#">
                                          <i className="fa fa-star" />
                                        </a>
                                        <a href="#">
                                          <i className="fa fa-star" />
                                        </a>
                                        <a href="#">
                                          <i className="fa fa-star" />
                                        </a>
                                      </span>
                                    </div>
                                    <label>Your Review</label>
                                    <textarea
                                      placeholder="Your Rating"
                                      rows={10}
                                      cols={30}
                                      id="product-message"
                                      defaultValue={""}
                                    />
                                    <input
                                      name="submit"
                                      id="submit"
                                      className="submit"
                                      defaultValue="Submit"
                                      type="submit"
                                    />
                                  </form>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        {/* 2nd tabpane end */}
                      </div>
                      <div className="clear" />
                    </div>
                  </div>
                </div>
              </div>
              {/* reviews tab end    */}
            </div>
            <div className="row">
              {/* products carousel start */}
              <div className="products-carousel snpro clearfix">
                <div className="container">
                  <div className="row">
                    <div className="col-sm-12">
                      <div className="content-element">
                        <h3 className="related-title">
                          <span>Related Products</span>
                        </h3>
                      </div>
                      <div className="columns-4">
                        <div className="shop-products grid-view slick-slider">
                          <div className="first item-col col-xs-12 col-sm-3 slick-slide slick-active">
                            <div className="product-wrapper">
                              <div className="list-col4">
                                <div className="product-image">
                                  <a href="#" title="Aenean eu tristique">
                                    <img src="images/product/pic-3.jpg" alt={11} />
                                  </a>
                                  <div
                                    className="quickviewbtn"
                                    data-bs-toggle="modal"
                                    data-bs-target="#quickview-content"
                                  >
                                    <a
                                      className="detail-link quickview"
                                      href="#"
                                      title="quickview"
                                      data-bs-toggle="tooltip"
                                      data-bs-placement="top"
                                    >
                                      Quick View
                                    </a>
                                  </div>
                                  <div className="actions">
                                    <div className="action-buttons">
                                      <div className="add-to-links">
                                        <div className="add-to-wishlist">
                                          <a
                                            href="#"
                                            className="button add-to-wishlist"
                                            data-bs-toggle="tooltip"
                                            data-bs-placement="top"
                                            title="Add to wishlist"
                                          >
                                            Add to Wishlist
                                          </a>
                                        </div>
                                        <div className="clear" />
                                        <div className="compare-button">
                                          <a
                                            href="#"
                                            className="button compare "
                                            data-bs-toggle="tooltip"
                                            data-bs-placement="top"
                                            title="Compare"
                                          >
                                            Compare
                                          </a>
                                        </div>
                                      </div>
                                      <div className="add-to-cart">
                                        <a
                                          href="#"
                                          data-bs-toggle="tooltip"
                                          data-bs-placement="top"
                                          className="button add-to-cart"
                                          title="Add to cart"
                                        >
                                          Add to cart
                                        </a>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="list-col8">
                                <div className="gridview">
                                  <div className="ratings">
                                    <div
                                      className="star-rating"
                                      title="Rated 5.00 out of 5"
                                    />
                                  </div>
                                  <div className="price-box">
                                    <span className="special-price">
                                      <span className="amount">£80.00</span>
                                    </span>
                                  </div>
                                  <h2 className="product-name">
                                    <a href="#">{product.name}</a>
                                  </h2>
                                </div>
                              </div>
                              <div className="clearfix" />
                            </div>
                          </div>
                          {/* first slide end */}
                          <div className="first item-col col-xs-12 col-sm-3 slick-slide slick-active">
                            <div className="product-wrapper">
                              <div className="list-col4">
                                <div className="product-image">
                                  <a href="#" title="Aenean eu tristique">
                                    <img src="images/product/pic-5.jpg" alt={11} />
                                  </a>
                                  <div
                                    className="quickviewbtn"
                                    data-bs-toggle="modal"
                                    data-bs-target="#quickview-content"
                                  >
                                    <a
                                      className="detail-link quickview"
                                      href="#"
                                      title="quickview"
                                      data-bs-toggle="tooltip"
                                      data-bs-placement="top"
                                    >
                                      Quick View
                                    </a>
                                  </div>
                                  <div className="actions">
                                    <div className="action-buttons">
                                      <div className="add-to-links">
                                        <div className="add-to-wishlist">
                                          <a
                                            href="#"
                                            className="button add-to-wishlist"
                                            data-bs-toggle="tooltip"
                                            data-bs-placement="top"
                                            title="Add to wishlist"
                                          >
                                            Add to Wishlist
                                          </a>
                                        </div>
                                        <div className="clear" />
                                        <div className="compare-button">
                                          <a
                                            href="#"
                                            className="button compare "
                                            data-bs-toggle="tooltip"
                                            data-bs-placement="top"
                                            title="Compare"
                                          >
                                            Compare
                                          </a>
                                        </div>
                                      </div>
                                      <div className="add-to-cart">
                                        <a
                                          href="#"
                                          data-bs-toggle="tooltip"
                                          data-bs-placement="top"
                                          className="button add-to-cart"
                                          title="Add to cart"
                                        >
                                          Add to cart
                                        </a>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="list-col8">
                                <div className="gridview">
                                  <div className="ratings">
                                    <div
                                      className="star-rating"
                                      title="Rated 5.00 out of 5"
                                    />
                                  </div>
                                  <div className="price-box">
                                    <span className="special-price">
                                      <span className="amount">£120.00</span>
                                    </span>
                                  </div>
                                  <h2 className="product-name">
                                    <a href="#">Aenean eu tristique</a>
                                  </h2>
                                </div>
                              </div>
                              <div className="clearfix" />
                            </div>
                          </div>
                          {/* first slide end */}
                          <div className="first item-col col-xs-12 col-sm-3 slick-slide slick-active">
                            <div className="product-wrapper">
                              <div className="list-col4">
                                <div className="product-image">
                                  <a href="#" title="Aenean eu tristique">
                                    <img src="images/product/pic-2.jpg" alt={11} />
                                  </a>
                                  <div
                                    className="quickviewbtn"
                                    data-bs-toggle="modal"
                                    data-bs-target="#quickview-content"
                                  >
                                    <a
                                      className="detail-link quickview"
                                      href="#"
                                      title="quickview"
                                      data-bs-toggle="tooltip"
                                      data-bs-placement="top"
                                    >
                                      Quick View
                                    </a>
                                  </div>
                                  <div className="actions">
                                    <div className="action-buttons">
                                      <div className="add-to-links">
                                        <div className="add-to-wishlist">
                                          <a
                                            href="#"
                                            className="button add-to-wishlist"
                                            data-bs-toggle="tooltip"
                                            data-bs-placement="top"
                                            title="Add to wishlist"
                                          >
                                            Add to Wishlist
                                          </a>
                                        </div>
                                        <div className="clear" />
                                        <div className="compare-button">
                                          <a
                                            href="#"
                                            className="button compare "
                                            data-bs-toggle="tooltip"
                                            data-bs-placement="top"
                                            title="Compare"
                                          >
                                            Compare
                                          </a>
                                        </div>
                                      </div>
                                      <div className="add-to-cart">
                                        <a
                                          href="#"
                                          data-bs-toggle="tooltip"
                                          data-bs-placement="top"
                                          className="button add-to-cart"
                                          title="Add to cart"
                                        >
                                          Add to cart
                                        </a>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="list-col8">
                                <div className="gridview">
                                  <div className="ratings">
                                    <div
                                      className="star-rating"
                                      title="Rated 5.00 out of 5"
                                    />
                                  </div>
                                  <div className="price-box">
                                    <span className="special-price">
                                      <span className="amount">£90.00</span>
                                    </span>
                                  </div>
                                  <h2 className="product-name">
                                    <a href="#">Aenean eu tristique</a>
                                  </h2>
                                </div>
                              </div>
                              <div className="clearfix" />
                            </div>
                          </div>
                          {/* first slide end */}
                          <div className="first item-col col-xs-12 col-sm-3 slick-slide slick-active">
                            <div className="product-wrapper">
                              <div className="list-col4">
                                <div className="product-image">
                                  <a href="#" title="Aenean eu tristique">
                                    <img src="images/product/pic-4.jpg" alt={11} />
                                  </a>
                                  <div
                                    className="quickviewbtn"
                                    data-bs-toggle="modal"
                                    data-bs-target="#quickview-content"
                                  >
                                    <a
                                      className="detail-link quickview"
                                      href="#"
                                      title="quickview"
                                      data-bs-toggle="tooltip"
                                      data-bs-placement="top"
                                    >
                                      Quick View
                                    </a>
                                  </div>
                                  <div className="actions">
                                    <div className="action-buttons">
                                      <div className="add-to-links">
                                        <div className="add-to-wishlist">
                                          <a
                                            href="#"
                                            className="button add-to-wishlist"
                                            data-bs-toggle="tooltip"
                                            data-bs-placement="top"
                                            title="Add to wishlist"
                                          >
                                            Add to Wishlist
                                          </a>
                                        </div>
                                        <div className="clear" />
                                        <div className="compare-button">
                                          <a
                                            href="#"
                                            className="button compare "
                                            data-bs-toggle="tooltip"
                                            data-bs-placement="top"
                                            title="Compare"
                                          >
                                            Compare
                                          </a>
                                        </div>
                                      </div>
                                      <div className="add-to-cart">
                                        <a
                                          href="#"
                                          data-bs-toggle="tooltip"
                                          data-bs-placement="top"
                                          className="button add-to-cart"
                                          title="Add to cart"
                                        >
                                          Add to cart
                                        </a>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="list-col8">
                                <div className="gridview">
                                  <div className="ratings">
                                    <div
                                      className="star-rating"
                                      title="Rated 5.00 out of 5"
                                    />
                                  </div>
                                  <div className="price-box">
                                    <span className="special-price">
                                      <span className="amount">£70.00</span>
                                    </span>
                                  </div>
                                  <h2 className="product-name">
                                    <a href="#">Aenean eu tristique</a>
                                  </h2>
                                </div>
                              </div>
                              <div className="clearfix" />
                            </div>
                          </div>
                          {/* first slide end */}
                          {/*  2nd row slide */}
                          <div className="first item-col col-xs-12 col-sm-3 slick-slide">
                            <div className="product-wrapper">
                              <div className="list-col4">
                                <div className="product-image">
                                  <a href="#" title="Aenean eu tristique">
                                    <img src="images/product/pic-8.jpg" alt={11} />
                                  </a>
                                  <div
                                    className="quickviewbtn"
                                    data-bs-toggle="modal"
                                    data-bs-target="#quickview-content"
                                  >
                                    <a
                                      className="detail-link quickview"
                                      href="#"
                                      title="quickview"
                                      data-bs-toggle="tooltip"
                                      data-bs-placement="top"
                                    >
                                      Quick View
                                    </a>
                                  </div>
                                  <div className="actions">
                                    <div className="action-buttons">
                                      <div className="add-to-links">
                                        <div className="add-to-wishlist">
                                          <a
                                            href="#"
                                            className="button add-to-wishlist"
                                            data-bs-toggle="tooltip"
                                            data-bs-placement="top"
                                            title="Add to wishlist"
                                          >
                                            Add to Wishlist
                                          </a>
                                        </div>
                                        <div className="clear" />
                                        <div className="compare-button">
                                          <a
                                            href="#"
                                            className="button compare "
                                            data-bs-toggle="tooltip"
                                            data-bs-placement="top"
                                            title="Compare"
                                          >
                                            Compare
                                          </a>
                                        </div>
                                      </div>
                                      <div className="add-to-cart">
                                        <a
                                          href="#"
                                          data-bs-toggle="tooltip"
                                          data-bs-placement="top"
                                          className="button add-to-cart"
                                          title="Add to cart"
                                        >
                                          Add to cart
                                        </a>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="list-col8">
                                <div className="gridview">
                                  <div className="ratings">
                                    <div
                                      className="star-rating"
                                      title="Rated 5.00 out of 5"
                                    />
                                  </div>
                                  <div className="price-box">
                                    <span className="special-price">
                                      <span className="amount">£70.00</span>
                                    </span>
                                  </div>
                                  <h2 className="product-name">
                                    <a href="#">Aenean eu tristique</a>
                                  </h2>
                                </div>
                              </div>
                              <div className="clearfix" />
                            </div>
                          </div>
                          {/* first slide end */}
                          <div className="first item-col col-xs-12 col-sm-3 slick-slide">
                            <div className="product-wrapper">
                              <div className="list-col4">
                                <div className="product-image">
                                  <a href="#" title="Aenean eu tristique">
                                    <img src="images/product/pic-3.jpg" alt={11} />
                                  </a>
                                  <div
                                    className="quickviewbtn"
                                    data-bs-toggle="modal"
                                    data-bs-target="#quickview-content"
                                  >
                                    <a
                                      className="detail-link quickview"
                                      href="#"
                                      title="quickview"
                                      data-bs-toggle="tooltip"
                                      data-bs-placement="top"
                                    >
                                      Quick View
                                    </a>
                                  </div>
                                  <div className="actions">
                                    <div className="action-buttons">
                                      <div className="add-to-links">
                                        <div className="add-to-wishlist">
                                          <a
                                            href="#"
                                            className="button add-to-wishlist"
                                            data-bs-toggle="tooltip"
                                            data-bs-placement="top"
                                            title="Add to wishlist"
                                          >
                                            Add to Wishlist
                                          </a>
                                        </div>
                                        <div className="clear" />
                                        <div className="compare-button">
                                          <a
                                            href="#"
                                            className="button compare "
                                            data-bs-toggle="tooltip"
                                            data-bs-placement="top"
                                            title="Compare"
                                          >
                                            Compare
                                          </a>
                                        </div>
                                      </div>
                                      <div className="add-to-cart">
                                        <a
                                          href="#"
                                          data-bs-toggle="tooltip"
                                          data-bs-placement="top"
                                          className="button add-to-cart"
                                          title="Add to cart"
                                        >
                                          Add to cart
                                        </a>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="list-col8">
                                <div className="gridview">
                                  <div className="ratings">
                                    <div
                                      className="star-rating"
                                      title="Rated 5.00 out of 5"
                                    />
                                  </div>
                                  <div className="price-box">
                                    <span className="special-price">
                                      <span className="amount">£70.00</span>
                                    </span>
                                  </div>
                                  <h2 className="product-name">
                                    <a href="#">Aenean eu tristique</a>
                                  </h2>
                                </div>
                              </div>
                              <div className="clearfix" />
                            </div>
                          </div>
                          {/* first slide end */}
                          <div className="first item-col col-xs-12 col-sm-3 slick-slide">
                            <div className="product-wrapper">
                              <div className="list-col4">
                                <div className="product-image">
                                  <a href="#" title="Aenean eu tristique">
                                    <img src="images/product/pic-4.jpg" alt={11} />
                                  </a>
                                  <div
                                    className="quickviewbtn"
                                    data-bs-toggle="modal"
                                    data-bs-target="#quickview-content"
                                  >
                                    <a
                                      className="detail-link quickview"
                                      href="#"
                                      title="quickview"
                                      data-bs-toggle="tooltip"
                                      data-bs-placement="top"
                                    >
                                      Quick View
                                    </a>
                                  </div>
                                  <div className="actions">
                                    <div className="action-buttons">
                                      <div className="add-to-links">
                                        <div className="add-to-wishlist">
                                          <a
                                            href="#"
                                            className="button add-to-wishlist"
                                            data-bs-toggle="tooltip"
                                            data-bs-placement="top"
                                            title="Add to wishlist"
                                          >
                                            Add to Wishlist
                                          </a>
                                        </div>
                                        <div className="clear" />
                                        <div className="compare-button">
                                          <a
                                            href="#"
                                            className="button compare "
                                            data-bs-toggle="tooltip"
                                            data-bs-placement="top"
                                            title="Compare"
                                          >
                                            Compare
                                          </a>
                                        </div>
                                      </div>
                                      <div className="add-to-cart">
                                        <a
                                          href="#"
                                          data-bs-toggle="tooltip"
                                          data-bs-placement="top"
                                          className="button add-to-cart"
                                          title="Add to cart"
                                        >
                                          Add to cart
                                        </a>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="list-col8">
                                <div className="gridview">
                                  <div className="ratings">
                                    <div
                                      className="star-rating"
                                      title="Rated 5.00 out of 5"
                                    />
                                  </div>
                                  <div className="price-box">
                                    <span className="special-price">
                                      <span className="amount">£75.00</span>
                                    </span>
                                  </div>
                                  <h2 className="product-name">
                                    <a href="#">Aenean eu tristique</a>
                                  </h2>
                                </div>
                              </div>
                              <div className="clearfix" />
                            </div>
                          </div>
                          {/* first slide end */}
                          <div className="first item-col col-xs-12 col-sm-3 slick-slide">
                            <div className="product-wrapper">
                              <div className="list-col4">
                                <div className="product-image">
                                  <a href="#" title="Aenean eu tristique">
                                    <img src="images/product/pic-5.jpg" alt={11} />
                                  </a>
                                  <div
                                    className="quickviewbtn"
                                    data-bs-toggle="modal"
                                    data-bs-target="#quickview-content"
                                  >
                                    <a
                                      className="detail-link quickview"
                                      href="#"
                                      title="quickview"
                                      data-bs-toggle="tooltip"
                                      data-bs-placement="top"
                                    >
                                      Quick View
                                    </a>
                                  </div>
                                  <div className="actions">
                                    <div className="action-buttons">
                                      <div className="add-to-links">
                                        <div className="add-to-wishlist">
                                          <a
                                            href="#"
                                            className="button add-to-wishlist"
                                            data-bs-toggle="tooltip"
                                            data-bs-placement="top"
                                            title="Add to wishlist"
                                          >
                                            Add to Wishlist
                                          </a>
                                        </div>
                                        <div className="clear" />
                                        <div className="compare-button">
                                          <a
                                            href="#"
                                            className="button compare "
                                            data-bs-toggle="tooltip"
                                            data-bs-placement="top"
                                            title="Compare"
                                          >
                                            Compare
                                          </a>
                                        </div>
                                      </div>
                                      <div className="add-to-cart">
                                        <a
                                          href="#"
                                          data-bs-toggle="tooltip"
                                          data-bs-placement="top"
                                          className="button add-to-cart"
                                          title="Add to cart"
                                        >
                                          Add to cart
                                        </a>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="list-col8">
                                <div className="gridview">
                                  <div className="ratings">
                                    <div
                                      className="star-rating"
                                      title="Rated 5.00 out of 5"
                                    />
                                  </div>
                                  <div className="price-box">
                                    <span className="special-price">
                                      <span className="amount">£85.00</span>
                                    </span>
                                  </div>
                                  <h2 className="product-name">
                                    <a href="#">Aenean eu tristique</a>
                                  </h2>
                                </div>
                              </div>
                              <div className="clearfix" />
                            </div>
                          </div>
                          {/* first slide end */}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* products carousel end */}
          </div>
        </div>

        

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
                                <img
                                  src="images/product/pic-10.jpg"
                                  alt="product"
                                />
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
                          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                          Nam fringilla augue nec est tristique auctor. Donec non
                          est at libero vulputate rutrum. Morbi ornare lectus quis
                          justo gravida semper. Nulla tellus mi, vulputate
                          adipiscing cursus eu, suscipit id nulla.
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
    
      </div>
      ))
    }
    </>
  )
}

export default SingleProduct

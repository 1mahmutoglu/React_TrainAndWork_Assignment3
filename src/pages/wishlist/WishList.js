import React from 'react'

function WishList() {
  return (
    <div>
      
      <>

  {/*main container start*/}
  <div className="main-container fullwidth">
    <header className="entry-header">
      <div className="container">
        <h1 className="entry-title rjc4">wishlist</h1>
      </div>
    </header>
    <div className="container">
      <div id="shopping-cart">
        <nav className="breadcrumb">
          <a href="#">Home</a>
          <span className="separator">/</span>Wishlist
        </nav>
      </div>
      <div className="row">
        <div className="col-md-12 col-sm-12 col-xs-12">
          <div className="entry-content">
            <div className="wishlist-title ">
              <h2>My wishlist</h2>
            </div>
            {/* wishlist-area start */}
            <div className="wishlist-area">
              <div className="wishlist-content text-center">
                <form action="#">
                  <div className="wishlist-table table-responsive">
                    <table>
                      <thead>
                        <tr>
                          <th className="product-remove">
                            <span className="nobr">Remove</span>
                          </th>
                          <th className="product-thumbnail">Image</th>
                          <th className="product-name">
                            <span className="nobr">Product Name</span>
                          </th>
                          <th className="product-price">
                            <span className="nobr"> Unit Price </span>
                          </th>
                          <th className="product-stock-stauts">
                            <span className="nobr"> Stock Status </span>
                          </th>
                          <th className="product-add-to-cart">
                            <span className="nobr">add-to-cart </span>
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td className="product-remove">
                            <a href="#">×</a>
                          </td>
                          <td className="product-thumbnail">
                            <a href="#">
                              <img src="images/cart/cart.jpg" alt="" />
                            </a>
                          </td>
                          <td className="product-name">
                            <a href="#">Vestibulum suscipit</a>
                          </td>
                          <td className="product-price">
                            <span className="amount">£165.00</span>
                          </td>
                          <td className="product-stock-status">
                            <span className="wishlist-in-stock">In Stock</span>
                          </td>
                          <td className="product-add-to-cart">
                            <a href="#"> Add to Cart</a>
                          </td>
                        </tr>
                        <tr>
                          <td className="product-remove">
                            <a href="#">×</a>
                          </td>
                          <td className="product-thumbnail">
                            <a href="#">
                              <img src="images/cart/cart-2.jpg" alt="" />
                            </a>
                          </td>
                          <td className="product-name">
                            <a href="#">Vestibulum dictum magna</a>
                          </td>
                          <td className="product-price">
                            <span className="amount">£50.00</span>
                          </td>
                          <td className="product-stock-status">
                            <span className="wishlist-in-stock">In Stock</span>
                          </td>
                          <td className="product-add-to-cart">
                            <a href="#"> Add to Cart</a>
                          </td>
                        </tr>
                      </tbody>
                      <tfoot>
                        <tr>
                          <td colSpan={6}>
                            <div className="table-social">
                              <h4 className="text-start">Share on:</h4>
                              <div className="social-sharing">
                                <ul className="social-icons">
                                  <li>
                                    <a
                                      className="facebook social-icon"
                                      href="#"
                                      title="Facebook"
                                      data-bs-toggle="tooltip"
                                      target="_blank"
                                    >
                                      <i className="fa fa-facebook" />
                                    </a>
                                  </li>
                                  <li>
                                    <a
                                      className="twitter social-icon"
                                      href="#"
                                      title="Twitter"
                                      data-bs-toggle="tooltip"
                                      target="_blank"
                                    >
                                      <i className="fa fa-twitter" />
                                    </a>
                                  </li>
                                  <li>
                                    <a
                                      className="pinterest social-icon"
                                      href="#"
                                      title="pinteres"
                                      data-bs-toggle="tooltip"
                                    >
                                      <i className="fa fa-pinterest" />
                                    </a>
                                  </li>
                                  <li>
                                    <a
                                      className="gplus social-icon"
                                      href="#"
                                      title="Google +"
                                      data-bs-toggle="tooltip"
                                      target="_blank"
                                    >
                                      <i className="fa fa-google-plus" />
                                    </a>{" "}
                                  </li>
                                  <li>
                                    <a
                                      className="linkedin social-icon"
                                      href="#"
                                      title="LinkedIn"
                                      data-bs-toggle="tooltip"
                                      target="_blank"
                                    >
                                      <i className="fa fa-linkedin" />
                                    </a>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </td>
                        </tr>
                      </tfoot>
                    </table>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* wishlist-area end */}
    </div>
  </div>
  {/*main container end*/}
  

 
</>



    </div>
  )
}

export default WishList

import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { removeFromCart } from '../store/slices/cartSlice'

function Header() {



  const { cart } = useSelector((store) => {
    return {
      cart: store.cart.items
    }
  })


  const totalAmount = () => {
    let total = 0
    cart.forEach(element => {
      total += element.price * element.quantity
    });
    return total
  }

  const dispatch = useDispatch()
  const removeCart = (itemID) => {
    dispatch(removeFromCart(itemID))
  }

  return (
    <header>
      {/*header container Start*/}
      <div className="header-container layout1">
        <div className="topbar">
          <div className="container">
            <div className="row">
              <div className="col-sm-12">
                <div className="welcome">
                  <span className="phone-number d-none d-md-block">
                    +0.2222.8888
                  </span>
                  <span className="top-shipping d-none d-md-block">
                    Free ship on order over $2000
                  </span>
                </div>
                <div className="top-menu">
                  <div className="currency-switcher" />
                  <div id="language">
                    <ul>
                      <li>
                        <a href="#">English</a>
                        <ul>
                          <li>
                            <a href="#">Türkçe</a>
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </div>
                  <Link className="login-btn" to={"login1"}>
                    Login or Register
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/*  top bar end */}
        {/*  header start */}
        <div className="header-bottom-area">
          <div className="container">
            <div className="row">
              <div className="col-lg-4">
                <div className="logo">
                  <a href="index.html" title="Chaos">
                    <img src="images/logo/logo.png" alt="logo" />
                  </a>
                </div>
              </div>
              <div className="col-lg-8">
                <div className="total-cart">
                  <div className="cart-toggler">
                    <Link to={"/cart"}>
                      <span className="cart-title">My cart:</span>
                      <span className="cart-quantity">
                        <span className="amount">£{totalAmount()}</span>
                      </span>
                    </Link>
                    <Link className="checkout" to={"checkOut"}>
                      Checkout
                    </Link>
                  </div>
                  <ul>
                    {
                      cart && cart.map((item, index) => (
                        <li key={index}>
                          <div className="cart-img">
                            <a>
                              <img src={item.image} alt="cart" />
                            </a>
                            <span>{item.quantity}</span>
                          </div>
                          <div className="cart-info">
                            <h4>
                              <a >{item.name}</a>
                            </h4>
                            <span>£{item.price}</span>
                          </div>
                          <div onClick={() => removeCart(item.id)} className="del-icon">
                            <i className="fa fa-times-circle" />
                          </div>
                        </li>
                      ))
                    }
                    <li>
                      <div className="subtotal-text">Subtotal: </div>
                      <div className="subtotal-price">£{totalAmount()}</div>
                    </li>
                  </ul>
                </div>
                <div className="header-search">
                  <input
                    className="top-search"
                    type="text"
                    placeholder="search product..."
                  />
                  <button>
                    <i className="fa fa-search" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/*  nav container start */}
        <div className="nav-container">
          <div className="mainmenu-area">
            <div className="container">
              <div className="row">
                <div className="col-md-12">
                  <div className="horizontal-menu">
                    <nav>
                      <ul id="nav">
                        <li>
                          <Link className="active" to={"/"}>
                            Home
                          </Link>
                        </li>
                        <li>
                          <Link to={"shop-category"}>shop</Link>
                          <ul className="mega-menu">
                            <li>
                              <Link to={"shop-category"}>Category</Link>
                            </li>
                            <li>
                              <Link to={"shop-detail/:slug"}>Simple Product</Link>
                            </li>
                          </ul>
                        </li>
                        <li>
                          <Link to={"blog"}>blog</Link>
                        </li>
                        
                        <li>
                          <Link href={"blog-detail"}>pages</Link>
                          <ul>
                            <li>
                              <Link href={"blog-detail"}>blog-details</Link>
                            </li>
                            <li>
                            <Link to={"shop-detail/:slug'"}>Simple Product</Link>
                            </li>
                            <li>
                            <Link to={"login1"}>Login</Link>
                            </li>
                            <li>

                            </li>
                            <li>
                            <Link to={"cart"}>cart</Link>
                            </li>
                            <li>
                            <Link to={"wishlist"}>wishlist</Link>
                            </li>
                            <li>
                            <Link to={"checkOut"}>CheckOut</Link>
                            </li>
                          </ul>
                        </li>
                        <li>
                          <Link to={"contact"}>contact</Link>
                        </li>
                      </ul>
                    </nav>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="clearfix" />
          {/* mobile-menu-area start */}
          <div className="mobile-menu-area d-lg-none">
            <div className="container">
              <div className="row">
                <div className="col-lg-12">
                  <div className="mobile-menu">
                    <nav id="dropdown">
                      <ul>
                        <li>
                          <a className="active" href="index.html">
                            Home
                          </a>
                          <ul>
                            <li>
                              <a href="index-2.html">Home 2</a>
                            </li>
                            <li>
                              <a href="index-3.html">Home 3</a>
                            </li>
                          </ul>
                        </li>
                        <li>
                          <a href="shop.html">shop</a>
                          <ul className="mega-menu">
                            <li>
                              <a href="shop.html" className="title">
                                shop layout
                              </a>
                              <a href="shop.html">Full-width</a>
                              <a href="shop-category.html">left-sidebar</a>
                              <a href="shop-right-sidebar.html">right-sidebar</a>
                              <a href="list-view.html">list view</a>
                            </li>
                            <li>
                              <a href="shop.html" className="title">
                                shop page
                              </a>
                              <a href="shop-category.html">Category</a>
                              <a href="#">My account</a>
                              <a href="cart.html">Shopping Cart</a>
                              <a href="checkout.html">Checkout</a>
                            </li>
                            <li>
                              <a href="single-product.html" className="title">
                                Product types
                              </a>
                              <a href="single-product.html">Simple Product</a>
                              <a href="single-product.html">Variable Product</a>
                              <a href="single-product.html">Grouped Product</a>
                              <a href="single-product.html">Downloadable</a>
                            </li>
                          </ul>
                        </li>
                        <li>
                          <a href="blog.html">blog</a>
                        </li>
                        <li>
                          <a href="about-us.html">about us</a>
                        </li>
                        <li>
                          <a href="blog.html">pages</a>
                          <ul>
                            <li>
                              <a href="blog-left-sidebar.html">blog-left-sidebar</a>
                            </li>
                            <li>
                              <a href="blog-details.html">blog-details</a>
                            </li>
                            <li>
                              <a href="shop.html">Shop</a>
                            </li>
                            <li>
                              <a href="single-product.html">Single Product</a>
                            </li>
                            <li>
                              <a href="login.html">Login</a>
                            </li>
                            <li>
                              <a href="cart.html">Cart</a>
                            </li>
                            <li>
                              <a href="wishlist.html">Wishlist</a>
                            </li>
                            <li>
                              <a href="checkout.html">checkout</a>
                            </li>
                          </ul>
                        </li>
                        <li>
                          <a href="contact-us.html">contact</a>
                        </li>
                        <li>
                          <a href="404.html">error 404</a>
                        </li>
                      </ul>
                    </nav>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* mobile-menu-area end */}
        </div>
        {/*  nav container end */}
      </div>
      <div className="clearfix" />
    </header >

  )
}

export default Header

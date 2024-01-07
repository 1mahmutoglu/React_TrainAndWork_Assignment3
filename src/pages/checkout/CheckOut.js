import React from 'react'
import { useDispatch, useSelector } from 'react-redux'



function CheckOut() {

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

  const perAmount = (item) => {
    return item.price * item.quantity;
  };

  return (
    <div>

      <>

        {/*main container start*/}
        <div className="main-container fullwidth">
          <header className="entry-header">
            <div className="container">
              <h1 className="entry-title rjc4">Checkout</h1>
            </div>
          </header>
          <div className="container">
            <div className="row">
              <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                <div className="breadcrumb" id="checkout">
                  <a href="index.html">Home</a>
                  <span className="separator">/</span>
                  <span> Checkout</span>
                </div>
              </div>
            </div>
            <div className="row">
              {/* coupon-area start */}
              <div className="coupon-area">
                <div className="container">
                  <div className="row">
                    <div className="col-md-12">
                      <div className="coupon-accordion">
                        {/* ACCORDION START */}
                        <h3>
                          Returning customer?{" "}
                          <span id="showlogin">Click here to login</span>
                        </h3>
                        <div id="checkout-login" className="coupon-content">
                          <div className="coupon-info">
                            <p className="coupon-text">
                              Quisque gravida turpis sit amet nulla posuere lacinia.
                              Cras sed est sit amet ipsum luctus.
                            </p>
                            <form action="#">
                              <p className="form-row-first">
                                <label>
                                  Username or email{" "}
                                  <span className="required">*</span>
                                </label>
                                <input type="text" />
                              </p>
                              <p className="form-row-last">
                                <label>
                                  Password <span className="required">*</span>
                                </label>
                                <input type="text" />
                              </p>
                              <p className="form-row">
                                <input
                                  type="submit"
                                  className="button"
                                  defaultValue="Login"
                                />
                                <label>
                                  <input type="checkbox" /> Remember me
                                </label>
                              </p>
                              <p className="lost-password">
                                <a href="#">Lost your password?</a>
                              </p>
                            </form>
                          </div>
                        </div>
                        {/* ACCORDION END */}
                        {/* ACCORDION START */}
                        <h3>
                          Have a coupon?{" "}
                          <span id="showcoupon">Click here to enter your code</span>
                        </h3>
                        <div id="checkout_coupon" className="coupon-checkout-content">
                          <div className="coupon-info">
                            <form action="#">
                              <p className="checkout-coupon">
                                <input type="text" placeholder="Coupon code" />
                                <input type="submit" defaultValue="Apply Coupon" />
                              </p>
                            </form>
                          </div>
                        </div>
                        {/* ACCORDION END */}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* coupon-area end */}
              {/* checkout-area start */}
              <div className="checkout-area">
                <div className="container">
                  <form action="#">
                    <div className="row">
                      <div className="col-lg-6">
                        <div className="checkbox-form">
                          <h3>Billing Details</h3>
                          <div className="row">
                            <div className="col-md-6">
                              <div className="checkout-form-list">
                                <label>
                                  First Name <span className="required">*</span>
                                </label>
                                <input type="text" placeholder="" />
                              </div>
                            </div>
                            <div className="col-md-6">
                              <div className="checkout-form-list">
                                <label>
                                  Last Name <span className="required">*</span>
                                </label>
                                <input type="text" placeholder="" />
                              </div>
                            </div>
                            <div className="col-md-12">
                              <div className="checkout-form-list">
                                <label>Company Name</label>
                                <input type="text" placeholder="" />
                              </div>
                            </div>
                            <div className="col-md-6">
                              <div className="checkout-form-list">
                                <label>
                                  Email Address <span className="required">*</span>
                                </label>
                                <input type="email" placeholder="" />
                              </div>
                            </div>
                            <div className="col-md-6">
                              <div className="checkout-form-list">
                                <label>
                                  Phone <span className="required">*</span>
                                </label>
                                <input type="text" placeholder="Postcode / Zip" />
                              </div>
                            </div>
                            <div className="col-md-12">
                              <div className="country-select">
                                <label>
                                  Country <span className="required">*</span>
                                </label>
                                <select>
                                  <option value="volvo">bangladesh</option>
                                  <option value="saab">Algeria</option>
                                  <option value="mercedes">Afghanistan</option>
                                  <option value="audi">Ghana</option>
                                  <option value="audi2">Albania</option>
                                  <option value="audi3">Bahrain</option>
                                  <option value="audi4">Colombia</option>
                                  <option value="audi5">Dominican Republic</option>
                                </select>
                              </div>
                            </div>
                            <div className="col-md-12">
                              <div className="checkout-form-list">
                                <label>
                                  Address <span className="required">*</span>
                                </label>
                                <input type="text" placeholder="Street address" />
                              </div>
                            </div>
                            <div className="col-md-12">
                              <div className="checkout-form-list">
                                <input
                                  type="text"
                                  placeholder="Apartment, suite, unit etc. (optional)"
                                />
                              </div>
                            </div>
                            <div className="col-md-12">
                              <div className="checkout-form-list">
                                <label>
                                  Town / City <span className="required">*</span>
                                </label>
                                <input type="text" placeholder="Town / City" />
                              </div>
                            </div>
                            <div className="col-md-6">
                              <div className="checkout-form-list">
                                <label>
                                  State / County <span className="required">*</span>
                                </label>
                                <input type="text" placeholder="" />
                              </div>
                            </div>
                            <div className="col-md-6">
                              <div className="checkout-form-list">
                                <label>
                                  Postcode / Zip <span className="required">*</span>
                                </label>
                                <input type="text" placeholder="Postcode / Zip" />
                              </div>
                            </div>
                            <div className="col-md-12">
                              <div className="checkout-form-list create-acc">
                                <input id="cbox" type="checkbox" />
                                <label>Create an account?</label>
                              </div>
                              <div
                                id="cbox_info"
                                className="checkout-form-list create-account"
                              >
                                <p>
                                  Create an account by entering the information below.
                                  If you are a returning customer please login at the
                                  top of the page.
                                </p>
                                <input type="password" placeholder="password" />
                              </div>
                            </div>
                          </div>
                          <div className="different-address">
                            <div className="ship-different-title">
                              <h3>
                                <label>Ship to a different address?</label>
                                <input id="ship-box" type="checkbox" />
                              </h3>
                            </div>
                            <div id="ship-box-info" className="row">
                              <div className="col-md-12">
                                <div className=" form-group selectwrap">
                                  <label>
                                    Country <span className="required">*</span>
                                  </label>
                                  <select className="form-control">
                                    <option value="volvo">bangladesh</option>
                                    <option value="saab">Algeria</option>
                                    <option value="mercedes">Afghanistan</option>
                                    <option value="audi">Ghana</option>
                                    <option value="audi2">Albania</option>
                                    <option value="audi3">Bahrain</option>
                                    <option value="audi4">Colombia</option>
                                    <option value="audi5">Dominican Republic</option>
                                  </select>
                                </div>
                              </div>
                              <div className="col-md-6">
                                <div className="checkout-form-list">
                                  <label>
                                    First Name <span className="required">*</span>
                                  </label>
                                  <input type="text" placeholder="" />
                                </div>
                              </div>
                              <div className="col-md-6">
                                <div className="checkout-form-list">
                                  <label>
                                    Last Name <span className="required">*</span>
                                  </label>
                                  <input type="text" placeholder="" />
                                </div>
                              </div>
                              <div className="col-md-12">
                                <div className="checkout-form-list">
                                  <label>Company Name</label>
                                  <input type="text" placeholder="" />
                                </div>
                              </div>
                              <div className="col-md-12">
                                <div className="checkout-form-list">
                                  <label>
                                    Address <span className="required">*</span>
                                  </label>
                                  <input type="text" placeholder="Street address" />
                                </div>
                              </div>
                              <div className="col-md-12">
                                <div className="checkout-form-list">
                                  <input
                                    type="text"
                                    placeholder="Apartment, suite, unit etc. (optional)"
                                  />
                                </div>
                              </div>
                              <div className="col-md-12">
                                <div className="checkout-form-list">
                                  <label>
                                    Town / City <span className="required">*</span>
                                  </label>
                                  <input type="text" placeholder="Town / City" />
                                </div>
                              </div>
                              <div className="col-md-6">
                                <div className="checkout-form-list">
                                  <label>
                                    State / County <span className="required">*</span>
                                  </label>
                                  <input type="text" placeholder="" />
                                </div>
                              </div>
                              <div className="col-md-6">
                                <div className="checkout-form-list">
                                  <label>
                                    Postcode / Zip <span className="required">*</span>
                                  </label>
                                  <input type="text" placeholder="Postcode / Zip" />
                                </div>
                              </div>
                              <div className="col-md-6">
                                <div className="checkout-form-list">
                                  <label>
                                    Email Address <span className="required">*</span>
                                  </label>
                                  <input type="email" placeholder="" />
                                </div>
                              </div>
                              <div className="col-md-6">
                                <div className="checkout-form-list">
                                  <label>
                                    Phone <span className="required">*</span>
                                  </label>
                                  <input type="text" placeholder="Postcode / Zip" />
                                </div>
                              </div>
                            </div>
                            <div className="order-notes">
                              <div className="checkout-form-list">
                                <label>Order Notes</label>
                                <textarea
                                  id="checkout-mess"
                                  cols={30}
                                  rows={10}
                                  placeholder="Notes about your order, e.g. special notes for delivery."
                                  defaultValue={""}
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <div className="your-order">
                          <h3>Your order</h3>
                          <div className="your-order-table table-responsive">
                            <table>
                              <thead>
                                <tr>
                                  <th className="product-name">Product</th>
                                  <th className="product-total">Total</th>
                                </tr>
                              </thead>

                              {
                                cart && cart.map((item, index) => (

                                  <tbody>
                                    <tr className="cart_item">
                                      <td className="product-name">
                                        {item.name} {" "}
                                        <strong className="product-quantity"> × {item.quantity}</strong>
                                      </td>
                                      <td className="product-total">
                                        <span className="amount">£{perAmount(item)}</span>
                                      </td>
                                    </tr>
                                  </tbody>

                                ))
                              }
                              <tfoot>
                                <tr className="cart-subtotal">
                                  <th>Cart Subtotal</th>
                                  <td>
                                    <span className="amount">£{totalAmount()}</span>
                                  </td>
                                </tr>
                                <tr className="shipping">
                                  <th>Shipping</th>
                                  <td>
                                    <ul>
                                      <li>
                                        
                                        <label>
                                          Flat Rate:{""}
                                          <span className="amount">£7.00</span>
                                        </label>
                                      </li>
                                    
                                    </ul>
                                  </td>
                                </tr>
                                <tr className="order-total">
                                  <th>Order Total</th>
                                  <td>
                                    <strong>
                                      <span className="amount">£{totalAmount()-7}</span>
                                    </strong>
                                  </td>
                                </tr>
                              </tfoot>
                            </table>
                          </div>
                          {/*   payment method accordion*/}
                          <div className="payment-method">
                            <div
                              className="panel-group"
                              id="accordion"
                              role="tablist"
                              aria-multiselectable="true"
                            >
                              <div className="panel panel-default">
                                <div
                                  className="panel-heading"
                                  role="tab"
                                  id="headingOne"
                                >
                                  <h4 className="panel-title">
                                    <a
                                      className="collapsed"
                                      role="button"
                                      data-bs-toggle="collapse"
                                      data-bs-parent="#accordion"
                                      href="#collapseOne"
                                      aria-expanded="false"
                                      aria-controls="collapseOne"
                                    >
                                      Direct Bank Transfer
                                    </a>
                                  </h4>
                                </div>
                                <div
                                  style={{ height: 0 }}
                                  aria-expanded="false"
                                  id="collapseOne"
                                  className="panel-collapse collapse"
                                  role="tabpanel"
                                  aria-labelledby="headingOne"
                                >
                                  <div className="panel-body">
                                    <p>
                                      Make your payment directly into our bank
                                      account. Please use your Order ID as the payment
                                      reference. Your order won’t be shipped until the
                                      funds have cleared in our account.
                                    </p>
                                  </div>
                                </div>
                              </div>
                              <div className="panel panel-default">
                                <div
                                  className="panel-heading"
                                  role="tab"
                                  id="headingTwo"
                                >
                                  <h4 className="panel-title">
                                    <a
                                      className=""
                                      role="button"
                                      data-bs-toggle="collapse"
                                      data-bs-parent="#accordion"
                                      href="#collapseTwo"
                                      aria-expanded="true"
                                      aria-controls="collapseTwo"
                                    >
                                      Cheque Payment
                                    </a>
                                  </h4>
                                </div>
                                <div
                                  style={{}}
                                  aria-expanded="true"
                                  id="collapseTwo"
                                  className="panel-collapse collapse in"
                                  role="tabpanel"
                                  aria-labelledby="headingTwo"
                                >
                                  <div className="panel-body">
                                    <p>
                                      Please send your cheque to Store Name, Store
                                      Street, Store Town, Store State / County, Store
                                      Postcode.
                                    </p>
                                  </div>
                                </div>
                              </div>
                              <div className="panel panel-default">
                                <div
                                  className="panel-heading"
                                  role="tab"
                                  id="headingThree"
                                >
                                  <h4 className="panel-title">
                                    <a
                                      className="collapsed"
                                      role="button"
                                      data-bs-toggle="collapse"
                                      data-bs-parent="#accordion"
                                      href="#collapseThree"
                                      aria-expanded="false"
                                      aria-controls="collapseThree"
                                    >
                                      PayPal{" "}
                                      <img src="images/pay/payment.png" alt="" />
                                    </a>
                                  </h4>
                                </div>
                                <div
                                  style={{ height: 0 }}
                                  aria-expanded="false"
                                  id="collapseThree"
                                  className="panel-collapse collapse"
                                  role="tabpanel"
                                  aria-labelledby="headingThree"
                                >
                                  <div className="panel-body">
                                    <p>
                                      Pay via PayPal; you can pay with your credit
                                      card if you don’t have a PayPal account.
                                    </p>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="order-button-payment">
                              <input defaultValue="Place order" type="submit" />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
              {/* checkout-area end */}
            </div>
          </div>
        </div>
        {/*main container end*/}
        <div className="clearfix" />




      </>


    </div>
  )
}

export default CheckOut

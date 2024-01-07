import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchProducts } from '../../store/slices/productSlice';
import { increaseQuantity, decreaseQuantity, removeFromCart } from '../../store/slices/cartSlice'; // cartSlice içindeki getCartItems'ı içe aktarın
import { mystore } from '../../store/store';


function Cart() {
  const { cart } = useSelector((mystore) => {    
       return {
        cart:mystore.cart.items
}
})

const { product } = useSelector((mystore) => {
  return {
      product: mystore.products.data,
  }
})

    const dispatch = useDispatch();
  
    useEffect(() => {
      dispatch(fetchProducts());
    }, [dispatch]);
  
    const perAmount = (item) => {
      return item.price * item.quantity;
    };
  
    const iQuantity = (itemId) => {
      dispatch(increaseQuantity(itemId)); // Redux Toolkit slice ile artırma işlemi
    };
  
    const qQuantity = (itemId) => {
      dispatch(decreaseQuantity(itemId)); // Redux Toolkit slice ile azaltma işlemi
    };
  
    const totalAmount = () => {
      let total = 0
      cart.forEach(element => {
        total += element.price * element.quantity
      });
      return total
    }
  
    const removeCart = (itemID) => {
      dispatch(removeFromCart(itemID))
    }


  return (
    <>

      <div className="main-container my-log fullwidth">
        <header className="entry-header">
          <div className="container">
            <h1 className="entry-title rjc4">Shopping Cart</h1>
          </div>
        </header>
        <div className="container">
          <div id="shopping-cart" className="shp-crt">
            <nav className="breadcrumb tnm">
              <a href="#">Home</a>
              <span className="separator">/</span>Shopping Cart
            </nav>
            <div className="row">
              <div className="col-lg-12">
                <div className="entry-content">
                  <div className="row-container">
                    <div className="con table-responsive">
                      <table className="shop_table cart">
                        <thead>
                          <tr>
                            <th className="product-thumbnail">Image</th>
                            <th className="product-name">Product</th>
                            <th className="product-price">Price</th>
                            <th className="product-quantity">Quantity</th>
                            <th className="product-subtotal">Total</th>
                            <th className="product-remove">Remove</th>
                          </tr>
                        </thead>
                        <tbody>
                          {
                           cart && cart.map((item, index) => (
                              <tr key={index} className="cart_item">
                                <td className="product-thumbnail">
                                  <a href="#">
                                    <img src={item.image} alt="product" />
                                  </a>
                                </td>
                                <td className="product-name">
                                  <a href="#">{item.name} </a>
                                </td>
                                <td className="product-price">
                                  <span className="amount">£{item.price}</span>
                                </td>
                                <td className="product-quantity">
                                  <div className="quantity">
                                    <input
                                      step={1}
                                      min={0}
                                      name="cart"
                                      defaultValue={item.quantity}
                                      title="Qty"
                                      className="input-text qty text"
                                      size={4}
                                      type="number"
                                      onKeyUp={(e) => {
                                        if (e.key === "ArrowUp") {
                                          iQuantity(item.id);
                                        } else if (e.key === "ArrowDown") {
                                          qQuantity(item.id); 
                                        }
                                      }}
                                    />
                                  </div>
                                </td>
                                <td className="product-subtotal">
                                  <span className="amount">£{perAmount(item)}</span>
                                </td>
                                <td className="product-remove">
                                <div onClick={() => removeCart(item.id)} className="del-icon">
                            <i className="fa fa-times-circle" />
                          </div>
                                </td>
                              </tr>
                            ))
                          }
                        </tbody>
                      </table>
                    </div>
                    <form
                      className="cart-form"
                      action="https://htmldemo.net/chaos/chaos/-"
                      method="post"
                    >
                      <div className="row">
                        <div className="col-md-6 col-lg-8">
                          <div className="buttons-cart">
                            <input
                              className="button"
                              name="update_cart"
                              defaultValue="Update Cart"
                              type="submit"
                            />
                            <a className="button continue" href="#">
                              Continue Shopping
                            </a>
                          </div>
                          <div className="coupon">
                            <h3>Coupon</h3>
                            <p>Enter your coupon code if you have one.</p>
                            <input
                              name="coupon_code"
                              className="input-text"
                              id="coupon_code"
                              defaultValue=""
                              placeholder="Coupon code"
                              type="text"
                            />
                            <input
                              className="button"
                              name="apply_coupon"
                              defaultValue="Apply Coupon"
                              type="submit"
                            />
                          </div>
                        </div>
                        <div className="col-md-6 col-lg-4">
                          <div className="cart_totals ">
                            <h2>Cart Totals</h2>
                            <table>
                              <tbody>
                                <tr className="cart-subtotal">
                                  <th>Subtotal</th>
                                  <td>
                                    <span className="amount">£{totalAmount()}</span>
                                  </td>
                                </tr>
                                <tr className="shipping">
                                  <th>Shipping</th>
                                  <td>
                                    <p>
                                      Flat Rate:{" "}
                                      <span className="amount">£7.00</span>
                                    </p>
                                    <p>
                                      <a
                                        href="#"
                                        className="shipping-calculator-button"
                                      >
                                        Calculate Shipping
                                      </a>
                                    </p>
                                  </td>
                                </tr>
                                <tr className="order-total">
                                  <th>Total</th>
                                  <td>
                                    <strong>
                                      <span className="amount">£{totalAmount()-7}</span>
                                    </strong>{" "}
                                  </td>
                                </tr>
                              </tbody>
                            </table>
                            <div className="proceed-to-checkout">
                              <a href="#" className="checkout-button button">
                                Proceed to Checkout
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
              {/* end of entry-content */}
            </div>
          </div>
        </div>
      </div>
      {/*main container end*/}
    </>
  )
}

export default Cart

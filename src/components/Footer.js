import React from 'react'

function Footer() {
  return (
    <>
    {/* Footer start */}
    <footer>
      {/* Footer top area */}
      <div className="footer-area clearfix">
        <div className="footer-top-area">
          <div className="container">
            <hr className="bottom-space9 res1" />
            <div className="row">
              <div className="col-md-4">
                <div className="aboutus-widget">
                  <h3 className="widget-title">About us</h3>
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry’s
                    standard dummy text ever since. Lorem Ipsum is simply dummy
                    text of the printing and typesetting industry.{" "}
                  </p>
                </div>
              </div>
              <div className="col-md-4">
                <div className="twitter-widget rjc0">
                  <h3 className="widget-title">Lastest post from Twitter</h3>
                  <div className="twitter-post">
                    <p>
                      Purchase our new WordPress WooCommerce theme - TimePlus{" "}
                      <a href="#">goo.gl/g37uoC</a>{" "}
                      <a href="#">pic.twitter.com/vS4nBq69jM</a>
                    </p>
                    <a href="#">Last update : 01-09-16</a>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="widget-contact-us rjc01">
                  <h3 className="widget-title">Contact Us</h3>
                  <div className="contact-information">
                    <ul>
                      <li>
                        <i className="fa fa-phone"> </i>8123.456.7890
                      </li>
                      <li>
                        <i className="fa fa-mobile-phone"> </i>8493.867.1986
                      </li>
                      <li>
                        <i className="fa fa-envelope-o"> </i>support@company.com
                      </li>
                      <li>
                        <i className="fa fa-map-marker"> </i>time city
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Footer Middle area */}
        <div className="footer-middle-area">
          <div className="container">
            <hr className="footer-line" />
            <div className="row">
              <div className="col-lg-2 col-md-4">
                <h3 className="widget-title">Information</h3>
                <ul className="widget-menu">
                  <li>
                    <a href="#">Our Blog</a>
                  </li>
                  <li>
                    <a href="#">About Our Shop</a>
                  </li>
                  <li>
                    <a href="#">Secure Shopping</a>
                  </li>
                  <li>
                    <a href="#">Privacy Policy</a>
                  </li>
                  <li>
                    <a href="#">Delivery infomation</a>
                  </li>
                </ul>
              </div>
              <div className="col-lg-2 col-md-4">
                <h3 className="widget-title">My account</h3>
                <ul className="widget-menu">
                  <li>
                    <a href="#">My Account</a>
                  </li>
                  <li>
                    <a href="#">Shopping cart</a>
                  </li>
                  <li>
                    <a href="#">Advanced Search</a>
                  </li>
                  <li>
                    <a href="#">Orders And Returns</a>
                  </li>
                  <li>
                    <a href="#">contact Us</a>
                  </li>
                </ul>
              </div>
              <div className="col-lg-2 col-md-4">
                <h3 className="widget-title">our service</h3>
                <ul className="widget-menu">
                  <li>
                    <a href="#">Shipping &amp; Returns</a>
                  </li>
                  <li>
                    <a href="#">Secure Shopping</a>
                  </li>
                  <li>
                    <a href="#">International Shipping</a>
                  </li>
                  <li>
                    <a href="#">Affiliates</a>
                  </li>
                  <li>
                    <a href="#">Secure Shopping</a>
                  </li>
                </ul>
              </div>
              <div className="col-lg-2 col-md-4">
                <h3 className="widget-title">Customer care</h3>
                <ul className="widget-menu">
                  <li>
                    <a href="#">Sitemap</a>
                  </li>
                  <li>
                    <a href="#">Term &amp; Conditions</a>
                  </li>
                  <li>
                    <a href="#">Gift Vouchers</a>
                  </li>
                  <li>
                    <a href="#">BestSellers</a>
                  </li>
                  <li>
                    <a href="#">Sitemap</a>
                  </li>
                </ul>
              </div>
              <div className="col-lg-4 col-md-4">
                <div className="widget widget-social">
                  <h3 className="widget-title">Social networks</h3>
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
                        title="Tumblr"
                        href="#"
                        className="tumblr social-icon"
                      >
                        <i className="fa fa-tumblr" />
                      </a>
                    </li>
                    <li>
                      <a
                        target="_blank"
                        data-bs-toggle="tooltip"
                        title="Google-plus"
                        href="#"
                        className="google-plus social-icon"
                      >
                        <i className="fa fa-google-plus" />
                      </a>
                    </li>
                    <li>
                      <a
                        target="_blank"
                        data-bs-toggle="tooltip"
                        title="Dribbble"
                        href="#"
                        className="dribbble social-icon"
                      >
                        <i className="fa fa-dribbble" />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Footer bottom area  */}
        <div className="footer-bottom-area">
          <div className="container">
            <div className="row">
              <div className="col-md-7 col-sm-12 col-xs-12">
                <div className="copyright-info">
                  Copyright © 2022
                  <a href="http://bootexperts.com/">BootExperts.</a> All Rights
                  Reserved
                </div>
              </div>
              <div className="col-md-5 col-sm-12 col-xs-12">
                <div className="bottom-right">
                  <a href="#">
                    <img src="images/pay/pay-visa.png" alt="pay-visa" />
                  </a>
                  <a href="#">
                    <img src="images/pay/pay-maestro.png" alt="pay-maestro" />
                  </a>
                  <a href="#">
                    <img src="images/pay/pay-discover.png" alt="pay-discover" />
                  </a>
                  <a href="#">
                    <img src="images/pay/pay-cirrus.png" alt="pay-cirrus" />
                  </a>
                  <a href="#">
                    <img src="images/pay/pay-bank.png" alt="pay-bank" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Footer bottom end */}
    </footer>
    {/* Footer end */}
  </>
  
  )
}

export default Footer

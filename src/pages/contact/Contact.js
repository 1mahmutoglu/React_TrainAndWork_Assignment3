import React from 'react'

function Contact() {
  return (
    <>
    <div className="main-container contact-page">
      <div className="entry-content">
        <header className="entry-header">
          <div className="container">
            <div className="row">
              <div className="col-md-12 col-sm-12 col-xs-12">
                <h1 className="entry-title resc">Contact</h1>
              </div>
            </div>
          </div>
        </header>
        <div className="map-wrapper">
          <div className="container">
            <div className="row">
              <div className="col-md-12 col-sm-12 col-xs-12">
                <div id="googleMap" style={{ width: "100%", height: 450 }} />
              </div>
            </div>
          </div>
        </div>
        <div className="contact-fom-info clearfix">
          <div className="container">
            <div className="row">
              <div className="contact-us">
                <div className="entry-content row">
                  <div className="col-md-6">
                    <h3>ONLINE SHOP</h3>
                    <p>
                      We are happy to answer any questions you may have about our
                      online shop.
                      <br />
                    </p>
                    {/* ACCORDION START */}
                    <div className="contactus-group" id="accordion1">
                      <div className="contactus" id="panel1">
                        <div className="contactus-heading">
                          <h4>
                            <a
                              className="btn contactbtn"
                              data-bs-toggle="collapse"
                              data-bs-parent="#accordion1"
                              href="#contactbtn"
                            >
                              Contact form
                            </a>
                          </h4>
                        </div>
                        <div
                          id="contactbtn"
                          className="contactus-collapse collapse"
                        >
                          <div className="contactus-body">
                            <form>
                              <div>
                                <div className="contactus-form-list">
                                  <input
                                    type="text"
                                    placeholder="Name (required)"
                                  />
                                </div>
                              </div>
                              <div>
                                <div className="contactus-form-list">
                                  <input
                                    type="email"
                                    placeholder="Email (required)"
                                  />
                                </div>
                              </div>
                              <div>
                                <div className="contactus-form-list">
                                  <input type="text" placeholder="Subject" />
                                </div>
                              </div>
                              <div>
                                <div className="contactus-form-list">
                                  <textarea
                                    placeholder="Message"
                                    rows={5}
                                    defaultValue={""}
                                  />
                                </div>
                              </div>
                              <button type="button" className="btn submitbtn">
                                submit form
                              </button>
                            </form>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* ACCORDION END */}
                    <p>
                      <a href="tel:">
                        <em>Tel:1-234-567-8888</em>
                      </a>
                    </p>
                    <p>
                      Monday to Friday from 8.30 am to 7.30 pm EST
                      <br /> Saturday from 10.00 am to 4.00 pm EST
                    </p>
                  </div>
                  {/* col-md-6 end */}
                  <div className="col-md-6">
                    <h3>ONLINE SHOP</h3>
                    <p>
                      We are happy to answer any questions you may have about our
                      online shop.
                      <br />
                    </p>
                    {/* ACCORDION START */}
                    <div className="contactus-group" id="accordion2">
                      <div className="contactus" id="panel2">
                        <div className="contactus-heading">
                          <h4>
                            <a
                              className="btn contactbtn2"
                              data-bs-toggle="collapse"
                              data-bs-parent="#accordion2"
                              href="#contactbtn2"
                            >
                              Contact form
                            </a>
                          </h4>
                        </div>
                        <div
                          id="contactbtn2"
                          className="contactus-collapse collapse"
                        >
                          <div className="contactus-body">
                            <form>
                              <div>
                                <div className="contactus-form-list">
                                  <input
                                    type="text"
                                    placeholder="Name (required)"
                                  />
                                </div>
                              </div>
                              <div>
                                <div className="contactus-form-list">
                                  <input
                                    type="email"
                                    placeholder="Email (required)"
                                  />
                                </div>
                              </div>
                              <div>
                                <div className="contactus-form-list">
                                  <input type="text" placeholder="Subject" />
                                </div>
                              </div>
                              <div>
                                <div className="contactus-form-list">
                                  <textarea
                                    placeholder="Message"
                                    rows={5}
                                    defaultValue={""}
                                  />
                                </div>
                              </div>
                              <button type="button" className="btn submitbtn">
                                submit form
                              </button>
                            </form>
                          </div>
                        </div>
                      </div>
                    </div>
                    <p>
                      <a href="tel:">
                        <em>Tel:1-234-567-8888</em>
                      </a>
                    </p>
                  </div>
                  {/* col-md-6 end */}
                </div>
              </div>
            </div>
            {/* form row end */}
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-md-12 col-sm-12 col-xs-12">
              <div className="contact-us">
                <div className="entry-content">
                  <div className="socialmedia">
                    <h3>SOCIAL MEDIA</h3>
                    <p>
                      You can also send your queries to our Facebook and Twitter
                      Customer Service pages
                      <br /> Facebook: chao’s care
                      <br /> Twitter: @chao’s_care
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="clearfix" />
  </>
  
  )
}

export default Contact

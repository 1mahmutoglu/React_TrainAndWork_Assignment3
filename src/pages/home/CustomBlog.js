import React from 'react'

function CustomBlog() {
  return (
<>
  {/* Custom blog area start */}
  <section className="custom-blog  clearfix">
    <div className="container">
      <div className="row">
        <div className=" col-md-8">
          <div className="latest-posts">
            <div className="blog-content">
              <h3>
                <span>summer on the blog</span>
              </h3>
            </div>
            <div className="posts-carousel slick-slider">
              <div className="item-col slick-slide slick-active">
                <div className="post-wrapper">
                  <div className="post-thumb">
                    <a href="#">
                      <img src="images/blog/pic1.jpg" alt="blog" />
                    </a>
                  </div>
                  <div className="post-info">
                    <div className="post-header">
                      <h3 className="post-title">
                        <a href="#">Proin faucibus massa vel tristique</a>
                      </h3>
                      <span className="post-date">
                        <i className="fa fa-clock-o" />
                        <span className="month">June</span>
                        <span className="day">25</span>,{" "}
                        <span className="year">2015</span>
                      </span>
                    </div>
                    <div className="post-excerpt">
                      <p>
                        Donec vitae hendrerit arcu, sit amet faucibus nisl. Cras
                        pretium arcu ex. Aenean posuere libero
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="item-col slick-slide slick-active">
                <div className="post-wrapper">
                  <div className="post-thumb">
                    <a href="#">
                      <img src="images/blog/pic2.jpg" alt="blog" />
                    </a>
                  </div>
                  <div className="post-info">
                    <div className="post-header">
                      <h3 className="post-title">
                        <a href="#">Blog image post layout</a>
                      </h3>
                      <span className="post-date">
                        <i className="fa fa-clock-o" />
                        <span className="month">March</span>
                        <span className="day">10</span>,
                        <span className="year">2015</span>
                      </span>
                    </div>
                    <div className="post-excerpt">
                      <p>
                        Donec vitae hendrerit arcu, sit amet faucibus nisl. Cras
                        pretium arcu ex. Aenean posuere libero
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="item-col slick-slide">
                <div className="post-wrapper">
                  <div className="post-thumb">
                    <a href="#">
                      <img src="images/blog/pic3.jpg" alt="blog" />
                    </a>
                  </div>
                  <div className="post-info">
                    <div className="post-header">
                      <h3 className="post-title">
                        <a href="#">Post in Gallery format</a>
                      </h3>
                      <span className="post-date">
                        <i className="fa fa-clock-o" />
                        <span className="month">December</span>
                        <span className="day">01</span>,
                        <span className="year">2014</span>
                      </span>
                    </div>
                    <div className="post-excerpt">
                      <p>
                        Donec vitae hendrerit arcu, sit amet faucibus nisl. Cras
                        pretium arcu ex. Aenean posuere libero
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="item-col slick-slide">
                <div className="post-wrapper">
                  <div className="post-thumb">
                    <a href="#">
                      <img src="images/blog/pic4.jpg" alt="blog" />
                    </a>
                  </div>
                  <div className="post-info">
                    <div className="post-header">
                      <h3 className="post-title">
                        <a href="#">Post in Gallery format</a>
                      </h3>
                      <span className="post-date">
                        <i className="fa fa-clock-o" />
                        <span className="month">December</span>
                        <span className="day">01</span>,
                        <span className="year">2014</span>
                      </span>
                    </div>
                    <div className="post-excerpt">
                      <p>
                        Donec vitae hendrerit arcu, sit amet faucibus nisl. Cras
                        pretium arcu ex. Aenean posuere libero
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="item-col slick-slide">
                <div className="post-wrapper">
                  <div className="post-thumb">
                    <a href="#">
                      <img src="images/blog/pic2.jpg" alt="blog" />
                    </a>
                  </div>
                  <div className="post-info">
                    <div className="post-header">
                      <h3 className="post-title">
                        <a href="#">Post in Gallery format</a>
                      </h3>
                      <span className="post-date">
                        <i className="fa fa-clock-o" />
                        <span className="month">December</span>
                        <span className="day">01</span>,
                        <span className="year">2014</span>
                      </span>
                    </div>
                    <div className="post-excerpt">
                      <p>
                        Donec vitae hendrerit arcu, sit amet faucibus nisl. Cras
                        pretium arcu ex. Aenean posuere libero
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="item-col slick-slide">
                <div className="post-wrapper">
                  <div className="post-thumb">
                    <a href="#">
                      <img src="images/blog/pic1.jpg" alt="blog" />
                    </a>
                  </div>
                  <div className="post-info">
                    <div className="post-header">
                      <h3 className="post-title">
                        <a href="#">Post in Gallery format</a>
                      </h3>
                      <span className="post-date">
                        <i className="fa fa-clock-o" />
                        <span className="month">December</span>
                        <span className="day">01</span>,
                        <span className="year">2014</span>
                      </span>
                    </div>
                    <div className="post-excerpt">
                      <p>
                        Donec vitae hendrerit arcu, sit amet faucibus nisl. Cras
                        pretium arcu ex. Aenean posuere libero
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* testimonial start */}
        <div className="col-md-4">
          <div className="testimonials hm22">
            <div className="testimonials-list slick-slider">
              <div className="quote first slick-slide slick-active">
                <blockquote className="testimonials-text">
                  <p>
                    Etiam rhoncus congue arcu sed interdum. Cras dolor diam,
                    accumsan eu aliquam eu, luctus vehicula velit. Nam eget
                    tortor ut felis fermentum sodales ac eu lacus
                  </p>
                </blockquote>
                <cite className="author">
                  <span>Elizabeth Taylor</span>{" "}
                  <span className="title">Designer of RoadThemes</span>
                </cite>
                {/*/.author*/}
              </div>
              <div className="quote slick-slide">
                <blockquote className="testimonials-text">
                  <p>
                    Integer tincidunt nisi libero, sed aliquet ipsum fermentum
                    eu. Duis porta egestas tellus sed vestibulum. Nam euismod
                    elit id dolor aliquet, ut blandit massa egestas
                  </p>
                </blockquote>
                <cite className="author">
                  <span>Katherine Sullivan</span>{" "}
                  <span className="title">Customer</span>
                </cite>
                {/*/.author*/}
              </div>
              <div className="quote slick-slide">
                <blockquote className="testimonials-text">
                  <p>
                    Proin varius erat sed nibh eleifend, scelerisque aliquam
                    sapien malesuada. Donec at eros ex. Etiam tempus ornare nibh
                    vel gravidased nibh eleifend
                  </p>
                </blockquote>
                <cite className="author">
                  <span>Jenifer Brown</span>{" "}
                  <span className="title">Manager of AZ</span>
                  {/*/.title*/}
                </cite>
                {/*/.author*/}
              </div>
              <div className="quote last  slick-slide">
                <blockquote className="testimonials-text">
                  <p>
                    Duis autem vel eum iriure dolor in hendrerit in vulputate
                    velit esse molestie consequat, vel illum dolore eu feugiat
                    nulla facilisis at vero eros et accumsan et iusto
                  </p>
                </blockquote>
                <cite className="author">
                  <span>Kathy Young</span>{" "}
                  <span className="title">CEO of SunPark</span>
                  {/*/.title*/}{" "}
                </cite>
                {/*/.author*/}
              </div>
            </div>
            {/*/.testimonials-list*/}
            <div className="clearfix"></div>
          </div>
          {/* Testimonial end */}
        </div>
      </div>
    </div>
  </section>
  {/* custom blog area end */}
</>

  )
}

export default CustomBlog

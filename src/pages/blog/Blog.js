import React from 'react'

function Blog() {
  return (
<div>
    <div className="main-container">
      {/*=================================
    bradcrumb start */}
      <div className="blog-page">
        <div className="container">
          <nav className="breadcrumb rjc2">
            <a href="#">Home</a>
            <span className="separator">/</span>Blog
          </nav>
        </div>
        {/*=================================
        breadcramb end end */}
        {/*=================================
        Product carousel start */}
        <div className="container">
          <div className="row">
            <div className="col-lg-9">
              <div className="page-content blog-page blog-sidebar right-sidebar">
                <div className="row">
                  <div className="single-blog">
                    <div className="col-sm-12">
                      <div className="post-thumbnail">
                        <a href="#">
                          <img src="images/blog/pic1.jpg" alt="blog" />
                        </a>
                      </div>
                      <div className="post-info">
                        <div className="entry-header">
                          <h1 className="entry-title">
                            <a href="#">Blog image post layout</a>
                          </h1>
                        </div>
                        <div className="entry-meta-small">
                          <i className="fa fa-clock-o" />
                          25 Jun / Posted by{" "}
                          <span className="author vcard">
                            <a href="#" title="" rel="author">
                              admin
                            </a>
                          </span>
                        </div>
                        <div className="entry-summary">
                          <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Curabitur aliquet pulvinar libero ac
                            scelerisque. Curabitur ut commodo elit, eu porttitor
                            leo. Donec et pharetra lorem. Vestibulum vehicula
                            dolor et metus fringilla elementum. Vestibulum aliquet
                            magna maximus, hendrerit dui eu...
                          </p>
                        </div>
                        <a className="readmore" href="#">
                          read more
                          <i className="fa fa-arrow-right" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="single-blog full-width-post">
                  <div className="post-thumbnail">
                    {/* gellaries start */}
                    <div className="su-player">
                      <div
                        id="su_slider"
                        className="su-slider su-slider-centered su-slider-pages-yes su-slider-responsive-yes"
                        style={{ width: "100%" }}
                        data-autoplay={3000}
                        data-speed={600}
                        data-mousewheel="true"
                      >
                        <div className="su-slider-slides">
                          <div className="su-slider-slide">
                            <a>
                              <img src="images/blog/43-1170x530.jpg" alt={8} />
                              <span className="su-slider-slide-title">8</span>
                            </a>
                          </div>
                          <div className="su-slider-slide">
                            <a>
                              <img src="images/blog/53-1170x530.jpg" alt={7} />
                              <span className="su-slider-slide-title">7</span>
                            </a>
                          </div>
                          <div className="su-slider-slide">
                            <a>
                              <img src="images/blog/72-1170x530.jpg" alt={6} />
                              <span className="su-slider-slide-title">6</span>
                            </a>
                          </div>
                          <div className="su-slider-slide">
                            <a>
                              <img src="images/blog/53-1170x530.jpg" alt={5} />
                              <span className="su-slider-slide-title">5</span>
                            </a>
                          </div>
                          <div className="su-slider-slide">
                            <a>
                              <img src="images/blog/43-1170x530.jpg" alt={4} />
                              <span className="su-slider-slide-title">4</span>
                            </a>
                          </div>
                        </div>
                        <div className="su-slider-nav">
                          <div className="su-slider-direction">
                            <span className="su-slider-prev" />
                            <span className="su-slider-next" />
                          </div>
                          <div className="su-slider-pagination" />
                        </div>
                      </div>
                    </div>
                    {/* gellaries end */}
                  </div>
                  <div className="post-info">
                    <div className="entry-header">
                      <h1 className="entry-title">
                        <a href="#">Post in Gallery format</a>
                      </h1>
                    </div>
                    <div className="entry-meta-small">
                      <i className="fa fa-clock-o" />
                      25 Jun / Posted by{" "}
                      <span className="author vcard">
                        <a href="#" title="" rel="author">
                          admin
                        </a>
                      </span>
                    </div>
                    <div className="entry-summary">
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Curabitur aliquet pulvinar libero ac scelerisque.
                        Curabitur ut commodo elit, eu porttitor leo. Donec et
                        pharetra lorem. Vestibulum vehicula dolor et metus
                        fringilla elementum. Vestibulum aliquet magna maximus,
                        hendrerit dui eu...{" "}
                      </p>
                    </div>
                    <a className="readmore tnmm" href="#">
                      read more
                      <i className="fa fa-arrow-right" />
                    </a>
                  </div>
                </div>
                <div className="row">
                  <div className="single-blog">
                    <div className="col-sm-12">
                      <div className="post-thumbnail">
                        <a href="#">
                          <img src="images/blog/pic1.jpg" alt="blog" />
                        </a>
                        <div>
                          <audio className="player" controls="">
                            <source
                              src="images/blog/test.mp3"
                              type="audio/mpeg"
                            />
                          </audio>
                        </div>
                      </div>
                      <div className="post-info blog-rjt">
                        <div className="entry-header">
                          <h1 className="entry-title">
                            <a href="#">Single post in Audio</a>
                          </h1>
                        </div>
                        <div className="entry-meta-small">
                          <i className="fa fa-clock-o" />
                          25 Jun / Posted by{" "}
                          <span className="author vcard">
                            <a href="#" title="" rel="author">
                              admin
                            </a>
                          </span>
                        </div>
                        <div className="entry-summary">
                          <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Curabitur aliquet pulvinar libero ac
                            scelerisque. Curabitur ut commodo elit, eu porttitor
                            leo. Donec et pharetra lorem. Vestibulum vehicula
                            dolor et metus fringilla elementum. Vestibulum aliquet
                            magna maximus, hendrerit dui eu...{" "}
                          </p>
                        </div>
                        <a className="readmore" href="#">
                          read more
                          <i className="fa fa-arrow-right" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="single-blog full-width-post">
                  <div className="post-thumbnail">
                    <a href="#">
                      <img src="images/blog/63-800x453.jpg" alt="blog" />
                    </a>
                  </div>
                  <div className="post-info blog-rjt">
                    <div className="entry-header">
                      <h1 className="entry-title">
                        <a href="#">Post in Gallery format</a>
                      </h1>
                    </div>
                    <div className="entry-meta-small">
                      <i className="fa fa-clock-o" />
                      25 Jun / Posted by{" "}
                      <span className="author vcard">
                        <a href="#" title="" rel="author">
                          admin
                        </a>
                      </span>
                    </div>
                    <div className="entry-summary">
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Curabitur aliquet pulvinar libero ac scelerisque.
                        Curabitur ut commodo elit, eu porttitor leo. Donec et
                        pharetra lorem. Vestibulum vehicula dolor et metus
                        fringilla elementum. Vestibulum aliquet magna maximus,
                        hendrerit dui eu...
                      </p>
                    </div>
                    <a className="readmore" href="#">
                      read more
                      <i className="fa fa-arrow-right" />
                    </a>
                  </div>
                </div>
                <div className="pagination">
                  <span className="page-numbers current">1</span>
                  <a className="page-numbers" href="#">
                    2
                  </a>
                  <a className="next page-numbers" href="#">
                    Next
                  </a>
                </div>
              </div>
            </div>
            {/* sidebar start  */}
            <div id="secondary" className="col-lg-3 la-vi">
              <div className="sidebar-border right">
                <aside className="widget widget-search rep1">
                  <h3 className="widget-title">
                    <span>Search</span>
                  </h3>
                  <form action="#">
                    <div className="widget-form">
                      <input
                        type="text"
                        id="blog-search"
                        placeholder="Search..."
                      />
                      <button type="submit">
                        <i className="fa fa-search" />
                      </button>
                    </div>
                  </form>
                </aside>
                <aside id="meta-2" className="widget widget_meta">
                  <h3 className="widget-title">
                    <span>Meta</span>
                  </h3>
                  <ul>
                    <li>
                      <a href="#">Register</a>
                    </li>
                    <li>
                      <a href="#">Log in</a>
                    </li>
                    <li>
                      <a href="#">
                        Entries <abbr title="Really Simple Syndication">RSS</abbr>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        Comments{" "}
                        <abbr title="Really Simple Syndication">RSS</abbr>
                      </a>
                    </li>
                    <li>
                      <a href="#/" title="state-of-the-art">
                        WordPress.org
                      </a>
                    </li>
                  </ul>
                </aside>
                <aside id="archives-4" className="widget widget_archive">
                  <h3 className="widget-title">
                    <span>Blog Archives</span>
                  </h3>
                  <ul>
                    <li>
                      <a href="#">June 2015</a>&nbsp;(1)
                    </li>
                    <li>
                      <a href="#">March 2015</a>&nbsp;(1)
                    </li>
                    <li>
                      <a href="#">December 2014</a>&nbsp;(3)
                    </li>
                    <li>
                      <a href="#">November 2014</a>&nbsp;(4)
                    </li>
                    <li>
                      <a href="#">September 2014</a>&nbsp;(1)
                    </li>
                    <li>
                      <a href="#">August 2014</a>&nbsp;(1)
                    </li>
                  </ul>
                </aside>
                <aside id="categories-4" className="widget widget_categories">
                  <h3 className="widget-title">
                    <span>Categories</span>
                  </h3>
                  <ul>
                    <li className="cat-item cat-item-6">
                      <a href="#">Creative</a> (3)
                    </li>
                    <li className="#">
                      <a href="#">Fashion</a> (2)
                    </li>
                    <li className="cat-item cat-item-8">
                      <a href="#">Image</a> (3)
                    </li>
                    <li className="cat-item cat-item-9">
                      <a href="#">Photography</a> (2)
                    </li>
                    <li className="cat-item cat-item-10">
                      <a href="#">Travel</a> (4)
                    </li>
                    <li className="cat-item cat-item-11">
                      <a href="#">Videos</a> (2)
                    </li>
                    <li className="cat-item cat-item-12">
                      <a href="#">WordPress</a> (4)
                    </li>
                  </ul>
                </aside>
                <aside className="widget widget_road_widgets">
                  <h3 className="widget-title">
                    <span>Recents</span>
                  </h3>
                  <div className="recent-posts">
                    <div className="post-wrapper">
                      <div className="post-thumb">
                        <a href="#">
                          <img src="images/blog/thumb1-150x150.jpg" alt="blog" />
                        </a>
                      </div>
                      <div className="post-info">
                        <a href="#">
                          <p>Proin faucibus massa vel tristique</p>
                        </a>
                        <div className="post-date">May 25, 2015 </div>
                      </div>
                    </div>
                    <div className="post-wrapper">
                      <div className="post-thumb">
                        <a href="#">
                          <img src="images/blog/thumb2-150x150.jpg" alt="blog" />
                        </a>
                      </div>
                      <div className="post-info">
                        <a href="#">
                          <p>Proin faucibus massa vel tristique</p>
                        </a>
                        <div className="post-date">June 25, 2015 </div>
                      </div>
                    </div>
                    <div className="post-wrapper">
                      <div className="post-thumb">
                        <a href="#">
                          <img src="images/blog/thumb1-150x150.jpg" alt="blog" />
                        </a>
                      </div>
                      <div className="post-info">
                        <a href="#">
                          <p> Proin faucibus massa vel tristique</p>
                        </a>
                        <div className="post-date">June 25, 2015</div>
                      </div>
                    </div>
                    <div className="post-wrapper">
                      <div className="post-thumb">
                        <a href="#">
                          <img src="images/blog/thumb3-150x150.jpg" alt="blog" />
                        </a>
                      </div>
                      <div className="post-info">
                        <a href="#">
                          <p>Proin faucibus massa vel tristique</p>
                        </a>
                        <div className="post-date">December 1, 2014</div>
                      </div>
                    </div>
                  </div>
                </aside>
                <aside className="widget widget_road_widgets">
                  <h3 className="widget-title">
                    <span>Comments</span>
                  </h3>
                  <div className="post-wrapper">
                    <div className="post-thumb">
                      <img alt="comment" src="images/blog/avatar.jpg" />
                    </div>
                    <div className="post-info">
                      <p>admin says:</p>
                      <a href="#" title="admin on Post in Gallery format">
                        venenatis gravida ipsum....
                      </a>
                    </div>
                  </div>
                  <div className="post-wrapper">
                    <div className="post-thumb">
                      <img alt="comment" src="images/blog/avatar.jpg" />
                    </div>
                    <div className="post-info">
                      <p>demo says:</p>
                      <a href="#" title="demo on Blog image post layout">
                        Quisque semper nunc vitae...
                      </a>
                    </div>
                  </div>
                  <div className="post-wrapper">
                    <div className="post-thumb">
                      <img alt="comment" src="images/blog/avatar.jpg" />
                    </div>
                    <div className="post-info">
                      <p>admin says:</p>
                      <a href="#" title="admin on Blog image post layout">
                        Quisque orci nibh, porta...
                      </a>
                    </div>
                  </div>
                </aside>
                <aside id="tag_cloud-2" className="widget widget_tag_cloud bg">
                  <h3 className="widget-title">
                    <span>Tags</span>
                  </h3>
                  <div className="tagcloud">
                    <a
                      href="#"
                      className="tag-link-15"
                      title="1 topic"
                      style={{ fontSize: "8pt" }}
                    >
                      asian
                    </a>
                    <a
                      href="#"
                      className="tag-link-16"
                      title="2 topics"
                      style={{ fontSize: "14.3pt" }}
                    >
                      brown
                    </a>
                    <a
                      href="#"
                      className="tag-link-17"
                      title="3 topics"
                      style={{ fontSize: "18.5pt" }}
                    >
                      euro
                    </a>
                    <a
                      href="#"
                      className="tag-link-18"
                      title="4 topics"
                      style={{ fontSize: "22pt" }}
                    >
                      fashion
                    </a>
                    <a
                      href="#"
                      className="tag-link-19"
                      title="1 topic"
                      style={{ fontSize: "8pt" }}
                    >
                      france
                    </a>
                    <a
                      href="#"
                      className="tag-link-20"
                      title="2 topics"
                      style={{ fontSize: "14.3pt" }}
                    >
                      hat
                    </a>
                    <a
                      href="#"
                      className="tag-link-21"
                      title="3 topics"
                      style={{ fontSize: "18.5pt" }}
                    >
                      t-shirt
                    </a>
                    <a
                      href="#"
                      className="tag-link-22"
                      title="2 topics"
                      style={{ fontSize: "14.3pt" }}
                    >
                      teen
                    </a>
                    <a
                      href="#"
                      className="tag-link-23"
                      title="4 topics"
                      style={{ fontSize: "22pt" }}
                    >
                      travel
                    </a>
                    <a
                      href="#"
                      className="tag-link-24"
                      title="3 topics"
                      style={{ fontSize: "18.5pt" }}
                    >
                      white
                    </a>
                  </div>
                </aside>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*=================================
    side end */}
    </div>
    {/*=================================
      Main container end */}
    <div className="clearfix" />
  
    {/*=================================
      back to top */}
    <div id="back-top" className="hidden-xs hidden-sm hidden-md show" />
  
</div>
  )
}

export default Blog

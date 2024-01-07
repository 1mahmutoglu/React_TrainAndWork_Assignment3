import React from 'react'

function BlogDetail() {
  return (
    <div>

<>

  {/*=================================
    Main container start*/}
  <div className="main-container">
    {/*=================================
    bradcrumb start */}
    <div className="blog-page">
      <div className="container">
        <nav className="breadcrumb b-details">
          <a href="#">Home</a>
          <span className="separator">/</span>
          <a href="#">Fashion</a>
          <span className="separator">/</span>
          <a href="#">Image</a>
          <span className="separator">/</span>Blog single page
        </nav>
      </div>
      {/*=================================
      breadcramb end end */}
      {/*=================================
      Product carousel start */}
      <div className="container">
        <div className="row">
          <div className="col-lg-9">
            <div className="page-content blog-page single blog-sidebar right-sidebar">
              <header className="entry-header">
                <h1 className="entry-title">Blog image post layout</h1>
              </header>
              <div className="entry-meta">
                Posted by{" "}
                <span>
                  <a>admin</a>
                </span>{" "}
                05:12 AM March 10, 2015 <a href="#">3 comments</a>
              </div>
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
                    </a>
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
              <div className="single-blog full-width-post">
                <div className="post-thumbnail">
                  <img src="images/blog/single.jpg" alt="single-blog" />
                </div>
                <div className="postinfo-wrapper">
                  <div className="post-info">
                    <div className="entry-content">
                      <p>
                        Donec vitae hendrerit arcu, sit amet faucibus nisl. Cras
                        pretium arcu ex. Aenean posuere libero eu augue
                        condimentum rhoncus. Praesent ornare tortor ac ante
                        egestas hendrerit. Aliquam et metus pharetra, bibendum
                        massa nec, fermentum odio. Nunc id leo ultrices, mollis
                        ligula in, finibus tortor. Mauris eu dui ut lectus
                        fermentum eleifend. Pellentesque faucibus sem ante, non
                        malesuada odio varius nec. Suspendisse potenti. Proin
                        consectetur aliquam odio nec fringilla. Sed interdum at
                        justo in efficitur. Vivamus gravida volutpat sodales.
                        Fusce ornare sit amet ligula condimentum sagittis.
                        <span />
                      </p>
                      <blockquote>
                        <p>
                          Quisque semper nunc vitae erat pellentesque, ac
                          placerat arcu consectetur. In venenatis elit ac
                          ultrices convallis. Duis est nisi, tincidunt ac urna
                          sed, cursus blandit lectus. In ullamcorper sit amet
                          ligula ut eleifend. Proin dictum tempor ligula, ac
                          feugiat metus. Sed finibus tortor eu scelerisque
                          scelerisque.
                        </p>
                      </blockquote>
                      <p>
                        Aenean et tempor eros, vitae sollicitudin velit. Etiam
                        varius enim nec quam tempor, sed efficitur ex ultrices.
                        Phasellus pretium est vel dui vestibulum condimentum.
                        Aenean nec suscipit nibh. Phasellus nec lacus id arcu
                        facilisis elementum. Curabitur lobortis, elit ut
                        elementum congue, erat ex bibendum odio, nec iaculis
                        lacus sem non lorem. Duis suscipit metus ante, sed
                        convallis quam posuere quis. Ut tincidunt eleifend odio,
                        ac fringilla mi vehicula nec. Nunc vitae lacus eget
                        lectus imperdiet tempus sed in dui. Nam molestie magna
                        at risus consectetur, placerat suscipit justo dignissim.
                        Sed vitae fringilla enim, nec ullamcorper arcu.
                      </p>
                      <p>
                        Suspendisse turpis ipsum, tempus in nulla eu, posuere
                        pharetra nibh. In dignissim vitae lorem non mollis.
                        Praesent pretium tellus in tortor viverra condimentum.
                        Nullam dignissim facilisis nisl, accumsan placerat justo
                        ultricies vel. Vivamus finibus mi a neque pretium, ut
                        convallis dui lacinia. Morbi a rutrum velit. Curabitur
                        sagittis quam quis consectetur mattis. Aenean sit amet
                        quam vel turpis interdum sagittis et eget neque. Nunc
                        ante quam, luctus et neque a, interdum iaculis metus.
                        Aliquam vel ante mattis, placerat orci id, vehicula
                        quam. Suspendisse quis eros cursus, viverra urna sed,
                        commodo mauris. Cras diam arcu, fringilla a sem
                        condimentum, viverra facilisis nunc. Curabitur vitae
                        orci id nulla maximus maximus. Nunc pulvinar
                        sollicitudin molestie.
                      </p>
                    </div>
                    <div className="blog-tags">
                      Tags:{" "}
                      <a href="#/" rel="tag">
                        fashion
                      </a>
                      ,
                      <a href="#" rel="tag">
                        t-shirt
                      </a>
                      ,
                      <a href="#" rel="tag">
                        white
                      </a>
                    </div>
                    <div className="author-info">
                      <div className="author-avatar">
                        <img src="images/blog/admin_avatar.png" alt="admin" />
                      </div>
                      <div className="author-description">
                        <h2>
                          About the Author:{" "}
                          <a href="#" rel="author">
                            admin
                          </a>
                        </h2>
                        <p>
                          Praesent pretium tellus in tortor viverra condimentum.
                          Nullam dignissim facilisis nisl
                        </p>
                      </div>
                    </div>
                    {/* single post comments start */}
                    <div className="single-post-comments">
                      <div className="comments-area">
                        <div className="comments-heading">
                          <h3>3 comments</h3>
                        </div>
                        <div className="comments-list">
                          <ul>
                            <li>
                              <div className="comments-details">
                                <div className="comments-list-img">
                                  <img
                                    src="images/blog/admin_avatar.png"
                                    alt="post-author"
                                  />
                                </div>
                                <div className="comments-content-wrap">
                                  <span>
                                    <b>
                                      <a href="#">admin</a>
                                    </b>
                                    Post author
                                    <span className="post-time">
                                      October 7, 2014 at 1:38 am
                                    </span>
                                    <a href="#">Reply</a>
                                  </span>
                                  <p>just a nice post</p>
                                </div>
                              </div>
                            </li>
                            <li className="threaded-comments">
                              <div className="comments-details">
                                <div className="comments-list-img">
                                  <img
                                    src="images/blog/author_avatar.png"
                                    alt="post-author"
                                  />
                                </div>
                                <div className="comments-content-wrap">
                                  <span>
                                    <b>
                                      <a href="#">demo</a>
                                    </b>
                                    Post author
                                    <span className="post-time">
                                      October 6, 2014 at 2:25 pm
                                    </span>
                                    <a href="#">Reply</a>
                                  </span>
                                  <p>
                                    Quisque semper nunc vitae erat pellentesque,
                                    ac placerat arcu consectetur
                                  </p>
                                </div>
                              </div>
                            </li>
                            <li>
                              <div className="comments-details">
                                <div className="comments-list-img">
                                  <img
                                    src="images/blog/admin_avatar.png"
                                    alt="post-author"
                                  />
                                </div>
                                <div className="comments-content-wrap">
                                  <span>
                                    <b>
                                      <a href="#">admin</a>
                                    </b>
                                    Post author
                                    <span className="post-time">
                                      October 8, 2014 at 3:18 pm{" "}
                                    </span>
                                    <a href="#">Reply</a>
                                  </span>
                                  <p>
                                    Quisque orci nibh, porta vitae sagittis sit
                                    amet, vehicula vel mauris. Aenean at justo
                                    dolor. Fusce ac sapien bibendum, scelerisque
                                    libero nec
                                  </p>
                                </div>
                              </div>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div className="comment-respond">
                        <h3 className="comment-reply-title">Leave a Reply </h3>
                        <span className="email-notes">
                          Your email address will not be published. Required
                          fields are marked *
                        </span>
                        <form action="#">
                          <div className="row">
                            <div className="col-md-4">
                              <p>Name *</p>
                              <input type="text" />
                            </div>
                            <div className="col-md-4">
                              <p>Email *</p>
                              <input type="email" />
                            </div>
                            <div className="col-md-4">
                              <p>Website</p>
                              <input type="text" />
                            </div>
                            <div className="col-md-12 comment-form-comment">
                              <p>Website</p>
                              <textarea
                                id="message"
                                cols={30}
                                rows={10}
                                defaultValue={""}
                              />
                              <input
                                type="submit"
                                className="button"
                                defaultValue="Post Comment"
                              />
                            </div>
                          </div>
                        </form>
                      </div>
                    </div>
                    {/* single post comments start */}
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* sidebar start  */}
          <div id="secondary" className="col-lg-3 la-vi ndn">
            <div className="sidebar-border right clearfix">
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
                        <img src="images/blog/thumb1-150x150.jpg" alt={1} />
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
                        <img src="images/blog/thumb2-150x150.jpg" alt={1} />
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
                        <img src="images/blog/thumb3-150x150.jpg" alt={1} />
                      </a>
                    </div>
                    <div className="post-info">
                      <a href="#">
                        <p>Proin faucibus massa vel tristique</p>
                      </a>
                      <div className="post-date">June 25, 2015</div>
                    </div>
                  </div>
                  <div className="post-wrapper">
                    <div className="post-thumb">
                      <a href="#">
                        <img src="images/blog/thumb1-150x150.jpg" alt={1} />
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
                    <img alt="avater" src="images/blog/avatar.jpg" />
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
                    <img alt="avater" src="images/blog/avatar.jpg" />
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
                    <img src="images/blog/avatar.jpg" alt="avater" />
                  </div>
                  <div className="post-info">
                    <p>admin says:</p>
                    <a href="#" title="admin on Blog image post layout">
                      Quisque orci nibh, porta...
                    </a>
                  </div>
                </div>
              </aside>
              <aside id="tag_cloud-2" className="widget widget_tag_cloud">
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


</>

      
    </div>
  )
}

export default BlogDetail

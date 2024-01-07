import React from 'react'

function LoginPage() {
  return (
    <>

    {/*main container start*/}
    <div className="main-container my-log fullwidth">
      <header className="entry-header">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h1 className="entry-title">Login</h1>
            </div>
          </div>
        </div>
      </header>
      <div className="container">
        <div className="my-account">
          <div className="row">
            <div className="col-md-12">
              <nav className="breadcrumb bres">
                <a href="#">Home</a>
                <span className="separator">/</span>Login
              </nav>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">
              <div className="entry-content">
                <div className="customer_login" id="customer_login">
                  <div className="row">
                    <div className="col-lg-6">
                      <form method="post" className="login least">
                        <div className="form-fields">
                          <h2>Login</h2>
                          <p className="form-row form-row-wide">
                            <label htmlFor="username">
                              Username or email address{" "}
                              <span className="required">*</span>
                            </label>
                            <input
                              className="input-text"
                              name="username"
                              id="username"
                              defaultValue=""
                              type="text"
                            />
                          </p>
                          <p className="form-row form-row-wide">
                            <label htmlFor="password">
                              Password <span className="required">*</span>
                            </label>
                            <input
                              className="input-text"
                              name="password"
                              id="password"
                              type="password"
                            />
                          </p>
                        </div>
                        <div className="form-action">
                          <p className="lost_password">
                            <a href="#">Lost your password?</a>
                          </p>
                          <input
                            className="button"
                            name="login"
                            defaultValue="Login"
                            type="submit"
                          />
                          <label>
                            <input
                              name="rememberme"
                              defaultValue=""
                              type="checkbox"
                            />{" "}
                            Remember me
                          </label>
                        </div>
                      </form>
                    </div>
                    <div className="col-lg-6">
                      <form method="post" className="register">
                        <div className="form-fields">
                          <h2>Register</h2>
                          <p className="form-row form-row-wide">
                            <label>
                              Email address <span className="required">*</span>
                            </label>
                            <input
                              className="input-text"
                              name="email"
                              defaultValue=""
                              type="email"
                            />
                          </p>
                          <p className="form-row form-row-wide">
                            <label htmlFor="reg_password">
                              Password <span className="required">*</span>
                            </label>
                            <input
                              className="input-text"
                              name="password"
                              id="reg_password"
                              type="password"
                            />
                          </p>
                        </div>
                        <div className="form-action">
                          <input
                            className="button"
                            name="register"
                            defaultValue="Register"
                            type="submit"
                          />
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
              {/* end of entry-content */}
            </div>
          </div>
        </div>
      </div>
    </div>
    {/*main container end*/}

  </>
  
  )
}

export default LoginPage

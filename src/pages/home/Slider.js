import React from 'react'


function Slider() {
    return (
        <div className="container">
            <div className="row">
                <div className="col-sm-12">
                    <div className="slider-container">
                        {/* Slider Image */}
                        <div id="mainSlider" className="nivoSlider slider-image">
                            <img
                                src={'public/images/slider/slider1.jpg'}
                                alt="slider"
                                title="#htmlcaption1"
                            />
                            <img
                                src="../../../public/images/slider/slider2.jpg"
                                alt="slider"
                                title="#htmlcaption2"
                            />
                        </div>
                        {/* Slider Caption 1 */}
                        <div id="htmlcaption1" className="nivo-html-caption slider-caption-1">
                            <div className="slider-progress" />
                            <div className="table">
                                <div className="table-cell">
                                    <div className="col-sm-12">
                                        <div className="slide1-text text-center">
                                            <div className="middle-text">
                                                <div
                                                    className="cap-title-1 wow bounceInRightd-none d-md-block"
                                                    data-wow-duration="1.2s"
                                                    data-wow-delay="0.2s"
                                                >
                                                    <h1>memorial day sale!</h1>
                                                </div>
                                                <div
                                                    className="cap-title wow fadeInDownd-none d-md-block"
                                                    data-wow-duration="0.9s"
                                                    data-wow-delay="0.2s"
                                                >
                                                    <img
                                                        src="public/images/slider/text-22.png"
                                                        alt="banner-text"
                                                    />
                                                </div>
                                                <div
                                                    className="cap-title-3 wow bounceInLeft main-sss"
                                                    data-wow-duration="1.2s"
                                                    data-wow-delay="0.2s"
                                                >
                                                    <h3>15% off</h3>
                                                </div>
                                                <div
                                                    className="cap-title-4 wow bounceInRightd-none d-md-block"
                                                    data-wow-duration="1.2s"
                                                    data-wow-delay="0.05s"
                                                >
                                                    <h1 className="d-none d-md-block">
                                                        Your enter purchase !
                                                    </h1>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* Slider Caption 2 */}
                        <div id="htmlcaption2" className="nivo-html-caption slider-caption-2">
                            <div className="slider-progress" />
                            <div className="table">
                                <div className="table-cell">
                                    <div className="col-sm-12">
                                        <div className="slide1-text text-center">
                                            <div className="middle-text">
                                                <div
                                                    className="cap-title-1 wow bounceInLeftd-none d-md-block"
                                                    data-wow-duration="1.2s"
                                                    data-wow-delay="0.2s"
                                                >
                                                    <h1>memorial day sale!</h1>
                                                </div>
                                                <div
                                                    className="cap-title wow flipInXd-none d-md-block"
                                                    data-wow-duration="0.9s"
                                                    data-wow-delay="0.2s"
                                                >
                                                    <img
                                                        src="public/images/slider/text-22.png"
                                                        alt="banner-text"
                                                    />
                                                </div>
                                                <div
                                                    className="cap-title-3 wow rubberBand main-sss"
                                                    data-wow-duration="1.2s"
                                                    data-wow-delay="0.2s"
                                                >
                                                    <h3>15% off</h3>
                                                </div>
                                                <div
                                                    className="cap-title-4 wow slideInLeftd-none d-md-block"
                                                    data-wow-duration="1.3s"
                                                    data-wow-delay="0.05s"
                                                >
                                                    <h1 className="d-none d-md-block">
                                                        Your enter purchase!
                                                    </h1>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Slider

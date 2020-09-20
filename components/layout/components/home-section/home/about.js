export default function about(){
    return(
        <section  className="about-area">
        <div  className="container">
            <div  className="row">
                <div  className="col-xl-5 col-lg-5">
                    <div  className="about-image-box">
                        <div  className="inner-box">
                            <img src="images/resources/about-image.jpg" alt="Awesome Image"/>
                            <div  className="overlay">
                                <div  className="box">
                                    <div  className="icon wow zoomIn" data-wow-delay="300ms" data-wow-duration="1500ms">
                                        <img src="images/icon/home.png" alt="Home Icon"/>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div  className="text-box">
                            <p>Experiencd & Well knowledgeable Interior designers.</p>
                            <h3>Shelly Johnson, <span>CEO & Founder</span></h3>
                        </div>
                    </div>
                </div>
                <div  className="col-xl-7 col-lg-7">
                    <div  className="about-text">
                        <div  className="sec-title">
                            <p>About Company</p>
                            <div  className="title">A small efficient<br/> interior <span>designing team</span></div>
                        </div>
                        <div  className="inner-content">
                            <div  className="text">
                                <p>We denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that are bound.</p>
                                <p>Indignation and dislike men who are so beguiled and demoralized by the charms pleasure of the moment, so blinded by desire, that they cannot foresee.</p>
                            </div>
                            <div  className="about-carousel-box owl-carousel owl-theme">
                                {/* <!--Start Single Box--> */}
                                <div  className="single-box">
                                    <div  className="icon-holder">
                                        <span  className="icon-target"></span>
                                    </div>
                                    <div  className="text-holder">
                                        <h3>Mission Statement</h3>
                                        <p>Same as saying through shrinking from pain these perfectly simple and easy to distinguish.</p>
                                    </div>
                                </div>
                                {/* <!--End Single Box--> */}
                                {/* <!--Start Single Box--> */}
                                <div  className="single-box">
                                    <div  className="icon-holder">
                                        <span  className="icon-target"></span>
                                    </div>
                                    <div  className="text-holder">
                                        <h3>Mission Statement</h3>
                                        <p>Same as saying through shrinking from pain these perfectly simple and easy to distinguish.</p>
                                    </div>
                                </div>
                                {/* <!--End Single Box--> */}
                                {/* <!--Start Single Box--> */}
                                <div  className="single-box">
                                    <div  className="icon-holder">
                                        <span  className="icon-target"></span>
                                    </div>
                                    <div  className="text-holder">
                                        <h3>Mission Statement</h3>
                                        <p>Same as saying through shrinking from pain these perfectly simple and easy to distinguish.</p>
                                    </div>
                                </div>
                                {/* <!--End Single Box--> */}
                            </div>

                        </div>
                    </div>
                </div>
            </div>

        </div>
    </section>
    )
}
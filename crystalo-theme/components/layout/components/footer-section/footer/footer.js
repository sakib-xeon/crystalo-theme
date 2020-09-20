import React from "react";
function Footer(){
    return(
        <footer className="footer-area">
        <div className="footer-shape-bg wow slideInRight" data-wow-delay="300ms" data-wow-duration="2500ms"></div>
        <div className="container">
            <div className="row">
                {/* <!--Start single footer widget--> */}
                <div className="col-xl-3 col-lg-6 col-md-6 col-sm-12">
                    <div className="single-footer-widget marbtm50">
                        <div className="contact-info-box">
                            <div className="footer-logo">
                                <a href="index-2.html">
                                    <img src="images/footer/footer-logo.png" alt="Awesome Logo"/>
                                </a>
                            </div>
                            <ul>
                                <li>
                                    <h6>Address</h6>
                                    <p>Flat 20, Reynolds Neck, North<br/> Helenaville, FV77 8WS</p>
                                </li>
                                <li>
                                    <h6>Phone</h6>
                                    <p>+324 123 45 978 & 01<br/> <span>Mon - Friday:</span> 9.00am to 6.00pm</p>
                                </li>
                                <li>
                                    <h6>Email</h6>
                                    <p>support@crystalo.com<br/> crystalocareer@gmail.com</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                {/* <!--End single footer widget--> */}
                {/* <!--Start single footer widget--> */}
                <div className="col-xl-3 col-lg-6 col-md-6 col-sm-12">
                    <div className="single-footer-widget marbtm50">
                        <div className="title">
                            <h3>Services</h3>
                        </div>
                        <div className="services-links">
                            <ul>
                                <li><a href="#">Concept Design</a></li>
                                <li><a href="#">Project Designs</a></li>
                                <li><a href="#">Make Overs</a></li>
                                <li><a href="#">Consulting</a></li>
                                <li><a href="#">Glass & Wrought</a></li>
                                <li><a href="#">Space Planning</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
                {/* <!--End single footer widget--> */}
                {/* <!--Start single footer widget--> */}
                <div className="col-xl-3 col-lg-6 col-md-6 col-sm-12">
                    <div className="single-footer-widget pdbtm50">
                        <div className="title">
                            <h3>Recent News</h3>
                        </div>
                        <ul className="recent-news">
                            <li>
                                <div className="img-holder">
                                    <img src="images/footer/recent-news-1.jpg" alt="Awesome Image"/>
                                    <div className="overlay-style-one">
                                        <div className="box">
                                            <div className="content">
                                                <a href="project-single.html"><span className="icon-next"></span></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="title-holder">
                                    <p>March 10, 2019</p>
                                    <h5><a href="#">Creating drama and<br/> feeling with...</a></h5>
                                </div>
                            </li>
                            <li>
                                <div className="img-holder">
                                    <img src="images/footer/recent-news-2.jpg" alt="Awesome Image"/>
                                    <div className="overlay-style-one">
                                        <div className="box">
                                            <div className="content">
                                                <a href="project-single.html"><span className="icon-next"></span></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="title-holder">
                                    <p>March 02, 2019</p>
                                    <h5><a href="#">Wondering if interior<br/> design is dying...</a></h5>
                                </div>
                            </li>
                            <li>
                                <div className="img-holder">
                                    <img src="images/footer/recent-news-3.jpg" alt="Awesome Image"/>
                                    <div className="overlay-style-one">
                                        <div className="box">
                                            <div className="content">
                                                <a href="project-single.html"><span className="icon-next"></span></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="title-holder">
                                    <p>February 27, 2019</p>
                                    <h5><a href="#">Enjoy monsoon in<br/> comfort of your...</a></h5>
                                </div>
                            </li>

                        </ul>
                    </div>
                </div>
                {/* <!--End single footer widget--> */}
                {/* <!--Start single footer widget--> */}
                <div className="col-xl-3 col-lg-6 col-md-6 col-sm-12">
                    <div className="single-footer-widget">
                        <div className="brochures-carousel-box owl-carousel owl-theme">
                            {/* <!--Start Single Item--> */}
                            <div className="single-item">
                                <div className="img-holder">
                                    <img src="images/footer/brochures-1.jpg" alt="Awesome Image"/>
                                </div>
                                <div className="title-holder">
                                    <h3>Our Interior Design<br/> Brochure</h3>
                                    <a className="btn-two" href="#">Download Now<span className="flaticon-next"></span></a>
                                </div>
                            </div>
                            {/* <!--End Single Item--> */}
                            {/* <!--Start Single Item--> */}
                            <div className="single-item">
                                <div className="img-holder">
                                    <img src="images/footer/brochures-1.jpg" alt="Awesome Image"/>
                                </div>
                                <div className="title-holder">
                                    <h3>Our Interior Design<br/> Brochure</h3>
                                    <a className="btn-two" href="#">Download Now<span className="flaticon-next"></span></a>
                                </div>
                            </div>
                            {/* <!--End Single Item--> */}
                            {/* <!--Start Single Item--> */}
                            <div className="single-item">
                                <div className="img-holder">
                                    <img src="images/footer/brochures-1.jpg" alt="Awesome Image"/>
                                </div>
                                <div className="title-holder">
                                    <h3>Our Interior Design<br/> Brochure</h3>
                                    <a className="btn-two" href="#">Download Now<span className="flaticon-next"></span></a>
                                </div>
                            </div>
                            {/* <!--End Single Item--> */}
                        </div>
                    </div>
                </div>
                {/* <!--End single footer widget--> */}
            </div>
        </div>
    </footer>
    )
}
export default Footer;
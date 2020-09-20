export default function Footertwo(){
    return(
        <footer className="footer-area style4">
        <div className="container">
            <div className="row">
                {/* <!--Start single footer widget--> */}
                <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12">
                    <div className="single-footer-widget marbtm50-s4">
                        <div className="our-info-box">
                            <div className="footer-logo">
                                <a href="index-2.html">
                                    <img src="images/footer/footer-logo.png" alt="Awesome Logo"/>
                                </a>
                            </div>
                            <div className="text">
                                <p>On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the blinded by desiremoment.</p>
                            </div>
                            <div className="follow-us-social-links clearfix">
                                <span>Follw Us On:</span>
                                <ul>
                                    <li><a href="#">Facebook</a></li>
                                    <li><a href="#">Twitter</a></li>
                                    <li><a href="#">Instagram</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <!--End single footer widget--> */}
                {/* <!--Start single footer widget--> */}
                <div className="col-xl-4 col-lg-5 col-md-6 col-sm-12">
                    <div className="single-footer-widget s4">
                        <div className="title-style2">
                            <h3>Usefull Links</h3>
                        </div>
                        <div className="usefull-links">
                            <ul className="float-left">
                                <li><a href="#">Company</a></li>
                                <li><a href="#">Services</a></li>
                                <li><a href="#">Team</a></li>
                                <li><a href="#">Projects</a></li>
                                <li><a href="#">Get a Quote</a></li>
                            </ul>
                            <ul className="float-left borders-left">
                                <li><a href="#">News</a></li>
                                <li><a href="#">Testimonials</a></li>
                                <li><a href="#">Partners</a></li>
                                <li><a href="#">Privacy Policy</a></li>
                                <li><a href="#">Contact Us</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
                {/* <!--End single footer widget--> */}
                {/* <!--Start single footer widget--> */}
                <div className="col-xl-4 col-lg-3 col-md-12 col-sm-12">
                    <div className="single-footer-widget pdtop50-s4">
                        <div className="title-style2">
                            <h3>Subscribe Us</h3>
                        </div>
                        <div className="subscribe-box">
                            <form className="subscribe-form" action="#">
                                <input type="email" name="email" placeholder="Your Email"/>
                                <button className="btn-one" type="submit">Subscribe<span className="flaticon-next"></span></button>
                            </form>
                            <div className="text">
                                <p><span>*</span>Subscribe us and get latest news and updates</p>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <!--End single footer widget--> */}
            </div>
        </div>
    </footer>
    )
}
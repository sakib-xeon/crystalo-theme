export default function WhyChoose(){
    return(
        <section className="why-choose-area" style={{backgroundImage:"url(images/parallax-background/why-choose-bg.jpg)"}}>
            <div className="container">
                <div className="row">
                    <div className="col-xl-12">
                        <div className="why-choose-title float-left">
                            <div className="sec-title">
                                <div className="icon"><img src="images/icon/home-1.png" alt="Awesome Logo"/></div>
                                <div className="title">Why People <br/>Choose <span>Crystalo</span></div>
                            </div>
                            <ul>
                                <li>Well Considered Design</li>
                                <li>We Create For You</li>
                                <li>Leave The Details To Us</li>
                            </ul>
                            <div className="button">
                                <a className="btn-one" href="#">Make an Appointment<span className="flaticon-next"></span></a>
                            </div>
                        </div>
                        <div className="why-choose-content float-right">
                            {/* <!--Start Single Box--> */}
                            <div className="single-box redbg">
                                <div className="icon-holder">
                                    <span className="icon-scheme"></span>
                                </div>
                                <div className="text-holder">
                                    <h3>Experienced Team</h3>
                                    <p>Righteous indignations working beguileds all demoralized that blinded our works.</p>
                                </div>
                            </div>
                            {/* <!--End Single Box--> */}
                            {/* <!--Start Single Box--> */}
                            <div className="single-box whitebg">
                                <div className="icon-holder">
                                    <span className="icon-guarantee-certificate1"></span>
                                </div>
                                <div className="text-holder">
                                    <h3>Guaranteed Works</h3>
                                    <p>Have to be repudiated annoyances accepted The wise man therefore always holds.</p>
                                </div>
                            </div>
                            {/* <!--End Single Box--> */}
                            {/* <!--Start Single Box--> */}
                            <div className="single-box whitebg">
                                <div className="icon-holder">
                                    <span className="icon-hr1"></span>
                                </div>
                                <div className="text-holder">
                                    <h3>Free Consultation</h3>
                                    <p>Rejects pleasures to secure other pleasures, endures pains to avoid worse.</p>
                                </div>
                            </div>
                            {/* <!--End Single Box--> */}
                            {/* <!--Start Single Box--> */}
                            <div className="single-box blackbg">
                                <div className="icon-holder">
                                    <span className="icon-wallet1"></span>
                                </div>
                                <div className="text-holder">
                                    <h3>Reasonable price</h3>
                                    <p>Our power of choice is untrammelled & when nothing prevents our being able.</p>
                                </div>
                            </div>
                            {/* <!--End Single Box--> */}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
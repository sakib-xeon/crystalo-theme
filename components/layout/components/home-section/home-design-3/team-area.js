export default function TeamArea(){
    return(
        <section className="team-area">
        <div className="container">
            <div className="row">
                <div className="col-xl-12">
                    <div className="sec-title float-left">
                        <p>Behind Our Company</p>
                        <div className="title">Expert & Experinced <span>Team</span></div>
                    </div>
                    <div className="view-all-member float-right">
                        <a className="btn-two" href="blog.html">View All Members<span className="flaticon-next"></span></a>
                    </div>
                </div>
            </div>
            <div className="row">
                {/* <!--Start Single Team Member--> */}
                <div className="col-xl-4 col-lg-4 col-md-4">
                    <div className="single-team-member">
                        <div className="img-holder">
                            <img src="images/team/1.jpg" alt="Awesome Image"/>
                            <ul className="sociallinks">
                                <li><a href="#"><i className="fa fa-facebook" aria-hidden="true"></i></a></li>
                                <li><a href="#"><i className="fa fa-twitter" aria-hidden="true"></i></a></li>
                                <li><a href="#"><i className="fa fa-skype" aria-hidden="true"></i></a></li>
                                <li><a href="#"><i className="fa fa-linkedin" aria-hidden="true"></i></a></li>
                                <li><a href="#"><i className="fa fa-vimeo" aria-hidden="true"></i></a></li>
                            </ul>
                            <div className="overlay">
                                <div className="box">
                                    <div className="link">
                                        <a className="btn-two" href="blog.html">View Profile<span className="flaticon-next"></span></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="name text-center">
                            <p><span>CEO & Founder</span></p>
                            <h3>Alison Fletcher</h3>
                        </div>
                    </div>
                </div>
                {/* <!--End Single Team Member--> */}
                {/* <!--Start Single Team Member--> */}
                <div className="col-xl-4 col-lg-4 col-md-4">
                    <div className="single-team-member">
                        <div className="img-holder">
                            <img src="images/team/2.jpg" alt="Awesome Image"/>
                            <ul className="sociallinks">
                                <li><a href="#"><i className="fa fa-facebook" aria-hidden="true"></i></a></li>
                                <li><a href="#"><i className="fa fa-twitter" aria-hidden="true"></i></a></li>
                                <li><a href="#"><i className="fa fa-skype" aria-hidden="true"></i></a></li>
                                <li><a href="#"><i className="fa fa-linkedin" aria-hidden="true"></i></a></li>
                                <li><a href="#"><i className="fa fa-vimeo" aria-hidden="true"></i></a></li>
                            </ul>
                            <div className="overlay">
                                <div className="box">
                                    <div className="link">
                                        <a className="btn-two" href="blog.html">View Profile<span className="flaticon-next"></span></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="name text-center">
                            <p><span>Designer</span></p>
                            <h3>Joe Wilson</h3>
                        </div>
                    </div>
                </div>
                {/* <!--End Single Team Member--> */}
                {/* <!--Start Single Team Member--> */}
                <div className="col-xl-4 col-lg-4 col-md-4">
                    <div className="single-team-member">
                        <div className="img-holder">
                            <img src="images/team/3.jpg" alt="Awesome Image"/>
                            <ul className="sociallinks">
                                <li><a href="#"><i className="fa fa-facebook" aria-hidden="true"></i></a></li>
                                <li><a href="#"><i className="fa fa-twitter" aria-hidden="true"></i></a></li>
                                <li><a href="#"><i className="fa fa-skype" aria-hidden="true"></i></a></li>
                                <li><a href="#"><i className="fa fa-linkedin" aria-hidden="true"></i></a></li>
                                <li><a href="#"><i className="fa fa-vimeo" aria-hidden="true"></i></a></li>
                            </ul>
                            <div className="overlay">
                                <div className="box">
                                    <div className="link">
                                        <a className="btn-two" href="blog.html">View Profile<span className="flaticon-next"></span></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="name text-center">
                            <p><span>Architect</span></p>
                            <h3>White Grey</h3>
                        </div>
                    </div>
                </div>
                {/* <!--End Single Team Member--> */}
            </div>
        </div>
    </section>
    )
}
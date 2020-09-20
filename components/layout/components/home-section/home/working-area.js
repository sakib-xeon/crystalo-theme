export default function WorkingArea(){
    return(
        <section  className="working-area" style={{backgroundImage:"url(images/parallax-background/working-bg.jpg)"}}>
            <div  className="container">
                <div  className="sec-title with-text max-width text-center wow fadeInDown" data-wow-delay="100ms" data-wow-duration="1200ms">
                    <p>Working Areas</p>
                    <div  className="title clr-white">Covered <span>Industries</span></div>
                    <p  className="bottom-text">We are an Interior Designer, Who believe in excellence, quality and honesty, yes we design beautiful home interiors.</p>
                </div>
                <div  className="row">
                    {/* <!--Start Single Working Box--> */}
                    <div  className="col-xl-4 col-lg-4">
                        <div  className="single-working-box wow fadeInDown" data-wow-delay="0ms">
                            <div  className="img-holder">
                                <div  className="inner">
                                    <img src="images/resources/working-1.jpg" alt="Awesome Image"/>
                                    <div  className="overlay-style-one"></div>
                                </div>
                            </div>
                            <div  className="text-holder">
                                <div  className="plus-icon-box"><span  className="icon-plus"></span></div>
                                <div  className="outer-box">
                                    <div  className="icon">
                                        <div  className="inner">
                                            <div  className="box">
                                                <span  className="icon-architecture-and-city1"></span>
                                            </div>
                                        </div>
                                    </div>
                                    <div  className="text">
                                        <h3>Residential</h3>
                                        <p>Indignation and dislike men who are so beguiled and our the charms moment.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* <!--End Single Working Box--> */}
                    {/* <!--Start Single Working Box--> */}
                    <div  className="col-xl-4 col-lg-4">
                        <div  className="single-working-box wow fadeInDown" data-wow-delay="400ms">
                            <div  className="img-holder">
                                <div  className="inner">
                                    <img src="images/resources/working-2.jpg" alt="Awesome Image"/>
                                    <div  className="overlay-style-one"></div>
                                </div>
                            </div>
                            <div  className="text-holder">
                                <div  className="plus-icon-box"><span  className="icon-plus"></span></div>
                                <div  className="outer-box">
                                    <div  className="icon">
                                        <div  className="inner">
                                            <div  className="box">
                                                <span  className="icon-shop"></span>
                                            </div>
                                        </div>
                                    </div>
                                    <div  className="text">
                                        <h3>Commercial</h3>
                                        <p>Righteous indignation work are so beguiled demoralized the blinded by desire.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* <!--End Single Working Box--> */}
                    {/* <!--Start Single Working Box--> */}
                    <div  className="col-xl-4 col-lg-4">
                        <div  className="single-working-box wow fadeInDown" data-wow-delay="800ms">
                            <div  className="img-holder">
                                <div  className="inner">
                                    <img src="images/resources/working-3.jpg" alt="Awesome Image"/>
                                    <div  className="overlay-style-one"></div>
                                </div>
                            </div>
                            <div  className="text-holder">
                                <div  className="plus-icon-box"><span  className="icon-plus"></span></div>
                                <div  className="outer-box">
                                    <div  className="icon">
                                        <div  className="inner">
                                            <div  className="box">
                                                <span  className="icon-company"></span>
                                            </div>
                                        </div>
                                    </div>
                                    <div  className="text">
                                        <h3>Industries</h3>
                                        <p>Our power of choice is and when nothing prevents work every pleasure interior.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* <!--End Single Working Box--> */}
                </div>
            </div>
        </section>
    )
}
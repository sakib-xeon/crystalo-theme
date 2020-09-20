export default function LatestBlogThree(){
    return(
        <section className="latest-blog-area style3">
            <div className="container inner-content">
                <div className="row">
                    <div className="col-xl-12">
                        <div className="sec-title float-left">
                            <p>News & Updates</p>
                            <div className="title">Latest From <span>Blog</span></div>
                        </div>
                        <div className="more-blog-button float-right">
                            <a className="btn-two" href="blog.html">More News<span className="flaticon-next"></span></a>
                        </div>
                    </div>
                </div>
                <div className="row">
                    {/* <!--Start single blog post--> */}
                    <div className="col-xl-4 col-lg-4 col-md-12 col-sm-12">
                        <div className="single-blog-post style2 wow fadeInLeft" data-wow-delay="0ms" data-wow-duration="1500ms">
                            <div className="img-holder">
                                <img src="images/blog/latest-b-v2-1.jpg" alt="Awesome Image"/>
                                <div className="overlay-title">
                                    <h3 className="blog-title"><a href="blog-single.html">Difference between modern & conteporary design</a></h3>
                                </div>
                            </div>
                            <div className="text-holder">
                                <div className="post-date">
                                    <h3>02 <span>Mar 2019</span></h3>
                                </div>
                                <div className="meta-box">
                                    <ul className="meta-info">
                                        <li>By <a href="#">Rubin Santro</a></li>
                                        <li>In <a href="#">Contemporary</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* <!--End single blog post--> */}
                    {/* <!--Start single blog post--> */}
                    <div className="col-xl-4 col-lg-4 col-md-12 col-sm-12">
                        <div className="single-blog-post style2 wow fadeInLeft" data-wow-delay="200ms" data-wow-duration="1500ms">
                            <div className="img-holder">
                                <img src="images/blog/latest-b-v2-2.jpg" alt="Awesome Image"/>
                                <div className="overlay-title">
                                    <h3 className="blog-title"><a href="blog-single.html">How to create christmas vibes in each corner in home</a></h3>
                                </div>
                            </div>
                            <div className="text-holder">
                                <div className="post-date">
                                    <h3>24 <span>Feb 2019</span></h3>
                                </div>
                                <div className="meta-box">
                                    <ul className="meta-info">
                                        <li>By <a href="#">Mark Richrdson</a></li>
                                        <li>In <a href="#">Modern Paint</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* <!--End single blog post--> */}
                    {/* <!--Start single blog post--> */}
                    <div className="col-xl-4 col-lg-4 col-md-12 col-sm-12">
                        <div className="single-blog-post style2 wow fadeInLeft" data-wow-delay="400ms" data-wow-duration="1500ms">
                            <div className="img-holder">
                                <img src="images/blog/latest-b-v2-3.jpg" alt="Awesome Image"/>
                                <div className="overlay-title">
                                    <h3 className="blog-title"><a href="blog-single.html">Enjoy monsoon in comfort of your bedroom</a></h3>
                                </div>
                            </div>
                            <div className="text-holder">
                                <div className="post-date">
                                    <h3>05 <span>Feb 2019</span></h3>
                                </div>
                                <div className="meta-box">
                                    <ul className="meta-info">
                                        <li>By <a href="#">Mark Richrdson</a></li>
                                        <li>In <a href="#">Modern Paint</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* <!--End single blog post--> */}
                </div>
            </div>
        </section>
    )
}
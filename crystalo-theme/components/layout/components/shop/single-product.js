export default function SingleProduct(){
    return(
        <section id="shop-area" className="single-shop-area">
            <div className="container">
                <div className="row">
                    <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
                        <div className="shop-content">
                            {/* <!--Start single shop content--> */}
                            <div className="single-shop-content">
                                <div className="row">
                                    <div className="col-lg-6">
                                        <div className="single-product-image-holder">
                                            <img src="images/shop/single-product.jpg" alt="Awesome Image"/>
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="content-box">
                                            <span className="price">$29.00</span>
                                            <h2>Study Chair</h2>
                                            <div className="review-box">
                                                <ul>
                                                    <li><i className="fa fa-star"></i></li>
                                                    <li><i className="fa fa-star"></i></li>
                                                    <li><i className="fa fa-star"></i></li>
                                                    <li><i className="fa fa-star"></i></li>
                                                    <li><i className="fa fa-star-half"></i></li>
                                                </ul>
                                            </div>
                                            <div className="text">
                                                <p>Working from home meant we couldsnack & coffee breaks change our desks or view, good, drink on the job, even spend getting roughday in pajamas consequences minus id quod maxime placeat facere possimus.</p>
                                            </div>
                                            <div className="location-box">
                                                <p>Check Delivery Option at Your Location:</p>
                                                <form action="#">
                                                    <input type="text" placeholder="Pincode"/>
                                                    <button type="submit">Check</button><br/>
                                                </form>
                                                <span>Expected Delivery in 4-10 Days</span>
                                            </div>
                                            <div className="addto-cart-box">
                                                <input className="quantity-spinner" type="text" value="2" name="quantity"/>
                                                <button className="btn-one addtocart" type="submit">Add to Cart</button>
                                            </div>
                                            <div className="share-products-socials">
                                                <h5>Share This Product</h5>
                                                <ul>
                                                    <li><a href="#"><i className="fa fa-facebook fb" aria-hidden="true"></i></a></li>
                                                    <li><a href="#"><i className="fa fa-twitter tw" aria-hidden="true"></i></a></li>
                                                    <li><a href="#"><i className="fa fa-pinterest pin" aria-hidden="true"></i></a></li>
                                                    <li><a href="#"><i className="fa fa-linkedin lin" aria-hidden="true"></i></a></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* <!--End single shop content--> */}
                            {/* <!--Start product tab box--> */}
                            <div className="row">
                                <div className="col-md-12">
                                    <div className="product-tab-box tabs-box">
                                        <ul className="tab-btns tab-buttons clearfix">
                                            <li data-tab="#desc" className="tab-btn"><span>Descriprion</span></li>
                                            <li data-tab="#review" className="tab-btn active-btn"><span>Reviews (2)</span></li>
                                        </ul>
                                        <div className="tabs-content">
                                            <div className="tab" id="desc">
                                                <div className="product-details-content">
                                                    <div className="desc-content-box">
                                                        <p>Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great
                                                            pleasure. To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain some advantage from it? But who has any right to find fault with a man who chooses
                                                            to enjoy a pleasure that has no annoying consequences.</p>
                                                        <p>Must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and of the great explorer of the truth, the
                                                            master-builder of human happiness.</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="tab active-tab" id="review">
                                                <div className="review-box-holder">
                                                    <div className="row">
                                                        {/* <!--Start single review box--> */}
                                                        <div className="col-xl-6">
                                                            <div className="single-review-box">
                                                                <div className="image-holder">
                                                                    <img src="images/shop/review-1.png" alt="Awesome Image"/>
                                                                </div>
                                                                <div className="text-holder">
                                                                    <div className="top">
                                                                        <div className="name">
                                                                            <h3>Steven Rich <span>– September 17, 2018:</span></h3>
                                                                        </div>
                                                                        <div className="review-box">
                                                                            <ul>
                                                                                <li><i className="fa fa-star"></i></li>
                                                                                <li><i className="fa fa-star"></i></li>
                                                                                <li><i className="fa fa-star"></i></li>
                                                                                <li><i className="fa fa-star"></i></li>
                                                                                <li><i className="fa fa-star"></i></li>
                                                                            </ul>
                                                                        </div>
                                                                    </div>
                                                                    <div className="text">
                                                                        <p>Value for money , I use it from long time and it is very useful and good product.</p>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        {/* <!--End single review box--> */}
                                                        {/* <!--Start single review box--> */}
                                                        <div className="col-xl-6">
                                                            <div className="single-review-box">
                                                                <div className="image-holder">
                                                                    <img src="images/shop/review-2.png" alt="Awesome Image"/>
                                                                </div>
                                                                <div className="text-holder">
                                                                    <div className="top">
                                                                        <div className="name">
                                                                            <h3>William Cobus <span>– September 17, 2018:</span></h3>
                                                                        </div>
                                                                        <div className="review-box">
                                                                            <ul>
                                                                                <li><i className="fa fa-star"></i></li>
                                                                                <li><i className="fa fa-star"></i></li>
                                                                                <li><i className="fa fa-star"></i></li>
                                                                                <li><i className="fa fa-star"></i></li>
                                                                                <li><i className="fa fa-star"></i></li>
                                                                            </ul>
                                                                        </div>
                                                                    </div>
                                                                    <div className="text">
                                                                        <p>We denounce with righteous indignation and dislike men who are so beguiled & demoralized.</p>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        {/* <!--End single review box--> */}
                                                    </div>
                                                </div>
                                                <div className="review-form">
                                                    <div className="shop-page-title">
                                                        <div className="title">Add Your <span>Comments</span></div>
                                                        <p>Your email address will not be published. Required fields are marked <b>*</b></p>
                                                    </div>
                                                    <form id="review-form" action="#">
                                                        <div className="row">
                                                            <div className="col-md-6">
                                                                <div className="input-box">
                                                                    <p>Name<span>*</span></p>
                                                                    <input type="text" name="fname" placeholder="" required=""/>
                                                                </div>
                                                            </div>
                                                            <div className="col-md-6">
                                                                <div className="input-box">
                                                                    <p>Email<span>*</span></p>
                                                                    <input type="email" name="email" placeholder="" required=""/>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="row">
                                                            <div className="col-md-12">
                                                                <div className="add-rating-box">
                                                                    <div className="add-rating-title">
                                                                        <h4>Your Rating</h4>
                                                                    </div>
                                                                    <div className="review-box">
                                                                        <ul>
                                                                            <li><i className="fa fa-star"></i></li>
                                                                            <li><i className="fa fa-star"></i></li>
                                                                            <li><i className="fa fa-star"></i></li>
                                                                            <li><i className="fa fa-star"></i></li>
                                                                            <li><i className="fa fa-star"></i></li>
                                                                        </ul>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="row">
                                                            <div className="col-md-12">
                                                                <div className="input-box">
                                                                    <p>Your Review<span>*</span></p>
                                                                    <textarea name="review" placeholder="" required=""></textarea>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="row">
                                                            <div className="col-md-12">
                                                                <button className="btn-one" type="submit">Post Comment</button>
                                                            </div>
                                                        </div>
                                                    </form>
                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* <!--End product tab box--> */}
                            {/* <!--Start related product box--> */}
                            <div className="related-product">
                                <div className="shop-page-title">
                                    <div className="title">Raleted <span>Products</span></div>
                                </div>
                                <div className="row">
                                    {/* <!--Start single product item--> */}
                                    <div className="col-xl-3 col-lg-6 col-md-6 col-sm-12">
                                        <div className="single-product-item text-center">
                                            <div className="img-holder">
                                                <img src="images/shop/4.jpg" alt="Awesome Product Image"/>
                                            </div>
                                            <div className="title-holder text-center">
                                                <div className="static-content">
                                                    <h3 className="title text-center"><a href="shop-single.html">Garden Chair</a></h3>
                                                    <span>$99.00</span>
                                                </div>
                                                <div className="overlay-content">
                                                    <ul className="clearfix">
                                                        <li>
                                                            <a href="shop-single.html"><span className="icon-cart"></span>
                                                        <div className="toltip-content">
                                                            <p>Add to Cart</p>
                                                        </div>
                                                    </a>
                                                        </li>
                                                        <li>
                                                            <a href="#"><span className="icon-heart"></span>
                                                        <div className="toltip-content">
                                                            <p>Add Whishlist</p>
                                                        </div>
                                                    </a>
                                                        </li>
                                                        <li>
                                                            <a href="#"><span className="icon-refresh"></span>
                                                        <div className="toltip-content">
                                                            <p>Compare</p>
                                                        </div>
                                                    </a>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    {/* <!--End single product item--> */}
                                    {/* <!--Start single product item--> */}
                                    <div className="col-xl-3 col-lg-6 col-md-6 col-sm-12">
                                        <div className="single-product-item text-center">
                                            <div className="img-holder">
                                                <img src="images/shop/5.jpg" alt="Awesome Product Image"/>
                                            </div>
                                            <div className="title-holder text-center">
                                                <div className="static-content">
                                                    <h3 className="title text-center"><a href="shop-single.html">Office Chair</a></h3>
                                                    <span>$74.00</span>
                                                </div>
                                                <div className="overlay-content">
                                                    <ul className="clearfix">
                                                        <li>
                                                            <a href="shop-single.html"><span className="icon-cart"></span>
                                                        <div className="toltip-content">
                                                            <p>Add to Cart</p>
                                                        </div>
                                                    </a>
                                                        </li>
                                                        <li>
                                                            <a href="#"><span className="icon-heart"></span>
                                                        <div className="toltip-content">
                                                            <p>Add Whishlist</p>
                                                        </div>
                                                    </a>
                                                        </li>
                                                        <li>
                                                            <a href="#"><span className="icon-refresh"></span>
                                                        <div className="toltip-content">
                                                            <p>Compare</p>
                                                        </div>
                                                    </a>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    {/* <!--End single product item--> */}
                                    {/* <!--Start single product item--> */}
                                    <div className="col-xl-3 col-lg-6 col-md-6 col-sm-12">
                                        <div className="single-product-item text-center">
                                            <div className="img-holder">
                                                <img src="images/shop/6.jpg" alt="Awesome Product Image"/>
                                            </div>
                                            <div className="title-holder text-center">
                                                <div className="static-content">
                                                    <h3 className="title text-center"><a href="shop-single.html">Study Lamp</a></h3>
                                                    <span>$29.00</span>
                                                </div>
                                                <div className="overlay-content">
                                                    <ul className="clearfix">
                                                        <li>
                                                            <a href="shop-single.html"><span className="icon-cart"></span>
                                                        <div className="toltip-content">
                                                            <p>Add to Cart</p>
                                                        </div>
                                                    </a>
                                                        </li>
                                                        <li>
                                                            <a href="#"><span className="icon-heart"></span>
                                                        <div className="toltip-content">
                                                            <p>Add Whishlist</p>
                                                        </div>
                                                    </a>
                                                        </li>
                                                        <li>
                                                            <a href="#"><span className="icon-refresh"></span>
                                                        <div className="toltip-content">
                                                            <p>Compare</p>
                                                        </div>
                                                    </a>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    {/* <!--End single product item--> */}
                                    {/* <!--Start single product item--> */}
                                    <div className="col-xl-3 col-lg-6 col-md-6 col-sm-12">
                                        <div className="single-product-item text-center">
                                            <div className="img-holder">
                                                <img src="images/shop/8.jpg" alt="Awesome Product Image"/>
                                            </div>
                                            <div className="title-holder text-center">
                                                <div className="static-content">
                                                    <h3 className="title text-center"><a href="shop-single.html">Garden Chair</a></h3>
                                                    <span>$99.00</span>
                                                </div>
                                                <div className="overlay-content">
                                                    <ul className="clearfix">
                                                        <li>
                                                            <a href="shop-single.html"><span className="icon-cart"></span>
                                                        <div className="toltip-content">
                                                            <p>Add to Cart</p>
                                                        </div>
                                                    </a>
                                                        </li>
                                                        <li>
                                                            <a href="#"><span className="icon-heart"></span>
                                                        <div className="toltip-content">
                                                            <p>Add Whishlist</p>
                                                        </div>
                                                    </a>
                                                        </li>
                                                        <li>
                                                            <a href="#"><span className="icon-refresh"></span>
                                                        <div className="toltip-content">
                                                            <p>Compare</p>
                                                        </div>
                                                    </a>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    {/* <!--End single product item--> */}
                                </div>
                            </div>
                            {/* <!--End related product box--> */}
                        </div>
                    </div>

                </div>
            </div>
        </section>
    )
}
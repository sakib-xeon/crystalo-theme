import React from "react";
import Link from "next/link"
function Header(){
    return(
        <header className="main-header header-style1">

        <div className="header-upper-style1">
            <div className="container">
                <div className="row">
                    <div className="col-xl-12">
                        <div className="inner-container clearfix">
                            <div className="logo-box-style1 float-left">
                                <a href="/">
                                    <img src="images/resources/logo.png" alt="Awesome Logo"/>
                                </a>
                            </div>
                            <div className="main-menu-box float-right">
                                <nav className="main-menu clearfix">
                                    <div className="navbar-header clearfix">
                                        <button type="button" className="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
                                        <span className="icon-bar"></span>
                                        <span className="icon-bar"></span>
                                        <span className="icon-bar"></span>
                                    </button>
                                    </div>
                                    <div className="navbar-collapse collapse clearfix">
                                        <ul className="navigation clearfix">
                                            <li className="dropdown current"><a href="/index2">Home</a>
                                                <ul>
                                                    <li><a href="/index2">Home Page 01</a></li>
                                                    <li><a href="/home-3">Home Page 02</a></li>
                                                    {/* <li><a href="index-4.html">Home Page 03</a></li> */}
                                                    {/* <li className="dropdown"><a href="#">Header Styles</a>
                                                        <ul>
                                                            <li><a href="index-2.html">Header Style 01</a></li>
                                                            <li><a href="index-3.html">Header Style 02</a></li>
                                                            <li><a href="index-4.html">Header Style 03</a></li>
                                                        </ul>
                                                    </li> */}
                                                </ul>
                                            </li>
                                            <li className="dropdown"><a href="/about">About Us</a>
                                                <ul>
                                                    <li><a href="/about">About Company</a></li>
                                                    <li><a href="/faq">FAQ’s</a></li>
                                                    <li><a href="/comming-soon">Coming Soon</a></li>
                                                    <li><a href="/error">Error Page</a></li>
                                                </ul>
                                            </li>
                                            <li className="dropdown"><a href="/service">Services</a>
                                                <ul>
                                                    <li><a href="/service">View All Services</a></li>
                                                    <li><a href="/concept-design">Concept Designs</a></li>
                                                    <li><a href="/concept-design">Project Designs</a></li>
                                                    <li><a href="/concept-design">Make Overs</a></li>
                                                    <li><a href="/concept-design">Consulting</a></li>
                                                    <li><a href="/concept-design">Glass & Wrought</a></li>
                                                    <li><a href="/concept-design">Space Planning</a></li>
                                                </ul>
                                            </li>
                                            <li className="dropdown"><a href="/classic-view-1">Projects</a>
                                                <ul>
                                                    <li><a href="/classic-view-1">classNameic View 01</a></li>
                                                    <li><a href="/classic-view-2">classNameic View 02</a></li>
                                                    <li><a href="/mordan-view-1">Modern View 01</a></li>
                                                    <li><a href="/mordan-view-2">Modern View 02</a></li>
                                                    <li><a href="/full-width-1">Fullwidth 01</a></li>
                                                    <li><a href="/full-width-2">Fulldwidth 02</a></li>
                                                    <li><a href="/single-project">Projects Single</a></li>
                                                </ul>
                                            </li>
                                            <li className="dropdown"><a href="blog.html">Blog</a>
                                                <ul>
                                                    <li><a href="blog.html">Blog Grid View</a></li>
                                                    <li><a href="blog-v2.html">Blog With Sidebar</a></li>
                                                    <li><a href="blog-single.html">Blog Single Post</a></li>
                                                </ul>
                                            </li>
                                            <li className="dropdown"><a href="shop.html">Shop</a>
                                                <ul>
                                                    <li><a href="shop.html">Our Products</a></li>
                                                    <li><a href="shop-single.html">Products Single</a></li>
                                                    <li><a href="shopping-cart.html">Shopping Cart</a></li>
                                                    <li><a href="checkout.html">Checkout</a></li>
                                                    <li><a href="account.html">My Account</a></li>
                                                </ul>
                                            </li>
                                            <li><a href="contact.html">Contact</a></li>
                                        </ul>
                                    </div>
                                </nav>
                                <div className="mainmenu-right">
                                    <div className="outer-search-box">
                                        <div className="seach-toggle"><i className="fa fa-search"></i></div>
                                        <ul className="search-box">
                                            <li>
                                                <form method="post" action="http://st.ourhtmldemo.com/new/Crystalo/index.html">
                                                    <div className="form-group">
                                                        <input type="search" name="search" placeholder="Search Here" required/>
                                                        <button type="submit"><i className="fa fa-search"></i></button>
                                                    </div>
                                                </form>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="cart-box">
                                        <a href="shoping-cart.html"><span className="icon-bag"><span className="number">0</span></span></a>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div className="header-lower-style1">
            <div className="container">
                <div className="row">
                    <div className="col-xl-12">
                        <div className="inner-content clearfix">
                            <ul className="header-contact-info float-left">
                                <li>
                                    <div className="single-item">
                                        <div className="icon">
                                            <span className="icon-maps-and-location"></span>
                                        </div>
                                        <div className="text">
                                            <h3>Newyork, USA</h3>
                                            <p>Flat 201, Reynolds Neck Str</p>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div className="single-item">
                                        <div className="icon">
                                            <span className="icon-phone"></span>
                                        </div>
                                        <div className="text">
                                            <h3>+324 123 45 978</h3>
                                            <p>Mon - Friday: 9.00 to 18.00</p>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div className="single-item">
                                        <div className="icon">
                                            <span className="icon-mail"></span>
                                        </div>
                                        <div className="text">
                                            <h3>support@mailus.com</h3>
                                            <p>Get a Free Quote</p>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                            <ul className="header-social-links-style1 float-right">
                                <li className="wow slideInUp" data-wow-delay="0ms" data-wow-duration="1200ms">
                                    <a href="#"><i className="fa fa-facebook" aria-hidden="true"></i></a>
                                </li>
                                <li className="wow slideInUp" data-wow-delay="300ms" data-wow-duration="1500ms">
                                    <a href="#"><i className="fa fa-skype" aria-hidden="true"></i></a>
                                </li>
                                <li className="wow slideInUp" data-wow-delay="400ms" data-wow-duration="1500ms">
                                    <a href="#"><i className="fa fa-linkedin" aria-hidden="true"></i></a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </header>
    )
}
export default Header;
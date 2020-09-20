export default function MainMenu(){
    return(
        <header className="mainmenu-style3-area stricky">
        <div className="container">
            <div className="main-menu-box clearfix">
                <nav className="main-menu style3 clearfix float-left">
                    <div className="navbar-header clearfix">
                        <button type="button" className="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                    </button>
                    </div>
                    <div className="navbar-collapse collapse clearfix">
                        <ul className="navigation clearfix">
                            <li className="dropdown current"><a href="index-2.html">Home</a>
                                <ul>
                                    <li><a href="index-2.html">Home Page 01</a></li>
                                    <li><a href="index-3.html">Home Page 02</a></li>
                                    <li><a href="index-4.html">Home Page 03</a></li>
                                    <li className="dropdown"><a href="#">Header Styles</a>
                                        <ul>
                                            <li><a href="index-2.html">Header Style 01</a></li>
                                            <li><a href="index-3.html">Header Style 02</a></li>
                                            <li><a href="index-4.html">Header Style 03</a></li>
                                        </ul>
                                    </li>
                                </ul>
                            </li>
                            <li className="dropdown"><a href="about.html">About Us</a>
                                <ul>
                                    <li><a href="about.html">About Company</a></li>
                                    <li><a href="faq.html">FAQ’s</a></li>
                                    <li><a href="coming-soon.html">Coming Soon</a></li>
                                    <li><a href="404-page.html">Error Page</a></li>
                                </ul>
                            </li>
                            <li className="dropdown"><a href="services.html">Services</a>
                                <ul>
                                    <li><a href="services.html">View All Services</a></li>
                                    <li><a href="ser-concept-designs.html">Concept Designs</a></li>
                                    <li><a href="ser-project-designs.html">Project Designs</a></li>
                                    <li><a href="ser-make-overs.html">Make Overs</a></li>
                                    <li><a href="ser-consulting.html">Consulting</a></li>
                                    <li><a href="ser-glass-wrought.html">Glass & Wrought</a></li>
                                    <li><a href="ser-space-planning.html">Space Planning</a></li>
                                </ul>
                            </li>
                            <li className="dropdown"><a href="project.html">Projects</a>
                                <ul>
                                    <li><a href="project.html">classNameic View 01</a></li>
                                    <li><a href="project-v2.html">classNameic View 02</a></li>
                                    <li><a href="project-v3.html">Modern View 01</a></li>
                                    <li><a href="project-v4.html">Modern View 02</a></li>
                                    <li><a href="project-v5.html">Fullwidth 01</a></li>
                                    <li><a href="project-v6.html">Fulldwidth 02</a></li>
                                    <li><a href="project-single.html">Projects Single</a></li>
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
                <div className="mainmenu-right style3 float-right">
                    <div className="button">
                        <a className="btn-one" href="#">Request for Quote<span className="flaticon-next"></span></a>
                    </div>
                </div>
            </div>
        </div>
    </header>
    )
}
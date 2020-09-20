export default function MyAccount(){
    return(
        <section className="login-register-area">
            <div className="container">
                <div className="row">
                    <div className="col-xl-6 col-lg-12 col-md-12 col-sm-12">
                        <div className="form">
                            <div className="shop-page-title">
                                <div className="title">Login <span>Now</span></div>
                            </div>
                            <div className="row">
                                <form action="#">
                                    <div className="col-xl-12">
                                        <div className="input-field">
                                            <input type="text" name="name" placeholder="Your Name *"/>
                                            <div className="icon-holder">
                                                <i className="fa fa-user" aria-hidden="true"></i>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xl-12">
                                        <div className="input-field">
                                            <input type="text" name="email" placeholder="Enter Mail id *"/>
                                            <div className="icon-holder">
                                                <i className="fa fa-envelope" aria-hidden="true"></i>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xl-12">
                                        <div className="input-field">
                                            <input type="text" name="password" placeholder="Enter Password"/>
                                            <div className="icon-holder">
                                                <i className="fa fa-unlock-alt" aria-hidden="true"></i>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xl-12">
                                        <div className="row">
                                            <div className="col-xl-6 col-lg-6 col-sm-12">
                                                <button className="btn-one" type="submit">Login Now</button>
                                                <div className="remember-text">
                                                    <div className="checkbox">
                                                        <label>
                                                    <input name="remember" type="checkbox"/>
                                                    <span>Remember Me</span>
                                                </label>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-xl-6 col-lg-6 col-sm-12">
                                                <ul className="social-icon">
                                                    <li className="login-with">Or login with</li>
                                                    <li><a href="#"><i className="fa fa-facebook" aria-hidden="true"></i></a></li>
                                                    <li><a href="#"><i className="fa fa-twitter twitter" aria-hidden="true"></i></a></li>
                                                    <li><a href="#"><i className="fa fa-google-plus gplus" aria-hidden="true"></i></a></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>

                    <div className="col-xl-6 col-lg-12 col-md-12 col-sm-12">
                        <div className="form register">
                            <div className="shop-page-title">
                                <div className="title">Register <span>Here</span></div>
                            </div>
                            <div className="row">
                                <form action="#">
                                    <div className="col-md-12">
                                        <div className="input-field">
                                            <input type="text" name="name" placeholder="Your Name *"/>
                                            <div className="icon-holder">
                                                <i className="fa fa-user" aria-hidden="true"></i>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-12">
                                        <div className="input-field">
                                            <input type="text" name="email" placeholder="Enter Mail id *"/>
                                            <div className="icon-holder">
                                                <i className="fa fa-envelope" aria-hidden="true"></i>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-12">
                                        <div className="input-field">
                                            <input type="text" name="password" placeholder="Enter Password"/>
                                            <div className="icon-holder">
                                                <i className="fa fa-unlock-alt" aria-hidden="true"></i>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-12">
                                        <div className="row">
                                            <div className="col-lg-5 col-md-5 col-sm-12">
                                                <button className="btn-one" type="submit">Register Here</button>
                                            </div>
                                            <div className="col-lg-7 col-md-7 col-sm-12">
                                                <div className="right">
                                                    <h6><span>*</span>You must be a free registered user to submit content. </h6>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
            </section>
    )
}
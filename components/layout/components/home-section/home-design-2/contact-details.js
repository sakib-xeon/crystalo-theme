export default function ContactDetails(){
    return(
        <section className="contact-details-area">
            <div className="sec-title text-center">
                <p>Contact Details</p>
                <div className="title clr-white">How Can We <span>Help You?</span></div>
            </div>
            <div className="parallax-background" style={{backgroundImage:"url(images/parallax-background/contact-details-bg.jpg)"}}></div>
            <div className="container">
                <div className="row">
                    <div className="col-xl-12">
                        <div className="contact-details-content">
                            <div className="row">
                                <div className="col-xl-6 col-lg-6">
                                    <div className="content-info-box" style={{backgroundImage:"url(images/parallax-background/contact-info-box-bg.jpg)"}}>
                                        <div className="inner-content">
                                            <div className="inner">
                                                <div className="single-info-box wow fadeInDown" data-wow-delay="100ms" data-wow-duration="1200ms">
                                                    <div className="icon">
                                                        <span className="icon-global"></span>
                                                    </div>
                                                    <div className="text">
                                                        <h3>Visit Our Office</h3>
                                                        <p>Flat A, 20/7, Reynolds Neck Str, North Helenaville</p>
                                                    </div>
                                                </div>
                                                <div className="single-info-box white-bg wow fadeInUp" data-wow-delay="100ms" data-wow-duration="1200ms">
                                                    <div className="icon">
                                                        <span className="icon-global"></span>
                                                    </div>
                                                    <div className="text">
                                                        <h3>Visit Our Office</h3>
                                                        <p>Flat A, 20/7, Reynolds Neck Str, North Helenaville</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-6 col-lg-6">
                                    <div className="contact-details-form-box">
                                        <div className="title-box">
                                            <h2>Request for<br/> Approximate Estimation</h2>
                                        </div>
                                        <div className="contact-details-box">
                                            <form className="contact-details-form">
                                                <div className="row">
                                                    <div className="col-xl-6">
                                                        <div className="single-box">
                                                            <input type="text" name="form_name" value="" placeholder="Name" required=""/>
                                                        </div>
                                                    </div>
                                                    <div className="col-xl-6">
                                                        <div className="single-box">
                                                            <input type="email" name="form_email" value="" placeholder="Email" required=""/>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="row">
                                                    <div className="col-xl-12">
                                                        <div className="single-box">
                                                            <select className="selectpicker" data-width="100%">
                                                            <option selected="selected">Select Your Service</option>
                                                            <option>Concept Designs</option>
                                                            <option>Project Designs</option>
                                                            <option>Make Overs</option>
                                                            <option>Consulting</option>
                                                            <option>Glass & Wrought</option>
                                                            <option>Space Planning</option>
                                                        </select>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="row">
                                                    <div className="col-xl-12">
                                                        <div className="single-box">
                                                            <textarea name="form_request" placeholder="Special Request" required=""></textarea>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="row">
                                                    <div className="col-xl-12">
                                                        <div className="single-box">
                                                            <button className="btn-one" type="submit">Send Request<span className="flaticon-next"></span></button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
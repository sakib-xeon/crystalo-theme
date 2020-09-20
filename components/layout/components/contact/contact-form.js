export default function ContactForm(){
    return(
        <section className="contact-info-area">
        <div className="container">
            <div className="row">
                <div className="col-xl-8 col-lg-7 col-md-12 col-sm-12">
                    <div className="contact-form">
                        <div className="sec-title with-text">
                            <p>Drop Us a Line</p>
                            <div className="title">Send Your <span>Message</span></div>
                            <p className="bottom-text">If you have question or would like more information on our works, Please complete the form and we’ll aim get back to you with in 24 hours.</p>
                        </div>
                        <div className="inner-box">
                            <form id="contact-form" name="contact_form" className="default-form" action="" method="post">
                                <div className="row">
                                    <div className="col-md-6">
                                        <div className="input-box">
                                            <input type="text" name="form_name" value="" placeholder="First Name" required=""/>
                                            <div className="icon">
                                                <i className="fa fa-user" aria-hidden="true"></i>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="input-box">
                                            <input type="text" name="form_name" value="" placeholder="Last Name" required=""/>
                                            <div className="icon">
                                                <i className="fa fa-user" aria-hidden="true"></i>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-6">
                                        <div className="input-box">
                                            <select className="selectmenu">
                                        <option selected="selected">Enquire About</option>
                                        <option>Concept Designs</option>
                                        <option>Project Designs</option>
                                        <option>Make Overs</option>
                                        <option>Consulting</option>
                                        <option>Glass & Wrought</option>
                                        <option>Space Planning</option>
                                    </select>
                                            <div className="icon">
                                                <i className="fa fa-question" aria-hidden="true"></i>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="input-box">
                                            <input type="text" name="form_phone" value="" placeholder="Phone"/>
                                            <div className="icon">
                                                <i className="fa fa-phone" aria-hidden="true"></i>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-12">
                                        <div className="input-box">
                                            <input type="email" name="form_email" value="" placeholder="Email Address" required=""/>
                                            <div className="icon">
                                                <i className="fa fa-envelope" aria-hidden="true"></i>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-12">
                                        <div className="input-box">
                                            <textarea name="form_message" placeholder="Your Message..." required=""></textarea>
                                            <div className="icon envelop">
                                                <i className="fa fa-comment" aria-hidden="true"></i>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-12">
                                        <div className="button-box">
                                            <input id="form_botcheck" name="form_botcheck" className="form-control" type="hidden" value=""/>
                                            <button className="btn-one" type="submit" data-loading-text="Please wait...">Send Your Message<span className="flaticon-next"></span></button>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
                <div className="col-xl-4 col-lg-5 col-md-12 col-sm-12 clearfix">
                    <div className="contact-form-image-box">
                        <img src="images/resources/contact.png" alt="Awesome Image"/>
                    </div>
                </div>
            </div>
        </div>
    </section>
    )
}
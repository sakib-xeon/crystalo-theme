export default function AppointmentArea() {
    return (
        <section className="appointment-area" style={{ backgroundImage: "url(images/resources/appointment-bg.jpg)" }}>
            <div className="container">
                <div className="row">
                    <div className="col-xl-6 col-lg-6">
                        <div className="map-content-box">
                            <div className="sec-title">
                                <p>Contact Details</p>
                                <div className="title">How Can We <span>Help You?</span></div>
                            </div>
                            <div className="inner paroller">
                                <img src="images/resources/map.png" alt="Map" />
                                <div className="overlay">
                                    <div className="single-location-box one wow zoomIn" data-wow-delay="100ms" data-wow-duration="1500ms">
                                        <div className="marker-box">
                                            <span className="icon-pin"></span>
                                        </div>
                                        <div className="location-info">
                                            <h3>Brooklyn</h3>
                                            <p>P. B: 222. Mid Corner Street<br /> Brooklyn - 11223.<br /> +224 620 63 09 00<br /> example@example.com</p>
                                        </div>
                                    </div>
                                    <div className="single-location-box two wow zoomIn" data-wow-delay="300ms" data-wow-duration="1500ms">
                                        <div className="marker-box">
                                            <span className="icon-pin"></span>
                                        </div>
                                        <div className="location-info">
                                            <h3>Brooklyn</h3>
                                            <p>P. B: 222. Mid Corner Street<br /> Brooklyn - 11223.<br /> +224 620 63 09 00<br /> example@example.com</p>
                                        </div>
                                    </div>
                                    <div className="single-location-box three wow zoomIn" data-wow-delay="500ms" data-wow-duration="1500ms">
                                        <div className="marker-box">
                                            <span className="icon-pin"></span>
                                        </div>
                                        <div className="location-info">
                                            <h3>Brooklyn</h3>
                                            <p>P. B: 222. Mid Corner Street<br /> Brooklyn - 11223.<br /> +224 620 63 09 00<br /> example@example.com</p>
                                        </div>
                                    </div>
                                    <div className="single-location-box four wow zoomIn" data-wow-delay="700ms" data-wow-duration="1500ms">
                                        <div className="marker-box">
                                            <span className="icon-pin"></span>
                                        </div>
                                        <div className="location-info">
                                            <h3>Brooklyn</h3>
                                            <p>P. B: 222. Mid Corner Street<br /> Brooklyn - 11223.<br /> +224 620 63 09 00<br /> example@example.com</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-6 col-lg-6">
                        <div className="appointment-box wow slideInRight" data-wow-delay="300ms" data-wow-duration="1500ms">
                            <div className="title-box">
                                <h2>Make Appointment</h2>
                                <span>Leave your information here and get reply from our expert in 24 hours, don’t hesitate to ask.</span>
                            </div>
                            <div className="appointment">
                                <form className="appointment-form">
                                    <div className="row">
                                        <div className="col-xl-12">
                                            <div className="single-box">
                                                <input type="text" name="form_name" value="" placeholder="Name" required="" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-xl-12">
                                            <div className="single-box">
                                                <input type="email" name="form_email" value="" placeholder="Email" required="" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-xl-12">
                                            <div className="single-box">
                                                <select className="selectpicker" data-width="100%">
                                                    <option selected="selected">Interested In</option>
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
                                                <button className="btn-one" type="submit">Submit Here<span className="flaticon-next"></span></button>
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
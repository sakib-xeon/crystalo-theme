export default function CommingSoonTimer(){
    return(
        <section className="timer-area">
        <div className="container">
            <div className="row">
                <div className="col-xl-12">
                    <div className="timer-box text-center">
                        <h1>Coming Soon</h1>
                        <div className="countdown-timer">
                            <div className="default-coundown">
                                <div className="box">
                                    <div className="countdown time-countdown-two" data-countdown-time="2019/07/28"></div>
                                </div>
                            </div>
                        </div>
                        <div className="subscribe-box">
                            <form className="subscribe-form" action="#">
                                <input type="email" name="email" placeholder="Your email address..."/>
                                <button className="btn-one" type="submit">Subscribe<span className="flaticon-next"></span></button>
                            </form>
                            <div className="text">
                                <p><span>*</span>Subscribe us and get latest news and updates</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    )
}
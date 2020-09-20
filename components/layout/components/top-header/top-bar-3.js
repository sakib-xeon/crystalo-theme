export  default function TopBarThree(){
    return(
        <section className="topbar-style3-area">
        <div className="container clearfix">
            <div className="topbar-style3-content">
                <div className="topbar-style3-left">
                    <ul className="clearfix">
                        <li><a href="#">Partners</a></li>
                        <li><a href="#">Media</a></li>
                        <li><a href="#">360<span style="font-size: 20px; font-weight: 300;">&deg</span>View</a></li>
                        <li><a href="#">FAQ</a></li>
                    </ul>
                </div>
                <div className="topbar-style3-right">
                    <ul className="clearfix">
                        <li><a href="#"><i className="fa fa-facebook" aria-hidden="true"></i></a></li>
                        <li><a href="#"><i className="fa fa-twitter" aria-hidden="true"></i></a></li>
                        <li><a href="#"><i className="fa fa-skype" aria-hidden="true"></i></a></li>
                        <li><a href="#"><i className="fa fa-linkedin" aria-hidden="true"></i></a></li>
                    </ul>
                    <div className="language-switcher">
                        <div id="polyglotLanguageSwitcher">
                            <form action="#">
                                <select id="polyglot-language-options">
                                <option id="en" value="en" selected>English</option>
                                <option id="fr" value="fr">French</option>
                                <option id="de" value="de">German</option>
                                <option id="it" value="it">Italian</option>
                                <option id="es" value="es">Spanish</option>
                            </select>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    )
}
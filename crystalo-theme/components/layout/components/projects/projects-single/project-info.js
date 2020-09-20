export default function ProjectInfo(){
    return(
        <section class="project-info-area">
            <div class="pattern-bg wow slideInRight" data-wow-delay="100ms" data-wow-duration="1500ms">
                <img src="images/pattern/project-info-patten.jpg" alt="Pattern Bg"/>
            </div>
            <div class="container">
                <div class="row">
                    <div class="col-xl-6">
                        <div class="project-info-content">
                            <div class="project-info-title">
                                <h3>Project Info</h3>
                            </div>
                            <div class="inner-content">
                                <ul>
                                    <li>
                                        <div class="icon">
                                            <span class="icon-maps-and-location1"></span>
                                        </div>
                                        <div class="title">
                                            <h4>Location</h4>
                                            <span>New York United States</span>
                                        </div>
                                    </li>
                                    <li>
                                        <div class="icon">
                                            <span class="icon-ruler"></span>
                                        </div>
                                        <div class="title">
                                            <h4>Square Meters</h4>
                                            <span>452,65m<sup>2</sup></span>
                                        </div>
                                    </li>
                                    <li>
                                        <div class="icon">
                                            <span class="icon-calendar"></span>
                                        </div>
                                        <div class="title">
                                            <h4>Project Year</h4>
                                            <span>2018</span>
                                        </div>
                                    </li>
                                    <li>
                                        <div class="icon">
                                            <span class="icon-price"></span>
                                        </div>
                                        <div class="title">
                                            <h4>Price Value</h4>
                                            <span>$65m</span>
                                        </div>
                                    </li>
                                    <li>
                                        <div class="icon">
                                            <span class="icon-group"></span>
                                        </div>
                                        <div class="title">
                                            <h4>Project Head</h4>
                                            <span>Mr. John Meckency</span>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div class="col-xl-6">
                        <div class="project-info-image-box">
                            <img src="images/projects/project-single/project-info-1.jpg" alt="Awesome Image"/>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
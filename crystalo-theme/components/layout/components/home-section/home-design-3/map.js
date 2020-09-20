
export default function Map(){
    return(
        <section className="home-google-map-area">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-xl-12">
                        <div className="google-map-box">
                            <div className="google-map" id="home-google-map" data-map-lat="40.584160" data-map-lng="-74.415543" data-icon-path="images/resources/map-marker.png" data-map-title="Brooklyn, New York, United Kingdom" data-map-zoom="12" data-markers='{
                                "marker-1": [40.584160, -74.415543, "<h4>Head Office</h4><p>44/108 Brooklyn, UK</p>"],
                                "marker-2": [40.602230, -74.689910, "<h4>Head Office</h4><p>44/108 Brooklyn, UK</p>"],
                                "marker-3": [35.616959, -87.838852, "<h4>Head Office</h4><p>44/108 Brooklyn, UK</p>"]

                            }'>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
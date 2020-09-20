import { decode as htmlDecode } from "he";
import { renderToString } from "react-dom/server";
import { Fragment } from "react";

function SliderDecoder({ slider, classes }) {
    var sliderStrUnscape = renderToString(slider);
    //console.log(sliderStrUnscape);
    var sliderStr = htmlDecode(sliderStrUnscape);
    //console.log(sliderStr);
    return <div dangerouslySetInnerHTML={{ __html: sliderStr }}></div>;
}

export default SliderDecoder;
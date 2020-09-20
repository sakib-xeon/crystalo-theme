import FeatureArea from "../components/layout/components/home-section/home-design-3/feature-area";
import LatestBlogThree from "../components/layout/components/home-section/home-design-3/latest-blog-3";
import LatestProject from "../components/layout/components/home-section/home-design-3/latest-project";
import Map from "../components/layout/components/home-section/home-design-3/map";
import ServiceTwo from "../components/layout/components/home-section/home-design-3/service-area-2";
import TestimonialThree from "../components/layout/components/home-section/home-design-3/testimonial-design-3";
import SliderThree from "../components/layout/components/slider/slider-3";
import SliderWrapper from '../components/layout/components/slider/slider-wrapper'

export default function HomeThree(){
    return(
       <div class="boxed_wrapper">
            <SliderWrapper slider={<SliderThree />}/>
            <FeatureArea/>
            <ServiceTwo/>
            <LatestProject/>
            <TestimonialThree/>
            <LatestBlogThree/>
            {/* <Map/> */}
       </div>

    )
}
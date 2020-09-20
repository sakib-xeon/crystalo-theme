import SliderWrapper from '../components/layout/components/slider/slider-wrapper'

const { default: Header2 } = require("../components/layout/components/header/header-2");
const { default: AboutTwo } = require("../components/layout/components/home-section/home-design-2/about-2");
const { default: BlogAreaTwo } = require("../components/layout/components/home-section/home-design-2/blog-area-2");
const { default: BrandAreaTwo } = require("../components/layout/components/home-section/home-design-2/brand-area-2");
const { default: ContactDetails } = require("../components/layout/components/home-section/home-design-2/contact-details");
const { default: Instagram } = require("../components/layout/components/home-section/home-design-2/instagram-area");
const { default: RecentProjectTwo } = require("../components/layout/components/home-section/home-design-2/recent-project-2");
const { default: Service } = require("../components/layout/components/home-section/home-design-2/service");
const { default: SloganTwo } = require("../components/layout/components/home-section/home-design-2/slogan-2");
const { default: TestimonialTwo } = require("../components/layout/components/home-section/home-design-2/testimonial-two");
const { default: WhyChoose } = require("../components/layout/components/home-section/home-design-2/why-choose");
const { default: WorkingTwo } = require("../components/layout/components/home-section/home-design-2/working-2");
const { default: WorkingProcessTwo } = require("../components/layout/components/home-section/home-design-2/working-process-2");
const { default: Slider1 } = require("../components/layout/components/slider/slider-1");
const { default: SliderTow } = require("../components/layout/components/slider/slider-2");
const { default: TopHeaderTwo } = require("../components/layout/components/top-header/top-header-2");

function Home2 (){
    return(
        <div class="boxed_wrapper"> 
            <SliderWrapper slider={<SliderTow />} />
            <AboutTwo/>
            <WorkingTwo/>
            <Service/>
            <SloganTwo/>
            <WhyChoose/>
            <RecentProjectTwo/>
            <WorkingProcessTwo/>
            <TestimonialTwo/>
            <ContactDetails/>
            <BlogAreaTwo/>
            <BrandAreaTwo/>
            <Instagram/>
        </div>
    )
}
export default Home2;
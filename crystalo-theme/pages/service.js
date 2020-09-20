import ServiceTwo from "../components/layout/components/home-section/home-design-3/service-area-2";
import ServiceOne from "../components/layout/components/services/all-service/service-1";
import ServiceBreadcrumb from "../components/layout/components/services/all-service/service-breadcrumb";
import TestimonialThree from "../components/layout/components/services/all-service/testimonial-3";

export default function Service(){
    return(
        <div className="boxed_wrapper">
            <ServiceBreadcrumb/>
            <ServiceTwo/>
            <ServiceOne/>
            <TestimonialThree/>
        </div>
    )
}
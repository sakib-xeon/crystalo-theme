import Breadcrumb from "../components/layout/components/about/breadcrumb";
import CompanyOverview from "../components/layout/components/about/company-overview";
import Team from "../components/layout/components/about/team";
import BrandArea from "../components/layout/components/home-section/home/brand-area";

export default function(){
    return(
        <div className="boxed_wrapper">
            <Breadcrumb/>
            <CompanyOverview/>
            <Team/>
            <BrandArea/>
        </div>
    )
}
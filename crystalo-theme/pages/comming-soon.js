import CommingSoonContent from "../components/layout/components/comming-soon/comming-soon";
import CommingSoonTimer from "../components/layout/components/comming-soon/comming-soon-timer";

export default function CommingSoon(){
    return(
        <div className="boxed_wrapper">
            <CommingSoonContent/>
            <CommingSoonTimer/>
        </div>
    )
}
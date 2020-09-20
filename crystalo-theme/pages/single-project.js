import ProjectBreadcrumb from "../components/layout/components/projects/projects-breadcrumb/project-breadcrumb";
import Description from "../components/layout/components/projects/projects-single/description";
import ProjectInfo from "../components/layout/components/projects/projects-single/project-info";
import SimilarProject from "../components/layout/components/projects/projects-single/similar-project";
import VideoImage from "../components/layout/components/projects/projects-single/video-image";

export default function SingleProject() {
    return (
        <div className="boxed_wrapper">
            <ProjectBreadcrumb/>
            <Description/>
            <ProjectInfo/>
            <VideoImage/>
            <SimilarProject/>
        </div>
    )
}

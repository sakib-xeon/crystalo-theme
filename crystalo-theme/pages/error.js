import ErrorBreadcrumb from "../components/layout/components/error-page/error-breadcrumb";
import ErrorPage from "../components/layout/components/error-page/error-page"

export default function Error404(){
    return(
        <div class="boxed_wrapper">
                <ErrorBreadcrumb/>
                <ErrorPage/>
        </div>
    )
}
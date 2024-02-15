import Breadcrumbs from "../../../../common/breadcrumb/Breadcrumbs"
import CountryList from "./countryList/CountryList"


function Country() {
    const breadCrumbsTitle = {
        id: "1",
        title_1: "Zone Module",
        title_2: "Country",
    }
    return (
        <>
            <Breadcrumbs breadCrumbsTitle={breadCrumbsTitle} />
            <CountryList />
        </>
    )
}
export default Country
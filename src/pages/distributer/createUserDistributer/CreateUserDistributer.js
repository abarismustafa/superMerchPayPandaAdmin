import Breadcrumbs from "../../../common/breadcrumb/Breadcrumbs"
import CreateUserDistributer from "../../../components/distributer/createUserDistributer/CreateUserDistributer"


function CreateUserDistributerPage() {
    const breadCrumbsTitle = {
        id: "1",
        title_1: "Members",
        title_2: "Distributer (0)",
        title_3: "Create User Distributer",
    }
    return (
        <>
            <Breadcrumbs breadCrumbsTitle={breadCrumbsTitle} />
            <CreateUserDistributer />
        </>
    )
}
export default CreateUserDistributerPage
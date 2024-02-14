
import Breadcrumbs from '../../common/breadcrumb/Breadcrumbs'
import '../../components/distributer/distributer.css'
import DistributerKycStatus from './distributerKycStatus/DistributerKycStatus'
import DistributerList from './distributerList/DistributerList'
function Distributer() {
    const breadCrumbsTitle = {
        id:"1",
        title_1:"Members",
        title_2:"Distributor (0)",
    }
    return (
        <>
        <Breadcrumbs breadCrumbsTitle={breadCrumbsTitle}/>
            <DistributerKycStatus />
            <DistributerList />
        </>
    )
}
export default Distributer
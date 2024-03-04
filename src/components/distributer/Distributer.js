
import { useParams } from 'react-router-dom'
import Breadcrumbs from '../../common/breadcrumb/Breadcrumbs'
import '../../components/distributer/distributer.css'
import DistributerKycStatus from './distributerKycStatus/DistributerKycStatus'
import DistributerList from './distributerList/DistributerList'
function Distributer() {
    const params = useParams()
    const breadCrumbsTitle = {
        id:"1",
        title_1:"Members",
        title_2:"Distributor (0)",
    }
    return (
        <>
        <Breadcrumbs breadCrumbsTitle={breadCrumbsTitle}/>
            <DistributerKycStatus />
            <DistributerList params={params} />
        </>
    )
}
export default Distributer
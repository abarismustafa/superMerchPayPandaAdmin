
import '../../components/distributer/distributer.css'
import DistributerKycStatus from './distributerKycStatus/DistributerKycStatus'
import DistributerList from './distributerList/DistributerList'
function Distributer() {
    return (
        <>
            <DistributerKycStatus />
            <DistributerList />
        </>
    )
}
export default Distributer
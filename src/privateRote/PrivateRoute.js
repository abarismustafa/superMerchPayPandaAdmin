import { Navigate, Outlet } from "react-router-dom"
import DasBoardPage from "../pages/dasBoardPage"


function PrivateRoute({ componet: componet, ...rest }) {
    const token = window.localStorage.getItem('userToken')
    return token ? <DasBoardPage /> : < Navigate to='/loginPage' />
}
export default PrivateRoute
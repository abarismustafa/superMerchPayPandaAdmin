import { Outlet } from "react-router-dom"
import Aside from "../../common/aside/Aside"
import Header from "../../common/header/Header"
import PageTitle from "../../common/pageTitle/PageTitle"

function DasBoardPage() {
    return (
        <>
            <div id="main-wrapper" className="show menu-toggle">
                <Header />
                <Aside />
                <div className="content-body" style={{ minHeight: '816px' }}>
                    <PageTitle />
                    <div className="container-fluid">
                        <Outlet></Outlet>
                    </div>
                </div>
            </div>
        </>
    )
}
export default DasBoardPage
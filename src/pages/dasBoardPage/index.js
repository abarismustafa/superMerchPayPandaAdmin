import { Outlet } from "react-router-dom"
import Aside from "../../common/aside/Aside"
import Header from "../../common/header/Header"
import PageTitle from "../../common/pageTitle/PageTitle"
import SideBarRight from "../../common/sideBarRight/SideBarRight"

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
            <div className="sidebar-right">
                {['end'].map((placement, idx) => (
                    <SideBarRight key={idx} placement={placement} name={placement} />
                ))}
            </div>
        </>
    )
}
export default DasBoardPage
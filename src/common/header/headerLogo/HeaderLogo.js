import logo from '../../../assets/images/logo/merchant.paypanda.in-1697112771.png'
function HeaderLogo({showAsideBar}) {

    return (
        <>
            <div className="nav-header">
                <a href="/admin" className="brand-logo">
                    <img src={logo} alt="" style={{ width: '100%' }} />
                </a>
                <div className="nav-control" onClick={showAsideBar}>
                    <div className="hamburger">
                        <span className="line" />
                        <span className="line" />
                        <span className="line" />
                    </div>
                </div>
            </div>
        </>
    )
}
export default HeaderLogo
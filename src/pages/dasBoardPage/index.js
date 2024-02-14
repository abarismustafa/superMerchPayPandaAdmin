import { Outlet } from "react-router-dom";
import Aside from "../../common/aside/Aside";
import Header from "../../common/header/Header";
import PageTitle from "../../common/pageTitle/PageTitle";
import SideBarRight from "../../common/sideBarRight/SideBarRight";
import { useState } from "react";

function DasBoardPage() {
  const [showAsideBar, setshowAsideBar] = useState(true);
  const handleAsideBar = () => {
    setshowAsideBar(!showAsideBar);
  };
  return (
    <>
      <div id="main-wrapper" className="show menu-toggle">
        <Header showAsideBar={handleAsideBar} />
        <div className="main-wrapper-details">
          <Aside showAsideBar={showAsideBar} />
          <div
            className={`content-body ${!showAsideBar ? "hide" : ""}`}
            style={{ minHeight: "816px" }}
          >
            {/* <PageTitle /> */}
            <div className="">
              <Outlet></Outlet>
            </div>
          </div>
        </div>
      </div>
      <div className="sidebar-right">
        {["end"].map((placement, idx) => (
          <SideBarRight key={idx} placement={placement} name={placement} />
        ))}
      </div>
    </>
  );
}
export default DasBoardPage;

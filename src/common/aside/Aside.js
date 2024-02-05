import { Link } from "react-router-dom";
import { navigationData } from "./navigationData/NavigationData";
import { useState } from "react";
import { AiFillDashboard } from "react-icons/ai";
import { CgLogOut } from "react-icons/cg";
const asideMenu = navigationData.menus;
function Aside({ showAsideBar }) {
  const [isOpen, setIsOpen] = useState(false);
  const [expandData, setExpandData] = useState([]);
  const [matchid, setMatchId] = useState(null);
  const [parentId, setParentId] = useState(null);
  const [chuldId, setChildId] = useState(null);

  const menuClicked = (parentId) => {
    setParentId((prev) => (prev === parentId ? null : parentId));
  };
  const subMenuClicked = (childId) => {
    setChildId(childId);
  };
  return (
    <>
      <div className={`deznav ${!showAsideBar ? "showMenu" : ""}`} id="abcd">
        <div className="deznav-scroll mm-active d-flex flex-column justify-content-between ">
          <ul className="metismenu mm-show flex-1" id="menu">
            <li className=" ">
              <Link className="has-arrow" to={"/admin"} aria-expanded="false">
                <div className="d-flex align-items-baseline">
                  <span className="menu-icon">
                    <AiFillDashboard />
                  </span>
                  <span> Dashboard</span>
                </div>
              </Link>
            </li>
            {asideMenu?.map((item, i) => {
              return (
                <li
                  className={`mm-active ${!showAsideBar ? "hide" : ""}`}
                  onClick={() => menuClicked(item.uniqueId)}
                  key={i}
                >
                  <Link className="has-arrow" aria-expanded="false">
                    <div className="">
                      <div className="menu-icon">
                        <span>{item?.icon}</span>
                      </div>
                      <span className={`nav-text`}>{item?.title}</span>
                    </div>
                  </Link>

                  <ul
                    aria-expanded="false"
                    className={`mm-collapse left ${
                      item.uniqueId === parentId ? "mm-show" : ""
                    }`}
                  >
                    {item?.subMenus.map((subItem, i) => {
                      return (
                        <li
                          className="mm-active sidebar-content"
                          onClick={() => subMenuClicked(subItem.uniqueId)}
                        >
                          <Link to={subItem?.path} className="mm-active">
                            {subItem?.title}
                          </Link>
                        </li>
                      );
                    })}
                  </ul>
                </li>
              );
            })}
          </ul>
          <div className="help-desk ">
            {/* <Link to="#" className="btn btn-primary">Help Desk</Link>
                            &nbsp; */}
            <Link to="#" className="btn btn-warning">
              <CgLogOut /> <span>Log out</span>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
export default Aside;

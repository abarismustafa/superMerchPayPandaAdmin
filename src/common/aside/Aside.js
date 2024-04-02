import { Link, useNavigate } from "react-router-dom";
import { getN, navigationData } from "./navigationData/NavigationData";
import { useEffect, useState } from "react";
import { AiFillDashboard } from "react-icons/ai";
import { useLocation } from "react-router-dom";
import { CgLogOut } from "react-icons/cg";
import { useTranslation } from "react-i18next";
import { Button } from "react-bootstrap";
import { removeItemFromLocalStorage } from "../../utils/localStorage";
import { useDispatch } from "react-redux";
import { setIsLogin } from "../../slice/auth";
import { getLength } from "../../api/login/Login";
let asideMenu = [];
function Aside({ showAsideBar }) {
  const [parentId, setParentId] = useState(null);
  const [childId, setChildId] = useState(null);
  const [countLaenData, setCountLenData] = useState(null);
  const navigate = useNavigate();
  const location = useLocation();
  const { t } = useTranslation();
  const dispatch = useDispatch();

  const menuClicked = (parentId) => {
    setParentId((prev) => (prev === parentId ? null : parentId));
    setChildId(null);
  };
  const subMenuClicked = (e, childId) => {
    setChildId((prev) => (prev === childId ? null : childId));
    e.stopPropagation();
  };

  const handleLogOut = () => {
    removeItemFromLocalStorage("userToken");
    dispatch(setIsLogin({ isLogin: false }));
  };

  // useEffect(() => {
  //   const modifiedPath = location.pathname.replace("/admin/", "");
  //   asideMenu.forEach((item) => {
  //     item?.subMenus.map((submenu) => {
  //       if (submenu.path === modifiedPath) {
  //         setChildId(submenu.uniqueId);
  //         setParentId(item.uniqueId);
  //       }
  //     });
  //   });
  // }, []);
  const getCountData = async()=>{
    try {
      const response = await getLength()
      setCountLenData(response?.data)
    } catch (error) {
      alert(error.message)
    }
  }


 asideMenu =  navigationData(countLaenData)

  useEffect(() => {
    getCountData()
    const modifiedPath = location.pathname.replace("/admin/", "");

    const foundSubMenu = asideMenu
      .flatMap((item) => item?.subMenus || [])
      .find((submenu) => submenu.path === modifiedPath);

    if (foundSubMenu) {
      setChildId(foundSubMenu.uniqueId);
      const parentItem = asideMenu.find((item) =>
        item.subMenus?.includes(foundSubMenu)
      );
      if (parentItem) {
        setParentId(parentItem.uniqueId);
      }
    }
  }, []);
  return (
    <>
      <div
        className={`deznav ${!showAsideBar ? "showMenu" : "hideMenu"}`}
        id="abcd"
      >
        <div className="deznav-scroll mm-active d-flex flex-column justify-content-between ">
          <ul className="metismenu mm-show flex-1" id="menu">
            <li className={`mm-active ${!showAsideBar ? "hide" : ""}`}>
              <Link className="has-arrow" to={"/admin"} aria-expanded="false">
                {/* <div className="d-flex align-items-baseline"> */}
                <span className="menu-icon">
                  <AiFillDashboard />
                </span>
                <span className={`nav-text`}> {t("Dashboard")} </span>
                {/* </div> */}
              </Link>
            </li>
            {asideMenu?.map((item, i) => {
              return (
                <li
                  className={`mm-active ${!showAsideBar ? "hide" : ""} ${
                    parentId === item.uniqueId ? "active" : ""
                  }`}
                  onClick={() => menuClicked(item.uniqueId)}
                  key={i}
                >
                  <Link className="has-arrow" aria-expanded="false">
                    <div className="">
                      <div className="menu-icon">
                        <span>{item?.icon}</span>
                      </div>
                      <span className={`nav-text`}> {t(item?.title)}</span>
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
                          className={`mm-active sidebar-content ${
                            childId === subItem.uniqueId ? "active" : ""
                          }`}
                          onClick={(e) => subMenuClicked(e, subItem.uniqueId)}
                        >
                          <Link to={subItem?.path} className="mm-active">
                            {t(subItem?.title)}
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
            <Button
              className="btn btn-warning"
              type="button"
              onClick={handleLogOut}
            >
              <CgLogOut /> <span>Log out </span>
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}
export default Aside;

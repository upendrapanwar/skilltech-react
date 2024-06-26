import React, { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import BellIcon from "@heroicons/react/24/outline/BellIcon";
import Bars3Icon from "@heroicons/react/24/outline/Bars3Icon"; 
import openRightDrawer from "../admin/common/rightDrawerSlice";
import RIGHT_DRAWER_TYPES from "../admin/utils/globalConstantUtil";
import profile_logo from "../../assets/images/profile-logo.jpg"
import '../../index.css';
import '../../assets/css/admin.css';
import '../../assets/css/output.css';


const Header = () => {
  const location = useLocation();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { noOfNotifications } = useState("");

  // const isAdminPage = location.pathname.includes('admin');
  // console.log('isAdminPage=',isAdminPage);
  // if(isAdminPage) {
  //   require('../../index.css');
  //   require('../../assets/css/admin.css');
  //   require('../../assets/css/output.css');  
  // }


  // Opening right sidebar for notification 
  const openNotification = () => {
    dispatch(
      openRightDrawer({
        header: "Notifications",
        bodyType: RIGHT_DRAWER_TYPES.NOTIFICATION,
      })
    );
  };

  function logoutUser() {
    localStorage.clear();
    window.location.href = "/admin/login";
  }
  return (
    <React.Fragment>
      <>
        <div className="navbar  flex justify-between bg-base-100  z-10 shadow-md ">
          {/* Menu toogle for mobile view or small screen */}
          <div className="">
            <label
              htmlFor="left-sidebar-drawer"
              className="btn btn-primary drawer-button lg:hidden"
            >
              <Bars3Icon className="h-5 inline-block w-5" />
            </label>
            <h1 className="text-2xl font-semibold ml-2">Admin Dashboard</h1>
          </div>

          <div className="order-last">
            {/* Notification icon */}
            <button
              className="btn btn-ghost ml-4  btn-circle"
              onClick={() => openNotification()}
            >
              <div className="indicator">
                <BellIcon className="h-6 w-6" />
                {noOfNotifications > 0 ? (
                  <span className="indicator-item badge badge-secondary badge-sm">
                    {noOfNotifications}
                  </span>
                ) : null}
              </div>
            </button>

            {/* Profile icon, opening menu on click */}
            <div className="dropdown dropdown-end ml-4">
              <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                <div className="w-10 rounded-full">
                  <img src={profile_logo} alt="profile" />
                </div>
              </label>
              <ul
                tabIndex={0}
                className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
              >
                <li className="justify-between">
                  <Link to={"#"}>
                    Profile Settings
                    {/* <span className="badge">New</span> */}
                  </Link>
                </li>
                {/* <li className="">
                  <Link to={"/app/settings-billing"}>Bill History</Link>
                </li> */}
                <div className="divider mt-0 mb-0"></div>
                <li>
                  <a onClick={logoutUser}>Logout</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </>
    </React.Fragment>
  );
};

export default Header;



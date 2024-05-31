import "./ScreenLayout.css";
import { Outlet } from "react-router-dom";
import {SideMenu} from "./components/SideMenu.jsx";
import { Topbar } from "./components/Topbar.jsx";
// import {Dashboard} from "./main.content/Dashboard"

export function ScreenLayout() {
  return (
    <div className="backgroundUser">
      <Topbar/>
      <SideMenu/>
      {/* <Dashboard/> */}
      {/* <div className="mainContent flex"> */}
      <Outlet />
      {/* </div> */}
      <div className="footer">{/* <Footer /> */}</div>
    </div>
  );
}

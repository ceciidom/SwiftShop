import "./Layout.css";
import { Outlet } from "react-router-dom";

export function Layout() {
  return (
    <div className="background">
      <div className="head">
        {/* <TopBar /> */}
      </div>
      <div className="sideMenu">
        {/* <SideMenu/> */}
      </div>
      <div className="mainContent">
        <Outlet/>
      </div>
      <div className="footer">
        {/* <Footer /> */}
      </div>
    </div>
  );
}

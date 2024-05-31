import "./Screen.css";
import {Hero} from "./Hero"
import { Outlet } from "react-router-dom";

export function ScreenLogin() {
    return (
      <div className="background">
        <div className="first-column">
            <Hero />
        </div>

        <div className="second-column">
            <Outlet />
        </div>
      </div>
    );
}



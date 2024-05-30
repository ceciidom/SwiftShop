import "./Window.css";
import {Hero} from "./Hero"
// import {Form} from "./Form";
import { Outlet } from "react-router-dom";

export function Window() {
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



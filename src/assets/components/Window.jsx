import "./Window.css";
import {Hero} from "./Hero"
import {Form} from "./Form"

export function Window() {
    return (
      <div className="background">
        <div className="left-column">
            <Hero />
        </div>

        <div className="right-column">
            <Form />
        </div>
      </div>
    );
}



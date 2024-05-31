import './App.css'
import {ScreenLogin} from "./assets/components/screen.login/Screen";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import {LoginForm, RegisterForm } from "./assets/components/screen.login/Form"
import { ScreenLayout } from './assets/components/screen.main/ScreenLayout';
import { Dashboard } from './assets/components/screen.main/main.content/Dashboard';

function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<ScreenLogin />}>
          <Route path="/register" element={<RegisterForm />} />
          <Route path="/login" element={<LoginForm />} />
        </Route>
        <Route path="/user" element={<ScreenLayout/>}>
          <Route path="/user/dashboard" element={<Dashboard />} />
        </Route>
      </Routes>
      {/* <Window /> */}
    </Router>
  );
}
    
    
      {/* <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p> */}
  

export default App

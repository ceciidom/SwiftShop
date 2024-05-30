import './App.css'
import {Window} from "./assets/components/Window";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import {LoginForm, RegisterForm } from "./assets/components/Form"
import { Layout } from './assets/components/Layout';

function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Window />}>
          <Route path="/register" element={<RegisterForm />} />
          <Route path="/login" element={<LoginForm />} />
        </Route>
        <Route path="/dashboard" element={<Layout />}>
          
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

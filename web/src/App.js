import "./App.css";
import Admin from './Compontents/Admin';
import Home from "./Compontents/home";
import {
  Routes, Route, BrowserRouter
} from "react-router-dom";

function App() {
  
  return (
    <div className="App">
      <br />
      <h1 style={{textAlign:"center"}}>Live Cricket Scoreboard</h1>
    <Routes>
          <Route exact path="/admin" element={<Admin />} />
          <Route exact path="/" element={<Home/>} />
    </Routes>
    </div>
  );
}

export default App;

import "./App.css";
import {Route, Routes} from "react-router-dom";
import Home from "./pages/Home";
import Login from './pages/Login'


function App() {
  return (
    <div className="w-screen min-h-screen 
    bg-richblack-900 flex flex-col font-inter ">
      
      <Routes>
        <Route path="/" element={<Home/>}> </Route>
        <Route path='login' element={<Login/>}></Route>
      </Routes>
    </div>
  );
}

export default App;

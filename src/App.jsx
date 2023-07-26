import React from "react"
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Menu from "./Components/Menu";
import Home from "./Components/Home";
import Tasks from "./Components/Tasks";
import AboutUs from "./Components/AboutUs";
import Header from "./Components/Header";
import './App.css';


function App() {
 
 
  return (
    <> 
    <BrowserRouter>
       <Header />
       <Menu/>
    <div className="container">
     <Routes>
        <Route path="/" exact element={<Home/>} />
        <Route path="/Tasks" element={<Tasks/>} />
        <Route path="/AboutUs" element={<AboutUs/>} />
      </Routes> 
    </div> 
    </BrowserRouter>   
    </>
  )
}
  
export default App

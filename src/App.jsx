import React from "react"
import { BrowserRouter, Route, Routes } from "react-router-dom";
import {ChakraProvider,Box} from "@chakra-ui/react";
import Menu from "./Components/Menu";
import Home from "./Components/Home";
import Tasks from "./Components/Tasks";
import AboutUs from "./Components/AboutUs";
import Header from "./Components/Header";
import './App.css';



function App() {
 
 
  return (
    <ChakraProvider>
      <Box 
      backgroundPosition="center" backgroundColor="rgb(247, 193, 249)"
      h="100vh" w="100vw"> 
    <BrowserRouter>
    <Box marginInline="70px">
       <Header />
       </Box>
       <Menu/>
    <div className="container">
     <Routes>
      
        <Route path="/" exact element={<Home/>} />
        <Route path="/Tasks" element={<Tasks/>} />
        <Route path="/AboutUs" element={<AboutUs/>} />
        
      </Routes> 
    </div> 
    
    </BrowserRouter> 

    </Box>
    </ChakraProvider>
  )
}
  
export default App

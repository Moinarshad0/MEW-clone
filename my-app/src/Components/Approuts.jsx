import React from 'react'
import Header from "./Header";
import Home from "./Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Exploerdapps from "../pages/Exploredapps";
import Signmessege from "../pages/Signmessege";
import Swap from "../pages/Swap";
 import Accesswallet from "../pages/Accesswallet";
import images from "../images/send2.jpg"
import Footer from "./Footer";
import Create from "../pages/Create";
import Minifooter from "./Minifooter";

function Approuts() {
  return (
    <> 
    <Header />

    <Routes>
       <Route  path="/"  element={<Home/>}></Route>
      <Route  path="/ExploreDapps" element={<Exploerdapps/>}></Route>
      <Route  path="/SendEth" element={<Create/>}></Route>
      <Route  path="/SwapTokens" element={<Swap/>}></Route>
      <Route  path="/Signmessage" element={<Signmessege/>}></Route>
      <Route  path="/AccessWallet" element={<Accesswallet/>}></Route>
      
    </Routes> 
   <Footer/>
   <Minifooter/>
   </>
  )
}

export default Approuts
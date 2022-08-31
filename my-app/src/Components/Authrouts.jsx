import React from 'react'
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
 import Dashbord from "../pages/Dashbord"

function Authrouts() {
  return (
 <Routes>

<Route exact path="/panel" element={<Dashbord/>}></Route>
 </Routes>
  )
}

export default Authrouts
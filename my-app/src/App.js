import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Authrouts from "./Components/Authrouts";
import Approuts from "./Components/Approuts";
function App() {
  return (
    <div>
       
        <BrowserRouter>
          

          <Routes>
            
            <Route exact path="/Dashboard/*" element={<Authrouts />} />
            <Route exact  path="/*" element={<Approuts />} />

          </Routes> 
        </BrowserRouter>
         
    
  
    </div>
  );
}

export default App;

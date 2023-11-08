import { useState } from "react";
import Sidebar from "./components/Sidebar";
import Dashboard from "./components/Dashboard";
import { BrowserRouter,Routes,Route } from "react-router-dom";
import { Navigate } from 'react-router-dom'
import Edit from "./components/Edit";



function App() {
 
  
  return <>
        <div className="container-fluid">
        <div className="row">
          <BrowserRouter>
          <Sidebar/>
          <Routes>
          <Route path='/dashboard'element={<Dashboard/>}/>
          <Route path='/edit/:id' element={<Edit/>}/>
        
          <Route path='/*' element={<Navigate to={'/dashboard'}/>}/>
       
          </Routes>
          </BrowserRouter>
      
     </div>
     </div>
           
    </>
  
}

export default App

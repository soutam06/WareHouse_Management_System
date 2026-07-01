import React from 'react';
import "./App.css";
import Home from "./Components/Home/Home";
import { Route,Routes } from 'react-router-dom';
import Sidebar from './Components/Sidebar/Sidebar';
import Godown from './Components/Godown/Godown';





// Main App Component
const App = () => {
  return (
    <div className="flex justify-center items-center w-screen min-h-screen">
      <div className='lg:w-1/4 h- bg-blue-600  '>
      <Sidebar />
      </div>
     
        <Routes>
            <Route path = "/" element = {<Home/>}/>
            <Route path = "/godown/:godownName/:godownId" element = {<Godown/>}/>

        </Routes>
    </div>
  );
};

export default App;

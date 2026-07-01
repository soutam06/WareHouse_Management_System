import React from "react";
// import treeData from "../../../tree.json"
import TreeView from "../TreeView/TreeView"
import { useState,useEffect } from "react";
import axios from "axios";
import { RxHamburgerMenu } from "react-icons/rx";
import "./Sidebar.css"


const Sidebar = () => {
    const [treeData,settreeData] = useState([]);
    const [isnavOpen,setisnavOpen] = useState(false);

    const toggleNav = ()=>{
        setisnavOpen(!isnavOpen);
    }

    const getTreedata = async()=>{
        try{
          const response = await axios.get("https://ware-house-management-system-inky.vercel.app/godown");
          
          if(response.status===200){
            settreeData(response.data);
          }
        }catch(error){
          console.log(error);
        }
    }

    useEffect(()=>{
      getTreedata();
    },[]);



    return (
      <>
       <div className="hamburger" >
            <RxHamburgerMenu size = {30} onClick={toggleNav} className="hamburger"/>
            </div>

      <div className={`${isnavOpen?"fixed flex top-0 left-0":"hidden"} lg:w-full lg:h-dvh lg:flex flex-col bg-blue-600 text-white shadow-lg transition z-40`} >
          
        <div className="p-6 text-lg font-bold">Select a Warehouse to view products</div>
        <div className="px-4 bg-blue-600">
          <TreeView data={treeData} />
        </div>
      </div>

      </>
    );
  };

export default Sidebar;
  

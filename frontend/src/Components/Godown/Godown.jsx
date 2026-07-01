import React from "react";

import { useParams } from "react-router-dom";
import {useState , useEffect} from "react";
import axios from "axios";
import Itemcard from "../Itemcard/Itemcard";
// Godown Component

const Godown = () => {
    const { godownId,godownName } = useParams();
    const [items,setitems] = useState([]);

    const getitems = async()=>{
        try{
            const response = await axios.get(`http://localhost:4000/item`,{
                params:{
                    godown:godownId
                }
            });
            if(response.status===200){
                setitems(response.data);
            }
        }catch(error){
            console.log(error);
    }
}

    useEffect(() => {
       getitems()
    },[godownId])



    return (
        <div className="ml-4 w-full lg:w-3/4 h-full flex flex-col justify-between items-center">

            <div className="font-bold text-blue-500 text-xl sm:text-3xl w-full h-auto flex justify-center items-center" >
                Items in {godownName}
            </div>

            <div className = "w-full h-auto max-h-[900px] lg:max-h-[600px] overflow-y-auto  grid grid-flow-row grid-cols-1 sm:grid-cols-3 gap-5 mt-4">
                {
                    items.map((item)=>{
                        return(
                            <Itemcard item={item} className = "flex justify-center items-center"/>
                        )
                    })
                }
            </div>
          
        </div>
    );
}

export default Godown;
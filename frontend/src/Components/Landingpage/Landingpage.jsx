import React from "react";
import { Link } from "react-router-dom";
import vector from "./wms.webp";
import { TypeAnimation } from 'react-type-animation';


const Landingpage = () => {
    return (

        <>
         
            <div className="h-full w-full p-0 m-0  flex flex-col justify-center items-center">
                
                <div className="infobox h-1/2 w-full flex flex-col justify-center items-center ">
                    <div classname="w-full h-auto border-b-4 text-right flex justify-center items-center border-b-white border-solid">
                        <h1 className="text-center text-2xl sm:text-5xl text-blue-500 font-500 sm:text-left">WAREHOUSE MANAGEMENT SYSTEM</h1>
                       
                    </div>

                   

                    <div className="textbox w-full h-auto flex justify-center items-center mt-8 mb-4">
                        <p className="text-blue-400 text-justify text-lg sm:text-2xl ">
                            <TypeAnimation
                                sequence={[
                                    "View Stock",
                                    1000,
                                    "Analyze Product",
                                    1000,
                                    "Spend Wisely",
                                    1000,
                                ]}
                                speed={50}
                                repeat={Infinity}
                                style={{ fontSize: '2em' }}
                            />
                        </p>
                    </div>
                    {/* <div className="h-1/6 w-full mt-6 rounded-md text-white flex justify-center items-centerS">
                        <button type="button" class="bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 ... h-full w-1/4 ">
                           Get Started
                        </button>
                      
                    </div> */}


                </div>
                <img src={vector} alt="Vector" className="w-full h-1/2 lg:w-1/2 mb-4" />

            </div>
        </>

    )
}

export default Landingpage;
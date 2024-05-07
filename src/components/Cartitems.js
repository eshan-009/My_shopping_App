import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { remove } from "../redux/slice/Cartslice";
import {FcDeleteDatabase} from "react-icons/fc"
export const Cartitems = ({item})=>{

const dispatch = useDispatch();

function removefromcart()
{
    dispatch(remove(item.id));
}
    return(
    

<div className="border-2 rounded w-[50vw] m-2 p-2 " >
            <div
            onClick={removefromcart} className="ml-[94%]" >
               <FcDeleteDatabase size={40}/>
            </div>
         
         <div >

        <div className="flex justify-center ">
          <img src={item.image} width="120px" />
        </div>
        <div>
          <h1 className="text-xl font-semibold">{item.title}</h1>
          <br></br>
          <h1><b>Description</b> : {item.description}</h1>
          <br></br>
          <p className="mr-[85%] font-bold">
           Price : ${item.price} 
          </p>

        </div>


      </div>
       
        </div>

            
   
    );
}
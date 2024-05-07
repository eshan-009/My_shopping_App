import React from "react"

import { useDispatch, useSelector } from "react-redux";


import { add,remove } from "../redux/slice/Cartslice";
import { useNavigate,Navigate } from "react-router-dom";
function Product(props)
{
    const Loggedin = useSelector((state)=>state.Loggedin.value);
    const navigate = useNavigate();
   const Cart = useSelector((state)=>state.Cart)
   const dispatch = useDispatch();

    const data = props.obj;
    function Addtocart()
    {
        Loggedin ?    dispatch(add(data)) : navigate("/login");
 
  
    }
     
    function removefromcart()
    {
        dispatch(remove(data.id));
    }
  
    return(
  
        <div className="w-[300px] flex flex-col justify-start items-center p-3 border rounded-md border-slate-300 m-1  ">
          <div className="font-bold h-14">{data.title}</div>
          <img src={data.image} width="200px" className=" object-contain h-[300px]"></img>
          
         
         
          <div className="">{data.description.substring(0,50)}...</div>
          <div className="mr-auto font-semibold">Price : ${data.price}</div>
          <div className="mr-auto font-semibold flex space-x-[5rem]">
            <p>Rating : {data.rating.rate}/5</p></div>
          <br></br>

          {
            Cart.some((p)=>p.id==data.id) ? (<button onClick={removefromcart} className="border rounded-md font-semibold w-[13rem] bg-red-500 ">Remove from cart</button>) :
              (<button onClick={Addtocart} className="border rounded-md font-semibold w-[13rem] bg-yellow-300" >Add to cart</button>)
          }
          
            
        </div>
  
    )
}
export default Product
import React, { useState } from "react"
import { NavLink } from "react-router-dom"
import { CiShoppingCart } from "react-icons/ci";
import { CiLogin } from "react-icons/ci";
import { useDispatch, useSelector } from "react-redux";
function NavBar()
{
  const loggedin = useSelector((state)=>state.Loggedin.value);
  const dispatch = useDispatch();
  console.log(loggedin + "Navvv")
    return(
            <>
             <div className="flex justify-evenly items-center bg-cyan-200 h-[4rem]">
              <NavLink to={"/"}>  <div className=" font-bold text-4xl ">SHOP.com</div></NavLink>
            
                <input type="text" placeholder="Search" className="w-[500px] h-[40px] rounded p-2"></input>
                  <div className=" flex items-center space-x-3 ">
                  <NavLink to={"/category"}>
                  <div>Category</div>
                  </NavLink>

                  <NavLink to={"/offers"} >
                  <div>Offers</div>
                  </NavLink>

                  <NavLink to={"/help"}>
                  <div>Help</div>
                  </NavLink>
                  </div>   

                    <div className="flex items-center space-x-4" >
                    
                  
                  {
                    loggedin ?(<NavLink to={"/cart"} >
                    <CiShoppingCart size={30}/>
                  <div>Cart</div>
                  </NavLink>) : 
                  
                  <div className="flex items-center space-x-3">
                    <div className="rounded bg-cyan-500 h-10 w-20 flex items-center justify-center font-bold">
                    <NavLink to={"/login"}> <button>Login </button></NavLink>
                

                    </div>  

                    <div className="rounded bg-cyan-500 h-10 w-20 flex items-center justify-center font-bold">
                    <NavLink to={"/signup"}> <button>Signup </button></NavLink>
                 

                    </div> 

                  </div>

              
                  }
                              
            
                    </div>
                   </div>
          
             
            
            </>
    )
}
export default NavBar
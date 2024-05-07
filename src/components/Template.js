import React from "react";
import LoginForm from "./LoginForm";
import SignupForm from "./SignupForm";
import {FcGoogle} from "react-icons/fc"
import { useDispatch, useSelector } from "react-redux";

function Template({title,desc1,desc2,formType}){
    const SetLoggedIn = useSelector((state)=>state.value)


    return(
       
        <div className="flex max-w-[80%] mx-auto justify-between items-center p-4 ">
             <div className="text-white  max-w-[40%] h-[90%]">
           
           <h1 className="font-semibold text-[1.875rem] leading-[2.375rem]">{title}</h1>
           <p className="text-[1.125rem] leading[1.625rem] mt-4">{desc1}</p>
           <p>{desc2}</p>
 
             {
                 formType === "login"?(<LoginForm SetLoggedIn={SetLoggedIn} ></LoginForm>):(<SignupForm SetLoggedIn={SetLoggedIn}></SignupForm>)
             }
           
           
 
         <div className="flex w-full items-center my-4 gap-x-2 ">
         <div className=" w-full h-[1px] bg-white"></div>
         <span className="text-white">Or</span>
         <div className="w-full h-[1px] bg-white"></div>
         </div>
         
         <button className='w-full flex justify-center items-center rounded-[8px] font-medium text-richblack-100
            border border-richblack-700 px-[12px] py-[8px] gap-x-2 mt-6 '>
                <FcGoogle/>
                <p>Sign Up with Google</p>
            </button>
         
            
         </div>

            {/* <img src={image} width="500px"></img> */}
        </div>
    );
}
export default Template;
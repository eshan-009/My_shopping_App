import React from "react";
import { useState } from "react";
import { useDispatch,useSelector } from "react-redux";
import { Navigate, useNavigate } from "react-router-dom";
import { login } from "../redux/slice/Loggedinslice";
function SignupForm(){

     const[formData,setformData] = useState({firstName:"",lastname:"",email:"",create_password:"",confirm_password:""})
     const Loggedin = useSelector((state)=>state.Loggedin.value);
     
     const dispatch =   useDispatch();
     const navigate = useNavigate();
function changeHandler(event){
    setformData((prev)=>{
       const {name,type,value} = event.target;
        return{
            ...prev,[name]:value
        }
    })}
    function submitHandler(event){
        event.preventDefault();
      formData.create_password === formData.confirm_password ?   (dispatch(login()) ) : alert("Password mismatch")
       navigate("/")
    }
    console.log(Loggedin + "ababab")
    return(
        <form className="flex flex-col " onSubmit={submitHandler}>
            <div className="flex gap-8">
            <label className="text-start">
            First Name<sup className='text-pink-200'>*</sup>
                <input 
                type="text" 
                placeholder="Enter First Name"
                name="firstName"
                value={formData.firstName}
                onChange={changeHandler}
                className="text-black rounded-[0.5rem] w-full p-[12px]"
                required
                ></input>
            </label>

            <label className="text-start">
            Last Name<sup className='text-pink-200'>*</sup>
                <input 
                type="text" 
                placeholder="Enter Last Name"
                name="lastname"
                value={formData.lastname}
                onChange={changeHandler}
                className="text-black rounded-[0.5rem] w-full p-[12px]"
                required
                ></input>
            </label>
            </div>

 
           <label className="text-start">
            Email Address<sup className='text-pink-200'>*</sup>
                <input 
                 type="text"
                 placeholder="Enter Email Address"
                 name="email"
                 value={formData.email}
                 onChange={changeHandler}
                 className="text-black rounded-[0.5rem] w-full p-[12px]"
                 required
                 ></input>
            </label>

            <label className="text-start">
            Create Password<sup className='text-pink-200'>*</sup>
                <input 
                type="password"
                placeholder="Enter Password"
                name ="create_password"
                value={formData.password}
                onChange={changeHandler}
                className="text-black rounded-[0.5rem] w-full p-[12px]"
                required
                ></input>
            </label>

            <label className="text-start">Confirm Password<sup className='text-pink-200'>*</sup>
                <input
                 type="password"
                 placeholder="Confirm Password"
                 name ="confirm_password"
                 value={formData.password}
                 onChange={changeHandler}
                 className="text-black rounded-[0.5rem] w-full p-[12px]"
                 required

                ></input>
            </label>

            <button className='bg-yellow-400 rounded-[8px] font-medium text-black px-[12px] py-[8px] mt-6 '>
            Sign up
         </button>
        </form>
    );
}
export default SignupForm;
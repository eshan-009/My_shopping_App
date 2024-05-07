import React, { useState } from "react";
import { useSelector,useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { login } from "../redux/slice/Loggedinslice";
function LoginForm(){
    const navigate = useNavigate();
    const[formData,setformData] = useState({email:"",password:""})

    const Loggedin = useSelector((state)=>state.Loggedin.value);
     
    const dispatch =   useDispatch();

function changeHandler(event){
    setformData((prev)=>{
       const {name,type,value} = event.target;
        return{
            ...prev,[name]:value
        }
    })
}

function submitHandler(event){
    event.preventDefault();
  
    dispatch(login())
    navigate("/")
}

    return(
        <form className="flex flex-col " onSubmit={submitHandler}>
            <label className="text-start">
            Email Address<sup className='text-pink-200'>*</sup>
                <input 
                 type="email"
                 placeholder="Enter Email Address"
                 name="email"
                 value={formData.email}
                 onChange={changeHandler}
                 className="text-black rounded-[0.5rem] w-full p-[12px]"
                 required
                 ></input>
            </label>

            <label className="text-start">
            Password<sup className='text-pink-200'>*</sup>
                <input 
                type="password"
                placeholder="Enter Password"
                name ="password"
                value={formData.password}
                onChange={changeHandler}
                className="text-black rounded-[0.5rem] w-full p-[12px]"
                required
                ></input>
            </label>
            <button className=' bg-yellow-400 rounded-[8px] font-medium text-black px-[12px] py-[8px] mt-6'>
            Sign In
        </button>
        </form>
    );
}
export default LoginForm;
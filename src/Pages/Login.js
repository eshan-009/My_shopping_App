import Template from "../components/Template";

import React from "react";
function Login(){
 
    return(
        <div className="bg-black h-[91vh] ">
            <Template
            title ="Welcome Back"
            desc1="Continue Shopping"
            desc2="Get much more for your money"
           
            formType="login"
           />
        </div>);
}
export default Login;
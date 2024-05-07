import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Product from "../components/Product";
import { Cartitems } from "../components/Cartitems";
function Cart()
{
    const Cart = useSelector((state)=>state.Cart);
    console.log(Cart);
   const [totalamount,settotalamount] = useState(0);
   const [SGST,setSGST] = useState(0);
   const [CGST,setCGST] = useState(0);
   useEffect(()=>{

    settotalamount(Cart.reduce((acc,curr)=>
      acc + curr.price,0
    ));
 
   
},[Cart])

useEffect(()=>{
    setSGST((18*totalamount)/100);
    setCGST((12*totalamount)/100);
})
        
   
    return(
        
       <div>
         <p className="text-5xl font-bold text-center">Your Cart</p>
         <div>
           {
       
            Cart.length >0?
             
          <div className="flex">
            <div className="">
               {
                    Cart.map((item)=><Cartitems item={item}></Cartitems>)
               }   
          </div>
               
         
              <div className=" w-[50%] m-2 text-center">
             
              <p className="text-3xl font-semibold">Cart Summary</p>
              <br></br>
              <br></br>
               <p>Cart items : {Cart.length}</p>
               <p> CGST : ${CGST.toFixed(2)}</p>
               <p> SGST : ${SGST.toFixed(2)}</p>
               <br></br>
              <p> Total Amount : ${totalamount.toFixed(2)} </p>
              <br></br>
              <button className="border rounded-md font-semibold w-[13rem] bg-yellow-300">
                CheckOut Now
              </button>
              </div>

          </div>



          :
          <div className="h-[100vh] flex justify-center items-center overflow-hidden" >
            <p className="text-6xl font-bold bg-yellow-300 rounded-md w-[30rem] h-[5rem] flex justify-center items-center">Cart is Empty</p>
          </div>

               
             
             
            

             
           }
        
        </div>
       </div>
    );
}

export default Cart;
import React, { useEffect, useState } from "react"
import Product from "./Product";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function ProductCatalogue()
{
    const [data,setdata] = useState([]);
    async function fetchproduct()
    {
        try{
            const req = await fetch('https://fakestoreapi.com/products');
            const  rdata = await req.json();
            setdata(rdata);
        }
        catch(e)
        {
            alert(e);
        }
    }
    useEffect(()=>{
        fetchproduct();
       
    },[])
  
 

    return(
        
        <div>
        
            <div className="mt-8 flex flex-wrap justify-center">
    
        {
          data.map((obj)=><Product key={obj.id} obj={obj}></Product>)
          
        }

        </div>
       
            </div>
        
    
    )
}
export default ProductCatalogue
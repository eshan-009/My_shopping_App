import React, { useEffect, useState } from "react"
import Product from "./Product";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Productitem()
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

    const settings = {
        dots: true,
        infinite: true,
        speed: 5000,
        slidesToShow: 4,
        slidesToScroll: 2,
        autoplay: true,
        autoplaySpeed: 2000,
        cssEase: "linear",
        responsive: [
      {
        breakpoint: 1260,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 950,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 1
        }
      },
      {
        breakpoint: 620,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,    
          dots:false,
        }
      }
    ]
        
      };

    return(
        
        <div >
        
            <div className="mt-8">
            <Slider {...settings}>
        {
          data.map((obj)=><Product key={obj.id} obj={obj}></Product>)
          
        }
   </Slider>
        </div>
       
            </div>
        
    
    )
}
export default Productitem
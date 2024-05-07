import React from "react"
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import image1 from "../images/14c90f9bad300d13.webp"
import image2 from "../images/5e02459fccc48f28.webp"
import image3 from "../images/97f695ce49d7a367.webp"
import image4 from "../images/d523b3be81ebfb40.webp"
function Carousal()
{
    const settings = {
        dots: true,
        infinite: true,
        speed: 5000,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        cssEase: "linear",
      
      };
    return(
        
        <div className="">
            <Slider {...settings}>
            <div><img src={image1} alt="happy"></img></div>
            <div><img src={image2} alt="happy"></img></div>
            <div><img src={image3} alt="happy"></img></div>
            <div><img src={image4} alt="happy"></img></div>
            </Slider>
        </div>
        
    );
}
export default Carousal
import React from "react";
import Carousal from "../components/Carousal";
import Productitem from "../components/Productitems";
import ProductCatalogue from "../components/ProductCatalogue";
function Home()
{
    return(
<div>
        <Carousal></Carousal>
      <div className=" mt-[2rem] h-[90px] pl-[1rem]">
        <div className='text-4xl flex pt-9 font-bold'>Trending Deals!!!</div>
      </div>
      <Productitem></Productitem>
      <ProductCatalogue></ProductCatalogue>
</div>
    )
}

export default Home;
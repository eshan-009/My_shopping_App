import React from "react";

function Category()
{
    return(
<div> 
    <ul className="w-[100vw] h-100[vh] flex justify-center m-6 text-2xl space-x-3">
    <li className="border rounded-md font-semibold w-[13rem] bg-yellow-300">Men</li>
    <li className="border rounded-md font-semibold w-[13rem] bg-yellow-300">Women</li>
    <li className="border rounded-md font-semibold w-[13rem] bg-yellow-300">Boys</li>
    <li className="border rounded-md font-semibold w-[13rem] bg-yellow-300">Girls</li>
 
    </ul>

    </div>
    );
}

export default Category;
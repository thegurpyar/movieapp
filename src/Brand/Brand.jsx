import { borderBottom } from "@mui/system";
import React from "react";
import "./brand.css";
const Brand=()=>{
    return(
        <div className="brand" >
            <div style={{textDecoration:"underline 3px",lineHeight:"80px",paddingBottom:"10px",borderBottom:"10px"}}>MOVIEFLIX</div>
            <p>Checkout endless movies and shows</p>
        </div>
    )
}

export default Brand;
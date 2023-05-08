import React from "react";
import { Movie } from "../Movie/Movie";

export const TvComponent=(props)=>{
    return ( 
        <Movie name={"tv"} url={props.tvurl} setTvurl={props.setTvurl}/>
    )
}
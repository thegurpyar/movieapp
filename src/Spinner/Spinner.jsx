import React from "react";
import { Puff } from "react-loader-spinner";
export const Spinner=()=>{
    return (
    <Puff
      height="500"
      width="100"
      radius={1}
      color="#DDDDDD"
      ariaLabel="puff-loading"
      wrapperStyle={{marginLeft:"45%"}}
      wrapperClass=""
      visible={true}
    />


    )
}
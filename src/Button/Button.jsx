import React from "react";
import "./button.css"
const Button = (props)=>{
    return(
        <button className="btn btn-outline-primary btn-m" type="button" onClick={props.onClick} {...props}>
            {props.text}
        </button>   
    )
}

export default Button
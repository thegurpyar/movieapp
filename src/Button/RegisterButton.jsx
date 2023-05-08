import React from "react";

const RegisterButton = (props)=>{
    return(
        <button className="btn btn-link btn-m" type="button" onClick={props.onClick} {...props}>
            {props.text}
        </button>   
    )
}

export default RegisterButton
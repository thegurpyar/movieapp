import axios from "axios";
import React, { useState } from "react";
import { useContext,useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import AppContext from '../AppContext/AppContext';
import { Movie } from "../Movie/Movie";
const WatchList = ({tv,movie})=>{
    const moviesList=[]
    const myContext=useContext(AppContext)
    const userId=myContext.user._id
    const tvIds=tv
    useEffect(()=>{
        for (let i =0 ; i<tvIds.length ; i++){
            axios.get("https://api.themoviedb.org/3/tv/"+tvIds[i]._id+"?api_key=bdd092358a96e1bb8e200d5276d1eb1f&language=en-US&append_to_response=videos")
            .then((res)=>{moviesList.push(res.data)})

        }
    },[])

    console.log(moviesList)
    // map movielist and return movie component
    // update movielist with existing val
    return (
        <div>
        {moviesList ?
        moviesList.map((movie)=>{
            return (
                
                <h1 key={movie.id}>{movie.genres}</h1>
            )
        })
        :alert("no")}
        </div>
    )

}

export default WatchList
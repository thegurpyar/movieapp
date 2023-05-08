import React from "react";
import { useContext } from 'react';
import AppContext from '../AppContext/AppContext';
import { useLocation } from "react-router-dom";
import {Spinner} from "../Spinner/Spinner"
import { useEffect } from "react";
import axios from "axios";
import { useState } from "react";
import "./singlemovie.css";
import ReactPlayer from 'react-player';
import PlayCircleIcon from '@mui/icons-material/PlayCircle';
import WatchLaterIcon from '@mui/icons-material/WatchLater';
import RemoveCircleIcon from '@mui/icons-material/RemoveCircle';
//title for movie and name for tv
export const SingleMovie=()=>{

    const imgUrl="https://image.tmdb.org/t/p/w500/"
    const backDropUrl="https://image.tmdb.org/t/p/w1280/"
    const trailerLink="https://www.youtube.com/watch?v="

    const location = useLocation()
    const id = location.state.id
    const type=location.state.type
    const [movie,setMovie]=useState()
    const [dp,setDp]=useState(false)

    useEffect(()=>{
      if (type==="movies"){
        axios.get("https://api.themoviedb.org/3/movie/"+id+"?api_key=bdd092358a96e1bb8e200d5276d1eb1f&language=en-US&append_to_response=videos")
        .then((res)=>{setMovie(res.data)})
        .catch((error)=>{console.log(error)});


        }
      if (type==="tv"){
        axios.get("https://api.themoviedb.org/3/tv/"+id+"?api_key=bdd092358a96e1bb8e200d5276d1eb1f&language=en-US&append_to_response=videos")
        .then((res)=>setMovie(res.data))
        .catch((error)=>{console.log(error)});



        }
      },[]
    )




    return (
      <>
      {movie ? 
        <div className="container" style={{
          color:"whitesmoke",
          height:"100%",
          width:"100%",
          zIndex:-1,
          backgroundImage:"url("+backDropUrl+movie.backdrop_path+")"}}>
        <div className="row singlemovie">
          <div className="col-lg-6 md-6">
        <img className="posterimg"src={imgUrl+movie.poster_path} alt="" /> 
        </div>
        
        <div className="col-lg-6 md-6 " >
        {type==="movies"?
        <h3>{movie.title}</h3>:<h3>{movie.name}</h3>}
        

        
        {movie.overview ? <PlayCircleIcon className="trailer-button"  onClick={()=>setDp(!dp)}/> : null}
        
        <p>{movie.genres.map(genre=>{
          if (movie.genres.indexOf(genre)<movie.genres.length-1){
            return genre.name+","

          }else{
            return genre.name
          } })}</p>
          
        <h6>{movie.tagline}</h6>
        
        {dp && movie.videos.results.length > 0 ?<div className="trailer"><ReactPlayer 
        url={trailerLink+movie.videos.results[0].key} />
        </div>:null }
        <h3>Overview</h3>
        
        <div style={{fontFamily:"Cabin', sans-serif"}}>{movie.overview}</div>
        

        </div>
        </div>
        
      
        </div>
        :<Spinner/>}
        </>
    )

}

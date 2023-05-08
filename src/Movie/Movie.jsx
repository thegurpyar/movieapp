import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./movie.css";
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
export const Movie = (props)=>{
  var[movie,tv]=[false]

  if (props.name==="movies"){
    movie=true
    
  }else if(props.name==="tv"){
    tv=true
  }

    const navigateStyles={
      fontSize:"6vh",
    }

    const navigate=useNavigate()
    const imgurl="https://image.tmdb.org/t/p/w500/"
    const [movies,setmovies]=useState([])
    useEffect(()=>{
        axios.get(props.url)
        .then((res)=>setmovies(res.data.results))  
    },[props.url])

    const[currentPage,setCurrentPage]=useState(1)
    
    // index ==176
    const url = props.tvUrl || props.url
    const idx=url.indexOf("genres=") +6

    const lastidx=url.length
    const [prevGenre,setPrevGenre]=useState(url.slice(idx,lastidx))

  
    const newPage=()=>{
      

      if(prevGenre !== url.slice(183,lastidx)){
        setCurrentPage(1)
        setPrevGenre(url.slice(183,lastidx))
        const page="&page="+currentPage
        const nextPage="&page="+(currentPage+1)
        const newUrl=props.url.replace(page,nextPage)
        if (movie){
          props.setUrl(newUrl)
          
        }else if(tv){
          props.setTvurl(newUrl)
        }
      }else{

      
      
      const page="&page="+Number(currentPage)
      
      const nextPage="&page="+Math.abs(currentPage+1)
      
      const newUrl=props.url.replace(page,nextPage)
      

      if (movie){
        setCurrentPage(currentPage+1)
        props.setUrl(newUrl)
        
      }else if(tv){
        setCurrentPage(currentPage+1)
        props.setTvurl(newUrl)
      }
    

    }}
    const prevPage=()=>{
      setCurrentPage(currentPage-1)
      const page="&page="+currentPage
      const nextPage="&page="+Math.abs(currentPage-1)

      const newUrl=props.url.replace(page,nextPage)
      if (props.name==="movies"){
        props.setUrl(newUrl)
      }else if(tv){
        props.setTvurl(newUrl)
      }
    
    }

    return (
        <div className="container moviebox" >
          <div className="row " >
            
           {movies.map(movie=><div className="col-6 col-sm-6 col-md-4 col-lg-3 " style={{marginTop:"20px"}} key={movie.id}>
            <div className="card" style={{width: "12rem"}} onClick={()=>navigate("/singlemovie",{state:{id:movie.id,type:props.name}})}>
            <img  src={imgurl+movie.poster_path} alt="Card " />
            
            <div className="overlay" style={{color:"#00A3FF"}}>
              {movie.overview === "" ? "No info available ........." : movie.overview.substring(0,145)+"..."}
              </div>
            <div className="card-body" style={{height:"70px",textAlign:"center"}}>
              <p className="card-text">
                {props.name==="movies" ? movie.title.substring(0,30) : movie.name.substring(0,30)}
                </p>
            </div>
          </div>
          </div>
          )}

          </div>
          <div className="navigatebutton">
          {currentPage<500 ?<NavigateNextIcon onClick={newPage} style={navigateStyles}/>:null }

          {currentPage}
          {currentPage>1 ?<NavigateBeforeIcon onClick={prevPage} style={navigateStyles}/>:null }
          </div>

        </div>
    )
}
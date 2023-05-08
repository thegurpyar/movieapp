import React, {useState,useEffect} from "react";
import { BrowserRouter } from "react-router-dom";
import { Routes, Route, Link } from "react-router-dom";

import { Movie } from "./Movie/Movie";
import {NavigationBar} from "./Navbar/Navbar";
import { TvComponent } from "./TvComponent/Tv";
import {SingleMovie} from "./SingleMovie/SingleMovie";

function App() {
  const[url,setUrl]=useState("https://api.themoviedb.org/3/discover/movie?api_key=bdd092358a96e1bb8e200d5276d1eb1f&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=")
  const [tvUrl,setTvurl]=useState("https://api.themoviedb.org/3/tv/popular?api_key=bdd092358a96e1bb8e200d5276d1eb1f&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=")






  return (

    <div className="App">

      <BrowserRouter>
      <Routes>

      <Route exact path ="/" element ={ 
        <><NavigationBar  url={url} setUrl={setUrl} tvurl={tvUrl} setTvurl={setTvurl} />
        
        
        <Movie url={url} setUrl={setUrl} name={"movies"} /></>     
      } />


        <Route exact path ="/tv" element ={

          <><NavigationBar  url={url} setUrl={setUrl} tvurl={tvUrl} setTvurl={setTvurl} />
          <TvComponent tvurl={tvUrl} setTvurl={setTvurl}/></>     
      } />
        

      <Route exact path="/singlemovie" element={<SingleMovie  />} />

      </Routes>
      </BrowserRouter>
    </div>

  );
}

export default App;

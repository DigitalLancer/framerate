import { useState, useEffect } from "react"
import '../style.css'
import Catalogue from "../components/Catalogue/Catalogue.jsx";
import useFetch from "../hooks/useFetch.jsx";
function TopRated() {
  const catalogue =useFetch('https://api.themoviedb.org/3/movie/top_rated');
  return(
    <>
    <div className="container">
      <h2>Top Rated Movies</h2>  
      {catalogue && <Catalogue list={catalogue.results} voteVisible={true}></Catalogue>}      
    </div>  
    </>
    )
}

export default TopRated
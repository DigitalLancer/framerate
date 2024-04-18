import React from 'react'
import useFetch from "../hooks/useFetch.jsx";
import Catalogue from "../components/Catalogue/Catalogue.jsx";
function Favorites() {
  const movies = useFetch('https://api.themoviedb.org/3/account/21124862/favorite/movies');
  return (
    <>
      <div className="container">
        <h2>Favorites</h2>
        {movies && <Catalogue list={movies.results}></Catalogue>}
      </div>
    </>
  )
}

export default Favorites

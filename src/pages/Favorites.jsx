import React from 'react'
import useFetch from "../hooks/useFetch.jsx";
import Catalogue from "../components/Catalogue/Catalogue.jsx";
import './favorites.css'
function Favorites() {
  const movies = useFetch('https://api.themoviedb.org/3/account/21124862/favorite/movies');
  return (
    <>
      <div className="container">
        <div className="container-content">
          <h2>Favorites</h2>
          {movies && <Catalogue list={movies.results} voteVisible={false}></Catalogue>}
        </div>
      </div>
    </>
  )
}

export default Favorites

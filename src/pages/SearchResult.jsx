import React from 'react'
import Catalogue from '../components/Catalogue/Catalogue'
import { useLocation } from 'react-router-dom';
import useFetch from '../hooks/useFetch';
import '../style.css'

function SearchResult() {
    const location = useLocation();
    console.log("location: ",location);
    const query = location.state.query;
    const encodedMovieName = encodeURIComponent(query);
    const data=useFetch(`https://api.themoviedb.org/3/search/movie?query=${encodedMovieName}`);
    return (
        <div className='container'>
            <h2 style={{marginLeft:'40px'}}>Search Results</h2>
            {data && <Catalogue list={data.results} voteVisible={false}></Catalogue>} 
        </div>
    )
}

export default SearchResult

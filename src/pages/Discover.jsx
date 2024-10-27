import { useState, useEffect } from "react"
import '../style.css'
import './discover.css'
import Catalogue from "../components/Catalogue/Catalogue.jsx";
import useFetch from "../hooks/useFetch.jsx";
function Discover() {
  const [genreId, setId] = useState('');
  const [score, setScore] = useState('');
  const [sort, setSort] = useState('');
  const [keywords, setKeywords] = useState('');
  const [data, setData] = useState(null);
  function handleSelectID(event) {
    const selectedOption = event.target.options[event.target.selectedIndex];
    setId(selectedOption.id);
  }
  function handleSelectScore(event) {
    const selectedOption = event.target.options[event.target.selectedIndex];
    setScore(selectedOption.id);
  }
  function handleSelectKeyword(event) {
    const selectedOption = event.target.options[event.target.selectedIndex];
    setSort(selectedOption.id);
  }
  function handleSort(event) {
    const selectedOption = event.target.options[event.target.selectedIndex];
    setSort(selectedOption.id);
  }

  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/discover/movie?` + new URLSearchParams({
      with_genres: genreId,
      'vote_average.gte': score,
      sort_by: sort,
      with_keywords:keywords
    }), {
      headers: {
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1YThmYzZjMmQ4OGZiN2I1ZDU4MDE0OTc3YWQwMDI1ZSIsInN1YiI6IjY1ZmJlODFlMGMxMjU1MDE3ZTBhNzc1YiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.qwoVansyGDWn4UeHiB3DhBwd3nkWhH23zeh1HqiQlf4',
      },
    }).then(response => response.json())
      .then(data => setData(data))
      .catch(error => console.error(error));
  }, [genreId, score, sort])

  return (
    <div className="container">
      <div className="discover">
        <h1>Movies</h1>
        <div >
          <form className="filter">
            <div className="dropdown-menu">
              <label for="Genre" className="dropdown-label">Genre: </label>
              <select className="dropdown-select" onChange={handleSelectID}>
                <option value='Action' id='28'>Action</option>
                <option value="Adventure" id='12'>Adventure</option>
                <option value="Animation" id='16'>Animation</option>
                <option value="Comedy" id='35'>Comedy</option>
                <option value="Crime" id='80'>Crime</option>,
                <option value="Documentary" id='99'>Documentary</option>
                <option value="Drama" id='18'>Drama</option>
                <option value="Family" id='10751'>Family</option>
                <option value="Fantasy" id='14'>Fantasy</option>
                <option value="History" id='34'>History</option>
                <option value="Horror" id='27'>Horror</option>
                <option value="Music" id='10402'>Music</option>
                <option value="Mystery" id='9648'>Mystery</option>
                <option value="Romance" id='10749'>Romance</option>
                <option value="Science Fiction" id='878'>Science Fiction</option>
                <option value="TV Movie" id='10770'>TV Movie</option>
                <option value="Thriller" id='53'>Thriller</option>
                <option value="War" id='10752'>War</option>
                <option value="Western" id='37'>Western</option>
              </select><br />
            </div>
            <div className="dropdown-menu">
              <label for="Score" className="dropdown-label">Minimum Score </label>
              <select className="dropdown-select" onChange={handleSelectScore}>
                <option id='9'>9</option>
                <option id='8'>8</option>
                <option id='7'>7</option>
                <option id='6'>6</option>
                <option id='5'>5</option>,
                <option id='4'>4</option>
                <option id='3'>3</option>
                <option id='2'>2</option>
                <option id='1'>1</option>
              </select><br />
            </div>
            <div className="dropdown-menu">
              <label for="Sort" className="dropdown-label">Sort By: </label>
              <select className="dropdown-select" onChange={handleSort}>
                <option value='Title' id='title.desc'>Title</option>
                <option value="Popularity" id='popularity.desc'>Popularity</option>
                <option value="Release Dat" id='primary_release_date.desc'>Release Date</option>
                <option value="Average Score" id='vote_average.desc'>Average Score</option>
                <option value="Vote Count" id='vote_count.desc'>Vote Count</option>,
              </select><br />
            </div>
          </form>
        </div>

        {data && <Catalogue list={data.results} voteVisible={false}></Catalogue>}
      </div>

    </div>
  )
}

export default Discover

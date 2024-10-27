import "./detail.css"
import { useState, useEffect } from 'react';
import whiteHeart from "../../images/heart_white_background.png"
import redHeart from "../../images/heart_red_background.png"
import watchlistIcon from "../../images/watchlist_empty.png"
import watchlistActive from "../../images/watchlist_filled.png"
import useFetch from "../../hooks/useFetch";
import AntModal from "../AntModal/AntModal";
function DetailBanner(props) {

  const [isFavorite, setFavorite] = useState(false);
  const [isWatchlist, setWatchlist] = useState(false);

  const movie = props.movie;
  const credits = props.credits;
  const accountState = props.accountState;
  const director = props.credits.crew.filter((person) => person.job === "Director")[0];
  const stars = credits.cast.slice(0, 6);

  let starString = "";
  let genreString = "";
  for (let x of stars) {
    starString += x.name + ", "
  }
  for (let x of movie.genres) {
    genreString += x.name + ", "
  }
  useEffect(() => {
    if (accountState?.favorite) {
      setFavorite(true);
    }
    if (accountState?.watchlist) {
      setWatchlist(true);
    }

  }, [])



  const handleFavorite = () => {
    if (isFavorite == false) {
      setFavorite(true);
      //props.setMyState(true);
      props.setMyState(prevState => ({
        // object that we want to update
        ...prevState,    // keep all other key-value pairs
        favorite: true      // update the value of specific key

      }))
      fetch("https://api.themoviedb.org/3/account/21124862/favorite", {
        headers: {
          Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1YThmYzZjMmQ4OGZiN2I1ZDU4MDE0OTc3YWQwMDI1ZSIsInN1YiI6IjY1ZmJlODFlMGMxMjU1MDE3ZTBhNzc1YiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.qwoVansyGDWn4UeHiB3DhBwd3nkWhH23zeh1HqiQlf4',
          'Content-Type': 'application/json'
        },
        method: 'POST',
        body: JSON.stringify({
          media_type: "movie",
          media_id: movie.id,
          favorite: true
        })
      }).then(response => response.json())
        .then(data => console.log(data))
        .catch(error => console.error(error));
      window.alert("Movie added to favorites");
    }
    else {
      setFavorite(false);
      //props.setMyState(false);
      props.setMyState(prevState => ({
        // object that we want to update
        ...prevState,    // keep all other key-value pairs
        favorite: false      // update the value of specific key

      }))
      fetch("https://api.themoviedb.org/3/account/21124862/favorite", {
        headers: {
          Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1YThmYzZjMmQ4OGZiN2I1ZDU4MDE0OTc3YWQwMDI1ZSIsInN1YiI6IjY1ZmJlODFlMGMxMjU1MDE3ZTBhNzc1YiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.qwoVansyGDWn4UeHiB3DhBwd3nkWhH23zeh1HqiQlf4',
          'Content-Type': 'application/json'
        },
        method: 'POST',
        body: JSON.stringify({
          media_type: "movie",
          media_id: movie.id,
          favorite: false
        })
      }).then(response => response.json())
        .then(data => console.log(data))
        .catch(error => console.error(error));
      window.alert("Movie removed from favorites");
    }
  }

  const handleWatchlist = () => {

    if (isWatchlist == false) {
      setWatchlist(true);
      //props.setMyState(true);
      props.setMyState(prevState => ({
        // object that we want to update
        ...prevState,    // keep all other key-value pairs
        watchlist: true      // update the value of specific key

      }))
      fetch("https://api.themoviedb.org/3/account/21124862/watchlist", {
        headers: {
          Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1YThmYzZjMmQ4OGZiN2I1ZDU4MDE0OTc3YWQwMDI1ZSIsInN1YiI6IjY1ZmJlODFlMGMxMjU1MDE3ZTBhNzc1YiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.qwoVansyGDWn4UeHiB3DhBwd3nkWhH23zeh1HqiQlf4',
          'Content-Type': 'application/json'
        },
        method: 'POST',
        body: JSON.stringify({
          media_type: "movie",
          media_id: movie.id,
          watchlist: true
        })
      }).then(response => response.json())
        .then(data => console.log(data))
        .catch(error => console.error(error));
      window.alert("Movie added to watchlist");
    }
    else {
      setWatchlist(false);
      //props.setMyState(false);
      props.setMyState(prevState => ({
        // object that we want to update
        ...prevState,    // keep all other key-value pairs
        watchlist: false      // update the value of specific key

      }))
      fetch("https://api.themoviedb.org/3/account/21124862/favorite", {
        headers: {
          Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1YThmYzZjMmQ4OGZiN2I1ZDU4MDE0OTc3YWQwMDI1ZSIsInN1YiI6IjY1ZmJlODFlMGMxMjU1MDE3ZTBhNzc1YiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.qwoVansyGDWn4UeHiB3DhBwd3nkWhH23zeh1HqiQlf4',
          'Content-Type': 'application/json'
        },
        method: 'POST',
        body: JSON.stringify({
          media_type: "movie",
          media_id: movie.id,
          watchlist: false
        })
      }).then(response => response.json())
        .then(data => console.log(data))
        .catch(error => console.error(error));
      window.alert("Movie removed from watchlist");
    }

  }


  return (
    <div className="banner">
      <img src={"https://image.tmdb.org/t/p/original" + movie.backdrop_path} alt="" className='banner-img-detail' />
      <div className="info">
        <div>
          <img src={"https://image.tmdb.org/t/p/w200" + movie.poster_path} className="detail-poster" alt="" />
          <p><span style={{ fontWeight: 'bold' }}>Release Date:</span> {movie.release_date}</p>
        </div>
        <div className="info-text">
          <h1>{movie.title}</h1>
          <div className="buttons-row">
            <p><span className="score">{`${movie.vote_average.toFixed(1)}`}</span> <span style={{ fontWeight: 'bold' }} className="score-text">Score </span></p>
            <button className='heart' onClick={() => {
              handleFavorite();
            }}>
              {isFavorite ? <img src={redHeart} /> : <img src={whiteHeart} />}
            </button>
            <button className='heart' onClick={() => {
              handleWatchlist();
            }}>
              {isWatchlist ? <img src={watchlistActive} /> : <img src={watchlistIcon} />}
            </button>
            <AntModal movie={movie} />
          </div>
          <p>{genreString.slice(0, -2)}</p>
          <p><span style={{ fontWeight: "bold" }}>Overview:  </span> {movie.overview}</p>
          <p><span style={{ fontWeight: "bold" }}>Director:</span> {director.name}</p>
          <p><span style={{ fontWeight: "bold" }}>Top Cast:</span> {starString.slice(0, -2)}</p>
        </div>
      </div>
    </div>

  )
}

export default DetailBanner

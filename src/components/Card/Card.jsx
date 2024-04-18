import './card.css'
import { useState } from 'react';
import useFetch from '../../hooks/useFetch.jsx';
import {useNavigate } from 'react-router-dom';
import redHeart from "../../images/heart_red.png"
import blackHeart from "../../images/heart_black.png"
function Card(props) {
    const movie=props.item;
    const navigate = useNavigate();
    const [isFavorite, setFavorite] = useState(false)
    //const movieState=useFetch(`https://api.themoviedb.org/3/movie/${movie.id}/account_states`);
    const handleFavorite = (movie) => {
        if (isFavorite === false) {
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
            window.alert("Added to favorites");
        }
        else {
            fetch("https://api.themoviedb.org/3/account/21124862/favorite", {
                headers: {
                    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1YThmYzZjMmQ4OGZiN2I1ZDU4MDE0OTc3YWQwMDI1ZSIsInN1YiI6IjY1ZmJlODFlMGMxMjU1MDE3ZTBhNzc1YiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.qwoVansyGDWn4UeHiB3DhBwd3nkWhH23zeh1HqiQlf4',
                    'Content-Type': 'application/json'
                },
                method: 'POST',
                body: JSON.stringify({media_type: "movie",media_id: movie.id,favorite: false})
            }).then(response => response.json())
            .then(data => console.log(data))
            .catch(error => console.error(error));
            window.alert("Removed from favorites");
        }
    }

    if (props.isMovie) {
        
        return (
            <>
                <div className='card'>
                    <button className='btn-card' onClick={() => navigate(`/movie/${movie.id}`)}>
                        <img src={"https://image.tmdb.org/t/p/w500" + movie.poster_path} alt="" className='card-image' />
                    </button>
                    <div className='card-info'>
                        <h3>{movie.title}</h3>
                        <button className='favorite-btn' onClick={() => {
                            setFavorite(!isFavorite);
                            handleFavorite(movie);
                            
                        }}>
                            {isFavorite ? <img src={redHeart} /> : <img src={blackHeart} />}
                        </button>
                    </div>
                    {props.voteVisible && <h3>{movie.vote_average.toFixed(1)}</h3>}
                </div>
            </>
        )
    }

    else {
        const person = props.item;
        let imgUrl;
        if (person.profile_path) {
            imgUrl = "https://image.tmdb.org/t/p/w200" + person.profile_path
        }
        else {
            imgUrl = "https://mystiquemedicalspa.com/wp-content/uploads/2014/11/bigstock-159411362-Copy-1.jpg"
        }
        return (
            <>
                <div className='card-person'>
                    <img src={imgUrl} alt="" className="card-image" />
                    <p>{person.name}</p>
                    <p className="role">{person.character}</p>
                </div>
            </>
        )
    }
}
export default Card
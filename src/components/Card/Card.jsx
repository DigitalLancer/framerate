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

    if (props.isMovie) {
        
        return (
            <>
                <div className='card'>
                    <button className='btn-card' onClick={() => navigate(`/movie/${movie.id}`)}>
                        <img src={"https://image.tmdb.org/t/p/w500" + movie.poster_path} alt="" className='card-image' />
                    </button>
                    <div className='card-info'>
                        <h3>{movie.title}</h3>
                    </div>
                    {props.showVote && <h3>{movie.vote_average.toFixed(1)}</h3>}
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
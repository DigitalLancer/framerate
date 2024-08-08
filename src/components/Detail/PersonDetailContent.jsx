import React from 'react'
import { useNavigate } from 'react-router-dom';
function PersonDetailContent(props) {
    const movies = props.data.cast;
    const navigate = useNavigate();
    movies.sort(function (a, b) {
        let dateA = new Date(a.release_date);
        let dateB = new Date(b.release_date);
        return dateA - dateB;
    });
    movies.reverse();
    return (
        <div className='list'>
            <ul>
                {movies.map((movie) => (
                    <li>
                        <button onClick={() => navigate(`/movie/${movie.id}`)}>
                            <p>{movie.title} ({movie.release_date})</p>
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default PersonDetailContent

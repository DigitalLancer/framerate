import './carousel.css'
import { useEffect } from 'react';
import Card from "../Card/Card.jsx"
import '../../style.css'
function Carousel(props) {
    const catalogue = props.list;
    //console.log(catalogue[3].title);
    if (props.type === "media") {
        return (
            <div className='side-scroll'>
                {catalogue.backdrops.map((image) =>
                    <img src={`https://image.tmdb.org/t/p/w300/${image.file_path}}`} alt="movie media" className='media-img'/>
                )}
            </div>
        );
    }
    else {
        return (
            <>
                <div className='side-scroll'>
                    {catalogue.map((movie) => (
                        <Card item={movie} voteVisible={false} key={movie.id} isMovie={true} />
                    ))}
                </div>
            </>
        );
    }

}

export default Carousel

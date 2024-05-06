import React from 'react';
import { useNavigate } from 'react-router-dom';
import './antcarousel.css';
import { Carousel } from 'antd';
const AntCarousel = (props) => {
    const movies = props.list;
    const navigate = useNavigate();
    const onChange = (currentSlide) => {
        console.log(currentSlide);
    };
    return (
        <Carousel autoplay className='ant-carousel'>
            {movies.map((movie) => (
                <div className='poster'>
                    <div className='text'>
                        <p>{movie.title}</p>
                        <p style={{fontSize: '2.5em' }}>Now Playing</p>
                        <button className="btn-poster" onClick={() => navigate(`/movie/${movie.id}`)}>Details</button>
                    </div>
                    <img src={"https://image.tmdb.org/t/p/original" + movie.backdrop_path} alt="" className='banner-img' />
                </div>
            ))}
        </Carousel>
    );
};
export default AntCarousel;
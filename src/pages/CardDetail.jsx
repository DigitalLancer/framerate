import { useParams } from "react-router-dom";
import DetailBanner from "../components/Detail/DetailBanner";
import useFetch from "../hooks/useFetch";
import DetailContent from "../components/Detail/DetailContent";
import '../style.css'
import { useState } from 'react';
import StarRating from "../components/StarRating/StarRating";
import AntModal from "../components/AntModal/AntModal";

function CardDetail(){
    const param=useParams();
    const [myState, setMyState] = useState(null);
    const [rating, setRating] = useState(0)
    const {id}=param;
    const movieData = useFetch(`https://api.themoviedb.org/3/movie/${id}?api_key=5a8fc6c2d88fb7b5d58014977ad0025e`);
    const creditsData= useFetch(`https://api.themoviedb.org/3/movie/${id}/credits?api_key=5a8fc6c2d88fb7b5d58014977ad0025e`);
    const accountState = useFetch(`https://api.themoviedb.org/3/movie/${id}/account_states`);
    const providersData = useFetch(`https://api.themoviedb.org/3/movie/${id}/watch/providers`);
    
    console.log("account state 1: ",accountState);
    return(
        <>
            <div className="container">
                <div>
                    {movieData && creditsData && accountState && <DetailBanner movie={movieData} credits={creditsData} accountState={accountState} setMyState={setMyState} compType="movie"/>}
                </div>
                <div className="cast-info">
                    {creditsData && movieData && providersData && <DetailContent credits={creditsData} movie={movieData} providers={providersData}/>}
                </div>
            </div>
        </>        
    )
}
export default CardDetail;
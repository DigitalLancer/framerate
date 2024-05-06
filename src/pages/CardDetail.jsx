import { useParams } from "react-router-dom";
import DetailBanner from "../components/Detail/DetailBanner";
import useFetch from "../hooks/useFetch";
import DetailContent from "../components/Detail/DetailContent";
import '../style.css'
import { useState } from 'react';

function CardDetail(){
    const param=useParams();
    const [myState, setMyState] = useState(null);
    const {id}=param;
    const movieData = useFetch(`https://api.themoviedb.org/3/movie/${id}?api_key=5a8fc6c2d88fb7b5d58014977ad0025e`);
    const creditsData= useFetch(`https://api.themoviedb.org/3/movie/${id}/credits?api_key=5a8fc6c2d88fb7b5d58014977ad0025e`);
    const accountState = useFetch(`https://api.themoviedb.org/3/movie/${id}/account_states`);
    
    
    console.log("account state 1: ",accountState);
    return(
        <>
            <div className="container">
                <div>
                    {movieData && creditsData && accountState && <DetailBanner movie={movieData} credits={creditsData} accountState={accountState} setMyState={setMyState}/>}
                </div>
                <div className="cast-info">
                    {creditsData && movieData && <DetailContent credits={creditsData} movie={movieData}/>}
                </div>
            </div>
        </>        
    )
}
export default CardDetail;
import { useParams } from "react-router-dom";
import DetailBanner from "../components/Detail/DetailBanner";
import useFetch from "../hooks/useFetch";
import DetailContent from "../components/Detail/DetailContent";
import '../style.css'

function CardDetail(){
    const param=useParams();
    const {id}=param;
    const movieData = useFetch(`https://api.themoviedb.org/3/movie/${id}?api_key=5a8fc6c2d88fb7b5d58014977ad0025e`);
    const creditsData= useFetch(`https://api.themoviedb.org/3/movie/${id}/credits?api_key=5a8fc6c2d88fb7b5d58014977ad0025e`);
    const accountState = useFetch(`https://api.themoviedb.org/3/movie/${id}/account_states`);
    const providersData = useFetch(`https://api.themoviedb.org/3/movie/${id}/watch/providers`);

    return(
        <>
            <div className="container">
                <div>
                    {movieData && creditsData && accountState && <DetailBanner movie={movieData} credits={creditsData} accountState={accountState}  compType="movie"/>}
                </div>
                <div className="cast-info">
                    {creditsData && movieData && providersData && <DetailContent credits={creditsData} movie={movieData} providers={providersData}/>}
                </div>
            </div>
        </>        
    )
}
export default CardDetail;
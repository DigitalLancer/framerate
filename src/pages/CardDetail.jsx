import { useParams } from "react-router-dom";
import DetailBanner from "../components/DetailBanner";
import useFetch from "../hooks/useFetch";
import DetailContent from "../components/DetailContent";
import '../style.css'
function CardDetail(){
    const param=useParams();
    const {id}=param;
    const movieData = useFetch(`https://api.themoviedb.org/3/movie/${id}?api_key=5a8fc6c2d88fb7b5d58014977ad0025e`);
    const creditsData= useFetch(`https://api.themoviedb.org/3/movie/${id}/credits?api_key=5a8fc6c2d88fb7b5d58014977ad0025e`);
    return(
        <>
            <div className="container">
                <div>
                    {movieData && creditsData && <DetailBanner movie={movieData} credits={creditsData}/>}
                </div>
                <div className="cast-info">
                    {creditsData && <DetailContent credits={creditsData}/>}
                </div>
            </div>
        </>        
    )
}
export default CardDetail;
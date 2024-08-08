import useFetch from "../../hooks/useFetch.jsx";
import Card from "../Card/Card.jsx";
import Carousel from "../Carousel/Carousel.jsx";
import Reviews from "../Reviews/Reviews.jsx";
import Keywords from "./Keywords.jsx";
import "./detail.css"
function DetailContent(props) {
    
    const providers = props.providers.results;

    let trDetected;
    let trPlatforms;

    const movie = props.movie;
    const countries = movie.production_countries;
    const companies = movie.production_companies;
    const languages = movie.spoken_languages;
    let countries_string = "";
    let companies_string = "";
    let languages_string = "";

    if (providers.hasOwnProperty("TR")) {
        trDetected = true;
        trPlatforms = providers.TR
        console.log("TR Platforms", providers.TR);
    }
    else {
        trDetected = false;
    }
    const cast = props.credits;
    let castTrimmed;
    if (cast.cast.length > 24) {
        castTrimmed = cast.cast.slice(0, 24);
    }
    else {
        castTrimmed = cast.cast;
    }

    countries.forEach(element => {
        countries_string += element.name + ", ";
    });
    companies.forEach(element => {
        companies_string += element.name + ", ";
    });
    languages.forEach(element => {
        languages_string += element.name + ", ";
    });
    const numberWithCommas = (number) => {
        return number.toLocaleString();
    };

    const recommendations = useFetch(`https://api.themoviedb.org/3/movie/${movie.id}/recommendations`);
    const mediaData = useFetch(`https://api.themoviedb.org/3/movie/${movie.id}/images`);
    const reviewsData = useFetch(`https://api.themoviedb.org/3/movie/${movie.id}/reviews`);
    const keywordsData = useFetch(`https://api.themoviedb.org/3/movie/${movie.id}/keywords`);

    return (
        <>
            <div className="detail-content">
                <div className="left-page">
                    <h2 className="cast-title">Cast</h2>
                    <div className="cast">
                        {castTrimmed.map((person) => (
                            <Card item={person} key={person.id} isMovie={false} />
                        ))}
                    </div>
                </div>
                <div className="production">
                    <h2 className="cast-title">Production Details</h2>
                    <p><span style={{ fontWeight: 'bold' }}>Original Title: </span>{movie.original_title}</p>
                    <p><span style={{ fontWeight: 'bold' }}>Countries of Origin: </span>{countries_string.slice(0, -2)}</p>
                    <p><span style={{ fontWeight: 'bold' }}>Production Compaines: </span>{companies_string.slice(0, -2)}</p>
                    <p><span style={{ fontWeight: 'bold' }}>Budget: </span>{`$${numberWithCommas(movie.budget)}`}</p>
                    <p><span style={{ fontWeight: 'bold' }}>Runtime: </span>{`${movie.runtime} minutes`}</p>
                    <p><span style={{ fontWeight: 'bold' }}>Languages: </span>{languages_string.slice(0, -2)}</p>
                    <h2>Keywords</h2>
                    {keywordsData && <Keywords data={keywordsData} />}
                    <div className="streaming">
                        <h2>Watch</h2>
                        {trDetected ? <div className="platforms">
                            {trPlatforms.buy && <div className="buy">
                                <p style={{ fontWeight: "bold", fontSize: '1.3em', margin: '0' }}>Buy</p>
                                {trPlatforms.buy.map((provider) => (
                                    <div>
                                        <div className="provider">
                                            <img src={`https://image.tmdb.org/t/p/original${provider.logo_path}`} alt="logo" className="platform-logo" />
                                            <p>{provider.provider_name}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>}
                            {trPlatforms.rent && <div className="buy">
                                <p style={{ fontWeight: "bold", fontSize: '1.3em', margin: '0' }}>Rent</p>
                                {trPlatforms.rent.map((provider) => (
                                    <div>
                                        <div className="provider">
                                            <img src={`https://image.tmdb.org/t/p/original${provider.logo_path}`} alt="logo" className="platform-logo" />
                                            <p>{provider.provider_name}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>}
                            {trPlatforms.flatrate && <div className="buy">
                                <p style={{ fontWeight: "bold", fontSize: '1.3em', margin: '0' }}>Subscription</p>
                                {trPlatforms.flatrate.map((provider) => (
                                    <div>
                                        <div className="provider">
                                            <img src={`https://image.tmdb.org/t/p/original${provider.logo_path}`} alt="logo" className="platform-logo" />
                                            <p>{provider.provider_name}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>}

                        </div>
                            : <p>No service in Turkey</p>}

                    </div>
                </div>
            </div>
            <hr style={{ margin: '40px 40px' }} />
            <div className="reviews">
                <h2>Reviews</h2>
                {reviewsData && <Reviews reviews={reviewsData} />}
            </div>
            <hr style={{ margin: '40px 40px' }} />
            <div className="media">
                <h2>Media</h2>
                {mediaData && <Carousel list={mediaData} type="media" />}
            </div>
            <hr style={{ margin: '40px 40px' }} />
            <div className="recommendations">
                <h2>Recommendations</h2>
                {recommendations && <Carousel list={recommendations.results}></Carousel>}
            </div>

        </>
    )
}

export default DetailContent

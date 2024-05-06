import useFetch from "../../hooks/useFetch.jsx";
import Card from "../Card/Card.jsx";
import Carousel from "../Carousel/Carousel.jsx";
import "./detail.css"
function DetailContent(props) {
    const cast = props.credits;
    let castTrimmed;
    const movie = props.movie;
    const countries = movie.production_countries;
    const companies = movie.production_companies;
    const languages = movie.spoken_languages;
    let countries_string = "";
    let companies_string = "";
    let languages_string = "";
    //console.log('Cast lenght: ',cast)

    if(cast.cast.length>18){
        castTrimmed=cast.cast.slice(0,18);
    }
    else{
        castTrimmed=cast.cast;
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
                </div>
            </div>
            <hr style={{margin:'40px 40px'}}/>
            <div className="recommendations">
                <h2 style={{padding:'0'}}>Recommendations</h2>
                {recommendations && <Carousel list={recommendations.results}></Carousel>}
            </div>
        </>


    )
}

export default DetailContent

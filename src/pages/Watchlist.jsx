import useFetch from "../hooks/useFetch.jsx";
import Catalogue from "../components/Catalogue/Catalogue.jsx";
function Watchlist() {
    const movies = useFetch('https://api.themoviedb.org/3/account/21124862/watchlist/movies');
    return (
        <>
            <div className="container">
                <h2>Watchlist</h2>
                {movies && <Catalogue list={movies.results} voteVisible={false}></Catalogue>}
            </div>
        </>
    )
}

export default Watchlist

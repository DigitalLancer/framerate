import '../style.css'
import Carousel from "../components/Carousel/Carousel.jsx";
import useFetch from '../hooks/useFetch.jsx';
import AntCarousel from '../components/AntCarousel/AntCarousel.jsx';
function Home() {
  const session_id = "5da76ef538e1a1cf3286f7d0a8acdd8bca8d9e69";
  const accound_id = 21124862;
  const popular = useFetch('https://api.themoviedb.org/3/movie/popular');
  const upcoming = useFetch('https://api.themoviedb.org/3/movie/upcoming');
  const favorites = useFetch('https://api.themoviedb.org/3/account/21124862/favorite/movies');
  const nowPlaying = useFetch('https://api.themoviedb.org/3/movie/now_playing')
  return (
    <>
      <div className="container">
        <div className="home">
          {nowPlaying && <AntCarousel list={nowPlaying.results}></AntCarousel>}
          <h2>Popular</h2>
          {popular && <Carousel list={popular.results}></Carousel>}
          <h2>Upcoming</h2>
          {upcoming && <Carousel list={upcoming.results}></Carousel>}
        </div>
      </div>
    </>
  );
}

export default Home
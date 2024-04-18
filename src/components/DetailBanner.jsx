function DetailBanner(props) {
    const movie=props.movie;
    const credits=props.credits;
    const director=props.credits.crew.filter((person)=>person.job==="Director")[0];
    const stars=credits.cast.slice(0,6);
    let starString = "";
    let genreString="";
    for(let x of stars ){
      starString +=x.name+", "
    }
    for(let x of movie.genres ){
      genreString += x.name+", "
    }
  return (
    <div className="banner">
      <img src={"https://image.tmdb.org/t/p/original"+movie.backdrop_path} alt="" className='banner-img-detail' />
      <div className="info">
          <div>
              <img src={"https://image.tmdb.org/t/p/w200"+movie.poster_path} className="detail-poster" alt="" /> 
              <p>{movie.release_date}</p>
          </div>
          <div className="info-text">
              <h1>{movie.title}</h1>
              <p>User Score: <span>{`${movie.vote_average.toFixed(1)}`}</span></p>
              <p>{genreString.slice(0,-2)}</p>
              <p><span style={{fontWeight:"bold"}}>Overview:  </span> {movie.overview}</p>
              <p><span style={{fontWeight:"bold"}}>Director:</span> {director.name}</p>
              <p><span style={{fontWeight:"bold"}}>Top Cast:</span> {starString.slice(0,-2)}</p>            
          </div>
      </div>  
    </div>

  )
}

export default DetailBanner

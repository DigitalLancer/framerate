import './carousel.css'
import Card from "../Card/Card.jsx"
import '../../style.css'
function Carousel(props){
    const catalogue=props.list;
    //console.log(catalogue[3].title);
    return(
        <>
        <div className='side-scroll'>
            {catalogue.map((movie)=>(
                <Card item={movie} voteVisible={false} key={movie.id} isMovie={true}/>
            ))}
        </div>
        </>
    );  
}

export default Carousel

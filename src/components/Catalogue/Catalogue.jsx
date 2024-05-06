import Card from "../Card/Card.jsx"
import './catalogue.css'
import '../../style.css'
function Catalogue(props){
    const catalogue=props.list;
    return(
        <>
        <div className='catalogue'>
            {catalogue.map((movie)=>(
                <>
                <Card item={movie} key={movie.id} isMovie={true} showVote={props.voteVisible}/>
                </>
            ))}
        </div>
        </>
    );


}
export default Catalogue
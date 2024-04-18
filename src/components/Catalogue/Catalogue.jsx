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
                <Card item={movie} voteVisible={true} key={movie.id} isMovie={true}/>
                </>
            ))}
        </div>
        </>
    );


}
export default Catalogue
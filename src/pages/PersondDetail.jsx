import PersonDetailBanner from '../components/Detail/PersonDetailBanner';
import PersonDetailContent from '../components/Detail/PersonDetailContent';
import useFetch from '../hooks/useFetch'
import { useParams } from "react-router-dom";

function PersondDetail() {
    const param = useParams();
    const { id } = param;
    const person = useFetch(`https://api.themoviedb.org/3/person/${id}`);
    const movies = useFetch(`https://api.themoviedb.org/3/person/${id}/movie_credits`);
    return (
        <div className='container'>
            <div style={{ padding: '40px' }}>
                {person && <PersonDetailBanner data={person} />}
                <hr style={{margin:'40px 0px'}} />
                <h2 style={{padding:'0'}}>Credits</h2>
                {movies && <PersonDetailContent data={movies} />}
            </div>


        </div>
    )
}

export default PersondDetail

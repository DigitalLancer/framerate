import Card from "./Card/Card.jsx";
function DetailContent(props) {
    const cast = props.credits;
    return (
        <div className="cast">
            {cast.cast.map((person) => (
                <Card item={person} key={person.id} isMovie={false}/>
            ))}
        </div>
    )
}

export default DetailContent

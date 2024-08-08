import React from 'react'
import './reviews.css'
function Reviews(props) {
    const reviews = props.reviews.results;
    return (
        <div>
            {reviews.map((review) =>
                <div className='review'>
                    <h3>{review.author}<span></span></h3>
                    <h3>{review.author_details.rating}<span style={{color:'#DAA520'}}> ★ </span></h3>
                    <p>{review.content}</p>
                    <p style={{fontSize:'0.9em'}}>{review.created_at}</p>
                </div>
            )}
        </div>
    )
}
export default Reviews

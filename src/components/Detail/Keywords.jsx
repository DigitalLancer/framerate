import React from 'react'
import './detail.css'
function Keywords(props) {
    const keywords = props.data.keywords;
    return (
        <div className='keyword-list'>
            {keywords.map((keyword) => (
               <p className='keyword'>{keyword.name}</p>
            ))}
        </div>
    )
}

export default Keywords

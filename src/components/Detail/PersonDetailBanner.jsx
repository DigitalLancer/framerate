import React from 'react'

function PersonDetailBanner(props) {
    const person = props.data;
    return (
        <div>
            <div className='info-person'>
                <div>
                    <img src={"https://image.tmdb.org/t/p/w300" + person.profile_path} className='profile-picture' />
                </div>
                <div style={{marginLeft:'20px'}}>
                    <h1 style={{margin:'0px 0px 20px 0px'}}>{person.name}</h1>
                    <p><span style={{ fontWeight: "bold" }}>Birthday:  </span> {person.birthday}</p>
                    <p><span style={{ fontWeight: "bold" }}>Place of birth:  </span> {person.place_of_birth}</p>
                    <h2 style={{padding:'0'}}>Biography</h2>
                    <p>{person.biography}</p>
                </div>
            </div>

        </div>
    )
}

export default PersonDetailBanner

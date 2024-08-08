function StarRating({ rating, setRating }) {
    return (
      <div>
        {[1, 2, 3, 4, 5,6,7,8,9,10].map((star) => {
          return (  
            <span
              className='start'
              style={{cursor: 'pointer', color: rating >= star ? 'gold' : 'gray', fontSize: `35px`,}}
              onClick={() => {
                setRating(star)
              }}
            >
              {' '}
              ★{' '}
            </span>
          )
        })}
      </div>
    )
  }
  export default StarRating;
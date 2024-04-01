import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react'

function StarsRating() {
  const [rating, setRating] = useState(null)
  const [hover, setHover] = useState(null)

  return (
    <div>
      {[...Array(5)].map((star, i) => {
        const ratingValue = i + 1
        return (
          <label key={i}>
            <input
              type="radio"
              name="star"
              value={ratingValue}
              className="hidden"
              onClick={() => setRating(ratingValue)}
            />
            <FontAwesomeIcon
              icon={faStar}
              className="hover:cursor-pointer"
              onMouseOver={() => setHover(ratingValue)}
              onMouseOut={() => setHover(null)}
              color={ratingValue <= (hover || rating) ? '#FBBF24' : '#d1d5db'}
            />
          </label>
        )
      })}
    </div>
  )
}

export default StarsRating

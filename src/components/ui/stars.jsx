import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'

function Stars({ rating }) {
  const arr = [...Array(Math.floor(rating))]
  return [
    <div>
      {arr.map((star, i) => {
        return (
          <span key={i}>
            <FontAwesomeIcon icon={faStar} className="text-[#FBBF24]" />
          </span>
        )
      })}
    </div>
  ]
}

export default Stars

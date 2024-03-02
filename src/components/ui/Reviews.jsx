import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'
import { faCommentDots } from '@fortawesome/free-regular-svg-icons'
import React from 'react'

const reviews = [
  {
    author: {
      firstName: 'Ray',
      lastName: 'Garreth',
      picture: 'https://randomuser.me/api/portraits/men/47.jpg'
    },
    date: '2 Feb 2024',
    rating: 5,
    content:
      'Loved this charming Airbnb in Koh Phangan. Beautifully nestled in nature, it offers peace and stunning views. Comfortable, well-equipped, and close to local attractions. Host was welcoming and helpful. A tranquil retreat with a lovely pool and deck. Note: limited Wi-Fi and steep access. Highly recommend!'
  },
  {
    author: {
      firstName: 'Sandro',
      lastName: 'Berger',
      picture: 'https://randomuser.me/api/portraits/men/84.jpg'
    },
    date: '5 Jan 2024',
    rating: 4,
    content:
      "On the positive side, the location was fantastic – just a short walk to the beach and local eateries. The view from the balcony was breathtaking, especially during sunsets. However, the house itself left a bit to be desired. The decor was charming with a beach theme, but the cleanliness wasn't up to par; we found dust in several corners, and the bathroom fixtures were somewhat dated. The amenities listed were all present, but the Wi-Fi was frustratingly slow and unreliable. Additionally, while the host was polite, their response time was slower than expected, complicating the check-in process more than necessary. It's a decent place if you're not overly concerned about the finer details and are more focused on the location."
  }
]

export default function Reviews() {
  return (
    <div className="container mx-auto gap-2">
      <div className="flex gap-2 items-center">
        <div className="inline">
          <FontAwesomeIcon icon={faCommentDots} className="text-[#94A3B8]" />
          <span className="text-lg font-bold"> 34 Reviews</span>
          <div>
            <span className="text-sm">Average Rating: 2.3 </span>

            <FontAwesomeIcon icon={faStar} className="text-[#FBBF24]" />
          </div>
        </div>
      </div>
      <div className="space-y-3">
        {reviews.map((review, i) => (
          <React.Fragment key={i}>
            <Review review={review} />
          </React.Fragment>
        ))}
      </div>
    </div>
  )
}

function Review({ review }) {
  const { author, content, rating, date } = review
  return (
    <div className="border border-solid border-[#E5E7EB] rounded-lg p-3 m-2 text-sm">
      {/* Author Box */}
      <div className="flex gap-2 items-center">
        <div className="w-12 h-12 border-2 border-solid border-white rounded-full">
          <img className="rounded-full" src={author.picture} alt="reviewer" />
        </div>
        <div>
          <div className="text-[#94A3B8] text-sm">{date}</div>
          <div className="text-lg">
            {author.firstName} {author.lastName}
          </div>
        </div>
      </div>
      <div className="flex gap-2 my-2">
        <Stars rating={rating} />
        <span>{rating}</span>
      </div>
      <div className="flex">
        <p>{content}</p>
      </div>
    </div>
  )
}

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

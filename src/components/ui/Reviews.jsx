import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'
import { faCommentDots } from '@fortawesome/free-regular-svg-icons'
import React, { useState, useEffect } from 'react'
import Stars from './stars'
import axios from 'axios'

export default function Reviews({ house }) {
  const [reviews, setReviews] = useState([])
  const { house_id, rating, review_count } = house

  useEffect(() => {
    const getReviews = async () => {
      const url =
        `${process.env.REACT_APP_API_URL_PATH}/reviews?house_id=` + house_id
      const { data } = await axios.get(url)
      Array.isArray(data) && setReviews(data)
    }
    getReviews()
  }, [house_id])

  return (
    <div className="container mx-auto gap-2">
      <div className="flex gap-2 items-center">
        <div className="inline">
          <FontAwesomeIcon icon={faCommentDots} className="text-[#94A3B8]" />
          <span className="text-lg font-bold"> {review_count} Reviews</span>
          <div>
            <span className="text-sm">Average Rating: {rating} </span>

            <FontAwesomeIcon icon={faStar} className="text-[#FBBF24]" />
          </div>
        </div>
      </div>
      <div className="space-y-3">
        {Array.isArray(reviews) &&
          reviews?.map((review, i) => <Review key={i} review={review} />)}
      </div>
    </div>
  )
}

function Review({ review }) {
  const { author, review_text, rating, review_date } = review
  return (
    <div className="border border-solid border-[#E5E7EB] rounded-lg p-3 m-2 text-sm">
      {/* Author Box */}
      <div className="flex gap-2 items-center">
        <div className="w-12 h-12 border-2 border-solid border-white rounded-full">
          <img
            className="rounded-full"
            src={author.profile_pic}
            alt="reviewer"
          />
        </div>
        <div>
          <div className="text-[#94A3B8] text-sm">{review_date}</div>
          <div className="text-lg">
            {author.first_name} {author.last_name}
          </div>
        </div>
      </div>
      <div className="flex gap-2 my-2">
        <Stars rating={rating} />
        <span>{rating}</span>
      </div>
      <div className="flex">
        <p>{review_text}</p>
      </div>
    </div>
  )
}

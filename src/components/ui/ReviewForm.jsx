import { useState } from 'react'
import StarsRating from './StarsRating'
import axios from 'axios'

axios.defaults.withCredentials = true

function ReviewForm(props) {
  // UseState Variables
  //   const [isAllowedToReview, SetIsAllowedToReview] = useState(null)
  const [error, setError] = useState(undefined)
  const [isReviewSubmitted, SetIsReviewSubmitted] = useState(false)
  const { house_id } = props

  const createReview = async (e) => {
    e.preventDefault()

    // Check User is loggedIn and allowed to review
    const isLoggedIn = localStorage.getItem('isLoggedIn')
    if (!isLoggedIn) {
      setError('Please log in to submit a review')
    }

    // Get data from form and create formObj
    const form = new FormData(e.target)
    let formObject = Object.fromEntries(form.entries())

    const review = {
      house_id: house_id,
      rating: formObject.rating,
      review_text: formObject.message
    }

    // API call
    try {
      const { data } = await axios.post(
        `${process.env.REACT_APP_API_URL_PATH}/reviews`,
        review
      )
      console.log('Review: ', review)
      console.log('Response Data: ', data)
      if (data.review_id) {
        SetIsReviewSubmitted(true)
      }
    } catch (error) {
      setError(error.message)
    }
  }

  return isReviewSubmitted ? (
    <div className="bg-emerald-50 text-center rounded p-6 mt-3">
      Thank you for your review!
    </div>
  ) : (
    <div className="border rounded border-[#E5E7EB] p-4 gap-3">
      <div>Leave a Review</div>
      <form onSubmit={createReview}>
        <div>
          <StarsRating />
        </div>
        <div>
          <textarea
            name="message"
            className="w-full border-black-500 border-2 rows-5"
          ></textarea>
          <button className="rounded bg-[#FB7185] text-white p-1 px-2">
            Submit
          </button>
          {error ? (
            <div className="font-bold text-red-700">{error}</div>
          ) : (
            <span></span>
          )}
        </div>
      </form>
    </div>
  )
}

export default ReviewForm

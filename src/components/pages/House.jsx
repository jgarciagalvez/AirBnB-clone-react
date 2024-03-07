import Gallery from '../ui/Gallery'
import Reviews from '../ui/Reviews'
import Nav from '../ui/Nav'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { differenceInCalendarDays } from 'date-fns'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSpinner, faUser } from '@fortawesome/free-solid-svg-icons'

function House() {
  // Declare house useState variable
  const [house, setHouse] = useState(undefined)
  const { id } = useParams()

  // Fetch data from API when component loads
  useEffect(() => {
    // Define function to Fetch data from the API
    const getHouse = async () => {
      try {
        const { data } = await axios.get(
          'https://haiku-bnb.onrender.com/houses/' + id
        )
        setHouse(data)
      } catch (error) {
        alert(error.message)
      }
    }

    getHouse()
  }, [id])

  return (
    <div className="container mx-auto">
      {/* Navigation Menu */}
      <Nav />

      {/* Body of the page */}

      <div className="flex flex-col p-4 gap-5">
        {/* Images on page */}

        {/* Gallery */}
        {house ? (
          <Gallery images={house.images} />
        ) : (
          <div className="flex h-[396px] items-center justify-center border">
            <FontAwesomeIcon
              icon={faSpinner}
              className="text-lg animate-spin"
            />
          </div>
        )}

        {/* House Info & Booking */}

        <div className="flex justify-between ">
          {/* House Info */}

          <div className="w-2/3 flex flex-col gap-5">
            <div>
              <p className="text-xl font-bold">
                {house ? house.location : <span>Location</span>}
              </p>
              <p className="text-xs text-[#64748B]">
                {house?.rooms} Rooms · {house?.bathrooms} Bathrooms
              </p>
            </div>
            <div className=" flex gap-3">
              {house ? (
                <img
                  className="h-12 rounded-full"
                  src={house.host.picture}
                  alt="user"
                />
              ) : (
                <div className="flex h-12 w-12 justify-center items-center ">
                  <FontAwesomeIcon icon={faUser} className="text-xl" />
                </div>
              )}
              <div>
                <p className="text-sm text-[#64748B]">Hosted By</p>
                <p>
                  {house?.host.firstName} {house?.host.lastName}
                </p>
              </div>
            </div>
            <div className="text-sm">{house?.description}</div>
          </div>
          <div className="align-top">
            <BookingForm house={house ?? {}} />
          </div>
        </div>

        {/* Reviews & Review Form*/}
        <div className="flex justify-between border-t border-[#E5E7EB] pt-10">
          {/* Reviews List */}
          <div className="w-2/3 flex flex-col gap-5">
            <Reviews />
          </div>

          {/* Leave a Review Form */}
          <div className="align-top">
            <LeaveReviewForm />
          </div>
        </div>
      </div>
    </div>
  )
}

// COMPONENT: Booking Form

function BookingForm({ house }) {
  // Create useState variables for form

  const [startDate, setStartDate] = useState(null)
  const [endDate, setEndDate] = useState(null)
  const [nights, setNights] = useState(0)
  const [totalPrice, setTotalPrice] = useState(0)

  // Calculate nights and update variable when either startDate or endDate are changed
  useEffect(() => {
    if (startDate && endDate)
      setNights(differenceInCalendarDays(endDate, startDate))
  }, [startDate, endDate])

  // Calculate totalPrice when nights is higher than 0
  useEffect(() => {
    setTotalPrice(nights * house.price)
  }, [nights, house.price])

  return (
    <div className="col-span-1">
      <div className="grid gap-2 border rounded border-[#E5E7EB] p-3 mb-4">
        <h6 className="font-bold">
          ${house.price}
          <span className="text-sm text-gray-400"> / night</span>
        </h6>
        <form className="flex flex-col gap-2 w-full ">
          <div className="flex gap-2">
            <div className="flex flex-col">
              <label className="text-sm font-thin text-gray-400">
                Check-in
              </label>
              <input
                onChange={(e) => setStartDate(e.target.value)}
                className="border gap-2 pl-1"
                type="date"
              />
            </div>
            <div className="flex flex-col">
              <label className="text-sm font-thin text-gray-400">
                Check-out
              </label>
              <input
                onChange={(e) => setEndDate(e.target.value)}
                className="border pl-1"
                type="date"
              />
            </div>
          </div>
          <textarea
            rows="7"
            className="border w-full resize-none pl-1"
            placeholder="Please send a message to the host..."
          ></textarea>
          <div className="flex justify-between items-center">
            <TotalBookingSpan nights={nights} totalPrice={totalPrice} />
            <button
              className="rounded bg-[#FB7185] text-white p-1 px-2 disabled:bg-gray-300"
              disabled={nights <= 0}
            >
              Reserve
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

function LeaveReviewForm() {
  return (
    <div className="border rounded border-[#E5E7EB] p-4 gap-3">
      <div>Leave a Review</div>
      <div>0</div>
      <div>
        <textarea className="w-full border-black-500 border-2 rows-5"></textarea>
        <button className="rounded bg-[#FB7185] text-white p-1 px-2">
          Submit
        </button>
      </div>
    </div>
  )
}

export default House

// Component for the Total Booking Span

function TotalBookingSpan({ nights, totalPrice }) {
  // Don't display anything if nights = 0

  if (nights === 0) {
    return <div></div>
  }
  // Throws error if nights is negative

  if (nights < 0) {
    return (
      <span className="font-bold text-red-700">
        Check-out date must be <br />
        after the check-in date
      </span>
    )
  }
  // If nights >= 0, we render the span with the number of nights and total price

  return (
    <span>
      {nights} nights =<span className="font-bold"> $ {totalPrice}</span>
    </span>
  )
}

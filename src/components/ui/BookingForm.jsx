import { useEffect, useState } from 'react'
import { differenceInCalendarDays } from 'date-fns'
import axios from 'axios'

function BookingForm({ house }) {
  // Create useState variables for form

  const [startDate, setStartDate] = useState(null)
  const [endDate, setEndDate] = useState(null)
  const [nights, setNights] = useState(0)
  const [message, setMessage] = useState('')
  const [totalPrice, setTotalPrice] = useState(0)
  const [bookingConfirmed, setBookingConfirmed] = useState(false)

  // Calculate number of nights and totalPrice to show in booking form
  useEffect(() => {
    if (startDate && endDate) {
      let nights = differenceInCalendarDays(endDate, startDate)
      setNights(nights)
      let total = nights * house.price_per_night
      setTotalPrice(total)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [startDate, endDate])

  // Create Booking
  const createBooking = async (e) => {
    e.preventDefault()

    // Form
    const form = new FormData(e.target)
    let formObject = Object.fromEntries(form.entries())

    const newBooking = {
      house_id: house.house_id,
      check_in_date: formObject.check_in_date,
      check_out_date: formObject.check_out_date,
      message: formObject.message,
      price_per_night: house.price_per_night
    }

    // API call
    try {
      const { data } = await axios.post(
        `${process.env.REACT_APP_API_URL_PATH}/bookings`,
        newBooking
      )
      if (data[0].booking_id) {
        setBookingConfirmed(true)
      }
    } catch (error) {
      console.error('Error creating booking', error)
    }
  }
  if (bookingConfirmed) {
    return <p>Thank you for your reservation!</p>
  }

  // JSX
  return (
    <div className="col-span-1">
      <div className="grid gap-2 border rounded border-[#E5E7EB] p-3 mb-4">
        <h6 className="font-bold">
          ${house.price_per_night}
          <span className="text-sm text-gray-400"> / night</span>
        </h6>
        <form onSubmit={createBooking} className="flex flex-col gap-2 w-full ">
          <div className="flex gap-2 flex-col md:flex-row">
            <div className="flex flex-col">
              <label className="text-sm font-thin text-gray-400">
                Check-in
              </label>
              <input
                onChange={(e) => setStartDate(e.target.value)}
                className="border gap-2 pl-1"
                type="date"
                name="check_in_date"
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
                name="check_out_date"
              />
            </div>
          </div>
          <textarea
            onChange={(e) => setMessage(e.target.value)}
            rows="7"
            className="border w-full resize-none pl-1"
            placeholder="Please send a message to the host..."
            name="message"
            required
          ></textarea>
          <div className="flex justify-between items-center">
            {/* Show total nights and total price on form */}
            <TotalBookingSpan nights={nights} totalPrice={totalPrice} />
            <button
              className="rounded bg-[#FB7185] text-white p-1 px-2 disabled:bg-gray-300"
              disabled={nights <= 0 || message === ''}
            >
              Reserve
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

// Booking information to show under booking form
function TotalBookingSpan({ nights, totalPrice }) {
  // Don't display anything if nights = 0
  if (nights === 0) {
    return <></>
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

export default BookingForm

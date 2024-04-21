import Nav from '../ui/Nav'
import HouseCard from '../ui/HouseCard'
import axios from 'axios'
import { useState, useEffect } from 'react'

function Bookings() {
  // Define useState Variables
  const [bookings, setBookings] = useState(undefined)

  // Get Listings Data from API
  const getBookings = async () => {
    let { data } = await axios.get(
      `${process.env.REACT_APP_API_URL_PATH}/bookings`
    )

    // Verify if 'data' is an array before setting 'bookings'. This is crucial because 'bookings.map' is used later in the code.
    Array.isArray(data) && setBookings(data)
  }

  useEffect(() => {
    getBookings()
  }, [])

  // JSX
  return (
    <div className="container mx-auto">
      <Nav />
      {bookings === undefined ? (
        <div className="flex items-center justify-center h-64">
          <span className="text-xl font-semibold">Loading...</span>
        </div>
      ) : bookings && bookings.length > 0 ? (
        <div className="grid m-3 mt-5 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 sm:grid-cols-2">
          {bookings.map((booking, id) => (
            <HouseCard house={booking} key={id} isBooking={true} />
          ))}
        </div>
      ) : (
        <div className="flex items-center justify-center h-64">
          <span className="text-xl font-semibold">
            You don't have any bookings
          </span>
        </div>
      )}
    </div>
  )
}

export default Bookings

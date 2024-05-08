import Nav from '../ui/Nav'
import HouseCard from '../ui/HouseCard'
import axios from 'axios'
import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

function Bookings() {
  // Define useState Variables
  const [bookings, setBookings] = useState(undefined)
  const navigate = useNavigate()

  // Get Listings Data from API
  const getBookings = async () => {
    try {
      let { data } = await axios.get(
        `${process.env.REACT_APP_API_URL_PATH}/bookings`
      )
      if (data.error) {
        alert('Please login to view this page')
        navigate('/login')
      } else {
        // Verify if 'data' is an array before setting 'bookings'. This is crucial because 'bookings.map' is used later in the code.
        Array.isArray(data) && setBookings(data)
      }
    } catch (e) {
      alert(e.message)
    }
  }

  useEffect(() => {
    getBookings()
    // eslint-disable-next-line react-hooks/exhaustive-deps
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

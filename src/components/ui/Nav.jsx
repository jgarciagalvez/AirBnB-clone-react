import { Link } from 'react-router-dom'
import { useState } from 'react'
function Nav() {
  const [picture, setPicture] = useState('')
  const isLoggedIn = localStorage.getItem('isLoggedin')
  return (
    <div className="flex justify-between items-center">
      <Link to="/">
        <img
          src="https://www.vectorlogo.zone/logos/airbnb/airbnb-ar21.svg"
          alt="AirBnB Logo"
          className="h-[48px]"
        />
      </Link>

      <div className="flex gap-3 text-xs">
        {isLoggedIn ? (
          <>
            <Link
              to="/bookings"
              className="border h-7 rounded-md p-1 hover:shadow-md"
            >
              My Bookings
            </Link>
            <Link
              to="/listings"
              className="border h-7 rounded-md p-1 hover:shadow-md"
            >
              Listings
            </Link>
            <Link
              to="/profile"
              className="border h-7 rounded-md p-1 hover:shadow-md"
            >
              <img
                className="h-4 inline rounded-lg mr-1"
                src={picture}
                alt="AirBnB Logo"
              />
              Profile
            </Link>
          </>
        ) : (
          <>
            <Link
              to="/login"
              className="border h-7 rounded-md p-1 hover:shadow-md"
            >
              Login
            </Link>
          </>
        )}
      </div>
    </div>
  )
}
export default Nav

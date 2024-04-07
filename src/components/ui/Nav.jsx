import { Link } from 'react-router-dom'

function Nav() {
  const profile_pic = localStorage.getItem('profile_pic')
  const isLoggedIn = localStorage.getItem('isLoggedIn')

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
                src={profile_pic}
                alt="profile_pic"
              />
              Profile
            </Link>
          </>
        ) : (
          <>
            <Link
              to="/signup"
              className="border h-7 rounded-md p-1 hover:shadow-md"
            >
              Signup
            </Link>
            <Link
              to="/login"
              className="border h-7 rounded-md p-1 px-2 hover:shadow-md mr-4"
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

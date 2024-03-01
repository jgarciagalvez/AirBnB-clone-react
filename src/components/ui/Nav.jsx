import { Link } from 'react-router-dom'
function Nav() {
  return (
    <div className="flex grid-cols-2 grid-rows-1 justify-between items-center">
      <div>
        <img
          src="https://www.vectorlogo.zone/logos/airbnb/airbnb-ar21.svg"
          alt="AirBnB Logo"
          className="h-[48px]"
        />{' '}
      </div>
      <div className="flex gap-3 text-xs">
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
            src="https://randomuser.me/api/portraits/men/15.jpg"
            alt="AirBnB Logo"
          />
          Profile
        </Link>
      </div>
    </div>
  )
}
export default Nav

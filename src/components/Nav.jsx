import { Link } from 'react-router-dom'
function Nav() {
  return (
    <div className="flex grid-cols-2 grid-rows-1 justify-between">
      <div>
        <img
          src="https://www.vectorlogo.zone/logos/airbnb/airbnb-ar21.svg"
          alt="AirBnB Logo"
        />{' '}
      </div>
      <div className="flex gap-3 text-xs m">
        <div className="border-2 h-7 rounded-sm p-1">
          <Link to="/bookings">My Bookings </Link>
        </div>
        <div className="border-2 h-7 rounded-sm p-1">
          <Link to="/listings">Listings</Link>
        </div>
        <div className="border-2 h-7 rounded-sm p-1">
          <img
            className="h-4 inline rounded-lg"
            src="https://randomuser.me/api/portraits/men/15.jpg"
            alt="AirBnB Logo"
          />{' '}
          <Link to="/profile">Profile</Link>
        </div>
      </div>
    </div>
  )
}
export default Nav

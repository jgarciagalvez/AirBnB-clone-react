import Nav from '../ui/Nav'
import HouseCard from '../ui/HouseCard'
import { bookings } from '../../dummyData'

function Bookings() {
  // Loop through the bookings array and render a HouseCard component for
  //each, replace the hardcoded values in the UI with data coming from each object

  return (
    <div className="container mx-auto">
      <Nav />
      <div className="grid md:grid-cols-5 gap-3 sm:grid-cols-2">
        {bookings.map((booking, index) => (
          <HouseCard key={index} booking={booking} isBooking={true} />
        ))}
      </div>
    </div>
  )
}

export default Bookings

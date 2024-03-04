import Nav from '../ui/Nav'
import HouseCard from '../ui/HouseCard'
function Bookings() {
  const bookingsArray = [
    {
      booking_id: 1,
      house_id: 10,
      user_id: 420,
      price: 69,
      arrival: '2 Jan 2024',
      departure: '19 Jan 2024',
      house: {
        location: 'Madagascar',
        rooms: 2,
        bathrroms: 3
      }
    },
    {
      booking_id: 2,
      house_id: 12,
      user_id: 40,
      price: 694,
      arrival: '14 Feb 2024',
      departure: '15 Feb 2024',
      house: {
        location: 'New Your',
        rooms: 2,
        bathrroms: 3
      }
    },
    {
      booking_id: 5,
      house_id: 100,
      user_id: 42,
      price: 109,
      arrival: '2 Sep 2024',
      departure: '15 Sep 2024',
      house: {
        location: 'Los Angeles',
        rooms: 2,
        bathrroms: 3
      }
    }
  ]

  // Loop through the bookings array and render a HouseCard component for
  //each, replace the hardcoded values in the UI with data coming from each object

  return (
    <div className="container mx-auto">
      <Nav />
      <div className="grid md:grid-cols-5 gap-3 sm:grid-cols-2">
        {bookingsArray.map((booking, index) => (
          <HouseCard key={index} booking={booking} isBooking={true} />
        ))}
      </div>
    </div>
  )
}

export default Bookings

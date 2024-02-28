import Nav from './Nav'
import HouseCard from './HouseCard'
function bookings() {
  return (
    <div className="container mx-auto">
      <Nav />
      <div className="grid md:grid-cols-5 gap-3 sm:grid-cols-2">
        <div>
          <HouseCard />
        </div>
        <div>
          <HouseCard />
        </div>
        <div>
          <HouseCard />
        </div>
        <div>
          <HouseCard />
        </div>
        <div>
          <HouseCard />
        </div>
        <div>
          <HouseCard />
        </div>
        <div>
          <HouseCard />
        </div>
        <div>
          <HouseCard />
        </div>
        <div>
          <HouseCard />
        </div>
        <div>
          <HouseCard />
        </div>
      </div>
    </div>
  )
}

export default bookings

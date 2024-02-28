import HouseCard from './HouseCard'
import Filters from './Filters'
import Nav from './Nav'

function Houses() {
  return (
    <div className="container mx-auto">
      <Nav />
      {/* Filters */}
      <Filters />

      {/* Show HouseCards for filtered Houses */}
      <div className="grid gap-4 grid-cols-5 grid-rows-2 mt-3">
        <HouseCard />
        <HouseCard />
        <HouseCard />
        <HouseCard />
        <HouseCard />
        <HouseCard />
        <HouseCard />
      </div>
    </div>
  )
}

export default Houses

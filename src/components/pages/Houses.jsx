import HouseCard from '../ui/HouseCard'
import Filters from '../ui/Filters'
import Nav from '../ui/Nav'
import { houses } from '../../dummyData.js'

function Houses() {
  return (
    <div className="container mx-auto">
      <Nav />
      {/* Filters */}
      <Filters />

      {/* Show HouseCards for filtered Houses */}
      <div className="grid gap-4 grid-cols-5 grid-rows-2 mt-3">
        {houses.map((house) => (
          <HouseCard key={house.id} house={house} />
        ))}
      </div>
    </div>
  )
}

export default Houses

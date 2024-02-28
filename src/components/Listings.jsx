import Nav from './Nav'
import HouseCard from './HouseCard'
function listings() {
  return (
    <div className="container mx-auto">
      <Nav />
      <div className="grid grid-cols-2 gap-5 bg-pink-200">
        <div className="bg-pink-600">1</div>
        <div className="bg-pink-600">2</div>
      </div>
      <HouseCard />
    </div>
  )
}

export default listings

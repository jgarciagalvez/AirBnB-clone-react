import Nav from '../ui/Nav'
import HouseCard from '../ui/HouseCard'
function listings() {
  return (
    <div className="container mx-auto">
      <Nav />
      <div className="grid grid-cols-2 gap-5">
        <div>1</div>
        <div>2</div>
      </div>
      <div className="grid grid-cols-5 gap-3">
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

export default listings

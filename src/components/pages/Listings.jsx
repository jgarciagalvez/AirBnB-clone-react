import { houses } from '../../dummyData'
import HouseCard from '../ui/HouseCard'
import Nav from '../ui/Nav'

function listings() {
  return (
    <div className="container mx-auto">
      <Nav />
      <form>
        <div className="grid grid-cols-2 gap-5 mb-3 border p-2 rounded">
          <div>
            <div className="mb-4">List a house</div>
            <div className="text-xs text-stone-500 mb-2">Location</div>
            <input
              type="text"
              placeholder=" Bali, Indonesia"
              className="border w-full rounded-sm"
            />
            <div className="text-xs text-stone-500 mb-2 mt-2">Bedrooms</div>
            <input
              type="text"
              placeholder=" 2"
              className="border w-full rounded-sm"
            />
            <div className="text-xs text-stone-500 mb-2 mt-2">Bathrooms</div>
            <input
              type="text"
              placeholder=" 1"
              className="border w-full rounded-sm"
            />
            <div className="text-xs text-stone-500 mb-2 mt-2">
              Price per Night
            </div>
            <input
              type="text"
              placeholder=" $100"
              className="border w-full rounded-sm"
            />
            <div className="text-xs text-stone-500 mb-2 mt-2">Description</div>
            <textarea
              rows="3"
              placeholder=" Tell us about your place..."
              className="border w-full rounded-sm text-s"
            ></textarea>
            <button className=" bg-[#FF5A5F] border text-white pt-2 pb-2 pl-3 pr-3 rounded-md ">
              List House
            </button>
          </div>

          <div>
            <div className="text-xs text-stone-500 mt-10 mb-2">Photos</div>
            <input
              type="text"
              placeholder="https://www.h0tm0mpics.com/830298507"
              className="border w-full rounded-sm mb-2 "
            />
            <input
              type="text"
              placeholder="https://www.h0tm0mpics.com/830298507"
              className="border w-full rounded-sm mb-2"
            />
            <input
              type="text"
              placeholder="https://www.h0tm0mpics.com/830298507"
              className="border w-full rounded-sm mb-2"
            />
            <input
              type="text"
              placeholder="https://www.h0tm0mpics.com/830298507"
              className="border w-full rounded-sm mb-2"
            />
            <input
              type="text"
              placeholder="https://www.h0tm0mpics.com/830298507"
              className="border w-full rounded-sm mb-2"
            />
            <input
              type="text"
              placeholder="https://www.h0tm0mpics.com/830298507"
              className="border w-full rounded-sm mb-2"
            />
            <input
              type="text"
              placeholder="https://www.h0tm0mpics.com/830298507"
              className="border w-full rounded-sm mb-2"
            />
            <input
              type="text"
              placeholder="https://www.h0tm0mpics.com/830298507"
              className="border w-full rounded-sm mb-2"
            />
            <input
              type="text"
              placeholder="https://www.h0tm0mpics.com/830298507"
              className="border w-full rounded-sm mb-2"
            />
          </div>
        </div>
      </form>
      <div className="grid grid-cols-5 gap-2">
        {houses.map((listing) => (
          <HouseCard key={listing.id} house={listing} isListing={true} />
        ))}
      </div>
    </div>
  )
}

export default listings

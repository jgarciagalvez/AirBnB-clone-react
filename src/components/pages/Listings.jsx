import { houses } from '../../dummyData'
import HouseCard from '../ui/HouseCard'
import Nav from '../ui/Nav'
import { useState, useEffect } from 'react'
import axios from 'axios'

function Listings() {
  // Define useState variables (using dummy data for listings)
  const [listings, setListings] = useState(houses)
  const [error, setError] = useState('')

  // Create new house
  const createHouse = async (e) => {
    // Prevent page reload on form submission
    e.preventDefault()

    // Get data from the form
    let form = new FormData(e.target)
    let newListing = Object.fromEntries(form.entries())

    // Get all photos from form and add them to an array
    newListing.photos = form.getAll('photos')

    // Send data to the API
    try {
      const response = await axios.post(
        'https://haiku-bnb.onrender.com/houses',
        newListing
      )
      console.log(response.data)
    } catch (error) {
      setError(error.message)
    }

    // Update listings array with new house
    setListings([...listings, newListing])
  }

  return (
    <div className="container mx-auto">
      <Nav />
      <form onSubmit={(e) => createHouse(e)}>
        <div className="grid grid-cols-2 gap-5 mb-3 border p-2 rounded">
          <div>
            <div className="mb-4">List a house</div>
            <div className="text-xs text-stone-500 mb-2">Location</div>
            <input
              name="location"
              type="text"
              placeholder=" Bali, Indonesia"
              className="border w-full rounded-sm"
            />
            <div className="text-xs text-stone-500 mb-2 mt-2">Bedrooms</div>
            <input
              name="rooms"
              type="text"
              placeholder=" 2"
              className="border w-full rounded-sm"
            />
            <div className="text-xs text-stone-500 mb-2 mt-2">Bathrooms</div>
            <input
              name="bathrooms"
              type="text"
              placeholder=" 1"
              className="border w-full rounded-sm"
            />
            <div className="text-xs text-stone-500 mb-2 mt-2">
              Price per Night
            </div>
            <input
              name="price"
              type="text"
              placeholder=" $100"
              className="border w-full rounded-sm"
            />
            <div className="text-xs text-stone-500 mb-2 mt-2">Description</div>
            <textarea
              name="description"
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
              name="photos"
              type="text"
              placeholder="https://www.h0tm0mpics.com/830298507"
              className="border w-full rounded-sm mb-2 "
            />
            <input
              name="photos"
              type="text"
              placeholder="https://www.h0tm0mpics.com/830298507"
              className="border w-full rounded-sm mb-2"
            />
            <input
              name="photos"
              type="text"
              placeholder="https://www.h0tm0mpics.com/830298507"
              className="border w-full rounded-sm mb-2"
            />
            <input
              name="photos"
              type="text"
              placeholder="https://www.h0tm0mpics.com/830298507"
              className="border w-full rounded-sm mb-2"
            />
            <input
              name="photos"
              type="text"
              placeholder="https://www.h0tm0mpics.com/830298507"
              className="border w-full rounded-sm mb-2"
            />
            <input
              name="photos"
              type="text"
              placeholder="https://www.h0tm0mpics.com/830298507"
              className="border w-full rounded-sm mb-2"
            />
            <input
              name="photos"
              type="text"
              placeholder="https://www.h0tm0mpics.com/830298507"
              className="border w-full rounded-sm mb-2"
            />
            <input
              name="photos"
              type="text"
              placeholder="https://www.h0tm0mpics.com/830298507"
              className="border w-full rounded-sm mb-2"
            />
            <input
              name="photos"
              type="text"
              placeholder="https://www.h0tm0mpics.com/830298507"
              className="border w-full rounded-sm mb-2"
            />
          </div>
        </div>
      </form>
      <div className="grid grid-cols-5 gap-2">
        {houses.map((listing, id) => (
          <HouseCard key={id} house={listing} isListing={true} />
        ))}
      </div>
    </div>
  )
}

export default Listings

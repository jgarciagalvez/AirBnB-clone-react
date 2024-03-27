import { useEffect, useState } from 'react'
import Nav from '../ui/Nav'
import { Link, useParams } from 'react-router-dom'
import axios from 'axios'

function HouseEdit() {
  // Define useState Variables
  const { id } = useParams()
  const [house, setHouse] = useState(undefined)

  // Get House Data from API
  useEffect(() => {
    const getData = async () => {
      const { data } = await axios.get(
        'https://haiku-bnb.onrender.com/houses/' + id
      )
      setHouse(data)
    }
    getData()
  }, [id])

  if (house === undefined) {
    return <div>loading...</div>
  }

  // Form's Input & Labe Styling
  const labelStyle = 'text-xs text-stone-500 mb-2'
  const inputStyle = 'border w-full rounded-sm pl-1'

  // Create new house Function
  const updateHouse = async (e) => {
    // Prevent page reload on form submission
    e.preventDefault()

    // Form
    let form = new FormData(e.target)
    let formObj = Object.fromEntries(form.entries())
    formObj.photos = form.getAll('photos')

    // API patch call
    try {
      const { data } = await axios.patch(
        'https://haiku-bnb.onrender.com/houses/' + id,
        formObj
      )

      // Handle API Response
      data.error ? alert(data.error) : alert('your changes have been saved')
    } catch (err) {
      alert(err.message)
    }
  }

  // JSX
  return (
    <div className="container mx-auto">
      <Nav />
      <form onSubmit={(e) => updateHouse(e)}>
        <div className="grid grid-cols-2 gap-5 mb-3 border p-2 rounded">
          <div>
            <h2 className="mb-4 mt-3">Edit Your Listing</h2>

            <div className={labelStyle}>Location</div>
            <input
              name="location"
              className={inputStyle}
              type="text"
              defaultValue={house.location}
            />

            <div className={labelStyle}>Bedrooms</div>
            <input
              name="rooms"
              className={inputStyle}
              type="number"
              defaultValue={house.rooms}
            />

            <div className={labelStyle}>Bathrooms</div>
            <input
              name="bathrooms"
              className={inputStyle}
              type="number"
              defaultValue={house.bathrooms}
            />

            <div className={labelStyle}>Price per night</div>
            <input
              name="price"
              className={inputStyle}
              type="number"
              defaultValue={house.price}
            />

            <div className={labelStyle}>Description</div>
            <textarea
              name="description"
              className={inputStyle}
              defaultValue={house.description}
            ></textarea>

            <div className="my-2">
              <button className="bg-[#FB7185] border text-white py-1 px-2 rounded-md">
                Save Changes
              </button>
              <Link to="/Listings">
                <button className="border border-gray-300 py-1 px-2 ml-2 rounded-md hover:bg-red-500 hover:text-white">
                  Cancel
                </button>
              </Link>
            </div>
          </div>

          {/* Photos input */}
          <div>
            <div className="text-xs text-stone-500 mt-10 mb-2">Photos</div>
            {house.images.map((image, i) => (
              <input
                name="photos"
                type="url"
                key={i}
                defaultValue={image}
                className="border w-full rounded-sm mb-2 pl-1"
                required
              />
            ))}
          </div>
        </div>
      </form>
    </div>
  )
}

export default HouseEdit

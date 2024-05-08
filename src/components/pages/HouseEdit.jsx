import { useEffect, useState } from 'react'
import Nav from '../ui/Nav'
import { Link, useParams } from 'react-router-dom'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

function HouseEdit() {
  // Define useState Variables
  const { house_id } = useParams()
  const [house, setHouse] = useState(undefined)
  const navigate = useNavigate()

  // Get House Data from API
  useEffect(() => {
    const getData = async () => {
      try {
        const { data } = await axios.get(
          `${process.env.REACT_APP_API_URL_PATH}/houses/` + house_id + '/edit'
        )
        if (!data.error) {
          setHouse(data)

          // Handle errors
        } else if (data.error.includes('Property not found')) {
          alert('Property not found')
          navigate('/')
        } else if (data.error.includes('authorisation')) {
          alert('Please login to view this page')
          navigate('/login')
        }
      } catch (e) {
        alert(e.message)
      }
    }
    getData()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [house_id])

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
        `${process.env.REACT_APP_API_URL_PATH}/houses/` + house_id,
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
        <div className="grid md:grid-cols-2 gap-5 mb-5 border p-2 rounded">
          <div>
            <div className="mb-4">Edit Your Listing</div>

            <div className={labelStyle}>Location</div>
            <input
              name="location"
              className={inputStyle}
              type="text"
              defaultValue={house.location}
            />

            <div className={labelStyle}>Bedrooms</div>
            <input
              name="bedrooms"
              className={inputStyle}
              type="number"
              defaultValue={house.bedrooms}
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
              name="price_per_night"
              className={inputStyle}
              type="number"
              defaultValue={house.price_per_night}
            />

            <div className={labelStyle}>Description</div>
            <textarea
              name="description"
              className={inputStyle}
              defaultValue={house.description}
            ></textarea>
          </div>

          {/* Photos input */}
          <div>
            <div className="text-xs text-stone-500 md:mt-10 mt-1 mb-2">
              Photos
            </div>
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
      </form>
    </div>
  )
}

export default HouseEdit

import HouseCard from '../ui/HouseCard'
import Nav from '../ui/Nav'
import { useState, useEffect } from 'react'
import axios from 'axios'

function Listings() {
  // Define useState variables
  const [listings, setListings] = useState([])
  const [error, setError] = useState('')
  const [notValidEntry, setNotValidEntry] = useState({})

  // Get Listings Data from API
  const getListings = async () => {
    let { data } = await axios.get(
      `${process.env.REACT_APP_API_URL_PATH}/listings`
    )

    // Verify if 'data' is an array before setting 'listings'. This is crucial because 'listings.map' is used later in the code.
    Array.isArray(data) && setListings(data)
  }

  useEffect(() => {
    getListings()
  }, [])

  // Form's Input & Labe Styling
  const labelStyle = 'text-xs text-stone-500 mb-2'
  const inputStyle = 'border w-full rounded-sm pl-1'

  // Function to validate form
  const validateForm = (obj) => {
    // Define Arrays with Requirements
    let mustBeString = ['location', 'description']
    let mustBeNumber = ['bedrooms', 'price', 'bathrooms']

    let result = {}

    // Iterate through each object key
    Object.keys(obj).forEach((key) => {
      if (mustBeString.includes(key)) {
        // Validate if the property is a string and not a pure number
        const hasError = !isNaN(parseFloat(obj[key])) && isFinite(obj[key])
        result[key] = hasError
      } else if (mustBeNumber.includes(key)) {
        // Validate if the property can be converted to a number and is not NaN
        const value = Number(obj[key])
        const hasError = isNaN(value)
        result[key] = hasError
      }
    })

    setNotValidEntry(result)

    // IsValidNumber will be equal to true if any of the duplas have hasError: true
    return Object.values(result).includes(true)
  }

  // Create new house Function
  const createHouse = async (e) => {
    // Prevent page reload on form submission
    e.preventDefault()

    // Form
    let form = new FormData(e.target)
    let formObj = Object.fromEntries(form.entries())
    formObj.photos = form.getAll('photos')

    // Validate data before sending to API
    const formHasErrors = validateForm(formObj)

    // Return in case there are errors and prevent sending data to API
    if (formHasErrors) {
      return
    }

    // Send validated data to the API
    try {
      const response = await axios.post(
        `${process.env.REACT_APP_API_URL_PATH}/houses`,
        formObj
      )
      if (response.data.error) {
        setError(response.data.error)
      } else {
        // Update listings array with new house
        setListings([...listings, response.data])
      }
    } catch (err) {
      setError(err.message)
    }
  }

  // JSX
  return (
    <div className="container mx-auto">
      <Nav />
      <form onSubmit={(e) => createHouse(e)}>
        <div className="grid md:grid-cols-2 gap-5 mx-3 mb-5 border p-2 rounded">
          <div>
            <div className="mb-4">List a house</div>
            <div className={labelStyle}>Location</div>
            <input
              name="location"
              required
              type="text"
              placeholder="Bali, Indonesia"
              className={inputStyle}
            />
            {notValidEntry.location && <NotStringError />}
            <div className={labelStyle}>Bedrooms</div>
            <input
              name="bedrooms"
              required
              type="text"
              placeholder="2"
              className={inputStyle}
            />
            {notValidEntry.bedrooms && <NotNumberError />}
            <div className={labelStyle}>Bathrooms</div>
            <input
              name="bathrooms"
              required
              type="text"
              placeholder="1"
              className={inputStyle}
            />
            {notValidEntry.bathrooms && <NotNumberError />}
            <div className={labelStyle}>Price per Night</div>
            <input
              name="price_per_night"
              required
              type="text"
              placeholder="$100"
              className={inputStyle}
            />
            {notValidEntry.price && <NotNumberError />}
            <div className={labelStyle}>Description</div>
            <textarea
              name="description"
              required
              rows="3"
              placeholder="Tell us about your place..."
              className="border w-full rounded-sm text-s pl-1"
            ></textarea>
            {notValidEntry.description && <NotStringError />}
          </div>

          <div>
            <div className="text-xs text-stone-500 md:mt-10 mt-1 mb-2">
              Photos
            </div>

            {/* Create the 9 image input fields */}
            {[...Array(9)].map((_, index) => (
              <PhotoInput key={index} />
            ))}
          </div>
          <button className="w-1/3 bg-[#FB7185] border text-white py-1 px-2 rounded-md ">
            List House
          </button>
          {error && <div className="text-red-700">{error}</div>}
        </div>
      </form>

      {/* Render the house cards for the listings */}
      <div className="grid m-3 mt-5 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 sm:grid-cols-2">
        {listings.map((listing, id) => (
          <HouseCard key={id} house={listing} isListing={true} />
        ))}
      </div>
    </div>
  )
}

// EXTRA COMPONENTS
// Define Component for each input
function PhotoInput() {
  return (
    <input
      name="photos"
      required
      type="url"
      placeholder="https://www.h0tm0mpics.com/830298507.jpg"
      className="border w-full rounded-sm mb-2 pl-1"
    />
  )
}

function NotNumberError() {
  return <div className="text-red-600 text-sm">Please use only numbers</div>
}

function NotStringError() {
  return (
    <div className="text-red-600 text-sm">Please provide a valid input</div>
  )
}

export default Listings

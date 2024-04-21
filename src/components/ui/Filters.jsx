import axios from 'axios'
import { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faHouse,
  faBed,
  faDollarSign,
  faSort
} from '@fortawesome/free-solid-svg-icons'

function Filters(props) {
  // Variables

  const [locations, setLocations] = useState([])

  // FUNCTIONS

  // Get list of locations for location filter
  useEffect(() => {
    const getLocations = async () => {
      try {
        const response = await axios.get(
          `${process.env.REACT_APP_API_URL_PATH}/locations`
        )
        setLocations(response.data)
      } catch (error) {
        alert(error.message)
      }
    }
    getLocations()
  }, [])

  // API call to get list of houses (filtered with form query)
  const getHouses = async (query) => {
    try {
      const response = await axios.get(
        `${process.env.REACT_APP_API_URL_PATH}/houses`,
        {
          params: query
        }
      )
      props.setHouses(response.data)
    } catch (error) {
      alert(error.message)
    }
  }

  // Get data from filter form and build query
  const submitForm = (e) => {
    e.preventDefault()

    // Extract values and build query params
    let query = {}

    // Location
    if (e.target.location.value) {
      query.location = e.target.location.value
    }

    // min_rooms
    if (e.target.min_rooms.value) {
      query.min_rooms = e.target.min_rooms.value
    }

    // // max_price
    if (e.target.max_price.value) {
      query.max_price = e.target.max_price.value
    }

    // sort
    if (e.target.sort.value) {
      query.sort = e.target.sort.value
    }

    // search
    if (e.target.search.value) {
      query.search = e.target.search.value
    }

    // Call getHouses function pasing the query for the axio params
    getHouses(query)
  }

  // JSX

  return (
    <form onSubmit={(e) => submitForm(e)}>
      {/* Center elements vertically and wrap them, make adjustments for small screens */}
      <div className="grid grid-cols-2 gap-2 md:flex justify-between items-center m-3 bg-stone-100 p-2 rounded-md">
        {/* Location Filter */}
        <div className="md:w-full">
          <FontAwesomeIcon
            icon={faHouse}
            className="absolute m-2 w-4 h-4 pointer-events-none"
          />
          <select
            name="location"
            className="w-full border pl-7 py-1 rounded text-sm"
          >
            <option value="">Any Location</option>
            {/* Display an option for each location from the database */}
            {locations.map((location, i) => (
              <option key={i} value={location}>
                {location}
              </option>
            ))}
          </select>
        </div>
        {/* Rooms Filter */}
        <div className="md:w-full">
          <FontAwesomeIcon
            icon={faBed}
            className="absolute m-2 w-4 h-4 pointer-events-none"
          />
          <select
            name="min_rooms"
            className="w-full border pl-7 py-1 rounded text-sm"
          >
            <option value="">Any Rooms</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </select>
        </div>
        {/* Max Price Filter */}
        <div className="md:w-full">
          <FontAwesomeIcon
            icon={faDollarSign}
            className="absolute m-2 w-4 h-4 pointer-events-none"
          />
          <input
            name="max_price"
            className="w-full border pl-7 py-1 rounded text-sm [&::-webkit-inner-spin-button]:appearance-none"
            type="number"
            placeholder="max price"
          />
        </div>
        {/* Sort Results */}
        <div className="md:w-full">
          <FontAwesomeIcon
            icon={faSort}
            className="absolute m-2 w-4 h-4 pointer-events-none"
          />
          <select
            name="sort"
            className="w-full border pl-7 py-1 rounded text-sm"
          >
            <option value="">sort by</option>
            <option value="price">Price: low to high</option>
            <option value="bedrooms">Rooms: high to low</option>
          </select>
        </div>
        {/* Search Box 5 */}
        <div className="md:w-full">
          <input
            name="search"
            className="w-full border pl-2 py-1 rounded text-sm"
            type="text"
            placeholder="keywords..."
          />
        </div>
        {/* Button Container*/}
        <div className=" md:w-full flex justify-end">
          <button className="w-full bg-[#FF5A5F] border text-white p-1 rounded-md text-sm">
            Search
          </button>
        </div>
      </div>
    </form>
  )
}

export default Filters

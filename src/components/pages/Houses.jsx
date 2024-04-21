import HouseCard from '../ui/HouseCard'
import Filters from '../ui/Filters'
import Nav from '../ui/Nav'
import { useState, useEffect } from 'react'

import axios from 'axios'

const apiUrl = process.env.REACT_APP_API_URL_PATH

function Houses() {
  const [houses, setHouses] = useState([])

  const getHouses = async () => {
    let { data } = await axios.get(`${apiUrl}/houses`)
    setHouses(data)
  }

  useEffect(() => {
    getHouses()
  }, [])

  return (
    <div className="container mx-auto">
      <Nav />
      {/* Filters */}
      <Filters setHouses={setHouses} />

      {/* Show HouseCards for filtered Houses */}
      <div className="flex justify-center mt-5 mx-3">
        <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
          {houses.map((house, id) => (
            <HouseCard key={id} house={house} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Houses

import Gallery from '../ui/Gallery'
import Reviews from '../ui/Reviews'
import Nav from '../ui/Nav'
import axios from 'axios'
import BookingForm from '../ui/BookingForm.jsx'
import ReviewForm from '../ui/ReviewForm.jsx'
import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSpinner, faUser } from '@fortawesome/free-solid-svg-icons'

function House() {
  // Declare house useState variable
  const [house, setHouse] = useState(undefined)
  const { house_id } = useParams()

  // Fetch data from API when component loads
  useEffect(() => {
    // Define function to Fetch data from the API
    const getHouse = async () => {
      try {
        const { data } = await axios.get(
          `${process.env.REACT_APP_API_URL_PATH}/houses/` + house_id
        )
        setHouse(data)
      } catch (error) {
        alert(error.message)
      }
    }

    getHouse()
  }, [house_id])

  return (
    <div className="container mx-auto">
      {/* Navigation Menu */}
      <Nav />

      {/* Body of the page */}

      <div className="flex flex-col p-4 gap-5">
        {/* Images on page */}

        {/* Gallery */}
        {house ? (
          <Gallery images={house.images} />
        ) : (
          <div className="flex md:h-[396px] h-40 items-center justify-center border">
            <FontAwesomeIcon
              icon={faSpinner}
              className="text-lg animate-spin"
            />
          </div>
        )}

        {/* House Info & Booking */}

        <div className="md:flex justify-between ">
          {/* House Info */}

          <div className="md:w-2/3 flex flex-col gap-5 mb-5">
            <div>
              <p className="text-xl font-bold">
                {house ? house.location : <span>Location</span>}
              </p>
              <p className="text-xs text-[#64748B]">
                {house?.bedrooms} Rooms · {house?.bathrooms} Bathrooms
              </p>
            </div>
            <div className=" flex gap-3">
              {house ? (
                <img
                  className="h-12 rounded-full"
                  src={house.host.profile_pic}
                  alt="user"
                />
              ) : (
                <div className="flex h-12 w-12 justify-center items-center ">
                  <FontAwesomeIcon icon={faUser} className="text-xl" />
                </div>
              )}
              <div>
                <p className="text-sm text-[#64748B]">Hosted By</p>
                <p>
                  {house?.host.first_name} {house?.host.last_name}
                </p>
              </div>
            </div>
            <div className="text-sm">{house?.description}</div>
          </div>
          <div className="align-top">
            <BookingForm house={house ?? {}} />
          </div>
        </div>

        {/* Reviews & Review Form*/}
        <div className="flex flex-col md:flex-row justify-between border-t border-[#E5E7EB] pt-10">
          {/* Leave a Review Form */}
          <div className="md:order-last align-top mb-5">
            <ReviewForm house_id={house_id} />
          </div>

          {/* Reviews List */}
          <div className="md:w-2/3 flex flex-col gap-5">
            <Reviews house={house ?? {}} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default House

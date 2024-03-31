import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCommentDots } from '@fortawesome/free-regular-svg-icons'
import Stars from './stars'

function HouseCard(props) {
  // Extract props into variables
  const isBooking = props.isBooking
  const house = props.house
  const isListing = props.isListing

  // JSx
  return (
    <div className="border border-solid border-stone-200 rounded-lg gap-3 hover:shadow-lg">
      <Link to={`/houses/${house.house_id}`}>
        <div className="rounded-t-lg justify-center">
          <img src={house.photo} alt="House Photos" className="rounded-t-lg" />
        </div>
      </Link>
      <div className="p-2">
        <Link to={`/houses/${house.house_id}`}>
          <p className="font-bold text-l">{house.location}</p>
          <p className="font-thin text-sm text-[#64748B]">
            {house.bedrooms} Rooms · {house.bathrooms} Bathrooms
          </p>
          <p className="font-bold text-lg mt-2">${house.price_per_night}</p>
          <div className="flex justify-between">
            <div className="flex gap-2">
              <div className="">
                <Stars rating={house.rating} />
              </div>
              <div className="">{house.rating}</div>
            </div>
            <div className="flex gap-2 items-center">
              <div className="">{house.review_count}</div>
              <div className="">
                <FontAwesomeIcon
                  icon={faCommentDots}
                  className="text-[#94A3B8]"
                />
              </div>
            </div>
          </div>
        </Link>

        {/* Shows Listing Info if listing */}
        {isListing && (
          <div className="grid grid-cols-4 gap-2 mt-2">
            <Link to={`/houses/${house.house_id}`}>
              <button className="bg-[#FB7185] text-white border py-1 px-3 col-span-1 rounded-md">
                View
              </button>
            </Link>
            <Link to={`/houses/${house.house_id}/edit`}>
              <button className="bg-[#FB7185] text-white border py-1 px-3 col-span-1 rounded-md">
                Edit
              </button>
            </Link>
          </div>
        )}

        {/* Shows Booking info if Booking */}
        {isBooking && (
          <div className="bg-[#ECFDF5] flex flex-col gap-1 text-center">
            <span className="text-xs mt-2 ">
              {house.check_in_date} - {house.check_out_date}
            </span>
            <div className="font-bold text-sm mb-2">
              {house.nights} nights = $ {house.price_total}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default HouseCard

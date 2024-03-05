import Gallery from '../ui/Gallery'
import Reviews from '../ui/Reviews'
import Nav from '../ui/Nav'
import { useEffect, useState } from 'react'
import { differenceInCalendarDays } from 'date-fns'

function House() {
  let house = {
    location: 'Koh Phangan, Thailand',
    rooms: 3,
    bathrooms: 4,
    description: 'This house.... is a very very very fine house!',
    price: 700,
    rating: 4.2,
    host: {
      firstname: 'Barbara',
      lastname: 'Streisand',
      picture: 'https://randomuser.me/api/portraits/women/51.jpg'
    }
  }
  return (
    <div className="container mx-auto">
      {/* Navigation Menu */}
      <Nav />

      {/* Body of the page */}

      <div className="flex flex-col p-4 gap-5">
        {/* Images on page */}

        <div className="grid sm:grid-cols-2 gap-2">
          {/* Highlight Image */}
          <div className="rounded-md md:min-h-[200px] sm:min-h-[100px] bg-cover bg-center bg-[url('https://res.cloudinary.com/dsko6ntfj/image/upload/v1640295026/portal/web%20development%20beginners/05%20Project%20Airbnb/house%2001/house_01_01.png')]"></div>

          {/* Gallery */}
          <Gallery />
        </div>

        {/* House Info & Booking */}

        <div className="flex justify-between ">
          {/* House Info */}

          <div className="w-2/3 flex flex-col gap-5">
            <div>
              <p className="text-xl font-bold">{house.location}</p>
              <p className="text-xs text-[#64748B]">
                {house.rooms} Rooms · {house.bathrooms} Bathrooms
              </p>
            </div>
            <div className=" flex gap-3">
              <img
                className="h-12 rounded-full"
                src={house.host.picture}
                alt="user"
              />
              <div>
                <p className="text-sm text-[#64748B]">Hosted By</p>
                <p>
                  {house.host.firstname} {house.host.lastname}
                </p>
              </div>
            </div>
            <div className="text-sm">{house.description}</div>
          </div>
          <div className="align-top">
            <BookingForm house={house} />
          </div>
        </div>

        {/* Reviews & Review Form*/}
        <div className="flex justify-between border-t border-[#E5E7EB] pt-10">
          {/* Reviews List */}
          <div className="w-2/3 flex flex-col gap-5">
            <Reviews />
          </div>

          {/* Leave a Review Form */}
          <div className="align-top">
            <LeaveReviewForm />
          </div>
        </div>
      </div>
    </div>
  )
}

// COMPONENT: Booking Form

function BookingForm({ house }) {
  // Create useState variables for form

  const [startDate, setStartDate] = useState(null)
  const [endDate, setEndDate] = useState(null)
  const [nights, setNights] = useState(0)
  const [totalPrice, setTotalPrice] = useState(0)

  // Calculate nights and update variable when either startDate or endDate are changed
  useEffect(() => {
    startDate && endDate
      ? setNights(differenceInCalendarDays(endDate, startDate))
      : setNights(0)
  }, [startDate, endDate])

  // Calculate totalPrice when nights is higher than 0
  useEffect(() => {
    setTotalPrice(nights * house.price)
  }, [nights, house.price])

  // Component for the Total Booking Span
  function TotalBookingSpan() {
    // Throws error if nights is negative

    if (nights < 0) {
      return (
        <span className="font-bold text-red-700">
          Check-out date must be <br />
          after the check-in date
        </span>
      )
    }
    // If nights >= 0, we render the span with the number of nights and total price
    return (
      <span>
        {nights} nights =<span className="font-bold"> $ {totalPrice}</span>
      </span>
    )
  }

  return (
    <div className="col-span-1">
      <div className="grid gap-2 border rounded border-[#E5E7EB] p-3 mb-4">
        <h6 className="font-bold">
          ${house.price}
          <span className="text-sm text-gray-400"> / night</span>
        </h6>
        <form className="flex flex-col gap-2 w-full ">
          <div className="flex gap-2">
            <div className="flex flex-col">
              <label className="text-sm font-thin text-gray-400">
                Check-in
              </label>
              <input
                onChange={(e) => setStartDate(e.target.value)}
                className="border gap-2 pl-1"
                type="date"
              />
            </div>
            <div className="flex flex-col">
              <label className="text-sm font-thin text-gray-400">
                Check-out
              </label>
              <input
                onChange={(e) => setEndDate(e.target.value)}
                className="border pl-1"
                type="date"
              />
            </div>
          </div>
          <textarea
            rows="7"
            className="border w-full resize-none pl-1"
            placeholder="Please send a message to the host..."
          ></textarea>
          <div className="flex justify-between items-center">
            <TotalBookingSpan />
            <button className="rounded bg-[#FB7185] text-white p-1 px-2">
              Reserve
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

function LeaveReviewForm() {
  return (
    <div className="border rounded border-[#E5E7EB] p-4 gap-3">
      <div>Leave a Review</div>
      <div>0</div>
      <div>
        <textarea className="w-full border-black-500 border-2 rows-5"></textarea>
        <button className="rounded bg-[#FB7185] text-white p-1 px-2">
          Submit
        </button>
      </div>
    </div>
  )
}

export default House

import { useEffect, useState } from 'react'
import { differenceInCalendarDays } from 'date-fns'

function BookingForm({ house }) {
  // Create useState variables for form

  const [startDate, setStartDate] = useState(null)
  const [endDate, setEndDate] = useState(null)
  const [nights, setNights] = useState(0)
  const [totalPrice, setTotalPrice] = useState(0)

  // Calculate nights and update variable when either startDate or endDate are changed
  useEffect(() => {
    if (startDate && endDate)
      setNights(differenceInCalendarDays(endDate, startDate))
  }, [startDate, endDate])

  // Calculate totalPrice when nights is higher than 0
  useEffect(() => {
    setTotalPrice(nights * house.price)
  }, [nights, house.price])

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
            <TotalBookingSpan nights={nights} totalPrice={totalPrice} />
            <button
              className="rounded bg-[#FB7185] text-white p-1 px-2 disabled:bg-gray-300"
              disabled={nights <= 0}
            >
              Reserve
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

function TotalBookingSpan({ nights, totalPrice }) {
  // Don't display anything if nights = 0

  if (nights === 0) {
    return <div></div>
  }
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

export default BookingForm

// ERROR
// Cannot access '__WEBPACK_DEFAULT_EXPORT__' before initialization
// ReferenceError: Cannot access '__WEBPACK_DEFAULT_EXPORT__' before initialization
//     at Module.default (https://expert-telegram-6677gr5464qfrrgj-3000.app.github.dev/static/js/bundle.js:294:42)
//     at ./src/components/pages/House.jsx (https://expert-telegram-6677gr5464qfrrgj-3000.app.github.dev/static/js/bundle.js:530:111)
//     at options.factory (https://expert-telegram-6677gr5464qfrrgj-3000.app.github.dev/static/js/bundle.js:72932:31)
//     at __webpack_require__ (https://expert-telegram-6677gr5464qfrrgj-3000.app.github.dev/static/js/bundle.js:72361:32)
//     at fn (https://expert-telegram-6677gr5464qfrrgj-3000.app.github.dev/static/js/bundle.js:72590:21)
//     at ./src/Routes.jsx (https://expert-telegram-6677gr5464qfrrgj-3000.app.github.dev/static/js/bundle.js:18:81)
//     at options.factory (https://expert-telegram-6677gr5464qfrrgj-3000.app.github.dev/static/js/bundle.js:72932:31)
//     at __webpack_require__ (https://expert-telegram-6677gr5464qfrrgj-3000.app.github.dev/static/js/bundle.js:72361:32)
//     at fn (https://expert-telegram-6677gr5464qfrrgj-3000.app.github.dev/static/js/bundle.js:72590:21)
//     at ./src/index.js (https://expert-telegram-6677gr5464qfrrgj-3000.app.github.dev/static/js/bundle.js:3637:65)

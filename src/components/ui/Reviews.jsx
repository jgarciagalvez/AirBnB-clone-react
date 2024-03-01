import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'
import { faCommentDots } from '@fortawesome/free-regular-svg-icons'

export default function Reviews() {
  return (
    <div className="container mx-auto gap-2">
      <div className="flex gap-2 items-center">
        <div className="inline">
          <FontAwesomeIcon icon={faCommentDots} />
          <span className="text-lg font-bold"> 34 Reviews</span>
          <div>
            <span className="text-sm">Average Rating: 2.3 </span>

            <FontAwesomeIcon icon={faStar} />
          </div>
        </div>
      </div>
      <div className="space-y-3">
        <Review />
        <Review />
      </div>
    </div>
  )
}

function Review() {
  return (
    <div className="border border-solid border-[#E5E7EB] rounded-lg p-3 m-2 text-sm">
      <div className="flex gap-2">
        <div className="w-12 h-12 border-2 border-solid border-white rounded-full">
          <img
            className="rounded-full"
            src="https://randomuser.me/api/portraits/men/84.jpg"
            alt="reviewer"
          />
        </div>
        <div>
          <div className="text-[#64748B]">5 January 2024</div>
          <div>Sandro Berger</div>
        </div>
      </div>
      <div className="flex gap-2 my-2">
        <span>4.7</span>
        <FontAwesomeIcon icon={faStar} />
      </div>
      <div className="flex">
        <p>
          On the positive side, the location was fantastic - just a short walk
          to the beach and local eateries. The view from the balcony was
          breathtaking, especially during sunsets. However, the house itself
          left a bit to be desired. The decor was charming and beach-themed, but
          the cleanliness was not up to par; we found dust in several corners
          and the bathroom fixtures were a bit dated. The amenities listed were
          all present, but the Wi-Fi was frustratingly slow and unreliable.
          Additionally, while the host was polite, their response time was
          slower than expected, which made coordinating check-in more
          challenging than it needed to be. It's a decent place if you're not
          too fussy about the finer details and are more
        </p>
      </div>
    </div>
  )
}

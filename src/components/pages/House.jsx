import Gallery from '../ui/Gallery'
import Reviews from '../ui/Reviews'
import Nav from '../ui/Nav'

function House() {
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
              <p className="text-xl font-bold">Phuket, Thailand</p>
              <p className="text-xs text-[#64748B]">2 Rooms · 2 Bathrooms</p>
            </div>
            <div className=" flex gap-3">
              <img
                className="h-12 rounded-full"
                src="https://randomuser.me/api/portraits/women/85.jpg"
                alt="user"
              />
              <div>
                <p className="text-sm text-[#64748B]">Hosted By</p>
                <p>Linda Smith</p>
              </div>
            </div>
            <div className="text-sm">
              Welcome to "Cloud Haven," an ethereal retreat nestled in the heart
              of the Floating Isles—an exclusive celestial escape that defies
              earthly conventions. Immerse yourself in the awe-inspiring
              ambiance of our levitating abodes, where gravity takes a vacation,
              and every moment feels like a dream. Your sanctuary in the sky
              boasts panoramic views of the ever-shifting cloudscapes, with beds
              that hover gently above the ground, providing a restful slumber
              amidst the clouds. Our ethereal hosts, luminescent beings known as
              Skykeepers, ensure your stay is both enchanting and otherworldly.
              Enjoy the sensation of dining on our cloud-borne terrace, where
              the menu is as diverse as the hues of the sunset. Venture beyond
              your celestial haven to discover floating gardens, where rare,
              otherworldly flora flourishes in the weightless atmosphere. Engage
              in celestial activities such as starlight yoga and cloud painting,
              or simply unwind in our spa, where treatments harness the
              rejuvenating power of cosmic energies. "Cloud Haven" is not just a
              getaway; it's a transcendental experience where the ordinary is
              left far below, and the extraordinary awaits you in the skies.
              Book your stay now and elevate your journey to new heights!
            </div>
          </div>
          <div className="align-top">
            <BookingForm />
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

// Extra Component for Booking and Leave Review

function BookingForm() {
  return (
    <div className="col-span-1">
      <div className="grid gap-2 border rounded border-[#E5E7EB] p-3 mb-4">
        <h6 className="font-bold">
          $120
          <span className="text-sm text-gray-400"> / night</span>
        </h6>
        <form className="flex flex-col gap-2 w-full ">
          <div className="flex gap-2">
            <div className="flex flex-col">
              <label className="text-sm font-thin text-gray-400">
                Check-in
              </label>
              <input className="border gap-2 pl-1" type="date" />
            </div>
            <div className="flex flex-col">
              <label className="text-sm font-thin text-gray-400">
                Check-out
              </label>
              <input className="border pl-1" type="date" />
            </div>
          </div>
          <textarea
            rows="7"
            className="border w-full resize-none pl-1"
            placeholder="Please send a message to the host..."
          ></textarea>
          <div className="flex justify-between items-center">
            <span>
              3 nights = <span className="font-bold">360</span>
            </span>
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

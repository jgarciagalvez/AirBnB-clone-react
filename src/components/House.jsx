import Gallery from './Gallery'
import Reviews from './Reviews'
import Nav from './Nav'

function House() {
  return (
    <div className="ml-10 mr-10">
      <Nav />
      <div className="grid grid-cols-2 gap-10 grid-rows-1 bg-pink-200">
        <div className="bg-pink-500">
          <img
            src="https://res.cloudinary.com/dsko6ntfj/image/upload/v1640295026/portal/web%20development%20beginners/05%20Project%20Airbnb/house%2001/house_01_01.png"
            alt=""
          />
        </div>
        <div className="bg-pink-500">
          <Gallery />
        </div>
      </div>
      <div className="grid grid-cols-3 gap-36  ">
        <div className=" col-span-2">
          <Location />
          <div className="text-xs m-5">
            <NumRooms /> Rooms - <NumBaths /> Bathrooms
          </div>
          <div className=" flex gap-2  m-5">
            <div className="bg-sky-500">3.1</div>
            <span>
              <div className="text-sm text-slate-400">Hosted By</div>
              <Host />
            </span>
          </div>
          <Description />
          <div className="m-5">
            <Reviews />
          </div>
        </div>
        <div>
          <div className="flex grid-cols-2 justify-between grid-rows-1 gap-2 border-2 border-gray-400 p-3 m-5">
            <div>
              <div>
                <NightlyPrice />
                <span className="text-sm text-gray-400"> / night</span>
              </div>
              <div>
                <NumOfNights />
                Nights = <span className="font-bold">$360</span>
              </div>
            </div>
            <div className="bg-sky-500">4.2 </div>
          </div>
          <div className="border-2 border-gray-400 p-4">
            <div>Leave a Review</div>
            <div>0</div>
            <div>
              <textarea className="w-full border-black-500 border-2 rows-5"></textarea>
              <button className="bg-black text-white m-1 p-1.5 rounded-m">
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

function NightlyPrice() {
  return <span className="font-bold">$120</span>
}

function NumOfNights() {
  return <span>3 </span>
}

function Location() {
  return <div className="text-xl font-bold m-5">Phuket, Thailand</div>
}

function NumRooms() {
  return <span>2 </span>
}

function NumBaths() {
  return <span>2 </span>
}

function Host() {
  return <div>Linda Smith</div>
}

function Description() {
  return (
    <div className="m-5 ml-10 text-sm">
      Welcome to "Cloud Haven," an ethereal retreat nestled in the heart of the
      Floating Isles—an exclusive celestial escape that defies earthly
      conventions. Immerse yourself in the awe-inspiring ambiance of our
      levitating abodes, where gravity takes a vacation, and every moment feels
      like a dream. Your sanctuary in the sky boasts panoramic views of the
      ever-shifting cloudscapes, with beds that hover gently above the ground,
      providing a restful slumber amidst the clouds. Our ethereal hosts,
      luminescent beings known as Skykeepers, ensure your stay is both
      enchanting and otherworldly. Enjoy the sensation of dining on our
      cloud-borne terrace, where the menu is as diverse as the hues of the
      sunset. Venture beyond your celestial haven to discover floating gardens,
      where rare, otherworldly flora flourishes in the weightless atmosphere.
      Engage in celestial activities such as starlight yoga and cloud painting,
      or simply unwind in our spa, where treatments harness the rejuvenating
      power of cosmic energies. "Cloud Haven" is not just a getaway; it's a
      transcendental experience where the ordinary is left far below, and the
      extraordinary awaits you in the skies. Book your stay now and elevate your
      journey to new heights!
    </div>
  )
}

export default House

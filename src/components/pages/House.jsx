import Gallery from '../ui/Gallery'
import Reviews from '../ui/Reviews'
import Nav from '../ui/Nav'

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
      <Nav />
      <div className="grid grid-cols-2 gap-10 grid-rows-1 ">
        <div className="">
          <img
            src="https://res.cloudinary.com/dsko6ntfj/image/upload/v1640295026/portal/web%20development%20beginners/05%20Project%20Airbnb/house%2001/house_01_01.png"
            alt=""
          />
        </div>
        <div className="">
          <Gallery />
        </div>
      </div>
      <div className="grid grid-cols-3 gap-5  ">
        <div className=" col-span-2">
          {/* LOCATION */}
          <div className="text-xl font-bold m-5">{house.location}</div>

          <div className="text-xs m-5">
            {/* Number of rooms and bathrooms */}
            <span>{house.rooms} </span> Rooms - <span>{house.bathrooms} </span>
            Bathrooms
          </div>
          {/* HOST */}
          <div className=" flex gap-2  m-5">
            <img
              className="h-12 rounded-full "
              src={house.host.picture}
              alt="user"
            />

            <span>
              <div className="text-sm text-slate-400">Hosted By</div>
              <div>
                {house.host.firstname} {house.host.lastname}
              </div>
            </span>
          </div>
          {/* DESCRIPTION */}
          <div className="m-5 ml-10 text-sm">{house.description}</div>
          <div className="m-5">
            <Reviews />
          </div>
        </div>
        <div className="col-span-1">
          <div className="grid gap-2 border rounded border-gray-400 p-3 mt-4 mb-4">
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
                  <input className="border gap-2" type="date" />
                </div>
                <div className="flex flex-col">
                  <label className="text-sm font-thin text-gray-400">
                    Check-out
                  </label>
                  <input className="border" type="date" />
                </div>
              </div>
              <textarea
                rows="7"
                className="border w-full"
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

          <div className="border rounded border-gray-400 p-4">
            <div>Leave a Review</div>
            <div>0</div>
            <div>
              <textarea className="w-full border-black-500 border rows-5"></textarea>
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

export default House

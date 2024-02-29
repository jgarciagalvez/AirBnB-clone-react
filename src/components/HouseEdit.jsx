import Nav from './Nav'
import { Link } from 'react-router-dom'

function HouseEdit() {
  const classNameInput = 'border border-[#E5E7EB] rounded-sm'
  const classNameLabel = 'text-[#64748B]'
  return (
    <div className="container mx-auto">
      <Nav />
      <div className="border-2 border-gray-300">
        <h2 className="ml-4 mt-3">Edit Your Listing</h2>
        <div className="grid grid-cols-11 gap-2">
          <div className="col-span-5 m-4">
            <form className="flex flex-col gap-2">
              <div className="flex flex-col gap-1">
                <label className={classNameLabel}>Location</label>
                <input className={classNameInput} type="text" />
              </div>
              <div className="flex flex-col gap-1">
                <label className={classNameLabel}>Bedrooms</label>
                <input className={classNameInput} type="number" />
              </div>
              <div className="flex flex-col gap-1">
                <label className={classNameLabel}>Bathrooms</label>
                <input className={classNameInput} type="number" />
              </div>
              <div className="flex flex-col gap-1">
                <label className={classNameLabel}>Price per night</label>
                <input className={classNameInput} type="number" />
              </div>
              <div className="flex flex-col gap-1">
                <label className={classNameLabel}>Description</label>
                <textarea className={classNameInput}></textarea>
              </div>
            </form>
            <button className="bg-red-500 text-white p-1 mr-3 mt-4 rounded-l">
              Save Changes
            </button>
            <Link to="/Listings">
              <button className="border border-gray-300 mt-4 p-1 hover:bg-red-500 hover:text-white rounded-l ">
                Cancel
              </button>
            </Link>
          </div>

          <form className="col-span-5 m-3 mr-4 col-start-7 flex flex-col gap-2">
            <label className={classNameLabel}>Photos </label>
            <div className="flex flex-col">
              <input className={classNameInput} type="text" />
            </div>
            <div className="flex flex-col">
              <input className={classNameInput} type="text" />
            </div>
            <div className="flex flex-col">
              <input className={classNameInput} type="text" />
            </div>
            <div className="flex flex-col">
              <input className={classNameInput} type="text" />
            </div>
            <div className="flex flex-col">
              <input className={classNameInput} type="text" />
            </div>
            <div className="flex flex-col">
              <input className={classNameInput} type="text" />
            </div>
            <div className="flex flex-col">
              <input className={classNameInput} type="text" />
            </div>
            <div className="flex flex-col">
              <input className={classNameInput} type="text" />
            </div>
            <div className="flex flex-col">
              <input className={classNameInput} type="text" />
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default HouseEdit

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faHouse,
  faBed,
  faDollarSign,
  faSort
} from '@fortawesome/free-solid-svg-icons'
function Filters() {
  return (
    <form>
      <div className="flex justify-between gap-5 grid-cols-5 grid-rows-1 m-3 bg-stone-100 p-2">
        <div className="w-full">
          <FontAwesomeIcon
            icon={faHouse}
            className="absolute mt-2 ml-1.5 w-4 h-4 pointer-events-none"
          />
          <select className="w-full border pl-7 py-1 rounded">
            <option>Any Location</option>
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
          </select>
        </div>
        <div className="w-full">
          <div className="">
            <FontAwesomeIcon
              icon={faBed}
              className="absolute mt-2 ml-1.5 w-4 h-4 pointer-events-none"
            />
          </div>
          <div className="">
            <select className="w-full border pl-7 py-1 rounded">
              <option>Any Rooms</option>
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
            </select>
          </div>
        </div>
        <div className="w-full">
          <FontAwesomeIcon
            icon={faDollarSign}
            className="absolute mt-2 ml-1.5 w-4 h-4 pointer-events-none"
          />
          <input
            className="border pl-7 py-1 rounded"
            type="number"
            placeholder="max price"
          />
        </div>
        <div className="w-full">
          <FontAwesomeIcon
            icon={faSort}
            className="absolute mt-2.5 ml-1.5 w-4 h-4 pointer-events-none"
          />
          <select className="w-full border pl-7 py-1 rounded">
            <option>sort by</option>
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
          </select>
        </div>
        <div className="w-full">
          <input
            className="w-full border pl-2 py-1 rounded text-sm"
            type="text"
            placeholder="keywords..."
          />
        </div>
        <div>
          <button className=" bg-[#FF5A5F] border text-white p-2 rounded-md ">
            Search
          </button>
        </div>
      </div>
    </form>
  )
}

export default Filters

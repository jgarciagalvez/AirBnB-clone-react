function Filters() {
  return (
    <form>
      <div className="flex justify-between gap-1 grid-cols-5 grid-rows-1 bg-sky-200 m-3">
        <div className="bg-sky-500">
          <select>
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
          </select>
        </div>
        <div className="bg-sky-500">
          <select>
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
          </select>
        </div>
        <div className="bg-sky-500">3</div>
        <div className="bg-sky-500">
          <select>
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
          </select>
        </div>
        <div className="bg-sky-500">5</div>
        <div className="bg-sky-500">6</div>
      </div>
    </form>
  )
}

export default Filters

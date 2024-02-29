import { Link } from 'react-router-dom'

function signup() {
  const classNameInput =
    'border border-[#E5E7EB] rounded-md h-10 placeholder:pl-4'
  const classNameLabel = 'text-[#64748B] pb-1 mt-2'
  return (
    <div className="container mx-auto flex justify-center">
      <div className="border border-[#E5E7EB] shadow-sm rounded-lg p-4 mt-4 w-[320px]">
        <div className="flex justify-center">
          <img
            src="https://res.cloudinary.com/dsko6ntfj/image/upload/v1642399114/portal/web%20development%20beginners/05%20Project%20Airbnb/assets/logo-airbnb.png"
            alt="AirBnB Logo"
            class="h-7"
          />
        </div>
        <div className="p-1">
          <form className="flex flex-col">
            <label className={classNameLabel}>First Name</label>
            <input type="text" className={classNameInput} />
            <label className={classNameLabel}>Last Name</label>
            <input type="text" className={classNameInput} />
            <label className={classNameLabel}>Email</label>
            <input type="email" className={classNameInput} />
            <label className={classNameLabel}>Password</label>
            <input type="password" className={classNameInput} />
            <label className={classNameLabel}>Profile Picture</label>
            <input
              type="text"
              placeholder="https://..."
              className={classNameInput}
            />
            <button className="bg-[#FB7185] text-white text-lg p-2 my-5 rounded-md">
              Register
            </button>
          </form>
        </div>
        <div className="ml-1 text-sm">
          <p>
            Already have an account?
            <span className="text-[#F43F5E]">
              <Link to="/login"> Login here</Link>
            </span>
          </p>
        </div>
      </div>
    </div>
  )
}

export default signup

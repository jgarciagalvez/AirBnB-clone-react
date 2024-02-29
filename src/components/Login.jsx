import { Link } from 'react-router-dom'
function login() {
  return (
    <div class="flex mx-auto justify-center m-5">
      <div className="border-2 p-6 rounded-md w-72">
        <div className="flex justify-center">
          <img
            className="h-12"
            src="https://www.vectorlogo.zone/logos/airbnb/airbnb-ar21.svg"
            alt="AirBnB Logo"
          />
        </div>
        <form className="grid gap-3">
          <div>
            <div className="text-stone-500 text-sm">Email</div>
            <input type="email" class="border w-full p-1" />
          </div>
          <div>
            <div className="text-stone-500 text-sm">Password</div>
            <input type="email" class="border w-full p-1" />
          </div>
          <button className=" bg-[#FF5A5F] border text-white p-2 rounded-md w-full">
            Login
          </button>
          <div className="text-sm">
            New to Airbnb?{' '}
            <Link
              className="text-[#FF5A5F] underline underline-offset-4"
              to="/signup"
            >
              Create an Account
            </Link>
          </div>
        </form>
      </div>
    </div>
  )
}

export default login

import { Link, useNavigate } from 'react-router-dom'
import { useState } from 'react'
import axios from 'axios'

axios.defaults.withCredentials = true

function Login() {
  // State
  const [error, setError] = useState('')
  const navigate = useNavigate()

  // Handle Form Data
  const submitForm = async (e) => {
    e.preventDefault()

    // API call to verify credentials
    try {
      const response = await axios.post(
        `${process.env.REACT_APP_API_URL_PATH}/login`,
        {
          email: e.target.email.value,
          password: e.target.password.value
        }
      )
      if (response.data.error) {
        setError(response.data.error)
        return
      }
      localStorage.setItem('isLoggedIn', true)
    } catch (err) {
      alert(err.message)
    }

    // Fetch Profile pic from API
    try {
      const response = await axios.get(
        `${process.env.REACT_APP_API_URL_PATH}/profile`
      )
      const profilePic = response.data.picture
      localStorage.setItem('picture', profilePic)
      navigate('/')
    } catch (err) {
      alert(err.message)
    }
  }

  // JSX
  return (
    <div className="flex mx-auto justify-center m-5">
      <div className="border-2 p-6 rounded-md w-72">
        <div className="flex justify-center">
          <img
            className="h-12"
            src="https://www.vectorlogo.zone/logos/airbnb/airbnb-ar21.svg"
            alt="AirBnB Logo"
          />
        </div>

        <form onSubmit={submitForm} className="grid gap-3">
          <div>
            <label className="text-stone-500 text-sm">Email:</label>
            <input type="text" name="email" className="border w-full p-1" />
          </div>
          <div>
            <label className="text-stone-500 text-sm">Password:</label>
            <input
              type="password"
              name="password"
              className="border w-full p-1"
            />
          </div>
          <button className=" bg-[#FF5A5F] border text-white p-2 rounded-md w-full">
            Login
          </button>
          <div className="text-red-500">{error}</div>

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

export default Login

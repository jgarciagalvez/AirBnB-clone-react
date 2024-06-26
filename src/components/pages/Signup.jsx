import { Link, useNavigate } from 'react-router-dom'
import { useState } from 'react'
import axios from 'axios'
import Nav from '../ui/Nav'

axios.defaults.withCredentials = true

function Signup() {
  // Variables and State
  const [validEmail, setValidEmail] = useState(true)
  const [validPassword, setValidPassword] = useState(true)
  const [error, setError] = useState('')
  const navigate = useNavigate()

  // Input Validation
  const validateEmail = (email) => {
    if (email.includes('@') && email.includes('.')) {
      setValidEmail(true)
    } else {
      setValidEmail(false)
    }
  }
  const validatePassword = (password) => {
    if (password.length >= 6) {
      setValidPassword(true)
    } else {
      setValidPassword(false)
    }
  }

  // Form Submit
  const submitForm = async (e) => {
    e.preventDefault()
    const response = await axios.post(
      `${process.env.REACT_APP_API_URL_PATH}/signup`,
      {
        first_name: e.target.first_name.value,
        last_name: e.target.last_name.value,
        email: e.target.email.value,
        password: e.target.password.value,
        profile_pic: e.target.profile_pic.value
      }
    )
    if (response.data.error) {
      setError(response.data.error)
    } else {
      localStorage.setItem('isLoggedIn', true)
      localStorage.setItem('profile_pic', e.target.profile_pic.value)
      navigate('/')
    }
  }

  // Form elements styling
  const classNameInput = 'border border-[#E5E7EB] rounded-md h-10 pl-4'
  const classNameLabel = 'text-[#64748B] pb-1 mt-2 font-extralight'

  // JSX
  return (
    <div className="container mx-auto">
      <Nav />
      <div className="flex flex-col justify-center items-center min-h-screen mx-3">
        <div className="text-center align-middle text-red-500 text-[8px] md:text-sm">
          * This is a simple React App and security might not be top class.
          Please do not use real passwords or add sensitive info. <br />* Esto
          es una aplicación sencilla de React. No uses contraseñas reales o
          información personal sensible.
        </div>
        <div className="border border-[#E5E7EB] shadow-md rounded-lg p-4 my-4 md:w-1/3">
          <div className="flex justify-center">
            <img
              src="https://res.cloudinary.com/dsko6ntfj/image/upload/v1642399114/portal/web%20development%20beginners/05%20Project%20Airbnb/assets/logo-airbnb.png"
              alt="AirBnB Logo"
              className="h-[24px]"
            />
          </div>

          <div className="p-1">
            <form onSubmit={submitForm} className="flex flex-col">
              <label className={classNameLabel}>First Name</label>
              <input type="text" name="first_name" className={classNameInput} />
              <label className={classNameLabel}>Last Name</label>
              <input type="text" name="last_name" className={classNameInput} />
              <label className={classNameLabel}>Email</label>
              <input
                type="email"
                name="email"
                onChange={(e) => validateEmail(e.target.value)}
                className={classNameInput}
              />
              {!validEmail && (
                <span className="text-[#FB7185]">Invalid Email</span>
              )}
              <label className={classNameLabel}>Password</label>
              <input
                type="password"
                name="password"
                onChange={(e) => validatePassword(e.target.value)}
                className={classNameInput}
              />
              {!validPassword && (
                <span className="text-[#FB7185]">Password too short</span>
              )}
              <label className={classNameLabel}>Profile Picture</label>
              <input
                type="text"
                name="profile_pic"
                placeholder="https://..."
                className={classNameInput}
              />
              <button className="bg-[#FB7185] text-white text-lg p-2 my-5 rounded-md">
                Register
              </button>
              <div className="text-red-500">{error}</div>
            </form>
          </div>
          <div className="text-center align-middle text-sm">
            <p className="font-extralight">Already have an account? </p>
            <p className="font-extralight">
              <Link
                to="/login"
                className="underline underline-offset-4 text-[#FB7185] ml-2"
              >
                Login here
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Signup

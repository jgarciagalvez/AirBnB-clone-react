import { Link, useNavigate } from 'react-router-dom'
import { useState } from 'react'
import axios from 'axios'
function Signup() {
  const [validEmail, setValidEmail] = useState('true')
  const [error, setError] = useState('')
  const navigate = useNavigate()
  const validateEmail = (email) => {
    if ((email.includes('@') && email.includes('.')) || !email) {
      console.log(email)
      setValidEmail(true)
    } else {
      console.log('not valid')
      setValidEmail(false)
    }
  }
  const classNameInput = 'border border-[#E5E7EB] rounded-md h-10 pl-4'
  const classNameLabel = 'text-[#64748B] pb-1 mt-2 font-extralight'
  const submitForm = async (e) => {
    e.preventDefault()
    console.log(e.target.email.value)
    console.log(e.target.password.value)

    const response = await axios.post('https://haiku-bnb.onrender.com/signup', {
      firstName: e.target.firstName.value,
      lastName: e.target.lastName.value,
      email: e.target.email.value,
      password: e.target.password.value,
      profile: e.target.profile.value
    })
    if (response.data.error) {
      setError(response.data.error)
    } else {
      navigate('/')
    }
  }
  return (
    <div className="container mx-auto flex justify-center">
      <div className="border border-[#E5E7EB] shadow-md rounded-lg p-4 mt-4 w-[320px]">
        <div className="flex justify-center">
          <img
            src="https://res.cloudinary.com/dsko6ntfj/image/upload/v1642399114/portal/web%20development%20beginners/05%20Project%20Airbnb/assets/logo-airbnb.png"
            alt="AirBnB Logo"
            class="h-[24px]"
          />
        </div>
        <div className="p-1">
          <form onSubmit={submitForm} className="flex flex-col">
            <label className={classNameLabel}>First Name</label>
            <input type="text" name="firstName" className={classNameInput} />
            <label className={classNameLabel}>Last Name</label>
            <input type="text" name="lastName" className={classNameInput} />
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
            <input type="password" name="password" className={classNameInput} />
            {!validEmail && (
              <span className="text-[#FB7185]">Password too short</span>
            )}
            <label className={classNameLabel}>Profile Picture</label>
            <input
              type="text"
              name="profile"
              placeholder="https://..."
              className={classNameInput}
            />
            <button className="bg-[#FB7185] text-white text-lg p-2 my-5 rounded-md">
              Register
            </button>
          </form>
        </div>
        <div className="ml-1 text-sm">
          <p className="font-extralight">
            Already have an account?
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
  )
}

export default Signup

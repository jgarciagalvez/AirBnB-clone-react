import Nav from '../ui/Nav'
import { useEffect, useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

axios.defaults.withCredentials = true

function Profile() {
  // Styling variables
  const classNameInput = 'border border-[#E5E7EB] rounded-sm h-10 w-full pl-4'
  const classNameLabel = 'text-[#64748B] pb-1 mt-4 block'

  // UseState Variables
  const [user, setUser] = useState({})
  const [picture, setPicture] = useState('')
  const navigate = useNavigate()

  //Log User Out
  const logout = async () => {
    try {
      const { data } = await axios.get(
        `${process.env.REACT_APP_API_URL_PATH}/logout`
      )
      if (data.message.includes('logged out')) {
        localStorage.removeItem('isLoggedIn')
        localStorage.removeItem('picture')
        navigate('/')
      }
    } catch (err) {
      alert(err.message)
    }
  }

  const getData = async () => {
    try {
      const response = await axios.get(
        `${process.env.REACT_APP_API_URL_PATH}/profile`
      )
      if (response.data.error) {
        navigate('/')
      } else {
        setUser(response.data)
        setPicture(response.data.picture)
        localStorage.setItem('picture', response.data.picture)
      }
    } catch (e) {
      alert(e.message)
    }
  }

  useEffect(() => {
    getData()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  // Modify User with Form Inputs
  const modifyUser = async (e) => {
    e.preventDefault()
    const form = new FormData(e.target)
    const formObj = Object.fromEntries(form.entries())
    try {
      const { data } = await axios.patch(
        `${process.env.REACT_APP_API_URL_PATH}/profile`,
        formObj
      )

      // Handle API response
      data.error ? alert(data.error) : alert('your changes have been saved')
    } catch (e) {
      alert(e.message)
    }
  }

  return (
    <div className="container mx-auto">
      <Nav />
      <div className="flex flex-col border border-[#E5E7EB] shadow-sm rounded-lg m-2 p-5">
        <div className="text-xl font-bold mb-4">Your Profile</div>
        <div className="">
          <form className="gap-5" onSubmit={modifyUser}>
            <div className="flex items-center gap-3">
              <img
                src={picture}
                alt="ProfilePic"
                className="rounded-full bg-center w-20"
              />
              <input
                name="picture"
                type="text"
                className={classNameInput}
                value={picture}
                onChange={(e) => setPicture(e.target.value)}
              />
            </div>
            <label className={classNameLabel}>First Name</label>
            <input
              name="first_name"
              type="text"
              className={classNameInput}
              defaultValue={user.first_name}
            />

            <label className={classNameLabel}>Last Name</label>
            <input
              name="last_name"
              type="text"
              className={classNameInput}
              defaultValue={user.last_name}
            />

            <label className={classNameLabel}>Email</label>
            <input
              name="email"
              type="email"
              className={classNameInput}
              defaultValue={user.email}
            />
            <div className="flex justify-between mt-4">
              <button
                type="submit"
                className="bg-[#FB7185] text-white text-md py-2 px-5 rounded-md"
              >
                Save Changes
              </button>
              <button
                type="button"
                onClick={logout}
                className="border border-[#E5E7EB] text-md py-2 px-5 rounded-md"
              >
                Logout
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Profile

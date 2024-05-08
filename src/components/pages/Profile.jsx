import Nav from '../ui/Nav'
import { useEffect, useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

axios.defaults.withCredentials = true

function Profile() {
  // Styling variables
  const classNameInput =
    'border border-[#E5E7EB] rounded-sm h-8 md:h-10 w-full pl-4'
  const classNameLabel = 'text-[#64748B] pb-1 mt-4 block'

  // UseState Variables
  const [user, setUser] = useState({})
  const navigate = useNavigate()

  //Log User Out
  const logout = async () => {
    try {
      const { data } = await axios.get(
        `${process.env.REACT_APP_API_URL_PATH}/logout`
      )
      if (data.message.includes('logged out')) {
        localStorage.removeItem('isLoggedIn')
        localStorage.removeItem('profile_pic')
        navigate('/')
      }
    } catch (err) {
      alert(err.message)
    }
  }

  // Get Profile Data
  const getProfileData = async () => {
    try {
      const response = await axios.get(
        `${process.env.REACT_APP_API_URL_PATH}/profile`
      )
      if (!response.data.error) {
        setUser(response.data)
      } else {
        alert('Please login to view this page')
        navigate('/login')
      }
    } catch (e) {
      alert(e.message)
    }
  }

  const updateProfilePic = (url) => {
    setUser({ ...user, profile_pic: url })
  }

  useEffect(() => {
    getProfileData()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  // Modify User
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
      if (data.error) {
        alert(data.error)
      } else {
        localStorage.setItem('profile_pic', formObj.profile_pic)
        alert('your changes have been saved')
      }
    } catch (e) {
      alert(e.message)
    }
  }

  return (
    <div className="container mx-auto">
      <Nav />
      <div className="flex flex-col border border-[#E5E7EB] shadow-sm rounded-lg m-2 p-5">
        <div className="md:text-xl font-bold mb-4">Your Profile</div>
        <div className="">
          <form className="gap-5" onSubmit={modifyUser}>
            <div className="flex items-center gap-3">
              <img
                src={user.profile_pic}
                alt="ProfilePic"
                className="rounded-full bg-center w-14 md:w-20"
              />
              <input
                name="profile_pic"
                type="text"
                className={classNameInput}
                value={user.profile_pic}
                onChange={(e) => updateProfilePic(e.target.value)}
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
                className="bg-[#FB7185] text-white md:text-md p-2 md:px-5 rounded-md"
              >
                Save Changes
              </button>
              <button
                type="button"
                onClick={logout}
                className="border border-[#E5E7EB] md:text-md p-2 md:px-5 rounded-md"
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

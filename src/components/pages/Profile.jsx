import Nav from '../ui/Nav'
import { useState } from 'react'

function Profile() {
  const classNameInput = 'border border-[#E5E7EB] rounded-sm h-10 w-full pl-4'
  const classNameLabel = 'text-[#64748B] pb-1 mt-4 block'
  const [picture, setPicture] = useState(
    'https://randomuser.me/api/portraits/men/81.jpg'
  )

  return (
    <div className="container mx-auto">
      <Nav />
      <div className="flex flex-col border border-[#E5E7EB] shadow-sm rounded-lg m-2 p-5">
        <div className="text-xl font-bold mb-4">Your Profile</div>
        <div className="">
          <form className="gap-5">
            <div className="flex items-center	gap-3">
              <img
                src={picture}
                alt="ProfilePic"
                class="rounded-full bg-center w-20"
              />
              <input
                type="text"
                className={classNameInput}
                placeholder="https://randomuser.me/api/portraits/men/73.jpg"
                onChange={(e) => setPicture(e.target.value)}
              />
            </div>
            <label className={classNameLabel}>First Name</label>
            <input type="text" className={classNameInput} placeholder="John" />

            <label className={classNameLabel}>Last Name</label>
            <input type="text" className={classNameInput} placeholder="Lopez" />

            <label className={classNameLabel}>Email</label>
            <input
              type="email"
              className={classNameInput}
              placeholder="John.Lopez@gmail.com"
            />
            <div className="flex justify-between mt-4">
              <button className="bg-[#FB7185] text-white text-md py-2 px-5 rounded-md">
                Save Changes
              </button>
              <button className="border border-[#E5E7EB] text-md py-2 px-5 rounded-md">
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

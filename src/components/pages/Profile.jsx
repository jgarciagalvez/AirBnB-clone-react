import Nav from '../ui/Nav'
function profile() {
  const classNameInput = 'border border-[#E5E7EB] rounded-sm h-10 w-full pl-4'
  const classNameLabel = 'text-[#64748B] pb-1 mt-4 block font-extralight'
  return (
    <div className="container mx-auto">
      <Nav />
      <div className="flex flex-col border border-[#E5E7EB] shadow-sm rounded-lg m-2 p-5">
        <div className="text-xl font-bold mb-4">Your Profile</div>
        <div className="">
          <form className="gap-5">
            <div className="flex items-center	gap-3">
              <img
                src="https://randomuser.me/api/portraits/men/81.jpg"
                alt="ProfilePic"
                class="rounded-full bg-center w-20"
              />
              <input
                type="text"
                className={classNameInput}
                value="https://randomuser.me/api/portraits/men/81.jpg"
              />
            </div>
            <label className={classNameLabel}>First Name</label>
            <input type="text" className={classNameInput} value="John" />

            <label className={classNameLabel}>Last Name</label>
            <input type="text" className={classNameInput} value="Lopez" />

            <label className={classNameLabel}>Email</label>
            <input
              type="email"
              className={classNameInput}
              value="John.Lopez@gmail.com"
            />
            <div className="flex justify-between mt-4">
              <button className="bg-[#FB7185] text-white text-md py-2 px-5 rounded-md">
                Save Changes
              </button>
              <button className="border border-[#E5E7EB] text-sm p-1 rounded-md">
                Logout
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default profile

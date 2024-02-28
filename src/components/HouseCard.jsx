import IconChatbubbleEllipsesOutline from './icons/reviewsIcon'

function HouseCard() {
  return (
    <div className="border border-solid border-stone-200 rounded-sm gap-3">
      <div className="border border-solid border-stone-200 justify-center">
        image
      </div>
      <div className="p-2">
        <p className="font-bold text-l">Phuket, Thailand</p>
        <p className="font-thin text-sm text-[#64748B]">
          2 Rooms · 2 Bathrooms
        </p>
        <p className="font-bold text-lg mt-2">$120</p>
        <div className="flex justify-between">
          <div className="flex gap-2">
            <div className="">Stars</div>
            <div className="">1</div>
          </div>
          <div className="flex gap-2 items-center">
            <div className="">34</div>
            <div className="">
              <IconChatbubbleEllipsesOutline className="w-5 h-5 text-sky-600" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HouseCard

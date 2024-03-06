export default function Gallery({ images }) {
  const imgStyle = 'hover:shadow-md rounded-md h-auto'
  return (
    <div className="grid sm:grid-cols-2 gap-2">
      {/* Featured Picture */}
      <div className="rounded-md md:min-h-[200px] sm:min-h-[100px] bg-cover bg-center bg-[url('https://res.cloudinary.com/dsko6ntfj/image/upload/v1640295026/portal/web%20development%20beginners/05%20Project%20Airbnb/house%2001/house_01_01.png')]">
        <img scr={[0]} alt="" />
      </div>
      {/* Gallery Pictures*/}
      <div className="grid gap-1.5 md:grid-cols-3 sm:grid-cols-2">
        {images.map((image, i) => (
          <img scr={image} key={i} alt="" />
        ))}
      </div>
    </div>
  )
}

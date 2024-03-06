import { useState } from 'react'
function Gallery({ images }) {
  const [mainImage, setMainImage] = useState(images[0])
  return (
    <div className="grid sm:grid-cols-2 gap-2">
      {/* Featured Picture */}
      <div className="rounded-md md:min-h-[200px] sm:min-h-[100px]">
        <img scr={mainImage} alt="" />
      </div>
      {/* Gallery Pictures*/}
      <div className="grid gap-1.5 md:grid-cols-3 sm:grid-cols-2hover:shadow-md rounded-md h-auto">
        {images.map((image, i) => (
          <img
            scr={image}
            key={i}
            alt=""
            onClick={(event) => {
              console.log(image)
              setMainImage(image)
            }}
          />
        ))}
      </div>
    </div>
  )
}
export default Gallery

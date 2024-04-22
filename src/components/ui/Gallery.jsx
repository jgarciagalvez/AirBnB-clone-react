import { useState } from 'react'

function Gallery({ images }) {
  const [mainImage, setMainImage] = useState(images[0])

  return (
    <div className="grid sm:grid-cols-2 gap-2">
      {/* Featured Picture */}
      <div className="col-span-2 md:col-span-1">
        <div
          className="bg-cover rounded bg-center md:min-h-[200px] min-h-[100px]"
          style={{ height: '100%', backgroundImage: 'url(' + mainImage + ')' }}
        ></div>
      </div>

      {/* Gallery Pictures*/}
      <div className="col-span-2 md:col-span-1 grid gap-1.5 grid-cols-3 hover:shadow-md rounded-md h-auto">
        {images.map((image, i) => (
          <div
            key={i}
            className="bg-cover bg-center rounded cursor-pointer h-14 md:h-24"
            onClick={(event) => {
              setMainImage(image)
            }}
            style={{ backgroundImage: 'url(' + image + ')' }}
          />
        ))}
      </div>
    </div>
  )
}
export default Gallery

import HouseCard from '../ui/HouseCard'
import Filters from '../ui/Filters'
import Nav from '../ui/Nav'

const houses = [
  {
    id: 1,
    location: 'Koh Phangan, Thailand',
    rooms: 3,
    bathrooms: 4,
    description: 'This house.... is a very very very fine house!',
    price: 700,
    rating: 4.2,
    host: {
      firstname: 'Barbara',
      lastname: 'Streisand',
      picture: 'https://randomuser.me/api/portraits/women/51.jpg'
    }
  },
  {
    id: 2,
    location: 'Lake District, UK',
    rooms: 5,
    bathrooms: 3,
    description: 'Charming cottage with stunning lake views.',
    price: 850,
    rating: 4.7,
    host: {
      firstname: 'James',
      lastname: 'Smith',
      picture: 'https://randomuser.me/api/portraits/men/15.jpg'
    }
  },
  {
    id: 3,
    location: 'Santorini, Greece',
    rooms: 2,
    bathrooms: 2,
    description: 'Luxurious villa with a breathtaking sunset view.',
    price: 950,
    rating: 4.9,
    host: {
      firstname: 'Elena',
      lastname: 'Papadopoulos',
      picture: 'https://randomuser.me/api/portraits/women/24.jpg'
    }
  },
  {
    id: 4,
    location: 'Kyoto, Japan',
    rooms: 4,
    bathrooms: 2,
    description: 'Traditional Japanese house in a peaceful neighborhood.',
    price: 600,
    rating: 4.5,
    host: {
      firstname: 'Hiroshi',
      lastname: 'Takashi',
      picture: 'https://randomuser.me/api/portraits/men/29.jpg'
    }
  },
  {
    id: 5,
    location: 'Queenstown, New Zealand',
    rooms: 3,
    bathrooms: 3,
    description: 'Modern home with stunning mountain views.',
    price: 800,
    rating: 4.6,
    host: {
      firstname: 'Lucy',
      lastname: 'Johnson',
      picture: 'https://randomuser.me/api/portraits/women/34.jpg'
    }
  },
  {
    id: 6,
    location: 'Aspen, Colorado, USA',
    rooms: 6,
    bathrooms: 5,
    description: 'Luxury ski chalet close to the slopes.',
    price: 1200,
    rating: 4.8,
    host: {
      firstname: 'Michael',
      lastname: 'Brown',
      picture: 'https://randomuser.me/api/portraits/men/42.jpg'
    }
  }
]

function Houses() {
  return (
    <div className="container mx-auto">
      <Nav />
      {/* Filters */}
      <Filters />

      {/* Show HouseCards for filtered Houses */}
      <div className="grid gap-4 grid-cols-5 grid-rows-2 mt-3">
        {houses.map((house) => (
          <HouseCard id={house.id} house={house} />
        ))}
      </div>
    </div>
  )
}

export default Houses

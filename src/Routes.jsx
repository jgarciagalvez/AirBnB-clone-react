import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Houses from './components/Houses'
import House from './components/House'
import Profile from './components/Profile'
import Listings from './components/Listings'
import HouseEdit from './components/HouseEdit'
import Bookings from './components/Bookings'
import Signup from './components/Signup'
import Login from './components/Login'
function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Houses />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/listings" element={<Listings />} />
        <Route path="/houses/:id" element={<House />} />
        <Route path="/houses" element={<Houses />} />
        <Route path="/houses/:id/edit" element={<HouseEdit />} />
        <Route path="/bookings" element={<Bookings />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  )
}

export default Router

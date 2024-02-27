import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Houses from './components/Houses'
import Profile from './components/Profile'
import Listings from './components/Listings'

function Router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Houses />} />
                <Route path='/profile' element={<Profile />} />
                <Route path='/listings' element ={<Listings />} />
            </Routes>
        </BrowserRouter>
    )
}

export default Router
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Home from './components/Home'
import Houses from './components/Houses'
import HouseEdit from './components/HouseEdit'

function Router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/houses/:id' element={<Houses />} />
                <Route path='/houses' element={<Houses />} />
                <Route path='/houses/:id/edit' element={<HouseEdit />} />
            </Routes>
        </BrowserRouter>
    )
}

export default Router
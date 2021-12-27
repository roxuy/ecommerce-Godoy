import React from 'react'
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import ItemDetailContainer from '../components/ItemDetailContainer'
import ItemListContainer from '../components/ItemListContainer'
import NavBar from '../components/NavBar'
import CartLayout from '../layout/CartLayout'

const AppRoutes = () => {
    return (
        <BrowserRouter>
            <NavBar/>
            <Routes>
                <Route path='/' element={<ItemListContainer/>}/>
                <Route path='/category/:id' element={<ItemListContainer/>}/>
                <Route path='/item/:id' element={<ItemDetailContainer/>}/>
                <Route path='/cart' element={<CartLayout/>}/>
            </Routes>
        </BrowserRouter>
    )
}

export default AppRoutes

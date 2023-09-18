import {
    BrowserRouter,
    Routes,
    Route
} from 'react-router-dom'
import Navbar from '../components/Navbar/Navbar'
import ItemListContainer from '../containers/ItemListContainer/ItemListContainer'
import ItemDetailContainer from '../containers/ItemDetailContainer/ItemDetailContainer'
import Cart from '../components/Cart/cart'


export default function Router () {
    return (
        <BrowserRouter>
            <Navbar />
        <Routes>
            <Route path='/' element={<ItemListContainer />}></Route>
            <Route path='/categoria/:id' element={<ItemListContainer />}></Route>
            <Route path='/item/:id' element={<ItemDetailContainer />}></Route>
            <Route path='/Cart' element={<Cart/>}></Route>
        </Routes>
        </BrowserRouter>
    )



}
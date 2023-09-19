import {
    BrowserRouter,
    Routes,
    Route
} from 'react-router-dom'
import Navbar from '../components/Navbar/Navbar'
import ItemListContainer from '../containers/ItemListContainer/ItemListContainer'
import ItemDetailContainer from '../containers/ItemDetailContainer/ItemDetailContainer'
import CartView from '../components/Cart/CartView'
import { CartProvider } from '../components/CartProvider/CartProvider'


export default function Router () {
    return (
        <BrowserRouter>
        <CartProvider>
            <Navbar />
        <Routes>
            <Route path='/' element={<ItemListContainer />}></Route>
            <Route path='/categoria/:id' element={<ItemListContainer />}></Route>
            <Route path='/item/:id' element={<ItemDetailContainer />}></Route>
            <Route path='/cart' element={<CartView/>}></Route>
        </Routes>
        </CartProvider>
        </BrowserRouter>
    )



}
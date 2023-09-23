import {
    BrowserRouter,
    Routes,
    Route
} from 'react-router-dom'
import Navbar from '../components/Navbar/Navbar'
import ItemListContainer from '../containers/ItemListContainer/ItemListContainer'
import ItemDetailContainer from '../containers/ItemDetailContainer/ItemDetailContainer'
import CartView from '../components/CartView/CartView'
import { CartProvider } from '../components/CartProvider/CartProvider'
import CheckoutPage from '../components/Checkout/Checkout'
import Historial from '../components/Historial/Historial'


export default function Router() {
    return (
        <BrowserRouter>
            <CartProvider>
                <Navbar />
                <Routes>
                    <Route path='/' element={<ItemListContainer />}></Route>
                    <Route path='/categoria/:id' element={<ItemListContainer />}></Route>
                    <Route path='/item/:id' element={<ItemDetailContainer />}></Route>
                    <Route path='/cart' element={<CartView />}></Route>
                    <Route path='/checkout' element={<CheckoutPage />}></Route>
                    <Route path='/historial' element={<Historial />}></Route>
                </Routes>
            </CartProvider>
        </BrowserRouter>
    )



}
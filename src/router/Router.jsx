import {
    BrowserRouter,
    Routes,
    Route
} from 'react-router-dom'
import Navbar from '../components/Navbar/Navbar'
import ItemListContainer from '../components/ItemListContainer/ItemListContainer'


export default function Router () {
    return (
        <BrowserRouter>
            <Navbar />
        <Routes>
            <Route path='/' element={<ItemListContainer />}></Route>
            <Route path='/categoria/:id' element={<ItemListContainer />}></Route>
        </Routes>
        </BrowserRouter>
    )


//<Route path='/categoria/:id' element={<ItemListContainer />}></Route>

}
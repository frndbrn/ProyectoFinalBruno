import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import styles from './styles.module.css'
import { useCart } from '../CartProvider/CartProvider'
import { Link, useLocation } from 'react-router-dom'

export default function CartWidget() {
    const { cartItems } = useCart()
    const totalCarrito = cartItems.reduce((total, item) => total + item.unidades, 0)
    const location = useLocation()




    return (
        <div className={styles['carrito']}>
            <Link to="/cart" className={`nav-item nav-link  ${location.pathname === "/cart" ? styles["resaltado"] : ""}`}> <FontAwesomeIcon icon={faShoppingCart} /></Link>
            <p>{totalCarrito}</p>
        </div>
    )

}


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import styles from './styles.module.css'
import { useCart } from '../CartProvider/CartProvider'

export default function CartWidget () {
    const { cartItems } = useCart()
    const totalCarrito = cartItems.reduce((total, item) => total + item.unidades, 0)



    return(
        <div className={styles['carrito']}>
            <FontAwesomeIcon icon={faShoppingCart} />
            <p>{totalCarrito}</p>
        </div>
    )

}



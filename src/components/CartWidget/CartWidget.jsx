// importación de iconos de Font Awesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import styles from './styles.module.css'

export default function CartWidget () {

    return(
        <div className={styles['carrito']}>
            <FontAwesomeIcon icon={faShoppingCart} />
            <p>1</p>
        </div>
    )

}



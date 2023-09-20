import styles from './styles.module.css'
import { useCart } from '../CartProvider/CartProvider'

export default function CartItem ({id, rutaImagen, nombre, precio, unidades}) {
    const { eliminarDelCarrito, montoFinal } = useCart()

    const eliminarProducto = () => {
      eliminarDelCarrito(id)
    }

    const subtotal = unidades * precio

    return(
        <div className={styles['descripcion']}>
            <img src={rutaImagen} alt={nombre} className={styles['imagenCarrito']}/>
              <p>{nombre}</p>
              <p>Precio: ${precio}</p>
              <p>Unidades: {unidades}</p>
              <p>Subtotal: ${subtotal}</p>
              <button onClick={eliminarProducto} className={styles['boton']}>Eliminar</button>
        </div>

    )
}

import { useState } from "react"
import { useCart } from "../CartProvider/CartProvider"
import styles from './style.module.css'


export default function ItemCount({ detalles, id }) {

    const [valorContador, setValorContador] = useState(1)
    const { agregarACarrito } = useCart()

    const sumar = () => {
        valorContador < detalles.stock && setValorContador(valorContador + 1)
    }
    const restar = () => {
        valorContador > 1 && setValorContador(valorContador - 1)
    }


    const handleAddToCart = () => {
        const producto = {
            id: id,
            rutaImagen: detalles.rutaImagen,
            nombre: detalles.nombre,
            artista: detalles.artista,
            precio: detalles.precio,
            stock: detalles.stock,
            unidades: valorContador
        }
        agregarACarrito(producto)
    }
    return (
        <div className={styles['product-counter']}>
            <p>Cantidad a agregar: {valorContador}</p>
            <div className={styles['counter-buttons']}>
                <button className={styles['aumentar']} onClick={sumar}>+</button>
                <button className={styles['disminuir']} onClick={restar}>-</button>
            </div>
            <button className={styles['agregar']} onClick={handleAddToCart}>Agregar al carrito</button>
        </div>
    )
}
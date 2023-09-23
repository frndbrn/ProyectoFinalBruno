import { Link } from 'react-router-dom'
import styles from './styles.module.css'
import { useCart } from '../CartProvider/CartProvider'




export default function Item({ id, rutaImagen, nombre, artista, precio, stock }) {

  const { agregarACarrito } = useCart()

  const handleAddToCart = () => {
    const producto = {
      id,
      rutaImagen,
      nombre,
      artista,
      precio,
      stock,
      unidades: 1,
    }
    agregarACarrito(producto)
  }



  return (
    <div className={styles['container']}>
      <img src={rutaImagen} alt="portada del disco" className={styles['foto']} />
      <h2>{nombre}</h2>
      <p>${precio}</p>
      <Link to={`/item/${id}`} className={styles['boton']}>Detalles</Link>
      <button className={styles['boton']} onClick={handleAddToCart}>Agregar a carrito</button>
    </div>
  )
}
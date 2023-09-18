import { Link } from 'react-router-dom'
import styles from './styles.module.css'



export default function Item({id, rutaImagen, nombre, artista, precio}) {
    return (
        <div className={styles['container']}>
            <img src={rutaImagen} alt="portada del disco" className={styles['foto']} />
            <h2>{nombre}</h2>
            <p>{artista}</p>
            <p>${precio}</p>
            <Link to={`/item/${id}`} className={styles['boton']}>Detalles</Link>
            <button className={styles['boton']}>Agregar a carrito</button>
        </div>
    )
}
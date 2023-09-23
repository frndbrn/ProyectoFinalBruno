import { Link } from "react-router-dom"
import styles from './styles.module.css'
import ItemCount from "../ItemCount/ItemCount"

export default function ItemDetail({ detalles, id }) {


    return (
        <div className={styles['detalles']}>
            <div>
                <Link to='/' className={styles['boton']}>Volver</Link>
                <img src={detalles.rutaImagen} alt="portada del album" />
            </div>
            <h2>Nombre del álbum: {detalles.nombre}</h2>
            <h2>Artista: {detalles.artista}</h2>
            <h3>Categoría: {detalles.categoria}</h3>
            <p>Precio: ${detalles.precio}</p>
            <p>Unidades: {detalles.stock}</p>
            <ItemCount detalles={detalles} id={id} />
        </div>
    )
}



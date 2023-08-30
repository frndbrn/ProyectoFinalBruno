import { Link } from "react-router-dom"
import styles from './styles.module.css'
import { useState } from "react"

export default function ItemDetail ({detalles}) {

    const [valorContador, setValorContador] = useState(0)

    const sumar = () => {
        valorContador < detalles.stock && setValorContador(valorContador + 1)
      }
      const restar = () => {
        valorContador > 0 && setValorContador(valorContador - 1)
      }

    return(
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
            <div>
                <p>Cantidad a agregar: {valorContador}</p>
                <button onClick={sumar}>+</button>
                <button onClick={restar}>-</button>

            </div>
        </div>
    )
}
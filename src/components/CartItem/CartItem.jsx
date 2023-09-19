import styles from './styles.module.css'

export default function CartItem ({id, rutaImagen, nombre, artista, precio, unidades}) {


    return(
        <div>
            <img src={rutaImagen} alt={nombre} className={styles['imagenCarrito']}/>
              <h3>{nombre}</h3>
              <p>{artista}</p>
              <p>Precio: ${precio}</p>
              <p>Unidades: {unidades}</p>
        </div>

    )
}
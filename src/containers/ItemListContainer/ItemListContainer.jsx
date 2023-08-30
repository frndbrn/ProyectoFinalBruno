import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import styles from './styles.module.css'
import { Link } from 'react-router-dom'
export default function ItemListContainer() {

    const [items, setItems] = useState([])
    const [cargando, setCargando] = useState(true);
    const { id } = useParams()

    useEffect(() => {

        const filtrarProductos = (productos) => {
            const productosFiltrados = productos.filter(producto => producto.categoria == id)
            productosFiltrados.length > 0 ? subirProductos(productosFiltrados) : subirProductos(productos)

        }
        const subirProductos = (productos) => {
            setItems(productos)
        }


        const conseguirProductos = async () => {
            try {
                const respuesta = await fetch('/data/productos.json')
                const productos = await respuesta.json()
                filtrarProductos(productos)
                setCargando(false)
            } catch (error) {
                console.error('Error al cargar los productos', error)
            }
        }
        conseguirProductos()
    }, [id])

    return (
        <div>
            {
                cargando ? (<p>Cargando productos...</p>) :

                    (<div className={styles['principal']}>
                        {items.map(item =>
                            <div key={item.id} className={styles['container']}>
                                <img src={item.rutaImagen} alt="portada del disco" className={styles['foto']} />
                                <h2>{item.nombre}</h2>
                                <p>{item.artista}</p>
                                <p>${item.precio}</p>
                                <Link to={`/item/${item.id}`} className={styles['boton']}>Detalles</Link>
                            </div>


                        )}
                    </div>)

            }
        </div>


    )
}


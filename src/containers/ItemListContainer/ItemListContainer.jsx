import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import styles from './styles.module.css'
import { Link } from 'react-router-dom'
export default function ItemListContainer () {

    const [items, setItems] = useState([])
    const {id} = useParams()

    const filtrarProductos = (productos) => {
        const productosFiltrados = productos.filter(producto => producto.categoria == id)
        productosFiltrados.length > 0 ? subirProductos(productosFiltrados) : subirProductos(productos)

    }

    const conseguirProductos = async () => {
        const respuesta = await fetch('/data/productos.json')
        const productos = await respuesta.json()
        filtrarProductos(productos)
    }

    const subirProductos = (productos) => {
        console.log(productos)
        setItems(productos)
    }


    useEffect(() => {
        conseguirProductos()
    }, [id])

    return(
        <div className={styles['principal']}>
            {items.map(item => 
            <div  key={item.id} className={styles['container']}>
                <img src={item.rutaImagen} alt="" className={styles['foto']}/>
                <h2>{item.nombre}</h2>
                <p>{item.artista}</p>
                <p>${item.precio}</p>
                <Link to={`/item/${item.id}`} className={styles['boton']}>Detalles</Link>
            </div>            
                
                
                )}
        </div>
    )
}


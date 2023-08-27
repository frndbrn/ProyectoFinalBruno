import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

import styles from './styles.module.css'
export default function ItemListContainer () {

    const [items, setItems] = useState([])
    const getProductos = async () => {
        const respuesta = await fetch('/data/productos.json')
        const productos = await respuesta.json()
        setItems(productos)
    }

    useEffect(() => {
        getProductos()
    }, [])

    return(
        <div className={styles['principal']}>
            {items.map(item => 
            <div  key={item.id} className={styles['container']}>
                <img src={item.rutaImagen} alt="" className={styles['foto']}/>
                <h2>{item.nombre}</h2>
                <p>{item.artista}</p>
                <p>{item.precio}</p>
                <button className={styles['boton']}>Ver mas</button>
            </div>            
                
                
                )}
        </div>
    )
}


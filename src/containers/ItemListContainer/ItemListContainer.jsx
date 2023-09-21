import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import styles from './styles.module.css'
import { collection, getDocs } from 'firebase/firestore'
import { db } from '../../firebase/client'
import Item from '../../components/Item/Item'
export default function ItemListContainer() {


    const [items, setItems] = useState([])
    const [cargando, setCargando] = useState(true)
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

                const productosRef = collection(db, "productos")
                const data = await getDocs(productosRef)
                const dataFiltrada = data.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
                console.log(dataFiltrada)
                filtrarProductos(dataFiltrada)
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
                cargando ? 
                
                (<div className="d-flex justify-content-center">
                <div className="spinner-border" role="status">
                  <span className="sr-only">Cargando...</span>
                </div>
              </div>) 
                
                :

                    (<div className={styles['principal']}>
                        {items.map(item =>
                            <div  key={item.id} >
                                <Item id={item.id} rutaImagen={item.rutaImagen} nombre={item.nombre} artista={item.artista} precio={item.precio} stock={item.stock}/>
                            </div>
                        )}
                    </div>)

            }
        </div>


    )
}


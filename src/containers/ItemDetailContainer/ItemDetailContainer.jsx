import { useParams } from "react-router-dom"
import { useState, useEffect } from "react"
import ItemDetail from "../../components/ItemDetail/ItemDetail"
import { db } from "../../firebase/client"
import { doc, getDoc } from "firebase/firestore"


export default function ItemDetailContainer() {
    const [detalle, setDetalle] = useState({})
    const [cargando, setCargando] = useState(true)
    const { id } = useParams()
    useEffect(() => {
        const getProductos = () => {
            const productRef = doc(db, "productos", id )
            getDoc(productRef)
            .then((snapshot => {
                if (snapshot.exists()) {
                    const productosFiltrados = { id: snapshot.id, ...snapshot.data() }
                    setDetalle(productosFiltrados)
                    console.log(detalle)
                    setCargando(false)
                } else {
                    console.log('Error al cargar los detalles')
                }
            }))
                .catch((error) => {
                    console.error('Error al cargar los detalles', error)
                })
        }

        getProductos()
    }, [id])

    return (
        <div>
            {cargando ? (<p>Cargando detalles...</p>) : (<ItemDetail detalles={detalle} />)}
        </div>
    )
}


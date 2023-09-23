import { useParams } from "react-router-dom"
import { useState, useEffect } from "react"
import ItemDetail from "../../components/ItemDetail/ItemDetail"
import { db } from "../../firebase/client"
import { doc, getDoc } from "firebase/firestore"
import { mostrarAlertaError } from "../../components/Alerts/Alerts"


export default function ItemDetailContainer() {
    const [detalle, setDetalle] = useState({})
    const [cargando, setCargando] = useState(true)
    const { id } = useParams()
    useEffect(() => {
        const getProductos = () => {
            const productRef = doc(db, "productos", id)
            getDoc(productRef)
                .then((snapshot => {
                    if (snapshot.exists()) {
                        const productosFiltrados = { id: snapshot.id, ...snapshot.data() }
                        setDetalle(productosFiltrados)
                        setCargando(false)
                    } else {
                        mostrarAlertaError()
                    }
                }))
                .catch(() => {
                    mostrarAlertaError()
                })
        }

        getProductos()
    }, [id])

    return (
        <div>
            {cargando ?
                (<div className="d-flex justify-content-center">
                    <div className="spinner-border" role="status">
                        <span className="sr-only">Loading...</span>
                    </div>
                </div>) :
                (<ItemDetail detalles={detalle} id={id} />)}
        </div>
    )
}


import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import ItemDetail from "../../components/ItemDetail/ItemDetail";


export default function ItemDetailContainer() {
    const [detalle, setDetalle] = useState({})
    const [cargando, setCargando] = useState(true);
    const { id } = useParams()
    useEffect(() => {
        const getProductos = async () => {
            try {
                const respuesta = await fetch('/data/productos.json')
                const productos = await respuesta.json()
                const productosFiltrados = productos.find(producto => producto.id == id)
                setDetalle(productosFiltrados)
                setCargando(false)
            } catch (error) {
                console.error('Error al cargar los detalles', error)
            }
            

    }

        getProductos()
    }, [id])

    return (
        <div>
            { cargando ? (<p>Cargando detalles...</p> ) : (<ItemDetail detalles={detalle} />)}
        </div>
    )
}
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import ItemDetail from "../../components/ItemDetail/ItemDetail";


export default function ItemDetailContainer () {
    const [detalle, setDetalle] = useState({})
    const { id } = useParams()
    useEffect(() => {
    const getProductos = async () => {
        const respuesta = await fetch('/data/productos.json')
        const productos = await respuesta.json()

        const productosFiltrados = productos.find(producto => producto.id == id)

        setDetalle(productosFiltrados)
    }

    getProductos()
    console.log(id)
    }, [id])

    return (
        <ItemDetail detalles={detalle}/>
    )
}
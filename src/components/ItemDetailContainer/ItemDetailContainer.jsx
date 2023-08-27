import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import ItemDetail from "../ItemDetail/ItemDetail";


export default function ItemDetailContainer () {
    const [detalle, setDetalle] = useState({})
    const { id } = useParams()

    const getProductos = async () => {
        const respuesta = await fetch('/data/productos.json')
        const productos = await respuesta.json()

        const productosFiltrados = productos.find(producto => producto.categoria == id)

        productosFiltrados > 0 && setDetalle(productosFiltrados)


    }

    useEffect(() => {
        console.log(id)
    }, [id])

    return (
        <ItemDetail />
    )
}
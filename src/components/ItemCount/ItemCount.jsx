import { useState } from "react"
import { useCart } from "../CartProvider/CartProvider"

export default function ItemCount ({detalles}) {

    const [valorContador, setValorContador] = useState(1)
    const { agregarACarrito } = useCart()

    const sumar = () => {
        valorContador < detalles.stock && setValorContador(valorContador + 1)
      }
      const restar = () => {
        valorContador > 0 && setValorContador(valorContador - 1)
      }


      const handleAddToCart = () => {
          const producto = {
              id: detalles.id,
              rutaImagen: detalles.rutaImagen,
              nombre: detalles.nombre,
              artista: detalles.artista,
              precio: detalles.precio,
              stock: detalles.stock,
              unidades: valorContador
          }
          agregarACarrito(producto)
      }
    return(
        <div>
        <p>Cantidad a agregar: {valorContador}</p>
        <button onClick={sumar}>+</button>
        <button onClick={restar}>-</button>
        <button onClick={handleAddToCart}>Agregar al carrito</button>


    </div>
    )
}
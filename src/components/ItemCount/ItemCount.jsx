import { useState } from "react"

export default function ItemCount ({stock}) {

    const [valorContador, setValorContador] = useState(0)

    const sumar = () => {
        valorContador < stock && setValorContador(valorContador + 1)
      }
      const restar = () => {
        valorContador > 0 && setValorContador(valorContador - 1)
      }
    return(
        <div>
        <p>Cantidad a agregar: {valorContador}</p>
        <button onClick={sumar}>+</button>
        <button onClick={restar}>-</button>

    </div>
    )
}